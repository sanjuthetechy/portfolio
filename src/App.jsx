
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
      <section
          id="home"
          className="min-h-[80vh] px-6 py-20 flex items-center"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-8 md:flex-row lg:max-w-7xl">
            {/* Left: Text Details */}
            <div className="flex-1">
              <p className="mb-4 font-semibold text-yellow-600">
                HELLO, I'M
              </p>

              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Sanjana Chaurasiya
              </h1>

              <h2 className="mt-4 text-2xl font-bold text-gray-700 md:text-3xl">
                Software Developer
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                I build web applications using React, Node.js,
                Express, and MongoDB. I enjoy creating useful,
                user-friendly digital experiences and learning
                new technologies.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-[#F5E642] px-6 py-3 font-bold text-[#222222] transition hover:bg-yellow-300"
                >
                  View My Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-lg border border-gray-300 px-6 py-3 font-bold transition hover:border-yellow-500"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right: Profile Photo (Compact & shifted right) */}
            <div className="flex shrink-0 justify-center md:ml-auto md:justify-end md:pr-4 lg:pr-8">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-full bg-yellow-300/40 blur-sm"></div>
                <img
                  src="/sanjana.jpg"
                  alt="Sanjana Chaurasiya"
                  className="relative h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-yellow-400 md:h-48 md:w-48 lg:h-52 lg:w-52"
                />
              </div>
            </div>
          </div>
  </section>
         
    <section id="about" className="bg-gray-50 px-6 py-20">
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 font-semibold uppercase tracking-widest text-yellow-600">
      Get to know me
    </p>

    <h2 className="text-3xl font-black md:text-4xl">
      About Me
    </h2>

    <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
      I am a software developer and engineering student
      interested in building useful web applications.
      I work with modern web technologies such as React,
      Node.js, Express, and MongoDB. I enjoy solving
      problems, learning new skills, and creating
      user-friendly digital experiences.
    </p>

    <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
      My goal is to grow as a developer, contribute to
      real-world projects, and find opportunities where
      I can learn from a team while building meaningful
      software.
    </p>

    <div className="mt-8 grid gap-4 sm:grid-cols-2">

      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <h3 className="font-bold">What I Do</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Build responsive websites and full-stack web
          applications.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <h3 className="font-bold">What I Want</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          An opportunity to improve my skills and
          contribute to real software projects.
        </p>
      </div>

    </div>
  </div>
  </section>
    
    <section id="skills" className="bg-white px-6 py-20">
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 font-semibold uppercase tracking-widest text-yellow-600">
      What I Work With
    </p>

    <h2 className="text-3xl font-black md:text-4xl">
      My Skills
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-gray-600">
      These are the technologies and tools I use to build
      websites and full-stack web applications.
    </p>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-xl border border-gray-200 p-6 transition hover:border-yellow-400 hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 font-black text-yellow-800">
          FE
        </div>

        <h3 className="text-lg font-bold">Frontend</h3>

        <p className="mt-3 leading-7 text-gray-600">
          HTML, CSS, JavaScript, React, Tailwind CSS, Redis, Typescript, Python
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-6 transition hover:border-yellow-400 hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 font-black text-yellow-800">
          BE
        </div>

        <h3 className="text-lg font-bold">Backend</h3>

        <p className="mt-3 leading-7 text-gray-600">
          Node.js, Express.js, REST APIs
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-6 transition hover:border-yellow-400 hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 font-black text-yellow-800">
          DB
        </div>

        <h3 className="text-lg font-bold">Database</h3>

        <p className="mt-3 leading-7 text-gray-600">
          MongoDB, Mongoose, Prishma ORM, My SQL
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-6 transition hover:border-yellow-400 hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 font-black text-yellow-800">
          TL
        </div>

        <h3 className="text-lg font-bold">Tools</h3>

        <p className="mt-3 leading-7 text-gray-600">
          Git, GitHub, VS Code, Antigravity, Postman, 
        </p>
      </div>

    </div>
  </div>
  </section>
         
    <section id="projects" className="bg-gray-50 px-6 py-20">
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 font-semibold uppercase tracking-widest text-yellow-600">
      My Work
    </p>

    <h2 className="text-3xl font-black md:text-4xl">
      Featured Projects
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-gray-600">
      Here are some of the projects I have worked on,
      exploring web development, AI automation, and IoT.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Project 1: DriveSense */}
      <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 font-black text-yellow-800">
          DS
        </div>

        <p className="text-sm font-semibold text-yellow-700">
          IoT · Embedded Systems
        </p>

        <h3 className="mt-2 text-xl font-bold">
          DriveSense
        </h3>

        <p className="mt-3 flex-1 leading-7 text-gray-600">
          A driver-safety project designed to monitor
          driving behavior and identify potential risks
          using sensors and connected technology.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            STM32
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            ESP32
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            MongoDB
          </span>
        </div>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 font-bold hover:text-yellow-700"
        >
          Ask About Project <span>↗</span>
        </a>
      </article>

      {/* Project 2: AI SDR Agent */}
      <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 font-black text-yellow-800">
          AI
        </div>

        <p className="text-sm font-semibold text-yellow-700">
          AI · Automation
        </p>

        <h3 className="mt-2 text-xl font-bold">
          AI SDR Agent
        </h3>

        <p className="mt-3 flex-1 leading-7 text-gray-600">
          An AI-powered sales development project focused
          on assisting sales workflows and reducing
          repetitive tasks through automation.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            AI
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            APIs
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            Automation
          </span>
        </div>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 font-bold hover:text-yellow-700"
        >
          Ask About Project <span>↗</span>
        </a>
      </article>

      {/* Project 3: E-Commerce Platform */}
      <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 font-black text-yellow-800">
          EC
        </div>

        <p className="text-sm font-semibold text-yellow-700">
          Full-Stack Web Development
        </p>

        <h3 className="mt-2 text-xl font-bold">
          E-Commerce Platform
        </h3>

        <p className="mt-3 flex-1 leading-7 text-gray-600">
          A full-stack shopping application focused on
          product browsing and a user-friendly shopping
          experience using the MERN stack.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            React
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            Node.js
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            MongoDB
          </span>
        </div>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 font-bold hover:text-yellow-700"
        >
          Ask About Project <span>↗</span>
        </a>
      </article>

    </div>
  </div>
  </section>

   <section id="experience" className="bg-white px-6 py-20">
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 font-semibold uppercase tracking-widest text-yellow-600">
      My Journey
    </p>

    <h2 className="text-3xl font-black md:text-4xl">
      Experience
    </h2>

    <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <h3 className="text-xl font-bold">
            Software Developer Intern
          </h3>

          <p className="mt-1 text-gray-600">
            BuyMeABook
          </p>
        </div>

        <span className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-600">
          Internship
        </span>

      </div>

      <div className="mt-6 border-l-2 border-yellow-400 pl-5">

        <p className="leading-7 text-gray-600">
          Working on POMS, a business-to-business software
          product, and contributing to software development
          tasks and learning through practical project work.
        </p>

        <h4 className="mt-5 font-bold">
          Areas of Work
        </h4>

        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-600">
          <li>Working with web development technologies.</li>
          <li>Contributing to POMS features and modules.</li>
          <li>Learning to build and maintain software applications.</li>
        </ul>

      </div>
    </div>
  </div>
 </section>

   <section id="contact" className="bg-[#FFFFE3] px-6 py-20">
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 font-semibold uppercase tracking-widest text-gray-700">
      Let's Connect
    </p>

    <h2 className="text-3xl font-black md:text-4xl">
      Get in Touch
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-gray-800">
      I'm interested in software development opportunities,
      internships, and connecting with other developers.
      Feel free to reach out!
    </p>

    <div className="mt-8 flex flex-wrap gap-4">

      <a
        href="https://github.com/sanjuthetechy"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-[#222222] px-5 py-3 font-bold text-white transition hover:bg-gray-700"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/in/sanju-chaurasiya"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-white px-5 py-3 font-bold text-gray-900 transition hover:bg-gray-100"
      >
        LinkedIn ↗
      </a>

      <a
        href="mailto:sanjubarai0606@gmail.com"
        className="rounded-lg border-2 border-gray-900 px-5 py-3 font-bold text-gray-900 transition hover:bg-yellow-300"
      >
        Email Me ↗
      </a>

    </div>

    <div className="mt-8 border-t border-yellow-700/30 pt-5">
      <p className="text-sm text-gray-800">
        Email:
        {" "}
        <a
          href="mailto:sanjubarai0606@gmail.com"
          className="font-semibold underline underline-offset-4"
        >
          sanjubarai0606@gmail.com
        </a>
      </p>
    </div>
     <div className="mt-8 border-t border-yellow-700/30 pt-5">
      <p className="text-sm text-gray-800">
        Phone No:
        {" "}
        <a
          href="phoneno:8591123119"
          className="font-semibold underline underline-offset-4"
        >
          +91 8591123119
        </a>
      </p>
    </div>

  </div>
    
      </section>
    </main>

    {/* Footer */}
    <footer className="border-t border-gray-200 bg-white px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-gray-600">
          © 2026 Sanjana Chaurasiya. All rights reserved.
        </p>

        <a
          href="#home"
          className="font-semibold text-gray-900 transition hover:text-yellow-600"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  </>
);
}

export default App;

