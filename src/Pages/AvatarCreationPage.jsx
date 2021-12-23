import React from 'react'
import AvatarCreation from '../components/AvatarCreation'

export default function AvatarCreationPage() {
    return (
        <div>
            <h1>Create your own avatar!</h1>
            <div className='avatar-grid'>
                <li></li>
                <li><AvatarCreation/></li>
                <li></li>
            </div>
        </div>
    )
}
