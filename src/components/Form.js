import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label for="exampleFormControlInput1">Name</label>
            <input class="form-control" id="exampleFormControlInput1"></input>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <label for="exampleFormControlInput2">Subject</label>
            <input class="form-control" id="exampleFormControlInput2"></input>
            <label for="exampleFormControlTextarea1">Comments</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type a short message here"></textarea>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Form