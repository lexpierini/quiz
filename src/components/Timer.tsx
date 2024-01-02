import styles from '../styles/Timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

type TimerProps = {
    key: number
    duration: number
    timeOut: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer
                duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.timeOut}
                colors={['#BCE596', '#F7B801', '#ED827A']}
                colorsTime={[10, 5, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}