import CounterText from "../counterText";
import DecrementButton from "../decrement";
import IncrementButton from "../increment";
import styles from "./counterView.module.css"

export default function CounterView() {
    return (
        <div className={styles.counterView}>
            <CounterText />
            <div className={styles.counterButtons}>
                <DecrementButton />
                <IncrementButton />
            </div>
        </div>
    )
}