// 平滑滚动导航
document.addEventListener('DOMContentLoaded', function() {
    // 导航链接平滑滚动
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // 考虑导航栏高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 懒加载动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('loading');
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // 为卡片添加懒加载效果
    const cards = document.querySelectorAll('.value-card, .rule-card');
    cards.forEach((card, index) => {
        card.classList.add('loading');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // 为其他元素添加懒加载效果
    const sections = document.querySelectorAll('.section-title, .founder-text, .philosophy-text, .wisdom-text');
    sections.forEach(section => {
        section.classList.add('loading');
        observer.observe(section);
    });
    
    // 添加数字计数效果
    const numbers = document.querySelectorAll('.rule-number');
    numbers.forEach(number => {
        observer.observe(number);
    });
    
    // 移动端菜单处理
    const createMobileMenu = () => {
        const navbar = document.querySelector('.navbar');
        const navMenu = document.querySelector('.nav-menu');
        
        // 创建移动端菜单按钮
        const menuToggle = document.createElement('button');
        menuToggle.classList.add('mobile-menu-toggle');
        menuToggle.innerHTML = '☰';
        menuToggle.style.cssText = `
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--dark-color);
            cursor: pointer;
            @media (max-width: 768px) {
                display: block;
            }
        `;
        
        navbar.querySelector('.nav-container').appendChild(menuToggle);
        
        // 移动端菜单切换
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-menu-active');
            
            if (navMenu.classList.contains('mobile-menu-active')) {
                navMenu.style.cssText = `
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(10px);
                    padding: 1rem;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                `;
                menuToggle.innerHTML = '✕';
            } else {
                navMenu.style.display = 'none';
                menuToggle.innerHTML = '☰';
            }
        });
        
        // 点击菜单项后关闭移动端菜单
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('mobile-menu-active');
                navMenu.style.display = 'none';
                menuToggle.innerHTML = '☰';
            });
        });
    };
    
    // 检查是否为移动设备
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
    
    // 窗口大小改变时重新检查
    window.addEventListener('resize', function() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth <= 768 && !mobileToggle) {
            createMobileMenu();
        } else if (window.innerWidth > 768 && mobileToggle) {
            mobileToggle.remove();
            document.querySelector('.nav-menu').style.display = 'flex';
        }
    });
    
    // 返回顶部按钮
    const createBackToTop = () => {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '↑';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        `;
        
        document.body.appendChild(backToTop);
        
        // 滚动显示/隐藏返回顶部按钮
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.transform = 'translateY(0)';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.transform = 'translateY(20px)';
            }
        });
        
        // 点击返回顶部
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 悬停效果
        backToTop.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.background = 'var(--secondary-color)';
        });
        
        backToTop.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'var(--primary-color)';
        });
    };
    
    createBackToTop();
    
    // 添加页面加载完成后的淡入效果
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        
        // 添加加载完成后的动画效果
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-values');
            heroElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.animation = `fadeInUp 0.8s ease-out forwards`;
                }, index * 200);
            });
        }, 300);
    });
    
    // 添加鼠标跟随效果（可选）
    const addMouseFollower = () => {
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--primary-color);
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.1s ease;
        `;
        
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.opacity = '0.5';
        });
        
        document.addEventListener('mouseenter', function() {
            cursor.style.opacity = '0.5';
        });
        
        document.addEventListener('mouseleave', function() {
            cursor.style.opacity = '0';
        });
    };
    
    // 为卡片添加点击涟漪效果
    const addRippleEffect = () => {
        const cards = document.querySelectorAll('.value-card, .rule-card');
        
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                    background: rgba(37, 99, 235, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                    left: ${e.clientX - rect.left - size/2}px;
                    top: ${e.clientY - rect.top - size/2}px;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    };
    
    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .mobile-menu-toggle {
            display: none;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block !important;
            }
            
            .nav-menu {
                display: none;
            }
        }
    `;
    
    document.head.appendChild(style);
    
    // 初始化涟漪效果
    addRippleEffect();
    
    // 添加平滑的页面过渡效果
    const addPageTransitions = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    
    addPageTransitions();
    
    // 添加视差效果
    const addParallaxEffect = () => {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    };
    
    // 检查是否支持视差效果
    if (window.innerWidth > 768) {
        addParallaxEffect();
    }
    
    console.log('货代群网站已加载完成！现代化设计已启用。');
}); 