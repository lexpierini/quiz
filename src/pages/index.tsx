import { useState } from 'react'
import AnswerModel from '@/model/answer'
import QuestionModel from '@/model/question'
import Questionnaire from '@/components/Questionnaire'

const questionMock = new QuestionModel(20, 'Best color?', [
  AnswerModel.wrong('Green'),
  AnswerModel.wrong('Blue'),
  AnswerModel.wrong('Red'),
  AnswerModel.correct('Black')
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)

  const handleAnswered = (question: QuestionModel) => {

  }

  const handleGoNext = () => {

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questionnaire
        question={question}
        finished={true}
        answered={handleAnswered}
        goNext={handleGoNext}
      />
    </div>
  )
}
