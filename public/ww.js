self.onmessage = e => self.postMessage({ echo: e.data });
console.log("worker loaded");
