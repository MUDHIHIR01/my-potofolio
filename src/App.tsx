import { useState } from 'react';

// Define the type for the ProjectCard's props
interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  liveLink?: string; // The '?' makes this property optional
  githubLink?: string; // Optional
  apkLink?: string;    // Optional
  storeLink?: string;  // Optional
}

// A helper component for project cards to reduce repetition
// Apply the ProjectCardProps type to the destructured props
const ProjectCard = ({ icon, title, description, liveLink, githubLink, apkLink, storeLink }: ProjectCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col">
    <div className="flex-grow">
      <h3 className="text-xl font-bold flex items-center mb-2 text-gray-800">
        <i className={`${icon} mr-3 text-indigo-600`}></i>
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-200">
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold mt-2 block flex items-center transition-colors">
          <i className="fas fa-link mr-2"></i>View Live Project
        </a>
      )}
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold mt-2 block flex items-center transition-colors">
          <i className="fab fa-github mr-2"></i>View on GitHub
        </a>
      )}
      {apkLink && (
        <a href={apkLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold mt-2 block flex items-center transition-colors">
          <i className="fas fa-download mr-2"></i>Get APK on GitHub
        </a>
      )}
      {storeLink && (
        <a href={storeLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold mt-2 block flex items-center transition-colors">
          <i className="fab fa-google-play mr-2"></i>View on Play Store
        </a>
      )}
    </div>
  </div>
);

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'About', icon: 'fas fa-user' },
    { name: 'Skills', icon: 'fas fa-cogs' },
    { name: 'Experience', icon: 'fas fa-briefcase' },
    { name: 'Individual Projects', icon: 'fas fa-project-diagram' },
    { name: 'Shared Projects', icon: 'fas fa-users' },
    { name: 'Contact', icon: 'fas fa-envelope' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <a href="#home" onClick={() => scrollToSection('home')} className="flex items-center space-x-3">
                <img
                  src="porto3.jpeg"
                  alt="Mudhihir Nyema"
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 transition-transform hover:scale-110"
                />
                <span className="text-xl font-bold text-indigo-600 hidden sm:block">
                  Mudhihir Nyema
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => scrollToSection(item.name.toLowerCase().replace(/ /g, '-'))}
                  className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group"
                >
                  <i className={`${item.icon} mr-2 text-indigo-500 group-hover:text-indigo-600 transition-colors`}></i>
                  {item.name}
                </a>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-indigo-600 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.name.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => scrollToSection(item.name.toLowerCase().replace(/ /g, '-'))}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md flex items-center"
                  >
                    <i className={`${item.icon} mr-3 w-5 text-center`}></i>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
          <div className="text-center z-10 p-4">
            <img
              src="porto3.jpeg"
              alt="Mudhihir Nyema"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-indigo-500 shadow-2xl transition-transform duration-300 hover:scale-110"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Mudhihir Nyema
            </h1>
            <p className="text-lg md:text-xl mt-3 text-gray-300">
              Full-Stack Software Developer
            </p>
            <div className="mt-8 flex justify-center gap-4">
               <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <i className="fas fa-paper-plane mr-2"></i> Get in Touch
              </a>
               <a
                href="https://github.com/MUDHIHIR01"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <i className="fab fa-github mr-2"></i> My GitHub
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Me</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a passionate and results-driven Software Developer with extensive experience in designing, developing, and managing high-performance web and mobile applications. My expertise spans the full software development lifecycle, utilizing a wide range of technologies including PHP (Laravel), Java (Spring Boot), React.js, Vue.js, and Flutter. I excel in creating scalable, secure, and user-friendly solutions, and I am adept at server administration, CI/CD, and fostering collaborative team environments to deliver exceptional products.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
              {[
                { skill: 'PHP (Laravel)', icon: 'fab fa-laravel' },
                { skill: 'Java (Spring Boot)', icon: 'fab fa-java' },
                { skill: 'React.js / Next.js', icon: 'fab fa-react' },
                { skill: 'Vue.js', icon: 'fab fa-vuejs' },
                { skill: 'Flutter', icon: 'fas fa-mobile-alt' },
                { skill: 'TypeScript', icon: 'fas fa-code' },
                { skill: 'HTML5 & CSS3', icon: 'fab fa-html5' },
                { skill: 'Tailwind CSS', icon: 'fas fa-wind' },
                { skill: 'MySQL', icon: 'fas fa-database' },
                { skill: 'PostgreSQL', icon: 'fas fa-database' },
                { skill: 'Firebase', icon: 'fas fa-fire' },
                { skill: 'API (REST & GraphQL)', icon: 'fas fa-project-diagram' },
                { skill: 'CI/CD (Jenkins, Git)', icon: 'fas fa-cogs' },
                { skill: 'Docker', icon: 'fab fa-docker' },
                { skill: 'Server Admin (VPS)', icon: 'fas fa-server' },
              ].map((item) => (
                <div key={item.skill} className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                  <i className={`${item.icon} text-4xl text-indigo-500 mb-3`}></i>
                  <p className="font-semibold text-gray-700">{item.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Professional Experience</h2>
                <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
                <div className="relative border-l-2 border-indigo-200 space-y-12">
                    {[
                        {
                            role: "Software Developer",
                            company: "Mwananchi Communications Limited",
                            date: "May 2024 - Present",
                            points: [
                                "Developed and maintained digital media platforms (e.g., Mwananchi Digital, eGazeti) using PHP, Laravel, Java, and Spring Boot, integrating RESTful APIs with MySQL and PostgreSQL databases.",
                                "Designed responsive front-end interfaces with HTML5, CSS3, Vue.js, and React.js, improving user engagement by 25%.",
                                "Implemented CI/CD pipelines using Jenkins and Git, reducing deployment time by 20%.",
                                "Conducted software testing and quality assurance, achieving 95% defect-free releases.",
                                "Prepared technical documentation and conducted user training, enhancing platform adoption by 30%."
                            ]
                        },
                        {
                            role: "Software Developer",
                            company: "Tera Technologies and Engineering Limited",
                            date: "2023 - May 2024",
                            points: [
                                "Built and deployed mobile applications (e.g., Tera VTS, TeraTrack) using Flutter, PHP, and Java, integrating REST and GraphQL APIs with MySQL and PostgreSQL databases.",
                                "Led requirements analysis, prototyping, and deployment per SDLC methodologies, achieving 98% on-time project delivery.",
                                "Managed VPS server administration, ensuring 99.9% uptime for web and mail services.",
                                "Developed API integrations for e-government systems, improving data interoperability.",
                                "Collaborated with teams to troubleshoot issues, reducing system downtime by 15%."
                            ]
                        },
                        {
                            role: "Industrial Field Training (Business Solution Support)",
                            company: "Tanzania Commercial Bank (TCB) Headquarters",
                            date: "2023",
                            points: [
                                "Optimized core banking system modules using Java and Spring Boot, improving transaction processing efficiency by 15%.",
                                "Supported REST API development for system integrations, ensuring seamless data exchange.",
                                "Conducted user training for banking applications, increasing staff proficiency by 25%."
                            ]
                        },
                        {
                            role: "Software Developer Intern",
                            company: "Nature Dosh Company",
                            date: "2022",
                            points: [
                                "Developed e-commerce platforms using PHP, Laravel, Angular.js, and Firebase, integrating payment gateways and inventory management.",
                                "Designed responsive front-end interfaces with HTML5, CSS3, and Bootstrap, enhancing user engagement by 20%.",
                                "Collaborated with teams to troubleshoot and resolve application issues, reducing bugs by 90%."
                            ]
                        }
                    ].map((job, index) => (
                        <div key={index} className="pl-8 relative">
                            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white"></div>
                            <p className="text-sm font-medium text-indigo-500">{job.date}</p>
                            <h3 className="text-xl font-bold text-gray-800 mt-1">{job.role}</h3>
                            <p className="text-md text-gray-600">{job.company}</p>
                            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-600">
                                {job.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Individual Projects Section */}
        <section id="individual-projects" className="py-20 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Individual Projects</h2>
                <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <ProjectCard
                        icon="fas fa-globe"
                        title="MCL Website"
                        description="Official company website for Mwananchi Communications Ltd. Built with a modern stack: Laravel (Backend), React & Vite (Frontend), MySQL, and secured with JWT."
                        liveLink="https://mcl.co.tz"
                    />
                    <ProjectCard
                        icon="fas fa-business-time"
                        title="Business Processes Management System"
                        description="A comprehensive system for managing all business activities. Tech: PHP (Laravel 10), Vue3.js, Vite, Tailwind CSS, MySQL."
                        liveLink="https://bpm.teratech.co.tz"
                        githubLink="https://github.com/MUDHIHIR01/business-processes-system.git"
                    />
                    <ProjectCard
                        icon="fas fa-car"
                        title="Vehicle Tracking System (VTS)"
                        description="Manages vehicle tracking data: installations, customers, devices, and dispatches. Tech: PHP (Laravel 10), Vue3.js, Vite, Tailwind CSS, MySQL."
                        liveLink="https://vts.teratech.co.tz/"
                        githubLink="https://github.com/MUDHIHIR01/vts-system.git"
                    />
                    <ProjectCard
                        icon="fas fa-mobile-alt"
                        title="VTS Mobile App"
                        description="A companion mobile app for technicians to streamline VTS activities. Developed with Flutter and Dart, consuming Laravel API endpoints."
                        apkLink="https://github.com/MUDHIHIR01/vts-application.git"
                    />
                    <ProjectCard
                        icon="fas fa-calendar-check"
                        title="TeraInvitation System"
                        description="An event management solution with both a web platform (React/Laravel) and a mobile app (Flutter) for seamless event handling. Uses MySQL."
                        liveLink="https://invitation.teratech.co.tz/"
                    />
                    <ProjectCard
                        icon="fas fa-school"
                        title="School Management System"
                        description="A system for Prime Peak Company to manage school activities, especially examinations. Tech: PHP (Laravel 10), Vue3.js, Vite, Tailwind CSS, MySQL."
                        githubLink="https://github.com/MUDHIHIR01/school-managment-system.git"
                    />
                    <ProjectCard
                        icon="fas fa-warehouse"
                        title="Inventory Management System"
                        description="A robust inventory system built with a Java backend. Tech: Spring Boot, Spring Data JPA, Vue3.js, Vite, Tailwind CSS, MySQL."
                        githubLink="https://github.com/MUDHIHIR01/inventory-system.git"
                    />
                </div>
            </div>
        </section>

        {/* Shared Projects Section */}
        <section id="shared-projects" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Shared & Collaborative Projects</h2>
                <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                        icon="fas fa-newspaper"
                        title="Mwanaclick Platform"
                        description="A classifieds web and mobile platform for Mwananchi. Web: React, Tailwind CSS, MySQL. Mobile: Flutter. Available on App Store and Play Store."
                        liveLink="https://mwanaclick.com/"
                    />
                    <ProjectCard
                        icon="fas fa-truck-loading"
                        title="Distribution Management System"
                        description="An internal system at MCL to support and streamline newspaper and product distribution logistics across the country."
                        liveLink="https://dms.mcl.co.tz/"
                    />
                    <ProjectCard
                        icon="fas fa-mobile-alt"
                        title="Teratrack Mobile App"
                        description="A mobile tracking application for clients of Tera Technologies. Built with Flutter, consuming a Laravel backend API with a PostgreSQL database."
                        storeLink="https://play.google.com/store/apps/details?id=com.teratech.teratrack"
                    />
                    <ProjectCard
                        icon="fas fa-globe"
                        title="Tera Technologies Website"
                        description="The official corporate website for Tera Technologies and Engineering Limited, built with React.js, Vite, and Tailwind CSS."
                        liveLink="https://teratech.co.tz/"
                    />
                    <ProjectCard
                        icon="fas fa-shopping-cart"
                        title="Nature & Dosh Ecommerce"
                        description="An e-commerce platform built during my internship. Developed with Angular.js, Tailwind CSS, and Firebase for real-time database capabilities."
                        liveLink="https://naturedosh.com/home"
                    />
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Get in Touch</h2>
                <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 mb-8">
                    I'm currently open to new opportunities. Feel free to reach out via email, phone, or connect with me on social media.
                </p>
                <div className="space-y-4 text-lg">
                    <p><i className="fas fa-envelope mr-3 text-indigo-500"></i><a href="mailto:nyemamudhihir@gmail.com" className="text-gray-700 hover:text-indigo-600 transition-colors">nyemamudhihir@gmail.com</a></p>
                    <p><i className="fas fa-phone mr-3 text-indigo-500"></i><a href="tel:+255682131140" className="text-gray-700 hover:text-indigo-600 transition-colors">+255 682 131 140</a></p>
                    <p><i className="fas fa-map-marker-alt mr-3 text-indigo-500"></i><span className="text-gray-700">Dar es Salaam, Tanzania</span></p>
                </div>
                <div className="flex justify-center space-x-6 mt-8">
                    <a href="https://github.com/MUDHIHIR01?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://linkedin.com/in/mudhihir-nyema" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-800 text-white text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Mudhihir Nyema. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}