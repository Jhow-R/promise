let promise = new Promise((resolve, reject) => {
    // Opening a file
    let isOpened = true;
    if (isOpened)
        resolve("Opened");
    reject("Not Opened");
});

promise.then((fromResolve) => {
    console.log(fromResolve);
}).catch((fromReject) => {
    console.log(fromReject);
});

/*****************************************************************************/

function openFile() {
    return new Promise((resolve, reject) => {
        // Opening the file
        let isOpened = true;
        if (isOpened)
            resolve("Opened");
        reject("Not Opened");
    });
}
function readFile() {
    return new Promise((resolve, reject) => {
        // Reading the file
        let isRead = true;
        if (isRead)
            resolve("Read");
        reject("Not read");
    });
}
function deleteFile() {
    return new Promise((resolve, reject) => {
        // Deleting the file
        let isDeleted = true;
        if (isDeleted)
            resolve("Deleted");
        reject("Not deleted");
    });
}

openFile()
    .then(() => readFile()
        .then(() => deleteFile()
            .then(() => console.log("Everything done"))
            .catch((frj) => console.log(frj)))
        .catch((frj) => console.log(frj)))
    .catch((frj) => console.log(frj));
Promise.all([openFile(), readFile(), deleteFile()]).then().catch();
Promise.race([openFile(), readFile(), deleteFile()]).then().catch();

/*****************************************************************************/

let minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/zJhol');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve((JSON.parse(xhr.responseText)));
                }
                else
                    reject('Erro na requisição');
            }
        }
    });
}

minhaPromise()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });
