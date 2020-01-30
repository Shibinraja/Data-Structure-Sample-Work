class Queue{
    
    constructor(elem){
        this.aRR = [];
        this.totalLength = elem;
    }    

    isEmpty(){
        if(this.aRR.length == 0)
            return true;
    }

    enqueue(element){
        if(this.aRR.length != this.totalLength){
            return this.aRR.push(element)}
            else{
                return false;
            }
    }

    dequeue(){
        if(this.aRR.length == 0){
            return false;
        }
        return this.aRR.shift();
            
    }

    front(){
        return this.aRR[0];
    }

    rear(){
        return this.aRR[this.aRR.length-1];
    }

    printqueue(){
        return this.aRR.join(' ')
    }
      
}

let queue= new Queue(5);

queue.enqueue(5);
queue.enqueue(3);
console.log(queue.rear());




