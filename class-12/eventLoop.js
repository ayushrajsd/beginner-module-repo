console.log("starting")

setTimeout(function first(){
    console.log("timer1")
}, 10)

setTimeout(function second() {
    console.log("timer2")
}, 0)

console.log("ending")