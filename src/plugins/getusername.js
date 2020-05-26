import Axios from 'axios'

function getusername (url, Authorization, usercode) {
  const headConfig = {
    headers: {
      Authorization: Authorization,
      'Authorization-Key': usercode
    }
  }
  return Axios.get(url, headConfig).then(res => {
    return res.data
  })
}

export default getusername
