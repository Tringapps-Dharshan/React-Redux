import React from 'react'
import { useSelector } from 'react-redux'
function SideNav() {
    const store = useSelector((state) => state.web)
    const menues = store.sideBar
  return (
    <div className='menus'>
        <ol className='nav-items'>{
            menues.map((i)=>{
                return <li>{i}</li>
            })
        }</ol>
    </div>
  )
}

export default SideNav