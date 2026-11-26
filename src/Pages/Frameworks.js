import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";
import { Helmet} from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config.js";
export default function Frameworks() {
    let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [array, setArray] = useState(["html","css","js"]);
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
  return (
      <>
      <Helmet>
          <title>Framework Page</title>
        </Helmet>
<Header/>
      {/* <Content data="Frameworks"/> */}
      {array.map((item) => (
        
         <h1 
// @ts-ignore
         key={array}>{item}</h1>
      )
      )}
  <Footer/>
    </>
  )
        }
      }

}
