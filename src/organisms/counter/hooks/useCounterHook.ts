import { useContext } from "react"
import { CounterContext, ReducerCounterContext } from "../model/context"

export default function useCounter() {
    const counter = useContext(CounterContext)
    const dispatch = useContext(ReducerCounterContext)
    if (counter === undefined || dispatch === undefined) {
        throw new Error('useContext must be used within CounterProvider')
    }

    if (counter === null || dispatch === null) {
        throw new Error('useContext must be used within CounterProvider')
    }

    const handleIncrement = () => {
        dispatch({type: 'increment'})
    }

    const handleDecrement = () => {
        dispatch({type: 'decrement'})
    }

    return [counter, {handleIncrement, handleDecrement}]
}