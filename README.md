# simplest-ember-data-crud

A demo app for a tutorial I wrote called
["The simplest possible Ember Data CRUD"](https://medium.com/@jenweber).

This app does not represent best practice for architecture. It's the minimum
number of files needed to demonstrate CRUD - a starting place if you're confused
by what Ember Data is and how it works.

This app does not connect to a back end. However, using an ember-cli feature
called http-mock, I created a fake server that CRUD requests go to.
That means you can run the project locally and see the network requests and
responses in the Chrome Inspector's Network tab. The entire "server" folder is
not part of a normal Ember app - it's the mocked, fake server. All records will
disappear on refresh.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd simplest-ember-data-crud`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
