import React from "react";

function Book(props) {
  return (
    <div>
        <h1>{`이 책의 이름은 ${props.title} 입니다.`}</h1>
        <h2>{`이 책은 총 ${prop.numOfPage}페이지로 이루어져 있습니다.`}</h2>
    </div>
  );
}

export default Book;