# The mothership

This is a massive mothership respoitory that contains submodules of all the materials to be hosted on gdichicago.com.

It also contains the static pages for the site.

## CDN

This site uses the Amazon CDN. It's lovely.

There are some GDI assets already stored on the CDN, you can find them [here](https://gitlab.com/gdichicago/website-assets)

## How it works

### Adding new submodules

You want to add all new submodules in the `public` folder.

```
git submodule add https://gitlab.com/gdichicago/pairup.git public/pairup
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

You'll need Liz to do this for you since she has her own AWS credentials stored in a secret place.

But so Liz doesn't forget, it works like this:

```
s3_website push --site public
```

And requires the `s3_website` gem.