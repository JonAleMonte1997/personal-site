// Estado público del proyecto LibreFit. Actualizar este archivo (no los
// componentes) cuando avance el proyecto: cambiar `estado`, mover ítems entre
// `hecho` y `enCamino`, y agregar entradas al principio de `bitacora`.
// El repo de la app es privado: no linkear a GitHub desde el sitio.

export const libreFit = {
  nombre: "LibreFit",
  resumen:
    "App de fitness para Android y iOS: calculás tus macros a partir de tus datos corporales y los tenés siempre a mano. Sin cuentas, sin suscripciones y sin recolección de datos.",
  estado: "En desarrollo — todavía no está publicada en las tiendas.",
  principios: [
    {
      titulo: "Tus datos son tuyos",
      detalle:
        "Todo se guarda únicamente en tu dispositivo. No hay servidores, ni cuentas, ni analytics.",
    },
    {
      titulo: "Gratis de verdad",
      detalle:
        "Sin suscripciones, sin publicidad y sin compras dentro de la app.",
    },
    {
      titulo: "Simple a propósito",
      detalle:
        "Hace pocas cosas y las hace bien: tu perfil y tus macros. Nada de funciones infladas.",
    },
  ],
  hecho: [
    "Onboarding con datos corporales (peso, altura, edad, sexo)",
    "Cálculo de macros con objetivo (mantenimiento, déficit o superávit)",
    "Edición manual de macros para quien ya sabe sus números",
    "Dashboard con tus macros siempre a mano",
    "Perfil editable con recálculo automático",
  ],
  enCamino: [
    "Planificación de comidas",
    "Publicación en Google Play y App Store",
  ],
  bitacora: [
    {
      fecha: "Julio 2026",
      nota: "El núcleo de la app está funcionando: onboarding, cálculo de macros, dashboard y perfil. Lo próximo grande es la planificación de comidas.",
    },
  ],
} as const;
