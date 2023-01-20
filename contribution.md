## Contribution Guide

### Setting up the project locally
1. Clone the repo using `git clone git@github.com:teamOjasNith/ojas-frontend.git`
2. Move to the project directory using `cd ojas-frontend`
3. Run `npm install`
4. Run `npm start`

## How to add you changes
1. Create a new issue on GitHub, describing in brief the feature/issue you are working on.
2. Update/Sync your local repo using: `git fetch origin` + `git checkout main` + `git rebase origin/main`
3. Create a new branch for each issue or feature you work on, using:
   `git checkout -b branch-name`
3. Make your changes
4. Review your changes using: `git status` and `git diff`
5. Stage your changes using: `git add filename` or (shortcut to stage all the files" `git add .`)
6. Commit your changes: `git commit`

Note: Avoid using `git commit -m`

After the previous step, an editor will open to write your commit message.
Make sure to follow these instructions while writing commit message.
* The first line of the commit message should be a short descriptive title. For e.g. : **Add logo in navar.**
* A blank line
* A descriptive message of **why and how the change was made**
* A blank line
* Add the following text: "Fixes: #issue_number"

7. Push your changes using: `git push origin branch_name`
8. Someone will review your PR and merge it to main.
9. After getting 7 of your PRs merged, ping me for a party ;) (ps: Typo won't be counted as a PR)

### Important: Never push your changes directly to `main` branch. 