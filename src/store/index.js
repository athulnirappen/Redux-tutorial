import { createStore } from "redux";

const reducerFn = (state={counter:0},action) => {
    switch (action.type) {
        case "INC": return {
            counter:state.counter + 1
        }
        case "DEC": return {
            counter:state.counter-1
        }
        case "add": return {
            counter:state.counter + action.payload
        }
            
            
    
        default:
            return state
    }
}




export const store=createStore(reducerFn)