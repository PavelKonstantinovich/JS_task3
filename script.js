// Задание №1

const arr = [25, 62, 9, 15, 65, 6, 11, 2]

let sum = 0
let sumEven = 0

function calcSum (arr) {
const arrLength = arr.length
for (let i = 0; i < arrLength; i++) {
  console.log(arr[i])
  sum = sum + arr[i]
  if (arr[i] % 2 == 0){
    sumEven = sumEven + arr[i]
  }
}
console.log('Сумма: ', sum)
console.log('Сумма четных: ', sumEven)
}

// function calcSum (arr) {
// for (let item of arr) {
//   console.log(item)
//   sum = sum + item

//   if (item % 2 == 0) {
//     sumEven = sumEven + item
//   }
// }
// console.log('Сумма: ', sum)
// console.log('Сумма четных: ', sumEven)
// }
calcSum(arr)


// Задание №2

// let arr2 = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// function findPositiveNumbers() {
//  let positiveItemsArr = []
// for (let item of arr2) {
//   if (item > 0) positiveItemsArr.push(item)
// }
// console.log(positiveItemsArr)
// }
// findPositiveNumbers(arr2)

// Задание №3

const arr3 = [5, 4, 3, 8, 0]
function result(limit) {
const resultArr = []  
for (let item of arr3) {
  if (item >= limit) resultArr.push(item)
}
console.log(resultArr)
}
result(5)

// Задание №4

const children = [
  { name: 'Вова', age: 10 },
  { name: 'Света', age: 8 },
  { name: 'Катя', age: 12 },
  { name: 'Петя', age: 7 },
  { name: 'Маша', age: 11 },
]
function checkage(param) {
for (let child of children) {
  if (child.age > param) {
    console.log(child.name)
  }
}
}
checkage(10)

// Задание №5

const vegetables = ['картофель', 'морковь', 'лук', 'чеснок']
const mapVegetables = []
function calcWord(params) {
for (let green of vegetables) {
  mapVegetables.push({
    word: green,
    length: green.length
  })
}
console.log(mapVegetables)
for (let green of mapVegetables) {
  console.log(green.word + ' - ' + green.length)
}
}
calcWord()

// Задание №6

// function findPositiveNumbers(){
//   let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
//  for (let item of arr) {
//   if (item > 0) console.log(item)
// }
// }
// findPositiveNumbers()

function findPositiveNumbers(){
  let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
  let positiveItemsArr = []
for (let item of arr3) {
  if (item > 0) positiveItemsArr.push(item)
}
console.log(positiveItemsArr)
}
findPositiveNumbers(arr3)

// function findPositiveNumbers(){
//   let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
//   let positiveItemsArr = []
// for (let item of arr3) {
//   if (item > 0) positiveItemsArr.push(item)
// }
// return arr3
// }
// findPositiveNumbers(arr3)

// Задание №7 --> // Задание №3