const {Stack} = require('./stack')


function strings(string){
const stack = new Stack(50);
counter = 0;

string.split('').forEach(str=>{
    console.log(str);
    if(str == "(" || str == "{" || str =="["){
        stack.push(str);
    }else if(str == ")" || str == "}" || str =="]"){
        if(stack.aRR.length>0){
        stack.pop();}
    }else{
        counter = 1;
    }

})
    if( counter  == 1){
        console.log("Parenthesis is not Balanced")
    }else{
        console.log("Parenthesis is Balanced")
    }
}


// stack.printstack();
strings("(())")