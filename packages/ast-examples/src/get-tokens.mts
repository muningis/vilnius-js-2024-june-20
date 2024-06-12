import { Token, tokenizer } from "acorn";

const JSON_SPACING = "  ";

export default function getTokens() {
  const code = '3.14 * (2 + 3)';
  const tokens: Token[] = [];
  for (let token of tokenizer(code, { ecmaVersion: "latest" })) {
    tokens.push(token);
  }
  const jsonifiedTokens = JSON.stringify(tokens, null, JSON_SPACING);

  return jsonifiedTokens;
}