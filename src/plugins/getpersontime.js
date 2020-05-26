import Axios from 'axios'

function getpersontime (url, Authorization) {
  const a = Authorization.split('|')[0]
  const b = Authorization.split('|')[1]
  const headConfig = {
    headers: {
      Authorization: b,
      'Authorization-Key': a
    }
  }
  return Axios.get(url, headConfig).then(res => {
    return res.data
  }).catch(res => {
    return res.data
  })
}

export default getpersontime
