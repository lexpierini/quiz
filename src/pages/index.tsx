import { useState } from 'react'
import Question from '@/components/Question'
import AnswerModel from '@/model/answer'
import QuestionModel from '@/model/question'
import Button from '@/components/Button'

const questionMock = new QuestionModel(20, 'Best color?', [
  AnswerModel.wrong('Green'),
  AnswerModel.wrong('Blue'),
  AnswerModel.wrong('Red'),
  AnswerModel.correct('Black')
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)

  const handleOnAnswer = (index: number) => {
    setQuestion(question.replyWith(index))
  }

  const handleTimeOut = () => {
    if (question.notAnswered) {
      setQuestion(question.replyWith(-1))
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Question value={question} answerDuration={15} onAnswer={handleOnAnswer} timeOut={handleTimeOut} />
      <Button text='Next' href='/result' />
    </div>
  )
}
