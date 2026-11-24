export default function Modal({closeModal}) {
  return (
   <div className="parent-modal">
    <form className={`model`}>
           <div
             onClick={() => {
               closeModal()
             }}
             className="close"
           >
             X
           </div>
           {/* <input
             onChange={(eo) => {
               setResetPassword(eo.target.value);
             }}
             required
             placeholder="email:"
             type="email"
           />
           <button
             onClick={(eo) => {
               resetPassBTN(eo);
             }}
           >
             Reset password
           </button>
           {rsestEmail && (
             <p className="reset-email">
               Please check your email to reset your password
             </p> */}
           {/* ) */}
           {/* } */}
         </form>
   </div>
  )
}
