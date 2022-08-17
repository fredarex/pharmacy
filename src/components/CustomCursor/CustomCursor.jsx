import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Cursor } from './Cursor'

const mapState = (state) => {
    return {
        cursorType: state.features.cursorType
    }
}

function CustomCursor() {
    const {cursorType} = useSelector(mapState);
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y:400
    });
    const onMouseMove = event => {
        const {pageX: x, pageY:y} = event;
        setMousePosition({x, y});
    }

    useEffect(() => {
        document.addEventListener('mousemove',onMouseMove);
        return () => {
            document.removeEventListener('mousemove',onMouseMove);
        }
    },[]);

  return (
    <Cursor className={`${!!cursorType ? "hovered" : ""} ${cursorType}`}
    style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}} />
  )
}

export default CustomCursor