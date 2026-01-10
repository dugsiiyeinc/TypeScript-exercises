
interface ProductCardProps {
    productName: string;
    price: number;
    description?: string;
}

const ProductCard = ({productName,price,description}:ProductCardProps) => {
  return (
    <div>
        <h2>{productName}</h2>
        <p>Price: ${price.toFixed(2)}</p>
        {description && <p>{description}</p>}
    </div>
  )
}

export default ProductCard
