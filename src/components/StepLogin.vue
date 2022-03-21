<template>
  <div style="text-align: center; padding: 180px 0;">
    <v-card-text class="white--text">
      <h3 class="text-center"> ¿Ya estas registrado?</h3>
      <h5 class="text-center">
        Inicie sesión en su cuenta para que pueda continuar construyendo y<br>
        editando sus flujos de incorporación.
      </h5>
    </v-card-text>
    <div class="text-center">
      <v-btn tile outlined dark @click="setData">Iniciar sesión</v-btn>
    </div>
  </div>
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