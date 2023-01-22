<template>
  <v-container class="competitions-container white--text" ma-0 pa-0 fluid>
    <div class="competitions-wrapper"> 
      <v-list two-line pa-0 class="pa-0">
        <v-list-item-group
          v-model="selectedIndexes"
          active-class="primary--text"
          multiple
        >
          <template v-for="(item, index) in competitions">
            <v-list-item :key="item.title" class="competitions-item">
              <template #default>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" class="text-center"></v-list-item-title>

                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.headline"
                  ></v-list-item-subtitle>

                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider
              v-if="index < competitions.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </div>
    <div class="competitions-buttons mt-3 d-flex justify-space-between">
      <v-btn color="white">
        Створити
      </v-btn>
      <div class="mx-2">
        <v-btn class="mx-2 white--text" color="green" @click="$router.push({
          name: 'editCompetition', params: {id: chosenItem.id} 
        })"
          :disabled="!chosenItem">
          Вибрати
        </v-btn>
        <v-btn class="mx-2 white--text" color="red darken-1"
          :disabled="!selectedItems.length">
          Видалити
        </v-btn>
      </div>
      <v-btn color="white">
        Вихід
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      selectedIndexes: [],
      competitions: [],
    }
  },
  computed: {
    selectedItems() {
      const indexes = this.selectedIndexes;
      return this.competitions.filter((_, index) => indexes.includes(index));
    },
    chosenItem () {
      const { length, [0]: selectedItem} = this.selectedItems;
      return length == 1 ? selectedItem : null;
    }
  },
  mounted() {
    this.fetchCompetitios();
  },
  methods: {
   async fetchCompetitios() {
      const requestData = {};
      return Promise.resolve(requestData)
        .then(({ data = [] }) => {
          const dummyData = [
            {
              id: '11',
              action: 'м Алушта',
              headline: '05 - 24 лютого 2023 року',
              title: 'Кубок україни з пожежно прикладного спорту',
            },
            {
              id: '12',
              action: 'м. Донецьк',
              headline: '01 - 25 лютого 2023 року',
              title: 'Кубок ДСНС з пожежно прикладного спорту',
            },
          ];
          this.competitions = dummyData;
        })
    }
  }
}
</script>

<style lang="scss">
  .competitions {
    &-wrapper {
      height: calc(100vh - 100px - 150px);
      overflow: auto;
    }
    &-item {
    }
  }
</style>


