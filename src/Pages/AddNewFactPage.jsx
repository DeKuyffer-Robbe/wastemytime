import React from 'react'
import AddNewFact from '../components/AddNewFact'

export default function AddNewFactPage() {
    return (
        <div>
            <h1>Create your own fact</h1>
            <div className="fact-grid">
                <li></li>
                <li><AddNewFact/></li>
                <li></li>
            </div>
           
        </div>
    )
}
