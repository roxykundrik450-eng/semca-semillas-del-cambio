# SEMCA — Semillas del Cambio · sitio web

Sitio estático en español para **SEMCA — Semillas del Cambio**, organización
sin fines de lucro de Tiquipaya, Cochabamba (Bolivia). Trabaja en **primera infancia**,
**salud materno-infantil**, **protección de la niñez** y **educación**.

> El sitio es **solo en español**. Antes tenía un conmutador ES/中文 que se retiró: la
> organización trabaja en Bolivia y el chino no le sirve a su público.

## Diseño

La maqueta sigue la estructura editorial de la plantilla
**[Editorial](https://html5up.net/editorial) de [HTML5 UP](https://html5up.net)**
(licencia [CCA 3.0](https://html5up.net/license)): columna de contenido + barra lateral
derecha, jerarquía tipográfica, listas con etiqueta al margen.

Se reescribió por completo **sin dependencias**: la plantilla original carga jQuery,
Font Awesome y 2,9 MB de webfonts, y este sitio necesita pesar poco para funcionar sin
conexión. No queda nada de esos archivos; solo se conserva el criterio de maquetación.

Criterios de diseño aplicados a propósito:

- **Sin «kickers»**: ningún epígrafe pequeño repitiendo el título de cada sección.
- **Sin rejillas de tarjetas**: los contenidos usan listas editoriales con etiqueta al margen.
- **Un solo acento**: rojo teja `#A63A2E`. El verde y el ocre se reservan para datos.
- **Sin animaciones de entrada** ni decoración sin función.
- **Sin iconos genéricos**: el único SVG del sitio es el control de tema claro/oscuro.

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
| `index.html` | Inicio — titular, quiénes somos, líneas de trabajo, últimas actividades, galería, registro, cómo ayudar |
| `nosotros.html` | Misión, visión, principios, espacios, aliados, datos legales |
| `programas.html` | Los seis programas + cómo inscribirse |
| `actualidad.html` | Archivo de actividades del año |
| `galeria.html` | Galería de imágenes, agrupadas por tema |
| `preguntas.html` | Preguntas frecuentes (programas, inscripción, organización, cómo ayudar) |
| `ayudar.html` | Voluntariado, donaciones, donaciones en especie, colaboración institucional |
| `transparencia.html` | Ficha del registro oficial, qué se publica y qué falta, compromisos, verificación |
| `contacto.html` | Datos de contacto, formulario, ubicación y mapa OpenStreetMap |
| `404.html` | Página de error |
| `css/style.css` | Tokens, maqueta editorial, galería, FAQ, tema oscuro, impresión |
| `js/main.js` | Tema, sección activa, formulario, año, PWA |
| `img/` | Fotografías (ver Créditos) |
| `manifest.webmanifest` · `sw.js` | PWA: instalable y con soporte sin conexión |
| `icono.svg` · `icono-maskable.svg` | Iconos de la aplicación |
| `sitemap.xml` · `robots.txt` | SEO |

> **Nota de mantenimiento:** el menú lateral, el bloque de contacto y el pie están repetidos
> en las nueve páginas. Si cambia una sección del menú o un teléfono, hay que actualizarlo
> en todas. Es el precio de no tener build; se revisa con una búsqueda de texto.

## Stack

HTML5 + CSS3 (custom properties) + JavaScript vanilla.
**Sin build, sin framework, sin dependencias.** Abre `index.html` en cualquier navegador.

## Funciones

- **PWA sin conexión** — `manifest.webmanifest` + `sw.js`. El sitio se puede instalar y
  sigue funcionando sin internet: navegación *network-first*, recursos *cache-first*.
  Al cambiar el contenido, sube `VERSION` en `sw.js` para invalidar la caché.
  > El armazón (páginas, CSS, JS, iconos) se precarga al instalar; **las imágenes no**.
  > Son 3,3 MB y descargarlas todas al instalar sería inaceptable con conexión lenta: se
  > guardan a medida que se visitan.
- **Tema claro / oscuro** — sigue `prefers-color-scheme` por defecto y permite cambiarlo
  manualmente; se guarda en `localStorage` (`semca-theme`). Un script inline en el `<head>`
  evita el parpadeo al cargar.
- **Accesibilidad** — enlace «saltar al contenido», `aria-current="page"` en la navegación
  activa, estilos `:focus-visible`, contraste cuidado en ambos temas.
- **SEO y compartir** — Open Graph, `twitter:card`, JSON-LD (`schema.org/NGO`), sitemap
  y robots.
- **Galería** — rejilla de dos columnas con proporción fija; el recorte lo hace `object-fit`.
- **Preguntas frecuentes** — `<details>/<summary>` nativos, sin JavaScript.
- **Impresión** — hoja de estilos para imprimir sin barra lateral, controles ni mapa.

## Paleta

Tomada de los textiles andinos (aguayo): papel crema `#F7F1E5`, tinta `#241C14`,
acento rojo teja `#A63A2E`. El tema oscuro redefine las mismas variables bajo
`[data-theme="dark"]`. Todo está en el bloque `:root` de `css/style.css`.

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

1. **Fotografías propias** — las que hay ahora son de archivo, con licencia libre, y son
   **de lugares, no de personas**: la cordillera del Tunari, la iglesia de Tiquipaya, un
   mercado del valle y la plaza de Quillacollo. Es deliberado: poner fotos de niñas y
   niños ajenos en el sitio de una organización real haría creer que son sus
   beneficiarios. Cuando la organización tenga fotos propias (la escuela, el huerto, las
   jornadas), hay que sustituirlas.
2. **Correo institucional** — se retiró `contacto@semca.org.bo` porque ese dominio no
   existe. Falta añadir el correo real (ver comentario `TODO` en `contacto.html`).
3. **Formulario** — sigue siendo una demostración estática (solo muestra el aviso).
   Conectar a un servicio de envío (Formspree, Netlify Forms, etc.) o sustituirlo por
   WhatsApp/teléfono.
4. **Redes** — el enlace de Facebook apunta a la página de directorio
   `facebook.com/102844861521761`; conviene confirmar que es la página oficial.
5. **Donaciones** — falta un canal real (transferencia, QR, plataforma local).
6. **Aviso de privacidad** — al recoger correos por el formulario conviene publicar una
   nota de privacidad.
7. **Cifras** — las publicadas (98 estudiantes, registro hasta 2027) están verificadas;
   cualquier número adicional debe pedirse a la organización.

## Créditos

- Maqueta: [Editorial](https://html5up.net/editorial) de [HTML5 UP](https://html5up.net),
  [CCA 3.0](https://html5up.net/license). Reescrita sin dependencias.
- Mapa: © colaboradores de [OpenStreetMap](https://www.openstreetmap.org/copyright).
- Fotografías, todas de [Wikimedia Commons](https://commons.wikimedia.org) y
  redimensionadas para la web (los recortes de encuadre los hace el navegador con
  `object-fit`, los archivos no están alterados):

  | Archivo | Foto | Autor | Licencia |
  |---|---|---|---|
  | `img/tunari.jpg` | [Cordillera del Tunari](https://commons.wikimedia.org/wiki/File:Cordillera_del_Tunari_Cochabamba.jpg) | Nelson Antequera | CC BY-SA 4.0 |
  | `img/atardecer.jpg` | [Atardecer sobre el Tunari](https://commons.wikimedia.org/wiki/File:Atardecer_con_el_forndo_de_la_Cerro_y_la_Serran%C3%ADa_del_Tunari_en_Cochabamba.jpg) | MollySVH | CC BY 2.0 |
  | `img/valle.jpg` | [Valle de Cochabamba](https://commons.wikimedia.org/wiki/File:Valle_de_Cochabamba.jpg) | Franz Tamayo Daza | CC BY-SA 4.0 |
  | `img/tiquipaya.jpg` | [Iglesia San Miguel, Tiquipaya](https://commons.wikimedia.org/wiki/File:Iglesia_san_miguel_tiquipaya_64.jpg) | AldoNuñezC. | CC BY-SA 4.0 |
  | `img/tiquipaya2.jpg` | [Iglesia San Miguel, otra vista](https://commons.wikimedia.org/wiki/File:Iglesia_san_miguel_tiquipaya_29.jpg) | AldoNuñezC. | CC BY-SA 4.0 |
  | `img/quillacollo.jpg` | [Plaza Bolívar, Quillacollo](https://commons.wikimedia.org/wiki/File:Quillacollo,_Plaza_Bolivar.JPG) | Willaq | CC BY-SA 4.0 |
  | `img/liriuni.jpg` | [Liriuni, Cochabamba](https://commons.wikimedia.org/wiki/File:Liriuni_Cochabamba_Bolivia.jpg) | Sisace | CC BY-SA 4.0 |
  | `img/cochabamba.jpg` | [Panorama urbano con el Tunari](https://commons.wikimedia.org/wiki/File:Panorama_urbano_con_el_Cerro_Tunari,_Cochabamba.jpg) | Rolando Claure | CC BY-SA 4.0 |
  | `img/catedral.jpg` | [Catedral Metropolitana de San Sebastián](https://commons.wikimedia.org/wiki/File:Cochabamba_-_Metropolitan_Cathedral_of_Saint_Sebastian_-_20190929213109.jpg) | Pacheco castro fernando | CC BY-SA 4.0 |
  | `img/plaza14.jpg` | [Plaza Principal 14 de Septiembre](https://commons.wikimedia.org/wiki/File:Plaza_Principal_%E2%80%9C14_de_Septiembre%E2%80%9D,_Cochabamba,_Bolivia_-_16449443750.jpg) | Jan Beck | CC BY 2.0 |
  | `img/cristo.jpg` | [Cristo de la Concordia](https://commons.wikimedia.org/wiki/File:Cristo_de_la_Concordia_02.jpg) | Jimmy Gilles | CC BY-SA 3.0 |
  | `img/mercado.jpg` | [Mercado de Punata](https://commons.wikimedia.org/wiki/File:Vista_general_de_un_puesto_de_verduras_en_el_mercado_de_Punata,_Bolivia.png) | AlissCh | CC BY 4.0 |
  | `img/cancha.jpg` | [Mercado de La Cancha, Cochabamba](https://commons.wikimedia.org/wiki/File:Calle_lanza_mercado_la_cancha_en_Cochabamba.jpg) | BrunoBol | CC BY-SA 4.0 |
  | `img/cliza.jpg` | [Mercado Central de Cliza](https://commons.wikimedia.org/wiki/File:Mercado_Central_de_Cliza_-_Cochabamba_-_Bolivia_08_-_Pichon.jpg) | Mauri777AE | CC BY-SA 4.0 |
  | `img/cosecha.jpg` | [Cosecha de trigo y maíz](https://commons.wikimedia.org/wiki/File:Cosecha_de_trigo_y_maiz,_Cochabamba,_2008.jpg) | Ramiro Lizárraga Terrazas | CC BY-SA 4.0 |
  | `img/tiraque.jpg` | [Tiraque, valle alto](https://commons.wikimedia.org/wiki/File:Tiraque_Cochabamba_01.jpg) | Das Morton | CC BY-SA 4.0 |
  | `img/adobe.jpg` | [Casas de adobe en Villa Mercedes](https://commons.wikimedia.org/wiki/File:Casas_de_adobe_en_Villa_Mercedes,_Arbieto,_2007.jpg) | Ramiro Lizárraga Terrazas | CC0 |
  | `img/textil.jpg` | [Tejido andino (tari)](https://commons.wikimedia.org/wiki/File:Tari_textil_Aymara.jpg) | Jhulis | CC BY-SA 4.0 |

  Las licencias CC BY y CC BY-SA exigen mantener el reconocimiento: **si se sustituye una
  foto, hay que actualizar también el pie de foto en la página y esta tabla.**
