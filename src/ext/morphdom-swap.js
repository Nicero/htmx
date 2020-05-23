htmx.defineExtension('morphdom-swap', {
    handleSwap: function (swapStyle, target, fragment) {
        if (swapStyle === 'morphdom') {
            morphdom(target, fragment.outerHTML);
            return []; // no settle phase when using morphdom!
        }
    }
});