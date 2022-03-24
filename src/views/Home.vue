<template>
  <v-container class="fill-height" fluid>
    <!--Only for PC-->
    <v-row align="center" justify="center" class="d-none d-sm-flex">
      <v-col cols="12" sm="8">
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
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="blue darken-4">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">¡Regresaste!</h1>
                    <h5
                      class="text-center"
                    >Para mantenerse conectado con nosotros, inicie sesión con su información personal</h5>
                  </v-card-text>
                  <div class="text-center mb-12">
                    <v-btn rounded outlined dark @click="step--">INICIAR SESIÓN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <SignUp />
                  <div class="text-center mt-n5 mb-12">
                    <v-btn rounded color="blue darken-4" dark>REGISTRARSE</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
    <!--Only for Mobile-->
    <v-row align="center" justify="center" class="d-flex d-sm-none">
      <v-col cols="12" sm="10">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="12">
                  <LoginMobile @getStep="getStep"></LoginMobile>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" sm="12">
                  <SignMobile @getStep="getStep"></SignMobile>
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
import LoginMobile from "../components/LoginMobile";
import SignUp from "../components/SignUp";
import SignMobile from "../components/SignMobile";

export default {
  name: 'Home',
  components: {
    Login,
    SignUp,
    LoginMobile,
    SignMobile
  },
  data: () => ({
    step: 1
  }),
  methods: {
    getStep(data) {
      this.step = data;
    }
  },
  props: {
    source: String
  }
}
</script>
