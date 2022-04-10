<template>
  <div>
    <v-card :class="color">
      <v-card-title primary-title> {{title}} </v-card-title>
      <v-card-subtitle> {{desc}} </v-card-subtitle>
      <v-card-text><h2>Count: {{count}}</h2></v-card-text>
      <v-card-actions>
        <v-btn @click="addVote" color="success">Vote</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    props: ['title', 'desc', 'color'],
    data(){
        return {
            count: 0
        }
    },
    methods: {
        addVote(){
            this.count++
        }
    }
};
</script>

<style scoped>
    .color-1 {
        background-color: yellow;
    }
    .color-2 {
        background-color: firebrick;
    }
    .color-3 {
        background-color: turquoise;
    }
</style>