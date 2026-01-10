import { useState } from "react";

interface ContactFormProps {
    onSubmit: (data: {name: string; email: string}) => void;
}
const ContactForm = ({onSubmit}:ContactFormProps) => {
    const [contactForm, setContactForm] = useState({name: '', email: ''});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(contactForm);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    name="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})} 
                />
            </label>
            <br />
            <label>
                Email:
                <input 
                    type="email" 
                    name="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})} 
                />
            </label>
            <br />
            <button type="submit">Submit</button>   
        </form>
      
    </div>
  )
}

export default ContactForm
