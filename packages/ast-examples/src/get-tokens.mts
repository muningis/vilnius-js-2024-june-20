import { Token, tokenizer } from "acorn";

const JSON_SPACING = "  ";

const MINUTES_IN_DAY = 24 * 60;

export default function getTokens() {
  let code = '3.14 * (2 + 3)';
  let tokens: Token[] = [];
  for (let token of tokenizer(code, { ecmaVersion: "latest" })) {
    tokens.push(token);
  }
  let jsonifiedTokens = JSON.stringify(tokens, null, JSON_SPACING);

  return jsonifiedTokens;
}
