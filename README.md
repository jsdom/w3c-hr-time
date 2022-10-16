# w3c-hr-time is deprecated

This module implemented the W3C [High Resolution Time Level 2](https://w3c.github.io/hr-time/) specification. However, it is no longer supported or maintained. Instead, consider using your platform's native implementations of the global `performance` object, such as on:

- [Node.js](https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_now)
- [The web](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

Notably, the [`jsdom`](https://github.com/jsdom/jsdom) package, which was the previous primary dependent, [has moved away](https://nodejs.org/api/globals.html#performance).

To browse code from previous versions, see [Git history](https://github.com/jsdom/w3c-hr-time/tree/v1.0.2).
