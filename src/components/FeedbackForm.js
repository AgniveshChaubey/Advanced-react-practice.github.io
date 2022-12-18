import React from 'react'
import { useState } from 'react'

export const FeedbackForm = () => {
    const [score, setScore] = useState('10');
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("please provide a comment")
        }
        console.log('submitted')
        setComment('');
        setScore('10');

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className='field'>
                        <label htmlFor="">Score : {score}⭐</label>
                        <input
                            type="range"
                            min={0}
                            max={10}
                            value={score}
                            onChange={e => setScore(e.target.value)}
                        />
                        <button type='submit'> Submit </button>
                    </div>
                    <div className="field">
                        <label htmlFor="comment">Comment :</label>
                        <textarea
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        id='comment'
                        />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};