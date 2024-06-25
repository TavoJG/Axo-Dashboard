export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      appBar: {
        logout: "Logout",
        english: "English",
        spanish: "Spanish",
      },
      navDrawer: {
        home: "Home",
        timeline: "Timeline",
      },
      login: {
        title: "AXO Dashboard - Login",
        email: "Email",
        password: "Password",
        submit: "Login",
      },
      index: {
        welcome: "Welcome to Axo Dashboard!",
        subtitle: "General status of the system",
      },
      dashboard: {
        lastUpdate: "Last update",
      },
      timeline: {
        title: "Timeline of records",
        selectLabel: "Select variable",
        startDate: "Start date",
        endDate: "End date",
      },
    },
    es: {
      appBar: {
        logout: "Cerrar sesión",
        english: "Inglés",
        spanish: "Español",
      },
      login: {
        title: "AXO Dashboard - Inicio de  sesión",
        email: "Correo electrónico",
        password: "Contraseña",
        submit: "Iniciar sesión",
      },
      index: {
        welcome: "¡Bienvenid@ a Axo Dashboard!",
        subtitle: "Estado general del sistema",
      },
      dashboard: {
        lastUpdate: "Última actualización",
      },
      navDrawer: {
        home: "Inicio",
        timeline: "Línea de tiempo",
      },
      timeline: {
        title: "Línea de tiempo de registros",
        selectLabel: "Seleccionar variable",
        startDate: "Fecha de inicio",
        endDate: "Fecha de fin",
      },
    },
  },
}));
