---
title: 11ty and Github-Pages
tags: 
    - 11ty
source: 
    - https://www.linkedin.com/pulse/eleventy-github-pages-lea-tortay/
---
Maybe you've already noticed, i'm a eleventy js fan. It’s my answer to everything right now. Ok not everything, but, I mean, most of the time that’s the best way to go. Last week, my friend, who have a GitHub pages site told me she was having trouble with updating her Jekyll theme… She asked me if I could help her. My first thought was… wait for it… Eleventy!

[GitHub Pages](https://pages.github.com/) is a free way to make a website based on a GitHub repo. You can add a simple **index.html** file or use one of their Jekyll theme. For the eleventy part, i am presuming that you already know eleventy js. If not [go check it out](https://www.11ty.dev/).

The first thing I did was to search on google if anyone had already tried to do it and checked what was possible.

### The most used (deploy key, actions and gh-pages)

1. Create a local repo
2. Create an eleventy structure.
3. Tell GitHub you don't want to use Jekyll by adding a **.nojekyll** empty file at the root of the project folder.
4. Add a scripts command in your **package.json** file to run eleventy.
5. Add a workflow file (actions script) so every time you push your master branch it tells GitHub to do some stuff before publishing.
6. Create a deploy key for your repo to use your action script.

Ok! So, first parts are pretty easy, create a project folder and create an empty file called **.nojekyll** at the root of this project folder.

Then in **package.json** file, add a script to build eleventy that you can use later inside your workflow file.

**package.json**

```
[...]
"scripts": {
    "build": "eleventy"
},

```

```
[...]

```

Please note that you have to push your **package.json** AND **package-lock.json** files. If not, the deploy will fail.

After that, you need to create a workflow file from the root of your project folder with this path **.github/workflows/eleventy_build.yml** (you can call the file whatever you want, only the path and extension matter). You can do this from GitHub directly, click on your repo actions tabs then "set up a workflow yourself" link.

**eleventy_build.yml**

```
name: Eleventy Build

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
        - uses: actions/checkout@v2

        - name: Setup Node
          uses: actions/setup-node@v1
          with:
            node-version: '10.x'

        - run: npm ci

        - run: npm run build

        - name: Deploy
          uses: peaceiris/actions-gh-pages@v3
          with:
            deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}

```

```
            publish_dir: ./dist

```

You can read about [how to create a workflow file](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#creating-a-workflow-file) on GitHub documentation page, and check the exemple from gh-pages [action for static sites generator](https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-static-site-generators-with-nodejs).

In this file, everytime there is a push on the project master branch, it has to do some "jobs" before deploying. It use other workflow files inside the jobs part such as **gh-pages** actions.

You can see a list of actions in your repo actions tabs and use them, just like npm packages.

So for exemple here i used [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) as described in their page, "This is a GitHub Action to deploy your static files to GitHub Pages", well that's exactly what we want to do !

The build file ask to install the npm packages then run the build scripts (the one you add in your package.json file) then deploy the **publish_dir** here the **dist** folder in a gh-pages branch. You don't need to create a gh-pages branch yourself, it will create it on the first run of this build file.

The **deploy_key** line is the last step. You need to create an **ACTIONS_DEPLOY_KEY** (or whatever you want to call it).

So in your project repo settings tabs, go to Deploy keys on the left menu. In your terminal run this command

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""

```

You will get 2 files **gh-pages.pub** (public key) and **gh-pages** (private key).

Add your public key first then go to Secrets on the left menu and add your private key.

If it's not clear check this [step by step guide to create SSH deploy key](https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-create-ssh-deploy-key). That's the one i followed.

Now, you're able to add some eleventy content then add it and push it on your master branch.

If the deploy fail, it will send an email with a link to your repo actions tab that will tell what went wrong. Most of the time, in my opinion, it's very well explain why it doesn't work. I didn't run into something that i couldn't understand.

### The solution i used (docs folder)

1. Create a repo on your GitHub account with anything but a README file
2. Clone your repo on your local
3. Tell GitHub that you don't want to use Jekyll. So you have to add a **.nojekyll** empty file at the root of your project folder .
4. Adjust your eleventy config by telling that our output folder should be **docs**

**.eleventy.js**

```
module.exports = {
    dir: {
        input: "src",
        output: "docs"
    }

```

Push your master branch and that's it !

I prefer this way. It's straightforward and looks like all my others eleventy projects. You should choose the one that suits best your needs but to me the simplicity of eleventy makes his beauty so i was pleased to find an easy solution since it's Github pages way of working with content AND it is possible thanks to eleventy configuration file.

### Domains

If you have a custom domain name then you can [use it and redirect](https://docs.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site) your repo to it.

Only repo with an index.html at the root of the folder can access directly to https://userName.github.io/ address and master will always be your source branch.

Others, like my demos, will have this kind of url https://userName.github.io/yourRepoName

To find out at which url your repo is available you have to check in the settings tab, then under Github pages section "Your site is ready to be published at [...]"

I guess the last solution will be to push on GitHub only the output of the **dist** or **docs** folder so you can have a nice free url as userName.github.io but it's up to you whatever your needs are or your team access...

I hope this post helped you understand the way GitHub pages works and how you can managed to use eleventy with it.

Here are the main sources that i have checked.

- [eleventy issues](https://github.com/11ty/eleventy/issues/359#issuecomment-523430571)
- [github-pages-action](https://github.com/marketplace/actions/github-pages-action)
- [deploying-my-eleventy-site-to-github-pages](https://iamdanielmarino.com/posts/deploying-my-eleventy-site-to-github-pages/)
- [creating-a-github-pages-site](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site)

I did a lot of trying between branches and folder structure ... feel free to try your way 😉
