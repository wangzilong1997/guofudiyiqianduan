// eslint-disable-next-line
/**
 * 深拷贝函数
 * @param {*} obj 
 * @returns 
 */
export function deepclone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  let result
  if (obj instanceof Array) {
    result = []
  }
  if (obj instanceof Object) {
    result = {}
  }

  for (let key in result) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepclone(obj[key])
    }
  }

  return result

}
// eslint-disable-next-line
/** 转化为所需的时间格式
 * @param data 
 */
export function transformtime(date) {
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  var d = date.getDate()
  d = d < 10 ? '0' + d : d
  var h = date.getHours()
  h = h < 10 ? '0' + h : h
  var minute = date.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  var second = date.getSeconds()
  second = second < 10 ? '0' + second : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}

// eslint-disable-next-line
/**
 * 防抖函数
 * @param {*} fn 
 * @param {*} wait 
 * @returns 
 */
export function debounce(fn, wait = 1000) {
  console.log('f防抖函数执行')
  let timer = null
  return function debounce(...args) {
    timer && clearTimeout(timer)

    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, wait)
  }
}

export function getList(page = 1, userid = window.localStorage.getItem('userid'), type = 'hy') {

  return

}
