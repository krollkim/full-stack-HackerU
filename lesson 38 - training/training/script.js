



function sumArray1(arr){

    let res = 0;

    for(let num of arr){
        res += num;
        console.log(res);
    }
    return res
}

function sumArray2(arr){
    return arr.reduce((res, next) => res + next, 0)
}

function sumArray3(arr, count){
   if(count === arr.length){
        return 0
   }
    
    return arr[count] + sumArray3(arr, count++)

}

function transformToZero1(string){
    let chars = string.split('')

    return chars.reduce((prev, next) =>{
        prev.push(0);
        return prev
    } , [])
}

function transformToZero2(string){
    let chars = string.split('')

    return chars.reduce((prev, next) => [...prev, 0], [])
}

function transformToZero3(string){
    let chars = string.split('')

    return chars.map((character, index) => 0)
}

function isPalindrom1(input){
    let val = [];
    let rev = [];

    for(let i = 0; i < input.length; i++){
        val.push(input[i]);
    }
    for(let i = input.length = 1; i >= 0; i--){
        rev.push(input[i]);
    }
    let counter = 0;
    for(let i = 0; i < val.length; i++){
        if(rev[counter] == val[i]){
            
        }

        
    }
}

function isPalindrom2(input){
  for(let i = 0, j = input.length - 1; i < j; i++, j--){
    if(input[i] !== input[j])
        return false;
    
  }
  return true;
}

function isGreaterSum(arr){
    let sum = 0;
    let mult = 1;

    for(let num of arr){
        sum += num;
        mult *= num;
    }
    return sum > mult
}