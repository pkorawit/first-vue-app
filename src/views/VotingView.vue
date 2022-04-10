<template>
<div>
    <h2>Voting Dashboard</h2>
    <h4>Please vote for your favorite team</h4>
    <div class="voting-box" v-for="team in teams" :key="team">
        <VotingBox :title="team.title" :desc="team.desc" :color="team.color" />
    </div>
</div>
</template>

<script>
import VotingBox from "../components/VotingBox.vue"
export default {
    components: {
        VotingBox
    },
    data(){
        return {
            teams:[
                { title:"Banburee", desc:"Science", color:"color-1" },
                { title:"Gears", desc:"Engineer", color:"color-2" },
                { title:"CoC", desc:"Computing", color:"color-3" },
                { title:"MGT", desc:"Businees", color:"color-3" }
            ]
        }
    }
};
</script>

<style scoped>
 .voting-box{
     margin: 15px;
 }
</style>