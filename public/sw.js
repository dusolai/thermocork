// Service worker retirado (10-11-2026).
//
// El anterior servía cada página desde su caché antes de mirar la red
// (stale-while-revalidate), así que quien ya había visitado la web seguía viendo
// la versión vieja después de publicar. Este fichero tiene que seguir existiendo
// en esta misma URL: los navegadores que tienen instalado el viejo lo descargan
// al comprobar actualizaciones, y este borra la caché, se da de baja y recarga
// las pestañas abiertas desde la red. No tiene manejador de fetch: nada pasa por él.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const tabs = await self.clients.matchAll({ type: 'window' });
    tabs.forEach((tab) => tab.navigate(tab.url));
  })());
});
