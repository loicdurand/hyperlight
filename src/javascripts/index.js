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

    onupdate: () => ({
      //
      a: (target, state) => target.innerText = state.a,
      b: (target, state) => target.innerText = state.b,
      somme: (target, state) => target.value = state.somme,
      produit: (target, state) => target.value = state.produit
      //
    })
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

// const table = new App({

//   container: 'table',

//   events: {
//     //   onclick
//     onupdate
//   },

//   users: [{
//     nom: 'doe', prenom: 'john', age: 20
//   }],



// })


window.app = app;


