import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Protected() {

  const { isLoaded, isSignedIn } = useAuth()
  const navigate = useNavigate()
  
  if(!isLoaded) {
    return <h1 className="text-3xl">cargando</h1>
  }
  else {
    if(!isSignedIn) {
      alert('No está logeado')
      navigate('/')
    }

    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  
}
