const squareArray=[
["a", "b", "c", "d", "e"],    
["f", "g", "h", "i", "j"],
["k", "l", "m", "n", "o"],
["p", "q", "r", "s", "t"],
["u", "v", "w", "x", "y"]
];

function unroll(squareArray) {

const width = squareArray[0].length
const height = squareArray.length
if (height !== width) {
    console.log("ARRAY IS INVALID")
}

// step 1 --- first traverse
console.log(squareArray[0]); 

// step 2 ---  first down
for (let i= 1; i<height; i++){  
console.log(squareArray[i].slice(-1))};
 
// step 3 ---  first across backwards
console.log(squareArray[height-1].reverse().slice(1,height));

//step 5 ---  first upward
for (let i=2 ; i < height ; i++){
console.log([squareArray[height-i][0]])};

//step 6 --- second traverse
console.log(squareArray[1].slice(1,height-1))
//********************************************************************************/
//step 7 --- 2nd down
for (let i=2 ; i< height-1; i++){
console.log([squareArray[i].slice(-2)[0]])}

//step 8 --- 2nd across backwards
console.log(squareArray[height-2].reverse().slice(2,height-1))

//step 9 -- 2nd upward
for (let i = 3; i < height; i++){
console.log([squareArray[height-i].slice(1)[0]])
}


//step 9 --- third traverse
console.log(squareArray[height-3].slice(1, height-2))

}

unroll(squareArray)

module.exports = unroll;
