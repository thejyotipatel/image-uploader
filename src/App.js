import { useState } from 'react'
import ImageContainer from './components/ImageContainer'
import UploadingLoading from './components/UploadingLoading'
function App() {
  const [isUploading, setIsUploading] = useState(false)
  return (
    <div className='app'>
      <ImageContainer />
      {isUploading && <UploadingLoading />}
    </div>
  )
}

export default App
