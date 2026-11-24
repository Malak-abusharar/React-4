
import "./Modal.css";
import { Helmet} from 'react-helmet-async';

export default function Modal({closeModal, children}) {
  return (
   <div className="parent-modal">
    <Helmet>
        <title>Modal Page</title>
        </Helmet>
    <form className={`model`}>
           <div
             onClick={() => {
               closeModal()
             }}
             className="close"
           >
             X
           </div>
           {children}
      
         </form>
   </div>
  )
}
