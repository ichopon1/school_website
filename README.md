# To-Do
To-Do is a simple project that provides you an opportunity to create tasks and manage your diary.

This project was created as a school project using HTML, CSS, JS.

Devs: <br />
Vitalii Andrushko - Junior Game Developer (Unity & Unreal Engine) [Github](https://github.com/ichopon1) <br />
Jaroslav Kibelbek

## How auth system works:
Basically, it's just simplified solution. Website uses JavaScript which provides `localStorage` where we're saving user data. If we'll have a need we can rework auth using PHP and MySQL.

![](https://github.com/ichopon1/school_website/blob/main/1.gif)

## How tasks are managed:
As in auth system, we use `localStorage`. Whenever user creates task it appends this task to array of user tasks `user_tasks: '["user_task"]'`.
To delete task we're just removing task from array.

![](https://github.com/ichopon1/school_website/blob/main/2.gif)

## Others:
- Website has feature to logout from your account. <br />
- It's impossible to get on tasks page without signing in in your account.

To sum up, website uses simple `localStorage` to save accounts and their tasks, but it's only temp storage. As a school project it provides simple and fast solution of making to-do tasks.
