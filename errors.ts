export class StackOverFlowError extends Error{
    name:string
    constructor(message:string){
        super(message)
        this.name="StackOverFlowError"
    }
}
export class StackUnderFlowError extends Error{
    name:string
    constructor(message:string){
        super(message)
        this.name="StackUnderFlowError"
    }
}

