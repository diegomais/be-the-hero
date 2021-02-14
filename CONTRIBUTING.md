# Contributing

When contributing to this repository, consider the following guidelines:

## Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Be sure that an **issue** describes the problem you're fixing, or documents the design for the feature you're adding. Discussing the design upfront helps to ensure that we're ready to accept your work.

2. Make your changes in a new git branch:


     ```shell
     git checkout -b type/my-branch dev master
     ```

3. Create your patch.

4. Follow our [Coding Rules](#coding-rules).

5. Commit your changes using a descriptive commit message that follows our commit message conventions:

     ```shell
     git commit -a
     ```

6. Push your branch to GitHub:\

     ```shell
     git push origin type/my-branch
     ```

7. In GitHub, send a pull request to repo:dev.

8. At this moment you are waiting somebody review the Pull Request. The reviewer may suggest some changes or improvements or alternatives.

## Branch types

When creating a branch you must define the name of the branch following the pattern below.

- dev: The integration branch for feature work and is often the default branch. For pull request workflows, the branch where new feature branches are targeted.

- master: Used for deploying a release. Branches from, and merges back into, the development branch. It is used to prepare for a new production release.

- feature/: Used for specific feature work or improvements. Branches from, and merges back into, the development branch, using pull requests.

- release/: Used for release tasks and long-term maintenance versions. They are branched from the development branch and then merged into the production branch.

- bugfix/: Typically used to fix Release branches.

- hotfix/: Used to quickly fix a Production branch without interrupting changes in the development branch. Changes are usually merged into the production and development branches.

The branch name needs to begin with the prefix described above and be followed by a short description of the issue. E.g.:

     feature/add-new-user
     
## Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

We follow [Airbnb JavaScript Style Guide() {](https://airbnb.io/javascript/).

## Commit Message Format

This specification is inspired by [Conventional Commits](https://www.conventionalcommits.org/), a specification for adding human and machine readable meaning to commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.

The commit message should be structured as follows:

### Commit Message Header

```shell
<type>(<scope>): <description>
  │       │             │
  │       │             └─⫸ Short summary in present tense.
  │       │                  Not capitalized.
  │       │                  No period at the end.
  │       │
  │       └─⫸ A scope may be provided to a commit’s type,
  │            to provide additional contextual information
  │            and is contained within parenthesis.
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

#### Type

Must be one of the following:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: a bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

#### Scope

A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., `fix(parser):`

#### Description

Use the description field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain *why* you are making the change. You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

### Commit Message Footer

The footer can contain information about breaking changes and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.

```shell
fix: correct minor typos in code
<BLANK LINE>
see the issue for details
<BLANK LINE>
on typos fixed.
<BLANK LINE>
<BLANK LINE>
Reviewed-by: Z
Fixes #<issue number>
```

Note: When you submit your pull request, GitHub will detect and link the reference in the footer to the appropriate issue. Once your commit is merged into repo:master, GitHub will automatically close the referenced issue. See [Closing issues via commit messages](https://help.github.com/en/articles/closing-issues-via-commit-messages) for details.

### Revert commits

If the commit reverts a previous commit, it should begin with `revert:` , followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

## Commit discipline

We follow the Git project’s own commit discipline practice of ***"Each commit is a minimal coherent idea"***. This discipline takes a bit of work, but it makes it much easier for code reviewers to spot bugs, and makes the commit history a much more useful resource for developers trying to understand why the code works the way it does, which also helps a lot in preventing bugs.

Commits must be coherent:

- It should pass tests (so test updates needed by a change should be in the same commit as the original change, not a separate “fix the tests that were broken by the last commit” commit).
- It should be safe to deploy individually, or explain in detail in the commit message as to why it isn’t (maybe with a [manual] tag). So implementing a new API endpoint in one commit and then adding the security checks in a future commit should be avoided – the security checks should be there from the beginning.
- Error handling should generally be included along with the code that might trigger the error.
- TODO comments should be in the commit that introduces the issue or the functionality with further work required.

Commits should generally be minimal:

- Significant refactorings should be done in a separate commit from functional changes.
- Moving code from one file to another should be done in a separate commits from functional changes or even refactoring within a file.
- 2 different refactorings should be done in different commits.
- 2 different features should be done in different commits.
- If you find yourself writing a commit message that reads like a list of somewhat dissimilar things that you did, you probably should have just done multiple commits.

When not to be overly minimal:

- For completely new features, you don’t necessarily need to split out new commits for each little subfeature of the new feature. E.g., if you’re writing a new tool from scratch, it’s fine to have the initial tool have plenty of options/features without doing separate commits for each one. That said, reviewing a 1000-line giant blob of new code isn’t fun, so please be thoughtful about submitting things in reviewable units.
- Don’t bother to split backend commits from frontend commits, even though the backend can often be coherent on its own.

Other considerations:

- Overly fine commits are easy to squash later, but not vice versa. So err toward small commits, and the code reviewer can advise on squashing.
- If a commit you write doesn’t pass tests, you should usually fix that by amending the commit to fix the bug, not writing a new “fix tests” commit on top of it.

We expects you to structure the commits in your pull requests to form a clean history before we will merge them. It’s best to write your commits following these guidelines in the first place, but if you don’t, you can always fix your history using `git rebase -i` (more on that [here](https://docs.github.com/en/github/committing-changes-to-your-project/changing-a-commit-message#rewriting-the-most-recent-commit-message)).

Never mix multiple changes together in a single commit, but it’s great to include several related changes, each in their own commit, in a single pull request. If you notice an issue that is only somewhat related to what you were working on, but you feel that it’s too minor to create a dedicated pull request, feel free to append it as an additional commit in the pull request for your main project (that commit should have a clear explanation of the bug in its commit message). This way, the bug gets fixed, but this independent change is highlighted for reviewers. Or just create a dedicated pull request for it. Whatever you do, don’t squash unrelated changes together in a single commit; the reviewer will ask you to split the changes out into their own commits.

It can take some practice to get used to writing your commits with a clean history so that you don’t spend much time doing interactive rebases. For example, often you’ll start adding a feature, and discover you need to do a refactoring partway through writing the feature. When that happens, we recommend you stash your partial feature, do the refactoring, commit it, and then unstash and finish implementing your feature.
