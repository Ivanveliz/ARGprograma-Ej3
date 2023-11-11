
import './App.css';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {

  const DATA = {
    nombre: 'Producto ejemplo',
    descripcion: 'Éste texto es un ejemplo de descripción',
    precio: '$12312',
    SKU: '123ASD',
    cantidad: '32'
  }

  return (
    <div>
      <h1>Productos</h1>
      <ProductDetails  {...DATA} />
    </div>
  );
}

export default App;
