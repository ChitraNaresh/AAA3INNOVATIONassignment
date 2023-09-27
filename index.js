// First question answer 

const exampleArray=[1,2,3,4,5,6]
const nthElement=5

function returnElements(arr,n){
     if (n>arr.length){
        return exampleArray
     }
     else if (n<1){
        return []
     }
     else{
        return arr.slice(-n)
     }
}

console.log(returnElements(exampleArray,nthElement))

// Second question answer 

const inputNumber=25468

function insertDashesBetweenEvenNums(numberValue){
    let initialaString=""
    const strNum=numberValue.toString()
    for (let num=0;num<=strNum.length-1;num++){
        if (Number(strNum[num])%2==0 && Number(strNum[num+1])%2==0){
            initialaString=initialaString+strNum[num]+"-"
        }
        else{
            initialaString+=strNum[num]
        }
    }
    return initialaString
}
    

console.log(insertDashesBetweenEvenNums(inputNumber))

// Third question answer 

let oneDimentionaArr=[]
// Problem solved using recursion
function flatten(nestedArray){
    for (let item of nestedArray){
        if (Array.isArray(item)){
            flatten(item)
        }
        else{
            oneDimentionaArr.push(item)
        }
    }
    return oneDimentionaArr
}

// Problem solved with flat function using (Infinite) as parameter to the flat() method
// function flatten(nestedArray){
//     return nestedArray.flat(Infinity)
// }

console.log(flatten([1,[2,7],[3,[[4]]],[5,6]]))

// 4 question answer 

var library=[{title:"The Road Ahead",author:"Bill Gates",libraryId:1254},
{title:"Walter Isaacson",author:"Steve Jobs",libraryId:4264},
{title:"Mockingjay: The Final Books of The Final Games",author:"Suzanne Collins",libraryId:3245}]

console.log(sortArrayOfObjects(library))

function sortArrayOfObjects(library){
    const sortedArr=library.sort((accumulator,currentValue)=>accumulator.libraryId-currentValue.libraryId)
    return sortedArr
}

// 5 question answer 

const colorsObject={red:"#FF0000",green:"#00FF00",white:"#FFFFFF"}

function manupulateColorsObject(colorsObject){
    let newArr={}
    const keyValuesArray=Object.entries(colorsObject)
    for (let [key,value] of keyValuesArray){
        newArr[value]=key
        console.log(value,key)
    }
     return newArr
}

console.log(manupulateColorsObject(colorsObject))




