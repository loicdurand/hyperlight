# unviewed
Un mini-framework JS inspiré de "hyperapp" (jorgebucaran/hyperapp) dans son fonctionnement - mais pas une copie pour autant ^^

## Préambule

Il y a quelques années, déjà, j'ai découvert le projet de "jorgebucaran", nommé Hyperapp, consistant en un micro-framework d'à peine 1Kb une fois minifié et gzippé.

Je l'ai largement utilisé dans mes petits projets, mais je voulais créer ma propre version, dépourvue du système de vue, d'où le nom de ce projet (Unviewed -> pas de vue).

En efeft, le recours à JSX, bien que je l'apprécie, implique d'avoir du code "HTML-like" au milieu de son code JS, ce que je regrette.

Les framework plus gros, tels que Vue ou évidemment React, ne me satisfont pas sur ce point, dans la mesure où là encore, le code de la vue, se retrouve dans un template, parfois noyé au sein de notre JS.

## L'approche "Unviewed"

L'idée de ce framework, est de rester fidèle dans l'esprit à ce qui a été mis en place dans React ou même Hyperapp, avec un State stockant les variables, des Actions gérant les fonctions de raffraichissement de la donnée, et un Container dans lequel sera appliqué ce code. 

La différence, c'est qu'au lieu de recharger un template entier à chaque fois que le State chane, on applique une succession de fonctions JS, comme on le fearit sans framework.

## Mini-démo

Lancez simplement `npm i unviewed` depuis votre projet.
Premier constat: aucune dépendance n'est nécessaire.

Dans le répertoire *node_module/unviewed*, vous trouverez un fichier ***index.html***. Ouvrez-le tel quel dans votre navigateur! Le code d'Unviewed se trouve dans le fichier ***main.js***, tandis que le code de la démo est dans ***index.js*** 

## Installation

Exécutez simplement `npm i unviewed`, et vous êtes prêts! Aucune dépendance, pas besoin de bundler (Webpack, Parcel ou autre), le code est écrit en pure Javascript, et tient dans un seul fichier de 82 lignes de codes!

## Tutoriel

Construisons une mini-application, comprenant un tableau, dans lequel nous insérerons des utilisateurs en cliquant sur un bouton "ajouter"

![image](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2AAAAC5CAYAAABOS1zeAAAABHNCSVQICAgIfAhkiAAAIABJREFUeJzt3X9sG2ee5/m3bM5OCafMFG+UOXI3WZuGPWdq7ZuQSPpCXryAKTi7piaZMYVkYRHJwaFiYCx1djpSJ+NYCebScrxJy2lst+S+SazkxoEUTAzRd+0TfUjG1MLuk7LrHJlb50zN2gjtjXEitgWQQIRR+cKZ5/6gbCuO/CuRSTn6vADBJqv48Euyqvh86/nWw7pLly6ZlStXsmLFCurq6hAREREREZE7Y0WtAxAREREREVkulICJiIiIiIhUiRIwERERERGRKlECJiIiIiIiUiVKwERERERERKpECZiIiIiIiEiVKAETERERERGpEiVgIiIiIiIiVXKdBKzExLs9tKyro87fSs+7E5QuLyrnSf20nfC6MO0/S1OoVqRLlPPJXsK+MJ1HrnknSmk6A2to/kn66nt3HaUj7ayJ7Cf/XWMZ66bJ305qBihlSe5rZc09rSSdyvLsvjBrnhy+Oz6zyf2E6720f1TrQEREREREFs91EjCb0I5e+ndFsEoWwSdC2JcXuXxEt/hwP9ZL/48ieKoV6VI0k2b/W7N0j6Xp3zb/nSiQemMY75vjHH85cvW9W0gpTc9LQ0x9yxByYxNXEirLH6VjZwy/BdgBYk+E8biuruvbnKDjicCN47kB59M02Ztlk4vFtnG73Nj3VOn5RERERESq4IYliL7tbUScFENHvt7rnhgeJ9AWwbqjod0FGiLseauX2Opr3wkP0dcOsmfzzdJTh4k3B7G2hL/de1kYpueVUabKl582QsePovhcC69uP5yg6wn/t/zc8gy8sJ/xaiVgDfVYLgt3Q5WeT0RERESkCm58DZinlcRjFqn3hq6Wrc2kGDoXIf4gOJPDdD/ZSvtznbTHWojvq5TblT4eIO6vp+XdEpVyxk7C9zbR8wlAifS+OK1Pd9K5s5Xm55ILlujl347T0tZJ965WwpFukgUofTJI3F+PO9LN8KeVtrPvdRLe2MrAJyWYnmBvWwutz7TT+mgL3XNlgaldQZrb2unc1Ul8k5c6b5zkQk/q5Bh+rrUS2644LZvaGf6PE+x/cg310R4GX4kTXhdnuATOpwO0R1to3xmnJdrO4ORcnd91YliI88l++n+rk+7AdVKicp7U82Hc/m4myuCcS7E3tob62DClmRzDr/SRnkzRu6uTwU/zpK8pOfyawgSDTwepf3Rg7rO8zufgpOl5tIX25zqJPxqm9RdZHEpM/LKHwZMZhl7ppOf9PFAg9VIrLW3ttMeaaf1JmhIOuffbCd4TZv8kMJMj+VIzXm87qTLkDle2g/ZfDNAZbSL80gScG6YzVtmG4tFW9n86F69l425wY3/b4ToRERERkaXo0qVLplwum3/4h38wC5lNdxhfQ8j05Sq3ix8kTNtbU8Z8dcb0PuwzbcliZcFXGbPnAc/c7SnTv8U20XcuLztuOlb7zZ5Txph8v4ls6DLjXxljzKwZT42b2QWe98yhg2Z81hhjiubgVttEDkwZY4z5/OcRYz+wx2S+mlvxZJeJvXbGGDNrjv/QZ/w/PF5p79QeE7gvYUa/NGb8gxEzZYwxs+NmzwO2ibxxZsHXOr47YHw7Rsxc1GbqnV7Tf9aYqbeixnpwjzk+NWs+Hz5oRotzr/WD4tWYHjtopm4Qwzd8dcb07dhjjn9pTPGdqLE395nPFwoq3WF86y+/X3PPtW2oEuOHHcY3/73I95uIHTMjl9/Qs30mNO/27HDM2Fv6K+/F9T6H2ePm4KHPr7y3/tUd5vhXxpjZEROzI6Y/X1lUHG4zngd7zZmvKo/pWO03XRPGmK9GTJt9dXsx2T0m4EmY0a+MMV+Nm661HhN754wpfjluDh46Y44/67u6nZwdNaNnL78/46ZrQ8wMXf4wRERERES+B246C6K1KUHb6iyDw1mgwMjRWVq2eeB8itFJP5HQ3BCFK0BkUz3po+M3adDCKiTp+0Wa/IxFaGtowZI4/1MJQhaAjbsRZmdmAfBtTxC5OMzgSQdwSCeniGz3QzlHeqxIYNNcOd+GIP6ZDOPnIPREDA+Q+2UPA3TQ+0P/N5+wnGX0aJ7Q1uiVa6Q8T3WRWDsX9r0+gh4L3/YE0ek06XNNhOdeu2+DH3c2yxnn+jFcK//2fqae6CZSqxK7630OVoTEU77KOrYb23FYaEBtfCxNfSiE3wVYTfjXTZE9dSvTiNTjW+fHbgiReMpPvW0x/k4vw58UYG2U6NrL69m473VjqwRRRERERL5HrnO10Pw1AiSeDrD/rUHSbX7SDXEGG4HzRUpli/p5HWS3bVG6WLrxrH+eBP1v5el+LU7Tq26iLw0y+OPQNRNDOOQO72dwYha3G86cdmDj3KLGGInHuki8m6I3AMmZFnpXA+UipWmH3OEeuicASjgBH97LTRaG6XkjT+tbI3OJ3bWmKExbuO15C13WwtdLzRQplfOk3ugm7wJmpvD5g9RzkxguuzjI3lyUvj+tYX3d9T6HwgQDbw6Rt7y4S2nyZd8CD3YolUoUvxik+/kUAFNWEN+3eDmhlwbpfamH3i0+ujYkGHivn9hqwGVhr/bg/i6vUURERERkibl5AsbcqNNrPfTsChJ+eaSSlNhubJfD7Awwl4QVSw52o33TWfZ823oZ2dZLYaybWKyHwSeO07V63grnBkg8f4bu00PEbEieHaDvykKL6M447scGGXzbi/VY/9zzubEbLfzbe+nbdm3aVCL1ag/joT1kH7MBh/x5B9/q+ZF68TQ65AoluNkraHBjW35iL/WRmD/PRjnL6HVjuCp/eJCR9/KMHu4AwHFKlJw0QV+GwdNDxKo06vPNz2EU/6sxBn1pMi/74TMYPbzQqJaFbdu4PQn63ox8fVE5e3tB2CE6Dhyn440cg8+00PFamthbEcBHxzu93/aliYiIiIgsSbf2Q8z3tZLY6pAtBohvmkss1kZpWZ8jPTE33lXOkp6YJbI1DFRmr5s6e7Xz7lyeqW9ykP1HK0Vtnk1Rgo18c5RpeooS9VguAAfn2hq4hxPE16bpOWTTumXu0S4/4ZCbiSOpb/zOlfNJHz2HPXS/lqhMm++Mkzx6TWLh8tOy1Uv6vUFyC9Xczbc6QuS+DMkj32zjejHM53s2Re50luypyt/4K2GsB3pInRwgem3ydY+NNZ0nv9CwoguYWbhE8KYW/BwcStMOljX3npZnv9a25ZqlNHdHeFOY2bEU6W/EZVFvFcjn51Ysc8P4Uj8bIAfQ4Kdls4/6ywum0+x9upPByW/z4kRERERElqaVL7/88l+sWLGCuro66urqrrOahe93LnLa28G//h8uF4Xdyw8euZeTv/g3JE+e4ld/9QG/ifQx8KwfC4v7f2eav/qf/ozX/7dTnP5PF8l/Ns7Z/+8PiGyqI7m7h7/+9xOMvZ+m+C97+PPH7v96EtZ4L86/e50/f+Ovmch8gfN35zgxWaZpc4R1v1N57j8wE5xY9Wf8RfPlAj8X60IbmRnpofvf/BWp9AQT51z4N93Dr9r/Rw793T/FWzrFh8eSDP3sL8n5E8T/+/kFbi7uD4W59/8a4M96/i3J/+NDPjx5mrp/7OY//vUgv/p/HNz/pImg/15cK7wEf1BP+t/8GS8PpkifmOC04yO80Yt/wRjWfb2U7h9ZNPxOw5W/35r8gIEz6+j6YYR7r33rf98L4/vp/ou/4qNPTvPFxbNMnJ7C+8C/4Ad/aPHF+73s/1+zTP3W71IaO8wHY3m+/N37afqnM5x8b4jkWJ7yf3M/f/CPzjJ0aJgPT89wz71/wH+3rsTwi9d+Duu437rIX/3Fy/zl3/wHTv/dJX5zcpwvvGFaHmri7z/7S/YfSHH6Sy+PPvuvaPrPh+h5YT8ffHiCk6cKNPzhD/D9zv3cO5viL/58L8P/7j9wdqrA6Y9zOP/kB/zBf/lrBt8fp/CP7uX+fxbE9zsw/Te76f63Jzn1f/6Kv/7US+dfdLDxvwb+3xSv93wA/yLBo9ebV19ERERE5C5Td+nSJbNy5UouJ2EiIiIiIiJyZ9xaCaKIiIiIiIh8Z0rAREREREREqkQJmIiIiIiISJUoARMREREREakSJWAiIiIiIiJVogRMRERERESkSpSAiYiIiIiIVIkSMBERERERkSpRAiYiIiIiIlIlSsBERERERESqRAmYiIiIiIhIlSgBExERERERqRIlYCIiIiIiIlWiBExERERERKRKlICJiIiIiIhUiRIwERERERGRKlECJiIiIiIiUiWuxWqoUCiQTCa5cOHCYjUJwKpVq4jFYng8nkVtV0REREREpNrqLl26ZFauXMmKFSuoq6v71g0dOHCA9evXEwwGFzE8yGQyTE5OsmvXrkVtV0REREREpNoWrQTxwoULi558AQSDwUUfVRMREREREakFXQMmIiIiIiJSJUrAREREREREqkQJmIiIiIiISJUoARMREREREamSmiRg/+WTo5z4z7V4ZhERERERkdqpSQI2efhlDp66VIunFhERERERqRmVIIqIiIiIiFRJ1RKwS//7c6xfu5rVa1fzrw5d4KN//d+yeu1qVq9/koMqRxQRERERkWXAVa0n+u0/+jmTf/RzAE68+AAHf/DvOdT629V6ehERERERkZpTCaKIiIiIiEiVKAETERERERGpkqqVIM73z1//lH9eiycWERERERGpIY2AiYiIiIiIVIkSMBERERERkSpRAiYiIiIiIlIlSsBERERERESqZNESsFWrVpHJZBaruSsymQyrVq1a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
)

**_NOTE_** Cet exemple ne portant pas sur le style de l'application, vous pouvez appliquer la cinquantaine de lignes de CSS contenu dans *index.css*, ou appliquer votre propre style.

Créons un fichier HTML contenant:
- une &lt;div&gt; englobante (container)
- un bouton "***+***" permettant d'ajouter un utilisateur
- l'élément &lt;table&gt;

  
```
 <div class="row" id="table-ctnr"> <!-- notre Container applicatif-->

    <div class="col s3">
      <button id="create"> <!-- le bouton "ajouter" -->
        +
      </button>
    </div>

    <table class="col s12" id="users-table"> <!-- la table -->

      <thead>
        <th>
          Action
        </th>
        <th>
          Index
        </th>
        <th>
          Nom
        </th>
        <th>
          Prénom
        </th>
        <th>
          Âge
        </th>
      </thead>
      <tbody id="users-table--tbody">
        <tr> 
<!-- 
Notez une rangée permettant d'indiquer qu'il n'y a encore aucun utilisateur 
-->
          <td id="no-result" colspan="4">
            Aucun résultat
          </td>
        </tr>
      </tbody>
    </table>
  </div>
```

Dans le fichier ***index.js***, commençons par importer le code de Unviewed:

`import App from './main.js';`

Puis, créons l'app liée à notre table:

```
let j = 0;

const users_table = new App({

    container: 'table-ctnr', /* <== l'id de notre Container */

    users: [], /* <== le State est très simple, un tableau d'users! */

    /* une seule Action ici, nommée CreateUser */
    createUser({ users }) {
      users.push(
        user_row(
          { id: j++, 
          { nom: 'doe', prenom: 'john', age: 30 },
          parent: users_table
          }
        ));
      App.update(nb_users);
    },

    /* et enfin, en lieu et place de l'élément View ou d'un template habituel, nous trouvons ci-dessous le code JS à appliquer en cas d'évènement */

    events: {
      onclick: actions => ({

        /* ici, c'est très simple:
        si un click survient sur le bouton "+" (dont l'id est "create"),
        on appelle notre action "createUser" */

        '#create': (state) => {
          actions.createUser(state);
        }
      }),

      /* cette partie est peut-être moins compéhensible de prime abord:
      -> lorsque notre action "createUser" sera appelée, on raffraichira la vue HTML en efectuant une série de fonctions sur les élements HTML */
  
      onupdate: () => ({

        /* la rangée indquant que le tableau est vide est affichée / masquée si on a des utilisateurs insérés
        '#no-result': ({ target, users }) => target.classList[users.length ? 'add' : 'remove']('hidden'),

        /* à chaque user ajouté, on insère une rangée dans le tbody notre table */
        '#users-table--tbody': ({ target, users }) => users.forEach(user_row => target.prepend(user_row.container))
      })
    }

  });
```

Et là, normalement... ***ça ne fonctionne pas***!

En effet, nous n'avons pas encore défini comment représenter un utilisateur.

Créons donc une nouvelle *app*, nommée *user_row*:

1. Nous n'avons pas encore représenté, dans notre HTML, ce qu'est un utilisateur.  Bonne nouvelle, la balise &lt;template&gt; est faite pour ça!
2. Idem, en javascript, nous n'avons pas défini la variable *user_row* (notre mini-app supplémentaire).

### HTML 

```
<template>
    <tr>
      <td>
        <button class="del-this"> <!-- le bouton permettant de supprimer cet utilisateur -->
          -
        </button>
      </td>
      <td class="user_id"></td>
      <td class="user_nom"></td>
      <td class="user_prenom"></td>
      <td class="user_age"></td>
    </tr>
  </template>
```

### JS

Nous n'avons pas encore d'utilsateur à présenter. Créons donc une fonction qui génèrera une *app*, en prenant le State en paramètre.

Insérons ce code, avant la déclaration de notre app *users_table*

```
const user_row = (state) => new App({

    /* cette fois, le Container est un élément HTML */
    container: document.querySelector('template'),

    /* le State n'est pas encore connu */ 
    ...state,

    /* là encore, une seule Action, permettant de supprimer un utilisateur lorsque l'on clique sur le bouton "-" */
    
    remove(state) {
      const //
        { parent, entity } = state; /* <== 
        le State contient une référence à l'app courante, mais aussi à l'app parente (la table)! 
        */
      App.remove(entity); // supprime l'app courante
      App.update(parent); // supprime l'app parente
    },

    events: {
      onclick: actions => ({
        '.del-this': actions.remove // click sur le bouton "-"
      }),

      /*
      On peuple les colonnes avec les éléments contenu dans le state passé en paramètre 
      */
      onupdate: () => ({
        '.user_id': ({ target, id }) => target.innerText = id,
        '.user_nom': ({ target, nom }) => target.innerText = nom,
        '.user_prenom': ({ target, prenom }) => target.innerText = prenom,
        '.user_age': ({ target, age }) => target.innerText = age,
      }),
    }

  });
```

Pour finir, affichons un petit récap' du nombre d'utilisateurs insérés:

```
<p id="nb-users">
    Vous avez créé
    <span id="nb">
      0
    </span>
    utilisateur<!--
    no-space 
    --><span id="pluriel"></span><!-- no-space -->!
</p>
```

Créons une mini-app, gérant le nombre d'utilisateur
```
const nb_users = new App({

    container: 'nb-users', /* la balise p dont l'id est "nb-users"

    events: {

      /* 
      aucun évènement "click", "keyup" ou autre, puis qu'il n'y a aucune action possible (pas de bouton) 
      */
      onupdate: () => ({
        '#nb': ({ target }) => target.innerText = users_table.state.users.length,
        '#pluriel': ({ target }) => target.innerText = users_table.state.users.length > 1 ? 's' : ''
      })
    }

  });
```

Vous aurez noté que l'on indique le nombre d'utilisateurs en se basant sur le State de notre table *users_table*!

## Et voilà...

Ce projet n'a aucune prétention, ne veut "concurrencer" aucun framework JS existant. Il s'agit plus pour moi d'une sorte de proof-of-concept que je voulais réaliser depuis quelques temps déjà.

Il s'agit aussi d'un hommage au travail colossal qu'accomplissent les développeurs chaque jours, que ce soit pour réaliser d'énormes et incroyables frameworks (Vue, React, Meteor, Angular, etc...), ou pour apporter sa petite pierre à l'édifice, comme Hyperapp l'a fait en son temps.

Vive l'open source!

