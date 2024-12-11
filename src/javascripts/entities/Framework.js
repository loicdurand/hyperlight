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
  #onupdate = () => void (0);

  state = {};
  actions = {};
  view = {};

  constructor({ container, events, ...options }) {

    this.#id = ids.next().value;

    const ctnr = !container ? document : document.getElementById(container);
    this.container = ctnr;

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
      const evt = event_name.startsWith('on') ? event_name.substring(2) : event_name;
      if (evt === 'update') {
        // this.#onupdate = state => events[event_name](state);
        this.#onupdate = ((state) => {
          const //
            todos = [],
            selectors = events[event_name](state);
          for (let sel in selectors) {
            let selector = sel;
            if (!/^#\.\[/.test(selector))
              selector = '#' + selector;

            const fn = selectors[sel];
            todos.push((state) => {
              const elts = this.container.querySelectorAll(selector);
              return elts.forEach(elt => fn(elt, state));
            });
          }
          return () => todos.forEach(todo => todo(this.state))
        })(this.state);

        this.#onupdate(this.state);

      } else {

        const targets = events[event_name](this.actions);

        for (let id in targets) {
          const //
            fn = targets[id],
            target = document.getElementById(id);

          target.addEventListener(evt, () => {
            this.state = { ...(fn(this.state) || this.state) };
            this.#onupdate({ state: this.state, view: this.view });

          });
        }
      }
    }

    return this;

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