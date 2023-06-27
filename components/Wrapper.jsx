import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`w-full max-w-[1280p] px-5 md:px-05 mx-auto ${className || " "}`}>
        {children}
    </div>
  )
}

export default Wrapper