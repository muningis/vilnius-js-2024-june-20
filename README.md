# Vilnius JS // 2024 June 20th // Demo

## Requirements

- [turborepo](https://turbo.build/repo/docs/getting-started/installation#installing-turbo) (Optional)
- [bun](https://bun.sh/) - to easily run typescript files without build step. Alternatively, ts-node can be used.

## Running examples

### Tokenizer
Tokenizer example - displays how provided code (hardcoded in [get-tokens.mts](./packages/ast-examples/src/get-tokens.mts)) is tokenized by using [acorn](https://github.com/acornjs/acorn)


#### With `turbo` installed
```sh
turbo runner -- --script=get-tokens
```

#### With `bun`
```sh
cd packages/ast-examples/ \
bun ./index.mts --script=get-tokens
```

### Parser
Parser example - displays how provided code (hardcoded in [parse.mts](./packages/ast-examples/src/parse.mts)) is parsed into AST by using [acorn](https://github.com/acornjs/acorn)


#### With `turbo` installed
```sh
turbo runner -- --script=parse
```

#### With `bun`
```sh
cd packages/ast-examples/ \
bun ./index.mts --script=parse
```
