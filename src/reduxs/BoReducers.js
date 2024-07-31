import { buyBook } from "./Types"
const initialState={
    NoOfBooks : 10
}

const BoReducer = (state=initialState,action)=>{
   switch(action.type){
    case buyBook: return{
        ...state, NoOfBooks: state.initialState -1
    }
    default: return state
   }
}

export default BoReducer;