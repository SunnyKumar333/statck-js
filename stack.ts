import {StackOverFlowError,StackUnderFlowError} from "./errors"


interface IStack<T>{
    push(element:T):void;
    pop():T;
    peep():T|null;
    isEmpty():boolean;
    size():number;

}
class Stack<T> implements IStack<T>{
    private items: T[]
    private capacity:number

    constructor(capacity:number){
        this.capacity=capacity
        this.items=new Array<T>()
    }

    push(element:T):void{
        if(this.size()!=this.capacity){
            this.items.push(element)
        }else{
            throw new StackOverFlowError("Stack is Full")
        }

    }
    pop():T{
        const el= this.items.pop()
        if(!el) throw new StackUnderFlowError("Stack is Empty")
        return el
        
    }
    peep():T|null{
        if(!this.isEmpty()) return this.items[this.size()-1]
        return null
    }
    isEmpty():boolean{
        return this.items.length==0;
    }
    size():number{
        return this.items.length;
    }

    toString():string{
        return this.items.toString()
    }
}
