export default class {

  #container;
  // config
  #dom_method;
  #attributes_to_watch;

  view = {};
  $;

  constructor({ container, config = {} }) {

    this.dom_method = config.dom_method || 'getElementById';
    this.attributes_to_watch = config.attributes_to_watch ?? ['id'];

    const ctnr = !container ? document : document[this.#dom_method](container);

    this.#attributes_to_watch.forEach(attr_name => {
      const elts = ctnr.querySelectorAll(`[${attr_name}]`);
      elts.forEach(elt => {
        const attr_value = elt.getAttribute(attr_name);
        this.view[this.#getAttribute(attr_name, attr_value)] = elt;
        if (attr_name === 'id')
          this.view[attr_value] = elt;
      });
    });

    this.$ = selector => this.view[selector];

    return this;

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

}