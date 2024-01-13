import React from 'react'

type Props = {
    outerColor: string,
    innerColor: string,
}

const ColorBox = (props: Props) => {
    return (
        <div className='p-5 rounded-sm' style={{ backgroundColor: `${props.outerColor}` }}>
            <div className="p-5 rounded-sm" style={{ backgroundColor: `${props.innerColor}` }}>
            </div>
        </div>
    )
}

export default ColorBox