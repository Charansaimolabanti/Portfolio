 'use client';
 
 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { SparklesCore } from "@/components/ui/shadcn-io/sparkles";
 import {Particles} from "../components/ui/shadcn-io/particles";
 
 // Actual details extracted from RESUME.html
 const details = {
   name: "CHARAN SAI MOLABANTI",
   title: "Multimedia Editor & Web Developer",
   phone: "+91 9032159979",
   email: "charansai.molabanti@gmail.com",
   oldSite: "https://www.charansaimolabanti.rf.gd/",
   linkedin: "https://in.linkedin.com/in/charan-sai-molabanti-49a022263",
   avatar: "https://media.licdn.com/dms/image/v2/D5603AQFzNuDaUD0dyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723395145899?e=1760572800&v=beta&t=PjcfVIIVX-eNgF2Rr4HkL9PGjChfwsySE9wipHE-g98",
 };
 
 const summary = `I am a passionate Multimedia Editor and Web Developer with expertise in creating captivating visuals 
 and user-friendly websites. My skill set spans design, storytelling, and coding, enabling me to deliver impactful 
 digital solutions tailored to client needs.`;
 
 const skills = [
   "HTML (100%)", "CSS (90%)", "JavaScript (75%)",
   "Designing (80%)", "Next js (90%)", "Photoshop (55%)"
 ];
 
 const experience = [
   {
     title: "Web Developer",
     company: "Blackbuck Engineers Pvt Ltd / Freelance",
     duration: "Ongoing",
     details: [
       "Full-Stack Developer contributing to client websites and internal tools.",
       "Designed and deployed custom websites for clients.",
       "Created a personal portfolio webpage to showcase work and skills."
     ]
   },
   {
     title: "Graphic Design Specialist",
     company: "Freelance Projects",
     duration: "Ongoing",
     details: [
       "Developed marketing assets including logos, brochures, and presentations.",
       "Managed up to 5 projects simultaneously under tight deadlines.",
       "Consulted with clients to deliver effective designs.",
       "Created 4+ design proposals per month."
     ]
   }
 ];
 
 const education = [
   {
     degree: "B.Tech in CSE (AI & ML)",
     institution: "Dhanekula Institute of Engineering And Technology",
     duration: "2022 - Present",
     score: "CGPA: 7.5"
   },
   {
     degree: "Class XII, BIEAP",
     institution: "NRI Institute, Tenali, AP",
     duration: "2022",
     score: "Percentage: 83.4%"
   },
   {
     degree: "SSC, Class X",
     institution: "Sri Chaitanya Vidya Vihar, Kolluru",
     duration: "2020",
     score: "Percentage: 96.6%"
   }
 ];
 
 const certifications = [
   "Languages: C, Python, Java, MySQL",
   "Software: Adobe Premiere Pro, After Effects",
   "Web Developer - Intermediate",
   "Multimedia Editor - Intermediate"
 ];
 
 const styles = [
   {
     name: "Classic",
     container: "bg-white shadow-lg rounded-lg overflow-hidden",
     header: "bg-indigo-600 text-white p-6 sm:p-8 flex flex-row items-center justify-between",
     avatar: "w-32 h-32 rounded-full border-4 border-white shadow",
     section: "p-6 sm:p-8 space-y-8",
     title: "text-3xl sm:text-4xl font-bold",
     subtitle: "mt-2 sm:mt-4 text-lg sm:text-xl",
     avatarPosition: "left",
   },
   {
     name: "Modern",
     container: "bg-gradient-to-br from-blue-100 to-indigo-200 shadow-xl rounded-xl overflow-hidden",
     header: "bg-white text-indigo-700 p-6 sm:p-8 flex flex-row items-center justify-between",
     avatar: "w-32 h-32 rounded-full border-4 border-indigo-600 shadow",
     section: "p-6 sm:p-8 space-y-8",
     title: "text-4xl font-extrabold text-indigo-700",
     subtitle: "mt-2 sm:mt-4 text-xl text-indigo-500",
     avatarPosition: "right",
   },
   {
     name: "Minimal",
     container: "bg-gray-50 border border-gray-200 rounded-lg shadow-sm overflow-hidden",
     header: "bg-gray-100 text-gray-800 p-6 sm:p-8 flex flex-col items-center",
     avatar: "w-40 h-40 rounded-full mb-2 border-2 border-gray-300",
     section: "p-6 sm:p-8 space-y-8",
     title: "text-2xl font-semibold text-gray-900",
     subtitle: "mt-2 sm:mt-4 text-base text-gray-600",
     avatarPosition: "top",
   },
 ];
 
 export default function Resume() {
   const [styleIndex, setStyleIndex] = useState(0);
   const handleNextStyle = () => setStyleIndex((prev) => (prev + 1) % styles.length);
   const style = styles[styleIndex];
 
   return (
 <div>
      
     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-transparent text-gray-800 font-sans leading-relaxed overflow-hidden">
         
      <Particles
        className="absolute inset-0 pointer-events-none z-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#803ae0"
        size={2.0}
      />
       <div className="container mx-auto p-lg sm:p-8 bg-transparent">
         
         <AnimatePresence mode="wait">
           <motion.div
             key={style.name}
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -40 }}
             transition={{ duration: 0.5 }}
             className={style.container}
           >
             {/* Header */}
             <div className={style.header}>
               {style.avatarPosition === "left" && (
                 <>
                   <img src={details.avatar} alt="Avatar" className={style.avatar} />
                   <div className="flex flex-col items-start ml-8 flex-1">
                     <h1 className={style.title}>{details.name}</h1>
                     <p className={style.subtitle}>{details.title}</p>
                     <div className="mt-4 flex flex-wrap text-sm sm:text-base space-x-4">
                       <a href={`tel:${details.phone}`} className="flex items-center">📞 {details.phone}</a>
                       <a href={`mailto:${details.email}`} className="flex items-center">📧 {details.email}</a>
                       <a href={details.oldSite} className="flex items-center">🌐 Portfolio</a>
                       <a href={details.linkedin} className="flex items-center">🌐 LinkedIn</a>
                     </div>
                   </div>
                 </>
               )}
               {style.avatarPosition === "right" && (
                 <>
                   <div className="flex flex-col items-start mr-8 flex-1">
                     <h1 className={style.title}>{details.name}</h1>
                     <p className={style.subtitle}>{details.title}</p>
                     <div className="mt-4 flex flex-wrap text-sm sm:text-base space-x-4">
                       <a href={`tel:${details.phone}`} className="flex items-center">📞 {details.phone}</a>
                       <a href={`mailto:${details.email}`} className="flex items-center">📧 {details.email}</a>
                       <a href={details.oldSite} className="flex items-center">🌐 Portfolio</a>
                       <a href={details.linkedin} className="flex items-center">🌐 LinkedIn</a>
                     </div>
                   </div>
                   <img src={details.avatar} alt="Avatar" className={style.avatar} />
                 </>
               )}
               {style.avatarPosition === "top" && (
                 <>
                   <img src={details.avatar} alt="Avatar" className={style.avatar} />
                   <h1 className={style.title}>{details.name}</h1>
                   <p className={style.subtitle}>{details.title}</p>
                 </>
               )}
             </div>
 
             {/* Content */}
             <div className={style.section}>
               <section>
                 <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Summary</h2>
                 <p className="mt-4">{summary}</p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Skills</h2>
                 <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                   {skills.map((skill, i) => (
                     <span key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded">{skill}</span>
                   ))}
                 </div>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Experience</h2>
                 {experience.map((exp, i) => (
                   <div key={i} className="mt-4">
                     <h3 className="text-xl font-semibold">{exp.title}</h3>
                     <p className="text-sm text-gray-600">{exp.company} • {exp.duration}</p>
                     <ul className="mt-2 list-disc list-inside">
                       {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
                     </ul>
                   </div>
                 ))}
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Education</h2>
                 {education.map((edu, i) => (
                   <div key={i} className="mt-4">
                     <h3 className="text-xl font-semibold">{edu.degree}</h3>
                     <p className="text-sm text-gray-600">{edu.institution} • {edu.duration}</p>
                     <p>{edu.score}</p>
                   </div>
                 ))}
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Certifications / Tools</h2>
                 <ul className="mt-4 list-disc list-inside">
                   {certifications.map((cert, i) => <li key={i}>{cert}</li>)}
                 </ul>
               </section>
             </div>
 
             {/* Switch Button */}
             <div className="flex justify-center py-6">
               <button
                 onClick={handleNextStyle}
                 className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
               >
                 Switch to {styles[(styleIndex + 1) % styles.length].name} Style
               </button>
             </div>
           </motion.div>
         </AnimatePresence>
         
       </div>
       
     </div>  
      <Particles
                         className="absolute inset-0 pointer-events-none"
                         quantity={100}
                         ease={80}
                         staticity={50}
                         color="#803ae0"
                         size={2.0}
                       />
    
     </div>
     
   );
 }
 