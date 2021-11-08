class Auth { 
  constructor(){
    this.anthenticated = false
  }
  login(cb){
    this.anthenticated = true
    cb()
  }
  logout(cb){
    this.anthenticated = false
    cb()
  }

  isAnthenticated(){
    return this.anthenticated
  }
}
export default new Auth()