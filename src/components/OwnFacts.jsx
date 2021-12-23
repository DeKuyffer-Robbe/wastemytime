import React from 'react'
import { useState, useCallback, useEffect } from 'react';

const fs = require('browserify-fs')

export default function OwnFacts() {
    const [arrayWithFacts, setArrayWithFacts] = useState();
    const [factAndAuthor, setFactAndAuthor] = useState("Click the button to see one of your own facts!");

    const getNewFact = useCallback(() => {
        arrayWithFacts.pop();
        let randomIndex = Math.floor(Math.random() * arrayWithFacts.length);
        let randomFactAndAuthor = arrayWithFacts[randomIndex];

        while(randomFactAndAuthor === factAndAuthor){
            randomIndex = Math.floor(Math.random() * arrayWithFacts.length);
            randomFactAndAuthor = arrayWithFacts[randomIndex];
        }
 
        setFactAndAuthor(randomFactAndAuthor);
    }, [arrayWithFacts, factAndAuthor])

    useEffect(() => {
        let isWritten = false;

        fs.readFile('ownFacts.txt', 'utf-8', function(err, data) {
            if(!isWritten){
                setArrayWithFacts(data.split("\n"));
            }    
        });  

        return () => {
            isWritten = true;
        };
    }, [setArrayWithFacts])
    
    
    return (
        <div>
            <p>{factAndAuthor.split(" | ")[0]}</p>
            <p><sub>{factAndAuthor.split(" | ")[1] === null || factAndAuthor.split(" | ")[1] === undefined ? "" : "By: " + factAndAuthor.split(" | ")[1]}</sub></p>
            <button onClick={getNewFact}>
                New Fact!
            </button>
        </div>
    )
}
