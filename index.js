'use strict';

import App from 'https://esn.sh/loicdurand@unviewed/main.js';

let i = 0, j = 0;

const // 

  sample = [
    { nom: 'doe', prenom: 'john', age: 30 },
    { nom: 'michel', prenom: 'jean-pierre', age: 25 },
    { nom: 'jean', prenom: 'bond', age: 31 },
    { nom: 'pierre', prenom: 'quirouille', age: 31 }
  ],

  user_row = (state) => new App({

    container: document.querySelector('template'),

    ...state,

    remove(state) {
      const //
        { parent, entity } = state;
      App.remove(entity);
      App.update(parent, nb_users);
    },

    events: {
      onupdate: () => ({
        '.user_id': ({ target, id }) => target.innerText = id,
        '.user_nom': ({ target, nom }) => target.innerText = nom,
        '.user_prenom': ({ target, prenom }) => target.innerText = prenom,
        '.user_age': ({ target, age }) => target.innerText = age,
      }),
      onclick: actions => ({
        '.del-this': actions.remove
      }),
    }

  }),

  users_table = new App({

    container: 'table-ctnr',

    users: [],

    createUser({ users }) {
      i = i < sample.length - 1 ? i + 1 : 0;
      users.push(user_row({ id: j++, ...sample[i], parent: users_table }));
      App.update(nb_users);
    },

    events: {
      onclick: actions => ({
        '#create': (state) => {
          actions.createUser(state);
        }
      }),

      onupdate: () => ({
        '#no-result': ({ target, users }) => target.classList[users.length ? 'add' : 'remove']('hidden'),
        '#users-table--tbody': ({ target, users }) => users.forEach(user_row => target.prepend(user_row.container))
      })
    }

  }),

  nb_users = new App({

    container: 'nb-users',

    events: {
      onupdate: () => ({
        '#nb': ({ target }) => target.innerText = users_table.state.users.length,
        '#pluriel': ({ target }) => target.innerText = users_table.state.users.length > 1 ? 's' : ''
      })
    }

  })



