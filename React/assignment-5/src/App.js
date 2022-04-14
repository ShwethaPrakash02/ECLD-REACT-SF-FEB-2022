import styles from './App.module.css'
import Biriyani from './components/Biriyani'

const food = [
  {
    src: "/Pictures/Andhra.avif",
    name: "Andhra Spice (Original)",
    items:
      "Biryani, Hyderabadi, Andhra, Kebab, Chinese Kadapa Locality, Kadapa",
    rating: "4.3⭐",
    price: "Rs 250 for one",
  },
  {
    src: "/Pictures/Bahar.avif",
    name: "Bahar Cafe Multicuisine Restaurant",
    items: "Biryani, North Indian, Shake Kadapa Locality, Kadapa",
    rating: "4.2⭐",
    price: "Rs 250 for one",
  },
  {
    src: "/Pictures/Brundavanam.avif",
    name: "Brundavan Multicuisine Train Restaurant",
    items:
      "Andhra, Biryani, Chinese, Desserts, Hyderabadi, Modern Indian, North Indian, Roast Chicken Kadapa Locality, Kadapa",
    rating: "3.7⭐",
    price: "Rs 200 for one",
  },
  {
    src: "/Pictures/Chenuru.avif",
    name: "Chenuru Shivaram Dum Biryani",
    items: "Biryani Kadapa Locality, Kadapa",
    rating: "4.2⭐",
    price: "Rs 100 for one",
  },
  {
    src: "/Pictures/Chickpet.avif",
    name: "Chickpet Donne Biryani House",
    items: "Biryani, Andhra Kadapa Locality, Kadapa",
    rating: "3.7⭐",
    price: "Rs 250 for one",
  },
  {
    src: "/Pictures/Daawat.avif",
    name: "Daawat Mandi Restaurant",
    items: "Biryani, Arabian Kadapa Locality, Kadapa",
    rating: "3.3⭐",
    price: "Rs 250 for one",
  },
  {
    src: "/Pictures/Facecook.avif",
    name: "Facecook Biriyani",
    items: "Biryani, Andhra Kadapa Locality, Kadapa",
    rating: "3.2⭐",
    price: "Rs 250 for one",
  },
  {
    src: "/Pictures/Karthikeya.avif",
    name: "Karthikeya Biryani Zone",
    items: "Biryani, Andhra Kadapa Locality, Kadapa",
    rating: "3.3⭐",
    price: "Rs 100 for one",
  },
  {
    src: "/Pictures/KFC.avif",
    name: "KFC",
    items:
      "Burger, Fast Food, Biryani, Desserts, Beverages Kadapa Locality, Kadapa",
    rating: "4.2⭐",
    price: "Rs 250 for one",
  },
  {
    src: "/Pictures/Maharaja.avif",
    name: "Hotel Maharaja",
    items: "Biryani, North Indian, South Indian Kadapa Locality, Kadapa",
    rating: "4.1⭐",
    price: "Rs 250 for one",
  },
  {
    src: "/Pictures/Rayachotty.avif",
    name: "Rayachoty Rajadhani Family Restaurant",
    items:
      " Biryani, Hyderabadi, North Indian, Andhra, South Indian Kadapa Locality,Kadapa",
    rating: "4.0⭐",
    price: "Rs 250 for one",
  },
  {
    src: "/Pictures/Rayalseema.avif",
    name: "Rayalseema Spice Family Restaurant",
    items: "Biryani, North Indian, Andhra, Hyderabadi Kadapa Locality, Kadapa",
    rating: "4.1⭐",
    price: "Rs 200 for one",
  },
];

function App() {
  return (
    <>
      <div className={styles.align}>
        {food.map((e) => {
          return(
          <Biriyani
          src={e.src}
            name={e.name}
            items={e.items}
            rating={e.rating}
            price={e.price}
          />
          )
        })}
      </div>
    </>
  );
}


export default App;
