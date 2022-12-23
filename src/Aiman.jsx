import React, { useEffect, useState } from 'react';
import reviews from './reviews';
function Aiman() {
    const [review, setReview] = useState(reviews[0]);
    const [reviewNm, setReviewNm] = useState(0);

    useEffect(() => {
        setReview(reviews[reviewNm]);
    }, [reviewNm]);

    const goRight = () => {
        if (reviewNm === reviews.length - 1) return;
        setReviewNm((oldnr) => oldnr + 1);
    };

    const goLeft = () => {
        if (reviewNm <= 0) return;
        setReviewNm((oldnr) => oldnr - 1);
    };

    const { id, name, image, title, quote } = review;
    return (
        <div>
            <section className="section">
                <div className="title">
                    <h2>Reviews</h2>
                </div>
                <div className="section-center">
                    <button onClick={goRight} className="prev">
                        &lt;
                    </button>
                    <ul>
                        {
                            <li key={id}>
                                <img
                                    src={image}
                                    alt="image"
                                    className="person-img"
                                />
                                <h4>{name}</h4>
                                <h4>{title}</h4>
                                <p>{quote}</p>
                            </li>
                        }
                    </ul>
                    <button onClick={goLeft} className="next">
                        &gt;
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Aiman;
