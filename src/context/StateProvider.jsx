import React ,{ createContext,useContext,useReducer} from "react";
import { initialState } from "./initialState";
import reducer from "./reducer";
export const stateContext = createContext();

export const StateProvider = ({children})=>{
    const [firstValue,dispatchReducer] = useReducer(reducer,initialState);
    return <stateContext.Provider value={{initialState:firstValue,dispatchReducer:dispatchReducer}}>
         {children}
    </stateContext.Provider>
}
export const useStateValue =()=> useContext(stateContext)