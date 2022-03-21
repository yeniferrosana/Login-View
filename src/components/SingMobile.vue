<template>
  <v-card-text class="mt-12">
    <h2 class="text-center">Inicie sesión en su cuenta</h2>
    <h5 class="text-center grey--text">Inicia sesión en tu cuenta para que puedas seguir construyendo
      <br>y editar sus flujos de incorporación
    </h5>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8">
        <v-text-field label="Correo Electrónico" outlined dense color="black" autocomplete="false" class="mt-16"></v-text-field>
        <v-text-field label="Contraseña" outlined dense color="black" autocomplete="false" type="password"></v-text-field>
        <v-row>
          <v-col sm="6">
            <v-checkbox label="Recordarme" class="mt-n1" color="black"></v-checkbox>
          </v-col>
          <v-col sm="6">
            <span class="caption black--text">Recuperar Contraseña</span>
          </v-col>
        </v-row>
        <v-btn color="black" dark block tile>Iniciar sesión</v-btn>
        <div class="text-center">
          <v-btn text class="text-capitalize" @click="setData"> ¿Aún no tienes una cuenta?, Registrate</v-btn>
        </div>
        <h5 class="text-center gery--text mt-4 mb-3">O iniciar sesión usando</h5>
        <div class="d-flex justify-space-between align-center mx-10 mb-16">
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
    name: 'StepSingUp',
    data: () => ({
      step: 2
    }),
    methods: {
      setData() {
        this.$emit("getStep", this.step);
      }
    }

  }
</script>