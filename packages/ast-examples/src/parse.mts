import { parse as acornParse } from "acorn";

const JSON_SPACING = "  ";

export default function parse() {
  const code = '3.14 * (2 + 3)';
  const ast = acornParse(code, { ecmaVersion: "latest" });

  const jsonifiedAst = JSON.stringify(ast, null, JSON_SPACING);

  return jsonifiedAst;
}