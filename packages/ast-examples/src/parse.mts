import { parse as acornParse } from "acorn";

const json_spacing = "  ";

export default function parse() {
  const code = '3.14 * (2 + 3)';
  const ast = acornParse(code, { ecmaVersion: "latest" });

  const jsonifiedAst = JSON.stringify(ast, null, json_spacing);

  return jsonifiedAst;
}