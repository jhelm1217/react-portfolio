import { Link } from "react-router-dom"
import './Journey.css'

function Journey() {
  return (
    <div className="journey-background">
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1 style={{ color: "white" }}>My Journey!</h1>
  
      <div className="scroll-container">
    <div className="blog">
      <header>Bootcamp at Awesome Inc.</header>
      
      <a href="technicalarticle.html">What is pseudocode!</a>
      
      <div className="row">
        <div className="column">
          <details>
            <summary>Remote Week 1!</summary>
            <h3>Was your first week what you expected? Why or why not?</h3>
            <p>
              Honestly, yes, I knew for a fact that I was going to experience 18 different emotions in a day! LOL. 
              The material was going to be a bit challenging, but I knew with patience and staying gentle with myself 
              throughout this journey, I would be fine. I'm used to not asking for help, so this is really making me 
              step out of my comfort zone.
            </p>
            <p>
              I'm actually eager to learn just about everything. I love the CSS and styling, that looks pretty fun so 
              I want to learn more about that. Since I am fairly new to coding, I would like to see which section I 
              would like more than the others, such as front end, back end etc.
            </p>
            <h3>What is something about you that can only be learned by reading this blog?</h3>
            <ul>
              <li>Well I know how to play two instruments. The clarinet and the alto saxophone. I played these two from grade school all the way through high school! I was in every band you could think of: Marching band, Symphonic band, Jazz band, Pep band etc!</li>
              <li>I love everything that can be turned into an art. whether it is fashion, crafts, or cooking/baking.</li>
              <li>Another fun fact about me is I love love love to travel. It is my Love language to myself!</li>
            </ul>
          </details>
        </div>
      
        
        <div className="column">
          <details>
            <summary>Remote Week 2!</summary>
            <h3>What is something you wish you could do but currently do not have the coding skills to accomplish?</h3>
            <p>There's a lot I wish I knew more of when it comes to coding. After this week with the webpage, I definitely want to get comfortable with using HTML and CSS and if I get stuck, I want to be able to know where exactly to go to help me get through a situation.</p>
            <h3>What am I struggling with?</h3>
            <p>I am currently struggling with not being overwhelmed with all the new information that I'm learning. It is super confusing at first, but after some practice of using it and getting used to the techniques more, I should be fine.</p>
            <h3>How do you solve a problem?</h3>
            <p>Majority of the time I really just need to slow down. I get ahead of myself and get in my head. I take a lot of breaks in between time. I go back and look at other people's codes or even try to understand it more with examples from Google, etc. I reach out to other classmates and my instructor.</p>
            <h3>What methods do you use to help yourself get unstuck?</h3>
            <p>I go back and look over my work to see what I've done. Reading the material first hand doesn't really help me much. It's kind of like I'm reading a bunch of material and have no idea what I'm reading. So I reread the material again as I go through the problems and by doing it makes more sense that way to me. Of course, I reach out to my instructor and classmates as well!</p>
          </details>
        </div>
        
        <div className="column">
          <details>
            <summary>Remote Week 3!</summary>
            <h3>What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing a user experience?</h3>
            <p>My thoughts on HTML, CSS are pretty okay at the moment. JavaScript is still a little all over the place with the number of functions and information that comes with it. The key points are that I do know that HTML is the content of the webpage. CSS is the style and layout of the webpage. JavaScript is to program the behavior of the web page. It's just a matter of getting more comfortable with all of the information that comes with all three.</p>
            <h3>What are some objects that your blog incorporates?</h3>
            <p>I had fun with this week's blog submission. I accidentally deleted my blog, don't ask me how lol. but in doing so, it allowed me to play around a little more with HTML and CSS!! I am very confident in my blog this week! I am still learning the functions and how JavaScript works. So hopefully by next week, I will have a full and better understanding of JavaScript and start adding that into my blog!</p>
          </details>
        </div>
        
        <div className="column">
          <details>
            <summary>Remote Week 4!</summary>
            <h3>What was helpful during Onboarding working remotely?</h3>
            <p>I would have to say that being in the comfort of my home and not being micromanaged helped. I'm not too fond of being in one place for long periods of time. So the ability to have some sort of freedom really allowed me to be successful. I can take a quick nap, cook, watch tv, and still have time to finish my work.</p>
            <h3>What hindered your progress during Onboarding?</h3>
            <p> I would have to say, even though the curriculum is well structured, having a lot of new information thrown out at once was overwhelming.</p>
            <h3>How did you overcome challenges during Onboarding?</h3>
            <p>It was really having to shift my mindset that helped me. I was intimidated in the beginning because I felt like I'm one of the few who doesn't have a background at all in programming. After learning some of the material, I was able to retain it and I noticed my progress from week 1. I tell myself, "It is not hard, yes it can be challenging, but it's just new."</p>
          </details>
          </div>
          </div>

        <div className="row">
        <div className="column">
          <details>
            <summary>Week 1!</summary>
          <h3>what is the number one thing that held you back this week? Why?</h3>
          <p> I would have to say that my focus was off a little this week, due to personal issues, family issues etc. I need to create a balance between everything and make sure that myself and school comes first.</p>
          <h3>What is one thing you would like to learn more about regarding JavaScript?</h3>
          <p>I would like to understand and be able to comprehend the language, Bootstrap, everything, a little bit more. I want to learn and be able to know where to go to find the answer I need. Such as which functions to use for certain questions. As well as thoroughly understanding what each does without confusion. </p>
          <p>I even downloaded a coding app for extra help that will go over the same material as in class. It has interactive questions that are either refreshers for me or just something I might've missed that is helping me connect the dots.</p>
      </details>
    </div>
    <div className="column">
      <details>
      <summary>Week 2!</summary>
      <h3>What did you learn about that helped you understand the development process?</h3>
      <p>I learned how API's work. that process was pretty cool to see how the weather worked after using the API key. There are a number of ways to do the same thing in the world of coding. It's similar to how different people learn and think, so the process with that is really an eye-opener. </p>
      <h3>What does it mean to develop good code?</h3>
      <p>To develop good code is having your code be readable by others and it makes sense. It's organized and clean and uses DRY (don't repeat yourself).</p>
      <h3>What does it mean to be a good developer?</h3>
      <p>A good developer wants to learn, able to be teachable and can help others around them. They strive to excell better than they did the day before to show progress of their coding skills.</p>
      <h3>What is one thing that programmers hate doing?</h3>
      <p>Um, not really sure lol. Maybe having to debug their code?</p>
      </details>
    </div>
    <div className="column">
      <details>
      <summary>Week 3!</summary>
      <h3>What is pseudoode and how does it help with programming</h3>
      <p>This week in bootcamp we learned about pseudocode and how to apply it correctly to our projects!</p>
      </details>
    </div>
    <div className="column">
      <details>
      <summary>Week 4!</summary>
      <h3>Do you think Javascript Frameworks and Libraries are easy or hard to use? Why?</h3>
      <p>I think in the beginning it can be a little confusing. It is very complex and I think because we are learning and cramming everything in a short amount of time can cause a slight confusion. Other than that, having plenty of practice can help me understand more. </p>
      <h3>What Frameworks or Libraries are you intereseted in learning more about?</h3>
      <p>I am interested in learning more about React. This week was about learning about React, although I've kind of grasped the concept, I'm not fully 100% on it. I would like more practice so I can be more comfortable considering it will be front-end work and in the bootcamnp we will be using React more from this point on.</p>
      <h3>Find one emerging Javascript tool that you would like to learn more about or just use in your final project.</h3>
      <p>The tool that I would like to use will be mostly everything that we cover in this bootcamp experience. I want my project to showcase what I've learned so far. </p>
      </details>
      </div>
      </div>

      <div className="row">
    <div className="column">
      <details>
      <summary>Week 5!</summary>
      <p>This week we worked on making a to do list with React.js. Now I'm not going to lie,I was so stressed out with learning React, but learning about components is really not that bad. With more practice and hands on projects, I will be more than comfortable using React.</p>
      <p>With that being said, I had so much fun making the To do list. It really helped simplifying how react is used. Adding in Html and CSS was also helpful as well. </p>
    </details>
    </div>
    <div className="column">
      <details>
      <summary>Week 6!</summary>
      <h4>HOLY MOLY GUACA-MOLY. I'M HALFWAY THROUGH THE BOOTCAMP</h4>
      <p>I feel like I have learned how to deal with stress and the different types of adversities I've encountered really well. My ability to be gentle with myself and know my limits as well as being honest with myself have helped me truly. My communication has been through the roof as well as my ability to be resourceful for myself. My next hurdle may be having to start working on my resume so I can have that handy really soon! </p>
      <p>I want to keep my same vision. My blog tells my story and my journey. I will use what I've learned in design classes to help enhance my portfolio but what I have I do not want to change at all. </p>
      <p>We learned about Python,  although it is similiar to Javascript It is very different. I personally am more comfortable with Python than I am with Javascript. With Python you have to understand Classes and then having to define functions inside of those classes. That way you can just call the classes wherever. The syntax isn't all that bad either unlike Javascript. This week we made a Card game, although it was very much so fun and exciting to get away from Javascript for a little, it was still a little confusing for me because I had to learn the Card game(I'm not really a gamer, lol) in English so I can translate it into Python.  </p>
    </details>
    </div>

    <div className ="column">
      <details>
      <summary> Week 7!</summary>
      <h3>What are some similarities and differences you can see with JS and Python?</h3>
      <p> I do see a similatiry between the two. You can use both of the languages for showing functionality. Javascript is a little more complex than Python. But they both can do the same thing. Python, from my experience, is done primarily in the backend.</p>
      <h3> If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have benefited?</h3>
      <p> The boot camp would've for sure been a little different. I think learning Javascript first, in the first part of the curriculum was better thought out. It basically went in order and it all made sense. Learning Javscript was a challenge, however, the flow of learning HTML, CSS, Javascript, React for frontend, 
        made the transition into backend smooth. </p>
      <h3>Think of a project or tech based tool that you use often and think about what the database structure might look like for it. Do you feel like you have a better understanding of how it works now and could 
        you see yourself enjoying building something like that in the future?</h3>
      <p>Yes, learning about backend, surprisingly is new, and will seem hard at first, but it is so much fun! I enjoyed building my card game and my cycling store. I will continue to practice using the SQL, Django and python as a whole to gain more confidence. Being a fullstack developer would allow so much room for being well-round and balance of the two. </p>
    </details>
      </div>

    <div className ="column">
      <details>
      <summary> Week 8! </summary>
      <h3>What are you struggling with the most in the Tech Stack so far and why?</h3>
      <p>This week went by super fast. I wasn't ready for all the information we were given, we leanred SQL for a day and a half, then jumped right into Django. SQL and Django doesn't seem too hard, however learning about it, and trying to put everything together with React seem a little difficult. 
        I'm still a little foggy brained with connecting Backend and frontend together.
      </p>
      <h3>What companies or people (local or not) would you like to hear talk during a Bootcamp lunch and learn?</h3>
      <p>I'm happy to learn from any company. It gives me a chance to learn about what I think would be a good fit for myself and if I could see me being a good fit for the company as well. I'm openminded when it comes to this, especially since I'm not from the area. </p>
      <h3>After having built your first full-stack application, what things in your repertoire are a sticking point for you? Were you able to reconnect your React Restaurant to your Backend Bistro code? If so, what was that like, and if not, what hurdles did you need to jump?</h3>
      <p>This was the beginning of my class being full stack developeers, Just like anything we've learned, everything starts out really difficult, however, over time, it will become easier. I made it through
        Javascript in one piece, I made it through React in one piece, and now I too, will make it through connecting front-end to back-end. I was able to connect my backend with my django with the stroage, my ApiKey. I am so happy that I could do that!
      </p>
    </details>
    </div>
    </div>

    <div className="row">
      <div className="column">
        <details>
        <summary> Week 9! </summary>
        <h3> What has been your experience overall thus far? What would you want to post as a “retrospective”? </h3>
        <p>My overall experience has been a rollercoaster. I've managed to learn that when I'm introduced to something, it will be really confusing and complicated, however, over time and with practice what I'm learning won't be so intimidating. 
          The emotions that i've endured, have been balanced with one another.  </p>
   </details>
</div>


 

          </div>
          </div>
         </div>
      
      </div>
    </div>
  
  );
}




export default Journey
