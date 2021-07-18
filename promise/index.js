const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey everything is OK!");
        } else {
            const error = new Error("There is an Error.");
            reject(error);
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingAmazingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve("After 3 seconds something amazing will happen!")
            }, 3000);
        } else {
            const error = new Error("There is an Error.");
            reject(error);
        }
    })
}

somethingAmazingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingAmazingWillHappen()])
    .then(response => {
        console.log("Array of results", response);
    })
    .catch(err => console.error(err));