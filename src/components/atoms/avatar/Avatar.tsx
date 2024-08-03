import React, { ImgHTMLAttributes } from "react";
import "./styles.scss";
import classNames from "classnames";

interface IAvatar extends ImgHTMLAttributes<HTMLImageElement>{
    height:number
    width:number,
    url:string
}

const Avatar = ({height, width, url, className, ...restProps}:IAvatar) => {

    return <img className={classNames([className, "avatar"])} width={width} height={height} src={url} alt="AVATAR_IMG" {...restProps} />

}

export const Avatar30 = ({url}:{url:string}) => <Avatar width={30} height={30} url={url} />
export const Avatar94 = ({url}:{url:string}) => <Avatar width={94} height={94} url={url} />