// repetative block of code
// for loop: used when limit is known 
for(let i = 1; i<6; i++){
    console.log(i);
}
// odd and even problem
for (let i=1; i<16; i++){
    if (i%2!=0){
        console.log("odd: ", i);
    } else{
        console.log("even: ",i);
    }
}

// print multiplication
for (let i=1; i<=10; i++){
    console.log(`5 X ${i} = ${i*5}`);
}

// nested loop
for(let i=1;i<6;i++){
    for(let j=1;j<3;j++){
        console.log(i,",",j);
    }
}

//while loop : used when kind of infinite loop is executed
let i = 1;
while(i<6){
    console.log(i);
    i++;
}

//break keyword: used to stop the recent loop
for (let i=1; i<6; i++){
    if (i == 3){
        break;
    }
    console.log(i)
}

//loops on array
let  fruits = ['apple', 'banane', 'avacado', 'ornages'];
for (let i = 0; i<fruits.length; i++){
    console.log(i, fruits[i])
}

//loops on nested array
let heroes = [['tony', 'hulk', 'captain', 'strange'], ['flyingJatt', 'krish', 'minnalMurli', 'Bheem'], ['chutki', 'raju', 'kalia', 'jagu']];
for(let i = 0; i<heroes.length; i++){
    console.log(`List #${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}

//for of loop: to access the collection of items from array
for(fruit of fruits){
    console.log(fruit);
}

//nested for of loop
//let heroes = [['tony', 'hulk', 'captain', 'strange'], ['flyingJatt', 'krish', 'minnalMurli', 'Bheem'], ['chutki', 'raju', 'kalia', 'jagu']];
for(hero of heroes){
    for(name of hero){
        console.log(name);
    }
}

// Assignments

//Q1. Write a JS program to delete all occurences of elements "num" in a given array.
// Eg. arr = [1,2,3,4,3,5,2,6] & num = 2 ; result should be arr = [1,3,4,3,5,6]
let removeArr = [1,2,3,4,3,5,2,6];
let rmvEle = 2;
for(let i = 0; i<removeArr.length; i++){
    if(removeArr[i]==rmvEle){
        removeArr.splice(i, 1)
    }
}
console.log(removeArr);


//Q2. Write a JS program to find the no. of digits in a number. Eg. num = 287152, count = 6
let digit = 287152;
let count = 0;
for(let i = 0; digit>0; i++){
    digit = Math.floor(digit/10);
    count = count + 1;
}
console.log(count);

// OR
digit = 287154
count = digit.toString().length;
console.log(count);

//Q3. Write a JS program to find the sum of digits in a number. Eg. num = 287152, sum = 25
let dgt = 287152;
let summ = 0;
let n;
for(let i = 0; dgt>0; i++){
    n = dgt%10;
    summ = summ + n;
    dgt = Math.floor(dgt/10);
}
console.log(summ);

//Q4. Print the factorial of a number. Eg. num = 5, factorial = 120 (1x2x3x4x5)
let findFact = 5;
fact = 1;
for(let i=1;i<=findFact;i++){
    fact = fact*i;
}
console.log(fact);

//Q5. Find the largest number in an array with only positive numbers. Eg. arr = [10,23,12,45,54,9], large = 54
let positive  = [10,23,12,45,54,9];
max = positive[0];
for(let i=1;i<positive.length;i++){
    if(max<positive[i]){
        max=positive[i];
    }
}
console.log(max);
