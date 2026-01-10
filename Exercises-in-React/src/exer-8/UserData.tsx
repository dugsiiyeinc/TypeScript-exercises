import { useState } from "react";

interface User {
    name: string;
    email: string;
}
const UserData = () => {

    const [user, setUser] = useState<User | null>(null);
  return (
    <div>
        <button onClick={() => setUser({name: "jamal", email: "jamal@gmail.com"})}>Set User Data</button>
        {user ? (
            <div>
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        ) : (
            <p>No user data available.</p>
        )}
    </div>
  )
}

export default UserData
