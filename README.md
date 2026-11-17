# 📐 Diseño adaptable · Tu web en móvil, tableta y ordenador

Página tutorial que explica **y demuestra** cómo hacer una web con HTML, CSS y JavaScript que
funcione igual de bien en un celular y en un ordenador. Con un **simulador de pantallas** donde
mueves el ancho y ves la maqueta reorganizarse de verdad.

---

## Cómo se abre

| Formato | Qué abrir | Cuándo usarlo |
|---|---|---|
| Un solo archivo | `diseno-adaptable.html` | Lo más rápido: doble clic y a mover el mando. |
| Carpeta | `diseno-adaptable/index.html` | Si quieres leer el CSS y el JS comentados. |

Sin instalación, sin servidor y **sin conexión a internet**. Funciona en Chrome, Edge, Firefox y
Safari, en móvil, tableta y ordenador (la propia página es la prueba).

---

## Qué vas a encontrar: 11 bloques

| # | Bloque | Qué se explica | Qué puedes tocar |
|---|---|---|---|
| 1 | La idea en tres piezas | `meta viewport`, media queries y maquetado flexible | — |
| 2 | **Simulador de pantallas** | La misma web en 375 / 768 / 1024 px | Mando de 320 a 1024 px y tres presets; una web real dentro del marco |
| 3 | `meta viewport` | Por qué sin esa línea el móvil lo encoge todo | — |
| 4 | Media queries | Sintaxis, mobile-first vs desktop-first, `hover`, `prefers-*` | Una tarjeta que cambia con el ancho **real** de tu ventana |
| 5 | Unidades | `px` vs `em` vs `rem` vs `%` vs `vw` vs `clamp()` | Mando que cambia el tamaño base y muestra los píxeles calculados |
| 6 | Maquetado | `flex-wrap` y `grid` con `auto-fit` sin media queries | — |
| 7 | Imágenes | `max-width: 100%` y `object-fit` | Mando que encoge el marco: una imagen se sale, la otra se adapta |
| 8 | Dedos, no punteros | Zonas de 44 × 44 px y no depender de `:hover` | Botón que dibuja el área real de toque |
| 9 | Cómo comprobarlo | Modo dispositivo, extremos 320/1440, móvil real | Checklist de 7 puntos que **se guarda** |
| 10 | Los 5 fallos típicos | Síntoma → causa → arreglo | — |
| 11 | Chuleta | Todo junto, para copiar | Botones 📋 Copiar |

Arriba del todo hay un **medidor** que muestra el ancho real de tu ventana y el modo en que está
(📱 móvil / 📲 tableta / 🖥️ escritorio). Estrecha el navegador y cambia en directo.

---

## Las demos, una por una

**Simulador (la estrella).** Dentro del marco hay un documento HTML independiente, con sus propias
media queries. Al mover el mando cambia el ancho del marco, y como las media queries responden al
tamaño de **su** ventana (el marco), la maqueta de dentro se reorganiza igual que en un móvil:
menú ☰ → una columna → dos columnas → tres columnas con barra lateral. Debajo se indica qué regla
está ganando en ese momento.

**Tu ventana de verdad.** La tarjeta del bloque 4 cambia de color e icono con CSS puro según el ancho
real: no es una simulación. Si la abres en un móvil, sale en modo móvil sin tocar nada.

**Unidades.** Al mover el mando cambia el `font-size` del contenedor: el párrafo en `1.4em` crece, el
de `16px` no se mueve y el de `1rem` depende de la raíz. Debajo, el navegador dice los píxeles que ha
calculado de verdad.

**Imágenes.** Dos copias de la misma imagen: una con 480 px fijos (se sale del marco, con borde de
aviso) y otra con `max-width: 100%` (encoge sin deformarse).

**Zonas de toque.** Un botón dibuja un contorno discontinuo alrededor de cada elemento pulsable para
que se vea lo pequeño que es un botón de 2 líneas o un enlace de 10 px frente al mínimo recomendado
de 44 × 44.

---

## Lo que se guarda

| Clave (`localStorage`) | Qué guarda |
|---|---|
| `adaptable-pasos` | Las 7 comprobaciones marcadas en el checklist |

Nada más: ni cuentas, ni red, ni analítica. Para empezar de cero, desmarca las casillas o borra los
datos del sitio en tu navegador.

---

## Cómo está hecha (ideas que puedes copiar)

- **Es su propio ejemplo**: `clamp()` en los títulos, `grid` con `auto-fit`, `min-height: 44px` en
  botones y media queries en 900, 760 y 420 px.
- **El simulador no es una maqueta**: es un `<iframe>` con `srcdoc` que contiene un documento
  completo. Por eso las media queries de dentro funcionan de verdad.
- **`overflow-x: hidden` en el `body`** y `overflow-x: auto` solo en los bloques que lo necesitan
  (tablas, código, el marco del simulador): así nunca aparece una barra lateral molesta.
- **`@media (prefers-reduced-motion: reduce)`** desactiva animaciones para quien lo pide al sistema.
- **Zonas de toque**, `:focus-visible` y `aria-pressed` en todos los botones con estado.
- **Copiar código** con `navigator.clipboard` y alternativa con `textarea` si el navegador lo bloquea.

---

## Cómo usarla para aprender

1. Lee el bloque 1 y toca el medidor (bloque 0/portada) estrechando la ventana.
2. Juega con el simulador hasta que puedas **predecir** qué pasa en 700 px antes de mover el mando.
3. Copia el CSS del simulador en tu propio proyecto y cambia los puntos de corte.
4. Repasa la tabla de unidades y comprueba la diferencia `px` / `em` / `rem` con el mando.
5. Recorre el checklist del bloque 9 con **tu** página abierta al lado.

**Para clase:** el simulador es la mejor pizarra: se proyectan los tres presets y se pregunta qué
cambiará antes de pulsar. Los cinco fallos del bloque 10 sirven de examen rápido.

---

## Cómo publicarla

- **Netlify Drop** ([app.netlify.com/drop](https://app.netlify.com/drop)): arrastra la carpeta. Sin cuenta.
- **GitHub Pages**: sube los archivos → *Settings → Pages → Deploy from a branch → `main` / `(root)`*.

Recuerda: `index.html`, `estilos.css`, `script.js` y `avatar.svg` **en el mismo nivel**. Si prefieres
un solo archivo, publica `diseno-adaptable.html` renombrado a `index.html`.

Y cuando esté publicada, ábrela en tu móvil de verdad: es la única prueba que no engaña.

---

## Preguntas frecuentes

**¿El simulador usa JavaScript para cambiar el diseño de dentro?** No. El JS solo cambia el ancho del
marco; la reorganización la hacen las media queries del CSS. Eso es exactamente lo que quiero que
veas.

**¿Por qué mi web se ve diminuta en el móvil?** Falta el `meta viewport`. Es el fallo número uno y
está explicado en el bloque 3.

**¿Tengo que usar media queries para todo?** No. Con `grid` y `auto-fit`, `flex-wrap`, `%`, `rem` y
`clamp()` se resuelve la mayoría; las media queries son para lo que no se arregla solo.

**¿Funciona sin internet?** Sí, también el archivo único (la imagen va incrustada).

---

## Archivos

    diseno-adaptable/
    ├── index.html                        los 11 bloques de contenido
    ├── estilos.css                       el propio ejemplo de CSS adaptable
    ├── script.js                         9 bloques comentados (medidor, simulador, demos)
    ├── avatar.svg                        la imagen de la demo de imágenes
    ├── diseno-adaptable-todo-en-uno.html todo en un archivo, también la imagen
    └── README.md                         este archivo

---

*Hecho para redimensionar. Si algo se descuadra en tu pantalla, avísame y se corrige.*
