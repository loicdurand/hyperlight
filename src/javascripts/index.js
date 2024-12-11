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

const // 
  no_user_template = `
  <tr>
      <td
        id="no-result"
        colspan="4"
      >Aucun résultat</td>
  </tr>
`,
  user_template = (user) =>/*html*/`
  <tr>
    <td>
      <button class="user_delete">-</button>
    </td>
    <td>${user.nom}</td>
    <td>${user.prenom}</td>
    <td>${user.age}</td>
  </tr>
`;

const table = new App({

  container: 'table',

  events: {
    onclick: actions => ({
      'create': actions.createUser,
      'delete': actions.delUser
    }),

    onupdate: () => ({
      //
      'no-result': (target, state) => target.classList[state.users.length ? 'add' : 'remove']('hidden'),
      'users': (target, state) => {
        if (state.users.length)
          target.innerHTML = state.users.map(user_template).join('');
        else
          target.innerHTML = no_user_template;
      }
      //
    })
  },

  users: [],

  createUser(state) {
    state.users.push({
      nom: 'doe', prenom: 'john', age: 20
    });
  },

  delUser(state) {
    console.log({ avant: state.users });
    state.users.pop();
    console.log({ apres: state.users });

  }

})


window.app = app;


