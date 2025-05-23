# Contributing

Thank you for contributing!

<a href="https://github.com/FormidableLabs/victory-native-xl#maintenance-status">
  <img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />
</a>

### Maintainers

- [Grant Sander](https://github.com/gksander)
- [Keith Luchtel](https://github.com/keithluchtel)
- [Carlos Kelly](http://github.com/carloskelly13)

## Development

### Installing dependencies

We use `yarn` for React Native libraries.

Install all dependencies by running:

```sh
$ yarn install
```

### Examples

We have an Expo-based development app in `example`.

To develop the library in unison with the example app you can run:

```sh
# Expo Go-based demo app (in two different terminals)
$ yarn dev:lib
$ yarn dev:example
```

### Build and checks

Our task system mostly takes care of all task dependencies and things you need. When you first clone this repo or a new branch, run:

```sh
# Run all checks. Re-run this command for your normal workflow.
$ yarn check:code

# Run tests
$ yarn test
```

### Before submitting a PR

Thanks for taking the time to help us make Victory Native XL even better! Before you go ahead and submit a PR, make sure that you have done the following:

- Run all checks using `yarn check:code`.
- Add a [changeset](#changeset) if your PR requires a version change for any of the packages in this repo.
- Everything else included in our [pull request checklist](.github/PULL_REQUEST_TEMPLATE.md).

### Changesets

We use [changesets](https://github.com/changesets/changesets) to create package versions and publish them.

If your work contributes changes that require a change in version to any of the packages, add a changeset by running:

```sh
$ yarn changeset
```

which will open an interactive CLI menu. Use this menu to select which packages need versioning, which semantic version changes are needed, and add appropriate messages accordingly.

After this, you'll see a new uncommitted file in `.changesets` that looks something like:

```
$ git status
# ....
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.changeset/flimsy-pandas-marry.md
```

Review this file, make any necessary adjustments, and commit the file to source. During the next package release, the changes (and changeset notes) will be automatically incorporated based on these changeset files.

### Releasing a new version to NPM

<details>
<summary>
<i>Only for project administrators</i>
</summary>

We use [changesets](https://github.com/changesets/changesets) to create package versions and publish them.

Our official release path is to use automation (via GitHub actions) to perform the actual publishing of our packages. The steps are:

1. Developers add changesets, ideally as part of their PR that have version impacts.
2. On merge of a PR with a changeset file, our automation opens a "Version Packages" PR.
3. On merging the "Version Packages" PR, the automation system publishes the packages.

This streamlines releasing too: ensuring PRs have changeset files added as necessary, and approving the "Version Packages" PR generated from GitHub actions to publish a release to all affected packages.

#### Manual Releases

For exceptional circumstances, here is a quick guide to manually publish from a local machine using changesets.

1. Add a changeset with `yarn changeset`. Generate the changeset file, review it, and commit it.
2. Make a version. Due to our changelog formatting package you will need to create a personal token and pass it to the environment.

   ```sh
   $ GITHUB_TOKEN=<INSERT TOKEN> yarn run version
   ```

   Review git changes, tweak, and commit.

3. Publish.

   First, build necessary files:

   ```sh
   $ yarn run build
   ```

   Then publish:

   ```sh
   # Test things out first
   $ yarn -r publish --dry-run

   # The real publish
   $ yarn changeset publish --otp=<insert otp code>
   ```

   Note that publishing multiple pacakges via `changeset` to npm with an OTP code can often fail with `429 Too Many Requests` rate limiting error. Take a 5+ minute coffee break, then come back and try again.

   Then issue the following to also push git tags:

   ```sh
   $ git push && git push --tags
   ```

</details>

## Contributor Covenant Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
  advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at coc@formidable.com. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 2.0,
available [here](https://www.contributor-covenant.org/version/2/0]).


### Links

- [Contributor Covenant](http://contributor-covenant.org)
- [Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct)
- [Formidable Github](https://www.github.com/FormidableLabs)