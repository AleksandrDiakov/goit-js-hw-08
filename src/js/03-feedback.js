
import throttle from "lodash.throttle";

const STORAGE_KEY = `feedback-form-state`;
let formData = {};
const refs = {
    form: document.querySelector(`.feedback-form`),
    textarea: document.querySelector(`.feedback-form, textarea`),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
popTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    if (refs.form.email.value === '' || refs.form.message.value === '') {
        alert('Oops. Fill in all the fields');
    }
    else {
        console.log(formData);
        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        formData = {};
    }
}

function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function popTextarea(evt) {
    const saveMsg = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saveMsg) {
        console.log(saveMsg);
        refs.textarea.value = saveMsg;
    }
}