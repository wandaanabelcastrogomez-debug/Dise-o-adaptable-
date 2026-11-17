/* =========================================================
   Diseño adaptable · script.js
   ---------------------------------------------------------
   1. Año del pie
   2. Menú del móvil
   3. El medidor: el ancho real de tu ventana
   4. Simulador de pantallas (la web de dentro es de verdad)
   5. Demo de unidades (px / em / rem)
   6. Demo de imágenes flexibles
   7. Demo de zonas de toque
   8. Checklist con progreso
   9. Copiar código
   ========================================================= */
"use strict";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const CLAVE_PASOS = "adaptable-pasos";

let temporizadorBrindis = null;
function brindis(texto) {
  const caja = $("#brindis");
  if (!caja) return;
  caja.textContent = texto;
  caja.classList.add("visible");
  clearTimeout(temporizadorBrindis);
  temporizadorBrindis = setTimeout(() => caja.classList.remove("visible"), 2200);
}

/* ---------- 1. Año ---------- */
const anio = $("#anio");
if (anio) anio.textContent = new Date().getFullYear();

/* ---------- 2. Menú del móvil ---------- */
const botonMenu = $("#menuBoton");
const nav = $("#nav");
if (botonMenu && nav) {
  botonMenu.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
  $$("#nav a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      nav.classList.remove("abierto");
      botonMenu.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- 3. El medidor real ---------- */
const MODOS = [
  { modo: "Móvil", icono: "📱", desde: 0, hasta: 639 },
  { modo: "Tableta", icono: "📲", desde: 640, hasta: 899 },
  { modo: "Escritorio", icono: "🖥️", desde: 900, hasta: 100000 }
];

function modoSegunAncho(ancho) {
  for (let i = 0; i < MODOS.length; i++) {
    if (ancho >= MODOS[i].desde && ancho <= MODOS[i].hasta) return MODOS[i];
  }
  return MODOS[MODOS.length - 1];
}

const TEXTOS_MODO = {
  "Móvil": "Una columna, menú ☰ y textos algo más pequeños.",
  "Tableta": "Dos columnas: ya hay sitio para repartir.",
  "Escritorio": "Ancho de sobra: tres columnas, barra lateral y aire."
};

const anchoReal = $("#anchoReal");
const modoReal = $("#modoReal");
const demoRealTitulo = $("#demoRealTitulo");
const demoRealTexto = $("#demoRealTexto");

function medirVentana() {
  const ancho = window.innerWidth;
  const info = modoSegunAncho(ancho);
  if (anchoReal) anchoReal.textContent = ancho;
  if (modoReal) modoReal.textContent = info.icono + " " + info.modo;
  if (demoRealTitulo) demoRealTitulo.textContent = "Modo " + info.modo.toLowerCase();
  if (demoRealTexto) demoRealTexto.textContent = TEXTOS_MODO[info.modo];
}

medirVentana();
window.addEventListener("resize", medirVentana);
window.addEventListener("orientationchange", medirVentana);

/* ---------- 4. Simulador de pantallas ---------- */
/* Esta es la web que vive dentro del marco. Sus media queries responden al
   tamaño del marco, igual que responderían al de un móvil de verdad. */
const WEB_DEMO = [
  '<!DOCTYPE html>',
  '<html lang="es"><head><meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '<style>',
  '  * { box-sizing: border-box; }',
  '  html, body { margin: 0; }',
  '  body { font-family: "Segoe UI", system-ui, sans-serif; color: #1f2a2e; background: #ffffff; font-size: 13px; line-height: 1.5; }',
  '  .barra { display: flex; align-items: center; gap: 10px; padding: 10px 12px;',
  '           background: #0f766e; color: #fff; }',
  '  .barra .marca { font-weight: 800; font-size: 13px; }',
  '  .barra .menu { margin-left: auto; display: flex; gap: 12px; font-size: 11px; }',
  '  .barra .burger { margin-left: auto; font-size: 15px; display: none; }',
  '  .contenido { padding: 12px; }',
  '  h2 { font-size: 14px; margin: 0 0 8px; }',
  '  .rejilla { display: grid; gap: 10px; grid-template-columns: 1fr; }',
  '  .tarjeta { border: 1px solid #e4e1d8; border-radius: 10px; padding: 10px; background: #fdfcfa; }',
  '  .tarjeta h3 { margin: 0 0 4px; font-size: 12px; }',
  '  .tarjeta p { margin: 0; font-size: 10.5px; color: #5f6f73; }',
  '  .lateral { display: none; border: 1px dashed #d8d4c8; border-radius: 10px; padding: 10px;',
  '             font-size: 10.5px; color: #5f6f73; background: #faf9f6; }',
  '',
  '  /* ---------- MÓVIL ---------- */',
  '  @media (max-width: 620px) {',
  '    .menu { display: none; }',
  '    .burger { display: block; }',
  '  }',
  '',
  '  /* ---------- TABLETA ---------- */',
  '  @media (min-width: 621px) {',
  '    .rejilla { grid-template-columns: 1fr 1fr; }',
  '    .contenido { padding: 16px; }',
  '    h2 { font-size: 15px; }',
  '  }',
  '',
  '  /* ---------- ESCRITORIO ---------- */',
  '  @media (min-width: 901px) {',
  '    .contenido { display: grid; grid-template-columns: 1fr 190px; gap: 14px; padding: 20px; }',
  '    .rejilla { grid-template-columns: repeat(3, 1fr); }',
  '    .lateral { display: block; }',
  '    h2 { font-size: 17px; }',
  '    body { font-size: 14px; }',
  '  }',
  '</style></head><body>',
  '  <div class="barra">',
  '    <span class="marca">Mi sitio</span>',
  '    <span class="menu"><span>Inicio</span><span>Blog</span><span>Contacto</span></span>',
  '    <span class="burger">☰</span>',
  '  </div>',
  '  <div class="contenido">',
  '    <div>',
  '      <h2>Artículos</h2>',
  '      <div class="rejilla">',
  '        <article class="tarjeta"><h3>Primero</h3><p>Una tarjeta que se recoloca.</p></article>',
  '        <article class="tarjeta"><h3>Segundo</h3><p>Cabecera con menú o con ☰.</p></article>',
  '        <article class="tarjeta"><h3>Tercero</h3><p>Texto y aire según el ancho.</p></article>',
  '        <article class="tarjeta"><h3>Cuarto</h3><p>Nada de anchos fijos.</p></article>',
  '      </div>',
  '    </div>',
  '    <aside class="lateral">Barra lateral: aparece solo en pantallas grandes.</aside>',
  '  </div>',
  '</body></html>'
].join("\n");

const lienzo = $("#lienzo");
const marco = $("#marco");
const mandoAncho = $("#mandoAncho");
const pastillaAncho = $("#pastillaAncho");
const pastillaModo = $("#pastillaModo");
const pastillaRegla = $("#pastillaRegla");
const presets = $$(".preset");

if (lienzo) lienzo.setAttribute("srcdoc", WEB_DEMO);

function pintarSimulador(ancho) {
  if (marco) marco.style.width = ancho + "px";
  if (mandoAncho && String(mandoAncho.value) !== String(ancho)) mandoAncho.value = ancho;

  const info = modoSegunAncho(ancho);
  if (pastillaAncho) pastillaAncho.textContent = ancho + " px";
  if (pastillaModo) pastillaModo.textContent = info.icono + " " + info.modo;

  let regla = "@media (min-width: 901px)  · tres columnas";
  if (ancho <= 620) regla = "@media (max-width: 620px)  · una columna";
  else if (ancho <= 900) regla = "@media (min-width: 621px)  · dos columnas";
  if (pastillaRegla) pastillaRegla.textContent = regla;

  presets.forEach((boton) => {
    const suyo = Number(boton.getAttribute("data-ancho"));
    boton.classList.toggle("activo", suyo === ancho);
    boton.setAttribute("aria-pressed", suyo === ancho ? "true" : "false");
  });
}

if (mandoAncho) {
  mandoAncho.addEventListener("input", () => pintarSimulador(Number(mandoAncho.value)));
}

presets.forEach((boton) => {
  boton.addEventListener("click", () => {
    const ancho = Number(boton.getAttribute("data-ancho"));
    pintarSimulador(ancho);
    if (ancho === 375) brindis("375 px: como un iPhone en vertical");
    if (ancho === 768) brindis("768 px: tableta en vertical");
    if (ancho === 1024) brindis("1024 px: portátil");
  });
});

/* ancho inicial: el más parecido a la pantalla de quien mira */
pintarSimulador(window.innerWidth <= 480 ? 375 : (window.innerWidth <= 900 ? 768 : 375));

/* ---------- 5. Demo de unidades ---------- */
const mandoFuente = $("#mandoFuente");
const cajaUnidades = $("#cajaUnidades");
const medidas = $("#medidas");

function medirUnidades() {
  if (!cajaUnidades || !medidas) return;
  const px = parseFloat(window.getComputedStyle($(".u-px")).fontSize).toFixed(1);
  const em = parseFloat(window.getComputedStyle($(".u-em")).fontSize).toFixed(1);
  const rem = parseFloat(window.getComputedStyle($(".u-rem")).fontSize).toFixed(1);
  medidas.textContent = "Calculado por el navegador →  16px: " + px + "px   ·   1.4em: " + em +
    "px   ·   1rem: " + rem + "px";
}

if (mandoFuente && cajaUnidades) {
  mandoFuente.addEventListener("input", () => {
    cajaUnidades.style.fontSize = mandoFuente.value + "px";
    medirUnidades();
  });
}
medirUnidades();

/* ---------- 6. Demo de imágenes ---------- */
const mandoImagen = $("#mandoImagen");
const marcoSin = $("#marcoSin");
const marcoCon = $("#marcoCon");

if (mandoImagen) {
  mandoImagen.addEventListener("input", () => {
    const ancho = mandoImagen.value + "px";
    if (marcoSin) marcoSin.style.width = ancho;
    if (marcoCon) marcoCon.style.width = ancho;
  });
}

/* ---------- 7. Demo de zonas de toque ---------- */
const botonZonas = $("#botonZonas");
const demoToque = $(".demo-toque");
const notaZonas = $("#notaZonas");

if (botonZonas && demoToque) {
  botonZonas.addEventListener("click", () => {
    const activo = demoToque.classList.toggle("zonas");
    botonZonas.setAttribute("aria-pressed", activo ? "true" : "false");
    botonZonas.textContent = activo ? "Ocultar zonas de toque" : "Mostrar zonas de toque";
    if (notaZonas) {
      notaZonas.textContent = activo
        ? "Las líneas de puntos marcan lo que el dedo tiene que acertar. «Sí» y «No» son demasiado pequeños; el enlace, también."
        : "Pulsa el botón para ver el área real de cada elemento.";
    }
  });
}

/* ---------- 8. Checklist con progreso ---------- */
const casillas = $$('#checklist input[type="checkbox"]');
const barraRelleno = $("#barraRelleno");
const progresoTexto = $("#progresoTexto");

function leerPasos() {
  try { return JSON.parse(localStorage.getItem(CLAVE_PASOS) || "{}"); }
  catch (e) { return {}; }
}

function pintarProgreso() {
  const hechas = casillas.filter((c) => c.checked).length;
  if (barraRelleno) barraRelleno.style.width = (casillas.length ? (hechas / casillas.length) * 100 : 0) + "%";
  if (progresoTexto) {
    progresoTexto.textContent = hechas + " de " + casillas.length + " comprobaciones" +
      (hechas === casillas.length && casillas.length ? " ✅ lista para publicar" : "");
  }
  casillas.forEach((c) => {
    const li = c.closest("li");
    if (li) li.classList.toggle("hecho", c.checked);
  });
}

const pasosGuardados = leerPasos();
casillas.forEach((casilla) => {
  const paso = casilla.getAttribute("data-paso");
  if (pasosGuardados[paso]) casilla.checked = true;
  casilla.addEventListener("change", () => {
    const mapa = leerPasos();
    if (casilla.checked) mapa[paso] = true;
    else delete mapa[paso];
    try { localStorage.setItem(CLAVE_PASOS, JSON.stringify(mapa)); } catch (e) {}
    pintarProgreso();
  });
});
pintarProgreso();

/* ---------- 9. Copiar código ---------- */
$$(".copiar").forEach((boton) => {
  boton.addEventListener("click", () => {
    const destino = document.getElementById(boton.getAttribute("data-copiar"));
    if (!destino) return;
    const texto = destino.textContent;

    const listo = () => brindis("Código copiado ✓");
    const aMano = () => brindis("No se pudo copiar: selecciónalo a mano");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(listo).catch(aMano);
      return;
    }
    try {
      const area = document.createElement("textarea");
      area.value = texto;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      listo();
    } catch (e) {
      aMano();
    }
  });
});
