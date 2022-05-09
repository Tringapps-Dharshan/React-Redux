import React from 'react'
import { useSelector } from 'react-redux'
export default function Header() {
    const store = useSelector((state) => state.web)
    return (
        <div className='header'>
            <div className='headerin'>
                <div>Welcome {store.name}</div>
            </div>
        </div>
    )
}