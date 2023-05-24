## Mocha/NYC/Coverall
[![Coverage Status](https://coveralls.io/repos/github/EmilSunden/webb22_alm_cicd/badge.svg?branch=main)](https://coveralls.io/github/EmilSundenwebb22_alm_cicd?branch=main)
[![Tests](https://github.com/EmilSunden/webb22_alm_cicd/actions/workflows/test.yml/badge.svg)](https://github.com/EmilSunden/webb22_alm_cicd/actions/workflows/test.yml)


## Husky
``sh
npm install husky --save-dev
``

Edit package.json > prepare script and run it once
```sh
npm pkg set scripts.prepare="husky install"
npm run prepare
```

Add a hook
```sh
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

Make a commit
```sh
git commit -m "Keep calm and commit"
# `npm test` will run
```

