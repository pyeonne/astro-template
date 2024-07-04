const Configuration = {
  /*
   * Whether commitlint uses the default ignore rules, see the description above.
   */
  defaultIgnores: true,
  extends: ["@commitlint/config-conventional"],

  formatter: "@commitlint/format",

  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
  /*
   * Array of functions that return true if commitlint should ignore the given message.
   * Given array is merged with predefined functions, which consist of matchers like:
   *
   * - 'Merge pull request', 'Merge X into Y' or 'Merge branch X'
   * - 'Revert X'
   * - 'v1.2.3' (ie semver matcher)
   * - 'Automatic merge X' or 'Auto-merged X into Y'
   *
   * To see full list, check https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts.
   * To disable those ignores and run rules always, set `defaultIgnores: false` as shown below.
   */
  ignores: [(commit) => commit === ""],

  parserPreset: "conventional-changelog-atom",
  /*
   * Custom prompt configs
   */
  prompt: {
    messages: {
      emptyWarning: "can not be empty",
      lowerLimitWarning: "below limit",
      max: "upper %d chars",
      min: "%d chars at least",
      skip: ":skip",
      upperLimitWarning: "over limit",
    },
    questions: {
      body: {
        description: "Provide a longer description of the change",
      },
      breaking: {
        description: "Describe the breaking changes",
      },
      breakingBody: {
        description:
          "A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself",
      },
      isBreaking: {
        description: "Are there any breaking changes?",
      },
      isIssueAffected: {
        description: "Does this change affect any open issues?",
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
      issuesBody: {
        description:
          "If issues are closed, the commit requires a body. Please enter a longer description of the commit itself",
      },
      scope: {
        description:
          "What is the scope of this change (e.g. component or file name)",
      },
      subject: {
        description:
          "Write a short, imperative tense description of the change",
      },
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          build: {
            description:
              "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
            emoji: "�",
            title: "Builds",
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            emoji: "♻️",
            title: "Chores",
          },
          ci: {
            description:
              "Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
            emoji: "⚙️",
            title: "Continuous Integrations",
          },
          docs: {
            description: "Documentation only changes",
            emoji: "�",
            title: "Documentation",
          },
          feat: {
            description: "A new feature",
            emoji: "✨",
            title: "Features",
          },
          fix: {
            description: "A bug fix",
            emoji: "🐛",
            title: "Bug Fixes",
          },
          perf: {
            description: "A code change that improves performance",
            emoji: "🚀",
            title: "Performance Improvements",
          },
          refactor: {
            description:
              "A code change that neither fixes a bug nor adds a feature",
            emoji: "📦",
            title: "Code Refactoring",
          },
          revert: {
            description: "Reverts a previous commit",
            emoji: "🗑",
            title: "Reverts",
          },
          style: {
            description:
              "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
            emoji: "�",
            title: "Styles",
          },
          test: {
            description: "Adding missing tests or correcting existing tests",
            emoji: "🚨",
            title: "Tests",
          },
        },
      },
    },
    settings: {},
  },
};

export default Configuration;
