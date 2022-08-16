const usernameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const subjectEl = document.querySelector('#subject');
const messageEl = document.querySelector('#textarea');

const form = document.querySelector('#form');


const checkUsername = () => {
    let valid = false;
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isLatin(username)) {
      showError(usernameEl, 'Username should contain only latin letters without any numbers and spaces');
    } else if (!isFirstLetterUppercase(username)) {
      showError(usernameEl, 'Username should start with capital letter.');
    // } else if (containsNumbers(username)) {
    //   showError(usernameEl, 'Username should not contain any numbers.');
    // } else if (containsSpaces(username)) {
    //   showError(usernameEl, 'Username should not contain any spaces.');
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkSubject = () => {
    let valid = false;
    const subject = subjectEl.value.trim();
    if (!isRequired(subject)) {
        showError(subjectEl, 'Subject cannot be blank.');
    } else if (!containsOnlyLetters(subject)) {
        showError(subjectEl, 'Subject should contain only letters.')
    } else {
        showSuccess(subjectEl);
        valid = true;
    }
    return valid;
};

const isLatin = (username) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(username);
};

const isFirstLetterUppercase = (username) => {
  const re = /^[A-Z]/;
  return re.test(username);
};

// const containsSpaces = (username) => {
//   const re = /\s/g;
//   return re.test(username);
// }

// const containsNumbers = (username) => {
//   const re = /\d/;
//   return re.test(username);
// };

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const containsOnlyLetters = (subject) => {
  const re = /^[a-zA-Z]+$/;
  return re.test(subject);
};

const isRequired = value => value === '' ? false : true;

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isSubjectValid = checkSubject();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isSubjectValid

    if (isFormValid) {
    }
});

function saveData() {
  const usernameEl = document.querySelector('#name').value;
  const emailEl = document.querySelector('#email').value;
  const subjectEl = document.querySelector('#subject').value;
  const messageEl = document.querySelector('#textarea').value;
  localStorage.setItem("username", usernameEl);
  localStorage.setItem("email", emailEl);
  localStorage.setItem("subject", subjectEl);
  localStorage.setItem("message", messageEl);
}


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'subject':
            checkSubject();
            break;
    }
}));