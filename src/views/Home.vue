<template>
  <v-container class="fill-height" fluid>
    <!--Only for PC-->
    <v-row align="center" justify="center" class="d-none d-sm-flex">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <Login />
                  <div class="text-center mt-3 mb-12">
                    <v-btn rounded color="blue darken-4" dark>INICIAR SESIÓN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="blue darken-4">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">¡Hola, Amigo!</h1>
                    <h5
                      class="text-center"
                    >Ingrese sus datos personales y comience el viaje con nosotros</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step++">REGISTRARSE</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from "../components/Login";

export default {
  name: 'Home',
  components: {
    Login
  },
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  }
}
</script>
