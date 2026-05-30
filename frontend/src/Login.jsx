import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    async function handleLogin() {
        const response = await fetch(
            "http://localhost:3000/login",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify({
                    username, password
                })
            }
        );

        const data = await response.json();

        if(response.ok){
            localStorage.setItem(
                "token",
                data.token
            );

            navigate("/profile");
        }else {
            alert(data.message);
        }
    }

    return(
        <div>
            <h1> Login </h1>

            <input 
                placeholder="Username"
                value={username}
                onChange={(e) => 
                    setUsername(e.target.value)
                }
            />

            <br/>
            <br/>

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => 
                    setPassword(e.target.value)
                }
            />
            <br/>
            <br/>

            <button onClick={handleLogin}> 
                Login
            </button>

        </div>
    );
}

export default Login;