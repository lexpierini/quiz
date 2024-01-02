import styles from '../styles/Statistics.module.css'

type StatisticsProps = {
    value: number | string
    text: string
    bgColor?: string
    fontColor?: string
}

export default function Statistics(props: StatisticsProps) {
    return (
        <div className={styles.statistics}>
            <div
                className={styles.value}
                style={{
                    backgroundColor: props.bgColor ?? '#fdd60f',
                    color: props.fontColor ?? '#333'
                }}
            >
                {props.value}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}