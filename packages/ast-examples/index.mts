import { parseArgs } from "util";

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    script: {
      type: 'string',
    }
  },
  strict: true,
  allowPositionals: true,
});

switch (values.script) {
  case "get-tokens": {
    const { default: getTokens } = await import("./src/get-tokens.mts");
    const result = getTokens();
    console.log(result);
    break;
  }
  case "parse": {
    const { default: parse } = await import("./src/parse.mts");
    const result = parse();
    console.log(result);
    break;
  }
}