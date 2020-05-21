import Axios from 'axios'

function checkUser (url, userInfo) {
  /*
    此方法接收两个参数
    url：String 需要访问的地址
    UserInfo：UserObject 需要上传的用户资料

    返回promise对象，用then()方法和catch()方法调用返回的数据
  */

  const user = new FormData()
  user.append('uname', '')
  user.append('password', '')
  const headConfig = {
    headers: {
      Authorization: userInfo.Authorization
    }
  }
  // const head = { Authorization: userInfo.Authorization, token: userInfo.Authorization }
  // const test = JSON.stringify(head)
  const queryUrl = url + `?uname=${userInfo.userName}&password=${userInfo.passWord}`
  return Axios.post(queryUrl, user, headConfig).then(res => {
    return res.data
  }).catch(res => {
    return res.data
  })
}

export default checkUser
