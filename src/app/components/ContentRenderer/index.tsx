import React from 'react'
import "./ContentRenderer.scss";

interface ContentRendererProps{
  data : {
    head : string,
    content : string
  }
}

function ContentRenderer({data}:ContentRendererProps) {
  return (
    <div className='ContentRenderer'>
      {
        data.head && <h1>{data.head}</h1>
      }
      <React.Fragment>{data.content.split('\n').map((item, index) => (
        <p key={index}>
          {item}
        </p>
      ))}</React.Fragment>
    </div>
  )
}

export default ContentRenderer;