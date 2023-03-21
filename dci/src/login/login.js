import { Button, FormControlLabel, TextField } from '@material-ui/core'
import { Checkbox, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { Component } from 'react'

export class LoginPage extends Component {
    
    render() {
        return (
            <>
                <div className='flex flex-row h-screen'>
                    <div className='basis-2/3 flex justify-center itemsc flex-col gap-3  px-[12.5%] sm:px-[15%] lg:px-[20%] 2xl:px-[25%]'>
                        <div className='text-[3em] text-cyan-500 text-center'>DCI</div>
                        <TextField label='Enter your id ...' variant='outlined' size='small' />
                        <div className='flex justify-between'>

                            <FormControlLabel control={<Checkbox defaultChecked size = 'small'/>} label ={<span className='text-[12px]'>Remember me</span>} />

                            <a href='#' className='flex items-center text-[12px] text-black'>Forgot Password ?</a>
                            
                        </div>
                            <Button variant="contained" color='primary' onClick={login}>เข้าสู่ระบบ</Button>
                    </div>
                    <div className='basis-1/3 bg-cyan-500 text-white flex justify-center items-center'>
                        WELCOME TO DCI
                    </div>
                </div>
            </>
        )
    }
}
function login(){
    userId = '41256';
    axios.post('http://dciweb2.dci.daikin.co.jp/imsmasterapi/user/login/' + userId).then(res=>{
        console.log(res);
    })
  }
export default LoginPage
