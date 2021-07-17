// eslint-disable-next-line
export function deepclone(obj = {}){
    if(typeof obj !== 'object' || obj == null){
        return obj
    }

    let result 
    if(obj instanceof Array){
        result = []
    }
    if(obj instanceof Object){
        result = {}
    }

    for(let key in result) {
        if(obj.hasOwnProperty(key)){
            result[key] = deepclone(obj[key])
        }
    }

    return result

}
// eslint-disable-next-line
export function transformtime(date){
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

