/**
 * 方法-设置cookie
 * @param {String} name cookie名称;
 * @param {String} value cookie值
 * @param {Int} day cookie过期时间
 */
var setCookie = function (name, value, day) {
  if (day !== 0) { // 当时间为0，则表示无过期时间，浏览器关闭cookie则删除
    var expires = day * 24 * 60 * 60 * 1000
    var date = new Date(+new Date() + expires)
    document.cookie = name + '=' + escape(value) + ';expires=' + date.toUTCString
  } else {
    document.cookie = name + '=' + escape(value)
  }
}

setCookie('name', 'Dengdeng', 200)
