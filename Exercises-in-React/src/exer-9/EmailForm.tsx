import { useState } from "react"

interface EmailFormProps {
    onSubmit: (email: string) => void;
}
const EmailForm = ({onSubmit}: EmailFormProps) => {

    const [email, setEmail] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(email);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default EmailForm
