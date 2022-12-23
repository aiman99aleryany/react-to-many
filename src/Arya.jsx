import React, { useEffect, useState } from 'react';
import reviews from './reviews';

function Arya() {
    const [key, setKey] = useState(0);
    const [review, setReview] = useState(reviews[key]);
    const st = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    useEffect(() => {
        setReview(reviews[key]);
    }, [key]);

    const right = () => {
        if (key === reviews.length - 1) return;
        setKey(key + 1);
    };
    const left = () => {
        if (key <= 0) return;
        setKey(key - 1);
    };

    const { id, image, name, title, quote } = review;
    return (
        <div style={st}>
            <div key={id} style={st}>
                <img
                    src={image}
                    alt="pic"
                    style={{
                        width: '6rem',
                        height: '6rem',
                        borderRadius: '100%',
                    }}
                />
                <h4>{name}</h4>
                <h5>{title}</h5>
                <p>{quote}</p>
                <div>
                    <span>
                        <button onClick={left}> Left</button>
                    </span>
                    <span>
                        <button onClick={right}>Right</button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Arya;
