import React from 'react'
import '../Css/Filters.css'
import Accordion from 'react-bootstrap/Accordion';
function Filters(props) {
  return (
    <>
        <Accordion className='acod' defaultActiveKey="0" flush>
          {
            props.data.map((row)=>{
              return  <Accordion.Item eventKey={row.No} >
              <Accordion.Header >{row.title}</Accordion.Header>
              {
                row.category.map((e)=>{
                  return     <Accordion.Body className='py-1' onClick={() => { props.action(row.title,e) }} >{e}</Accordion.Body>
                })
              }
            </Accordion.Item>
            })
          }
    </Accordion>
    </>
  )
}

export default Filters
