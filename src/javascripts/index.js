// STYLE
import '../stylesheets/style.scss';

// JAVASCRIPT
import App from './entities/Framework';

let i = 0;
const // 
  unicId = (len) => Math.random().toString(36).slice(2, 2 + len),

  sample = [
    { nom: 'doe', prenom: 'john', age: 30 },
    { nom: 'michel', prenom: 'blanc', age: 25 },
    { nom: 'jean', prenom: 'dujardin', age: 31 }
  ],

  user = (nom, prenom, age) => new App({

    container: document.querySelector('template'),

    id: unicId(7),
    nom,
    prenom,
    age,

    remove({ target }) {
      target.parentElement.parentElement.outerHTML = '';
    },

    events: {
      onupdate: () => ({
        '.del-this': ({ target, id }) => target.dataset.index = id,
        '.user_id': ({ target, id }) => target.innerText = id,
        '.user_nom': ({ target, nom }) => target.innerText = nom,
        '.user_prenom': ({ target, prenom }) => target.innerText = prenom,
        '.user_age': ({ target, age }) => target.innerText = age,
      }),
      onclick: actions => ({
        '.del-this': actions.remove
      })
    }

  }),

  table = new App({

    container: 'table-ctnr',

    events: {
      onclick: actions => ({
        '#create': actions.createUser,
        '.del-this': actions.deleteUser
      }),

      onupdate: () => ({
        //
        '.no-result': ({ target, users }) => target.classList[users.length ? 'add' : 'remove']('hidden'),
        '#users-table--tbody': ({ target, users }) => {
          if (users.length)
            users.forEach(user => target.prepend(user.container));
        }
        //
      })
    },

    users: [],

    createUser({ users }) {
      i = i < sample.length - 1 ? i + 1 : 0;
      const // 
        { nom, prenom, age } = sample[i] || { nom: 'duff', prenom: 'john', age: 40 },
        usr = user(nom, prenom, age);
      users.push(usr);
    },

    deleteUser({ target, users }) {
      const // 
        { dataset: { index } } = target,
        position = users.findIndex((user) => {
          // "user" étant une App, on peut accéder à son state
          return user.state.id === index;
        });
      users.splice(position, 1);
    }

  });

