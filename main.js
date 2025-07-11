// Main JavaScript file for AG Abdsamad Portfolio

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const typingText = document.getElementById('typingText');
const greetingText = document.getElementById('greeting-text');
const projectsGrid = document.getElementById('projectsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactFform');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');

// Projects Data
const projects = [
    {
        id: 1,
        title: "Single Page CV",
        description: "A clean and professional single-page CV built with HTML and CSS",
        tags: ["HTML", "CSS", "Responsive"],
        category: "web",
        icon: "📄",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "A responsive single-page CV showcasing professional experience and skills.",
            features: ["Clean design", "Print-friendly", "Mobile responsive", "Professional layout"],
            technologies: ["HTML5", "CSS3", "Flexbox", "Grid"]
        }
    },
    {
        id: 2,
        title: "Basic HTML Website",
        description: "A fundamental website demonstrating HTML structure and semantic markup",
        tags: ["HTML", "CSS", "Semantic"],
        category: "web",
        icon: "🌐",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "A basic website built with semantic HTML and modern CSS practices.",
            features: ["Semantic HTML", "Accessible design", "Clean structure", "Cross-browser compatibility"],
            technologies: ["HTML5", "CSS3", "Semantic markup"]
        }
    },
    {
        id: 3,
        title: "Personal Portfolio",
        description: "This very portfolio website showcasing my work and skills",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "web",
        icon: "💼",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "A modern portfolio website with interactive elements and smooth animations.",
            features: ["Dark/Light theme", "Smooth animations", "Responsive design", "Interactive elements"],
            technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"]
        }
    },
    {
        id: 4,
        title: "Changelog Page",
        description: "A dynamic changelog page for tracking project updates and releases",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "web",
        icon: "📝",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "A changelog page for tracking and displaying project updates.",
            features: ["Version tracking", "Filter by type", "Search functionality", "Timeline view"],
            technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"]
        }
    },
    {
        id: 5,
        title: "Datepicker UI",
        description: "A custom datepicker component with modern design and functionality",
        tags: ["JavaScript", "CSS", "UI"],
        category: "ui",
        icon: "📅",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "A custom datepicker component with modern design and smooth interactions.",
            features: ["Custom styling", "Keyboard navigation", "Date range selection", "Mobile friendly"],
            technologies: ["JavaScript", "CSS3", "Date API"]
        }
    },
    {
        id: 6,
        title: "Image Grid Layout",
        description: "A responsive image gallery with masonry layout and lightbox",
        tags: ["CSS", "JavaScript", "Grid"],
        category: "ui",
        icon: "🖼️",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "A responsive image gallery with masonry layout and lightbox functionality.",
            features: ["Masonry layout", "Lightbox view", "Lazy loading", "Touch gestures"],
            technologies: ["CSS Grid", "JavaScript", "Intersection Observer"]
        }
    },
    {
        id: 7,
        title: "To-Do List",
        description: "A feature-rich todo application with local storage and filtering",
        tags: ["JavaScript", "LocalStorage", "CRUD"],
        category: "tools",
        icon: "✅",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "A comprehensive todo application with advanced features and data persistence.",
            features: ["Add/Edit/Delete tasks", "Priority levels", "Due dates", "Categories", "Search & filter"],
            technologies: ["JavaScript", "Local Storage", "CSS3", "Date API"]
        }
    },
    {
        id: 8,
        title: "Age Calculator",
        description: "Calculate age in years, months, days with additional statistics",
        tags: ["JavaScript", "Math", "Utility"],
        category: "tools",
        icon: "🎂",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "An age calculator that provides detailed age information and statistics.",
            features: ["Precise calculations", "Multiple formats", "Next birthday countdown", "Zodiac sign"],
            technologies: ["JavaScript", "Date API", "Math calculations"]
        }
    },
    {
        id: 9,
        title: "Task Tracker",
        description: "Project management tool for tracking tasks and progress",
        tags: ["JavaScript", "Project Management", "UI"],
        category: "tools",
        icon: "📊",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "A project management tool for tracking tasks, progress, and team collaboration.",
            features: ["Task management", "Progress tracking", "Team collaboration", "Time tracking"],
            technologies: ["JavaScript", "Local Storage", "Chart.js", "CSS Grid"]
        }
    },
    {
        id: 10,
        title: "Quiz App",
        description: "Interactive quiz application with scoring and progress tracking",
        tags: ["JavaScript", "Interactive", "Education"],
        category: "tools",
        icon: "🧠",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "An interactive quiz application with multiple question types and scoring system.",
            features: ["Multiple choice questions", "Timer functionality", "Score tracking", "Progress indicators"],
            technologies: ["JavaScript", "JSON", "CSS Animations", "Local Storage"]
        }
    },
    {
        id: 11,
        title: "Weather Web App",
        description: "Real-time weather application with location-based forecasts",
        tags: ["JavaScript", "API", "Weather"],
        category: "web",
        icon: "🌤️",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "A weather application providing real-time weather data and forecasts.",
            features: ["Current weather", "5-day forecast", "Location search", "Weather maps"],
            technologies: ["JavaScript", "Weather API", "Geolocation API", "CSS3"]
        }
    },
    {
        id: 12,
        title: "Number Guessing Game",
        description: "Fun interactive game with difficulty levels and scoring system",
        tags: ["JavaScript", "Game", "Interactive"],
        category: "tools",
        icon: "🎯",
        demoUrl: "#",
        githubUrl: "#",
        details: {
            overview: "An interactive number guessing game with multiple difficulty levels.",
            features: ["Multiple difficulty levels", "Hint system", "Score tracking", "Sound effects"],
            technologies: ["JavaScript", "CSS Animations", "Audio API", "Local Storage"]
        }
    }
];

// Typing Animation
const typingTexts = [
    "a creative developer",
    "a frontend specialist", 
    "a problem solver",
    "a UI/UX enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Greeting based on time
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    
    greetingText.textContent = greeting;
}

// Theme Toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Particle Animation
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Project Filtering
function filterProjects(category) {
    const filteredProjects = category === 'all' ? projects : projects.filter(p => p.category === category);
    renderProjects(filteredProjects);
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
}

// Render Projects
function renderProjects(projectsToRender) {
    projectsGrid.innerHTML = '';
    
    projectsToRender.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.innerHTML = `
            <div class="project-image">
                <span>${project.icon}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoUrl}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                    <a href="${project.githubUrl}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>
                </div>
            </div>
        `;
        
        projectCard.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(projectCard);
    });
}

// Project Modal
function openProjectModal(project) {
    modalBody.innerHTML = `
        <div class="project-modal-header">
            <div class="project-modal-icon">${project.icon}</div>
            <h2>${project.title}</h2>
        </div>
        <div class="project-modal-content">
            <div class="project-overview">
                <h3>Overview</h3>
                <p>${project.details.overview}</p>
            </div>
            <div class="project-features">
                <h3>Key Features</h3>
                <ul>
                    ${project.details.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="project-technologies">
                <h3>Technologies Used</h3>
                <div class="tech-tags">
                    ${project.details.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-modal-links">
                <a href="${project.demoUrl}" class="btn btn-primary" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    View Live Demo
                </a>
                <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank">
                    <i class="fab fa-github"></i>
                    View Source Code
                </a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<div class="loading"></div> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.timeline-item, .skill-item, .project-card').forEach(el => {
        observer.observe(el);
    });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            }
        }
    });
}

// Resume Download
function setupResumeDownload() {
    const downloadBtn = document.getElementById('downloadResume');
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Create a simple resume content
        const resumeContent = `
AG ABDSAMAD
Creative Frontend Developer

Email: agdidabdsamad@gmail.com
Instagram: @ag.abdsamad

SKILLS:
- HTML5 & CSS3
- JavaScript (ES6+)
- Responsive Design
- Git & Version Control
- UI/UX Design Principles

PROJECTS:
- Single Page CV
- Personal Portfolio
- Weather Web App
- Task Tracker
- Quiz Application
- And more...

EXPERIENCE:
Frontend Developer (2022 - Present)
- Building modern web applications
- Creating responsive user interfaces
- Implementing interactive features

EDUCATION:
Self-taught developer with continuous learning mindset
        `;
        
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'AG_Abdsamad_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// Easter Egg - Konami Code
function setupEasterEgg() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    let userInput = [];
    
    document.addEventListener('keydown', (e) => {
        userInput.push(e.code);
        userInput = userInput.slice(-konamiCode.length);
        
        if (userInput.join(',') === konamiCode.join(',')) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
                alert('🎉 Easter egg found! You discovered the Konami Code!');
            }, 2000);
        }
    });
}

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load theme first
    loadTheme();
    
    // Initialize components
    updateGreeting();
    typeWriter();
    initParticles();
    renderProjects(projects);
    setupSmoothScrolling();
    setupScrollAnimations();
    setupNavbarScroll();
    setupResumeDownload();
    setupEasterEgg();
    
    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    hamburger.addEventListener('click', toggleMobileMenu);
    contactForm.addEventListener('submit', handleContactForm);
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterProjects(btn.dataset.filter);
        });
    });
    
    // Modal events
    modalClose.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
    
    // Update greeting every minute
    setInterval(updateGreeting, 60000);
});

// Add some additional CSS for modal content
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .project-modal-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .project-modal-icon {
        font-size: 3rem;
    }
    
    .project-modal-content h3 {
        margin-bottom: 1rem;
        color: var(--accent-primary);
    }
    
    .project-overview,
    .project-features,
    .project-technologies {
        margin-bottom: 2rem;
    }
    
    .project-features ul {
        list-style: none;
        padding-left: 0;
    }
    
    .project-features li {
        padding: 0.5rem 0;
        position: relative;
        padding-left: 1.5rem;
    }
    
    .project-features li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--accent-primary);
        font-weight: bold;
    }
    
    .tech-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    
    .tech-tag {
        padding: 0.25rem 0.75rem;
        background: var(--accent-gradient);
        color: white;
        border-radius: 1rem;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .project-modal-links {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        flex-wrap: wrap;
    }
`;
document.head.appendChild(modalStyles);

