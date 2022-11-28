import React, {FC} from 'react';

type SVGComponentType = {
    color: string
    path: string
    viewBox: string
    height: string
}

export const SvgComponent: FC<SVGComponentType> = ({color,path, viewBox,height}) => {

    return (

            <svg width="18" height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d={path}
                    fill={color}/>
            </svg>
    );
};

