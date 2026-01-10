import ProductCard from "./exer-7/ProductCard"
import Welcome from "./exer-7/Welcome"
import WelcomeWithType from "./exer-7/WelcomeWithType"


const App = () => {
  return (
    <div>
      <Welcome name="premium user" isPremium={false}/>
      <WelcomeWithType name="premium user" isPremium={true}/>
      <ProductCard productName="Smartphone" price={799.99}/>      
      <ProductCard productName="Laptop" price={999.99} description="A high-performance laptop."/>
    </div>
  )
}

export default App
