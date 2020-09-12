class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string' ? 
            document.querySelector(selector) : selector;
    }
    html(html, type) {
        if(typeof html === 'string') {
            this.$el[type] = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    }
    insert(place, html) {
        this.$el.insertAdjacentHTML(place, html);
    }
    text(txt) {
        if(typeof txt !== 'undefined') {
            this.$el.textContent = txt;
            return this;
        }
        if(this.$el.tagName.toLowerCase() === 'input') {
            return this.$el.value.trim();
        }
        return this.$el.textContent.trim();
    }
    clear() {
        this.html('');
        return this;
    }
    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }
    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback);
    }
    //Element
    append(node) {
        if(node instanceof Dom) {
            node = node.$el;
        }
        if(Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }
        return this;
    }
    get data() {
        return this.$el.dataset;
    }
    get width() {
        return this.$el.offsetWidth;
    }
    closest(selector) {
        return $( this.$el.closest(selector) );
    }
    find(selector) {
        return $( this.$el.querySelector(selector) );
    }
    findAll(selector) {
        return this.$el.querySelectorAll(selector);
    }
    css(styles = {}) {
        Object.keys(styles).forEach(styleItem => {
            this.$el.style[styleItem] = styles[styleItem];
        }) ;
    }
    focus() {
        this.$el.focus();
        return this;
    }
    addClass(className) {
        this.$el.classList.add(className);
    }
    removeClass(className) {
        this.$el.classList.remove(className);
    }
    hasClass(className) {
        return this.$el.classList.contains(className);
    }
    attr(name, value) {
        if(value) {
            this.$el.setAttribute(name, value);
            return this;
        }
        return this.$el.getAttribute(name);
    }
}

export default function $(selector) {
    return new Dom(selector);
}

$.create = (tag, classes = '') => {
    const el = document.createElement(tag);
    if(classes) {
        el.classList.add(classes);
    }
    return $(el);
}