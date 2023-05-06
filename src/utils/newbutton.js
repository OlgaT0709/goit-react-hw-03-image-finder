 export default class NewBtn {
     constructor({ selector, hidden = false, text }) {
        this.button = document.querySelector(selector);
        this.textContent(text);
        hidden && this.hide();
    }

    enable() {
        this.button.disabled = false;
        this.button.classList.add('hover');
    }

    disabled() {
        this.button.disabled = true;
        this.button.classList.remove('hover');
    }

    show() {
        this.button.classList.remove('is-hidden');
    }

    hide() {
        this.button.classList.add('is-hidden');
     }
     
    textContent(text) {
        this.button.textContent = `${text}`
    }
    
}

