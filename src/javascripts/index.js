// STYLE
import '../stylesheets/style.scss';

// JAVASCRIPT
import App from './entities/Framework';

const app = new App({

  container: 'app',

  events: {
    onclick: {
      add: ({ state, actions, $ }) => $.result.innerHTML = actions.ajoute(state).value,
      sub: ({ state, actions, $ }) => $.result.innerHTML = actions.soustrait(state).value
    }
  },

  value: 0,

  ajoute: (state) => {
    state.value++;
  },

  soustrait(state) {
    state.value--;
  }

});

window.app = app;


