# SEMCA — Semillas del Cambio · sitio web

Sitio estático bilingüe (ES / 中文) para **SEMCA — Semillas del Cambio**, organización
sin fines de lucro de Tiquipaya, Cochabamba (Bolivia). Trabaja en **primera infancia**,
**salud materno-infantil**, **protección de la niñez** y **educación**.

## Datos verificados del registro oficial

Tomados del **Registro Único Nacional de ONG** — Ministerio de Planificación del
Desarrollo del Estado Plurinacional de Bolivia (SISONG v.2.0), listado vigente al
28-01-2026, entrada **N.º 241**:

| Campo | Valor |
|---|---|
| Razón social | Semillas del Cambio |
| Sigla | SEMCA |
| Sector | Educación, Salud |
| Departamento / Oficinas | Cochabamba |
| Registro vigente hasta | **05 · 02 · 2027** |
| Teléfonos registrados | 4311511 · 70724456 |
| Dirección registrada | Calle Innominda s/n, Zona Chilimarca, acera norte, entre Av. Chilimarca y Calle Innominda |
| Fuente | <https://www.planificacion.gob.bo/uploads/ong-nac_28012026.pdf> |

Además, la organización opera la **Unidad Educativa «Para la Vida»** (privada,
RUE 60900057, Av. Chilimarca, Tiquipaya, 98 estudiantes).

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Inicio — hero, qué hacemos, actividades, enfoque, transparencia, CTA |
| `nosotros.html` | Misión, visión, espacios, principios, datos legales |
| `programas.html` | 6 programas reales + cómo inscribirse |
| `transparencia.html` | Ficha del registro oficial, compromisos, articulación, verificación |
| `contacto.html` | Datos de contacto, mapa OpenStreetMap, formulario |
| `404.html` | Página de error |
| `css/style.css` | Design tokens, componentes, tema oscuro, impresión |
| `js/main.js` | Bilingüe ES/中文, nav móvil, reveal, tema, formulario, año, PWA |
| `manifest.webmanifest` · `sw.js` | PWA: instalable y con soporte sin conexión |
| `icono.svg` · `icono-maskable.svg` | Iconos de la aplicación |
| `sitemap.xml` · `robots.txt` | SEO |

## Stack

HTML5 + CSS3 (custom properties) + JavaScript vanilla.
**Sin build, sin framework, sin dependencias.** Abre `index.html` en cualquier navegador.

## Funciones

- **Bilingüe ES / 中文** — todo el texto vive en atributos `data-es` / `data-zh`. El botón
  **ES / 中文** intercambia `textContent` y guarda la preferencia en `localStorage`
  (`semca-lang`). Para añadir un idioma basta con agregar `data-<código>` y sumar el botón
  en `.lang`.
- **PWA sin conexión** — `manifest.webmanifest` + `sw.js`. El sitio se puede instalar y
  sigue funcionando sin internet: navegación *network-first*, recursos *cache-first*.
  Al cambiar el contenido, sube `VERSION` en `sw.js` para invalidar la caché.
- **Tema claro / oscuro** — sigue `prefers-color-scheme` por defecto y permite cambiarlo
  manualmente; se guarda en `localStorage` (`semca-theme`). Un script inline en el `<head>`
  evita el parpadeo al cargar.
- **Accesibilidad** — enlace «saltar al contenido», `aria-current="page"` en la navegación
  activa, estilos `:focus-visible`, contraste cuidado en ambos temas.
- **SEO y compartir** — Open Graph, `twitter:card`, JSON-LD (`schema.org/NGO`), sitemap
  y robots.
- **Mapa** — OpenStreetMap incrustado (sin API key, datos abiertos).
- **Impresión** — hoja de estilos para imprimir fichas sin cabecera ni pie.

## Paleta

Tomada de los textiles andinos (aguayo): crema algodón `#F7F1E5`, rojo teja `#A63A2E`,
verde valle `#3F6B4F`, ocre mostaza `#C98F22`, uva `#5E3A53`.
Todo está en el bloque `:root` de `css/style.css`; el tema oscuro redefine las mismas
variables bajo `[data-theme="dark"]`.

## Previsualizar

```bash
python -m http.server 8080
# abrir http://localhost:8080
```

> El service worker solo se registra sobre `http://` o `https://`, no sobre `file://`.

## Publicar

Al ser un sitio estático, basta con servirlo desde la raíz del repositorio.
Si se usa GitHub Pages: *Settings → Pages → Deploy from a branch → `main` / root*.
Las URL de `sitemap.xml` y `robots.txt` están escritas para
`https://roxykundrik450-eng.github.io/semca-semillas-del-cambio/`; ajústalas si el
dominio final es otro.

## Pendientes antes de publicar

1. **Correo institucional** — se retiró `contacto@semca.org.bo` porque ese dominio no
   existe. Falta añadir el correo real (ver comentario `TODO` en `contacto.html`).
2. **Formulario** — sigue siendo una demo estática (solo muestra el aviso). Conectar a un
   servicio de envío (Formspree, Netlify Forms, etc.) o sustituirlo por WhatsApp/teléfono.
3. **Redes** — el enlace de Facebook apunta a la página de directorio
   `facebook.com/102844861521761`; conviene confirmar que es la página oficial.
4. **Donaciones** — falta un canal real (transferencia, QR, plataforma local).
5. **Fotos** — no hay imágenes propias todavía; el sitio usa SVG inline.
6. **Aviso de privacidad** — al recoger correos por el formulario conviene publicar una
   nota de privacidad.
7. **Cifras** — las publicadas (98 estudiantes, registro hasta 2027) están verificadas;
   cualquier número adicional debe pedirse a la organización.
