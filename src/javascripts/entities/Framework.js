import IdCreator from "./IdCreator";

const is_function = fn => ['[object AsyncFunction]', '[object Function]'].includes(({}).toString.call(fn));

export default class {

  #id;
  #container;

  state = {};
  actions = {};
  view = {};

  constructor({ container, events, ...options }) {

    this.id = 'random';

    const //
      ctnr = !container ? document : document.getElementById(container),
      elts = ctnr.querySelectorAll('[id]');

    elts.forEach(elt => {
      this.view[elt.getAttribute('id')] = elt
    });

    for (let option in options) {
      if (is_function(options[option])) {
        const // 
          fn_name = option,
          fn_content = options[option];

        this.actions[fn_name] = arg => {
          const result = fn_content(arg);
          return this.state;
        }

      } else {
        const // 
          prop = option,
          value = options[option];
        this.state[prop] = value;
      }

    }

    for (let event_name in events) {
      const //
        evt = event_name.substring(2),
        targets = events[event_name];

      for (let id in targets) {
        const // 
          fn = targets[id],
          target = document.getElementById(id);

        target.addEventListener(evt, e => {
          fn(this.state, this.actions, this.view);
        });
      }
    }

    return this;

  }

  set id(value) {
    this.#id = IdCreator();
  }

  get id() {
    return this.#id;
  }

  set container(elt) {
    this.#container = elt;
  }

  get container() {
    return this.#container;
  }




}