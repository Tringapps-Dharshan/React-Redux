import React from 'react'
import { useSelector } from 'react-redux'
export default function Footer() {
    const store = useSelector((state) => state.web)
    return (
        <div className='footer'>
            <div className='footerin'>
                <div>{store.name}</div>
                <div>{store.address}</div>
            </div>
        </div>
    )
}