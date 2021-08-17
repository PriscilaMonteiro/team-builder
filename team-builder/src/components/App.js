import '../App.css';
import React, { useState, useEffect } from 'react';
import Team from './Team';
import TeamForm from './TeamForm';
import axios from '../axios';

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}


export default function App() {
  const [team, setTeam] = useState(initialFormValues);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...setFormValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      setError("You've gotta fill out all the fields");
      return;
    }

    axios.post('fakeapi.com', newTeamMember)
      .then(res => {
        setTeam([res.data, ...team]);
        setFormValues(initialFormValues);
        setError("");
      })
      .catch(err => console.error(err));

  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeam(res.data))
  }, [])



  return (
    <div className='container'>
      <h1>Team Builder</h1>
      <h3 className="error">{error}</h3>
      <TeamForm
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of FriendForm
        //  to see what props it expects.
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {/* 
        const props = {values: formValues, update: updateForm, submit: submitForm}
      
        TeamForm(props) 
      */}

      {
        team.map(member => {
          return (
            <Team key={member.id} details={member} />
          )
        })
      }

      
    </div>
  )
}