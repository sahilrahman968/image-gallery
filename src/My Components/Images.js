import React, { useState } from 'react'
import Modal from 'react-modal'
import './images.css'
function Images(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [clickedImage, setClickedImage] = useState('')
  return (
    <div>
      <div>
        {props.result.map((photo) => {
          return (
            <div>
              <div className='grid-container'>
                <img
                  className='grid-item'
                  /* className='my-3 mx-3' */
                  src={photo.urls.small}
                  alt=''
                  onClick={(e) => {
                    setModalIsOpen(true)
                    console.log(e.target)
                    setClickedImage(photo.urls.small)
                  }}
                />
              </div>
              <Modal isOpen={modalIsOpen}>
                <div
                  style={{
                    display: 'flex',

                    justifyContent: 'center',
                    fontSize: '30px',
                    color: 'white',
                  }}
                >
                  <img className='my-3 mx-3' src={clickedImage} alt='' />
                </div>
                <div
                  style={{
                    display: 'flex',

                    justifyContent: 'center',
                    fontSize: '30px',
                    color: 'white',
                  }}
                >
                  <button
                    onClick={() => {
                      setModalIsOpen(false)
                    }}
                  >
                    Close
                  </button>
                </div>
              </Modal>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Images
