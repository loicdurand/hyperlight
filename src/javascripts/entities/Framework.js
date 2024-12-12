export default class App {

  #onupdate = () => void (0);

  state = {};
  actions = {};
  view;
  container;

  constructor({ container, events = {}, view = null, ...state }) {

    this.container = !container ? document : typeof container === 'string' ? document.getElementById(container) : container;

    Object.entries(state).forEach(([key, value]) => {

      if (!App.#is_function(value))
        return this.state[key] = value;

      this.actions[key] = (state, target) => {
        value(state, target);
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
            .forEach(target => fn(s, target));
        }).forEach(fn => fn(this.state));

        this.#onupdate();
        return false;

      }).forEach(([event_name, evt]) => {

        const selectors = events[event_name](this.actions);

        this.container.addEventListener(evt, ({ target }) => {

          Object.entries(selectors)
            .filter(([selector]) => target.matches(selector))
            .forEach(([_, fn]) => {
              fn(this.state, target);
              this.#onupdate();
            });

        });
      });

    return this;

  }

  static #is_function = fn => ['[object AsyncFunction]', '[object Function]'].includes(({}).toString.call(fn));

};