# Veox!!!

This is a static blog framework by Nodejs and VueJS!🚀🚀🚀

## Usage

```
npm install -g veox
veox init veox-demo
cd veox-demo
veox build
veox preview
```

## Installation

Before you install `veox`,you need some things:

 - [NodeJS](https://nodejs.org/en/)
 - [Git](https://git-scm.com/downloads)
 
If your have installed above things,then,you can run:

```
npm install -g veox
```

> You can use [cnpm](https://npm.taobao.org/) to install this package, if you are in China😊!

## Config

You can modify `config.json` in your project of veox.

```
{
  "git": {
    "branch": "master", // your branch
    "repo": "" // your repositoriy address
  },
  "template": [ // you need some template files
    "dist",
    "index.html"
  ]
}
```

## Build

In your project of `veox`,it have a folder named _posts.It is your folders of some actices.

If you want to build your blog,you can run:

```
veox build
```

Then,it will create a file named deploy,if you have not this folder before!It will be parsesing your `.md` file and outputs `.html` file.

## Deploy

If you already run build Command,then,you can deploy your project!

```
veox deploy
```

It will be copying your template code to folder named deploy.

> You can config that you want to appointed some file can be copy to folder named deploy.

## Preview

In the end,you already build and deploy,then,you can run:

```
veox preview
```

If your cli output a line,It means what you can visit your porject by the address,then,you can input address in your address bar of browsers!

## License

[http://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)