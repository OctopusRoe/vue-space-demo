import Axios from 'axios'

function getchildtoken (url, ucode, token, subCode) {
  /*
    此方法接收两个参数
    url：String 需要访问的地址
    UserInfo：UserObject 需要上传的用户资料

    返回promise对象，用then()方法和catch()方法调用返回的数据
  */

  const user = {}
  const headConfig = {
    headers: {
      Authorization: token
    }
  }
  // const head = { Authorization: userInfo.Authorization, token: userInfo.Authorization }
  // const test = JSON.stringify(head)
  const queryUrl = url + `?ucode=${ucode}&token=${token}&subCode=${subCode}`
  return Axios.post(queryUrl, user, headConfig).then(res => {
    return res.data
  }).catch(res => {
    return res.data
  })
}

export default getchildtoken
