import MenuCard from "../components/MenuCard";
import "./Menu.css";
import IcedCaramel from "../assets/menuPictures/Iced Caramel Macchiato.jpg";
import InstantExpresso from "../assets/menuPictures/Instant Espresso Recipes.jpg";
import CoffeeCortado from "../assets/menuPictures/Smooth flat white UK coffee.jpg";
import SmoothCreamy from "../assets/menuPictures/Smooth flat white UK coffee.jpg";
import Tintura from "../assets/menuPictures/tintura de café para espabilar.jpg";
import Moncha from "../assets/menuPictures/Mocha.jpg";

function Menu() {
  return (
    <>
      <div className="menu-page">
        <h1 className="menu-title">Our Menu</h1>
        <div className="menu-grid">
          <MenuCard
            name="Iced Caramel "
            price={3.5}
            description="Sweet caramel meets bold espresso and chilled milk, creating a smooth, refreshing drink that's perfect for any season."
            image={IcedCaramel}
          ></MenuCard>
          <MenuCard
            name="Chocolate Latte"
            price={3}
            description="A bold and aromatic espresso crafted for coffee lovers who crave rich flavor and a quick energy boost at any time of the day."
            image={InstantExpresso}
          ></MenuCard>
          <MenuCard
            name="Coffee Cortado"
            price={2.5}
            description="A perfectly balanced espresso gently softened with steamed milk, creating a smooth, rich taste with every sip."
            image={CoffeeCortado}
          ></MenuCard>
          <MenuCard
            name="Smooth Creamy"
            price={2}
            description="A velvety coffee made with silky steamed milk and premium espresso, delivering a luxuriously creamy texture and comforting flavor."
            image={SmoothCreamy}
          ></MenuCard>
          <MenuCard
            name="Tintura"
            price={5}
            description="A signature dark roast infused with deep, earthy notes and a subtle hint of spice, crafted for those who enjoy a bold and unforgettable coffee."
            image={Tintura}
          ></MenuCard>
          <MenuCard
            name="Moncha"
            price={4}
            description="A delicious blend of espresso, steamed milk, and rich chocolate, topped with a light layer of foam for the perfect balance of coffee and cocoa."
            image={Moncha}
          ></MenuCard>
        </div>
      </div>
    </>
  );
}

export default Menu;
