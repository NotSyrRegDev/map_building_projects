import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='mt-5 main_contact_form' >

    <form action="" className='container-mid' >

    <div className="action_form_div">
        <label htmlFor=""> الاسم الكامل </label>
        <input type="text" placeholder='ضع اسمك الكامل'  />
    </div>

    <div className="action_form_div">
        <label htmlFor="">  سبب التواصل </label>
        <input type="text" placeholder='ضع سبب التواصل'  />
    </div>

    <div className="action_form_div">
        <label htmlFor="">   رسالتك </label>
        <input type="text" placeholder='ضع رسالتك' style={{ minHeight: '8rem' }}  />
    </div>

    <button type="submit" className="btn btn_form"> ارسال </button>


    </form>


    </div>
  )
}

export default ContactForm