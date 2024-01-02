import styles from '../styles/Result.module.css'
import { useRouter } from 'next/router'
import Statistics from '@/components/Statistics'
import Button from '@/components/Button'

export default function Result() {
    const router = useRouter()

    const total = Number(router.query.total)
    const correctAnswers = Number(router.query.correctAnswers)
    const percent = Math.round((correctAnswers / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Final Result</h1>
            <div style={{ display: 'flex' }}>
                <Statistics text='Questions' value={total} />
                <Statistics text='Correct answers' value={correctAnswers} bgColor='#9cd2a4' />
                <Statistics text='Percentage' value={`${percent}%`} bgColor='#de6a33' />
            </div>
            <Button href='/' text='Try again' />
        </div>
    )
}