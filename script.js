/*
 * AyitiCaney - Premium House Rental Platform
 * Main Stylesheet
 * Save as: rental/static/rental/css/styles.css
 */

/* ============================================
   ROOT VARIABLES - Modern Premium Colors
   ============================================ */
:root {
    /* Primary Colors - Sophisticated Blues */
    --primary-navy: #1e3a5f;
    --primary-blue: #2563eb;
    --secondary-blue: #3b82f6;
    --light-blue: #dbeafe;
    
    /* Accent Colors - Warm & Inviting */
    --accent-coral: #ef6144;
    --accent-orange: #fb923c;
    --accent-green: #10b981;
    --accent-gold: #f59e0b;
    
    /* Neutrals - Clean & Professional */
    --white: #ffffff;
    --light-gray: #f8fafc;
    --medium-gray: #e2e8f0;
    --dark-gray: #334155;
    --text-gray: #64748b;
    --black: #0f172a;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    
    /* Border Radius */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    
    /* Transitions */
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ============================================
   GLOBAL STYLES
   ============================================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--dark-gray);
    background-color: var(--white);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--black);
}

h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
h2 { font-size: clamp(2rem, 4vw, 3rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }

p {
    color: var(--text-gray);
    line-height: 1.8;
}

a {
    text-decoration: none;
    transition: var(--transition);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ============================================
   NAVIGATION - Premium Style
   ============================================ */
.navbar-custom {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1.5rem 0;
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid var(--medium-gray);
}

.navbar-custom .navbar-brand {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--primary-navy) !important;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition);
}

.navbar-custom .navbar-brand:hover {
    color: var(--primary-blue) !important;
    transform: translateY(-2px);
}

.navbar-custom .navbar-brand i {
    font-size: 2rem;
    color: var(--accent-coral);
}

.navbar-custom .nav-link {
    color: var(--dark-gray) !important;
    font-weight: 500;
    margin: 0 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-sm);
    transition: var(--transition);
}

.navbar-custom .nav-link:hover {
    color: var(--primary-blue) !important;
    background: var(--light-blue);
    transform: translateY(-2px);
}

.navbar-custom .nav-link.active {
    color: var(--primary-blue) !important;
    background: var(--light-blue);
}

/* Language Switcher */
.language-switcher {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--light-gray);
    padding: 0.25rem;
    border-radius: var(--radius-sm);
}

.language-switcher button {
    background: transparent;
    border: none;
    color: var(--dark-gray);
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius-sm);
    cursor: pointer;
    font-weight: 500;
    transition: var(--transition);
}

.language-switcher button:hover {
    background: var(--medium-gray);
    color: var(--primary-blue);
}

.language-switcher button.active {
    background: var(--primary-blue);
    color: var(--white);
}

/* ============================================
   HERO SECTION - Stunning Visual
   ============================================ */
.hero-section {
    position: relative;
    min-height: 85vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-blue) 100%);
    padding: 4rem 0;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></svg>');
    opacity: 0.3;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero-section h1 {
    color: var(--white);
    font-weight: 800;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-section .lead {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.25rem;
    max-width: 600px;
    margin-bottom: 2rem;
    line-height: 1.8;
}

.hero-tagline {
    color: var(--accent-coral);
    font-size: 1.125rem;
    font-weight: 600;
    font-style: italic;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Search Box in Hero */
.hero-search-box {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 2.5rem;
    box-shadow: var(--shadow-xl);
    backdrop-filter: blur(10px);
}

.hero-search-box h4 {
    color: var(--primary-navy);
    margin-bottom: 1.5rem;
    font-weight: 700;
}

/* ============================================
   BUTTONS - Premium Style
   ============================================ */
.btn {
    padding: 0.75rem 1.75rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: var(--transition);
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.btn-primary {
    background: var(--primary-blue);
    color: var(--white);
    box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
}

.btn-primary:hover {
    background: var(--primary-navy);
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(37, 99, 235, 0.3);
}

.btn-coral {
    background: var(--accent-coral);
    color: var(--white);
    box-shadow: 0 4px 6px rgba(239, 97, 68, 0.2);
}

.btn-coral:hover {
    background: #d95538;
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(239, 97, 68, 0.3);
}

.btn-outline-primary {
    background: transparent;
    border: 2px solid var(--primary-blue);
    color: var(--primary-blue);
}

.btn-outline-primary:hover {
    background: var(--primary-blue);
    color: var(--white);
}

.btn-light {
    background: var(--white);
    color: var(--primary-blue);
    box-shadow: var(--shadow-md);
}

.btn-light:hover {
    background: var(--light-blue);
    transform: translateY(-2px);
}

.btn-lg {
    padding: 1rem 2.5rem;
    font-size: 1.125rem;
}

/* ============================================
   FORM CONTROLS - Modern & Clean
   ============================================ */
.form-control,
.form-select {
    padding: 0.875rem 1.25rem;
    border: 2px solid var(--medium-gray);
    border-radius: var(--radius-md);
    font-size: 1rem;
    transition: var(--transition);
    background: var(--white);
}

.form-control:focus,
.form-select:focus {
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    outline: none;
}

.form-label {
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 0.5rem;
}

/* ============================================
   STATS SECTION
   ============================================ */
.stats-section {
    background: var(--light-gray);
    padding: 4rem 0;
    margin-top: -3rem;
    position: relative;
    z-index: 10;
}

.stats-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 2.5rem 2rem;
    text-align: center;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    border: 1px solid var(--medium-gray);
}

.stats-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
}

.stats-number {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary-blue), var(--accent-coral));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.stats-label {
    color: var(--text-gray);
    font-weight: 500;
    font-size: 1.125rem;
}

/* ============================================
   PROPERTY CARDS - Premium Design
   ============================================ */
.property-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: var(--transition);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--medium-gray);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.property-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

.property-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: var(--transition);
}

.property-card:hover img {
    transform: scale(1.05);
}

.property-card .card-body {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.property-card .card-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 0.75rem;
}

.property-card .price {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--primary-blue);
    margin: 1rem 0;
}

.property-card .price small {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-gray);
}

/* Property Badges */
.property-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.375rem 0.875rem;
    border-radius: var(--radius-sm);
    font-size: 0.875rem;
    font-weight: 600;
}

.badge-primary {
    background: var(--light-blue);
    color: var(--primary-blue);
}

.badge-verified {
    background: rgba(16, 185, 129, 0.1);
    color: var(--accent-green);
}

.badge-featured {
    background: rgba(245, 158, 11, 0.1);
    color: var(--accent-gold);
}

/* ============================================
   FEATURE CARDS - Why Choose Section
   ============================================ */
.feature-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 2.5rem 2rem;
    text-align: center;
    transition: var(--transition);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--medium-gray);
    height: 100%;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-blue);
}

.feature-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--light-blue), var(--medium-gray));
    border-radius: var(--radius-lg);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    transition: var(--transition);
}

.feature-card:hover .feature-icon {
    background: linear-gradient(135deg, var(--primary-blue), var(--accent-coral));
    transform: scale(1.1);
}

.feature-icon i {
    font-size: 2rem;
    color: var(--primary-blue);
    transition: var(--transition);
}

.feature-card:hover .feature-icon i {
    color: var(--white);
}

.feature-card h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 1rem;
}

.feature-card p {
    color: var(--text-gray);
    line-height: 1.7;
}

/* ============================================
   SECTION HEADERS
   ============================================ */
.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-tagline {
    color: var(--accent-coral);
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: var(--black);
    margin-bottom: 1rem;
}

.section-subtitle {
    color: var(--text-gray);
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
}

/* ============================================
   CTA SECTIONS
   ============================================ */
.cta-section {
    background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-blue) 100%);
    border-radius: var(--radius-xl);
    padding: 4rem 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></svg>');
    opacity: 0.3;
}

.cta-section h2 {
    color: var(--white);
    font-weight: 800;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
}

.cta-section p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.25rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
}

/* ============================================
   ALERTS & NOTIFICATIONS
   ============================================ */
.alert {
    border-radius: var(--radius-md);
    padding: 1.25rem 1.5rem;
    border: none;
    box-shadow: var(--shadow-sm);
    margin-bottom: 1.5rem;
}

.alert-success {
    background: rgba(16, 185, 129, 0.1);
    color: #065f46;
    border-left: 4px solid var(--accent-green);
}

.alert-warning {
    background: rgba(245, 158, 11, 0.1);
    color: #92400e;
    border-left: 4px solid var(--accent-gold);
}

.alert-danger {
    background: rgba(239, 68, 68, 0.1);
    color: #991b1b;
    border-left: 4px solid #ef4444;
}

.alert-info {
    background: rgba(37, 99, 235, 0.1);
    color: #1e3a8a;
    border-left: 4px solid var(--primary-blue);
}

/* ============================================
   FOOTER - Professional
   ============================================ */
footer {
    background: var(--primary-navy);
    color: rgba(255, 255, 255, 0.9);
    padding: 4rem 0 2rem;
    margin-top: 6rem;
}

footer h5 {
    color: var(--white);
    font-weight: 700;
    margin-bottom: 1.5rem;
}

footer a {
    color: rgba(255, 255, 255, 0.7);
    transition: var(--transition);
    display: inline-block;
    margin-bottom: 0.5rem;
}

footer a:hover {
    color: var(--white);
    transform: translateX(5px);
}

.social-links a {
    width: 45px;
    height: 45px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    transition: var(--transition);
    margin-right: 0.75rem;
}

.social-links a:hover {
    background: var(--accent-coral);
    transform: translateY(-3px);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */
@media (max-width: 992px) {
    .hero-section {
        min-height: auto;
        padding: 3rem 0;
    }
    
    .stats-number {
        font-size: 2.5rem;
    }
    
    .feature-icon {
        width: 70px;
        height: 70px;
    }
}

@media (max-width: 768px) {
    .navbar-custom .nav-link {
        margin: 0.25rem 0;
    }
    
    .hero-search-box {
        padding: 1.5rem;
    }
    
    .stats-section {
        margin-top: 2rem;
    }
    
    .section-header {
        margin-bottom: 2rem;
    }
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}

/* ============================================
   UTILITY CLASSES
   ============================================ */
.text-gradient {
    background: linear-gradient(135deg, var(--primary-blue), var(--accent-coral));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.bg-light-blue {
    background-color: var(--light-blue);
}

.bg-light-gray {
    background-color: var(--light-gray);
}

.shadow-custom {
    box-shadow: var(--shadow-xl);
}

.hover-lift {
    transition: var(--transition);
}

.hover-lift:hover {
    transform: translateY(-5px);
}

/* ============================================
   LOADING SPINNER
   ============================================ */
.spinner {
    border: 3px solid var(--light-gray);
    border-top: 3px solid var(--primary-blue);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 2rem auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
