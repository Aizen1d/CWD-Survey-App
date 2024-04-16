import { useState, useEffect, useRef, useCallback } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, Link } from 'react-router-dom';

import { toast } from 'react-toastify'
import { 
  TextField, 
  FormControl, 
  InputLabel,
  Select, 
  MenuItem,
  Tabs,
  Tab,
  CircularProgress 
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SignatureCanvas from 'react-signature-canvas';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import FadeLoop from '../../components/FadeLoop'

const Setup = () => {
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

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState(null)
  const [contactNumber, setContactNumber] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')

  // Signature Container
  const [signatureTabIndex, setSignatureTabIndex] = useState(0)

  // Signature Canvas Resources
  const sigCanvas = useRef(null);
  const parentCanvasRef = useRef();
  const [signatureCanvas, setSignatureCanvas] = useState(null);

  // Signature File Upload Resources
  const [signatureFile, setSignatureFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null); // File URL for preview

  const [allowSubmit, setAllowSubmit] = useState(false)

  const contactNumberChange = (value) => {
    setContactNumber(value)
  }

  // Signature Canvas Methods
  const signatureTabIndexChange = (event, newValue) => {
    setSignatureTabIndex(newValue);
  }

  // Draw Signature Methods
  const clear = () => {
    sigCanvas.current.clear();
    setSignatureCanvas(null);
  }

  const save = () => {
    const trimmedCanvas = sigCanvas.current.getTrimmedCanvas();
    const url = trimmedCanvas.toDataURL('image/png');

    setSignatureCanvas(url);
  };

  const getSignatureCanvas = () => {
    const trimmedCanvas = sigCanvas.current.getTrimmedCanvas();
    const url = trimmedCanvas.toDataURL('image/png');

    if (sigCanvas.current.isEmpty()) {
      return null;
    }
    return url;
  }

  // This useEffect is used to resize the canvas base on the parent container
  useEffect(() => {
    if (sigCanvas.current && parentCanvasRef.current) {
      const canvas = sigCanvas.current.getCanvas();
      canvas.width = parentCanvasRef.current.offsetWidth;
      canvas.height = parentCanvasRef.current.offsetHeight;
    }
  }, [sigCanvas, parentCanvasRef, signatureTabIndex]);
  

  // File Input Methods
  const checkFileSize = (file) => {
    const maxFileSize = 2 * 1024 * 1024;
    const mbformat = maxFileSize / (1024 * 1024);

    if (file.size > maxFileSize) {
      toast.error(`File size exceeds ${mbformat.toFixed(2)}mb`)
      return false;
    }

    return true;
  }

  const onDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (checkFileSize(file)) {
      toast.success('File uploaded successfully')
      setSignatureFile(file);
    }

  }, []);

  const onFileChange = (event) => {
    const file = event.target.files[0]

    if (checkFileSize(file)) {
      toast.success('File uploaded successfully')
      setSignatureFile(file);
      previewFile(file);
    }
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
        const blob = new Blob([new Uint8Array(reader.result)], { type: file.type });
        const url = URL.createObjectURL(blob);
        setFileUrl(url);
    };
  };

  const openInNewTab = () => {
      if (fileUrl) {
          window.open(fileUrl, '_blank');
      }
  };

  const removeSignatureFile = () => {
    setSignatureFile(null);
  }

  useEffect(() =>  {
    if (firstName && lastName && birthday && contactNumber && 
        gender && address && (signatureCanvas !== null || signatureFile)) {
      setAllowSubmit(true);
    }
    else {
      setAllowSubmit(false);
    }
  })

  const handleSubmitClick = () => {
    const data = getSignatureCanvas();
    console.log(data);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 pt-5 pb-5 bg-white justify-center items-center">
        <div className="p-5 flex flex-col justify-center items-center md:p-0 md:w-[600px]">
          <label className="mb-2 font-[outfit] font-bold text-3xl text-black sm:text-4xl">
            Welcome to CWD Survey App
           </label>

          <label className='font-[roboto] font-[400] text-[20px] text-[#616161]'>
            Tell us about yourself  
          </label>

          <div className="flex flex-row w-full space-x-5">
            <div className="flex flex-col w-full">
              <label htmlFor="email-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
                First Name 
              </label>
              <TextField 
                variant="outlined" 
                id='firstname-field' 
                style={{ width: '100%'}} 
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                label="Enter your first name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
                Last Name 
              </label>
              <TextField 
                variant="outlined" 
                id='firstname-field' 
                style={{ width: '100%'}} 
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                label="Enter your last name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-row w-full space-x-5">
            <div className="flex flex-col w-full">
              <label htmlFor="email-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
                Birthday 
              </label>
              <DatePicker
                label="Select your birthday (MM/DD/YYYY)"
                value={birthday}
                onChange={setBirthday}
              />
            </div>
          </div>
          
          <div className="flex flex-row w-full space-x-5">
            <div className="flex flex-col w-full">
              <label htmlFor="email-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
                Contact Number 
              </label>
              
              <PhoneInput
                inputProps={{
                  style: {
                    width: "100%",
                    height: "60px",
                  },
                }}
                placeholder='Enter your contact number'
                country={'ph'}
                value={contactNumber}
                onChange={contactNumberChange}
              />
            </div>
          </div>

          <div className="flex flex-row w-full space-x-5">
            <div className="flex flex-col w-full">
              <label htmlFor="email-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
                Gender
              </label>
              <FormControl variant="outlined" style={{ width: '100%'}}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  label="Gender"
                  value={gender}
                  inputProps={{
                    style: {
                      height: "20px",
                    },
                  }}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
                Address
              </label>
              <TextField 
                variant="outlined" 
                id='firstname-field' 
                style={{ width: '100%'}} 
                inputProps={{
                  style: {
                    height: "22px",
                  },
                }}
                label="Enter your address" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col w-full">
            <label htmlFor="email-field" className='self-start mt-3 mb-2 font-[roboto] font-[400] text-[17px] text-[#3E3D3D]'>
              Signature
            </label>
            <div className="flex justify-center rounded-[3px] outline outline-1 outline-[#C7C7C7]">
              {signatureTabIndex === 0 &&
                <div className="flex justify-center items-center mr-[100px]">
                  <button 
                    className="bg-white font-[outfit] font-bold text-[20px] text-gray-500 py-1 px-3 rounded" 
                    onClick={clear}>
                    Clear
                  </button>
                </div>
              }
              <Tabs 
                value={signatureTabIndex} 
                onChange={signatureTabIndexChange}
                textColor="inherit"
                TabIndicatorProps={{
                  sx: {
                    height: '5px', 
                    backgroundColor: '#0062FE',
                  },
                }}
                >
                <Tab 
                  label="Draw"
                  sx={{
                    textTransform: 'capitalize',
                    fontFamily: 'Outfit',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#3E3C3C',
                    marginRight: '100px',
                  }}
                />
                <Tab 
                  label="Upload"
                  sx={{
                    textTransform: 'capitalize',
                    fontFamily: 'Outfit',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#3E3C3C',
                  }}
                />
              </Tabs>
            </div>
            {signatureTabIndex === 0 && 
              <div className="flex h-36 outline outline-1 outline-[#C7C7C7]">
                  <div className="w-full cursor-pointer bg-[#F8F8F8]" ref={parentCanvasRef}>
                      <SignatureCanvas 
                        ref={sigCanvas}
                        canvasProps={{ width: '100%', height: '100%' }}
                        onBegin={save}
                      />
                  </div>
              </div>
            }
            {signatureTabIndex === 1 && (
              signatureFile ? (
              <div className="flex justify-center items-center h-36 bg-[#F8F8F8] outline outline-1 outline-[#C7C7C7]">
                <div className="flex flex-row justify-center items-center space-x-3">
                  <span 
                    className="font-[roboto] font-[400] text-lg text-ellipsis hover:underline hover:cursor-pointer" 
                    onClick={openInNewTab}>
                    {signatureFile.name}
                  </span>
                  <button className="rounded-md p-[2px] bg-red-500" onClick={removeSignatureFile}>
                    <CloseIcon style={{ color: 'white' }} />
                  </button>
                </div>
              </div>
              ) : (
              <div 
                className="flex justify-center items-center h-36 bg-[#F8F8F8] outline outline-1 outline-[#C7C7C7]"
                onDrop={onDrop}
                onDragOver={onDragOver}
              >
                <div className="flex flex-col justify-center items-center">
                  <img 
                      className="w-[60px] h-[50px]"
                      src="/icons/Setup/UploadImage.png" 
                      alt="" 
                    />
                  <label 
                    htmlFor="file-upload" 
                    className="font-[roboto] font-[400] text-[14px] text-[#3E3C3C] cursor-pointer hover:underline">
                    Click or Drag to upload (2mb max)
                  </label>
                  <input 
                    className="sr-only"
                    id="file-upload" 
                    type="file"
                    accept="image/*"
                    onChange={onFileChange}
                  />
                </div>
              </div>
              )
            )} 
            <div className="flex justify-center font-[roboto] font-[400] text-[15px] text-[#616161] mt-1">
              <label htmlFor="">
                We will never share your information with anyone else.
              </label>
            </div>
            <div className="w-full">
              <button
                onClick={handleSubmitClick}
                disabled={!allowSubmit}
                className="w-full h-[40px] font-[roboto] font-[700] text-[17px] bg-[#0062FE] hover:bg-[#024dc7] disabled:bg-[#e0e0e0]
                         text-white mt-2 rounded-[10px]
                          sm:w-full sm:h-[50px]">
                Submit
              </button>
            </div>
            <div className="w-full">
              <button
                className="w-full h-[40px] font-[roboto] font-[700] text-[17px] bg-white hover:bg-gray-100 text-black mt-3 rounded-[10px] outline outline-1 outline-black
                          sm:w-full sm:h-[50px]">
                Back
              </button>
            </div>
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

export default Setup