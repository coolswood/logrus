# Logrus — Astro + Tailwind CSS + Bun

Современный веб-проект на базе **Astro**, стилизованный с помощью **Tailwind CSS**, работающий на ультрабыстром рантайме и пакетном менеджере **Bun**.

---

## 📁 Структура проекта

```text
/
├── public/              # Статические файлы (favicon, robots.txt и т.д.)
├── src/
│   ├── assets/          # Оптимизируемые изображения, иконки, шрифты
│   ├── components/      # Переиспользуемые UI-компоненты (Header, Footer, HexCard и др.)
│   ├── layouts/         # Шаблоны страниц (BaseLayout.astro с SEO)
│   ├── pages/           # Файловый роутинг Astro (index.astro)
│   └── styles/          # Глобальные стили (global.css с директивами Tailwind)
├── astro.config.mjs     # Конфигурация Astro и плагина Tailwind (@tailwindcss/vite)
├── package.json         # Скрипты и зависимости проекта
├── tsconfig.json        # Настройки TypeScript и алиас `@/*` -> `src/*`
└── bun.lock             # Lockfile пакетного менеджера Bun
```

---

## 🚀 Команды

Все команды выполняются из корневой директории:

| Команда | Описание |
| :--- | :--- |
| `bun install` | Установка зависимостей |
| `bun run dev` | Запуск локального сервера разработки (`http://localhost:4321`) |
| `bun run build` | Сборка статического сайта в папку `./dist/` |
| `bun run preview` | Локальный предпросмотр собранного проекта |
| `bunx astro add <pkg>` | Добавление официальных интеграций (например, React, MDX, Sitemap) |

---

## 💻 Быстрый старт на Windows (для AI и новичков)

Если проект открывается на новом компьютере с Windows (например, через AI-агента Antigravity):

1. **Установка окружения**:
   - Убедиться в наличии **Git**: `winget install --id Git.Git -e --source winget`
   - Убедиться в наличии **Bun**: `powershell -c "irm bun.sh/install.ps1 | iex"` *(или Node.js LTS через `winget install OpenJS.NodeJS.LTS`)*
2. **Клонирование проекта**:
   ```powershell
   git clone https://github.com/coolswood/logrus.git
   cd logrus
   ```
3. **Установка зависимостей и запуск**:
   ```powershell
   bun install
   bun run dev
   ```
4. **Просмотр сайта**: Откройте в браузере `http://localhost:4321`.
