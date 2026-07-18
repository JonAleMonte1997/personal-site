// Estado público del proyecto LibreFit. Actualizar este archivo (no los
// componentes) cuando avance el proyecto: cambiar `estado`, mover ítems entre
// `hecho` y `enCamino`, y agregar entradas al principio de `bitacora`.

export const libreFit = {
  nombre: "LibreFit",
  resumen:
    "App de fitness para Android y iOS: calculás tus macros a partir de tus datos corporales y seguís tu día desde un dashboard simple. Sin cuentas, sin suscripciones y sin recolección de datos.",
  repo: "https://github.com/JonAleMonte1997/libre-fit",
  estado: "En desarrollo — todavía no está publicada en las tiendas.",
  principios: [
    {
      titulo: "Tus datos son tuyos",
      detalle:
        "Todo se guarda únicamente en tu dispositivo. No hay servidores, ni cuentas, ni analytics.",
    },
    {
      titulo: "Código abierto",
      detalle:
        "El código es público en GitHub: cualquiera puede leerlo, auditarlo o proponer mejoras.",
    },
    {
      titulo: "Simple a propósito",
      detalle:
        "Hace pocas cosas y las hace bien: perfil, macros y seguimiento diario. Nada de funciones infladas.",
    },
  ],
  hecho: [
    "Onboarding con datos corporales (peso, altura, edad, sexo)",
    "Cálculo de macros con objetivo (mantenimiento, déficit o superávit)",
    "Edición manual de macros para quien ya sabe sus números",
    "Dashboard diario de macros",
    "Perfil editable con recálculo automático",
  ],
  enCamino: [
    "Registro de comidas del día",
    "Historial y progreso en el tiempo",
    "Publicación en Google Play y App Store",
  ],
  bitacora: [
    {
      fecha: "Julio 2026",
      nota: "El núcleo de la app está funcionando: onboarding, cálculo de macros, dashboard y perfil. El foco ahora es el registro de comidas.",
    },
  ],
} as const;
