import React from "react"
import Icon, { IIcon } from "../Icon"

const Search = ({height, width}:IIcon) => {
    return <Icon height={height} width={width}>
            <path d="M0.792969 21.168L2.20697 22.582L6.59197 18.197L5.21497 16.746L0.792969 21.168ZM14.125 1C9.22497 1 5.24997 4.974 5.24997 9.875C5.24997 11.794 5.86697 13.565 6.90197 15.018L8.57197 16.778C10.093 18.005 12.019 18.751 14.125 18.751C19.027 18.751 23 14.777 23 9.876C23 4.975 19.027 1 14.125 1ZM14.125 16.75C10.334 16.75 7.24997 13.666 7.24997 9.875C7.24997 6.084 10.334 3 14.125 3C17.916 3 21 6.084 21 9.875C21 13.666 17.916 16.75 14.125 16.75Z" fill="currentColor"/>
        </Icon>

}

export const Search24 = () => <Search height={24} width={24} />
export const Search15 = () => <Search height={15} width={15} />
export const Search10 = () => <Search height={10} width={10} />