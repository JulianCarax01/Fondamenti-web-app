import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Signup() {

const [inputs, setInputs] = useState({firstName: '', lastName: '', username: '', password:'', gender:'', birthday:''});
const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/api/users/signup', inputs)
      .then((response) => {
        console.log(response.data);
        // Esegui azioni dopo la registrazione
        navigate('/login'); // Reindirizza l'utente alla pagina di login
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          const { message } = error.response.data;
          alert(message);
          navigate('/signup'); // Reindirizza l'utente alla pagina di signup
        } else {
          console.error(error);
          // Gestisci altri errori
        }
      })

}

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      };

      
    return (
        <div>
          <h2>Let's get started!</h2>
          <p>* Indicates a required field</p>
          <form onSubmit={handleSubmit}>
            <label> * First Name: </label>
            <input type="text" id="firstName" name="firstName" value={inputs.firstName} onChange={handleChange} required /><br />
    
            <label> * Last Name: </label>
            <input type="text" id="lastName" name="lastName" value={inputs.lastName} onChange={handleChange} required /><br />
    
            <label> * Username: </label>
            <input type="text" id="username" name="username" value={inputs.username} onChange={handleChange} required /><br />
    
            <label> * Password: </label>
            <input type="text" id="password" name="password" value={inputs.password} onChange={handleChange} required /><br />
    
            <label> Gender: </label>
            <select name="gender" value={inputs.gender} onChange={handleChange}>
              <option value="">--Choose an option--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="notsay">I prefer not to say</option>
            </select><br />
    
            <label> Birthday: </label>
            <input type="date" id="birthday" name="birthday" value={inputs.birthday} onChange={handleChange}/><br />
            
             <button type="submit">Join</button>
          </form>
        </div>
      );
}