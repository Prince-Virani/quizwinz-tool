"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Coins, ArrowLeft, Clock, AlertTriangle } from "lucide-react"
import AdSenseBanner from "@/components/adSenseBanner"
// IMPORT THE DATA HERE
import { allQuizQuestions } from "@/app/data/quizData" 

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  
  // Get the ID from the URL (e.g., /quiz/1)
  const quizId = Number.parseInt(params.id as string)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [timerActive, setTimerActive] = useState(true)

  // FETCH QUESTIONS BASED ON ID
  // If the ID doesn't exist in your data file, this returns undefined
  const questions = allQuizQuestions[quizId];

  // --- SAFETY CHECK: If questions for this ID don't exist yet ---
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white flex-col gap-4">
        <AlertTriangle className="w-12 h-12 text-yellow-500" />
        <h2 className="text-xl font-bold">Quiz Under Construction</h2>
        <p className="text-slate-400">Questions for this category (ID: {quizId}) are coming soon!</p>
        <Button onClick={() => router.back()} variant="secondary">Go Back</Button>
      </div>
    );
  }

  useEffect(() => {
    if (timerActive && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !showResult) {
      handleAnswerSelect(-1) // Auto-submit with no answer
    }
  }, [timeLeft, timerActive, showResult])

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex)
      setShowResult(true)
      setTimerActive(false)

      setTimeout(() => {
        const newAnswers = [...answers, answerIndex]
        setAnswers(newAnswers)

        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
          setShowResult(false)
          setTimeLeft(30)
          setTimerActive(true)
        } else {
          setQuizCompleted(true)
        }
      }, 2500)
    }
  }

  const handleQuizComplete = () => {
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct).length

    const baseReward = 200
    const bonusPerCorrect = 100
    const totalReward = baseReward + correctAnswers * bonusPerCorrect

    const currentCoins = Number.parseInt(localStorage.getItem("quizwinz-coins") || "0")
    localStorage.setItem("quizwinz-coins", (currentCoins + totalReward).toString())

    router.push("/result")
  }

  if (quizCompleted) {
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct).length
    const baseReward = 200
    const bonusPerCorrect = 100
    const totalReward = baseReward + correctAnswers * bonusPerCorrect

    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
        <Card className="w-full max-w-md bg-slate-800 border-slate-700">
          <CardContent className="p-8 text-center">
            <Coins className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Quiz Completed!</h2>
            <p className="text-slate-300 mb-4">Great job on completing the quiz!</p>

            <div className="bg-slate-700 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-300 mb-2">Your Results:</p>
              <p className="text-lg font-semibold text-white">
                {correctAnswers}/{questions.length} Correct
              </p>
              <p className="text-sm text-slate-400">
                Accuracy: {Math.round((correctAnswers / questions.length) * 100)}%
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 rounded-lg p-4 mb-6">
              <p className="text-lg font-bold">+{totalReward} Coins</p>
              <p className="text-sm">
                Base: {baseReward} + Bonus: {correctAnswers * bonusPerCorrect}
              </p>
            </div>

            <Button
              onClick={handleQuizComplete}
              className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 hover:from-orange-500 hover:to-yellow-600"
            >
              Collect Reward
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correct

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-900">
      
      <div className="w-full max-w-md mb-6 flex flex-col items-center">
        <AdSenseBanner />
        <label style={{
          display: 'block',
          marginTop: '8px',
          width: 'fit-content',
          letterSpacing: '4px',
          color: 'rgb(65, 77, 101)',
          font: '400 9px / 2 Arial, sans-serif',
          opacity: 0.7
        }}>
          ADVERTISEMENT
        </label>
      </div>

      <Card className="w-full max-w-md bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => router.back()} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6 text-slate-300" />
            </button>
            <div className="flex items-center gap-2 bg-slate-700 px-3 py-2 rounded-full">
              <Clock className="w-4 h-4 text-orange-400" />
              <span className={`font-semibold ${timeLeft <= 10 ? "text-red-400" : "text-orange-400"}`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="text-center mb-6">
            <div className="inline-block bg-slate-700 px-4 py-2 rounded-full mb-4">
              <span className="text-white font-medium">
                {currentQuestion + 1}/{questions.length} Question
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-400 to-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 text-center">{question.question}</h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  showResult
                    ? index === question.correct
                      ? "bg-green-500/20 border-green-500 text-green-400"
                      : index === selectedAnswer && index !== question.correct
                        ? "bg-red-500/20 border-red-500 text-red-400"
                        : "bg-slate-700 border-slate-600 text-slate-300"
                    : "bg-slate-700 border-slate-600 text-slate-300 hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-left">{option}</span>
                  {showResult && index === question.correct && <CheckCircle className="w-4 h-4 text-green-400 ml-2" />}
                  {showResult && index === selectedAnswer && index !== question.correct && (
                    <XCircle className="w-4 h-4 text-red-400 ml-2" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Fun Fact */}
          {showResult && (
            <div className="bg-slate-700 rounded-lg p-4 mb-6">
              <h3 className="text-orange-400 font-semibold mb-2">#Fun Fact</h3>
              <p className="text-slate-300 text-sm">{question.funFact}</p>
            </div>
          )}

          {/* Result Feedback */}
          {showResult && (
            <div className="text-center">
              {isCorrect ? (
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Correct! +100 coins</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-red-400">
                  <XCircle className="w-5 h-5" />
                  <span className="font-semibold">Incorrect! +0 coins</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}