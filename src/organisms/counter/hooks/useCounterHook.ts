import { useContext } from "react"
import { CounterContext, ReducerCounterContext } from "../model/context"
import { StateType } from "../model/state"

export default function useCounter() {
    const counter = useContext(CounterContext)
    const dispatch = useContext(ReducerCounterContext)
    if (counter === (undefined || null) || dispatch === (undefined || null)) {
        throw new Error('useContext must be used within CounterProvider')
    }

    const handleIncrement = () => {
        dispatch({type: 'increment'})
    }

    const handleDecrement = () => {
        dispatch({type: 'decrement'})
    }

    return {counter, handlers: {handleIncrement, handleDecrement}}
}