import React from 'react'
import {useState}from 'react'
function Modelform(props) {
    const [name,setName]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.addName(name)
        setName(" ")
    }
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
  return (
    <div className='model-form'>
        <h3>Add Name</h3>
        <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <label htmlFor='title' className='form-label'>Title</label>
                <input
                type='text'
                id="title"
                name="title"
                value={name}
                onChange={handleNameChange}
                className='form-input'
                />
                <br/>
                <button type='submit' className='submit-button'>Add</button>
            </div>

        </form>
    </div>
  )
}
export default Modelform