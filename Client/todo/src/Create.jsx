import React, { useState , useEffect } from 'react';
import axios from 'axios';

function Create({onAdd}) {
    const [task, setTask] = useState();

    const handelAdd = () => {
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => {
                console.log('Task added:', result.data);
                setTask(''); 
                onAdd();  
  
    })
    .catch(err => console.log(err))

   

}
    return (
        <div>
            <input type='text' placeholder='enter task' onChange={(e) => setTask(e.target.value)} />
            <button type='button' onClick={handelAdd}>add</button>
        </div>
    )
}

export default Create
