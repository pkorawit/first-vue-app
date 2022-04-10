<template>
  <div>
    <h2>Voting Dashboard</h2>
    <h4>Please vote for your favorite team</h4>
    <div class="voting-box" v-for="team in teams" :key="team.id">
      <VotingBox
        @countAdded="countUpdated"
        :id="team.id"
        :title="team.title"
        :desc="team.desc"
        :startCount="team.voteCount"
        :color="team.color"
      />
    </div>
  </div>
</template>

<script>
import VotingBox from "../components/VotingBox.vue";
export default {
  components: {
    VotingBox,
  },
  mounted() {
    // Get data from firestore
    const db = this.$firebase.firestore();
    db.collection("teams")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //   console.log(`${doc.id} => ${doc.data().title}`);
          const team = {
            id: doc.id,
            title: doc.data().title,
            desc: doc.data().desc,
            voteCount: doc.data().voteCount
          };
          this.teams.push(team);
        });
      });
  },
  data() {
    return {
      teams: [],
    };
  },
  methods: {
    countUpdated(id, newCount) {
      console.log(id, newCount);
      const db = this.$firebase.firestore();
      const teamRef = db.collection("teams").doc(id);
      // Set the "voteCount" field of the current votes
      return teamRef
        .update({
          voteCount: newCount,
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
  },
};
</script>

<style scoped>
.voting-box {
  margin: 15px;
}
</style>