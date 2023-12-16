// let array = ["mango", "apple", "banana",]

// array.push("watermelon")

// console.log(array)

// array.unshift("grapes")

// console.log(array)
// array.push("oranges")
// console.log(array)


// console.log(array.slice(1, 4))

// console.log(array)

// let arr = [2, 5, 7, 3, 8]

// const newArr = arr.map((x) => x + 5);

// console.log(newArr)

// newArr.forEach((x) => console.log(x * x, "square of an element of an array ", x))

// let find = arr.find((no) => no > 5)

// console.log(find, "--found no.")

// let indexf = arr.findIndex((x) => x > 7)

// console.log(indexf, "position")

// console.log(arr.includes(7))
// console.log(arr.includes(9))

let starCount = 5
function stars(x) {
    for (let i = 1; i <= x; i++) {
        let star = ""
        for (let j = 1; j <= i; j++) {
            star = star + "*"
        }
        console.log(star)
    }

}

function st(x) {
    let star = ""
    for (let i = 1; i <= x; i++) {
        star = star + "*"
        console.log(star)

    }

    console.log(star)


    // for(let j = x;j>0;j--){
    //     star = star--
    // }
}

// console.log(st(starCount))
// function starsReduce(x){
//     for(let i = ){}
// }

// console.log(stars(starCount))

let a = "*"

a = a * 5

// console.log(a)

let str = "raceca"

let arrayp = [...str]

function palindrome(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length; j >= 0; j--) {
            if (array[i] == array[j]) {
                console.log(array[i])
            }

        }
    }
}

// console.log(palindrome(arrayp))

setInterval(function timing(){
    let time = new Date()
let onlyTime = time.toLocaleTimeString()

console.log(onlyTime)
}, 1000)




let arraySum = [2, 7, 4, 8, 3, 5]

let index = arraySum.indexOf(8)
console.log(index)
let target = 9

function twoSum(array, target) {
    let newarr = []
    for (let i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                newarr.push(i, j)
            }
        }
    }
    return newarr

}

console.log(twoSum(arraySum, target))