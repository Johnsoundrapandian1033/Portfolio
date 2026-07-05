import { motion } from 'framer-motion'
import { profile, education } from '../data/portfolio.js'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import React,{ useState } from 'react'
export default function About() {
  const [myStory, setMyStory] = useState(false);
  const [myCareer, setMyCareer] = useState(false);
       
   function onMyStory(value){
      setMyStory(!value);
      setMyCareer(false);
   }
   function onMyCareer(value){
      setMyStory(false);
      setMyCareer(!value);
   }
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="eyebrow">01 · About</div>
        <div className="about-grid">
          <motion.p
            className="about-lede"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            style={{textAlign:"justify"}}
          >
            I'm a <strong>Java Developer</strong> with 8 months of professional experience in the shipping 
            industry, where I transformed complex booking and transshipment workflows 
            into scalable RESTful APIs. I specialize in building robust backend services 
            using Spring Boot, securing applications with Spring Security and JWT, 
            and optimizing PostgreSQL databases for performance, reliability, 
            and real-world production workloads. Beyond my professional experience,
            I've solved 750+ LeetCode problems, continuously sharpening my problem-solving
            and algorithmic thinking. I enjoy writing clean, maintainable code, 
            learning modern technologies, and building full-stack applications 
            that deliver practical business value while following industry best practices
            and software design principles.
          </motion.p>

          <motion.div
            className="fact-list"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="fact-row">
              <span>Location</span>
              <span>{profile.location}</span>
            </div>
            <div className="fact-row">
              <span>Availability</span>
              <span>Immediate joiner</span>
            </div>
            <div className="fact-row">
              <span>Education</span>
              <span>
                {education.degree}, {education.years}
              </span>
            </div>
            <div className="fact-row">
              <span>Institute</span>
              <span>{education.school}</span>
            </div>
            <div className="fact-row">
              <span>CGPA</span>
              <span>{education.cgpa}</span>
            </div>
          </motion.div>
        </div>
        <div className="hero-cta py-4">
          <a
            className="btn btn-primary"
            href=""
            onClick={(e) => {
              e.preventDefault();
              onMyStory(myStory);
            }}
          >
            My Story <FiArrowRight size={16} />
          </a>
           <a
            className="btn btn-primary"
            href=""
            onClick={(e) => {
              e.preventDefault();
                onMyCareer(myCareer);
            }}
          >
            My Career Journey <FiArrowRight size={16} />
          </a>
        </div>
        { 
           (myStory && !myCareer) ?(
          <div className='route-card' style={{textAlign:"justify"}}>
          <p >If you want to know who I am, you should first know about my family.</p>

            <p style={{lineHeight: "3"}}>We are a family of seven.</p>
           <div>
            {(() => {
              // 1. Define the array inside a block or place it outside your return statement
              const famDtl = [
                "My father, <strong>Immanuvel</strong>, works as a Line Inspector (LI) at TNEB.",
                "My mother is <strong>Flora Ranjini</strong>.",
                "My eldest brother, <strong>Yoseph</strong>, is a Junior Engineer.",
                "My second brother, <strong>Jeyasingh</strong>, is a Senior Software Developer.",
                "My sister, <strong>Rubavathy</strong>, is an Operating System Developer.",
                "My younger brother, <strong>Sadhu</strong>, is an AI Developer.",
                "And finally, there is me - <strong>John Soundrapandian</strong>."
              ];

              // 2. Return the JSX structure
              return (
                <ul style={{ listStyleType: "disc" }} className="ps-4">
                  {famDtl.map((item, index) => (
                    // Fixed: Removed {item} from between the <li> tags
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              );
            })()}
          </div>
            

            <p style={{lineHeight: "3"}}>I was born on <strong>April 28, 2002.</strong></p>

            <p>If I were to describe my life, I wouldn't call it a story of extraordinary achievements. Instead, it is a story of failures, perseverance, learning, and growth.</p>

            <p style={{paddingTop: "15px"}}>Everyone in my family excelled in academics. They had beautiful handwriting, consistently ranked first in school, and were known for their intelligence. Compared to them, I struggled both academically and with my handwriting.</p>

            <p style={{paddingTop: "15px"}}>Because of this, I was labeled the "slow learner" of the family from a very young age. Over time, it became part of my identity. Even when introducing me to others, my family would jokingly say, "He's the slow one in our family." Eventually, I began introducing myself that way too, simply because I was too young to realize the impact those words could have.</p>

            <p style={{paddingTop: "15px"}}>While my family loved academics, my passion was always cricket.</p>

            <p style={{paddingTop: "15px"}}>The excitement I never found in textbooks, I found on the cricket field.</p>

            <p style={{paddingTop: "15px"}}>Unfortunately, while studying in the eighth grade, I suffered a serious injury during a match and fractured two bones in my right hand. My recovery took nearly a year.</p>

            <p style={{paddingTop: "15px"}}>My mother prayed that I would be able to write properly again, while I prayed that I would be able to play cricket once more.</p>

            <p style={{paddingTop: "15px"}}>Just when life seemed to be returning to normal, I met with another accident during my tenth-grade public examination year. Once again, I fractured the same two bones in my right hand.</p>

            <p style={{paddingTop: "15px"}}>I recovered only at the end of January, leaving me just one month to prepare for the public exams. I worked harder than ever before, studying from my sister's old notes.</p>

            <p style={{paddingTop: "15px"}}>I scored <strong>449 out of 500 (89.9%).</strong></p>

            <p style={{paddingTop: "15px"}}>Had I scored just one more mark, I would have received a special shield medal.</p>

            <p style={{paddingTop: "15px"}}>Despite that achievement, I was still known as the "slow learner."</p>

            <p style={{paddingTop: "15px"}}>I later chose the Mathematics-Biology stream. My batch was the first to face public examinations in both 11th and 12th grades. During my school days, I was constantly compared with my brothers and sister.

            I often heard statements like, "Study like your brother," or "Be like your sister."

            At that age, those comparisons made me feel embarrassed and inadequate.

            There were moments when I felt jealous of them.

            However, the truth is that I have always loved and respected them.

            They were never the problem; it was the constant comparison that affected my confidence.I scored <strong>432 out of 600 </strong>in my 12th standard.</p>

            <p style={{paddingTop: "15px"}}>
            At that stage of my life, I wasn't mature enough to make the right career decisions.
            </p>

            <p style={{paddingTop: "15px"}}>
            During engineering counseling, my sister accompanied me and advised me to choose Computer Science Engineering (CSE). However, because of certain experiences during my school years, along with my own ego and stubbornness, I chose Civil Engineering instead. Looking back, that decision became one of the biggest turning points in my life.
            </p>

            <p style={{paddingTop: "15px"}}>
            My dream was to join a cricket club, but due to my family's circumstances, my mother encouraged me to pursue Engineering. I joined Thanthai Periyar Government Institute of Technology, Vellore, where my second brother had also studied.
            </p>

            <p style={{paddingTop: "15px"}}>
            On my very first day of college, I went straight to the cricket ground. However, first-year students were not allowed to play. After a week of disappointment, I started playing ball badminton instead. Coincidentally, some of my brother's juniors were on the team. Once they recognized me as his brother, they welcomed me into the team.
            </p>

            <p style={{paddingTop: "15px"}}>
            Because of my performance, I was selected for the zonal team.
            </p>

            <p style={{paddingTop: "15px"}}>
            Coming from a village, I entered college believing that I already knew everything. In reality, I had no idea what college life would be like, how to study effectively, or how to adapt to a completely new environment.
            </p>

            <p style={{paddingTop: "15px"}}>
            I simply assumed I knew enough. During my very first semester, I failed three subjects and performed poorly in practical examinations.
            </p>

            <p style={{paddingTop: "15px"}}>
            One of my biggest challenges was English. I couldn't speak it confidently, and I struggled to understand others when they spoke. That was the first time Engineering truly frightened me, and it remains one of the most unforgettable moments of my life.
            </p>

            <p style={{paddingTop: "15px"}}>
            From that day onward, I decided to change myself and take my studies seriously.
            </p>

            <p style={{paddingTop: "15px"}}>
            From my second semester until the fifth semester, all classes were conducted online because of the COVID-19 pandemic. I barely understood what was happening in the classes or even which subjects were being taught.
            </p>

            <p style={{paddingTop: "15px"}}>
            When I returned to college in my seventh semester, I wasn't even sure what subjects I had studied during the previous semesters. I managed to clear my three arrears through online examinations.
            </p>

            <p style={{paddingTop: "15px"}}>
            However, I was never completely satisfied with those results. In several examinations, I honestly submitted my answer sheets without attempting questions I didn't know. As a result, my CGPA dropped.
            </p>

            <p style={{paddingTop: "15px"}}>
            During my seventh semester, I completed my internship at Mano Builders, where I worked as a Site Engineer on residential and commercial construction projects.
            </p>

            <p style={{paddingTop: "15px"}}>
            The internship gave me practical exposure to the complete construction process—from laying the foundation to completing the roof. I learned about site execution, construction planning, quality control, material management, and workplace safety.
            </p>

            <p style={{paddingTop: "15px"}}>
            It was during this internship that I truly understood how Civil Engineering projects are executed in the real world.
            </p>

            <p style={{paddingTop: "15px"}}>
            During my final year, I challenged myself by taking on multiple responsibilities simultaneously. I completed my final-year project, served as the captain of the men's ball badminton team, coached the women's ball badminton team, and remained a member of the college cricket team.
            </p>

            <p style={{paddingTop: "15px"}}>
            Our final-year project was successfully completed. Both the men's and women's ball badminton teams became zonal champions. Although we lost in cricket, that year taught me invaluable lessons about leadership, teamwork, and responsibility.
            </p>

            <p style={{paddingTop: "15px"}}>
            By the end of my eighth semester, I had cleared all my arrears and attended interviews with three Civil Engineering companies.
            </p>

            <p style={{paddingTop: "15px"}}>
            Those interviews made me realize something important. Although I had completed four years of Civil Engineering, I felt that I had learned only a small portion of what the profession actually required.
            </p>

            <p style={{paddingTop: "15px"}}>
            I didn't fully understand the different career paths in Civil Engineering or what real industry work involved. I entered those interviews believing I knew enough, but I left realizing that I needed to rebuild my career from the beginning.
            </p>

            <p style={{paddingTop: "15px"}}>
            Following my family's advice, I decided to transition into the Information Technology industry.
            </p>

            <p style={{paddingTop: "15px"}}>
            I began learning Java through self-study. Initially, I struggled to understand programming concepts, even after restarting my learning journey multiple times.
            </p>

            <p style={{paddingTop: "15px"}}>
            Later, I sought guidance from experienced software developers and learned how to approach programming effectively. That completely changed my perspective. Programming concepts started making sense, and I gradually built a strong foundation.
            </p>

            <p style={{paddingTop: "15px"}}>
            After mastering Core Java, I moved on to Advanced Java and began applying for software development jobs.
            </p>

            <p style={{paddingTop: "15px"}}>
            However, I soon realized that technical knowledge alone was not enough. I knew how to study programming, but I didn't know how software interviews worked. So, I started preparing seriously for aptitude tests, programming interviews, Data Structures & Algorithms, and technical interview rounds.
            </p>

            <p style={{paddingTop: "15px"}}>
            I practiced regularly on LeetCode, GeeksforGeeks, and IndiaBix. I also learned Git and GitHub. During this period, I built several Spring Boot projects, explored Low-Level Design concepts, implemented Java in-built functions, and published my projects on GitHub.
            </p>

            <p style={{paddingTop: "15px"}}>
            In March 2024, I joined Zoho's unofficial Graduation School, where I strengthened my problem-solving skills and software development knowledge. I successfully secured a place among the Top 15 performers while gaining hands-on experience in modern web technologies.
            </p>

            <p style={{paddingTop: "15px"}}>
            After completing the program, I actively attended software interviews and consistently progressed through multiple technical rounds at companies including Zoho and SoftSuave, which significantly improved my interview skills and technical confidence.
            </p>

            <p style={{paddingTop: "15px"}}>
            I later joined <strong>Paragon Dynamics Info System</strong> as a Software Developer. Within my second week, I was assigned to a live enterprise project after quickly learning AngularJS.
            </p>

            <p style={{paddingTop: "15px"}}>
            During my eight months at Paragon, I worked across both frontend and backend development using Java, Spring, AngularJS, PostgreSQL, and JSP. I contributed to multiple business modules, including Booking, Pre-Booking, Loading, Bill of Lading, Loading Summary, and CRM. My responsibilities included feature development, bug fixing, database scripting, production support, and implementing business requirements.
            </p>

            <p style={{paddingTop: "15px"}}>
            Beyond my assigned responsibilities, I actively learned business workflows from senior developers, collaborated across teams, and mentored freshers by helping them understand coding fundamentals, project flow, and debugging techniques.
            </p>

            <p style={{paddingTop: "15px"}}>
            To continue growing both technically and professionally, I decided to move on in search of opportunities that offer greater challenges, continuous learning, and long-term career development.
            </p>

            <p style={{paddingTop: "15px"}}>That does not mean I lack skills.</p>

            <p style={{paddingTop: "15px"}}>Without referrals, without influential connections, and largely through self-learning, I have come this far.</p>

            <p style={{paddingTop: "15px"}}>That alone gives me confidence.</p>

            <p style={{paddingTop: "15px"}}>I may still struggle with making the right decisions at times.</p>

            <p style={{paddingTop: "15px"}}>But one thing has never changed:</p>

             <p style={{paddingTop: "15px"}}>
            <strong>My journey has taught me one important lesson: I may not know everything, but I will never stop learning.</strong>
            </p><br></br><br></br>
            <div className='d-flex justify-content-center'>
                <a
                  className="btn btn-primary"
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onMyStory(true);
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Close <FiArrowRight size={16} />
                </a>
            </div>
        </div> ):""
        }

        {
          (!myStory && myCareer)?
          <div className='route-card' style={{textAlign:"justify"}}> 
            <p>My name is <strong>John Soundrapandian</strong>, and I graduated with a Bachelor's degree in Civil Engineering in 2023. Although I earned my degree in Civil Engineering, I realized that my passion was in software development. Therefore, I decided to transition my career into the IT industry.</p>

            <p style={{paddingTop: "15px"}}>I began learning Java through self-study. Initially, I struggled to understand programming concepts despite restarting my learning multiple times. Later, I sought guidance from experienced developers and learned how to approach programming effectively. That changed everything. Programming concepts started making sense, and I gradually built a strong foundation.</p>

            <p style={{paddingTop: "15px"}}>After mastering Core Java, I moved on to Advanced Java and started applying for software jobs. However, I soon realized that technical knowledge alone wasn't enough. I didn't know how software interviews worked, so I decided to prepare systematically for interviews.</p>

            <p style={{paddingTop: "15px"}}>I dedicated my time to Aptitude, Programming, Data Structures & Algorithms, and Interview Preparation. I regularly practiced on LeetCode, GeeksforGeeks, and IndiaBix while also learning Git and GitHub. During this period, I built multiple Spring Boot projects, implemented Java in-built functionalities, explored Low-Level Design concepts, and published my projects on GitHub.</p>

            <p style={{paddingTop: "15px"}}>In March 2024, I joined Zoho's unofficial Graduation School. There, I learned not only coding but also problem-solving techniques and structured approaches to software development. I successfully cleared the internal assessments and secured a position among the Top 15 performers. During the program, I also strengthened my knowledge of HTML, CSS, and MySQL.</p>

            <p style={{paddingTop: "15px"}}>After completing the training in November 2024, I resumed my job search. I attended Zoho interviews ten times, clearing the first round nine times, the second round five times, the third round twice, and reaching the fourth round once. I also cleared the final round at SoftSuave, although I did not receive an offer.Then, I learned Python, Springboot, Bootstrap  .I was selected by several consultancy companies before finally joining <strong>Paragon Dynamics Info System </strong>in Guindy.</p>

            <p style={{paddingTop: "15px"}}>The company initially offered no salary during the first month, with performance-based compensation starting from the second month. I learned AngularJS within my first week, and based on my performance, I was assigned to a live project during my second week.</p>

            <p style={{paddingTop: "15px"}}>Initially, I worked on UI validations, design modifications, field additions and removals, and calculation logic. By my second month, I was entrusted with implementing an entire operational module involving checkbox selection and "Select All" functionality. I implemented both the frontend and backend logic for the feature.</p>

            <p style={{paddingTop: "15px"}}>Later, I started contributing to modules such as Booking, Pre-Booking, Loading, Loading Summary, Bill of Lading, and CRM. My responsibilities included frontend development, backend development, database scripting, bug fixing, and production issue resolution.</p>

            <p style={{paddingTop: "15px"}}>One of the most valuable lessons I learned came after one of my early code commits unintentionally affected an existing production workflow. Although my senior had approved my code, the issue appeared during the live demonstration. This experience taught me the importance of understanding existing business logic and evaluating the impact of every code change before deployment.</p>

            <p style={{paddingTop: "15px"}}>Driven by curiosity rather than recognition, I actively learned business processes by discussing project flows and client requirements with senior developers across multiple teams. My goal was to understand not just how to write code, but how enterprise software systems are designed, maintained, and delivered.</p>

            <p style={{paddingTop: "15px"}}>Unfortunately, my enthusiasm wasn't always appreciated. Over time, I received fewer opportunities to work on major projects, and I experienced management challenges, including repeated pressure to resign. Instead of becoming discouraged, I focused on helping new team members by teaching them coding fundamentals, project workflows, debugging approaches, and common development practices.</p>

            <p style={{paddingTop: "15px"}}>Eventually, I decided to leave the company because I wanted a workplace that offered greater learning opportunities, meaningful responsibilities, and long-term career growth.</p>

            <p style={{paddingTop: "15px"}}>Although I cannot publicly showcase most of my professional work due to company confidentiality, I continue building personal projects and strengthening my technical skills every day.</p>

            <p style={{paddingTop: "15px"}}>I strongly believe that continuous learning is my greatest strength. Regardless of setbacks, I remain committed to improving myself every single day, and I am excited to contribute that mindset to my next opportunity.</p><br></br><br></br>
            <div className="d-flex justify-content-center">
              <a
                className="btn btn-primary"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onMyCareer(true);
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Close <FiArrowRight size={16} />
              </a>
            </div>
          </div>:""
        }
        
      </div>
      
    </section>
  )
}
