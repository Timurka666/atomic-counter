import ButtonText from "@/molecules/buttonText";
import useCounter from "../../hooks/useCounterHook";

export default function DecrementButton() {
    const {handlers} = useCounter()
    const {handleDecrement} = handlers
    return (
        <ButtonText onClick={() => {handleDecrement()}}>-</ButtonText>
    )
}