import { useState } from "react";
import axios from "axios";

const Otp = ({ txnId, setTxnId, setPatient }) => {

    const confirmOtpUrl = "http://localhost:8090/confirm_otp";

    const [otp, setOtp] = useState('')

    const confirmOtpHandeler = async (event) => {
        event.preventDefault()
        const response = await axios.get(confirmOtpUrl, {
            params: {
                otp: otp,
                txnId: txnId
            },
            headers: {
                'Access-Control-Allow-Origin': true
            }
        })
        //   const obj = {
        //     id: response.data.id,
        //     address: response.data.address,
        //     yearOfBirth: response.data.yearOfBirth,
        //     monthOfBirth: response.data.monthOfBirth,
        //     dayOfBirth: response.data.dayOfBirth,
        //     identifiers: response.data.identifiers,
        //     gender: response.data.gender
        //   }
        setPatient(response.data)
        setTxnId(null)
    }

    return (
        <form onSubmit={confirmOtpHandeler} id='otp-form'>

            <input
                type='password'
                placeholder='OTP'
                value={otp}
                onChange={event => setOtp(event.target.value)}
                id='otp'
                required
            />

            <button type='submit' id='login-submit'>Confirm</button>
        </form>
    )
}
export default Otp;