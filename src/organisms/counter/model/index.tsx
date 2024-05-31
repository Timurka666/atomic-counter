import { useReducer } from "react";
import { CounterContext, ReducerCounterContext } from "./context";
import { initState } from "./state";
import { counterReducer } from "./reducer";

export default function CounterProvider({children}: {children: React.ReactElement}) {
    const [state, dispatch] = useReducer(counterReducer, initState)
    return (
        <CounterContext.Provider value={state}>
            <ReducerCounterContext.Provider value={dispatch}>
                {children}
            </ReducerCounterContext.Provider>
        </CounterContext.Provider>
    )
}