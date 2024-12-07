// STYLE
// import '@gouvfr/dsfr/dist/dsfr.css';
// import "@gouvfr/dsfr/dist/utility/icons/icons.main.min.css";
import '../stylesheets/style.scss';

// JAVASCRIPT
// import "@gouvfr/dsfr/dist/dsfr/dsfr.module";

import App from './entities/Framework';

const app = new App({

  container: 'app',

  events: {
    onclick: {
      add: (state, actions, view) => view.result.innerHTML = actions.ajoute(state).value,
      sub: (state, actions, view) => view.result.innerHTML = actions.soustrait(state).value
    }
  },

  value: 0,

  ajoute: (state) => {
    state.value++;
    return state;
  },

  soustrait(state) {
    state.value--;
    return state;
  }

});


