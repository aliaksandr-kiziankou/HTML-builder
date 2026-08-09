# HTML builder

---

## Task: https://github.com/rolling-scopes-school/tasks/blob/master/stage0.5%20Bootcamp/tasks/html-builder/README.md

## Done 09.08.2026 / deadline 10.08.2026

## Score: 390 / 390

### 01 - Read a file (40 points)
- [x] Running `node 01-read-file` from the repository root prints the contents of `01-read-file/text.txt` to the console **+20**
- [x] File reading is implemented with **ReadStream**; no synchronous `fs` calls are used **+20**

### 02 - Write console input to file (50 points)
- [x] Running `node 02-write-file` creates a file inside `02-write-file/` and prints a prompt **+10**
- [x] Each line entered by the user is **appended** to that file (previous content is preserved) **+15**
- [x] The process keeps waiting for further input after each write **+5**
- [x] Typing `exit` prints a farewell message and terminates the process **+10**
- [x] Pressing `Ctrl + C` prints a farewell message and terminates the process **+10**

### 03 - Files in folder (50 points)
- [x] Running `node 03-files-in-folder` lists files from `03-files-in-folder/secret-folder` to the console **+15**
- [x] Each line is formatted as `<file name> - <extension> - <size>` **+20**
- [x] Subdirectories are **not** listed; only files directly inside `secret-folder` appear **+15**

### 04 - Copy a directory (70 points)
- [x] After running `node 04-copy-directory`, the `files-copy` folder exists and exactly mirrors the contents of `files` **+30**
- [x] Rerunning the script after files are added/modified inside `files` updates `files-copy` accordingly **+20**
- [x] Rerunning the script after files are **removed** from `files` also removes them from `files-copy` **+20**

### 05 - Merge styles (45 points)
- [x] After running `node 05-merge-styles`, `project-dist/bundle.css` exists and contains the concatenated contents of every `.css` file inside `styles` **+20**
- [x] Files with extensions other than `.css` and any subdirectories inside `styles` are ignored **+10**
- [x] Rerunning the script overwrites `bundle.css` with the up-to-date content of `styles` **+15**
  
### 06 - Build page (final, 135 points)
- [x] After running `node 06-build-page`, the `project-dist` folder is created and contains `index.html`, `style.css`, and an `assets/` folder **+20**
- [x] `index.html` is built by substituting every `{{component-name}}` tag in `template.html` with the contents of `components/<component-name>.html` **+35**
- [x] `style.css` is a bundle of all `.css` files from the `styles` folder **+20**
- [x] `assets/` is an exact copy of `06-build-page/assets/` **+20**
- [x] The original `template.html` is not modified by the script **+10**
- [x] Two template tags written on the same line separated only by spaces (e.g. `{{about}} {{articles}}`) are processed as separate components without errors **+10**
- [x] Rerunning the script after a new component is added to `components/` and its tag is added to `template.html` correctly updates `project-dist/index.html`. Changes inside `styles/` and `assets/` are also picked up **+20**
  
  

> **Penalties**
>
> - A third-party module is used in any subtask **-390**
> - A synchronous `fs` function is used in any subtask **-40** (per subtask, up to **-240**)
> - `setTimeout()` is used **-30**
> - `fsPromises.cp()` is used in task 04 or task 06 **-40** (per subtask)
> - The repository is not publicly accessible at the time of cross-check **-390**

### Objectives:

The main goal of this series of tasks is to understand the basics of working with the **Node.js** platform.
You are offered to complete a series of small tasks with a gradual increase in complexity. The final touch will be the creation of a small application for building a static website.

Please note that most tasks can be accomplished in multiple ways, and at this stage, there are no incorrect approaches. Only the functionality of your code and adherence to the specified conditions will be evaluated.

---

## Execution process

- Click on the green button `Use this template`
- In the dropdown, choose the option `Create a new repository`
- Enter the repository name (preferably name it **HTML-builder**)
- Leave its visibility as **public**
- Click the `Create repository` button
- Send the link to the created repository to `Cross-Check: Submit` in RS App
- Clone the created repository
- Run the command `npm install` to install eslint, prettier and node.js typings that will assist you in completing the tasks
- Complete the tasks. The specifications for each task are in the `README.md` file inside the task folder
- Push the solution to your repository

## Crosscheck

The process for cross-checking is detailed in the repository's wiki.  
Once the cross-check begins, access the guidelines by following [this link](https://github.com/rolling-scopes-school/HTML-builder/wiki) and adhere to the instructions provided on the page.

### General Rules

- The use of any third-party modules is strictly prohibited.
- Each task must be executed <u>in the root directory</u> using the command `node <task folder name>`.
- Utilizing synchronous functions from the **fs module**, such as `fs.statSync(path[, options])`, `fs.readFileSync(path[, options])`, and others found in the [Synchronous API section](https://nodejs.org/api/fs.html#fs_synchronous_api), is not allowed.
- The use of the `setTimeout()` function is forbidden.
- Task execution and verification should be carried out on the **LTS** version of Node.

## Table of Contents

[01 Reading a File with Console Output](https://github.com/rolling-scopes-school/HTML-builder/blob/main/01-read-file)  
[02 Writing Console Input to File](https://github.com/rolling-scopes-school/HTML-builder/blob/main/02-write-file)  
[03 Displaying Information about Files Stored in a Folder](https://github.com/rolling-scopes-school/HTML-builder/blob/main/03-files-in-folder)  
[04 Copying a Directory](https://github.com/rolling-scopes-school/HTML-builder/blob/main/04-copy-directory)  
[05 Building the CSS Bundle](https://github.com/rolling-scopes-school/HTML-builder/blob/main/05-merge-styles)  
[06 Building an HTML Page from Components and Styles](https://github.com/rolling-scopes-school/HTML-builder/blob/main/06-build-page)
