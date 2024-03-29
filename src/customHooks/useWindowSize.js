import React, { useEffect, useState } from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState(getSize);
    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize())
        }
        window.addEventListener("resize",handleResize);

        return () => window.removeEventListener("resize", handleResize)
    },[])
    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

  return windowSize;
}

export default useWindowSize