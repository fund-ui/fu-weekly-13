/**
 * 函数节流方法
 * @param Function fn 延时调用函数
 * @param Number delay 延迟多长时间
 * @return Function 延迟执行的方法
 */
var throttle = function (fn, delay) {
    var timer = null;

    return function () {
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn();
        }, delay);
    }
};
window.onresize = throttle(testFn, 200, 1000);