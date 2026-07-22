function MenuCard({ name, price, description, image }) {
  return (
    <div className="menu-card">
      <img src={image} alt={name} className="menu-card-image" />
      <h3 className="card-name">{name}</h3>
      <p className="card-description">{description}</p>
      <p className="card-price">{price.toFixed(2)}</p>
    </div>
  );
}

export default MenuCard;
