# Dono Store

Dono Store is a full-stack e-commerce style marketplace: sellers list items, buyers browse a React storefront, use a cart (client-side with Redux), sign in, and open a personal dashboard. The **backend** is a Rails 6 JSON API with PostgreSQL. The **frontend** is a Create React App single-page app (Redux, React Router) that talks to the API over HTTP.

This repository is a **monorepo**:

- **`donos/`** — Rails API (items, users, auth, carts/wishlists models, etc.)
- **`donos_front/`** — React UI (welcome page, home, marketplace, item detail, shopping cart, my page)

---

## Prerequisites

- **Ruby 2.6.10** (see `donos/.ruby-version`)
- **Bundler**
- **PostgreSQL** (9.3+; app uses database `donos_development` by default)
- **Node.js** — **15.x** matches `donos_front/.nvmrc` (e.g. `nvm use` in `donos_front/`)

---

## Start the backend (Rails)

From the repository root:

```bash
cd donos
bundle install
```

Create and migrate the database (and load seeds if you use them):

```bash
rails db:prepare
# or: rails db:create db:migrate db:seed
```

Start the API server (default **http://localhost:3000**):

```bash
bundle exec rails server
# or: rails s
```

The React app is configured to call **`http://localhost:3000`** for users, items, login, and related endpoints, so the API should run on port **3000**.

---

## Start the frontend (React)

In a **second** terminal, from the repository root:

```bash
cd donos_front
npm install
# or: yarn
```

Create React App also defaults to port **3000**, which conflicts with Rails. Start the UI on another port, for example **3001**:

```bash
PORT=3001 npm start
# or: PORT=3001 yarn start
```

Then open **http://localhost:3001** in your browser.

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
