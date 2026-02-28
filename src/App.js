import RouterApp from "./routes/Router";
import AuthProvider from "./context/AuthContext";
import "./styles/global.css";

function App() {
  return (
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  );
}

export default App;
