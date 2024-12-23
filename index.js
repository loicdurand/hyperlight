export default class App {

  #update = () => void (0);
  #container; // read-only

  state = {};
  actions = {};

  constructor({ container = document, events = {}, ...state }) {

    this.#container = this.#setContainer(container);

    // Gestion des actions
    Object.entries(state).forEach(([key, value]) => {

      if (!App.#is_function(value))
        return this.state[key] = value;

      this.actions[key] = ({ target, ...state }) => {
        value({ ...state, target });
        return this.state;
      };

    });

    // Gestions des events.onupdate
    Object.entries(events)
      .map(([event_name]) => [event_name, event_name.startsWith('on') ? event_name.substring(2) : event_name])
      .filter(([event_name, evt]) => {

        if (evt !== 'update')
          return true;

        const selectors = events[event_name](this.state);

        this.#update = () => Object.entries(selectors).map(([selector, fn]) => {
          return (s) => this.#container.matches(selector) ?
            fn({ ...s, target: this.#container }) :
            this.#container
              .querySelectorAll(selector)
              .forEach(target => fn({ ...s, target }));
        }).forEach(fn => fn(App.#no_null(this.state)));

        this.#update();
        return false;

        // Gestion des autres events ('click', 'keyup', etc...)
      }).forEach(([event_name, evt]) => {

        const selectors = events[event_name](this.actions);

        this.#container.addEventListener(evt, ({ target }) => {

          Object.entries(selectors)
            .filter(([selector]) => target.matches(selector))
            .forEach(([_, fn]) => {
              fn({ ...App.#no_null(this.state), target, entity: this });
              this.#update();
            });

        });
      });

    return this;

  }

  get container() {
    return this.#container;
  }

  static remove = (...Apps) => Apps.forEach(app => {
    app.#container.outerHTML = '';
    app.state = null;
  });

  static update = (...Apps) => Apps.forEach(app => app.#update());

  // Fonctions privées

  #setContainer(ctnr) {

    if (App.#is_element(ctnr) && ctnr.nodeName !== 'TEMPLATE')
      return ctnr;

    if (typeof ctnr === 'string' && ctnr !== 'template')
      return document.getElementById(ctnr.startsWith('#') ? ctnr.substring(1) : ctnr)
        || document.getElementsByTagName(ctnr)[0];

    const // 
      origin = ctnr.content.firstElementChild,
      { nodeName } = origin,
      copy = document.createElement(nodeName.toLowerCase());

    for (const attr of origin.attributes)
      copy.setAttribute(attr.name, attr.value);

    copy.innerHTML = App.#trim(origin.innerHTML);
    return copy;

  }

  static #trim = (str) => str.replaceAll(/^[\s\n\t]|[\s\n\t]$/g, '');

  static #is_element = elt => elt instanceof Element || elt instanceof Document;

  static #is_function = fn => ['[object AsyncFunction]', '[object Function]'].includes(({}).toString.call(fn));

  static #is_array = arr => arr.constructor === [].constructor;

  static #no_null = state => {

    if (state === null)
      return {};

    Object.entries(state).forEach(([key, value]) => {
      if (App.#is_array(value))
        state[key] = value.filter(elt => elt instanceof App && elt.state === null ? false : true)
    });

    return state;

  };

};