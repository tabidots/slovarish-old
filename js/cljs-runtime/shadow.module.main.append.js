
shadow.cljs.devtools.client.env.module_loaded('main');

try { slovarish.frontend.app.init(); } catch (e) { console.error("An error occurred when calling (slovarish.frontend.app/init)"); throw(e); }