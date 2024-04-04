import { TextField, Checkbox, Divider } from '@mui/material'

const Login = () => { 
  return (
    <div className="flex flex-col h-screen sm:flex-row">
      <div className="flex-1 bg-white">
        
        <div className="flex flex-col justify-center items-center mt-48 w-[450px] mx-auto">
          <label className="font-[outfit] font-bold text-6xl text-black">
            Welcome Back
          </label>

          <label className='font-[roboto] font-[400] text-[20px] text-[#616161]'>
            Please Enter Your Details
          </label>

          <label htmlFor="email-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
            Email 
          </label>
          <TextField 
            id='email-field' 
            style={{ width: '100%'}} 
            inputProps={{
              style: {
                height: "20px",
              },
            }}
            label="Enter your email" 
            variant="outlined" 
          />

          <label htmlFor="password-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
            Password 
          </label>
          <TextField 
            id='password-field' 
            style={{ width: '100%'}} 
            inputProps={{
              style: {
                height: "20px",
              },
            }}
            type="password" 
            label="Enter your password" 
            variant="outlined"
          />

          <div className='flex justify-between mt-2 w-[450px]'>
            <div className='flex items-center'>
              <Checkbox 
                style={{ paddingLeft: "2px"}} 
                id='remember-checkbox'
              />
              <label htmlFor="remember-checkbox" className='mt-1 font-[roboto] font-[400] text-[17px] text-[#3E3D3D] hover:cursor-pointer select-none'>
                Remember me
              </label>
            </div>
            
            <label className='flex items-center mt-1 pr-2 font-[roboto] font-[700] text-[17px] text-[#0062FE] hover:text-[#024dc7] hover:cursor-pointer select-none'>
              Forgot Password?
            </label>
          </div>

          <button 
            className="w-[445px] h-[50px] font-[roboto] font-[700] text-[17px] bg-[#0062FE] hover:bg-[#024dc7] text-white mt-2 rounded-[10px]">
            Log In
          </button>

          <div className="flex justify-between mt-3 w-[250px]">
            <label className='font-[roboto] font-[400] text-[17px] text-[#616161]'>
              Don't have an account?
            </label>
            <label className='font-[roboto] font-[700] text-[17px] text-[#0062FE] hover:text-[#024dc7] hover:cursor-pointer select-none'>
              Sign Up
            </label>
          </div>

          <div class="flex items-center w-full mt-4 mb-3">
            <div class="flex-1 border-t-2 border-gray-300"></div>
            <span class="px-3 font-[roboto] font-[400] text-[17px] text-[#616161] bg-white">or continue</span>
            <div class="flex-1 border-t-2 border-gray-300"></div>
          </div>

          <button 
            className="flex justify-center items-center w-[445px] h-[50px] font-[roboto] font-[700] text-[17px] bg-white hover:bg-[#f2f2f2] text-black mt-3 rounded-[10px] border border-gray-400">
            <img className='mr-3' src="/icons/Login/Google.png" alt="" />
            <span className='mt-1 font-[roboto] font-[700] text-[17px] text-[#616161]'>
              Log in with Google
            </span>
          </button>

        </div>
      </div>

      <div className="flex-1 bg-[#0062FE]">

      </div>
    </div>
    
  )
} 

export default Login