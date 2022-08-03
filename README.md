# Passphrase Generator

This is a web app that generates passphrases composed of 4 to 12 English words.

It uses the words list from [useapassphrase.com](https://github.com/mike-hearn/useapassphrase/blob/master/js/wordlist.js) and chooses words at random using numbers seeded by `window.crypto`.

The web app is built with React.

## Instructions

To run this web app locally, enter the following commands:

```sh
git clone https://github.com/codewithlemon/passphrase-generator
cd passphrase-generator
npm install
npm run dev -- --open
```

Additionally, enter the command below to generate static files for hosting:

```sh
npm run build
```

Afterwards, you will find the generated files inside the `dist` folder.
