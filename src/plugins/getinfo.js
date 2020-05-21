import Axios from 'axios'

function getinfo (url, Authorization) {
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

export default getinfo
