import React from 'react'

function Footerr(props) {
    let { linkName} = props;

  return (
    <div>
         <ul className='links'>
        {linkName.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
 

export default Footerr