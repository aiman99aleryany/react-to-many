import React, { useState, useEffect } from 'react';
import reviews from './reviews';

function Sama() {
    const reviewsLength = reviews.length;

    const [iterator, setIterator] = useState(0);
    const [review, setReview] = useState(reviews[iterator]);

    const showNextReview = () => {
        setIterator((iterator) =>
            iterator === reviewsLength - 1 ? 0 : iterator + 1
        );
    };

    const showPreviousReview = () => {
        setIterator((iterator) =>
            iterator === 0 ? reviewsLength - 1 : iterator - 1
        );
    };

    useEffect(() => {
        setReview(reviews[iterator]);
    }, [iterator]);

    return (
        <div className="section">
            <div className="title">
                <h2>
                    <span>/</span>Reviews
                </h2>
            </div>
            {
                <div className="section-center">
                    <article className="activeSlide">
                        <img
                            src={review.image}
                            alt={review.name}
                            className="person-img"
                        />
                        <h4>{review.name}</h4>
                        <p className="title">{review.title}</p>
                        <p className="text">{review.quote}</p>
                    </article>
                    <button className="prev" onClick={showPreviousReview}>
                        &lt;
                    </button>
                    <button className="next" onClick={showNextReview}>
                        &gt;
                    </button>
                </div>
            }
        </div>
    );
}

export default Sama;
