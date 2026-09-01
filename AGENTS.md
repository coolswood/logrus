## Development

When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.
Alternatively, start the server directly via:

```bash
bun run dev
```

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

## Windows Setup & Onboarding Guidelines (for AI Agents)

When an AI agent in Antigravity is tasked with onboarding a non-technical user on Windows:

1. **User Communication**:
   - Communicate in Russian in a clear, friendly, and non-technical manner.
   - Do not overwhelm the user with terminal errors; explain what is happening in simple terms (e.g., «Устанавливаем необходимые инструменты для сайта», «Загружаем проект»).
   - Only ask the user for action when system permissions (UAC / Admin prompt) or manual terminal restarts are strictly required.

2. **Environment Verification & Installation (PowerShell / Windows Terminal)**:
   - Check if Git is installed: `git --version`. If missing, run:
     ```powershell
     winget install --id Git.Git -e --source winget
     ```
   - Check if Bun is installed: `bun --version`. If missing, run:
     ```powershell
     powershell -c "irm bun.sh/install.ps1 | iex"
     ```
     *(Refresh environment path: `$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")`)*
   - Fallback (if Bun encounters system permission issues on Windows): Node.js (>= 22.12.0) via `winget install OpenJS.NodeJS.LTS` and use `npm install` / `npm run dev`.

3. **Repository Setup**:
   - Clone target repository if not already cloned:
     ```powershell
     git clone https://github.com/coolswood/logrus.git
     ```
   - Change directory into the project:
     ```powershell
     cd logrus
     ```
   - Install project dependencies:
     ```powershell
     bun install
     ```
     *(or `npm install` if using Node.js)*
   - Start the local dev server:
     ```powershell
     bun run dev
     ```
   - Guide the user to open `http://localhost:4321` in their browser to see the live website.
