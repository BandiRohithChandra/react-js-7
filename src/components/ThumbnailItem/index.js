// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, handleThumbnailClick, isActive} = props
  const {id, imageurl, thumbnailUrl, imageAltText, thumbnailAltText} =
    imageDetails
  const handleClick = () => {
    handleThumbnailClick(id)
  }

  const activeImg = isActive ? 'thumbnail-container-active' : ''

  return (
    <div>
      <div>
        <img src = {imageurl} alt = {imageAltText} className = "images" />
      </div>
      <p>Nature Photography by Rahul</p>
      <div className={`thumbnail-container ${activeImg}`} onClick={handleClick}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </div>
    </div>
  )
}

export default ThumbnailItem
