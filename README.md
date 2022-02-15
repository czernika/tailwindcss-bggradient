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
  90 deg from default config
</div> 
```

List of available defaults are:

- `bg-gradient-10`
- `bg-gradient-15`
- `bg-gradient-20`
- `bg-gradient-25`
- `bg-gradient-30`
- `bg-gradient-45`
- `bg-gradient-60`
- `bg-gradient-90`
- `bg-gradient-120`
- `bg-gradient-135`

Each will generate CSS like `background-image: linear-gradient($value, var(--tw-gradient-stops))`
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

<div class="h-40 from-red-500 via-yellow-500 to-blue-500 bg-gradient-75">
  75 deg from user's custom config
</div>
```

