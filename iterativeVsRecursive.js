/*
12. Iterative version

Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

1. Counting Sheep*/

function numOfSheep(num) {
    for (let i = num; i > 0; i--) {
        console.log(i + ': Another sheep jumps over the fence')
    }
    console.log('All sheep jumped over the fence')
}
//numOfSheep(10)
/*
2. Power Calculator*/
function powerCalculator(int, exp) {
    let result = int
    if (exp < 0) {
        console.log('exponent should be >= 0')
    }
    if (exp === 0) {
        result = 1
    }
    for (let i = 2; i <= exp; i++) {
        result *= int
    }
    console.log(result)
}
//powerCalculator(4,4)

/*
3. Reverse String*/
function reverseString(string) {
    let strArr = string.split('')
    let newString = ''
    for (let i = strArr.length - 1; i >= 0.; i--) {
        newString += strArr[i]
    }
    return newString
}
//console.log(reverseString('string'))
/*
4. nth Triangular Number*/
function nthTriNum(n) {
    let result = 0
    for (let i = n; i > 0; i--) {
        result += i
    }
    return result
}
//console.log(nthTriNum(5)) //15

/*
5. String Splitter*/
function stringSplitter(string, sep) {
    let output = []
    let idx = string.indexOf(sep)

    if (idx === -1) {
        output.push(string)
    }

    for (let i = idx; i >= 0.; i--) {
        output.push(string.substring(0, idx))
        string = string.slice(idx + 1)
        idx = string.indexOf(sep)
    }
    output.push(string)
    return output
}
//console.log(stringSplitter('2/20/2020', '/'))
/*
6. Fibonacci*/
function fibonacci(num) {
    let result = []
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            result.push(0)
        }
        else if (i === 2) {
            result.push(1)
        }
        else {
            result.push(result[i - 2] + result[i - 3])
        }
    }
    return result
}

//console.log(fibonacci(9))

/*
7. Factorial*/
function factorial(num){
    if ( num <= 1 ){
        return num
    }
    let result = num
    for (let i = num-1; i > 0; i--){
        result *= i
    }
    return result
}
//console.log(factorial(5))
/*
13. Recursive Big O

Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

a. excercises 1-7 are all O(n) as they increase with size of input


14. Iterative Big O

Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them. 

a. excercises 1-7 are all O(n) as they increase with size of input
*/