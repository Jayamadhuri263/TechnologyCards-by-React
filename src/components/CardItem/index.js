import './index.css'

const CardItem = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <div className={`${className} list-item`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="image" alt={`${title}-img`} />
      </div>
    </div>
  )
}

export default CardItem
