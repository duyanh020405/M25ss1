import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFile, faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';

export default function Bt10() {
  return (
    <div> 
      <FontAwesomeIcon style={{width:30}} icon={faFile} />   
      <FontAwesomeIcon style={{width:50}} icon={faCoffee} />  
      <FontAwesomeIcon style={{width:50}} icon={faEye} />     
    </div>
  );
}
