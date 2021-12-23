import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useForm } from 'react-hook-form'
import { useState, useCallback } from 'react';

export default function QuizQuestion({
    data
}) {
    const { register, handleSubmit } = useForm();

    const category = data.category;
    const difficulty = data.difficulty;
    const type = data.type;
    const trigger = 1;
    const [title, setTitle] = useState("The question");
    const [isAnswered, setAnswered] = useState(false);


    const url = `https://opentdb.com/api.php?amount=1${category !== "any" ? `&category=${category}` : ""}${difficulty !== "any" ? `&difficulty=${difficulty}` : ""}${type !== "any" ? `&type=${type}` : ""}`;
    const fetchdata = useFetch(url, trigger);

    const filterString = useCallback((string) => {
        let newString = string;
        
        newString = newString.replaceAll("&quot;", "\"");
        newString = newString.replaceAll("&#039;", "'");
        newString = newString.replaceAll("&amp;", "&");
        newString = newString.replaceAll("&rsquo;", "'");
        newString = newString.replaceAll("&lt;", "<");
        newString = newString.replaceAll("&gt;", ">");

        return newString;
    }, [])

    const shuffle = useCallback((array) => {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex !== 0) {

          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }, [])

    const onSubmit = useCallback((data) => {
        if (data.antwoord === filterString(fetchdata.data.results[0].correct_answer)) {
            setTitle(<div className="correct-answer">Correct!</div>); 
        } else {
            setTitle(
                <div>
                    <span className="wrong-answer">Incorrect!</span>
                    <br/>The right answer was: <span className="correct-answer">{filterString(fetchdata.data.results[0].correct_answer)}</span>
                </div>);
        }
        setAnswered(true);
    }, [fetchdata, filterString])


    if (fetchdata.loading) return (<p>Loading...</p>);
    if (fetchdata.error) return (<p>Something went wrong!</p>);
    if (fetchdata.data) {
        let wrong_answers = fetchdata.data.results[0].incorrect_answers.map((value) => {return(filterString(value));});
        let right_answer = filterString(fetchdata.data.results[0].correct_answer);
        
        if(wrong_answers.length === 3 ||wrong_answers.length === 1){
            wrong_answers.push(right_answer);
            wrong_answers = shuffle(wrong_answers);
        }

        return (
            <div>
                <h2>{title}</h2>
                <p>{filterString(fetchdata.data.results[0].question)}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("antwoord")}>
                        {wrong_answers.map((antwoord) => {
                            return (<option key={antwoord} value={antwoord}>{antwoord}</option>);
                        })}
                    </select>
                    <input disabled={isAnswered} type="submit" value="Submit answer" />
                </form>
            </div>
        );
    }
    return (<p>No data yet</p>);
}
