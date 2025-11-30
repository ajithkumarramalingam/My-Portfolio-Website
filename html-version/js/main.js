// Portfolio JavaScript - All functionality

// Navbar scroll effect with null check
let isScrolled = false;
const navbar = document.getElementById('navbar');

if (navbar) {
  const handleScroll = debounce(() => {
    isScrolled = window.scrollY > 50;
    if (isScrolled) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 10);

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Initial check
  handleScroll();
}

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
let isMobileMenuOpen = false;

if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
      if (mobileMenu) mobileMenu.classList.add('open');
      if (mobileMenuButton) mobileMenuButton.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      if (mobileMenu) mobileMenu.classList.remove('open');
      if (mobileMenuButton) mobileMenuButton.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Close mobile menu when clicking on a link
  if (mobileMenu) {
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        isMobileMenuOpen = false;
        if (mobileMenu) mobileMenu.classList.remove('open');
        if (mobileMenuButton) mobileMenuButton.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

// Active nav link highlighting based on scroll position
function updateActiveNavLink() {
  if (!navbar) return;
  
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const scrollPosition = window.scrollY + 150;

  sections.forEach(section => {
    try {
      const element = document.getElementById(section);
      const navLink = document.querySelector(`.nav-link-ultimate[data-nav="${section}"]`);
      
      if (element && navLink) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          document.querySelectorAll('.nav-link-ultimate').forEach(link => {
            if (link) link.classList.remove('active');
          });
          navLink.classList.add('active');
          navLink.setAttribute('aria-current', 'page');
        } else {
          navLink.removeAttribute('aria-current');
        }
      }
    } catch (error) {
      // Silently handle errors in production
      if (typeof console !== 'undefined' && console.warn) {
        console.warn(`Error updating nav link for ${section}:`, error);
      }
    }
  });
}

// Initial call
updateActiveNavLink();

// Smooth scroll to section with validation
function scrollToSection(href) {
  if (!href || typeof href !== 'string') {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('Invalid href provided to scrollToSection');
    }
    return;
  }

  // Validate href is a safe hash link
  if (!href.startsWith('#')) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('scrollToSection only accepts hash links');
    }
    return;
  }

  try {
    const element = document.querySelector(href);
    if (element) {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      });
      
      // Update URL without reload
      if (history && history.pushState) {
        history.pushState(null, null, href);
      }
      
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        isMobileMenuOpen = false;
        if (mobileMenu) mobileMenu.classList.remove('open');
        if (mobileMenuButton) mobileMenuButton.classList.remove('active');
        document.body.style.overflow = '';
      }
    } else {
      // Silently handle missing elements
      if (typeof console !== 'undefined' && console.warn) {
        console.warn(`Element not found for href: ${href}`);
      }
    }
  } catch (error) {
    // Silently handle errors in production
    if (typeof console !== 'undefined' && console.error) {
      console.error('Error scrolling to section:', error);
    }
  }
}

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add click handlers to all navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        scrollToSection(href);
      }
    });
  });

  // Hero section buttons
  const viewWorkBtn = document.getElementById('view-work-btn');
  if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', () => {
      scrollToSection('#projects');
    });
  }

  const scrollDownBtn = document.getElementById('scroll-down-btn');
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
      scrollToSection('#about');
    });
  }

  // Observe all skill badges and project cards for animations
  document.querySelectorAll('.skill-badge, .project-card').forEach(el => {
    if (el) {
      observer.observe(el);
    }
  });

  // Form input floating labels with better error handling
  document.querySelectorAll('.form-input').forEach(input => {
    if (!input) return;
    
    input.addEventListener('focus', () => {
      if (input.parentElement) {
        input.parentElement.classList.add('focused');
      }
    });

    input.addEventListener('blur', () => {
      if (input.parentElement && !input.value) {
        input.parentElement.classList.remove('focused');
      }
    });

    // Check if input has value on load
    if (input.value && input.parentElement) {
      input.parentElement.classList.add('focused');
    }

    // Real-time validation feedback
    input.addEventListener('input', () => {
      if (input.validity && !input.validity.valid && input.value) {
        input.setAttribute('aria-invalid', 'true');
      } else {
        input.removeAttribute('aria-invalid');
      }
    });
  });

  // Keyboard navigation for mobile menu
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenuButton.click();
      }
    });
  }

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      isMobileMenuOpen = false;
      if (mobileMenu) mobileMenu.classList.remove('open');
      if (mobileMenuButton) mobileMenuButton.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Debounced scroll handler for performance
const debouncedUpdateActiveNav = debounce(updateActiveNavLink, 100);
window.addEventListener('scroll', debouncedUpdateActiveNav);

// ============================================
// EMAIL CONFIGURATION - EASY SETUP
// ============================================
// 
// OPTION 1: FormSubmit (WORKS IMMEDIATELY - No signup needed!)
//   ✅ Already configured below - Just works!
//
// OPTION 2: Formspree (Better for production - requires signup)
//   STEP 1: Go to https://formspree.io/ and sign up (FREE)
//   STEP 2: Click "New Form" and create a form
//   STEP 3: Copy your Form ID from the URL (e.g., https://formspree.io/f/xrgkqjpn)
//   STEP 4: Replace 'YOUR_FORM_ID' below with your actual Form ID
//
// Example: const FORMPREE_FORM_ID = 'xrgkqjpn';
// ============================================

const FORMPREE_FORM_ID = 'YOUR_FORM_ID'; // Optional: Replace with your Formspree Form ID
const RECIPIENT_EMAIL = 'ajith.ak.official06@gmail.com'; // Your email to receive messages

// Email service selection: 'formsubmit' (works immediately) or 'formspree' (requires setup)
const EMAIL_SERVICE = 'formsubmit'; // Change to 'formspree' if you set up Formspree

// ============================================
// Contact Form Handling - Formspree Integration
// ============================================

const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');
const submitMessage = document.getElementById('submit-message');

// Check if Formspree is configured
const isFormspreeConfigured = EMAIL_SERVICE === 'formspree' && FORMPREE_FORM_ID && FORMPREE_FORM_ID !== 'YOUR_FORM_ID' && FORMPREE_FORM_ID.trim() !== '';
const useFormSubmit = EMAIL_SERVICE === 'formsubmit' || !isFormspreeConfigured;

if (contactForm) {
  // Set form action based on service
  if (isFormspreeConfigured) {
    contactForm.action = `https://formspree.io/f/${FORMPREE_FORM_ID}`;
  } else if (useFormSubmit) {
    // FormSubmit works immediately - no signup needed!
    contactForm.action = `https://formsubmit.co/${RECIPIENT_EMAIL}`;
  }

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (!nameInput || !emailInput || !messageInput) {
      showMessage('Form error: Please refresh the page and try again.', 'error');
      return;
    }
    
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };

    // Validation
    if (!validateForm(formData)) {
      return;
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message)
    };

    // Show loading state
    if (!submitButton) return;
    
    submitButton.disabled = true;
    // Store original button content safely (store children as array)
    const originalButtonChildren = Array.from(submitButton.childNodes).map(node => node.cloneNode(true));
    // Clear button content safely
    while (submitButton.firstChild) {
      submitButton.removeChild(submitButton.firstChild);
    }
    // Create loading state safely
    const loadingSpan = document.createElement('span');
    loadingSpan.className = 'flex items-center justify-center gap-2';
    
    const loadingText = document.createElement('span');
    loadingText.textContent = 'Sending...';
    
    const loadingSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    loadingSvg.setAttribute('class', 'animate-spin h-5 w-5');
    loadingSvg.setAttribute('fill', 'none');
    loadingSvg.setAttribute('viewBox', '0 0 24 24');
    loadingSvg.setAttribute('aria-hidden', 'true');
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('class', 'opacity-25');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '10');
    circle.setAttribute('stroke', 'currentColor');
    circle.setAttribute('stroke-width', '4');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'opacity-75');
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('d', 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z');
    
    loadingSvg.appendChild(circle);
    loadingSvg.appendChild(path);
    loadingSpan.appendChild(loadingText);
    loadingSpan.appendChild(loadingSvg);
    submitButton.appendChild(loadingSpan);

    // Update reply-to field
    const replyToField = document.getElementById('replyto');
    if (replyToField) {
      replyToField.value = sanitizedData.email;
    }

    // Send email using selected service
    if (isFormspreeConfigured) {
      // Use Formspree
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', sanitizedData.name);
        formDataToSend.append('email', sanitizedData.email);
        formDataToSend.append('message', sanitizedData.message);
        formDataToSend.append('_replyto', sanitizedData.email);
        formDataToSend.append('_subject', `Portfolio Contact: ${sanitizedData.name}`);
        
        if (RECIPIENT_EMAIL) {
          formDataToSend.append('_to', RECIPIENT_EMAIL);
        }

        const response = await fetch(`https://formspree.io/f/${FORMPREE_FORM_ID}`, {
          method: 'POST',
          body: formDataToSend,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showMessage('✅ Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');
          contactForm.reset();
          resetFormLabels();
          submitButton.disabled = false;
          // Restore button content safely
          while (submitButton.firstChild) {
            submitButton.removeChild(submitButton.firstChild);
          }
          originalButtonChildren.forEach(child => {
            submitButton.appendChild(child.cloneNode(true));
          });
        } else {
          let errorMessage = 'Failed to send message. ';
          try {
            const errorData = await response.json();
            if (errorData.error) {
              errorMessage += errorData.error;
            } else if (response.status === 429) {
              errorMessage += 'Too many requests. Please try again later.';
            } else if (response.status === 404) {
              errorMessage += 'Form not found. Please check your Form ID.';
            } else {
              errorMessage += `Error ${response.status}. Please try again.`;
            }
          } catch (parseError) {
            errorMessage += `Error ${response.status}. Please try again.`;
          }
          throw new Error(errorMessage);
        }
      } catch (error) {
        handleSubmissionError(error, submitButton, originalButtonChildren);
      }
    } else if (useFormSubmit) {
      // Use FormSubmit (works immediately - no signup needed!)
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', sanitizedData.name);
        formDataToSend.append('email', sanitizedData.email);
        formDataToSend.append('message', sanitizedData.message);
        formDataToSend.append('_subject', `Portfolio Contact Form: ${sanitizedData.name}`);
        formDataToSend.append('_captcha', 'false');
        formDataToSend.append('_template', 'box');
        formDataToSend.append('_autoresponse', `Thank you ${sanitizedData.name} for contacting me! I will get back to you soon.`);

        const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
          method: 'POST',
          body: formDataToSend,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            showMessage('✅ Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');
            contactForm.reset();
            resetFormLabels();
            submitButton.disabled = false;
            // Restore button content safely
            while (submitButton.firstChild) {
              submitButton.removeChild(submitButton.firstChild);
            }
            originalButtonChildren.forEach(child => {
              submitButton.appendChild(child.cloneNode(true));
            });
          } else {
            throw new Error(result.message || 'Failed to send message');
          }
        } else {
          throw new Error(`Server error: ${response.status}`);
        }
      } catch (error) {
        handleSubmissionError(error, submitButton, originalButtonChildren);
      }
    } else {
      // No email service configured
      const setupMessage = `⚠️ Email service not configured.\n\n` +
        `QUICK SETUP (2 minutes):\n` +
        `1. Visit: https://formspree.io/\n` +
        `2. Sign up (FREE) and create a form\n` +
        `3. Copy your Form ID from the URL\n` +
        `4. Open: js/main.js (line 279)\n` +
        `5. Replace 'YOUR_FORM_ID' with your Form ID\n\n` +
        `For now, contact me at: ${RECIPIENT_EMAIL}`;
      
      showMessage(setupMessage, 'error');
      submitButton.disabled = false;
      // Restore button content safely
      while (submitButton.firstChild) {
        submitButton.removeChild(submitButton.firstChild);
      }
      originalButtonChildren.forEach(child => {
        submitButton.appendChild(child.cloneNode(true));
      });
    }
  });
}

// Helper function to reset form labels
function resetFormLabels() {
  document.querySelectorAll('.form-input').forEach(input => {
    if (input.parentElement && !input.value) {
      input.parentElement.classList.remove('focused');
    }
  });
}

// Helper function to handle submission errors
function handleSubmissionError(error, submitButton, originalButtonChildren) {
  if (typeof console !== 'undefined' && console.error) {
    console.error('Form submission error:', error);
  }
  
  let errorMsg = 'Sorry, there was an error sending your message. ';
  if (error.message && error.message.includes('Failed to fetch')) {
    errorMsg += 'Please check your internet connection and try again.';
  } else if (error.message) {
    errorMsg += error.message;
  } else {
    errorMsg += 'Please try again later or contact me directly at ' + RECIPIENT_EMAIL;
  }
  
  showMessage(errorMsg, 'error');
  
  if (submitButton) {
    submitButton.disabled = false;
    // Clear button content safely
    while (submitButton.firstChild) {
      submitButton.removeChild(submitButton.firstChild);
    }
    
    if (originalButtonChildren && Array.isArray(originalButtonChildren)) {
      // Restore original content safely
      originalButtonChildren.forEach(child => {
        submitButton.appendChild(child.cloneNode(true));
      });
    } else {
      // Fallback button content - create safely
      const fallbackSpan = document.createElement('span');
      fallbackSpan.className = 'flex items-center justify-center gap-2';
      
      const fallbackText = document.createElement('span');
      fallbackText.textContent = 'Send Message';
      
      const fallbackSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      fallbackSvg.setAttribute('width', '20');
      fallbackSvg.setAttribute('height', '20');
      fallbackSvg.setAttribute('fill', 'none');
      fallbackSvg.setAttribute('stroke', 'currentColor');
      fallbackSvg.setAttribute('viewBox', '0 0 24 24');
      fallbackSvg.setAttribute('aria-hidden', 'true');
      
      const fallbackPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      fallbackPath.setAttribute('stroke-linecap', 'round');
      fallbackPath.setAttribute('stroke-linejoin', 'round');
      fallbackPath.setAttribute('stroke-width', '2');
      fallbackPath.setAttribute('d', 'M14 5l7 7m0 0l-7 7m7-7H3');
      
      fallbackSvg.appendChild(fallbackPath);
      fallbackSpan.appendChild(fallbackText);
      fallbackSpan.appendChild(fallbackSvg);
      submitButton.appendChild(fallbackSpan);
    }
  }
}

// Form validation with detailed error messages
function validateForm(data) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Clear previous errors
  [nameInput, emailInput, messageInput].forEach(input => {
    if (input) {
      input.setAttribute('aria-invalid', 'false');
      input.classList.remove('border-red-500');
    }
  });

  let isValid = true;

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    showMessage('Please enter a valid name (at least 2 characters)', 'error');
    if (nameInput) {
      nameInput.setAttribute('aria-invalid', 'true');
      nameInput.classList.add('border-red-500');
      nameInput.focus();
    }
    isValid = false;
  } else if (data.name.length > 100) {
    showMessage('Name must be less than 100 characters', 'error');
    if (nameInput) {
      nameInput.setAttribute('aria-invalid', 'true');
      nameInput.classList.add('border-red-500');
      nameInput.focus();
    }
    isValid = false;
  }

  // Email validation
  if (!data.email || !data.email.trim()) {
    showMessage('Please enter your email address', 'error');
    if (emailInput) {
      emailInput.setAttribute('aria-invalid', 'true');
      emailInput.classList.add('border-red-500');
      if (isValid) emailInput.focus();
    }
    isValid = false;
  } else if (!isValidEmail(data.email)) {
    showMessage('Please enter a valid email address', 'error');
    if (emailInput) {
      emailInput.setAttribute('aria-invalid', 'true');
      emailInput.classList.add('border-red-500');
      if (isValid) emailInput.focus();
    }
    isValid = false;
  } else if (data.email.length > 254) {
    showMessage('Email address is too long', 'error');
    if (emailInput) {
      emailInput.setAttribute('aria-invalid', 'true');
      emailInput.classList.add('border-red-500');
      if (isValid) emailInput.focus();
    }
    isValid = false;
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    showMessage('Please enter a message (at least 10 characters)', 'error');
    if (messageInput) {
      messageInput.setAttribute('aria-invalid', 'true');
      messageInput.classList.add('border-red-500');
      if (isValid) messageInput.focus();
    }
    isValid = false;
  } else if (data.message.length > 2000) {
    showMessage('Message must be less than 2000 characters', 'error');
    if (messageInput) {
      messageInput.setAttribute('aria-invalid', 'true');
      messageInput.classList.add('border-red-500');
      if (isValid) messageInput.focus();
    }
    isValid = false;
  }

  return isValid;
}

// Email validation - More strict
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  // RFC 5322 compliant regex (simplified)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Input sanitization - Enhanced security
function sanitizeInput(input) {
  if (!input || typeof input !== 'string') return '';
  
  // Remove any potential script tags and HTML
  const div = document.createElement('div');
  div.textContent = input;
  let sanitized = div.textContent || div.innerText || '';
  
  // Remove null bytes and control characters (except newlines and tabs)
  sanitized = sanitized.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  return sanitized;
}

// Show message - Using textContent for security
function showMessage(message, type = 'success') {
  if (!submitMessage) return;
  
  // Sanitize message before displaying
  const sanitizedMessage = sanitizeInput(message);
  submitMessage.textContent = sanitizedMessage;
  submitMessage.className = `form-message ${type === 'error' ? 'error' : ''}`;
  submitMessage.classList.remove('hidden'); // Remove hidden class
  submitMessage.style.display = 'block';
  submitMessage.setAttribute('role', 'alert');
  submitMessage.setAttribute('aria-live', 'polite');

  // Hide message after 8 seconds (longer for error messages)
  const hideDelay = type === 'error' ? 10000 : 5000;
  setTimeout(() => {
    submitMessage.style.display = 'none';
    submitMessage.classList.add('hidden'); // Add hidden class back
    submitMessage.removeAttribute('role');
    submitMessage.removeAttribute('aria-live');
  }, hideDelay);
}

// URL validation for projects
function getSafeUrl(url) {
  try {
    const urlObj = new URL(url);
    return (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') ? url : '#';
  } catch {
    return '#';
  }
}



