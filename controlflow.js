function myArray(arr){
    let firstFour=arr.slice(0,4).map(element => element*element);
    let lastTwo = arr.slice(-2).map(element =>element + 10);
    const newArry = firstFour.concat(lastTwo);
    console.log(newArry);
}
myArray([3,6,8,4,6,7]);


let arrNum = [1,2,3,4,5,6,7,8,9]
    for (i=0; i<arrNum.length ; i++ ){
        if (i==1<arrNum.length){
            break;
        }
        
console.log(arrNum);
}
//
let fruits = ['apple','plum','banana','strawberries','kiwi'];
let y=2
for (i=0; i<fruits.length; i++){
    if(i==y){
        continue;
    }
    console.log(fruits);
}
//
let countries =['Kenya','Uganda','Tanzania',];
for(i=0; i< countries.length;i++){
    console.log(countries[i]);
}
//
function reverseString(str){
    let newarray="";
    for(let i = str.length  -1; i>= 0; i--){
        newarray += str.length[i];
        
    }
} 
console.log(newarray);
reverseString('Joy','Ivy', 'Jane');



