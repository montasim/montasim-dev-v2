import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { BiRightArrow } from 'react-icons/bi';
import { FaRegFolder } from 'react-icons/fa';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import professionalPhoto from '../assets/images/SHUVO Transparent BG.png'
import MobileSocial from '../components/MobileSocial';
import Title from '../components/Title';

export default function Home() {
  const summary = [
    {
      "id": 1,
      "number": 4,
      "name": "Frontend Projects"
    },
    {
      "id": 2,
      "number": 5,
      "name": "Backend Projects"
    },
    {
      "id": 3,
      "number": 3000,
      "name": "Commits This Year"
    }
  ];

  const skills = ['JavaScript (ES6+)', 'React JS', 'Node.js', 'Express.js', 'Tailwind CSS', 'BootStrap'];

  const [projects, setProjects] = useState([]);
  const [noteWorthyProjects, setNoteWorthyProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  useEffect(() => {
    fetch('noteWorthyProjects.json')
      .then(res => res.json())
      .then(data => setNoteWorthyProjects(data));
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`)
      .then((result) => {
        toast.success(`Email send successfully`);

        document.getElementById('contact-form').reset();
      }, (error) => {
        toast.error(`Sorry, An error occurred.`);
      });
  };

  return (
    <div className='lg:mx-40 md:mx-20 mx-4 text-[#8892b0]'>
      <Title />

      <main>
        {/* start introduction */}
        <section id='introduction' className='lg:mt-28 md:mt-28 mt-24 mb-28'>
          <div className="hero-content flex-col lg:flex-row-reverse" >
            <div>
              <p className='mb-2 text-[18px] text-[#64ffda]'>Hi, my name is</p>
              <h1 className="lg:text-[66px] md:text-[46px] text-[36px] font-bold text-[#ccd6f6]">Montasim -Al- Mamun.</h1>
              <h5 className='lg:text-[66px] md:text-[46px] text-[36px] font-bold text-[#8892b0]'>I build things for the web.</h5>
              <p className="mt-4 py-2 lg:w-7/12 text-[18px] text-[#8892b0]" > I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products using MERN Stack.</p >
              <a className="btn rounded-xs border-primary text-primary px-10 capitalize text-md mt-14 hover:bg-primary hover:opacity-70 hover:text-black" href='https://drive.google.com/file/d/1sR4CxyIYw1uIesJHWaERKDGOBwfOVUcH/view?usp=sharing' target='_blank' rel="noreferrer" > Download My Resume</a >
            </div >
          </div >
        </section >
        {/* end introduction */}

        {/* start summary */}
        <section className='text-white mb-32'>
          <div className='max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8'>
            <ul
              className='mt-8 border-2 border-white border-opacity-25 divide-y-2 divide-white sm:grid sm:divide-y-0 sm:divide-x-2 sm:border-l-0 sm:border-r-0 divide-opacity-25 sm:grid-cols-3 text-center'
            >
              {
                summary.map((s, index) =>
                  <li key={index} className='p-8'>
                    <p className='text-3xl font-extrabold text-primary'>{s.number}+</p>
                    <p className='mt-1 text-xl font-medium'>{s.name}</p>
                  </li>)
              }
            </ul>
          </div>
        </section>
        {/* end summary */}

        {/* start about */}
        <section className='mb-24' id='about'>
          <div className='flex items-center gap-6'>
            <h3 className='lg:text-3xl md:text-3xl text-2xl text-accent font-bold'>About Me </h3>
            <hr className='bg-[#233554] lg:w-80 md:w-64 w-40 h-0.5'></hr>
          </div>

          <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-start lg:items-start gap-y-8'>
            <div className='mt-12 text-justify lg:w-7/12 md:w-6/12 w-full'>
              <p>
                Hello! My name is Mohammad Montasim -Al- Mamun Shuvo and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I was doing a university project — turns out this project taught me a lot about HTML & CSS!
              </p>

              <p className='my-5'>
                Fast-forward to today, and I’ve had the privilege of working at an organization, as a Management Information System Officer (MIS). My main focus these days is building accessible, inclusive products and digital experiences using MERN Stack.
              </p>

              <p>
                So far, I&apos;ve built some exciting full stack project.
              </p>

              <p className='my-5'>
                Here are a few technologies I’ve been working with recently:
              </p>

              <div className='grid grid-cols-2 gap-2 w-96 mb-10 md:mb-0 lg:mb-0'>
                {
                  skills.map((skill, index) =>
                    <small key={index} className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />{skill}</small>)
                }
              </div>

              <MobileSocial />
            </div>

            <div className="w-64 md:w-64 lg:w-94 rounded-lg relative mt-0 md:mt-16 lg:mt-16">
              <span className="absolute inset-0 border-2 border-primary border-solid rounded-lg"></span>

              <div
                className="transition-transform transform bg-accent -translate-x-5 -translate-y-5 rounded-lg"
              >
                <Image src={professionalPhoto} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* end about */}

        {/* start projects */}
        <section id='projects' className="min-h-screen">
          <div className='flex items-center gap-6'>
            <h3 className='lg:text-3xl md:text-3xl text-2xl text-accent font-bold'>Some Things I’ve Built </h3>
            <hr className='bg-[#233554] lg:w-80 md:w-64 w-40 h-0.5'></hr>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 sm:gap-y-4"
          >
            {
              projects?.map((project) =>
                <div key={project._id} className='flex flex-col md:flex-row lg:flex-row items-center justify-between gap-y-8 my-8'>
                  <Image
                    width={840}
                    height={450}
                    alt={project.projectName + ' home page'}
                    src={project.projectImg}
                    className="object-cover rounded-md lg:w-8/12 md:w-7/12 w-full"
                  />

                  <div className='lg:w-5/12 md:w-5/12 w-full z-50'>
                    <div className='text-right'>
                      <p className='lg:text-lg md:text-lg text-md text-primary mb-2'>{project.projectCategory} Project</p>
                      <a href={project.liveWebsiteLink}>
                        <h4 className='lg:text-2.5xl md:text-2.5xl text-2xl font-bold text-accent hover:text-[#64ffda]'>{project.projectName}</h4>
                      </a>
                    </div>

                    <div className='bg-[#112240] p-6 text-right my-6 lg:ml-[-100px] md:lg:ml-[-100px] ml-0 rounded'>
                      <p>{project.projectDescription.slice(0, 140)}</p>
                    </div>

                    <div className='flow-root'>
                      <div className='flex gap-x-6 float-right mb-8 text-[#a8b2d1]'>
                        <p>{project.technologyUsed}</p>
                      </div>
                    </div>

                    <div className='flow-root'>
                      <div className='grid grid-cols-2 gap-x-6 float-right text-2xl text-accent'>
                        <a href={project.clientSideCodeLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiGithub /></a>
                        <a href={project.liveWebsiteLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiExternalLink /></a>
                      </div>
                    </div>
                  </div>
                </div>)
            }
          </div>

          <div className='text-center mt-14'>
            <h2 className='text-3xl font-bold text-accent mb-6'>Other Noteworthy Projects</h2>
            <Link href='/archive'><a className='text-lg text-primary hover:underline transition duration-700 ease-in-out'>view the archive</a></Link>
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20'>
            {
              noteWorthyProjects?.map(project =>
                <div key={project._id} className="h-96 bg-[#112240] rounded-md p-6">
                  <div className='flex justify-between items-center mb-8'>
                    <FaRegFolder className='text-5xl text-primary' />

                    <div className='grid grid-cols-2 gap-x-6 float-right text-2xl text-accent'>
                      <a href={project.clientSideCodeLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiGithub /></a>
                      <a href={project.liveWebsiteLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiExternalLink /></a>
                    </div>
                  </div>

                  <div>
                    <h4 className='text-xl text-accent font-bold'>{project.projectName}</h4>

                    <p className='mt-4 mb-8'>
                      {project.projectDescription.slice(0, 180)}
                    </p>

                    <div className='flex gap-x-6'>
                      <small>{project.technologyUsed}</small>
                    </div>
                  </div>
                </div>)
            }
          </div>

          <div className='flex justify-center items-center mt-10'>
            <button className="btn rounded-xs border-primary text-primary px-10 capitalize text-md mt-14 hover:bg-primary hover:opacity-70 hover:text-black" > Show All</button >
          </div>
        </section>
        {/* end projects */}

        {/* start contact */}
        <section id='contact' className='grid place-items-center mt-24'>
          <div className='max-w-xl text-center mb-16'>
            <h6 className='lg:text-lg md:text-lg text-md text-primary'>What’s Next?</h6>
            <h3 className="lg:text-4xl md:text-3xl text-2xl text-[#ccd6f6] font-bold my-6" > Get In Touch</h3 >
            <p> I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p >
          </div>

          <MobileSocial />

          <div className="w-full max-w-xl shadow-2xl bg-gray-800 lg:rounded-xl md:rounded:lg rounded-md lg:p-8 md:p-6 p-4">
            <form id='contact-form' ref={form} onSubmit={sendEmail}>
              <div className="form-control" >
                <label className="label" >
                  <span className="label-text" > Your Name</span >
                </label >
                <input name="user_name" type="text" placeholder="your name" required className="input input-bordered" />
              </div >
              <div className="form-control" >
                <label className="label" >
                  <span className="label-text" > Email</span >
                </label >
                <input name="user_email" type="email" placeholder="your email" required className="input input-bordered" />
              </div >
              <div className="form-control" >
                <label className="label" >
                  <span className="label-text" > Message</span >
                </label >
                <textarea name="message" placeholder="your message" required className="input input-bordered h-48" />
              </div >
              <div className="form-control mt-6" >
                <button className="btn rounded-xs border-primary text-primary px-10 capitalize text-md hover:bg-primary hover:opacity-70 hover:text-black" type="submit" value="Send"> Say Hello</button >
              </div >
            </form >
          </div >
        </section >
        {/* end contact */}
      </main>
    </div>
  )
}
