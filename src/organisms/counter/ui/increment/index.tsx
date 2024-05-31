import ButtonText from "@/molecules/buttonText";
import useCounter from "../../hooks/useCounterHook";

export default function IncrementButton() {
    const {handlers} = useCounter()
    const {handleIncrement} = handlers
    return (
        <ButtonText onClick={() => {handleIncrement()}}>+</ButtonText>
    )
}