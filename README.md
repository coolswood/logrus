# Logrus — Astro + Tailwind CSS + Bun

Современный веб-проект на базе **Astro**, стилизованный с помощью **Tailwind CSS**, работающий на ультрабыстром рантайме и пакетном менеджере **Bun**.

---

## 📁 Структура проекта

```text
/
├── public/              # Статические файлы (favicon, robots.txt и т.д.)
├── src/
│   ├── assets/          # Оптимизируемые изображения, иконки, шрифты
│   ├── components/      # Переиспользуемые UI-компоненты (Header, Footer и др.)
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

## 🛠️ Особенности

- **Tailwind CSS**: подключен через `@tailwindcss/vite`, стили компилируются быстро и без лишней конфигурации.
- **Path Alias**: настроен путь `@/*` к папке `src/*` в `tsconfig.json` для удобных импортов (`import Header from '@/components/Header.astro'`).
- **SEO & Layout**: базовый лейаут содержит все необходимые мета-теги, Open Graph разметку и семантические теги HTML5.
