<template>
  <v-container>
    <!--Only for PC-->
    <v-row align="center" justify="center" class="d-none d-sm-flex">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-5">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <Login />
                </v-col>
                <v-col cols="12" sm="6" class="black rounded-bl-xl">
                  <StepSingUp @getStep="getStep"></StepSingUp>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" sm="6" class="black rounded-br-xl">
                  <StepLogin @getStep="getStep"></StepLogin>
                </v-col>
                <v-col cols="12" sm="6">
                  <SingUp />
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
        <v-card class="elevation-6 mt-5">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="12">
                  <SingMobile @getStep="getStep"></SingMobile>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" sm="12">
                  <LoginMobile @getStep="getStep"> </LoginMobile>
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
import StepSingUp from "../components/StepSingUp";
import StepLogin from "../components/StepLogin";
import Login from "../components/Login";
import LoginMobile from "../components/LoginMobile";
import SingUp from "../components/SingUp";
import SingMobile from "../components/SingMobile";

  export default {
    components: {
      Login,
      StepSingUp,
      StepLogin,
      SingUp,
      LoginMobile,
      SingMobile
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
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
