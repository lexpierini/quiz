import styles from '../styles/Answer.module.css'
import AnswerModel from "@/model/answer"

type AnswerProps = {
    value: AnswerModel
    index: number
    letter: string
    letterBg: string
    onAnswer: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value

    return (
        <div className={styles.answer} onClick={() => props.onAnswer(props.index)}>
            <div className={styles.answerContent}>
                {!answer.revealed ? (
                    <div className={styles.front}>
                        <div className={styles.letter} style={{ backgroundColor: props.letterBg }} >
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {answer.value}
                        </div>
                    </div>
                ) : (
                    <div className={styles.back}>
                        {answer.isCorrect ? (
                            <div className={styles.correct}>
                                <div>The correct answer is...</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        ) : (
                            <div className={styles.wrong}>
                                <div>The answer is wrong...</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}