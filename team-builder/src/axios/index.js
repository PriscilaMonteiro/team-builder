import { v4 as uuid } from 'uuid'


const initialTeamList = [
  { 
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Austen Allred', 
    role: 'Founder & CEO', 
    email: 'austen@lambda.com' 
  },
  { 
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Chris Atoki', 
    role: 'Instructor', 
    email: 'chris@lambda.com' 
  },
  { 
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Brit hemming', 
    role: 'Instructor', 
    email: 'brit@lambda.com' 
  },
  { 
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Priscila Monteiro', 
    role: 'Student', 
    email: 'priscila@lambda.com' 
  },
]

// let's simulate axios for GET and POST

export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { name, email, role }) {
    const newTeamMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}
