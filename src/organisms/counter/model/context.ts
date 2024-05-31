import { createContext, useReducer } from "react";
import { counterReducer } from "./reducer";
import { StateType } from "./state";

export const CounterContext = createContext<StateType | null>(null)

type reducerContextType = ReturnType<typeof useReducer<typeof counterReducer, StateType>>[1]

export const ReducerCounterContext = createContext<null | reducerContextType>(null)
