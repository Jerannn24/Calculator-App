
# Calculator App 🧮

A simple calculator built with **React (Next.js 15)** and **JavaScript**.

## ✨ Features

- Basic arithmetic operations: `+`, `-`, `*`, `/`
- Support for decimals and double zero (`00`)
- `C` (Clear All) button to reset input
- `CE` (Clear Entry) button to delete the last character
- Error handling for invalid expressions

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Calculator-app.git
cd Calculator-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

The app should now be running on [http://localhost:3000](http://localhost:3000)

## 🛠 Tech Stack

- React (with Next.js 15)
- JavaScript (no TypeScript)
- CSS (or Tailwind if you customize further)

## 📂 Folder Structure

```
calculator-app/
├── app/
│   ├── component/
│   │   └── Calculator.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   └── favicon.ico
├── .gitignore
├── README.md ✅
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
```

## 📸 Preview

![Calculator Preview](preview.png)

## ⚠️ Disclaimer

This calculator uses `eval()` for quick evaluation. **Do not** use this approach in production applications without sanitizing inputs.

---

Created with ❤️ by Jerannn24
