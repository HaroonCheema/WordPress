// npm install emailjs-com --save
// and import here
import emailjs from 'emailjs-com';
import React from 'react';

export default function Email() {
  // onsubmit method
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // servise-Id
        'service_djw0qxm',
        // template-Name
        'template_dt5f1lv',
        e.target,
        // user-Id
        'user_CTG39jK1NlCiFdAANgJJF'
      )
      .then(
        (result) => {
          // console success message
          console.log(result.text);
        },
        (error) => {
          // console error message
          console.log(error.text);
        }
      );
    // after form submit reset auto all fields
    e.target.reset();
  };

  return (
    <>
      <div className='container my-5 shadow rounded'>
        <form onSubmit={sendEmail}>
          <div className='row pt-5 mx-auto'>
            <div className='col-8 form-group mx-auto'>
              <input
                type='text'
                className='form-control shadow-sm'
                placeholder='Enter Name'
                name='name'
                required
              />
            </div>
            <div className='col-8 pt-2 form-group mx-auto'>
              <input
                type='email'
                className='form-control shadow-sm'
                placeholder='Enter Email'
                name='email'
                required
              />
            </div>
            <div className='col-8 pt-2 form-group mx-auto '>
              <textarea
                type='text'
                className='form-control shadow-sm'
                cols='30'
                rows='8'
                placeholder='Enter Message...!'
                name='message'
                required
              />
            </div>
            <div className='col-8 pt-3 mx-auto'>
              <center>
                <input
                  type='submit'
                  className='btn btn-info mb-5 shadow'
                  value='Send'
                />
              </center>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
