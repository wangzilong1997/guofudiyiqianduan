class Auth {
  constructor() {
    this.anthenticated = false
  }
  login(cb) {
    this.anthenticated = true
    cb()
  }
  logout(cb) {
    this.anthenticated = false
    cb()
  }

  isAnthenticated() {
    // 及其不靠谱的认证登陆方式 使用 localStorage 中的数据
    return this.anthenticated ? true : window.localStorage.getItem('userid') && true
  }
}
export default new Auth()