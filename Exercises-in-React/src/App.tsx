import ProductCard from "./exer-7/ProductCard"
import Welcome from "./exer-7/Welcome"
import WelcomeWithType from "./exer-7/WelcomeWithType"
import Counter from "./exer-8/Counter"
import TodoList from "./exer-8/TodoList"
import UserData from "./exer-8/UserData"


const App = () => {
  return (
    <div>
      {/* exercise 7 */}
      {/* <Welcome name="premium user" isPremium={false}/>
      <WelcomeWithType name="premium user" isPremium={true}/>
      <ProductCard productName="Smartphone" price={799.99}/>      
      <ProductCard productName="Laptop" price={999.99} description="A high-performance laptop."/> */}

      {/* exercise 8 */}
      <Counter />
      <UserData/>
      <TodoList/>
    </div>
  )
}

export default App
