import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';



const Home = (props) => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      if(name.length === 0){
        alert(`please enter a value to the username!`);
      }else{
        props.userName(name);
        navigate('/bookslist');
      }
    }
  
    return (
        <div>
            <input 
            type="text" 
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            />
            <button onClick={handleSubmit}>login</button>
        </div>
    )
}
 
export default Home;