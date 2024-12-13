export default class App {

  #onupdate = () => void (0);

  state = {};
  actions = {};
  container;

  constructor({ container, events = {}, ...state }) {

    this.container = this.#setContainer(container);

    Object.entries(state).forEach(([key, value]) => {

      if (!App.#is_function(value))
        return this.state[key] = value;

      this.actions[key] = ({target,...state}) => {
        value({...state, target});
        return this.state;
      }

    });

    Object.entries(events)
      .map(([event_name]) => [event_name, event_name.startsWith('on') ? event_name.substring(2) : event_name])
      .filter(([event_name, evt]) => {

        if (evt !== 'update')
          return true;

        const selectors = events[event_name](this.state);

        this.#onupdate = () => Object.entries(selectors).map(([selector, fn]) => {
          return (s) => this.container
            .querySelectorAll(selector)
            .forEach(target => fn({...s, target}));
        }).forEach(fn => fn(this.state));

        this.#onupdate();
        return false;

      }).forEach(([event_name, evt]) => {

        const selectors = events[event_name](this.actions);

        this.container.addEventListener(evt, ({ target }) => {

          Object.entries(selectors)
            .filter(([selector]) => target.matches(selector))
            .forEach(([_, fn]) => {
              fn({...this.state, target});
              this.#onupdate();
            });

        });
      });

    return this;

  }

  #setContainer(ctnr) {
    if (!ctnr)
      return document;

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
      copy.setAttribute(attr.name, attr.name);

    copy.innerHTML = App.#trim(origin.innerHTML);
    return copy;

  }

  static #trim = str => str.replaceAll(/^[\s\n\t]|[\s\n\t]$/g, '');

  static #is_element = elt => elt instanceof Element || elt instanceof Document;

  static #is_function = fn => ['[object AsyncFunction]', '[object Function]'].includes(({}).toString.call(fn));

};