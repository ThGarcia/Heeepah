import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const loginEmail = async () => {
    await signInWithEmailAndPassword(auth, email, senha);
  };

  const loginGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
      <button onClick={loginEmail}>Entrar</button>
      <button onClick={loginGoogle}>Entrar com Google</button>
    </div>
  );
}