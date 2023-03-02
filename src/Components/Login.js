import { useState } from "react";
import generateOtp from "../Services/registration"
import axios from "axios";

const generateOtpURL = 'http://127.0.0.1:8090/generate_otp'

const Login = ({ setTxnId }) => {

    const [hid, setHid] = useState('')

    const generateOtpHandeler = async (event) => {
        event.preventDefault()
        const response = await axios.get(generateOtpURL, {
            params: {
                hid: hid
            },
            headers: {
                'Access-Control-Allow-Origin' : true
            }
          })
          setTxnId(response.data)
    }

    return (
        <form onSubmit={generateOtpHandeler} id='login-form'>
            
            <input 
                type='text'
                placeholder='your@healthid'
                value={hid}
                onChange={event => setHid(event.target.value)}
                id='hid'
                required
            />

            <button type='submit' id='id-submit'>Generate OTP</button>
        </form>
    )
}
export default Login;