---
title: Git Started
---
# Git Started

You've got your [software installed](../GitReady/ReadMe.md)? Great! Now what? You can try the basics of working with git by creating a simple repository project as your personal "training ground".

> For this walkthrough, you will need a text editor to work with the content of your repo; I'm going to assume that you have installed [Visual Studio Code](https://code.visualstudio.com).

#[repo]: Repository

## Create a git Repo

Every git repo should have a couple of key files present:

- **`.gitignore`** - to identify files/folders whose content you do **not** want to track in your repository.
- **`.gitattributes`** - to smooth out the subtle differences that can occur when using text-based files on different operating systems.

The contents of the `.gitignore` file will differ gretly based upon the kinds of files you will be working with in your repo. A great location to generate your `.gitignore` file is [gitignore.io](https://gitignore.io). Likewise, you can go to [gitattributes.io](https://gitattributes.io) to generate the content for your `.gitattributes` file. For our purposes, I'll show you the minimal content you need for these two files. 

::: warning
Strictly speaking, you don't *have* to have these files; but you will save yourself a lot of grief if you automatically include these right away whenever you create a new repository.
:::

1. Create an empty folder on your computer as the location of your new git repo.
1. In [Visual Studio Code](https://code.visualstudio.com), choose *File &rarr; Open Folder&#8230;* and select the folder that you created.
 
    ![Open Folder](./vs-open-folder.png)

1. Next, choose *File &rarr; New File* to create a new file and give it the name `.gitignore` (note the period in front of the file name).

    ![New File](./vs-new-file.png)

1. Depending on your operating system (Windows vs Mac OS), enter the following in your `.gitignore` file.
    - <details><summary>Windows</summary>

        ```shell
        ### Windows ###
        # Windows thumbnail cache files
        Thumbs.db

        # Folder config file
        [Dd]esktop.ini

        # Recycle Bin used on file shares
        $RECYCLE.BIN/

        # Windows shortcuts
        *.lnk
        ```

        </details>

    - <details><summary>Mac OS</summary>

        ```shell
        ### macOS ###
        # General
        .DS_Store
        .AppleDouble
        .LSOverride

        # Icon must end with two \r
        Icon

        # Thumbnails
        ._*
        ```

        </details>

1. Once again, choose *File &rarr; New File* to create a new file and give it the name `.gitattributes` (note the period in front of the file name). Give it the following content.

    ```shell
    # Auto detect text files and perform line-feed (LF) normalization
    * text=auto
    ```

At this point, we have some files and a folder for our repo. It's not actually a git repository yet, however. To make it a repo we have to **initialize** the folder. Then, we can **commit** our new files as the first "snapshot" of our repository's content. You can do this in various ways, depending on the [tools](../GitReady/install.md) you've installed.

<details open><summary>Visual Studio Code</summary>

1. Select the git tag - ![git tag](./vs-git.png) - and click on the **Initialize** button to set up your folder as a git repository.

    ![Initialize](./vs-initialize-rep.png)

1. Next, enter a short message about your first commit and click the checkmark to commit the changes.

    ![Commit](./vs-commit.png)

</details>

<details open><summary>GitHub Desktop</summary>

</details>

<details open><summary>GitKraken</summary>

</details>

1. Create a repository
1. Add a ReadMe file
1. Commit your changes
1. Add two more files: .gitattributes + .gitignore
1. Commit
1. Write a "Bio" in Markdown

```markdown
# Hugh's Bio

![](https://randomuser.me/api/portraits/men/61.jpg)

Hi! My name is **Hugh Mann**. I'm a software engineer with AppSoft, where I create Cross-Platform Optimal Middleware. I've been in the industry since 2005, creating everything from Aggregate Interactive Deliverables to Indie Games. Most of my work today is done in F++, though I am also proficient in SQRL.

## Work History

- **2005-2007** - Sawayn Ltd.
  - Re-Engineered Multimedia Conglomeration
  - References: [Inigo McDermott](mailto://imcdermott@ruecker.com)
- **2008-2012** - Von-Hoeger
  - Organic Leadingedge Software
  - References: [Yanny Undertown](mailto://yundt.willow@nienow.com)
- **2012-2017** - Reilly-Erdman
  - Monitored Client-Server Opensystem
  - References: [Karl Mante](mailto://kmante@parker.com)

```

where should you begin learning how to work with git? Well, that depends....

If you're the type that likes to get your hands on the tools, then a 

- [ ] Set up a Git Repository
  - [ ] Your First Commit
- [ ] Add some content (and commit)
- [ ] Synchronize with GitHub

----

Resources:

- [GitHub Learning Labs](https://lab.github.com)
  - [First Day on GitHub](https://lab.github.com/githubtraining/paths/first-day-on-github)
  - [First Week on GitHub](https://lab.github.com/githubtraining/paths/first-week-on-github)
  - [http://try.github.io/](http://try.github.io/) (learn by reading vs learn by doing)
- Video Resources
  - [Git Tutorial for Beginners: Command-Line Fundamentals](https://www.youtube.com/watch?v=HVsySz-h9r4) (**30 min**)
  - [Git & GitHub Crash Course For Beginners](https://youtu.be/SWYqp7iY_Tc) by Traversy Media (**32 min**)
- GitKraken
  - [Resources for Students](https://www.gitkraken.com/student-resources#get-started)
  - [Resources for Teachers](https://www.gitkraken.com/teacher-resources#get-started)
  - [GitKraken Cheat Sheet](https://www.gitkraken.com/downloads/gitkraken-cheat-sheet-jun19.pdf)
  - [GitKraken for GitHub Cheat Sheet](https://www.gitkraken.com/downloads/gitkraken-for-github-cheat-sheet-v3.pdf)
  - [GitKraken Git Client Tutorial For Beginners](https://youtu.be/ub9GfRziCtU) (video **6 min**)
  - [How to Use GitHub with GitKraken](https://www.youtube.com/watch?v=f0y_xCeM1Rk) (video **30 min**)
  - [Learn Git with GitKraken](https://www.gitkraken.com/learn-git)
