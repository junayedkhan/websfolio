import React from 'react'

const Title = ({title_bg, text_1, text_2}) => {

    return (
        <>
        <div className="title_section">
            <span className="title_bg" >{title_bg}</span>
            <h1 className="title" >{text_1} <span>{text_2}</span></h1>
        </div>
        </>
    )
}

export default Title;
