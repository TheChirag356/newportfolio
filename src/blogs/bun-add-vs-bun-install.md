---
title: Bun Add vs Bun Install
description: 'Bun Add vs Bun Install: Choosing the Right Command'
date: '2025-11-29'
categories:
    - bun
published: true
src: '/images/bun-add-vs-bun-install.png'
---

If you’ve switched to Bun, you’ve likely noticed two similar commands — bun install and bun add. They may look alike, but they serve different purposes depending on your workflow. Understanding their distinctions helps you manage dependencies efficiently and avoid confusion.

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

⚙️ Bun optimizes installation using caching and parallel downloads, so it’s extremely fast compared to npm or yarn.

# 3. Key Differences at a Glance
| Feature |	bun install |	bun add |
| -- | -- | -- |
| Purpose |	Install all existing deps	| Add a new dependency |
| Updates package.json | 	❌ No	| ✅ Yes |
| Reads from lockfile | 	✅ Yes	| ✅ Yes |
| Common use | Setup or rebuild	| Add libraries or dev tools |

# 4. Best Practices

- Use bun install only for setting up or syncing environments.
- Use bun add for adding new dependencies.
- Avoid mixing them unnecessarily — Bun handles dependency management automatically.

# Summary

- `bun install` → Installs everything from your `package.json`.
- `bun add` → Adds and installs new dependencies.

By understanding when to use each, you’ll maintain a cleaner, faster, and more predictable Bun environment.