import React , {useContext, useState} from 'react'

const LoginComponent = () => {

    
  

    const [email , setEmail] = useState('');

    const [password , setPassword] = useState('');

    
  const [error , setError] = useState('');

  const adminLogin = () => {

    if (email === 'sahla-admin@gmail.com' && password === 'tbspfsahlaapp' ) {
        localStorage.setItem('allowed_sahla_admin' , '5e6db825e9e5cf011a3fc7449c61124e');
        window.location.reload();
    }
    else {
        setError(' خطأ في الدخولْ ')
    }
  }

  
  

  return (
    <div>

    
    
    {error && (
                            <>
                            <h1 className="my-1 error_headline"> {error} </h1>
                            </>
                        )}

    <div className="action_div">

<label htmlFor="email" className="label_form">الايميل <span className="star_required">*</span> </label>
<input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value) } placeholder='ادخل الايميل الخاص بك' className="input_form" />
    
</div>

<div className="action_div">

<label htmlFor="password" className="label_form">كلمة المرور <span className="star_required">*</span> </label>
<input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value) } placeholder='ادخل كلمة المرور الخاصة بك' className="input_form" />
    
</div>



<button className="mt-3 w-100 text-center btn sahla_btn" onClick={() => adminLogin() } >تسجيل الدخول</button>

    </div>
  )
}

export default LoginComponent