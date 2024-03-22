const task1 = () => {
    console.log('Task 1');
}

const heavyTask = () => {
    console.log('Heavy Task started in sync manner');
    const start = Date.now();// epoch time
    while (Date.now() - start < 3000) {
        // do nothing
    }
    console.log('Heavy Task done');
}

const heavyTaskNonBlocking = () => {
    console.log('async Task skipping it for now');
    setTimeout(() => {
        console.log('Async Task done');
    }, 0);

}

const task2 = () => {
    console.log('Task 2');
}

task1();
heavyTaskNonBlocking();
task2();