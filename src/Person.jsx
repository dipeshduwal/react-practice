import { useState } from 'react'

export default function Person() {
    const [person, setPerson] = useState('');
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName] = useState('');
    
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setPerson(e.target.value + ' ' +lastName);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
        setPerson(firstName + ' ' + e.target.value)
    }

    return (
      <>
        <h1>
        <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{person}</b>
      </p>
        </h1>
      </>
    );
  }
  
