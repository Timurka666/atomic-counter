import useCounter from "../../hooks/useCounterHook"
import Text from "@/atoms/text";
import styles from "./counterText.module.css"

export default function CounterText() {
    const {counter} = useCounter()

    return <Text defaultStyle={false} className={styles.counterText}>{`${counter.counter}`}</Text>
}