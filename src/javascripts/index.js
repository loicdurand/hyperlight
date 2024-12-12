// STYLE
import '../stylesheets/style.scss';

// JAVASCRIPT
import App from './entities/Framework';

const // 

  unicId = (len) => Math.random().toString(36).slice(2, 2 + len),

  app = new App({

    container: 'app',

    events: {

      onclick: (actions) => ({
        //
        '#add_a': actions.add_a,
        '#sub_a': actions.sub_a,
        //
        '#add_b': actions.add_b,
        '#sub_b': actions.sub_b
        //
      }),

      onupdate: () => ({
        //
        '#a': (state, target) => target.innerText = state.a,
        '#b': (state, target) => target.innerText = state.b,
        '#somme': (state, target) => target.value = state.somme,
        '#produit': (state, target) => target.value = state.produit
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
let i = 0;
const // 

  sample = [
    { nom: 'doe', prenom: 'john', age: 30 },
    { nom: 'michel', prenom: 'blanc', age: 25 },
    { nom: 'jean', prenom: 'dujardin', age: 31 }
  ],
  no_user_template = `
  <tr>
      <td
        id="no-result"
        colspan="4"
      >Aucun résultat</td>
  </tr>
`,
  user_template = (user) => /*html*/`
    <tr>
      <td>
        <button data-index="${user.id}" class="del-this">-</button>
      </td>
      <td>${user.id}</td>
      <td>${user.nom}</td>
      <td>${user.prenom}</td>
      <td>${user.age}</td>
    </tr>
  `,
  // user = new App({

  //   container: user_row,

  //   // id,
  //   nom,
  //   prenom,
  //   age,

  //   remove(state, target) {
  //     target.outerHTML = '';
  //   },

  //   events: {
  //     onupdate: () => ({
  //       '.del-this': (state, target) => target.dataset.index = state._id,
  //       '.user_id': (state, target) => target.innerText = state._id,
  //       '.user_nom': (state, target) => target.innerText = nom,
  //       '.user_prenom': (state, target) => target.innerText = state.prenom,
  //       '.user_age': (state, target) => target.innerText = state.age,
  //     })
  //   }

  // }),

  // user_tpl = document.querySelector('template'),
  // clone = user_tpl.content.cloneNode(true),
  // [user_row] = clone.querySelectorAll('.user_row'),

  table = new App({

    container: 'table-ctnr',

    events: {
      onclick: actions => ({
        '#create': actions.createUser,
        '.del-this': actions.delUser
      }),

      onupdate: () => ({
        //
        'no-result': (state, target) => target.classList[state.users.length ? 'add' : 'remove']('hidden'),
        '#users': (state, target) => {
          if (state.users.length)
            //target.innerHTML = state.users.map(user => user.container.outerHTML).join('');
            target.innerHTML = state.users.map(user_template).join('');
          else
            target.innerHTML = no_user_template;
        }
        //
      })
    },

    users: [],

    createUser(state) {
      i = i < sample.length - 1 ? i + 1 : 0;
      const { nom, prenom, age } = sample[i] || { nom: 'duff', prenom: 'john', age: 40 };
      state.users.push({ id: unicId(6), nom, prenom, age });
    },

    delUser(state, target) {
      const // 
        { dataset: { index } } = target,
        position = state.users.findIndex(user => user.id === index);
      state.users.splice(+position, 1);
    }

  })


window.app = app;


