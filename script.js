/*
 * NEURIFY - Modern JavaScript
 * Enhanced with ES6+, carousel functionality, and modern patterns
 */

// ========================================
// CONFIGURATION & STATE
// ========================================

const CONFIG = {
    language: {
        current: 'pt',
        available: ['pt', 'en']
    },
    carousel: {
        autoplayInterval: 5000,
        transitionDuration: 800,
        totalSlides: 6
    },
    animation: {
        observerThreshold: 0.1,
        observerRootMargin: '0px 0px -50px 0px',
        scrollOffset: 100
    },
    form: {
        submitDelay: 2000,
        resetDelay: 5000
    }
};


// ========================================
// AUTO TRANSLATION DICTIONARIES
// ========================================

/**
 * These dictionaries complement the data-pt / data-en attributes.
 * They are used for simple text-only elements that don't have explicit
 * translation attributes in the HTML.
 */

const AUTO_TRANSLATIONS = {
    // Generic navigation & sections
    "Início": "Home",
    "Sobre": "About",
    "Sobre Nós": "About Us",
    "Serviços": "Services",
    "Portfólio": "Portfolio",
    "Contato": "Contact",
    "Trabalhe Conosco": "Careers",
    "Nossos Serviços": "Our Services",
    "Nossos Pilares": "Our Pillars",
    "Nossa História": "Our History",
    "Nossa Missão": "Our Mission",
    "Nossa Visão": "Our Vision",
    "Nossos Valores": "Our Values",

    // Botões / CTAs comuns
    "Saiba Mais": "Learn More",
    "Ver Mais": "See More",
    "Ver detalhes": "View details",
    "Ver Caso de Sucesso": "View Case Study",
    "Ver casos de sucesso": "View case studies",
    "Ver Todos os Serviços": "View All Services",
    "Solicitar Orçamento": "Request a Quote",
    "Solicitar Proposta": "Request a Proposal",
    "Solicitar Consultoria": "Request a Consultation",
    "Solicitar Consultoria Gratuita": "Request a Free Consultation",
    "Conversar no WhatsApp": "Chat on WhatsApp",
    "Enviar Mensagem": "Send Message",
    "Enviar": "Send",
    "Voltar": "Back",

    // Formulários
    "Nome": "Name",
    "Seu nome": "Your name",
    "E-mail": "Email",
    "Seu e-mail": "Your email",
    "Telefone": "Phone",
    "Seu telefone": "Your phone number",
    "Assunto": "Subject",
    "Mensagem": "Message",
    "Sua mensagem": "Your message",
    "Selecione uma opção": "Select an option",

    // Seções de destaque / chamadas
    "Pronto para inovar?": "Ready to innovate?",
    "Pronto para Transformar Seu Negócio?": "Ready to Transform Your Business?",
    "Pronto para transformar suas ideias em realidade?": "Ready to turn your ideas into reality?",
    "Fale agora com nossa equipe": "Talk to Our Team Now",

    // Serviços (títulos gerais)
    "Web Design": "Web Design",
    "Desenvolvimento Web": "Web Development",
    "Desenvolvimento & T.I": "Development & IT",
    "Desenvolvimento Sob Medida": "Custom Development",
    "Programação Personalizada": "Custom Programming",
    "Gestão Financeira": "Financial Management",
    "Gestão Empresarial": "Business Management",
    "RH & Administração": "HR & Administration",
    "Gestão de Pessoas": "People Management",
    "Consultoria Empresarial": "Business Consulting",

    // Pequenas frases recorrentes
    "Ver portfólio completo": "View full portfolio",
    "Veja mais projetos": "See more projects",
    "Fale com nossos especialistas": "Talk to our experts",
    "Entre em contato": "Get in touch",
    "Entre em contato conosco": "Get in touch with us",
    "Saiba como podemos ajudar": "See how we can help",
    "Conheça nossos serviços": "Discover our services",
    "Conheça mais sobre nós": "Learn more about us",


    // === Auto-added detailed content translations ===
    "Descoberta e Planejamento": "Discovery & Planning",
    "Design e Prototipagem": "Design & Prototyping",
    "Desenvolvimento e Testes": "Development & Testing",
    "Lançamento e Suporte": "Launch & Support",
    "Entendimento profundo das suas necessidades, definição de escopo e planejamento estratégico do projeto.": "Deep understanding of your needs, clear scope definition, and strategic project planning.",
    "Criação da arquitetura, design de interface (UI/UX) e protótipos interativos para validação.": "Architecture design, UI/UX interface design, and interactive prototypes for validation.",
    "Codificação, implementação das funcionalidades e testes rigorosos para garantir a qualidade e performance.": "Coding, implementation of features, and rigorous testing to ensure quality and performance.",
    "Implantação final, lançamento ao público e suporte contínuo para manutenção e novas funcionalidades.": "Final deployment, public launch, and ongoing support for maintenance and new features.",
    "Conheça alguns dos projetos que transformaram negócios e geraram resultados reais para nossos clientes.": "Discover some of the projects that transformed businesses and generated real results for our clients.",
    "E-commerce de Moda": "Fashion E-commerce",
    "Plataforma de vendas online com integração de pagamento e gestão de estoque. Resultado: 250% aumento de vendas.": "Online sales platform with payment integration and inventory management. Result: 250% increase in sales.",
    "Sistema de Gestão RH": "HR Management System",
    "Plataforma completa de gestão de recursos humanos. Resultado: 80% redução de tempo administrativo.": "Complete human resources management platform. Result: 80% reduction in administrative time.",
    "Site Corporativo Moderno": "Modern Corporate Website",
    "Redesign completo com foco em conversão. Resultado: 150% aumento de tráfego.": "Complete redesign focused on conversion. Result: 150% increase in traffic.",
    "Ver Caso de Sucesso": "View Case Study",
    "Veja o que alguns de nossos clientes dizem sobre a NEURIFY e como ajudamos empresas que transformaram seus negócios com nossas soluções.": "See what some of our clients say about NEURIFY and how we helped companies transform their businesses with our solutions.",
    "\"A NEURIFY transformou completamente nossa presença digital. O resultado foi imediato e os retornos superaram nossas expectativas.\"": "\"NEURIFY completely transformed our digital presence. The results were immediate and the returns exceeded our expectations.\"",
    "\"Profissionalismo, dedicação e resultados. A NEURIFY entregou exatamente o que promete. Recomendo!\"": "\"Professionalism, dedication, and results. NEURIFY delivered exactly what it promised. I recommend them!\"",
    "\"Equipe altamente qualificada, comunicação clara e entrega dentro do prazo. Parceria perfeita para nosso crescimento.\"": "\"Highly qualified team, clear communication, and on-time delivery. The perfect partner for our growth.\"",
    "CEO, Empresa de Moda": "CEO, Fashion Company",
    "Diretora, Consultoria Empresarial": "Director, Business Consulting",
    "Fundador, Startup de Tecnologia": "Founder, Tech Startup",
    "Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos.": "Find answers to the most common questions about our services and processes.",
    "Qual é o tempo de desenvolvimento de um projeto?": "What is the development time for a project?",
    "Vocês oferecem suporte pós-projeto?": "Do you offer post-project support?",
    "Como funciona o processo de desenvolvimento?": "How does the development process work?",
    "Qual é o valor mínimo para um projeto?": "What is the minimum budget for a project?",
    "O tempo varia conforme a complexidade do projeto. Projetos simples podem levar algumas semanas, enquanto soluções mais completas podem levar alguns meses. Durante nossa reunião, faremos uma estimação precisa baseada em seus requisitos.": "The time varies according to the complexity of the project. Simple projects can take a few weeks, while more complete solutions may take several months. During our meeting, we will provide an accurate estimate based on your requirements.",
    "Sim! Oferecemos planos de suporte e manutenção após a entrega do projeto. Podemos acompanhar atualizações, correções de erros e melhorias contínuas. Durante o orçamento, discutiremos as melhores opções para sua situação.": "Yes! We offer support and maintenance plans after project delivery. We can handle updates, bug fixes, and continuous improvements. During the proposal phase we will discuss the best options for your situation.",
    "Utilizamos metodologias ágeis (Scrum) ou tradicionais (Waterfall), dependendo do tipo de projeto. Sempre buscamos uma abordagem colaborativa, com comunicação constante, alinhamento de expectativas e transparência em cada etapa.": "We use agile methodologies (Scrum) or traditional ones (Waterfall), depending on the type of project. We always pursue a collaborative approach, with constant communication, expectation alignment, and transparency at every stage.",
    "Não temos um valor mínimo fixo. Trabalhamos com projetos de diferentes portes e necessidades. Entre em contato conosco sobre suas necessidades e encontraremos a melhor solução.": "We do not have a fixed minimum budget. We work with projects of different sizes and needs. Get in touch with your requirements and we will find the best solution for you.",
};

const AUTO_PLACEHOLDER_TRANSLATIONS = {
    "Seu nome": "Your name",
    "Seu e-mail": "Your email",
    "Seu telefone": "Your phone number",
    "Assunto": "Subject",
    "Sua mensagem": "Your message",
    "Mensagem": "Message"
};




// ========================================
// CAROUSEL SYSTEM
// ========================================

class CarouselManager {
    constructor() {
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.isTransitioning = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startAutoplay();
    }

    setupEventListeners() {
        // Pause autoplay on hover
        const carousel = document.querySelector('.carousel-container');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.stopAutoplay());
            carousel.addEventListener('mouseleave', () => this.startAutoplay());
        }
    }

    changeSlide(direction) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicator');
        
        // Remove active class
        slides[this.currentSlide].classList.remove('active');
        indicators[this.currentSlide].classList.remove('active');
        
        // Update current slide
        this.currentSlide += direction;
        
        // Wrap around
        if (this.currentSlide >= CONFIG.carousel.totalSlides) {
            this.currentSlide = 0;
        } else if (this.currentSlide < 0) {
            this.currentSlide = CONFIG.carousel.totalSlides - 1;
        }
        
        // Add active class
        slides[this.currentSlide].classList.add('active');
        indicators[this.currentSlide].classList.add('active');
        
        // Reset transition flag
        setTimeout(() => {
            this.isTransitioning = false;
        }, CONFIG.carousel.transitionDuration);
    }

    goToSlide(index) {
        if (this.isTransitioning || index === this.currentSlide) return;
        
        const direction = index > this.currentSlide ? 1 : -1;
        const difference = Math.abs(index - this.currentSlide);
        
        for (let i = 0; i < difference; i++) {
            this.changeSlide(direction);
        }
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.changeSlide(1);
        }, CONFIG.carousel.autoplayInterval);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// ========================================
// LANGUAGE SYSTEM
// ========================================

class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || CONFIG.language.current;
        this.init();
    }

    init() {
        this.updateLanguage();
    }

    toggle() {
        this.currentLanguage = this.currentLanguage === 'pt' ? 'en' : 'pt';
        this.updateLanguage();
        this.savePreference();
    }

    updateLanguage() {
        const elements = document.querySelectorAll('[data-pt][data-en]');
        
        elements.forEach(element => {
            const attr = element.getAttribute(`data-${this.currentLanguage}`);
            if (attr) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = attr;
                } else {
                    element.innerHTML = attr;
                }
            }
        });


        // Apply automatic translations for elements without data-pt/data-en
        this.applyAutoTranslations();
        this.applyPlaceholderTranslations();

        // Update language button
        const langBtn = document.getElementById('lang-text');
        if (langBtn) {
            langBtn.textContent = this.currentLanguage.toUpperCase();
        }
    }


    applyAutoTranslations() {
        // Translate simple text-only elements based on a dictionary,
        // without requiring data-pt / data-en in the HTML.
        const isEnglish = this.currentLanguage === 'en';

        const elements = document.querySelectorAll('body *');

        elements.forEach(element => {
            // Ignore elements that already use the attribute-based system
            if (element.hasAttribute('data-pt') && element.hasAttribute('data-en')) {
                return;
            }

            // Only apply to leaf nodes with plain text (no inner HTML tags)
            if (element.children.length > 0) return;

            const text = element.textContent.trim();
            if (!text) return;

            // Store original text once so we can restore when back to PT
            if (!element.dataset.autoOriginal) {
                element.dataset.autoOriginal = text;
            }

            if (isEnglish) {
                const translated = AUTO_TRANSLATIONS[text];
                if (translated) {
                    element.textContent = translated;
                }
            } else {
                // Restore original Portuguese when toggling back
                if (element.dataset.autoOriginal) {
                    element.textContent = element.dataset.autoOriginal;
                }
            }
        });
    }

    applyPlaceholderTranslations() {
        const isEnglish = this.currentLanguage === 'en';
        const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');

        inputs.forEach(input => {
            const currentPlaceholder = input.placeholder.trim();
            if (!currentPlaceholder) return;

            if (!input.dataset.autoPlaceholderOriginal) {
                input.dataset.autoPlaceholderOriginal = currentPlaceholder;
            }

            if (isEnglish) {
                const translated = AUTO_PLACEHOLDER_TRANSLATIONS[currentPlaceholder];
                if (translated) {
                    input.placeholder = translated;
                }
            } else {
                if (input.dataset.autoPlaceholderOriginal) {
                    input.placeholder = input.dataset.autoPlaceholderOriginal;
                }
            }
        });
    }

    savePreference() {
        localStorage.setItem('language', this.currentLanguage);
    }
}

// ========================================
// SERVICES TABS SYSTEM
// ========================================

class ServicesTabsManager {
    constructor() {
        this.tabsList = document.querySelector('.services-tabs-list');
        this.tabs = document.querySelectorAll('.service-tab');
        this.panes = document.querySelectorAll('.tab-pane');
        this.init();
    }

    init() {
        if (!this.tabsList) return;

        this.tabsList.addEventListener('click', this.handleTabClick.bind(this));
        this.ensureActiveTab();
    }

    handleTabClick(e) {
        const tabButton = e.target.closest('.service-tab');
        if (!tabButton || tabButton.classList.contains('active')) return;

        const targetId = tabButton.getAttribute('aria-controls');
        const targetPane = document.getElementById(targetId);

        // Deactivate all
        this.tabs.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        this.panes.forEach(pane => {
            pane.classList.remove('active');
        });

        // Activate selected
        tabButton.classList.add('active');
        tabButton.setAttribute('aria-selected', 'true');
        if (targetPane) {
            targetPane.classList.add('active');
        }
    }

    ensureActiveTab() {
        if (!document.querySelector('.service-tab.active') && this.tabs.length > 0) {
            this.tabs[0].classList.add('active');
            this.tabs[0].setAttribute('aria-selected', 'true');
            const firstPaneId = this.tabs[0].getAttribute('aria-controls');
            const firstPane = document.getElementById(firstPaneId);
            if (firstPane) firstPane.classList.add('active');
        }
    }
}

// ========================================
// MOBILE MENU SYSTEM
// ========================================

class MobileMenuManager {
    constructor() {
        this.menuBtn = document.querySelector('.mobile-menu-btn');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.isOpen = false;
        this.init();
    }

    init() {
        if (this.menuBtn) {
            this.menuBtn.addEventListener('click', () => this.toggle());
        }

        // Close menu when clicking on a link
        const menuLinks = this.mobileMenu?.querySelectorAll('a');
        menuLinks?.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header') && this.isOpen) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.isOpen = true;
        this.menuBtn?.classList.add('active');
        this.mobileMenu?.classList.add('active');
    }

    close() {
        this.isOpen = false;
        this.menuBtn?.classList.remove('active');
        this.mobileMenu?.classList.remove('active');
    }
}

// ========================================
// FORM SYSTEM
// ========================================

class FormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.successMessage = document.getElementById('successMessage');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // Simulate form submission
        this.form.style.display = 'none';
        this.successMessage.style.display = 'flex';

        // Reset form after delay
        setTimeout(() => {
            this.form.reset();
            this.form.style.display = 'block';
            this.successMessage.style.display = 'none';
        }, CONFIG.form.resetDelay);
    }
}

// ========================================
// SCROLL ANIMATION SYSTEM
// ========================================

class ScrollAnimationManager {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        const options = {
            threshold: CONFIG.animation.observerThreshold,
            rootMargin: CONFIG.animation.observerRootMargin
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe all animatable elements
        document.querySelectorAll('.service-card, .mvv-card, .feature-item').forEach(el => {
            this.observer.observe(el);
        });
    }
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

class HeaderScrollManager {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > CONFIG.animation.scrollOffset) {
                this.header?.classList.add('scrolled');
            } else {
                this.header?.classList.remove('scrolled');
            }
        });
    }
}

// ========================================
// GLOBAL FUNCTIONS (for HTML onclick handlers)
// ========================================

let carouselManager;
let languageManager;
let mobileMenuManager;

function changeSlide(direction) {
    if (carouselManager) {
        carouselManager.changeSlide(direction);
    }
}

function goToSlide(index) {
    if (carouselManager) {
        carouselManager.goToSlide(index);
    }
}

function toggleLanguage() {
    if (languageManager) {
        languageManager.toggle();
    }
}

function toggleMobileMenu() {
    if (mobileMenuManager) {
        mobileMenuManager.toggle();
    }
}

function closeMobileMenu() {
    if (mobileMenuManager) {
        mobileMenuManager.close();
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    //carouselManager = new CarouselManager(); // desativado: banner estático
    languageManager = new LanguageManager();
    mobileMenuManager = new MobileMenuManager();
    new ServicesTabsManager(); // Novo: Gerenciador de Tabs de Serviços
    new FormManager();
    new ScrollAnimationManager();
    new HeaderScrollManager();

    console.log('NEURIFY - All systems initialized');
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .service-card,
    .mvv-card,
    .feature-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all var(--transition-base);
    }

    .service-card.animate-in,
    .mvv-card.animate-in,
    .feature-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .header.scrolled {
        box-shadow: var(--shadow-lg);
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
    }

    .mobile-menu {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: var(--white);
        flex-direction: column;
        padding: var(--space-6);
        gap: var(--space-4);
        max-height: 0;
        overflow: hidden;
        transition: max-height var(--transition-base);
        z-index: 999;
        box-shadow: var(--shadow-lg);
    }

    .mobile-menu.active {
        max-height: 400px;
    }

    .mobile-menu a {
        padding: var(--space-3) var(--space-4);
        color: var(--gray-700);
        text-decoration: none;
        font-weight: 500;
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
    }

    .mobile-menu a:hover {
        background: var(--gray-100);
        color: var(--primary);
    }

    .mobile-menu .cta-btn {
        margin-top: var(--space-4);
    }
`;
document.head.appendChild(style);

