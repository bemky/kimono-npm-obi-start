# obi-start

Start your Kimono project

From within a Kimono project, running `obi start` will initialize and
boot your project to `AppContext.RunLevel.Running`.

In order to utilize `obi start` you should be sure to set up your project
using an [AppContext](https://github.com/mattinsler/app-context).
Then in the `configure` method add initializers for the `Running` run level.

### Installation

```bash
$ npm install -g @kimonolabs/obi-start
```

### Usage

```bash
$ cd /path/to/project
$ obi start                       # start the project for current environment
$ NODE_ENV=production obi start   # start the project for production environment
```
