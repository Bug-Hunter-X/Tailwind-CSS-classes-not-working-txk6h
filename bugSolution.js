```javascript
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS Bug</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="bg-red-500 p-4 rounded-lg">
      <p>This is a paragraph of text.</p>
  </div>
</body>
</html>
```