# TailwindCSS gradients

A plugin that allows to use degrees with linear gradients


## Installation

Install the plugin from npm

```sh
npm install tailwindcss-gradient
```

Add plugin to your `tailwind.config.js`

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-gradient'),
  ],
}
```

## Usage

Use it as `bg-gradient-{degrees}` utility to specify linear gradient angle

```html
<div class="h-40 from-red-500 to-blue-500 bg-gradient-90">
  90 deg from defaults
</div> 
```

| Class | Generated CSS |
| ----- | ----- |
| `bg-gradient-10` | background-image: `linear-gradient(10deg, var(--tw-gradient-stops))` |
| `bg-gradient-15` | background-image: `linear-gradient(15deg, var(--tw-gradient-stops))` |
| `bg-gradient-20` | background-image: `linear-gradient(20deg, var(--tw-gradient-stops))` |
| `bg-gradient-25` | background-image: `linear-gradient(25deg, var(--tw-gradient-stops))` |
| `bg-gradient-30` | background-image: `linear-gradient(30deg, var(--tw-gradient-stops))` |
| `bg-gradient-45` | background-image: `linear-gradient(45deg, var(--tw-gradient-stops))` |
| `bg-gradient-60` | background-image: `linear-gradient(60deg, var(--tw-gradient-stops))` |
| `bg-gradient-90` | background-image: `linear-gradient(90deg, var(--tw-gradient-stops))` |
| `bg-gradient-120` | background-image: `linear-gradient(120deg, var(--tw-gradient-stops))` |
| `bg-gradient-135` | background-image: `linear-gradient(135deg, var(--tw-gradient-stops))` |
## Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      bgGradientDeg: {
        75: '75 deg',
      }
    }
  },
}
```

```html
<div class="h-40 from-red-500 via-yellow-500 to-blue-500 bg-gradient-90">
  90 deg from defaults
</div> 

<div class="h-40 from-red-500 via-yellow-500 to-blue-500 bg-gradient-10 sm:bg-gradient-60">
  10 deg on mobile,
  60 on desktops
</div> 

<div class="h-40 from-red-500 via-yellow-500 to-blue-500 bg-gradient-[137deg] sm:bg-gradient-to-br">
  137 deg from JIT on mobile,
  to bottom right on desktop
</div> 

<div class="h-40 from-red-500 via-yellow-500 to-blue-500 bg-gradient-13.5">
  13.5 deg from user's custom config
</div>
```

