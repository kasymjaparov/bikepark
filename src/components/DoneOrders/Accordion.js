import { useState } from "react"
import "./DoneOrders.css"

export default function Accordion(props) {
  const [show, setShow] = useState(false)
  return (
    <div className='accordion'>
      <div onClick={() => setShow(!show)} className='accordion_header'>
        <div className='accordion_header_group'>
          <div
            className={
              !show
                ? `accordion_header_arrow accordion_header_arrow-right`
                : `accordion_header_arrow accordion_header_arrow-down`
            }
          />
          <div className='accordion_header_number'>{props.number}</div>
        </div>

        <div className='accordion_header_date'>{props.date}</div>
        <div className='accordion_header_price'>{props.price}</div>
      </div>
      {show && <div className='accordion_body'>{props.children}</div>}
    </div>
  )
}
