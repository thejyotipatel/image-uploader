import { useState } from 'react'
import ImageContainer from './components/ImageContainer'
import UploadingLoading from './components/UploadingLoading'
import ImageAfterUpdoad from './components/ImageAfterUpdoad'
import Alert from './components/alert'

function App() {
  const [isUploading, setIsUploading] = useState(false)
  return (
    <div className='app'>
      {/* <ImageContainer /> */}
      {/* {isUploading && <UploadingLoading />} */}
      <ImageAfterUpdoad />
      {isUploading && <Alert />}
    </div>
  )
}

export default App
