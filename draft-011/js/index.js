var amIAlive = setTimeout(function () {
    console.log('fff1 ' + amIAlive); // 2

    let a = 42;

    return setTimeout(function () {
        window.clearTimeout(amIAlive);
        console.log(a); // 3, the first setTimeout is still alive

        console.log('fff2 ' + amIAlive); // 4

        for (let i = 0; i < 3000; i++) {
            console.log(i); // 5
        };

        console.log('fff3 ' + amIAlive); // 6
    }, 1000);
}, 1000);

console.log('fff4 ' + amIAlive); // 1

setTimeout(function () {
    window.clearTimeout(amIAlive);
    console.log('fff5 ' + amIAlive); // 7
}, 6000);