import { useState } from 'react';
import { flowers } from './data.js';
import styles from './App.module.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (price) => {
    setCartCount(prevCount => prevCount + 1);
    setTotalPrice(prevPrice => prevPrice + price);
  };

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>🌸 Flower Shop for Valeriia</div>
        <div className={styles.cart}>
          🛒 Кошик: <strong>{cartCount}</strong> шт. | <strong>{totalPrice} ₴</strong>
        </div>
      </header>

      <main className={styles.catalog}>
        {flowers.map((flower) => (
          <div key={flower.id} className={styles.productCard}>
            <img 
              src={flower.image} 
              alt={flower.name} 
              className={styles.image} 
              loading="lazy"
            />
            <div className={styles.info}>
              <h3 className={styles.name}>{flower.name}</h3>
              <p className={styles.price}>{flower.price} ₴</p>
              <button 
                className={styles.button}
                onClick={() => handleAddToCart(flower.price)}
              >
                В кошик
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;