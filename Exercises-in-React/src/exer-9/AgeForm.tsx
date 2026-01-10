import { useState } from "react";

interface AgeFormProps {
    onSubmit: (age: number) => void;
}
const AgeForm = ({onSubmit}:AgeFormProps) => {

    const [age, setAge] = useState(0);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(age);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Age:
                <input 
                    type="number" 
                    name="age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))} 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default AgeForm
