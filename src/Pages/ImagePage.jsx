import React from 'react'
import Image from '../components/Image'
import data from './data/Image-Api.json'

export default function ImagePage() {
    return (
        <div>
            <h1>Images</h1>
            <div className="image-grid">
                {data.map((data) => {
                    return (
                        <li key={data.name}>
                            <h2>{data.name}</h2>
                            <div >
                                <Image url={data.url} name={data.name} />
                            </div>
                        </li>
                    )
                })}
            </div>

        </div>
    )
}
