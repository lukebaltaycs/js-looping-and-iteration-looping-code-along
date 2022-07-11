// Code your solutions in this file


function writeCards(recievers, phrase) {
    let array = []
    for (let i = 0; i < recievers.length; i++ ){
        array[i] = `Thank you, ${recievers[i]}, for the wonderful ${phrase} gift!`;
    }
    return array;
}

function countDown(start) {
    while (start >= 0) {
        console.log(start);
        start--;
    }
}