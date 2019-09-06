# multi-window-issue

This project studies ways to make SPA's behave nice if the user opens many
windows.

## Attempt 1

- Vuex + service workers
- [Enable developer tools properly](https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers#Developer_tools)

We got limited to fetch / activation.

## Attempt 2

- Vuex + web workers

Windows does not share their web workers

## Attempt 3

- Vuex + storage events

Partial success: all other windows receives the `onstorage` event except the one creating it.
