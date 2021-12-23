import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useCallback } from 'react';

const fs = require('browserify-fs')

export default function AddNewFact() {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const [title, setTitle] = useState("");

    const onSubmit = useCallback((data) => {
        fs.appendFile('ownFacts.txt', data.fact + " | " + data.username + "\n", (error) =>{
            if(error){
                console.log(error)
                return;
            }
        });
        setTitle("Added!");
    },[setTitle])

    return (
        <div>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Fact'{...register('fact', { required: <p className='error-message'>Fact is empty</p> })} />
                <input placeholder='Name'{...register('username', { required: <p className='error-message'>Name is empty</p> })} />
                {errors.fact && errors.fact.message}
                {errors.username && errors.username.message}
                <input type="submit" value="Create fact!"/>
                
            </form>
            
        </div>
    )
}
