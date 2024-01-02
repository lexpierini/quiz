import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import QuestionModel from '@/model/question'
import Questionnaire from '@/components/Questionnaire'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [questionsId, setQuestionsId] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  const getQuestionsId = async () => {
    const res = await fetch(`${BASE_URL}/questionnaire`)
    const questionsId = await res.json()
    setQuestionsId(questionsId)
  }

  const getQuestion = async (questionId: number) => {
    const res = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await res.json()
    const newQuestion = QuestionModel.questionModelFactory(json)
    setQuestion(newQuestion)
  }

  const handleAnswered = (answeredQuestion: QuestionModel) => {
    setQuestion(answeredQuestion)
    const isCorrectedAnswer = answeredQuestion.correctedAnswer
    setCorrectAnswers((prevState => prevState + (isCorrectedAnswer ? 1 : 0)))
  }

  const getNextQuestionId = () => {
    if (question) {
      const nextIndex = questionsId.indexOf(question.id) + 1
      return questionsId[nextIndex]
    }
  }

  const handleGoNext = () => {
    const nextQuestionId = getNextQuestionId()
    nextQuestionId ? goToNextQuestion(nextQuestionId) : finishGame()
  }

  const goToNextQuestion = (nextQuestionId: number) => {
    getQuestion(nextQuestionId)
  }

  const finishGame = () => {
    router.push({
      pathname: '/result',
      query: {
        total: questionsId.length,
        correctAnswers: correctAnswers
      }
    })
  }

  useEffect(() => {
    getQuestionsId()
  }, [])

  useEffect(() => {
    if (questionsId.length > 0) {
      getQuestion(questionsId[0])
    }
  }, [questionsId])

  return question && (
    <Questionnaire
      question={question}
      finished={getNextQuestionId() === undefined}
      answered={handleAnswered}
      goNext={handleGoNext}
    />
  )
}
