import React from 'react'

export default function bt12() {
  return (
    <div>
      <div style={{position:'relative',width:"100%",height:50,backgroundColor:'gray'}}></div>
      <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{position:'relative',width:"30%",height:500,backgroundColor:'blue'}}></div>
        <div style={{position:'relative',width:"70%",height:500,backgroundColor:'black' ,}}>
            <div style={{position:'relative',width:"90%",height:400,backgroundColor:'white', marginLeft:45 , marginTop:50}}></div>
        </div>
      </div>
      <div style={{position:'relative',width:"100%",height:50,backgroundColor:'red'}}></div>
    </div>
  )
}
