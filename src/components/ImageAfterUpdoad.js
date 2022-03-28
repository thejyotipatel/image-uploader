const ImageAfterUpdoad = () => {
  return (
    <div className='after-image-contaner'>
      <img
        src='https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
        alt='image'
        className='img'
      />
      <div className='url-contant'>
        <input type='url' name='copyImage' className='image-url' />
        <button className='copy-btn' onClick={() => console.log('copy')}>
          copy
        </button>
      </div>
    </div>
  )
}
export default ImageAfterUpdoad
