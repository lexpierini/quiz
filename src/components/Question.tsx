import styles from '../styles/Question.module.css'
import QuestionModel from "@/model/question"
import Statement from "./Statement"

type QuestionProps = {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value

    return (
        <div className={styles.question}>
            <Statement text={question.statement} />
        </div>
    )
}