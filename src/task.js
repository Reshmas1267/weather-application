

const products = [
  {
    name: 'Product 1',
    image: 'https://via.placeholder.com/150',
    description: 'This is a product description',
  },
  {
    name: 'Product 2',
    image: 'https://via.placeholder.com/150',
    description: 'This is another product description',
  },
  // Add more products here
];

function Task() {
  return (
    <div className="App">
      <header>
        <h1>Site Name</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.name} className="product-item">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Site Name</p>
      </footer>
    </div>
  );
}

export default Task;
