<template>
  <v-dialog v-if="dialog" v-model='dialog' max-width='500px'>
    <v-card>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color='error' text @click='closeDialog'>Close</v-btn>
      </v-card-actions>

      <v-card-title>
        <span class='headline'>{{}}</span>
      </v-card-title>

      <v-card-text>
        <h3>{{}}</h3>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'AppMessage',
  computed: {
    dialog: {
      get() {
        return this.$store.state.packagesData.chosenPackage
      },
      set(value) {
        this.$store.commit('setChosenPackage', value)
      }
    }
  },

  methods: {
    closeDialog() {
      this.$store.commit('setChosenPackage', null)
    }
  }
};
</script>
