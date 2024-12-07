function* id_creator() {
  let i = 0;
  while (true) yield i++;
}

const // 
  ids = id_creator(),
  is_function = fn => ['[object AsyncFunction]', '[object Function]'].includes(({}).toString.call(fn));

export default class {

  #id;
  #container;

  state = {};
  actions = {};
  dom = {};
  $;

  constructor({ container, events, ...options }) {

    this.id = 'random';

    const //
      ctnr = !container ? document : document.getElementById(container),
      elts = ctnr.querySelectorAll('[id]');

    elts.forEach(elt => {
      this.dom[elt.getAttribute('id')] = elt
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
          fn(this);
        });
      }
    }

    this.$ = this.dom;

    return this;

  }

  set id(value) {
    this.#id = this.#get_id();
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

  #get_id() {
    return ids.next().value;
  }




}