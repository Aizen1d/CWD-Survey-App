import { useState, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify'

import { TextField, Checkbox } from '@mui/material'
import FadeLoop from '../components/FadeLoop'

import { signinUser } from '../api/Auth.js'

const Login = () => { 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const navigate = useNavigate()

  const items = [
    { 
      img: '/images/Login/Survey.png', 
      maintext: 'Survey Anytime, Anywhere', 
      subtext: 'Conduct surveys without limitations with CloudWalk Digital Survey app'
    },
    { 
      img: '/images/Login/Experience.png', 
      maintext: 'Experience On-The-Go Data Collection',
      subtext: 'Embrace innovation with our user-friendly survey app' 
    },
    {
      img: '/images/Login/Simplify.png', 
      maintext: 'Simplify Your Data Journey',
      subtext: 'Effortlessly gather and analyze data with CloudWalk'
      },
  ];

  const loginMutation = useMutation({
    mutationFn: signinUser,
    onSuccess: (data) => {
      navigate('/dashboard')
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'An error occurred',{
        toastId: error.response?.data?.message
      })
    },
  })

  const validateInputs = () => {
    if (!email) {
      toast.error('Email is required.', {
        toastId: 'email-required'
      })
      return false
    }
    
    if (!password) {
      toast.error('Password is required.', {
        toastId: 'password-required'
      })
      return false
    }

    return true
  }

  const onSignInClick = () => {
    if (!validateInputs() || loginMutation.isLoading) {
      return
    }

    loginMutation.mutate({ email, password })
  } 

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 pt-5 pb-5 bg-white justify-center items-center">
        
        <div className="p-5 flex flex-col justify-center items-center md:p-0 md:w-[450px]">
          <label className="font-[outfit] font-bold text-5xl text-black sm:text-6xl">
            Welcome Back
          </label>

          <label className='font-[roboto] font-[400] text-[20px] text-[#616161]'>
            Please Enter Your Details
          </label>

          <label htmlFor="email-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
            Email 
          </label>
          <TextField 
            variant="outlined" 
            id='email-field' 
            style={{ width: '100%'}} 
            inputProps={{
              style: {
                height: "20px",
              },
            }}
            label="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
            Password 
          </label>
          <TextField 
            variant="outlined"
            id='password-field' 
            style={{ width: '100%'}} 
            inputProps={{
              style: {
                height: "20px",
              },
            }}
            type="password" 
            label="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='flex justify-between mt-2 w-[350px] sm:w-[450px]'>
            <div className='flex items-center'>
              <Checkbox 
                style={{ paddingLeft: "2px"}} 
                id='remember-checkbox'
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label htmlFor="remember-checkbox" className='mt-1 font-[roboto] font-[400] text-[17px] text-[#3E3D3D] hover:cursor-pointer select-none'>
                Remember me
              </label>
            </div>
            
            <label className='flex items-center mt-1 pr-2 font-[roboto] font-[700] text-[17px] text-[#0062FE] hover:text-[#024dc7] hover:cursor-pointer select-none'>
              Forgot Password?
            </label>
          </div>

          <button disabled={loginMutation.isLoading} onClick={onSignInClick}
            className="w-[345px] h-[40px] font-[roboto] font-[700] text-[17px] bg-[#0062FE] hover:bg-[#024dc7] text-white mt-2 rounded-[10px]
                      sm:w-[445px] sm:h-[50px]">
            Log In
          </button>

          <div className="flex justify-between mt-3 w-[250px]">
            <label className='mr-1 font-[roboto] font-[400] text-[17px] text-[#616161]'>
              Don't have an account?
            </label>
            <Link to='/signup'>
              <label className='font-[roboto] font-[700] text-[17px] text-[#0062FE] hover:text-[#024dc7] hover:cursor-pointer select-none'>
                Sign Up
              </label>
            </Link>
          </div>

          <div className="flex items-center w-full mt-4 mb-3">
            <div className="flex-1 border-t-2 border-gray-300"></div>
            <span className="px-3 font-[roboto] font-[400] text-[17px] text-[#616161] bg-white">or continue</span>
            <div className="flex-1 border-t-2 border-gray-300"></div>
          </div>

          <button 
            className="flex justify-center items-center w-[345px] h-[40px] font-[roboto] font-[700] text-[17px] bg-white hover:bg-[#f2f2f2] text-black mt-3 rounded-[10px] border border-gray-400
                        sm:w-[445px] sm:h-[50px]">
            <img className='mr-3' src="/icons/Login/Google.png" alt="" />
            <span className='mt-1 font-[roboto] font-[700] text-[17px] text-[#616161]'>
              Log in with Google
            </span>
          </button>
        </div>
      </div>

      <div className="hidden xl:flex flex-1 justify-center bg-[#0062FE] rounded-tl-[40px] rounded-bl-[40px]">
        <div className="flex flex-col justify-center items-center">
          <FadeLoop items={items}>
          </FadeLoop>
        </div>
      </div>

    </div>
  )
} 

export default Login