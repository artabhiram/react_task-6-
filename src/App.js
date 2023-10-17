import './App.css';
import insta from './instagramlogo.png';
import mail from './gmail.jpeg';
import github from './githublogo.png';
export default function app(){
  return(
    <div id="id">
      <div id="id1">
        <p>My Portfolio Website</p>
      </div>
      <div id="id2">
        <p><b id="id3">Profile</b></p>
        <p>Hi! Everyone, My name is TAILAM VENKATA SESHA SAI ABHIRAM. I am from Eluru,Andhra Pradesh</p>
        <p>I am studying my B-Tech 3rd year in vitap university.</p>
        <p>I am a student from cse group .</p>
        <p>I completed my Intermediate in Sri chaithanya Junior College.</p>
        <p>I Completed my SSC in Sri chaithanya techno School,Eluru.</p>
        <p>Results-driven professional with strong problem-solving skills, proficient in JAVA, C++, PYTHON, JAVASCRIPT,
and SQL. Adept at translating business requirements into technical solutions, passionate about implementing
and launching new projects. Seeking an entry-level software engineer position.</p>
        <p>Computer Science Engineering graduate with a strong academic background in programming languages
(Java, C++, Python), data structures, algorithms, database management, computer networks, software
engineering, web technologies, artificial intelligence, machine learning, computer graphics, and
cybersecurity. Proficient in problem-solving and eager to contribute in the technology field..</p>
      </div>
      <div id="id9">
        <p id="id3"><b>Skills</b></p>
        <span id="id6">Java</span>
        <span id="id6">Python</span>
        <span id="id6">Data Structures and Algorithms</span>
        <span id="id6">HTML & CSS</span>
        <span id="id6">C, C++ & R Language</span>
        <span id="id6">SQL</span>
        <span id="id6">JavaScript</span>
      </div>
      <div id="id10">
        <p id="id12"><b>My Projects</b></p>
        <span id="id11">Instagram Clone</span>
        <span id="id11">wekipedia fetcher</span>
        <span id="id11">airbnb clone</span>
        <span id="id11">ajio clone</span>
      </div>
      <div id="id4">
        <p id="id3">Contact</p>
        <span id="id5"><a id="id8" href="mailto:tvssabhiram@gmail.com">Email</a></span>
        <a href="mailto:tvssabhiram@gmail.com"><img src={mail} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://instagram.com/a.b.h.i.r.a.m_369?igshid=MzMyNGUyNmU2YQ==">Instagram</a></span>
        <a href="https://instagram.com/a.b.h.i.r.a.m_369?igshid=MzMyNGUyNmU2YQ=="><img src={insta} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://github.com/artabhiram">Github</a></span>
        <a href="https://github.com/artabhiram"><img src={github} alt="Instagram logo" height={50}/></a>
      </div>
    </div>
  );
}