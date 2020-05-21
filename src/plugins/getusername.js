import Axios from 'axios'

function getusername (url, Authorization) {
  const headConfig = {
    headers: {
      Authorization: Authorization
    }
  }
  return Axios.get(url, headConfig).then(res => {
    return res.data
  })
}

export default getusername
