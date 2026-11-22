import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { auth } from "../firebase/Config.js";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Tasks() {
      let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if(!user){
      navigate("/")
    }})

        if (loading) {
    return (
      <div>
        <Header/>
        <p>Loading...</p>
        <Footer/>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <Header/>
        <p>Error: {error.message}</p>
          <Footer/>
      </div>
    );
  }
if(user){
  if(!user.emailVerified){
navigate("/")
  }
  if(user.emailVerified){
  }  return (
      <>
       <Helmet>
        <title>Tasks Page</title>
      </Helmet>
      <Header/>
      <main className="page-content">Tasks Page</main>
<Footer/>
    </>
  )
}

}

