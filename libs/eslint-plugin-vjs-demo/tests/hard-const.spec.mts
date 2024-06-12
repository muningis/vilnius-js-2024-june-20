import { RuleTester } from '@typescript-eslint/rule-tester';
import { hardConst } from '../lib/rules/hard-const.ts';

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run('eslint-plugin-vjs-demo/hard-const', hardConst, {
  valid: [
    {
      code: `const SECONDS_IN_DAY = 86400`,
    },
    {
      code: `const FOO = "bar";`,
    },
  ],
  invalid: [
    {
      code: `const secondsInDay = 86400`,
      errors: [
        {
          messageId: 'issue:bad-pattern',
        },
      ],
    },
    {
      code: `const SECONDS_IN_DAY = 24 * 60 * 60`,
      errors: [
        {
          messageId: 'issue:non-static',
        },
      ],
    },
    {
      code: `function hello() { const greeting = "world!"; return \`Hello, \$\{greeting\}\` }`,
      errors: [{
        messageId: 'issue:must-be-at-root'
      }]
    }
  ],
});