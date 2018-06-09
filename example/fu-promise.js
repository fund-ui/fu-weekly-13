let fu_ajax = function (name) {
    return new Promise((resolve, reject) => {
        let time = new Date();
        console.log(name)
        setTimeout(() => {
            resolve(time)
        }, 5000);
    });
};

fu_ajax('Dengdeng')
    .then(
        function (time) {
            console.log('i am promise, i am from ' + time);
        },
        function (reason) {
            console.log('erro', reason);
        }
    )



