import {  Button, TextField, Typography } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Box } from '@mui/system'
import React from 'react'
import './style.css'
import FormGroup from '@mui/material/FormGroup'
import Uintpoins from '../paymnets/Uintpoins'
import { Navigate } from 'react-router-dom'

const paymentResturn =() => {
   <Navigate to='/unitpoins' />
}

function Userform() {
  return (
    <div className='invest-container'>
        <Box className='invest-box'>
            <Typography
            sx={{
              textAlign: 'center',
              color: '#60523A',
              fontWeight: 'bold',
              fontFamily: 'cursive'
            }}
            variant='h4'>I want to Invest</Typography>
            <Typography variant='subtitle2'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</Typography>
        
        <Box component='form' >
        <TextField sx={{width:'100%'}}  label="Name" variant="standard" />
        <TextField sx={{width:'100%'}} type='textarea'  label="Address" variant="standard" />
            <Box >
        
                <TextField sx={{width:'68%', mr: 2}} id="standard-basic" label="City" variant="standard" />
                <TextField sx={{width:'29%'}} id="standard-basic" label="Postcode" variant="standard" />
            </Box>
        <TextField sx={{width:'100%'}}  label="Contact Number" variant="standard" />   
        <TextField sx={{width:'100%'}}  label="E-mail" variant="standard" /> 
           
            <TextField
          select
          defaultValue="Business"
          SelectProps={{
            native: true,
          }}
          variant="standard"
          sx={{width:'100%', mt:2}}
        >
          <option>Business</option>
          <option>Employee</option>
        </TextField>  
        
        <Box>
                <TextField sx={{width:'30%' , mr:2}}  label="Company Name" variant="standard" />
                <TextField sx={{width:'30%', mr:2}}  label="Occupation" variant="standard" />
                <TextField sx={{width:'30%' , mr:2}} onChange={(e) => console.log(e.target.value)} label="Salary per annum" variant="standard" />
            </Box>
          
        <FormControlLabel control={<Checkbox />}  onChange={e => console.log(e.target.checked)} label="I want to Invest" style={{color:'red'}} />
        
        <br />
        <button style={{
          background : 'transparent',
          color : 'black',
        }} variant="contained"
        onClick={paymentResturn}
        >Submit</button>
      
        </Box>
        </Box>
    </div>
  )
}

export default Userform