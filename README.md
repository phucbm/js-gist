# 🩹 JavaScript Snippets

## Table of Content

- [Copy text to clipboard](/copy-text-to-clipboard.js)
- [Format datetime](/format-datetime.js)
- [Check is valid URL](/is-valid-url.js)
- [Responsive Object](/responsive-object.js)
- [Sort array of object by value](/sort-array-by-object-value.js)
- [String to slug](/string-to-slug.js)
- [Time Since](/time-since.js)
- [Generate unique ID](/unique-id.js)

## Usage

### Responsive Object v1.0.1 - [demo](/examples/responsive-object.html)

Return the correct setting object based on the current breakpoint using `matchMedia()`

```js
const config = {
    screen: 'desktop',
    color: 'white',
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                screen: '1280',
                color: 'blue',
                isTablet: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                screen: '768',
            }
        }
    ]
};

new ResponsiveObject({
    object: config,
    onMatched: (data) => {
        // do something
        console.log('onMatched', data);
    }
});
```