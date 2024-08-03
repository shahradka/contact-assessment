import React from "react"
import Icon, { IIcon } from "../Icon";

const Phone = ({height, width}:IIcon) => {
    return <Icon height={height} width={width}>
            <path d="M16.5 15C15 16.5 15 18 13.5 18C12 18 10.5 16.5 9 15C7.5 13.5 6 12 6 10.5C6 9 7.5 9 9 7.5C10.5 6 6 1.5 4.5 1.5C3 1.5 0 6 0 6C0 9 3.08175 15.0817 6 18C8.91825 20.9182 15 24 18 24C18 24 22.5 21 22.5 19.5C22.5 18 18 13.5 16.5 15Z" fill="currentColor"/>
        </Icon>


}

export const Phone24 = () => <Phone height={24} width={24} />
export const Phone15 = () => <Phone height={15} width={15} />
export const Phone10 = () => <Phone height={10} width={10} />