// STYLE
import '../stylesheets/style.scss';

// JAVASCRIPT
import App from './entities/Framework-querySelAll';

const app = new App({

  container: 'app',

  events: {
    onclick: {
      '#add': ({ state, actions, $ }) => $('#result').innerHTML = actions.ajoute(state).value,
      '[name="sub"]': ({ state, actions, $ }) => $('#result').innerHTML = actions.soustrait(state).value
    }
  },

  value: 0,

  ajoute: (state) => {
    state.value++;
  },

  soustrait(state) {
    state.value--;
  },

  config: {
    attributes_to_watch: ['id', 'class', 'name']
  }

});

window.app = app;


