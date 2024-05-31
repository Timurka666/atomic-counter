import CounterProvider from "./model";
import CounterView from "./ui/counterLayout";

export default function Counter() {
    return (
        <CounterProvider>
            <CounterView />
        </CounterProvider>
    )
}