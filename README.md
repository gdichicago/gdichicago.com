# The mothership

This is a massive mothership respoitory that contains submodules of all the materials to be hosted on gdichicago.com.

It also contains the static pages for the site.

## How it works

### Adding new submodules

You want to add all new submodules in the root folder of the repo.

```
git submodule add https://gitlab.com/gdichicago/pairup.git pairup
```

This will add the content to the `pair up` folder, which will be accessible at `gdichicago.com/pairup`.

**All submodules must have the content compiled and read for upload.**

### Uploading to AWS

Changes merged into the `stable` branch (including submodules) are automatically deployed.
