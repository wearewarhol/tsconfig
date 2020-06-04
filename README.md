# Warhol - TypeScript configuration

This module includes our global typescript configuration.

You can install it via

    yarn add --dev @warhol/tsconfig

## Make it work

To make it work your need to do the following:

In `tsconfig.json` add the following:

```json
{
  "extends": "./node_modules/@warhol/tsconfig/tsconfig.json"
}
```

In `.eslintrc.js` add the following:

```js
module.exports = {
  extends: ["./node_modules/@warhol/tsconfig/eslint-react"],
};
```

You can also add a `nodemon.json` file for development, like [here](./examples/nodemon.json).

## License

This project is licensed under [MIT](./LICENSE).
