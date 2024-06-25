import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VDateInput } from "vuetify/labs/VDateInput";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
            primary: "#FFB6C1", // Rosa Ajolote
            secondary: "#4CAF50", // Verde
            accent: "#FF4081", // Rosa Fucsia
            error: "#F44336", // Rojo
            background: "#FFFFFF", // Blanco
            surface: "#FFFFFF", // Blanco
            textPrimary: "#212121", // Gris Oscuro
            textSecondary: "#757575", // Gris Medio
            textOnDark: "#FFFFFF",
          },
        },
        dark: {
          colors: {
            primary: "#FFB6C1", // Rosa Ajolote
            secondary: "#4CAF50", // Verde
            accent: "#FF4081", // Rosa Fucsia
            error: "#F44336", // Rojo
            background: "#212121", // Gris Oscuro
            surface: "#212121", // Gris Oscuro
            textPrimary: "#FFFFFF", // Blanco
            textSecondary: "#BDBDBD", // Gris Claro
            textOnDark: "#FFFFFF", // Blanco
          },
        },
      },
    },
    components: {
      VDateInput,
    },
  });
  app.vueApp.use(vuetify);
});
