import React, { useState } from 'react'

const Step1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 

    Object.keys(formData).forEach((key) => {
        
    })
  }

  return (
    <div className='step_container flex_start'>
        <div className='title_block'>
            <h2 className='title'>Personal info</h2>
            <p className='description'>Please provide your name, email, address, and phone number.</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='inputs_block'>
                <label htmlFor="name">
                    Name
                    <input type="text" id='name' name='name' placeholder='e.g. Stephen King' onChange={handleChange}/>
                </label>
                <label htmlFor="email">
                    Email Address
                    <input type='email' id='email' name='email' placeholder='e.g. stephenking@lorem.com' onChange={handleChange}/>
                </label>
                <label htmlFor="tel">
                    Phone Number
                    <input type="tel" id='tel' name='tel' placeholder='e.g. +1 234 567 890' onChange={handleChange}/>
                </label>
            </div>
            <button type='submit'>Next step</button>
        </form>
    </div>
  )
}

export default Step1