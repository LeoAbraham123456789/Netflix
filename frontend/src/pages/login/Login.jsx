import './login.scss'

export const Login = () => {

  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
            <img
                className='logo'
                src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
                alt=''
            />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email or phone number'/>
                <input type='password' placeholder='Password'/>
                <button className='loginButton'>Sign In</button>
                <span>
                    New to Netflix? <b>Sign up now.</b>
                </span>
                <small>
                    This page is proteted by Google reCAPTCHA to ensure you are not a bot. <b>Learn more</b>
                </small>
            </form>
        </div>
    </div>
  )
}
