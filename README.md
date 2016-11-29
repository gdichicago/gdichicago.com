# gdichicago.com
This repository contains the source code for GDI Chicago's personal static website, hosted via Github Pages.

### Adding/Updating Courses
To add a new course to the "Course Materials" page (all contained in the `courses/` directory), use the Ruby script in [this repo](https://github.com/gdichicago/course-updater). There are further instructions on adding/removing courses and running the script there.

Once you're ready with the `course-updater` script, run it in the `courses/` directory in order to add/update all course contents at once.

After you've run the script, all courses contained in its source will be available! Only their contents are fetched (the git guts are removed) in order to avoid dependencies via git submodules. Since each course contains an `index.html` file in its main directory, you can reference the path to its repo directly in `courses/index.html`. (Github Pages is handy like that.)

For example, I added the Intro to Git/Github course to my script, so now I see the directory `courses/git-github/` locally. In `courses/index.html`, I can link to the course slides like so:

```html
<a href="git-github">Our awesome Intro to Git/Github Course!</a>
```
For more examples, view `courses/index.html`.

### Deploying
Changes merged into the `gh-pages` branch are automatically deployed via Github Pages.
