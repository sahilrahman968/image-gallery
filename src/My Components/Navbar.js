import React from 'react'

function Navbar(props) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <div>
            <a className='navbar-brand' href='#'>
              <b>Unsplash Image Search</b>
            </a>
          </div>

          <div>
            <input
              className='my-3 mx-3'
              onInput={props.handleChange}
              type='text'
              name='photo'
              placeholder='search for photos..'
            />
            <button
              onClick={props.handleSubmit}
              className='btn btn-outline-success'
              type='submit'
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
