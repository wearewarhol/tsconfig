# Warhol - TypeScript configuration

This module includes our global typescript configuration.

You can install it via

    yarn add --dev @warhol/tsconfig

## Make it work

To make it work your need to do the following:

In `tsconfig.json` add the following:

```json
{
  "extends": "./node_modules/@warhol/tsconfig/tsconfig.json",
}
```

In `tslint.json` add the following:

```json
{
  "extends": "./node_modules/@warhol/tsconfig/tslint.json",
}
```

You can also add a `nodemon.json` file for development:

```json
{
  "ext": "ts,html,js,json",
  "execMap": {
    "ts": "ts-node"
  }
}
```

## License

This project is licensed under [MIT](./LICENSE).
