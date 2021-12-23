import React from 'react'
import Joke from '../components/Joke'
import data from './data/Humor-Api.json'

export default function HumorPage() {
    return (
        <div>
            <h1>Get a laugh</h1>
            <div className="humor-grid">
                <li></li>
                <li><Joke name={data[0].name} url={data[0].url} header={data[0].header}/></li>
            </div>
        </div>
    )
}
