import './product-details.css'

const ProductDetails = ({ nombre, descripcion, precio, SKU, cantidad }) => {
    return (
        <div className="product-details">
            <h2>Nombre: {nombre}</h2>
            <p >Descripción: <span>{descripcion}</span> </p>
            <p>Precio: <span>{precio}</span></p>
            <p>SKU: <span>{SKU}</span> </p>
            <p>Cantidad disponible: <span>{cantidad}</span></p>
        </div>
    )
}

export default ProductDetails
