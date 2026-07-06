import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolio.js'
import React from 'react'
import { profile } from '../data/portfolio.js';
import { FiArrowUpRight } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="eyebrow">02 · Cargo Capacity</div>
        <div className="section-head">
          <h2>Skills, loaded and rated</h2>
          <p>A working set of tools I use to design, build and ship backend systems — rated by hands-on comfort, not certificates.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={group.label}>
              {group.label === "Tools & Concepts"? <div ><p style={{height:"0px"}}> </p>  </div> :''}
              <div className="skill-group-title">{group.label}</div>
              {group.items.map((item, i) => (
                <div className="skill-row" key={item.name}>
                  <div className="skill-row-head">
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="gauge-track">
                    <motion.div
                      className="gauge-fill"
  initial={{ width: 0 }}
  animate={{ width: `${item.level}%` }}
  transition={{
    duration: 0.9,
    delay: gi * 0.05 + i * 0.06,
    ease: "easeOut",
  }}
                    />
                  </div>
                </div>
              
              ))}
             
            </div>
          ))}
           <div className="leetcode-wrapper pt-3">

  {/* Left Side - Image */}
            <div className="row d-flex justify-content-center align-items-center">
              <img  className=" "
                src="./leetcodepr.png"
                alt="LeetCode Profile"
                loading="eager"
                style={{width:"500px", height : "200px"}}
              />
            </div>

            {/* Right Side - Content */}
            <div className="row ">

            <div className="shipment-stack pt-2">
              <p className="tech-chip ">
                I regularly solve <strong>Data Structures & Algorithms</strong> problems
                to strengthen logical thinking, optimize coding skills, and prepare for
                software engineering interviews.
              </p>
               {/* "Array", "String","Hash Table","Bit Manupulation","Stack", "Queue", 
          "Sliding Window","Prefix Sum","Two Pointer","Linked List","Array List",
         "Recursion","Backtracking","Greedy","Dynamic Programming","Binary Search","BST" */}
                 <span className="tech-chip">
                  Array
                </span>
                <span className="tech-chip">
                    Sliding Window
                </span>
                <span className="tech-chip">
                    Array List
                </span>
                <span className="tech-chip">
                    Bit Manupulation
                </span>
                <span className="tech-chip">
                  Two Pointer
                </span>

                 <span className="tech-chip">
                  Stack
              </span>
              <span className="tech-chip">
                  Queue
              </span>
              <span className="tech-chip">
                  String
              </span>
              <span className="tech-chip">
                  Prefix Sum&nbsp;
              </span>
{/* "Array", "String","Hash Table","Bit Manupulation","Stack", "Queue", 
          "Sliding Window","Prefix Sum","Two Pointer","Linked List","Array List",
         "Recursion","Backtracking","Greedy","Dynamic Programming","Binary Search","BST" */}

                <span className="tech-chip">
                  Greedy
              </span>
              <span className="tech-chip">
                  Dynamic Programming
              </span>
                <span className="tech-chip">
                    Hash Table
                </span>
                <span className="tech-chip">
                    Recursion
                </span>
                <span className="tech-chip">
                    Math
                </span>

                 <span className="tech-chip">
                  Backtracking&nbsp;
              </span>
              <span className="tech-chip">
                  Linked List 
              </span>
              
              <span className="tech-chip">
                  Heap&nbsp;
              </span>
              <span className="tech-chip">
                  Tree
              </span>
              <span className="tech-chip">
                  Binary Search
              </span>
              <span className="tech-chip">
                  Binary Tree
              </span>
              <span className="tech-chip">
                  BST
              </span>
              <span className="tech-chip">
                  Matrix
              </span>

              


              <span className= 'tech-chip' >
               <a
                href={profile.live}
                target="_blank"
                rel="noreferrer"
                className="shipment-link1"
              >
                <SiLeetcode />
                  LeetCode
                <FiArrowUpRight />
              </a>
             </span>
            </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
