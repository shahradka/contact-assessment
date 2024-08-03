import React from 'react';

export interface IIcon{
    width?:number
    height?:number
    children? :React.ReactNode
    rotation?: string
}

const Icon = ({height, children, width, rotation = "0"}:IIcon) => {
    return <svg style={{transform:`rotate(${rotation}deg)`}} 
            width={width} height={height} viewBox={`0 0 25 25`} fill="none" xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>
}

export default Icon;