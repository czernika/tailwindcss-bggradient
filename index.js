const plugin = require('tailwindcss/plugin')

const bgGradientCss = (utility) => ({
    [utility]: (angle) => ({
        'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
    }),
})

const bgGradientDefaultValues = (theme) => ({
    values: Object.assign(theme('bgGradientDeg', {}), {
        0: '0deg',
        10: '10deg',
        15: '15deg',
        20: '20deg',
        25: '25deg',
        30: '30deg',
        45: '45deg',
        60: '60deg',
        90: '90deg',
        120: '120deg',
        135: '135deg',
        180: '180deg',
    }),
})

module.exports = plugin(function ({ matchUtilities, theme }) {
    matchUtilities(bgGradientCss('bg-gradient'), bgGradientDefaultValues(theme))
    matchUtilities(bgGradientCss('bg-gradient-to'), bgGradientDefaultValues(theme))
})
