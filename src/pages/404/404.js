import React from "react"
import "./404.css"
export default function NoPage() {
  return (
    <div className='nopage'>
      <div className='nopage_block'>
        <h1 className='nopage_title'>404</h1>
        <p className='nopage_text'>
          The page does not exist or has not created yet
        </p>
        <div className='nopage_btn'>Back to main page</div>
      </div>
    </div>
  )
}
