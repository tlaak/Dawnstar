# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Dawnstar is a personal blog built with Hugo, using a custom theme called `dawnstar2018`. The site is deployed to Netlify.

## Commands

- `hugo serve` or `npm start` - Start local development server
- `hugo -D -w -v` or `npm run dev` - Development mode with drafts, watch, and verbose output
- `hugo new posts/my-post-name.md` - Create a new blog post

Hugo must be installed separately (`brew install hugo`).

## Architecture

### Theme Structure (`themes/dawnstar2018/`)

- `layouts/_default/baseof.html` - Base template that all pages extend
- `layouts/partials/` - Reusable template fragments (header, footer, post components)
- `layouts/shortcodes/` - Custom shortcodes for embedding Spotify and Songwhip content
- `assets/styles/main.css` - CSS entry point that imports modular stylesheets

### CSS Pipeline

The theme uses PostCSS with these features:
- `postcss-import` - CSS imports
- `postcss-nested` - Nested selectors
- `postcss-extend` - CSS extend functionality
- `postcss-preset-env` - Modern CSS features
- PurgeCSS in production (uses `hugo_stats.json` for used selectors)

CSS is processed through Hugo Pipes in `baseof.html`.

### Content

Blog posts live in `content/posts/` as Markdown files. Permalinks follow the pattern `/:year/:month/:day/:title/`.

## Code Style

- Prettier: No semicolons, single quotes, 2-space tabs
- Stylelint with `stylelint-config-standard` and Prettier integration
