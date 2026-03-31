# Dono Store

Dono Store is a full-stack e-commerce style marketplace: sellers list items, buyers browse a React storefront, use a cart (client-side with Redux), sign in, and open a personal dashboard. The **backend** is a Rails 6 JSON API with PostgreSQL. The **frontend** is a Create React App single-page app (Redux, React Router) that talks to the API over HTTP.

This repository is a **monorepo**:

- **`donos/`** — Rails API (items, users, auth, carts/wishlists models, etc.)
- **`donos_front/`** — React UI (welcome page, home, marketplace, item detail, shopping cart, my page)

---

## Prerequisites

- **Ruby 2.6.10** (see `donos/.ruby-version`) — must match the Gemfile; using a different default Ruby will break `bundle` (see below).
- **Bundler**
- **PostgreSQL** (9.3+; app uses database `donos_development` by default)
- **Node.js** — **15.x** per `donos_front/.nvmrc` (use **nvm**, **fnm**, or **asdf** so `node -v` matches after `nvm use` in `donos_front/`).

---

## Start the backend (Rails)

**Use Ruby 2.6.10 before any `bundle` or `rails` command.** If your shell’s default is newer (for example 3.0.x), Bundler will error with: *Your Ruby version is X, but your Gemfile specified 2.6.10*.

With **RVM** (typical on macOS):

```bash
source ~/.rvm/scripts/rvm   # add to ~/.zshrc if not already
rvm use 2.6.10
cd donos
bundle install
rails db:prepare
# or: rails db:create db:migrate db:seed
bundle exec rails server -p 3000 -b 127.0.0.1
```

With **rbenv**:

```bash
cd donos
rbenv install 2.6.10   # once
rbenv local 2.6.10
bundle install
rails db:prepare
bundle exec rails server -p 3000 -b 127.0.0.1
```

One-shot from repo root (RVM):

```bash
bash -lc 'source ~/.rvm/scripts/rvm && rvm use 2.6.10 && cd donos && bundle exec rails server -p 3000 -b 127.0.0.1'
```

The API listens at **http://127.0.0.1:3000**. The React app calls **`http://localhost:3000`**, so keep Rails on port **3000**.

---

## Start the frontend (React)

Use a **second terminal**. **Start the backend first**, then the UI.

Match Node to **`donos_front/.nvmrc`** (e.g. **15.11.0**) so `react-scripts` runs on a supported version:

```bash
cd donos_front
source ~/.nvm/nvm.sh    # if nvm is not loaded in your shell
nvm use                 # reads .nvmrc
npm install             # or: yarn — once per clone
PORT=3001 npm start
# or: PORT=3001 yarn start
```

Create React App defaults to port **3000**, which conflicts with Rails, so **`PORT=3001`** is required here.

Open **http://localhost:3001** in the browser.

---

## What we had to do to run this locally (summary)

These steps reflect a real dev setup on macOS:

1. **Ruby** — The Gemfile locks **2.6.10**. The system default was **3.0.3**, so plain `bundle exec rails server` failed until **RVM** was used: `rvm use 2.6.10`, then commands from `donos/`.
2. **Rails** — Started with **Puma** on **127.0.0.1:3000** so the API matches the frontend’s `fetch('http://localhost:3000/...')` calls.
3. **Node** — **`nvm use`** in `donos_front/` loads **15.11.0** from `.nvmrc` before `npm start`.
4. **Port** — **`PORT=3001`** for CRA so it does not collide with Rails on 3000.

Order: **backend terminal → frontend terminal**.

---

## Faker and `vendor/bundle`

The **`faker`** gem is declared in `donos/Gemfile` **from Git** (`faker-ruby/faker`, `master` branch). When you run `bundle install`, Bundler may install it under:

`donos/vendor/bundle/.../bundler/gems/faker-.../`

That checkout can contain its **own `.git` directory** (it is a full git clone of the gem). That is **normal** for git-sourced gems.

- The monorepo’s **root `.gitignore`** ignores **`donos/vendor/bundle/`**, so those paths (including Faker’s `.git`) are **not committed** to this repository.
- After cloning Dono Store, always run **`bundle install`** inside `donos/` on each machine so gems (including Faker) are installed locally.
- You do **not** need to remove Faker’s nested `.git`; it is only relevant to how Bundler stores that gem.

---

## Project layout (quick reference)

| Path            | Role                                      |
|-----------------|-------------------------------------------|
| `donos/`        | Rails app, `config/routes.rb`, models, API |
| `donos_front/`  | React `src/`, Redux store, UI components   |

---

## Environment and secrets

- Keep **API keys and secrets** in local **`.env`** files (or Rails credentials), not in committed code. Root `.gitignore` excludes common env patterns.
- Rails may use **`config/master.key`** for encrypted credentials; that file is ignored by git—use your own copy in development.

---

## License

Add a license here if you publish the repo publicly.
