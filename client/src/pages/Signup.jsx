import { useState, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, Link } from 'react-router-dom';

import { toast } from 'react-toastify'
import { TextField, Checkbox, Modal, CircularProgress } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import FadeLoop from '../components/FadeLoop'
import TOS from '../components/TOS'

import debounce from 'debounce';
import { isEmail } from '../utils/validator'
import { signupUser, isEmailAvailable } from '../api/Auth';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [emailAvailable, setEmailAvailable] = useState(null)
  const [emailLoading, setEmailLoading] = useState(false)

  const passwordValidations = [
    { 
      name: 'Password must be at least 6 characters long', 
      regex: /.{6,}/, 
      valid: false
    },
  ]

  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [passwordAllowed, setPasswordAllowed] = useState(null)

  const [terms, setTerms] = useState(false)

  const [allowCreate, setAllowCreate] = useState(false)

  const debouncedEmailCheck = debounce(async () => {
    // Check if email is valid before making API call
    if (!isEmail(email)) {
      setEmailAvailable(false);
      setEmailLoading(false);
      return;
    }

    // Check if email is available using API call
    const available = await isEmailAvailable(email);

    // Set email availability state based on API response
    setEmailAvailable(available.data.available);
    setEmailLoading(false);
  }, 500); // Debounce time

  useEffect(() => {
    if (email && email.length > 0) {
      setEmailLoading(true);
      debouncedEmailCheck();
    }
    else {
      setEmailLoading(false);
      setEmailAvailable(null);
    }
  
    // Clean up function
    return () => {
      debouncedEmailCheck.clear();
    };
  }, [email]);  

  const debouncedPasswordCheck = debounce(() => {
    const valid = passwordValidations.every((validation) => validation.regex.test(password));

    setPasswordAllowed(valid);
  }, 50); // Debounce time

  useEffect(() => {
    if (password && password.length > 0) {
      debouncedPasswordCheck();
    }
    else {
      setPasswordAllowed(null);
    }
  }, [password]);

  // Check if sign up button should be enabled
  useEffect(() => {
    if (emailLoading) {
      setAllowCreate(false);
      
      return;
    }

    if (emailAvailable === true && passwordAllowed === true && 
        rePassword === password && terms) {
      setAllowCreate(true);
    }
    else {
      setAllowCreate(false);
    }

  }, [emailAvailable, emailLoading, passwordAllowed, rePassword, terms])

  // Modal controls
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const navigate = useNavigate()

  const signupMutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      navigate('/dashboard')
    },
    onError: (error) => {
      console.log(error)
      toast.error('An error occurred', {
        toastId: error.response?.data?.message
      })
    }
  })

  const onSignUpClick = () => {
    if (signupMutation.isLoading) {
      return
    }

    signupMutation.mutate({ email, password })
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
      <Modal 
        open={open}   
        onClose={handleClose}>
          <div onClick={handleClose} className="flex justify-center items-center min-h-screen">
            <div className="bg-gray-100 w-[350px] h-[600px] rounded-[10px]
                              sm:w-[400px] sm:h-[600px] 
                              md:w-[700px] md:h-[650px] 
                              lg:w-[850px] lg:h-[700px]">
              <div className="flex justify-center relative">
                <label className="font-[outfit] font-bold text-[24px] text-black mt-3 sm:text-[24px] md:text-[50px]">
                  Terms of Service
                </label>
                <div className="absolute right-7 top-4 md:top-7">
                  <button onClick={handleClose} className="bg-[#0062FE] rounded-[8px] w-[26px] h-[26px] font-[outfit] text-white 
                                                            sm:w-[30px] sm:h-[28px] 
                                                            md:w-[40px] md:h-[38px] md:text-[20px]">X</button>
                </div>
              </div>
              <TOS />
            </div>
          </div>
      </Modal>

      <div className="flex flex-1 pt-5 pb-5 bg-white justify-center items-center">
        <div className="p-5 flex flex-col justify-center items-center md:p-0 md:w-[450px]">
          <label className="mb-2 font-[outfit] font-bold text-5xl text-black sm:text-6xl">
            Sign Up
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
            InputProps={{
              endAdornment: emailLoading ? (
                <CircularProgress size={20} />
              ) : emailAvailable === true ? (
                <CheckIcon color="success" />
              ) : emailAvailable === false ? (
                <CloseIcon color="error" />
              ) : null,
            }}
            error={emailAvailable === false}
            helperText={
              email && !emailLoading && isEmail(email) === false 
              ? 'Please enter a valid email address' : !emailLoading && isEmail(email) === true && emailAvailable === false 
              ? 'Email is already taken' : null
            }
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
            InputProps={{
              endAdornment: passwordAllowed === true ? (
                <CheckIcon color="success" />
              ) : passwordAllowed === false ? (
                <CloseIcon color="error" />
              ) : null,
            }}
            error={passwordAllowed === false}
            helperText={ password && passwordAllowed === false &&
              passwordValidations.find(validation => !validation.valid)?.name || ''
            }
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
            InputProps={{
              endAdornment: password === rePassword && rePassword ? (
                <CheckIcon color="success" />
              ) : password !== rePassword && rePassword ? (
                <CloseIcon color="error" />
              ) : null
            }}
            error={rePassword.length > 0 && password !== rePassword}
            helperText={rePassword.length > 0 && password !== rePassword ? 'Passwords do not match' : ''}
          />

          <div className='flex justify-between mt-2 w-[350px] sm:w-[450px]'>
            <div className='flex items-center'>
              <Checkbox 
                style={{ paddingLeft: "2px"}} 
                id='terms-checkbox'
                onChange={() => setTerms(!terms)}
                checked={terms}
              />
              <label className='mt-1 font-[roboto] font-[400] text-[17px] text-[#3E3D3D] select-none'>
                <label htmlFor='terms-checkbox' className='hover:cursor-pointer'>I agree to the </label>
                <span onClick={handleOpen} className='font-[roboto] font-[400] text-[17px] text-[#0062FE] 
                                                      hover:cursor-pointer hover:underline'> 
                                                      Terms of Service
                </span>
              </label>
            </div>

          </div>

          <button
            className="w-[345px] h-[40px] font-[roboto] font-[700] text-[17px] 
                      bg-[#0062FE] hover:bg-[#024dc7] disabled:bg-[#e0e0e0] transition-all duration-120 ease-in
                      text-white mt-2 rounded-[10px]
                      sm:w-[445px] sm:h-[50px]"
            disabled={!allowCreate || signupMutation.isLoading}
            onClick={onSignUpClick}>
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