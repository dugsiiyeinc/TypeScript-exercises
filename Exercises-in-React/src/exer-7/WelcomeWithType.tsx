
type WelcomeProps = {
    name: string;
    isPremium: boolean;
}
const WelcomeWithType = ({name, isPremium}:WelcomeProps) => {
  return (
    <div>
        <h1>Welcome, {isPremium ? name : 'Guest'}!</h1>
    </div>
  )
}

export default WelcomeWithType
