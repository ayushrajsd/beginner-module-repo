const data = []
const task1 = () => {
    console.log('Task 1');

}
const fetchResponseBlockign = () => {
    console.log("making a sync api call ")
    // mimicking an api call
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // do nothing
    }
    console.log("api call done")
    data.push({ id: 1, name: 'John' })
}

const fetchResponseNonBlocking = () => {
    console.log("making a sync api call ")
    // mimicking an api call
    setTimeout(() => {
        console.log("api call done")
        data.push({ id: 1, name: 'John' })
    },5000)
}
const fetchResponseNonBlockingCallback = (render) => {
    console.log("making a sync api call ")
    // mimicking an api call
    setTimeout(() => {
        console.log("api call done")
        data.push({ id: 1, name: 'John' })
        render()
    },5000)
}

const renderResponse = () => {
    console.log("rendering the response")
    console.log(data[0].name)
}
const task2 = () => {
    console.log('Task 2');

}
task1()
fetchResponseNonBlockingCallback(renderResponse)
task2()
// renderResponse()
