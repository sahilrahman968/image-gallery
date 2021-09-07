import React from 'react'

function SearchBox(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          backgroundColor: 'black',
          justifyContent: 'center',
          fontSize: '30px',
          color: 'white',
        }}
      >
        IMAGE SEARCH
      </div>
      <div
        style={{
          display: 'flex',
          backgroundColor: 'black',
          justifyContent: 'center',
        }}
      >
        <input
          style={{ width: '30%', margin: '20px' }}
          type='text'
          placeholder='search for anything'
          onInput={props.handleChange}
        />
        <button
          style={{ margin: '20px' }}
          onClick={props.handleSubmit}
          className='btn btn-outline-success'
          type='submit'
        >
          Search
        </button>
      </div>
    </>
  )
}

export default SearchBox
