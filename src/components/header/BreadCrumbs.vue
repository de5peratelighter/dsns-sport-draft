<template>
    <v-container ma-0 pa-0 fluid v-show="breadCrumbItems.length">
        <v-row>
          <v-breadcrumbs light :items="breadCrumbItems">
            <template v-slot:divider>
              <v-icon color="white">mdi-chevron-right</v-icon>
            </template>
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item :disabled="item.disabled" class="breadcrumbs-item white--text">
                <span @click="$router.push(item.to)">
                  {{ item.text.toUpperCase() }}
                </span>
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </v-row>
        <template v-if="isSelectCompetitionRoute">
          <v-row class="justify-center">
            <div class="d-flex justify-center">
              Виберіть змагання із вже існуючих або створіть нове
            </div>
          </v-row>
        </template>
        <template v-else-if="isConfigByTypeRoute">
          <v-row class="justify-center">
            <div class="d-flex justify-center">
              Детальні налаштування по видах
            </div>
          </v-row>
        </template>
        <template v-else-if="isConfigJudgesRoute">
          <v-row class="justify-center">
            <div class="d-flex justify-center">
              Склад суддівської колегії
            </div>
          </v-row>
        </template>
        <template v-else-if="isConfigCoreMain">
          <v-row class="justify-center">
            <div class="d-flex justify-center">
              Налаштування змаганнь
            </div>
          </v-row>
        </template>
    </v-container>
</template>
<script>
export default {
  computed: {
    isSelectCompetitionRoute() {
      return this.$route.name === 'selectCompetition'
    },
    isEditCompetitionRoute() {
      return this.$route.name === 'editCompetition'
    },
    isConfigByTypeRoute () {
      return this.$route.name === 'configByType';
    },
    isConfigJudgesRoute () {
      return this.$route.name === 'configJudges'
    },
    isConfigCoreMain () {
      return this.$route.name === 'configMain'
    },
    isConfigLogos () {
      return this.$route.name === 'configLogos'
    },
    breadCrumbItems() {
      if (this.isSelectCompetitionRoute) {
        let competitionItems = [
          {
            text: 'Select competition',
            disabled: false,
            exact: true,
            to: { name: 'selectCompetition' },
          },
        ];
        return competitionItems;
      }
      if (this.isConfigByTypeRoute || this.isConfigJudgesRoute || this.isConfigCoreMain || this.isConfigLogos) {
        let params = { id: this.$route.params.id }
        let configItems = [
          {
            text: 'Configuration',
            disabled: false,
            exact: true,
            to: { name: 'editCompetition', params },
          },
        ];
        if (this.isConfigByTypeRoute) {
          configItems.push(
            {
              text: 'By type',
              disabled: true,
              exact: true,
            }
          )
        } else if (this.isConfigJudgesRoute) {
          configItems.push(
            {
              text: 'Judges',
              disabled: true,
              exact: true,
            }
          )
        } else if (this.isConfigCoreMain) {
          configItems.push(
            {
              text: 'Core',
              disabled: true,
              exact: true,
            }
          ) 
        } else if (this.isConfigLogos) {
          configItems.push(
            {
              text: 'Logos',
              disabled: true,
              exact: true,
            }
          ) 
        }
        return configItems;
      }
      return [];
    }
  },
}
</script>

<style lang="scss">
  .breadcrumbs {
    &-item {
      cursor: pointer;
    }
  }
</style>