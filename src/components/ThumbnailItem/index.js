// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const thumbnailClassName = isActive? `thumbnail active` : `thumbnail`

  const onClickThumbanil = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className='thumbnail-btn'
        onClick={onClickThumbanil}
      >
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
