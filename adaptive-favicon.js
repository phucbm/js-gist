/**
 * Adaptive favicon
 * https://jross.me/updating-your-website-favicon-dynamically-with-dark-mode/
 * @param selector
 * @param light
 * @param dark
 */

const adaptiveFavicon = ({selector, light, dark}) => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    handleDarkMode(darkModeMediaQuery);

    function handleDarkMode(e){
        const darkModeOn = e.matches; // true if dark mode is enabled
        const favicon = document.querySelector(selector);

        // replace icons with dark/light themes as appropriate
        favicon.href = darkModeOn ? dark : light;
    }

    darkModeMediaQuery.addListener(handleDarkMode);
}
// adaptiveFavicon({
//     selector: 'link[rel="icon"]',
//     light: 'build/favicon.svg',
//     dark: 'build/favicon-dark.svg'
// });