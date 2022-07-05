import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div>
        <div className="sidebar">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            </div>

             {/* Page content --> */}
            <div className="content">
            ..
        </div>
`    </div>
  )
}
