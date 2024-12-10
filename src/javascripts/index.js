// STYLE
import '../stylesheets/style.scss';

// JAVASCRIPT
import App from './entities/Framework';

const app = new App({

  container: 'app',

  events: {

    onclick: (actions) => ({
      //
      add_a: actions.add_a,
      sub_a: actions.sub_a,
      //
      add_b: actions.add_b,
      sub_b: actions.sub_b
      //
    }),

    onupdate: ({ state, view: $ }) => {
      //
      $.a.innerText = state.a;
      $.b.innerText = state.b;
      $.somme.value = state.somme;
      $.produit.value = state.produit;
      //
    }
  },

  a: 0,
  b: 0,
  somme: 0,
  produit: 0,

  add_a: (state) => {
    state.a++;
    state.somme++;
    state.produit = state.a * state.b;
  },

  sub_a(state) {
    state.a--;
    state.somme--;
    state.produit = state.a * state.b;
  },

  add_b: (state) => {
    state.b++;
    state.somme++;
    state.produit = state.a * state.b;
  },

  sub_b(state) {
    state.b--;
    state.somme--;
    state.produit = state.a * state.b;
  }

});

window.app = app;


