import React from 'react'

const SubmitForm = () => {
  return (
    <>
        <h3>Email Newsletter</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form>
          <input type="email"  placeholder="Enter Email..." />
          <input
            type="submit"
            defaultValue="Subscribe"
            className="btn btn-primary"
          />
        </form>
    </>
  )
}

export default SubmitForm