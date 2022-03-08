# March 8, 2022

## Dev Workflow
### Dev tools used so far
  * vscode, notepad++, sublime, atom, etc.
  * node, npm <-- backend (NODE), frontend (JS); node exists on both backend and frontend>
  * eslint
  * Google (searching)
  * prettier
  * mdns (docs)
  * terminal
  * git
  ### ---------------- GIT -------------------
  Version Control Software
  Collab tool

  Powerful tool to track all changes throughout a project.

  #### Git vs. GitHub
  Git is a program that is built into terminal to do source control.  
  GitHub is a service to store all git code management.

  Bitbucket is an alternative to GitHub.

## Git Workflow
* make repo
  - `git init` // initializes an empty repo

* `git status` checks if there are changes to the file(s) in the working directory

* `git diff` shows changes made in the current working directory.

* git add 
  - Adds a files into staging to save permanently
  - `git add <filename>`

* git commit
  - `git commit -m "description"` 
  - `git log` will show all current commits

* git push
- `git push origin master`
- `git push origin main`

* git branch
- `git branch -M main` means the same as Master branch // simply a way to rename the branch
- `git branch` creates a new branch //not going into this today

#### ------- TIPS FOR GIT ---------
- Commit often
-`git add _file_names`
-`git commit -m "_commit_message_"`
- present tense commit messages are common, but every company has their own style for commit messages
- If you want to use `main` instead of `master` you need to commit the file first before changing the name of the brach to `main`
- Don't change history, accept your past and change your future

## Make a Small Program