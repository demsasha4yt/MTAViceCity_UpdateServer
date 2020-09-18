<template>
  <v-container grid-list-xl>
    <v-layout v-bind="binding">
      <v-flex v-for="key in currentKeys" v-bind:key="key">
        <v-card dark color="primary" >
          <v-card-title class="align-center font-weight-bold">{{key}}</v-card-title>
          <v-card-text>
            <p>Директория: {{currents[key].folder}} </p>
            <p>Путь: {{currents[key].path}} </p>
            <p>Текущая версия: {{ currents[key].info.version}}</p>
            <p>URL: <a class="grey--text" :href="currents[key].info.dataUrl">{{currents[key].info.dataUrl}}</a></p>
            <router-link :to="'gta/'+ key" tag="v-btn">Изменить</router-link>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      },
      currents(){
        return this.$store.getters.Currents;
      },
      currentKeys(){
        return Object.keys(this.$store.getters.Currents);
      },
      mounted(){
        this.$store.dispatch('fetchCurrents');
      }
    }
  }
</script>

