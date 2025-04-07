// DOM Elements
const offerSection = document.getElementById('offerSection');
const usernameSection = document.getElementById('usernameSection');
const completeOfferBtn = document.getElementById('completeOfferBtn');
const tiktokUsername = document.getElementById('tiktokUsername');
const usernameError = document.getElementById('usernameError');
const submitButton = document.getElementById('submitButton');
const confirmationModal = document.getElementById('confirmationModal');
const closeModal = document.getElementById('closeModal');

// Event Listeners
completeOfferBtn.addEventListener('click', handleOfferCompletion);
submitButton.addEventListener('click', handleSubmit);
closeModal.addEventListener('click', closeConfirmationModal);
tiktokUsername.addEventListener('input', () => {
    usernameError.classList.add('hidden');
    tiktokUsername.classList.remove('input-error');
});

// Handle offer completion
function handleOfferCompletion() {
    completeOfferBtn.disabled = true;
    completeOfferBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    setTimeout(() => {
        offerSection.classList.add('hidden');
        usernameSection.classList.remove('hidden');
        
        // Animate entrance of username section
        usernameSection.style.opacity = '0';
        usernameSection.style.transform = 'translateY(20px)';
        
        requestAnimationFrame(() => {
            usernameSection.style.transition = 'all 0.5s ease-out';
            usernameSection.style.opacity = '1';
            usernameSection.style.transform = 'translateY(0)';
        });
    }, 2000);
}

// Handle username submission
function handleSubmit() {
    // Validate username
    if (!tiktokUsername.value.trim()) {
        tiktokUsername.classList.add('input-error');
        usernameError.classList.remove('hidden');
        tiktokUsername.focus();
        return;
    }
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    // Simulate storing username in database
    setTimeout(() => {
        showConfirmation();
    }, 1500);
}

// Show confirmation modal
function showConfirmation() {
    confirmationModal.classList.remove('hidden');
    
    // Trigger entrance animation for icon
    const calendarIcon = confirmationModal.querySelector('.fa-calendar-check');
    calendarIcon.classList.add('celebrate');
}

// Close confirmation modal
function closeConfirmationModal() {
    confirmationModal.classList.add('hidden');
    
    // Reset the form
    submitButton.disabled = false;
    submitButton.innerHTML = 'Submit Entry &#x1F389;';
    tiktokUsername.value = '';
}

// Add shine effect to buttons
function addShineEffect() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.add('shine-effect', 'hover-glow');
    });
}

// Initialize the page
window.addEventListener('load', () => {
    addShineEffect();
});

// Prevent form submission on enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !usernameSection.classList.contains('hidden')) {
        e.preventDefault();
        handleSubmit();
    }
});