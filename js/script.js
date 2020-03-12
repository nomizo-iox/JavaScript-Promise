let p = new Promise((resolve, reject) =>  {
    let a = 1 + 1
    if (a === 2)  {
        resolve("This value came true")
    } else {
        reject("This value came false")
    }
})

p.then((message) => {
    console.log("This is in the then " + message)
}).catch((message) => {
    console.log("This is in the catch " + message)
})