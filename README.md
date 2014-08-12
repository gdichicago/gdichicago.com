# The mothership

This is a massive mothership respoitory that contains submodules of all the materials to be hosted on gdichicago.com.

It also contains the static pages for the site.

## How it works

### Adding new submodules

You want to add all new submodules in the root folder of the repo.

```
git submodule add https://gitlab.com/gdichicago/pairup.git pairup
```

**All submodules must have the content compiled and read for upload.**

If that content is on a branch (I use `site`), you'll need to:

```
cd public/pairup
git checkout -b site
git pull origin site
cd ../..
git add .
git commit -m "updated submodule to site branch"
git push origin master
```

And that will get you sorted.

### Uploading to AWS

Changes merged into the `stable` branch (including submodules) are automatically deployed.
