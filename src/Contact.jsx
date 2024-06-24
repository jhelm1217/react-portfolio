// import { Link } from "react-router-dom"
// import './App.css'
// // import bootcamp from "assets/bootcamp.jpg"



// function Contact () {
//   return (
    
//     <div className="contact-background"> 
//     <div className="header-container">

//     <Link to='/'>{'<- Back'} </Link>
//     </div>
//     <div className="p-5">
//       <h1 style={{ color: "Black" }}>Reach Out to Me! </h1>
//       <div className="contact-card-wrapper">
// 	    <div className="row">
// 		    <div className="container col-12 col-sm-6 p-2">
// 		        <img src="assets/bootcamp.jpg" class="card-img-top hover contact-img" alt="My Picture" />
//                 <div className="card-body">
//                     <div className="border"> 
//                         <h1 className="card-title text-center">Jacinta Helm</h1>
//                         <div className="social-icons">
//                           <a href="https:jacintahelm92@gmail.com" target="_blank" rel="noopener noreferrer">
//                             <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Gmail" />
//                           </a>
//                           <a href="https://github.com/jhelm1217" target="_blank" rel="noopener noreferrer">
//                             <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
//                           </a>
//                           <a href="https://www.linkedin.com/in/jacintah12/" target="_blank" rel="noopener noreferrer">
//                             <img src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png" alt="LinkedIn" />
//                           </a>
//                         </div>
                    
                       
//                     </div>
                       
//                 </div>
// 	        </div>
//         </div>
//       </div>
//     </div>
//     </div>

//   )
// }



// export default Contact


// import { Link } from "react-router-dom";
// import './App.css';
// // import bootcamp from "assets/bootcamp.jpg";

// function Contact() {
//   return (
//     <div className="contact-background">
//       <div className="header-container">
//         <Link to='/'>{'<- Back'}</Link>
//       </div>
//       <div className="p-5">
//         <h1 style={{ color: "Black" }}>Reach Out to Me!</h1>
//         <div className="contact-card-wrapper">
//           <div className="row">
//             <div className="container col-12 col-sm-6 p-2">
//               <img
//                 src="assets/bootcamp.jpg"
//                 className="card-img-top hover contact-img"
//                 alt="My Picture"
//               />
//               <div className="card-body">
//                 {/* <div className="border"> */}
//                 <div className="contact-card">
//             <div className="profile-section">
//                 <img src="src/assets/bootcamp.jpg" alt="Profile" className="profile-pic" />
//                 <div className="profile-info">
//                     <h2 className="name">Jacinta Helm</h2>
//                     <p className="title">Full Stack Web Developer</p>
//                 </div>
//             </div>
//                   {/* <h1 className="card-title text-center">Jacinta Helm</h1> */}
//                   <div className="social-icons">
//                     <a
//                       href="https://mail.google.com/mail/u/0/#inbox"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <img
//                         src="https://img.icons8.com/color/48/000000/gmail-new.png"
//                         alt="Gmail"
//                         className="icon"
//                       />
//                     </a>
//                     <a
//                       href="https://github.com/jhelm1217"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <img
//                         src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
//                         alt="GitHub"
//                         className="icon"
//                       />
//                     </a>
//                     <a
//                       href="https://www.linkedin.com/in/jacintah12/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <img
//                         src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png"
//                         alt="LinkedIn"
//                         className="icon"
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import { Link } from "react-router-dom";
import './App.css';
// import bootcamp from "assets/bootcamp.jpg";

function Contact() {
  return (
    <div className="contact-background">
      <div className="contact-container">
        <div className="header-container">
          <Link to='/'>{'<- Back'}</Link>
        </div>
        <div className="p-5">
          {/* <h1 style={{ color: "Black" }}>Reach Out to Me!</h1> */}
          <div className="contact-card-wrapper">
            <div className="row">
              <div className="container col-12 col-sm-6 p-2">
                <div className="card-body">
                  <div className="contact-card">
                    <div className="profile-section">
                      <img src="src/assets/bootcamp.jpg" alt="Profile" className="profile-pic" />
                      <div className="profile-info">
                        <h2 className="name">Jacinta Helm</h2>
                        {/* <p className="title">Full Stack Web Developer</p> */}
                      </div>
                    </div>
                    <div className="social-icons">
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://img.icons8.com/color/48/000000/gmail-new.png"
                          alt="Gmail"
                          className="icon"
                        />
                      </a>
                      <a
                        href="https://github.com/jhelm1217"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                          alt="GitHub"
                          className="icon"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jacintah12/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png"
                          alt="LinkedIn"
                          className="icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
