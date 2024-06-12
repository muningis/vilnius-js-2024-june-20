require('ts-node').register({ transpileOnly: true, compilerOptions: { moduleResolution: 'NodeNext' } });
const rules = require('./rules/index.ts').rules;

module.exports = {
  meta: {
    name: 'eslint-plugin-vjs-demo',
    version: '0.0.1',
  },
  rules: rules
};