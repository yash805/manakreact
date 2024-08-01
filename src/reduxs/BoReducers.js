import { buyBook } from "./Types"
const initialState={
    NoOfBooks : 10
}

const BoReducer = (state=initialState,action)=>{
   switch(action.type){
    case buyBook: return{
        ...state, NoOfBooks: state.NoOfBooks -action.payload,
    }
    default: return state
   }
}

export default BoReducer;