import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const saveFeedbackToLocalStorage = throttle(() => {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 500);

const loadFeedbackFromLocalStorage = () => {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email;
    messageInput.value = message;
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(feedbackState);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

feedbackForm.addEventListener('input', () => {
  saveFeedbackToLocalStorage();
});

feedbackForm.addEventListener('submit', handleSubmit);

window.addEventListener('load', loadFeedbackFromLocalStorage);
