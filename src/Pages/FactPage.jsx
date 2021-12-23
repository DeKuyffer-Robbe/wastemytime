import React from 'react'
import Facts from '../components/Facts'
import OwnFacts from '../components/OwnFacts'
import data from './data/Fact-Api.json'
import { Link } from 'react-router-dom'

export default function FactPage() {
    return (
        <div>
            <h1>Facts</h1>
            <div className="fact-grid">
                {data.map((data) => {
                    return (
                        <li key={data.name} className='fact-gehele-container'>
                            <h2>{data.name} facts</h2>
                            <div >
                                <Facts name={data.name} url={data.url} header={data.header}></Facts>
                            </div>
                        </li>
                    )
                })}
                <li className="fact-gehele-container">
                    <h2>Own facts</h2>
                    <OwnFacts />
                </li>
                <li></li>
                <li><div className='create-own-fact-button'><Link to="/AddNewFactPage"><button>Create your own fact</button></Link></div></li>

            </div>

        </div>
    )
}
