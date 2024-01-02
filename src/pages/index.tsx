import Question from '@/components/Question'
import AnswerModel from '@/model/answer'
import QuestionModel from '@/model/question'

export default function Home() {
  const testQuestion = new QuestionModel(20, 'Best color?', [
    AnswerModel.wrong('Green'),
    AnswerModel.wrong('Blue'),
    AnswerModel.wrong('Red'),
    AnswerModel.correct('Black')
  ])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Question value={testQuestion} />
    </div>
  )
}
