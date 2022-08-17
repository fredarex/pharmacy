
export const cylinderWrapper = {
    hidden: {
        y:-1000
    },
    show: {
        y: 0,
        transition: {
            delay: 0.6,
            duration: 1.8,
            type: "spring",
        }
    }

}

export const cylinderItem = {
    hidden: {},
    show : (i) => ({
        y:[30, 0, 30],
        transition: {
            duration: 1.6 * i,
            ease: "linear",
            repeat:Infinity,
        }
    })
};


export const hexagonWrapper = {
    hidden: {
        opacity:0,
        x:0,
        y:0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1.5,
            
        }
    },
    exit: {
        opacity: 1,
        y:0,
        x:0,
        transition: {
            ease: "easeInOut",
            duration: 3.5
        }
    }
};

export const hexagonItem = {
    hidden: {},
    show :(i) => ({
        y: [0,60,60,-90,120,0],
        x:[0,80,60,90,70,0],
        
        transition: {
            duration: 12 * i,
            ease: "easeInOut",
            repeat:Infinity,
        },
        exit: {
            opacity: 1,
            
            transition: {
                ease: "easeInOut",
                duration: 5
            }
        }
    })
};

