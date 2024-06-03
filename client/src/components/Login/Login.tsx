import './Login.scss'
import patekimg from '../../assets/images/patek.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


const Login = () => {
  
  return (
    <>
      <div className='login'>
        <div className='login__wrapper'>
          <img width={500} src={patekimg} alt="" />
          <div className='login__content'>
            <p>Hello, <span>Guyss</span></p>
            <p><span>Login</span>Sign up</p>
            <form className='login__form'>
              <input type="text" placeholder='Enter your email' />
              <input type="password" placeholder='Enter Paswword' ></input>
              <button type='button'>Login</button>
            </form>
            <p className='login__or'>Or</p>
            <div className='login__social'><FcGoogle className='login__icon' /><FaFacebook className='login__icon' />
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <GoogleLogin
        useOneTap
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login