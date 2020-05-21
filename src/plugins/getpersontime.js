import Axios from 'axios'

function getpersontime (url, Authorization) {
  const headConfig = {
    headers: {
      Authorization: Authorization
    }
  }
  return Axios.get(url, headConfig).then(res => {
    return res.data
  }).catch(res => {
    return res.data
  })
}

export default getpersontime
