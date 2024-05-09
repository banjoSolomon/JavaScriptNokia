function countElement(value){
    let result = {};

    for (let index = 0; index < value.length; index++){
        let count = 0;
        for (let counter = 0; counter < value.length; counter++){
            if (value[index] === value[counter]) count++;
        }
        result[value[index]] = count;
    }
    return result;
}

let array = [1,2,2,3,1];
console.log(countElement(array));