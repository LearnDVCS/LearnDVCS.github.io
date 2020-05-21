---
title: Command-Line Control
---
# Command-Line Control

If you are not used to working within the command prompt, it can take a while to become comfortable working with git. An excellent on-line introduction to using command-line git is hosted at [try.github.com](http://try.github.com/). Another good play to learn about git is the [Git-Real course at CodeSchool](https://www.codeschool.com/courses/git-real).

## Core git Commands

If you use git via the command-line, you will find that the commands you use most frequently are the following:

- **`git init`** – This command is used to initialize (set up) a git repository in the current directory. When a git repository is set up, there will be a hidden folder named ".git" that contains all the history of commits for the repository.
- **`git add .`** – This command is used to stage un-tracked and modified files for a commit. If a file is not being tracked (and is not listed in .gitignore), this command will mark the file as a new item for the repository to track. If a file has been modified, then this command will mark it as ready to be committed.
- **`git status`** – This command is used to give you the status of your code repository. It gives you information about what files are new, modified and deleted.
- **`git commit -m "message"`** – The commit command is used to save staged files to the repository. When a commit occurs, all of the files staged for committal are compared against the last commit, and the changes between them becomes the new commit. Additionally, the user is identified for the commit (typically by a user name and e-mail) - this is called ***blame***.
- **`git pull`** – This command is used to get a remote repository and merge it with the local repository. Remote repositories are typically hosted online.
- **`git push`** – This command is used to take the local repository and send/merge it with a remote repository.

These are just a few of the commands available in git. For a good introduction to using git commands, see the resources at [**try.github.com**](http://try.github.com/).

## Initialize a Repository



## Status

## Pull Changes from Online

## Stage Changes using Git Add

## Commit Your Changes

## Push to the Cloud
