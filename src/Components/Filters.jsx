import React from 'react';
import '../Css/Filters.css';
import Accordion from 'react-bootstrap/Accordion';

function Filters(props) {
  return (
    <>
      <Accordion className='acod' defaultActiveKey="0" flush>
        {
          props.data.map((row, index) => (
            <Accordion.Item eventKey={row.No} key={index}>
              <Accordion.Header>{row.title}</Accordion.Header>
              {
                row.category.map((e, innerIndex) => (
                  <Accordion.Body
                    className='py-1'
                    onClick={() => { props.action(row.title, e) }}
                    key={`${row.id ?? index}-${innerIndex}`}
                  >
                    {e}
                  </Accordion.Body>
                ))
              }
            </Accordion.Item>
          ))
        }
      </Accordion>
    </>
  );
}

export default Filters;
