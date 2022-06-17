
shadow.cljs.devtools.client.env.module_loaded('data');

try { slovarish.frontend.data.init(); } catch (e) { console.error("An error occurred when calling (slovarish.frontend.data/init)"); throw(e); };
SHADOW_ENV.setLoaded("slovarish.frontend.data.js");
SHADOW_ENV.setLoaded("shadow.module.data.append.js");