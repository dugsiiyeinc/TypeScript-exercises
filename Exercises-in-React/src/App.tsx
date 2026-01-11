import UseLocalStorage from "./exer-10/UseLocalStorage"
import UseNumberStorage from "./exer-10/UseNumberStorage"
import UseSettingStorage from "./exer-10/UseSettingStorage"
import ProductCard from "./exer-7/ProductCard"
import Welcome from "./exer-7/Welcome"
import WelcomeWithType from "./exer-7/WelcomeWithType"
import Counter from "./exer-8/Counter"
import TodoList from "./exer-8/TodoList"
import UserData from "./exer-8/UserData"
import AgeForm from "./exer-9/AgeForm"
import ContactForm from "./exer-9/ContactForm"
import EmailForm from "./exer-9/EmailForm"


const App = () => {

  const handleSubmit = (email: string) => {
    console.log("Submitted email:", email);
  }

  // const [score, setScore] =UseNumberStorage('userScore', 10);
  // const [setting, setSetting]= UseSettingStorage('setting',{language:'en',notification:true })

  // using custom hooks to store number and object in localStorage
  const [score, setScore]=UseLocalStorage<number>('userScore', 10)
  const [setting, setSetting]=UseLocalStorage<{language:string, notification:boolean}>('setting',{language:'en',notification:true })

  return (
    <div>
      {/* exercise 7 */}
      {/* <Welcome name="premium user" isPremium={false}/>
      <WelcomeWithType name="premium user" isPremium={true}/>
      <ProductCard productName="Smartphone" price={799.99}/>      
      <ProductCard productName="Laptop" price={999.99} description="A high-performance laptop."/> */}

      {/* exercise 8 */}
      {/* <Counter />
      <UserData/>
      <TodoList/> */}

      {/* exercise 9 */}
      {/* <EmailForm onSubmit={handleSubmit}/>
      <AgeForm onSubmit={(age:number) => console.log( age < 18 ? alert('you can not submit'): age)}/>
      <ContactForm onSubmit={(contact:{name:string, email:string}) => console.log(contact)}/> */}

      {/* exercise 10 */}
      <div>
        <h2>User Score: {score}</h2>
        <button onClick={() => setScore(score + 5)}>Increase Score by 5</button>
        <h2>Settings:{setting?.language}</h2>
        <button onClick={() => setSetting({language: 'es', notification: false})}>Change Settings</button>
      </div>

    </div>
  )
}

export default App
