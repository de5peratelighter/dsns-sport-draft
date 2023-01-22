<template>
  <v-app>
    <template v-if="notHomePage">

      <Header />

      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
      </v-navigation-drawer>
    </template>

    <v-main>
      <v-container fluid class="pa-4 fill-height"> 
        <router-view />
      </v-container>
    </v-main>
    
    <v-footer app />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  },
  data: function () {
    return {
      drawer: false,
    }
  },
  computed: {
    notHomePage() {
        return this.$route.name !== 'home';
    },
  },
  mounted () {
    console.warn('YO')
  }
}
</script>

<style lang="scss">
.app-header {
  &-logo-spacer {
    height: 60px;
    width: 4px;
    background: #fff;
  }
}
</style>
