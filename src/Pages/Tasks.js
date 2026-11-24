import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { auth } from "../firebase/Config.js";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Tasks.css";
import { FaPlus } from "react-icons/fa6";
import { Link} from "react-router-dom";
import Modal from "shared/Modal.jsx";
import { useState } from "react";
export default function Tasks() {
      let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
    const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if(!user){
      navigate("/")
    }})
const closeModal = () => {
  setShowModal(false);
}
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
      <main className="task">
        <section className="layout">

        {/* filtered data */}
      <section className="btns flex">
      <select id="options">
        <option value="">All Tasks</option>
        <option value="">Completed</option>
        <option value="">Not Completed</option>
      </select>
      <button >Newest first</button>
      <button>Oldest first</button>
      <button className="add-task"
      onClick={() => {
        setShowModal(true);
      }
      }>Add task<FaPlus /></button>
      {showModal &&(<Modal closeModal={closeModal}>
        <div className="task-modal">
           <input
               onChange={(eo) => {
                 
               }}
               required
               placeholder="task"
               type="text"
             />
             <div className="sub-task">
              <input
                onChange={(eo) => {
                  
                }}
                required
                placeholder="sub-task"
                type="text"
              />
              <button onClick={(eo) => {
              eo.preventDefault();
                }}>
               add
              </button>
             </div>
             <button
               onClick={(eo) => {
            eo.preventDefault();
               }}
             >
               Submit
             </button>
        </div>
           
        </Modal>)}
      </section>
<section className="tasks-wrapper">
        {/* all taska */}
<section className="flex all-task">
  <article dir="auto" className="one-task">
     <Link to="/edit-task">
    <h2>New Tasks</h2>
    <ul>
      <li>Sub task 1</li>
      <li>Sub task 2</li>
    </ul>
    <p className="time">a day ago</p>
    </Link>
  </article>
  </section>
</section>
        </section>
      </main>
<Footer/>
    </>
  )
}

}

