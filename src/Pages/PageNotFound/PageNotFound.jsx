import notFoundSVG from "../../assets/svgs/undraw_page_not_found_re_e9o6.svg"
import Button from "../../common/button.component/Button"
import "./pageNotFound.css"

const PageNotFound = () => {
   return (
      <div className="bg-info pt-5">
         <div className="container page-not-found py-4">
            <div className="row">
               <div className="col-9 col-lg-5 mx-auto text-center">
                  <h2 className="display-1 fw-bolder mb-4">Oops!</h2>
                  <img
                     src={notFoundSVG}
                     alt="404 illustration"
                     className="d-block w-100 mx-auto py-5 py-md-0"
                  />
                  <h5 className="mt-3 mb-4 text-light">You seem to be lost.</h5>
                  <Button BSClass={`btn-success`} label="Go Back Home" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default PageNotFound
