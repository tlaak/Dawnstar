# Dawnstar

This is the repository for my Dawnstar blog

## Deployment status

[![Netlify Status](https://api.netlify.com/api/v1/badges/c2967ae9-fcca-4067-a862-4fb3fe8cc683/deploy-status)](https://app.netlify.com/sites/dawnstar/deploys)

## Howto

Use Hugo `0.164.0` and Node.js `26.13.0` (Lithium LTS). Node is pinned in
`.nvmrc` and Netlify's `NODE_VERSION`.

`brew install hugo` installs Hugo; check that `hugo version` matches the pinned
release. With nvm, install Node and the project dependencies:

```sh
nvm install
nvm use
npm ci
```

### Write a new post

`hugo new posts/my-post-name.md`

### Preview changes locally

`hugo serve` and open http://localhost:1313 in your browser.

### Build for production

```sh
HUGO_ENVIRONMENT=production hugo
```

This also runs PurgeCSS against Hugo's generated selector statistics.
