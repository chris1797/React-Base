import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>안녕 리액트!</h1>
            <h2>{`현재 시각은 ${props.date.toLocaleTimeString()} 입니다.`}</h2>
        </div>
    );
}

export default Clock;