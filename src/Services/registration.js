import axios from 'axios'

const generateOtpURL = 'http://localhost:8090/generate_otp'
const confirmOtpUrl = 'http://localhost:8090/confirm_otp'

const generateOtp = async (hid) => {
  debugger
  const response = await axios.get(generateOtpURL, {
    params: {
        hid: hid
    },
    headers: {
      'Access-Control-Allow-Origin' : true
    }
  })
  debugger
  return response.data
}

const confirmOtp = async (otp, txnId) => {

  const response = await axios.get(confirmOtpUrl, {
    params: {
        otp: otp,
        txnId: txnId
    }
  })
  debugger
  return response
}
const exportObject = { generateOtp, confirmOtp }
export default exportObject
