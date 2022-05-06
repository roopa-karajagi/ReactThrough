import React from 'react'

const DemoOutput = (props) => {
  return (
    <div>
        {props.show ? 'This is paragraph' :''}
    </div>
  )
}

export default React.memo(DemoOutput);

// React memo ask react do comparison on 

// props.show === Prev.props.show

// it actually avoids an unnecessary re-rendering of the component