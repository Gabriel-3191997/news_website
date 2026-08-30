An AI-powered news platform built to deliver fast, honest, and reliable news.


* Readers get accurate stories.
* Reporters get smart AI tools to write initial drafts.
* Editors using AI to verify sources before gets published.

### Extensions

* Google Analytics
* Google Tag Manager
* HypeLab - Ads


## Local Development

Requirements
* Nodejs 18+
* Vite
* Tailwindcss
* Flowbite

### Project Folder Structure

```
├── node_modules/
├── public/
├── server/
├── src/
│   └── images/              # Create your new images folder right here
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── yarn.lock
```

### package.json

```{
  "name": "qualitynews",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "sass-embedded": "^1.103.1",
    "vite": "^8.2.0"
  },
  "dependencies": {
    "@tailwindcss/cli": "^4.3.3",
    "@tailwindcss/postcss": "^4.3.3",
    "flowbite": "^4.0.2",
    "postcss": "^8.5.26",
    "tailwindcss": "^4.3.3"
  }
}
```

```npm install```

```npm run dev```

paste below within your browser to run locally

```http://localhost:5173/```
