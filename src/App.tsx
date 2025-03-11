import { useState } from 'react';


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-3">
              <img
                src="porto3.jpeg"
                alt="Mudhihir Nyema"
                className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
              />
              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className="text-xl font-bold text-indigo-600 flex items-center"
              >
                <i className="fas fa-code mr-2 text-indigo-600"></i>
                Mudhihir Nyema
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', icon: 'fas fa-home' },
                { name: 'About', icon: 'fas fa-user' },
                { name: 'Skills', icon: 'fas fa-tools' },
                { name: 'Databases', icon: 'fas fa-database' },
                { name: 'Experience', icon: 'fas fa-briefcase' },
                { name: 'Individual Projects', icon: 'fas fa-project-diagram' },
                { name: 'Shared Projects', icon: 'fas fa-users' },
                { name: 'Contact', icon: 'fas fa-envelope' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                  onClick={() => scrollToSection(item.name.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200 flex items-center"
                >
                  <i className={`${item.icon} mr-2`}></i>
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md transition-colors duration-200 flex items-center"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Get in Touch
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-indigo-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { name: 'Home', icon: 'fas fa-home' },
                  { name: 'About', icon: 'fas fa-user' },
                  { name: 'Skills', icon: 'fas fa-tools' },
                  { name: 'Databases', icon: 'fas fa-database' },
                  { name: 'Experience', icon: 'fas fa-briefcase' },
                  { name: 'Individual Projects', icon: 'fas fa-project-diagram' },
                  { name: 'Shared Projects', icon: 'fas fa-users' },
                  { name: 'Contact', icon: 'fas fa-envelope' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                    onClick={() => scrollToSection(item.name.toLowerCase().replace(' ', '-'))}
                    className="block px-3 py-2 text-indigo-600 hover:text-indigo-800 hover:bg-gray-100 rounded-md flex items-center"
                  >
                    <i className={`${item.icon} mr-2`}></i>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Sections */}
      <div className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="text-center">
            <img
              src="porto3.jpeg"
              alt="Mudhihir Nyema"
              className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
            />
            <h1 className="text-4xl md:text-5xl font-bold flex justify-center items-center">
              <i className="fas fa-code mr-3"></i>
              Mudhihir Nyema
            </h1>
            <p className="text-lg md:text-xl mt-2 flex justify-center items-center">
              <i className="fas fa-laptop-code mr-2"></i>
              Software Developer/Programmer(IT)
            </p>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-100 transition-colors flex items-center justify-center mx-auto"
            >
              <i className="fas fa-hands-helping mr-2"></i>
              Hire Me
            </a>
          </div>
        </section>

        <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 flex items-center justify-center">
            <i className="fas fa-user-circle mr-3"></i>
            About Me <i className="fas fa-xmark ml-2 text-sm"></i>
          </h2>
          <p className="text-lg leading-relaxed">
            I'm a skilled Software Developer, IT Programmer, and IT Support Specialist with extensive experience in developing and managing software and IT systems. I work with technologies like PHP (Laravel), Java (Spring Boot), Vue.js, React.js, Next.js, Flutter, and databases including MySQL, Oracle, PostgreSQL, and SQL. My expertise includes IT support, server management, network infrastructure, and user training. I'm passionate about creating secure, scalable, and efficient solutions for businesses.
          </p>
        </section>

        <section id="skills" className="py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 flex items-center justify-center">
            <i className="fas fa-tools mr-3"></i>
            Skills & Technologies <i className="fas fa-xmark ml-2 text-sm"></i>
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {[
              { skill: 'Project Management', icon: 'fas fa-tasks' },
              { skill: 'Mobile App Development', icon: 'fas fa-mobile-alt' },
              { skill: 'Website Development', icon: 'fas fa-globe' },
              { skill: 'UI/UX Design', icon: 'fas fa-paint-brush' },
              { skill: 'API Development (REST, GraphQL)', icon: 'fas fa-exchange-alt' },
              { skill: 'Database Design & Management', icon: 'fas fa-database' },
              { skill: 'GitHub & GitLab', icon: 'fab fa-github' },
              { skill: 'System Administration', icon: 'fas fa-server' },
              { skill: 'Network Troubleshooting', icon: 'fas fa-network-wired' },
              { skill: 'Agile Methodology', icon: 'fas fa-users-cog' },
              { skill: 'Flutter', icon: 'fas fa-code' },
              { skill: 'React.js', icon: 'fab fa-react' },
              { skill: 'Vue.js', icon: 'fab fa-vuejs' },
              { skill: 'PHP (Laravel)', icon: 'fab fa-laravel' },
              { skill: 'Java (Spring Boot)', icon: 'fab fa-java' },
              { skill: 'TypeScript', icon: 'fas fa-code' },
              { skill: 'HTML5 & CSS3 (Tailwind, Bootstrap)', icon: 'fab fa-html5' },
              { skill: 'Cloud Platforms (AWS, Azure, Vercel)', icon: 'fas fa-cloud' },
            ].map((item) => (
              <div key={item.skill} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <i className={`${item.icon} mr-3 text-indigo-600`}></i>
                <p className="font-semibold">{item.skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="databases" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 flex items-center justify-center">
            <i className="fas fa-database mr-3"></i>
            Databases <i className="fas fa-xmark ml-2 text-sm"></i>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'MySQL', desc: 'Relational database management system for structured data.', icon: 'fas fa-database' },
              { name: 'Oracle', desc: 'Enterprise-grade RDBMS for large-scale applications.', icon: 'fas fa-server' },
              { name: 'PostgreSQL', desc: 'Open-source RDBMS with advanced features.', icon: 'fas fa-database' },
              { name: 'Firebase', desc: 'NoSQL database for real-time applications.', icon: 'fas fa-fire' },
              { name: 'MongoDB', desc: 'Document-based NoSQL database for flexibility.', icon: 'fas fa-leaf' },
              { name: 'SQL', desc: 'Query language for managing relational databases.', icon: 'fas fa-code' },
            ].map((db) => (
              <div key={db.name} className="bg-white p-4 rounded-lg shadow-md flex items-start">
                <i className={`${db.icon} mr-3 text-indigo-600 mt-1`}></i>
                <div>
                  <h3 className="font-semibold text-lg text-indigo-600">{db.name}</h3>
                  <p className="text-sm mt-2">{db.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 flex items-center justify-center">
            <i className="fas fa-briefcase mr-3"></i>
            Work Experience <i className="fas fa-xmark ml-2 text-sm"></i>
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold flex items-center">
                <i className="fas fa-building mr-2 text-indigo-600"></i>
                IT Manager - Tera Technologies and Engineering Limited (2024 - Present)
              </h3>
              <ul className="list-disc ml-6 mt-2">
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-indigo-600"></i>
                  Gathered user requirements, designed, and implemented applications and systems.
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-indigo-600"></i>
                  Managed servers (VPS hosting) and network infrastructure.
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-indigo-600"></i>
                  Developed mobile apps (e.g., VTS tracking, teratrack) and managed API integrations.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center">
                <i className="fas fa-building mr-2 text-indigo-600"></i>
                Industrial Field Training - Tanzania Commercial Bank (2023)
              </h3>
              <ul className="list-disc ml-6 mt-2">
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-indigo-600"></i>
                  Supported core banking applications and network infrastructure.
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-indigo-600"></i>
                  Developed APIs with Java and Spring Boot.
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-indigo-600"></i>
                  Conducted user training for developed systems.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center">
                <i className="fas fa-building mr-2 text-indigo-600"></i>
                Software Developer Intern - Nature Dosh Company (2022)
              </h3>
              <ul className="list-disc ml-6 mt-2">
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-indigo-600"></i>
                  Built e-commerce software using Angular.js with payment gateways and inventory management.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="individual-projects" className="py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 flex items-center justify-center">
            <i className="fas fa-project-diagram mr-3"></i>
            Individual Projects <i className="fas fa-xmark ml-2 text-sm"></i>
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-business-time mr-2 text-indigo-600"></i>
                Business Processes Management System
              </h3>
              <p className="text-sm mt-2">System covers whole business activities, developed with MySQL, SQL, PHP (Laravel 10), Vite, Tailwind CSS, and Vue3.js.</p>
              <a href="https://bpm.teratech.co.tz" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fas fa-link mr-2"></i>View Project Live
              </a>
              <a href="https://github.com/MUDHIHIR01/business-processes-system.git" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fab fa-github mr-2"></i>View In Github
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-warehouse mr-2 text-indigo-600"></i>
                Inventory Management System
              </h3>
              <p className="text-sm mt-2">System covers whole inventory, developed with Spring Boot, Spring Data JPA, MySQL, Vite, Tailwind CSS, and Vue3.js.</p>
              <a href="https://github.com/MUDHIHIR01/inventory-system.git" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fab fa-github mr-2"></i>View Project In Github
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-school mr-2 text-indigo-600"></i>
                School Management System (Prime Peak Company)
              </h3>
              <p className="text-sm mt-2">System covers school activities especially examinations, developed with MySQL, SQL, PHP (Laravel 10), Vite, Tailwind CSS, and Vue3.js.</p>
              <a href="https://github.com/MUDHIHIR01/school-managment-system.git" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fab fa-github mr-2"></i>View In Github
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-globe mr-2 text-indigo-600"></i>
                School Website (Prime Peak Company)
              </h3>
              <p className="text-sm mt-2">System developed to explain Prime Peak Company, developed with Vite, Tailwind CSS, and Vue3.js.</p>
              <a href="http://147.79.101.245:8086/" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fas fa-link mr-2"></i>View Project Live
              </a>
              <a href="https://github.com/MUDHIHIR01/school-website.git" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fab fa-github mr-2"></i>View Project In Github
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-car mr-2 text-indigo-600"></i>
                Vehicle Tracking System (VTS)
              </h3>
              <p className="text-sm mt-2">System developed to manage vehicle tracking data like installation of vehicles, customers, devices, and dispatches, developed with MySQL, SQL, PHP (Laravel 10), Vite, Tailwind CSS, and Vue3.js.</p>
              <a href="https://vts.teratech.co.tz/" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fas fa-link mr-2"></i>View Project Live
              </a>
              <a href="https://github.com/MUDHIHIR01/vts-system.git" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fab fa-github mr-2"></i>View Project In Github
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-prescription-bottle mr-2 text-indigo-600"></i>
                Pharmacy Management System
              </h3>
              <p className="text-sm mt-2">System developed to manage pharmacy inventory and sales, developed with MySQL, SQL, PHP (Laravel 10), Vite, Tailwind CSS, and Vue3.js.</p>
              <a href="https://github.com/MUDHIHIR01/pharmacy-management-system.git" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fab fa-github mr-2"></i>View Project In Github
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-prescription-bottle mr-2 text-indigo-600"></i>
                Enterprse Assets Management Solution 
              </h3>
              <p className="text-sm mt-2">System developed to manage and track company assets, developed with MySQL, SQL, PHP (Laravel 10), Vite, Tailwind CSS, and Rect.js.</p>
              <a href="https://github.com/MUDHIHIR01/enterprise-management-system.git" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fab fa-github mr-2"></i>View Project In Github
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-mobile-alt mr-2 text-indigo-600"></i>
                VTS Mobile App
              </h3>
              <p className="text-sm mt-2">Mobile application developed to streamline vehicle tracking activities by technicians, developed with MySQL, SQL, PHP (Laravel 10 as API endpoints), Dart language, and Flutter technology.</p>
              <a href="https://github.com/MUDHIHIR01/vts-application.git" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fab fa-github mr-2"></i>Get APK on Github
              </a>
            </div>
          </div>
        </section>

        <section id="shared-projects" className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 flex items-center justify-center">
            <i className="fas fa-users mr-3"></i>
            Shared Projects <i className="fas fa-xmark ml-2 text-sm"></i>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-warehouse mr-2 text-indigo-600"></i>
                Tera Inventory
              </h3>
              <p className="text-sm mt-2">System developed to cover inventory and sales at Tera Technologies and Engineering Limited, developed with PostgreSQL, Tailwind, React.js, Vite, and Laravel 10 as API endpoints.</p>
              <a href="https://terainventoryv1.teratech.co.tz/" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fas fa-link mr-2"></i>View Project
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-globe mr-2 text-indigo-600"></i>
                Tera Website
              </h3>
              <p className="text-sm mt-2">Developed with Vite, React.js, and Tailwind CSS.</p>
              <a href="https://teratech.co.tz/" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fas fa-link mr-2"></i>View Project
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-shopping-cart mr-2 text-indigo-600"></i>
                Nature & Dosh Ecommerce Platform
              </h3>
              <p className="text-sm mt-2">Developed with Angular.js, Tailwind CSS, and Firebase.</p>
              <a href="https://naturedosh.com/home" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fas fa-link mr-2"></i>View Project
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold flex items-center">
                <i className="fas fa-mobile-alt mr-2 text-indigo-600"></i>
                Teratrack Mobile Application
              </h3>
              <p className="text-sm mt-2">Developed with Flutter, PostgreSQL, and Laravel as endpoint APIs. Visit Google Play Store (search: teratrack).</p>
              <a href="https://play.google.com/store/apps/details?id=com.teratech.teratrack" target="_blank" className="text-indigo-600 hover:underline mt-2 block flex items-center">
                <i className="fas fa-link mr-2"></i>View Project
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 flex items-center justify-center">
            <i className="fas fa-envelope mr-3"></i>
            Contact Me <i className="fas fa-xmark ml-2 text-sm"></i>
          </h2>
          <div className="text-center space-y-4">
            <p className="text-lg flex items-center justify-center">
              <i className="fas fa-phone mr-2 text-indigo-600"></i>
              Phone: <a href="tel:+255682131140" className="text-indigo-600 hover:underline ml-2">+255 682 131 140</a>
            </p>
            <p className="text-lg flex items-center justify-center">
              <i className="fas fa-envelope mr-2 text-indigo-600"></i>
              Email: <a href="mailto:nyemamudhihir@gmail.com" className="text-indigo-600 hover:underline ml-2">nyemamudhihir@gmail.com</a>
            </p>
            <p className="text-lg flex items-center justify-center">
              <i className="fas fa-map-marker-alt mr-2 text-indigo-600"></i>
              Location: Mwenge, Dar es Salaam, Tanzania
            </p>
            <p className="text-lg flex items-center justify-center">
              <i className="fab fa-github mr-2 text-indigo-600"></i>
              GitHub: <a href="https://github.com/MUDHIHIR01?tab=repositories" target="_blank" className="text-indigo-600 hover:underline ml-2">github.com/MUDHIHIR01</a>
            </p>
            <p className="text-lg flex items-center justify-center">
              <i className="fab fa-linkedin mr-2 text-indigo-600"></i>
              LinkedIn: <a href="https://linkedin.com/in/mudhihir-nyema" target="_blank" className="text-indigo-600 hover:underline ml-2">linkedin.com/in/mudhihir-nyema</a>
            </p>
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://github.com/MUDHIHIR01"
              target="_blank"
              className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/mudhihir-nyema"
              target="_blank"
              className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </section>

        <footer className="py-16 bg-indigo-600 text-white text-center">
          <p><i className="fas fa-copyright mr-2"></i>MUDHIHIR01. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}