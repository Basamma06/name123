function buycar(cb) {
    setTimeout(() => {
        console.log('buy a car')
        cb();
    }, 10000)
}

function planatrip(cb) {
    setTimeout(() => {
        console.log('lets go to manali')
        cb();
    },2000)
}

function reachmanali(){
    setTimeout(() =>{
        console.log('reached manali')
    }, 1000)
}

buycar(planatrip(reachmanali));