import React, {useState, useEffect} from 'react';

export default function RatingBar({rate, width}) {
    const [rateBarPercentage, setRateBarPercentage] = useState(0)

    useEffect(() => {
        calculateWidth()
    }, [])


    function calculateWidth() {
        setTimeout(() => {
            setRateBarPercentage(parseFloat(rate) * 10 + "%")
        }, 100)
    }


    return (
        <div className={"movieRatingBar"} style={{width}}>
            <div style={{width: rateBarPercentage}}/>
        </div>
    );

}



