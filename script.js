


// // ===== Configuration =====
// const CONFIG = {
//     API_BASE_URL: 'https://a47ad73b895925.lhr.life',
//     PROFILE_ENDPOINT: '/api/profile'
// };

// // ===== DOM Elements =====
// const loadingState = document.getElementById('loading');
// const profileContent = document.getElementById('profile-content');
// const errorState = document.getElementById('error-state');

// const usernameDisplay = document.getElementById('username-display');
// const userIdDisplay = document.getElementById('user-id-display');
// const emailDisplay = document.getElementById('email-display');

// const refreshBtn = document.getElementById('refresh-btn');
// const closeBtn = document.getElementById('close-btn');
// const retryBtn = document.getElementById('retry-btn');
// const errorMessage = document.getElementById('error-message');

// const copyButtons = document.querySelectorAll('.copy-button');

// // ===== Telegram SDK =====
// let tg = window.Telegram.WebApp;

// // ===== Initialize App =====
// function initApp() {
//     tg.expand();
//     tg.setBackgroundColor('#ffffff');
//     tg.setHeaderColor('#ffffff');
//     tg.MainButton.hide();
    
//     loadProfile();
//     attachEventListeners();
// }

// // ===== Load Profile =====
// async function loadProfile() {
//     try {
//         showLoading();
        
//         const userId = tg.initDataUnsafe?.user?.id;
        
//         if (!userId) {
//             throw new Error('Не удалось получить ID пользователя из Telegram');
//         }
        
//         const response = await fetch(`${CONFIG.API_BASE_URL}${CONFIG.PROFILE_ENDPOINT}?user_id=${userId}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
        
//         if (!response.ok) {
//             if (response.status === 404) {
//                 throw new Error('Профиль не найден. Вы не зарегистрированы в системе.');
//             }
//             throw new Error(`Ошибка сервера: ${response.status}`);
//         }
        
//         const data = await response.json();
        
//         if (!data.user_id) {
//             throw new Error('Неверный формат ответа от сервера');
//         }
        
//         displayProfile(data);
//         showProfile();
        
//     } catch (error) {
//         console.error('Error loading profile:', error);
//         showError(error.message);
//     }
// }

// // ===== Display Profile =====
// function displayProfile(data) {
//     usernameDisplay.textContent = data.name || 'Неизвестно';
//     userIdDisplay.textContent = data.user_id;
//     emailDisplay.textContent = data.email || 'Не указана';
    
//     userIdDisplay.dataset.value = data.user_id;
//     emailDisplay.dataset.value = data.email || '';
// }

// // ===== Attach Event Listeners =====
// function attachEventListeners() {
//     copyButtons.forEach(button => {
//         button.addEventListener('click', handleCopy);
//     });
    
//     refreshBtn.addEventListener('click', () => {
//         loadProfile();
//     });
    
//     closeBtn.addEventListener('click', () => {
//         tg.close();
//     });
    
//     retryBtn.addEventListener('click', () => {
//         loadProfile();
//     });
// }

// // ===== Copy to Clipboard =====
// async function handleCopy(event) {
//     const button = event.target;
//     const copyType = button.dataset.copy;
    
//     let textToCopy = '';
//     if (copyType === 'user-id') {
//         textToCopy = userIdDisplay.textContent;
//     } else if (copyType === 'email') {
//         textToCopy = emailDisplay.textContent;
//     }
    
//     if (!textToCopy || textToCopy === '—') return;
    
//     try {
//         if (navigator.clipboard && window.isSecureContext) {
//             await navigator.clipboard.writeText(textToCopy);
//         } else {
//             fallbackCopy(textToCopy);
//         }
        
//         const originalText = button.textContent;
//         button.textContent = '✓ Скопировано';
//         button.classList.add('copied');
        
//         setTimeout(() => {
//             button.textContent = originalText;
//             button.classList.remove('copied');
//         }, 2000);
        
//     } catch (error) {
//         console.error('Failed to copy:', error);
//         button.textContent = 'Ошибка копирования';
//         setTimeout(() => {
//             button.textContent = 'Копировать';
//         }, 2000);
//     }
// }

// function fallbackCopy(text) {
//     const textarea = document.createElement('textarea');
//     textarea.value = text;
//     textarea.style.position = 'fixed';
//     textarea.style.opacity = '0';
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textarea);
// }

// function showLoading() {
//     loadingState.classList.remove('hidden');
//     profileContent.classList.add('hidden');
//     errorState.classList.add('hidden');
// }

// function showProfile() {
//     loadingState.classList.add('hidden');
//     profileContent.classList.remove('hidden');
//     errorState.classList.add('hidden');
// }

// function showError(message) {
//     loadingState.classList.add('hidden');
//     profileContent.classList.add('hidden');
//     errorState.classList.remove('hidden');
//     errorMessage.textContent = message || 'Произошла неизвестная ошибка. Пожалуйста, попробуйте снова.';
// }

// document.addEventListener('DOMContentLoaded', () => {
//     tg.ready();
//     initApp();
// });

// document.addEventListener('touchmove', (e) => {
//     if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
//         // Разрешить скролл только для контента
//     }
// }, { passive: true });

// ===== Configuration =====
const CONFIG = {
    API_BASE_URL: 'https://a47ad73b895925.lhr.life',
    PROFILE_ENDPOINT: '/api/profile'
};

// ===== DOM Elements =====
const loadingState = document.getElementById('loading');
const menuState = document.getElementById('menu-state');
const profileContent = document.getElementById('profile-content');
const errorState = document.getElementById('error-state');

const usernameDisplay = document.getElementById('username-display');
const userIdDisplay = document.getElementById('user-id-display');
const emailDisplay = document.getElementById('email-display');
const menuGreeting = document.getElementById('menu-greeting');

const refreshBtn = document.getElementById('refresh-btn');
const closeBtn = document.getElementById('close-btn');
const retryBtn = document.getElementById('retry-btn');
const backBtn = document.getElementById('back-btn');
const openProfileBtn = document.getElementById('open-profile-btn');
const saveEmailBtn = document.getElementById('save-email-btn');
const errorMessage = document.getElementById('error-message');
const newEmailInput = document.getElementById('new-email-input');
const passwordInput = document.getElementById('password-input');
const updateStatus = document.getElementById('update-status');

const copyButtons = document.querySelectorAll('.copy-button');

// ===== Telegram SDK =====
let tg = null;
let currentUserId = null;

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    tg = window.Telegram?.WebApp;

    if (!tg) {
        showError('Приложение должно быть открыто через Telegram');
        return;
    }

    tg.ready();
    tg.expand();
    tg.setBackgroundColor('#ffffff');
    tg.setHeaderColor('#ffffff');
    tg.MainButton.hide();

    currentUserId = tg.initDataUnsafe?.user?.id;

    attachEventListeners();
    loadMenu();
});

// ===== Load Menu =====
async function loadMenu() {
    try {
        showLoading();

        if (!currentUserId) {
            throw new Error('Не удалось получить ID пользователя из Telegram');
        }

        const response = await fetch(`${CONFIG.API_BASE_URL}${CONFIG.PROFILE_ENDPOINT}?user_id=${currentUserId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Профиль не найден. Вы не зарегистрированы в системе.');
            }
            throw new Error(`Ошибка сервера: ${response.status}`);
        }

        const data = await response.json();

        if (menuGreeting) {
            menuGreeting.textContent = `Привет, ${data.name || 'пользователь'}!`;
        }

        showMenu();

    } catch (error) {
        console.error('Error loading menu:', error);
        showError(error.message);
    }
}

// ===== Load Profile =====
async function loadProfile() {
    try {
        showLoading();

        if (!currentUserId) {
            throw new Error('Не удалось получить ID пользователя из Telegram');
        }

        const response = await fetch(`${CONFIG.API_BASE_URL}${CONFIG.PROFILE_ENDPOINT}?user_id=${currentUserId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Профиль не найден. Вы не зарегистрированы в системе.');
            }
            throw new Error(`Ошибка сервера: ${response.status}`);
        }

        const data = await response.json();

        if (!data.user_id) {
            throw new Error('Неверный формат ответа от сервера');
        }

        displayProfile(data);
        showProfile();

    } catch (error) {
        console.error('Error loading profile:', error);
        showError(error.message);
    }
}

// ===== Display Profile =====
function displayProfile(data) {
    usernameDisplay.textContent = data.name || 'Неизвестно';
    userIdDisplay.textContent = data.user_id;
    emailDisplay.textContent = data.email || 'Не указана';

    userIdDisplay.dataset.value = data.user_id;
    emailDisplay.dataset.value = data.email || '';
}

// ===== Save Email =====
async function saveEmail() {
    const newEmail = newEmailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!newEmail || !password) {
        updateStatus.textContent = 'Заполните все поля';
        updateStatus.style.color = '#e53935';
        return;
    }

    try {
        updateStatus.textContent = 'Сохранение...';
        updateStatus.style.color = '#65676b';

        const response = await fetch(`${CONFIG.API_BASE_URL}/api/profile/update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: currentUserId,
                new_email: newEmail,
                password: password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.detail || `Ошибка: ${response.status}`);
        }

        emailDisplay.textContent = data.email;
        emailDisplay.dataset.value = data.email;
        updateStatus.textContent = '✓ Почта успешно обновлена';
        updateStatus.style.color = '#31a24c';
        newEmailInput.value = '';
        passwordInput.value = '';

    } catch (error) {
        console.error('Error saving email:', error);
        updateStatus.textContent = error.message;
        updateStatus.style.color = '#e53935';
    }
}

// ===== Attach Event Listeners =====
function attachEventListeners() {
    copyButtons.forEach(button => {
        button.addEventListener('click', handleCopy);
    });

    openProfileBtn?.addEventListener('click', () => {
        loadProfile();
    });

    backBtn?.addEventListener('click', () => {
        loadMenu();
    });

    refreshBtn?.addEventListener('click', () => {
        loadProfile();
    });

    closeBtn?.addEventListener('click', () => {
        tg.close();
    });

    retryBtn?.addEventListener('click', () => {
        loadMenu();
    });

    saveEmailBtn?.addEventListener('click', () => {
        saveEmail();
    });
}

// ===== Copy to Clipboard =====
async function handleCopy(event) {
    const button = event.target;
    const copyType = button.dataset.copy;

    let textToCopy = '';
    if (copyType === 'user-id') {
        textToCopy = userIdDisplay.textContent;
    } else if (copyType === 'email') {
        textToCopy = emailDisplay.textContent;
    }

    if (!textToCopy || textToCopy === '—') return;

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
        } else {
            fallbackCopy(textToCopy);
        }

        const originalText = button.textContent;
        button.textContent = '✓ Скопировано';
        button.classList.add('copied');

        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);

    } catch (error) {
        console.error('Failed to copy:', error);
        button.textContent = 'Ошибка копирования';
        setTimeout(() => {
            button.textContent = 'Копировать';
        }, 2000);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// ===== UI State Management =====
function showLoading() {
    loadingState.classList.remove('hidden');
    menuState?.classList.add('hidden');
    profileContent.classList.add('hidden');
    errorState.classList.add('hidden');
}

function showMenu() {
    loadingState.classList.add('hidden');
    menuState?.classList.remove('hidden');
    profileContent.classList.add('hidden');
    errorState.classList.add('hidden');
}

function showProfile() {
    loadingState.classList.add('hidden');
    menuState?.classList.add('hidden');
    profileContent.classList.remove('hidden');
    errorState.classList.add('hidden');
}

function showError(message) {
    loadingState.classList.add('hidden');
    menuState?.classList.add('hidden');
    profileContent.classList.add('hidden');
    errorState.classList.remove('hidden');
    errorMessage.textContent = message || 'Произошла неизвестная ошибка. Пожалуйста, попробуйте снова.';
}