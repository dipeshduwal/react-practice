function FirstName() {
    const [value, setValue] = useState("");
  
    return (
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

    );
  }

  function LastName() {
    const [value, setValue] = useState("");
  
    return (
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

    );
  }

export default function Person() {
    const [person, setPerson] = useState({ fullname , age });
    
    const handleName = () => {
        setName((fullname) => ({ ...fullname, name: {FirstName} + {LastName}}));
    };

    return (
      <>
        <h1>{person.fullname}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }
  
