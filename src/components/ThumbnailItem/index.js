// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails} = props
  const {thumbnailUrl, thumbnailAltText} = imageDetails

  return (
    <li>
      <button type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
