<template>
  <div style="text-align: center; padding: 180px 0;">
    <v-card-text class="white--text">
      <h3 class="text-center">¿Aún no tienes una cuenta?</h3>
      <h5 class="text-center">
        Vamos a prepararlo todo para que pueda comenzar a crear su primera <br>
        experiencia de incorporación.
      </h5>
    </v-card-text>
    <div class="text-center">
      <v-btn tile outlined dark @click="setData">REGISTRARSE</v-btn>
    </div>
  </div>
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