import React, { useState } from 'react'
import axios from 'axios'
import Images from './My Components/Images'
import Navbar from './My Components/Navbar'
import SearchBox from './My Components/SearchBox'

function App() {
  const [photo, setPhoto] = useState('')
  const clientId = 'vaDD7Jdia-bD4ukxAQHS6FunRe4voOsZflua-0UwTqI'
  const [result, setResult] = useState([])
  let searchTerm = localStorage.getItem('searchTerm')
  var searchTermArray = []
  function handleChange(event) {
    setPhoto(event.target.value)
    console.log(photo)
    if (searchTerm == null) {
      searchTermArray = []
    } else {
      searchTermArray = JSON.parse(searchTerm)
    }
  }
  function handleSubmit() {
    if (searchTerm == null) {
      searchTermArray = []
    } else {
      searchTermArray = JSON.parse(searchTerm)
    }
    if (photo !== '') {
      searchTermArray.push(photo)
      localStorage.setItem('searchTerm', JSON.stringify(searchTermArray))
      console.log(searchTermArray + ' ' + localStorage.getItem('searchTerm'))
      const url =
        'https://api.unsplash.com/search/photos?page=1&query=' +
        photo +
        '&client_id=' +
        clientId
      axios.get(url).then((response) => {
        setResult(response.data.results)
        console.log(result)
      })
    } else {
      alert('enter valid search term')
    }
  }

  return (
    <div className='App'>
      {/* <Navbar handleChange={handleChange} handleSubmit={handleSubmit} /> */}
      <SearchBox handleChange={handleChange} handleSubmit={handleSubmit} />

      <Images result={result} />
    </div>
  )
}

export default App
