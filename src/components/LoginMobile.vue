<template>
    <v-card-text class="mt-12">
      <h2 class="text-center">Regístrese para obtener una cuenta</h2>
      <h5 class="text-center grey--text">
        Vamos a prepararlo todo para que pueda comenzar a crear su<br>
        primera experiencia de incorporación
      </h5>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8">
          <v-text-field label="Nombre" outlined dense color="black" autocomplete="false" class="mt-4"></v-text-field>
          <v-text-field label="Apellido" outlined dense color="black" autocomplete="false" class="mt-4"></v-text-field>
          <v-text-field label="Correo Electrónico" outlined dense color="black" autocomplete="false"></v-text-field>
          <v-text-field label="Contresaña" outlined dense color="black" type="password"></v-text-field>
          <v-row>
            <v-col sm="4">
              <v-checkbox label="Acepto" class="mt-n1" color="black"></v-checkbox>
            </v-col>
            <v-col sm="4">
              <span class="caption black--text ml-n4">Términos & Condiciones</span>
            </v-col>
          </v-row>
          <v-btn color="black" dark block tile>Registrarse</v-btn>
          <div class="text-center">
            <v-btn text class="text-capitalize" @click="setData">¿Ya tienes cuenta?, Inicia sesión</v-btn>
          </div>
          <h5 class="text-center grey--text mt-4 mb-3">O Registrarse usando</h5>
          <div class="d-flex justify-space-between align-center mx-10 mb-11">
            <v-btn depressed outlined color="grey">
              <v-icon color="grey darken-3">fab fa-google</v-icon>
            </v-btn>
            <v-btn depressed outlined color="grey">
              <v-icon color="grey darken-3">fab fa-facebook-f</v-icon>
            </v-btn>
            <v-btn depressed outlined color="grey">
              <v-icon color="grey darken-3">fab fa-twitter</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
</template>
<script>
  export default {
    name: 'StepLogin',
    data: () => ({
      step: 1
    }),
    methods: {
      setData() {
        this.$emit("getStep", this.step);
      }
    }

  }
</script>