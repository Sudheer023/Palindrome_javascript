// object properties
// let name="myname is "
// let obj={
//     [name]:"sudheer",
//     [14+4]:"is my age right now"
// }
// console.log(obj);


// ---------------------------------


/// if you have same object keys and variable name then you can assign variable name to object keys behaves same 
// let myname="sudheer";
// let lastanem="naik"

// let obj= {
//     myname, 
//     lastanem
// } 

// console.log(obj);  

 
// ------------------------------------------------------------------------

// function ispalidrome(x){
//     console.log(x);
//   let c=  x.split("").reverse()
//   return c;
    
// }
// // console.log("radar=",ispalidrome('radar')); 
// console.log("sudheer",ispalidrome('sudheer')); 
// console.log(typeof(x));
let c="";
function submitq(){
    let text= document.getElementById('text').value
    let input=text;
    let text1 = input.toUpperCase();
    console.log('text1',text1);
      let c=  text1.split("").reverse().join('')
      console.log('👍',c);
      if(c===text1){
        document.getElementById('answer').textContent="Text is palindrome"
    }
    else{
        document.getElementById('answer').textContent="Text is not palindrome"  
    }

 
    
}


