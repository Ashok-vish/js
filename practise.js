
// reverse  number in js 
// function revend(num){
//     let newarr=[]
//     for(let i=num.length-1; i>=0; i--){
//         //  newarr.push(num[i])
//          newarr.push(num[i])
//     }
//     return newarr
// }

// console.log(revend([1,4,2,5,7]))

// sepration of even and odd number from array
// function strrr(num){
//     let even=[]
//     let odd=[]
//     for(let i=0; i<=num.length-1 ; i++){
//         if (i%2==0){
//             even.push(num[i])
//         }
//         else{
//             odd.push(num[i])
//         }
//     }
//     return even , odd
// }

// let an = [1, 2, 9, 4, 0, 5, 6,]
// let even = []
// let odd = []
// for (let i = 0; i <= an.length - 1; i++) {
//     if (an[i] % 2 === 0) {
//         even.push(an[i])
//     }
//     else {
//         odd.push(an[i])
//     }

// }

// console.log("even" , even)
// console.log("odd ", odd)






function mis(num){
//  let lol= num.sort()
num.sort()
 let missing
 for (let i=0;i<=num.length-1 ;i++){
    // console.log(lol.length)
    if(num[i]+1==num[i+1]){
        continue
    }
    else{
        missing=num[i]+1
        console.log(`missing element is `,missing)
        
    }
 }
 
}

// console.log(mis([3,2,4,5]))
mis([3,2,1,6]) // <- 1,2,3,5




