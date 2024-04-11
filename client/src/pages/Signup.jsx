import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify'

import { TextField, Checkbox } from '@mui/material'

import FadeLoop from '../components/FadeLoop'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [terms, setTerms] = useState(false)

  const navigate = useNavigate()

  const onSignUpClick = () => {
    if (password !== rePassword) {
      toast.error('Passwords do not match', {
        toastId: 'password-mismatch'
      })
      return
    }
  }
    
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

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 pt-5 pb-5 bg-white justify-center items-center">
        
        <div className="p-5 flex flex-col justify-center items-center md:p-0 md:w-[450px]">
          <label className="mb-2 font-[outfit] font-bold text-5xl text-black sm:text-6xl">
            Sign up
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

          <label htmlFor="password-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
            Re-enter Password 
          </label>
          <TextField 
            variant="outlined"
            id='re-password-field' 
            style={{ width: '100%'}} 
            inputProps={{
              style: {
                height: "20px",
              },
            }}
            type="password" 
            label="Re-enter your password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />

          <div className='flex justify-between mt-2 w-[350px] sm:w-[450px]'>
            <div className='flex items-center'>
              <Checkbox 
                style={{ paddingLeft: "2px"}} 
                id='terms-checkbox'
                onChange={() => setTerms(!terms)}
                checked={terms}
              />
              <label htmlFor="terms-checkbox" className='mt-1 font-[roboto] font-[400] text-[17px] text-[#3E3D3D] select-none'>
                <span>I agree to the </span>
                <Link to='/terms-of-service'>
                  <span className='font-[roboto] font-[400] text-[17px] text-[#0062FE] hover:cursor-pointer hover:underline'> Terms of Service</span>
                </Link>
                <span> and </span>
                <Link to='/privacy-policy'>
                  <span className='font-[roboto] font-[400] text-[17px] text-[#0062FE] hover:cursor-pointer hover:underline'> Privacy Policy.</span>
                </Link>
              </label>
            </div>

          </div>

          <button
            className="w-[345px] h-[40px] font-[roboto] font-[700] text-[17px] bg-[#0062FE] hover:bg-[#024dc7] text-white mt-2 rounded-[10px]
                      sm:w-[445px] sm:h-[50px]">
            Create Account
          </button>

          <div className="flex justify-between mt-3 w-[250px]">
            <label className='font-[roboto] font-[400] text-[17px] text-[#616161]'>
              Already have an account?
            </label>
            <Link to='/login'>
              <label className='font-[roboto] font-[700] text-[17px] text-[#0062FE] hover:text-[#024dc7] hover:cursor-pointer select-none'>
                Log In
              </label>
            </Link>
          </div>
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

export default Signup