---
title: Bun Add vs Bun Install
description: 'Bun Add vs Bun Install: Choosing the Right Command'
date: '2025-11-29'
categories:
    - bun
published: true
src: '/images/bun-add-vs-bun-install.png'
---

I recently made a switch from npm to bun to try the new features. Saying that it's faster than npm might be an understatement but while learning advance topics regarding bun was on my todo list, understanding the distinction between two similar commands - bun install and bun add, was on my top priority list. They may look alike but they serve different purposes and they are pretty simple to understand. With this blog you will help you manage dependencies efficiently and avoid confusion.

# 1. `bun add` - Installing new packages

bun add is used when adding a new dependency to your project. It automatically installs the package and updates your `package.json` and `bun.lockb`.

```bash
bun add react
bun add -d typescript
```

## Use when:

- You’re adding a new library.
- You want to save it as a dev dependency (`-d` flag).

```bash
bun add axios
```

This instantly installs Axios and saves it to your project dependencies — much faster than `npm install axios`.

# 2. `bun install` — Reinstalling Dependencies

`bun install` is equivalent to `npm install` or `yarn install`. It reads your `bun.lockb` or `package.json` and installs everything listed there.
``` bash
bun install
```

## Use when:

- You’ve cloned a project and want to install existing dependencies.
- You’ve deleted your `node_modules` folder.
- You’re syncing dependencies after a version update.

> Bun optimizes installation using caching and parallel downloads, so it’s extremely fast compared to npm or yarn.

# 3. Key Differences at a Glance
| Feature |	bun install |	bun add |
| -- | -- | -- |
| Purpose |	Install all existing deps	| Add a new dependency |
| Updates package.json | 	❌ No	| ✅ Yes |
| Reads from lockfile | 	✅ Yes	| ✅ Yes |
| Common use | Setup or rebuild	| Add libraries or dev tools |

# Summary

- `bun install` → Installs everything from your `package.json`.
- `bun add` → Adds and installs new dependencies.

By understanding when to use each, you’ll maintain a cleaner, faster, and more predictable Bun environment.