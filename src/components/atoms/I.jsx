import React from "react";


const I = ({text, className }) => {
  return (
    <i
        aria-hidden="true"
        className={className}
    >
        {text}
    </i>
  );
}

export default I;