import "./footer.css"

const Footer = () => {
   return (
      <footer className="bg-dark fixed-bottom">
         <div className="container">
            <h6 className="small text-light d-flex justify-content-around py-3">
               <div>&copy; 2022</div>|<div>All Rights Reserved</div>|<div>Rajeev Thapa</div>
            </h6>
         </div>
      </footer>
   )
}

export default Footer
