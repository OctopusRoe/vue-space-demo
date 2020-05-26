import Axios from 'axios'

function renewaltoken (url, Authorization) {
  const user = new FormData()
  const a = Authorization.split('|')[0]
  const b = Authorization.split('|')[1]
  user.append('ucode', a)
  user.append('token', b)
  const headConfig = {
    headers: {
      Authorization: b,
      'Authorization-Key': a
    }
  }

  return Axios.post(url, user, headConfig).then(res => {
    return res.data
  }).catch(res => {
    return res.data
  })
}

export default renewaltoken
