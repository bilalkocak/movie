import React from 'react';


const url = "https://www.google.com/search?q=";

export default function CrewInfo({actors, writers, directors}) {
    return (
        <>
            {writers && actors && directors && <div className={"movieCrew"}>
                <div>
                    <div className={"crewTitle"}>Director:</div>
                    <div className={"crewName"}>
                        {directors}
                    </div>
                </div>
                <div>
                    <div className={"crewTitle"}>Writers:</div>
                    <div className={"crewName"}>
                        {writers}
                    </div>
                </div>
                <div>
                    <div className={"crewTitle"}>Stars:</div>
                    <div className={"crewName"}>
                        {actors}
                    </div>
                </div>
            </div>}
        </>
    );

}
