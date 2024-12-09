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
  // config
  #dom_method;
  #attributes_to_watch;

  state = {};
  actions = {};
  dom = {};
  $;

  constructor({ container, events, config = {}, ...attrs }) {

    this.id = 'random';
    this.dom_method = config.dom_method || 'getElementById';
    this.attributes_to_watch = config.attributes_to_watch ?? ['id'];

    const ctnr = !container ? document : document[this.#dom_method](container);

    this.#attributes_to_watch.forEach(attr_name => {
      const elts = ctnr.querySelectorAll(`[${attr_name}]`);
      elts.forEach(elt => {
        const attr_value = elt.getAttribute(attr_name);
        this.dom[this.#getAttribute(attr_name, attr_value)] = elt;
      });
    });

    for (let attr in attrs) {
      if (is_function(attrs[attr])) {
        const // 
          fn_name = attr,
          fn_content = attrs[attr];

        this.actions[fn_name] = arg => {
          const result = fn_content(arg);
          return this.state;
        }

      } else {
        const // 
          prop = attr,
          value = attrs[attr];
        this.state[prop] = value;
      }

    }

    for (let event_name in events) {
      const //
        evt = event_name.substring(2),
        targets = events[event_name];

      for (let selector in targets) {
        const // 
          fn = targets[selector],
          triggers = document.querySelectorAll(selector);

        triggers.forEach(target => {
          target.addEventListener(evt, e => {
            fn(this);
          });
        });
      }
    }

    this.$ = selector => this.dom[selector];

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

  set dom_method(dom_method = 'getElementById') {
    this.#dom_method = dom_method;
  }

  set attributes_to_watch(attributes_to_watch = ['id']) {
    this.#attributes_to_watch = attributes_to_watch;
  }

  #getAttribute = (_attr_name, attr_value) => {
    const // 
      attr_name = (!['id', 'class'].includes(_attr_name)) ? 'other' : _attr_name,
      refs = {
        id: '#' + attr_value,
        class: '.' + attr_value,
        other: `[${_attr_name}="${attr_value}"]`
      };
    return refs[attr_name];
  }

  #get_id() {
    return ids.next().value;
  }

}