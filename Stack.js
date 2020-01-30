class Stack{
    
    constructor(elem){
        this.aRR = [];
        this.totalLength = elem;
        //this.top = this.aRR[this.aRR.length-1];
    }    

    isEmpty(){
        if(this.aRR.length == 0)
            return true;
    }

    push(element){
        if(this.aRR.length != this.totalLength){
            return this.aRR.push(element)}
            else{
                return false;
            }
    }

    pop(){
        if(this.aRR.length == 0){
            return false;
        }
        return this.aRR.pop();
            
    }

    peek(){
       return this.aRR[this.aRR.length-1];
    }

    printstack(){
        return this.aRR.join(' ')
    }
      
}

let stack = new Stack(2);


// console.log(stack.push(10));
// console.log(stack.push(20));
// console.log(stack.push(30));
// console.log(stack.isEmpty())
console.log(stack.printstack());
// console.log(stack.peek());
// console.log(stack.peek());
// console.log(stack.peek());
module.exports = {Stack};