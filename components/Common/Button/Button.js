import React from 'react';

export default function Button({text, isBackgroundRed, onClick}) {
    return (
        <div className={isBackgroundRed === true ? "button redButton" : "button"}
             onClick={onClick}
        >
            {text}
        </div>
    );

}
