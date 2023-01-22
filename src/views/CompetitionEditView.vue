<template>
  <v-container class="competition-edit-container white--text" ma-0 pa-0 fluid>
    <div class="text-center">
      Competition edit page, ID: {{ $route.params.id || ''}}

      <div>Фото сюжет</div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      competitionData: null
    }
  },
  mounted() {
    this.fetchCompetitionById();
  },
  methods: {
   async fetchCompetitionById() {
      const requestData = {
        id: this.$route.params.id
      };
      return Promise.resolve(requestData)
        .then(({ data = {} }) => {
          this.competitionData = data;
        })
    }
  }
}
</script>