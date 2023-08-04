# ALPHA

This repository is a pwa project for analog meters.

## COPYRIGHT

Copyright (c) 2023 Rxxuzi. See [LICENSE](LICENSE) for details.

## 環境

+ npm : 9.5.1

## Archive

[JSlog](archive) is an archive of past JavaScript/TypeScript files that are no longer in use.

## Getting Start

To clone this project, execute the following command

~~~shell
 git clone https://github.com/rxxuzi/pwa-alpha
~~~

## Page Description



| Page Title               | Description                                  |
|--------------------------|----------------------------------------------|
| [index](index.html)      | This is the first page you will be redirected to<br/>You can enter your password and go to the Edit page. |
| [edit](FinalEdit.html)   | This page allows you to set or change the upper limit and meter name                     |
| [index](FinalIndex.html) | This page allows you to check meter status, current values, etc.                  |

## Server Runner

The following is a script that copies the repository to Apache htdocs and starts the server

Make sure that the directory tree is as follows and execute. 
If the tree structure is different, edit the following **[Runner](future/server-runner.sh) file**.

~~~bash
bash ./future/server-runner.sh
~~~