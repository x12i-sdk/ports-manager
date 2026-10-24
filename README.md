# @x12i/ports-manager usage example

x12i org local port map — zones per mono-repo, avoid lists, default port resolution.

This consuming application demonstrates **resolve a local service port and reject a port outside its zone** using the published npm package, pinned to `1.0.9`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- A consumer needs the following capability: x12i org local port map — zones per mono-repo, avoid lists, default port resolution.
- A Ports integration needs to reuse the capabilities of @x12i/ports-manager inside a larger application.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/ports-manager)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
