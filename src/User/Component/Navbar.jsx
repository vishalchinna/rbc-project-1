import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Userform from '../Pages/Userform' 
import './style.css' 


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,  
  boxShadow: 24,
  p: 4,
};


function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className='header-container'>
        <img src='/headerlogo.jpg' alt="logo" />
        <div className='header-links'>
            <button className='header-btn' >Home</button>
            <button className='header-btn' >About US</button>
            

            <div>
              <button className='invest header-btn' onClick={handleOpen}>I want to Invest</button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Userform />
                </Box>
              </Modal>
            </div>

      </div>
    </div>
  )
}

export default Navbar