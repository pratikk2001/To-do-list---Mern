import React from 'react'
import Create from './Create'
import { useState, useEffect } from 'react';
import axios from 'axios'



function Home() {
    const [todos,setTodos]=useState([]);

    const fetchTodos=()=>{
       
        axios.get('http://localhost:3001/get')
            .then(result => {
                console.log('Fetching todos:', result.data); // Debugging log
                setTodos(result.data);
            })
            .catch(err => console.log(err));
    }
    useEffect(()=>{
        fetchTodos();
    },[])

    return (
        <div>
            <h2>To Do List</h2>
            <Create onAdd={fetchTodos}/>
            {
                todos.length===0
                ?
                <div><h2>No record</h2></div>
                :
                todos.map((todo,index)=>(
                    
                    <div key={index}>
                        {todo.task}
                    </div>
                ))
            }
        </div>
      )
    }
    
export default Home