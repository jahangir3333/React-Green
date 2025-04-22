import React from 'react'

function Contact() {
  return (
    <>
    <div className="contact" style={{textAlign:'center', display:'flex', flexDirection:'column', justifySelf:'center'}}>
    <h1>Form to Contact Us</h1>
    <form action="" method='post' style={{border:'1px solid cyan',width:'200px', padding:'40px'}}>
    <input type="text" name='name' /><br /><br />
    <input type="email" name='email' /><br /><br />
    <input type="password" name='pass' /><br /><br />
    <select name='city'>
      <option value="Indore">Indore</option>
      <option value="Ujjain">Ujjain</option>
    </select><br /><br />
    <input type="radio" name='gender' value='Male'/><label htmlFor="male">Male</label><br /><br />
    <input type="radio" name='gender' value='Female' /><label htmlFor="female">Female</label><br /><br />
    <textarea name="message" id="textmessage" rows='6' cols='10'></textarea><br /><br />
    <input type="submit" value='Submit Query' />

    </form>
    </div>
    </>
  )
}

export default Contact