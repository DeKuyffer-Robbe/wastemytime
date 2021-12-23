import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <ul className='w-6/12 flex justify-around items-center'>
                <Link to="/">
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/FactPage">
                    <li>
                        Facts
                    </li>
                </Link>
                <Link to="/ImagePage">
                    <li>
                        Image
                    </li>
                </Link>
                <Link to="/QuizPage">
                    <li>
                        Quiz
                    </li>
                </Link>
                <Link to="/HumorPage">
                    <li>
                        Humor
                    </li>
                </Link>
                <Link to="/AvatarCreationPage">
                    <li>
                        Create avatar
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
