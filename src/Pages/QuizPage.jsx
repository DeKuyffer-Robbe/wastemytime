import React from 'react'
import ChooseOwnQuestion from '../components/ChooseOwnQuestion';

export default function QuizPage() {
    return (
        <div>
            <h1>Quiz</h1>
            <div className="quiz-page-grid">
                <li></li>
                <li><ChooseOwnQuestion/></li>
                <li></li>
            </div>
        </div>
    )
}
