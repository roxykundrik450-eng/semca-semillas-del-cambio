# SEMCA — Semillas del Cambio · sitio web

Sitio estático para **SEMCA — Semillas del Cambio**, organización sin fines de lucro
de Tiquipaya, Cochabamba (Bolivia). Trabaja en **educación** y **salud comunitaria**.

- Registro ONG vigente hasta **05 · 02 · 2027**
- Departamento: **Cochabamba**
- Teléfonos: **+591 4 311511** · **+591 70724456**

## Estado

| Archivo | Estado |
|---|---|
| `css/style.css` | ✅ completo (design tokens + biblioteca de componentes) |
| `js/main.js` | ✅ completo (bilingüe ES/中文, nav móvil, reveal, formulario, año) |
| `index.html` | ✅ Inicio — hero, qué hacemos, enfoque, transparencia, CTA |
| `nosotros.html` | ✅ Misión, visión, principios, datos legales |
| `programas.html` | ✅ 6 programas + cómo inscribirse |
| `contacto.html` | ✅ Datos de contacto + formulario (demo estático) |

## Stack

HTML5 + CSS3 (custom properties) + JavaScript vanilla. **Sin build, sin framework,
sin dependencias.** Abre `index.html` en cualquier navegador.

## Bilingüe

Todo el texto vive en atributos `data-es` / `data-zh` sobre el elemento. El botón
**ES / 中文** del encabezado intercambia `textContent` y guarda la preferencia en
`localStorage` (`semca-lang`). Para añadir un idioma basta con agregar
`data-<código>` y sumar el botón en `.lang`.

## Paleta

Tomada de los textiles andinos (aguayo): crema algodón `#F7F1E5`, rojo teja
`#A63A2E`, verde valle `#3F6B4F`, ocre mostaza `#C98F22`, uva `#5E3A53`.
Todo está en el bloque `:root` de `css/style.css`.

## Previsualizar

```bash
cd semcasite
python -m http.server 8080
# abrir http://localhost:8080
```

## Antes de publicar — pendientes

1. **Correo institucional** — en `contacto.html` figura `contacto@semca.org.bo`
   como marcador; confirmar el dominio/correo real.
2. **Dirección exacta** — ahora solo dice Tiquipaya, Provincia Quillacollo.
3. **Formulario** — es una demo estática (solo muestra el aviso). Conectar a un
   servicio de envío (Formspree, Netlify Forms, etc.) antes de publicar.
4. **Donaciones** — falta un canal real (transferencia, QR, plataforma local).
5. **Cifras** — no se inventaron estadísticas; si se quieren números reales
   (beneficiarios, años de trabajo), hay que pedirlos a la organización.
6. **Fotos** — no hay imágenes propias todavía; el sitio usa SVG inline.
7. **Aviso de privacidad** — al recoger correos por el formulario conviene
   publicar una nota de privacidad.
