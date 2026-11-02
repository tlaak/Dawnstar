# Dawnstar

This is the repository for my Dawnstar blog

## Deployment status

[![Netlify Status](https://api.netlify.com/api/v1/badges/c2967ae9-fcca-4067-a862-4fb3fe8cc683/deploy-status)](https://app.netlify.com/sites/dawnstar/deploys)

## Howto

Use Hugo `0.169.0` and Node.js `26.13.0` (Lithium LTS). `mise.toml` pins both
runtimes to match Netlify; `.nvmrc` also pins Node for nvm users. Keep these
version settings synchronized when upgrading.

With [mise](https://mise.jdx.dev/) installed, run:

```sh
mise install
mise exec -- npm ci
```

With mise activated in your shell, `hugo`, `node`, and `npm` use the project
versions automatically. Otherwise, prefix the commands below with `mise exec --`.

Install scripts for `fsevents` are explicitly denied in `package.json`: the
macOS dependency ships its native binary. Review this policy if a future version
changes its packaging.

### Write a new post

`hugo new posts/my-post-name.md`

### Preview changes locally

`hugo serve` and open http://localhost:1313 in your browser.

### Build for production

```sh
HUGO_ENVIRONMENT=production hugo
```

This also runs PurgeCSS against Hugo's generated selector statistics.
