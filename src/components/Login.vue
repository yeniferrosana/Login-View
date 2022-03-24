<template>
  <v-card-text class="mt-12">
    <h1
      class="text-center display-2 blue--text text--darken-4"
    >Inicia Sesión en Diprella</h1>
    <div class="text-center mt-4">
      <v-btn class="mx-2" fab color="black" outlined>
        <v-icon>fab fa-facebook-f</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab color="black" outlined>
        <v-icon>fab fa-google-plus-g</v-icon>
      </v-btn>
      <v-btn class="mx-2" fab color="black" outlined>
        <v-icon>fab fa-linkedin-in</v-icon>
      </v-btn>
    </div>
    <h4 class="text-center mt-4">Asegúrese de su correo electrónico para el registro</h4>
    <v-form>
      <v-text-field
        label="Correo Electrónico"
        name="Email"
        prepend-icon="email"
        type="text"
        color="blue darken-4"
      />

      <v-text-field
        id="password"
        label="Contraseña"
        name="password"
        prepend-icon="lock"
        type="password"
        color="blue darken-4"
      />
    </v-form>
    <h3 class="text-center mt-4">¿Olvidaste tu contraseña?</h3>
  </v-card-text>
</template>
<script>
  export default {
    name: 'Login'
  }
</script>