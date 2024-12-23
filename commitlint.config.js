/**
 * @fileOverview Commitlint Configuration
 * @module CommitlintConfig
 */

/**
 * Configuration for commitlint to enforce conventional commit messages.
 * @exports CommitlintConfig
 * @type {Object}
 * @property {string[]} extends - An array specifying the shareable commitlint configuration to extend.
 * @property {Object} rules - An object defining custom rules for commitlint.
 * @property {number[]} rules.type-enum - A rule specifying the allowed commit message types.
 *   - 0: Disable the rule
 *   - 1: Enable the rule as a warning
 *   - 2: Enable the rule as an error
 * @property {string} rules.type-enum[1] - The enforcement level for the "type-enum" rule, set to "always."
 * @property {string[]} rules.type-enum[2] - An array containing the allowed commit message types.
 *   - Possible values: "build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test", "modify"
 * @property {number[]} rules.type-case - A rule specifying the case for the commit message type.
 *   - 0: Disable the rule
 *   - 1: Enable the rule as a warning
 *   - 2: Enable the rule as an error
 * @property {string} rules.type-case[1] - The enforcement level for the "type-case" rule, set to "always."
 * @property {string} rules.type-case[2] - The case for the commit message type, set to "lower-case."
 * @property {number[]} rules.type-empty - A rule specifying whether the commit message type can be empty.
 *   - 0: Disable the rule
 *   - 1: Enable the rule as a warning
 *   - 2: Enable the rule as an error
 * @property {string} rules.type-empty[1] - The enforcement level for the "type-empty" rule, set to "never."
 * @example
 *  Example commit messages:
 *   - feat: add new feature
 *   - fix: resolve a bug
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'modify'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
};
