import { Link } from "react-router-dom"
import './App.css'

function Contact () {
  return (
    <div className=" contact-background"> 
    <div className="p-5">
      <Link to='/'>{'<- Back'} </Link>
      <h1 style={{ color: "white" }}>Reach Out to Me! </h1>
      <div className="container contact-card-wrapper">
	    <div className="row">
		    <div className="container col-12 col-sm-6 p-2">
		        <img src="src/assets/bootcamp.jpg" class="card-img-top hover contact-img" alt="picture of me" />
                <div className="card-body">
                    <div className="border"> 
                        <h1 className="card-title text-center">Jacinta Helm</h1>
                    
                        <a href="https:jacintahelm92@gmail.com">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.41 63.88" width="50" height="50" class="svg-icon"><defs><style>.cls-1{fill:#231f20;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Objects"><path class="cls-1" d="M44.73,44.73l-11-9.7L2,62.17a6.56,6.56,0,0,0,4.41,1.71H83a6.56,6.56,0,0,0,4.41-1.71L55.79,35Z"/><polygon class="cls-1" points="58.59 32.49 89.42 58.69 89.42 5.6 58.59 32.49"/><polygon class="cls-1" points="0 5.6 0 58.69 30.88 32.49 0 5.6"/><path class="cls-1" d="M87.39,1.76A6.28,6.28,0,0,0,83,0H6.43A6.37,6.37,0,0,0,2,1.76L44.73,38.35Z"/></g></g></svg> */}
                        </a>

                        <a href="https://github.com/jhelm1217">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.28 72.44" width="50" height="50" class="svg-icon"><defs><style>.cls-1{fill:#181616;fill-rule:evenodd;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Objects"><path class="cls-1" d="M37.14,0A37.14,37.14,0,0,0,25.4,72.38c1.86.34,2.54-.8,2.54-1.79s0-3.22-.06-6.32c-10.33,2.25-12.51-5-12.51-5-1.68-4.29-4.12-5.44-4.12-5.44-3.37-2.3.26-2.25.26-2.25,3.72.26,5.68,3.82,5.68,3.82,3.32,5.68,8.7,4,10.81,3.09a8,8,0,0,1,2.36-5c-8.25-.93-16.92-4.12-16.92-18.35a14.35,14.35,0,0,1,3.83-10,13.31,13.31,0,0,1,.36-9.83s3.12-1,10.21,3.81a35.22,35.22,0,0,1,18.6,0c7.09-4.81,10.2-3.81,10.2-3.81A13.33,13.33,0,0,1,57,25.23a14.34,14.34,0,0,1,3.82,10c0,14.27-8.68,17.41-17,18.32,1.34,1.15,2.52,3.42,2.52,6.88,0,5,0,9,0,10.19,0,1,.67,2.15,2.55,1.79A37.15,37.15,0,0,0,37.14,0Z"/></g></g></svg> */}
                        </a>
                
                        <a href="https://www.linkedin.com/in/jacintah12">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.88 63.88" width="50" height="50" class="svg-icon"><defs><style>.cls-1{fill:#231f20;fill-rule:evenodd;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Objects"><path class="cls-1" d="M47.1,49.89a50.77,50.77,0,0,1-6.45,12.83c.35-.1.69-.22,1-.33h0l.1,0q.78-.26,1.53-.54l.45-.17c.41-.17.83-.34,1.23-.52l.8-.37.86-.42c.39-.2.77-.42,1.15-.63l.5-.29c.46-.27.91-.56,1.35-.85l.3-.2c.42-.28.82-.58,1.22-.88.15-.11.3-.21.44-.33l.6-.49a31.31,31.31,0,0,0,2.36-2.1,32.4,32.4,0,0,0,3.49-4.2c.11-.15.23-.29.33-.44h0l0,0Z"/><path class="cls-1" d="M25.89,63.35a29.75,29.75,0,0,0,4.85.53v-14H18.56A46.28,46.28,0,0,0,25.89,63.35Z"/><path class="cls-1" d="M13.17,33.15H0A31.61,31.61,0,0,0,4,47.56H15.3A57.69,57.69,0,0,1,13.17,33.15Z"/><path class="cls-1" d="M33.18,30.74H48.34A54.3,54.3,0,0,0,46.1,16.32h-.73v0H33.18v0h0V30.74Z"/><path class="cls-1" d="M15.54,30.74h15.2V16.29h-13A54.72,54.72,0,0,0,15.54,30.74Z"/><path class="cls-1" d="M15.33,16.29H4A31.63,31.63,0,0,0,0,30.74H13.17A56.4,56.4,0,0,1,15.33,16.29Z"/><path class="cls-1" d="M33.18,49.89v14a27,27,0,0,0,3.93-.39,46.06,46.06,0,0,0,7.47-13.6Z"/><path class="cls-1" d="M5.49,49.89A31.82,31.82,0,0,0,22.31,62.43,49.9,49.9,0,0,1,16,49.89Z"/><path class="cls-1" d="M16.78,14A50.7,50.7,0,0,1,23.23,1.17c-.35.09-.68.21-1,.32h0l-.1,0c-.52.16-1,.34-1.53.53l-.45.18q-.61.24-1.23.51l-.8.37-.86.43c-.39.2-.77.41-1.15.63l-.5.28c-.46.27-.9.56-1.35.85l-.3.2c-.42.28-.82.58-1.22.89l-.44.32-.6.49c-.82.67-1.61,1.36-2.36,2.1a33.8,33.8,0,0,0-3.49,4.2c-.1.15-.23.29-.33.44h0l0,0Z"/><path class="cls-1" d="M38,.53A32.13,32.13,0,0,0,33.14,0V14H45.33A46.54,46.54,0,0,0,38,.53Z"/><path class="cls-1" d="M50.71,30.74H63.88a31.68,31.68,0,0,0-4-14.42H48.58A57.84,57.84,0,0,1,50.71,30.74Z"/><path class="cls-1" d="M30.7,33.14H15.54a54.29,54.29,0,0,0,2.24,14.41h.73v0H30.7v0h0V33.15h0Z"/><path class="cls-1" d="M48.34,33.14H33.14V47.59h13A54.72,54.72,0,0,0,48.34,33.14Z"/><path class="cls-1" d="M48.55,47.59H59.84a31.6,31.6,0,0,0,4-14.45H50.71A56.4,56.4,0,0,1,48.55,47.59Z"/><path class="cls-1" d="M30.7,14V0a30.06,30.06,0,0,0-3.93.39A46.29,46.29,0,0,0,19.3,14Z"/><path class="cls-1" d="M58.39,14a32.31,32.31,0,0,0-3.86-4.68,31.85,31.85,0,0,0-13-7.86A49.9,49.9,0,0,1,47.84,14Z"/></g></g></svg> */}
                        </a>
                    </div>
                       
                </div>
	        </div>
        </div>
      </div>
    </div>
    </div>
  )
}



export default Contact
