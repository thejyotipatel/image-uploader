import React from 'react'
import img from './image.svg'

const ImageContainer = () => {
  return (
    <div className='img-contant'>
      <header>
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
      </header>
      <div className='img-uploader'>
        <img src={img} alt='image.svg' />
        <p className=''>Drag & Drop your image here</p>
      </div>

      <p className='or'>or</p>
      <button type='button'>Choose a file</button>
    </div>
  )
}

export default ImageContainer
