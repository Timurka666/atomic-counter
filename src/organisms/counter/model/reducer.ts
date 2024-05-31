import { Reducer } from "react";
import { StateType } from "./state";

interface Action {
    type: string;
    payload?: StateType;
}

export function counterReducer(state: StateType, action?: Action): ReturnType<Reducer<StateType, Action>> {
    switch (action?.type) {
        case 'increment':
            return {counter: state.counter + 1}
        case 'decrement':
            return {counter: state.counter - 1}
        default:
            return state
    }
}