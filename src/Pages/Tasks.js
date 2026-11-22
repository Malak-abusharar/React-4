import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { auth } from "../firebase/Config.js";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Tasks.css";
import { FaPlus } from "react-icons/fa6";
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
      <button className="add-task">Add task<FaPlus /></button>
      </section>
<section className="tasks-wrapper">
        {/* all taska */}
<section className="flex all-task">
  <article dir="auto" className="one-task">
    <h2>New Tasks</h2>
    <ul>
      <li>Sub task 1</li>
      <li>Sub task 2</li>
    </ul>
    <p className="time">a day ago</p>
  </article>
  <article dir="auto" className="one-task">
    <h2>مهمة جديدة</h2>
    <ul>
      <li>مهمة فرعية 1</li>
      <li>مهمة فرعية 2</li>
    </ul>
        <p className="time">قبل يوم</p>
  </article>
  <article dir="auto" className="one-task">
    <h2>New Tasks</h2>
    <ul>
      <li>Sub task 1</li>
      <li>Sub task 2</li>
    </ul>
        <p className="time">a day ago</p>
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

