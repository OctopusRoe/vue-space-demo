import Axios from 'axios'

function renewaltoken (url, Authorization) {
  const a = Authorization.split('|')[0]
  const b = Authorization.split('|')[1]
  const headConfig = {
    headers: {
      Authorization: b
    }
  }
  const queryUrl = url + `?ucode=${a}&token=${b}`
  return Axios.get(queryUrl, headConfig).then(res => {
    return res.data
  }).catch(res => {
    return res.data
  })
}

export default renewaltoken
