<template>
  <div>
      <GameContainer ref="GameContainer" />
  </div>
</template>

<script>
import GetService from '../GetService'
import GameContainer from '../components/GameContainer.vue'
export default {
    name: 'WeekContainer',
    data(){
        return {
            week: [],
            teams: [],
            mappedTeams: {}
        }
    },
    async mounted(){
        try{
            this.week = await GetService.getPosts("http://localhost:5000/api/gets")
            this.teams = await GetService.getPosts("http://localhost:5000/api/teams")
            this.mappedTeams = this.mapTeams()
            console.log(this.week)
            console.log(this.mappedTeams)
            this.fillGames()
        }catch(err){
            console.log(err.message)
        }
    },
    methods: {
        mapTeams(){
            let mappedTeams = {};
            for(let i = 0; i < this.teams.length; i++){
                mappedTeams[this.teams[i].Key] = this.teams[i]
            }
            return mappedTeams;
        },
        fillGames(){
            for(let i = 0; i < this.week.length; i++){
                this.$refs.GameContainer.awayName = this.mappedTeams[this.week[i].AwayTeam].FullName
                this.$refs.GameContainer.awayLine = this.week[i].AwayTeamMoneyLine
                this.$refs.GameContainer.awayUrl = this.mappedTeams[this.week[i].AwayTeam].photo_url

                this.$refs.GameContainer.homeName = this.mappedTeams[this.week[i].HomeTeam].FullName
                this.$refs.GameContainer.homeLine = this.week[i].HomeTeamMoneyLine
                this.$refs.GameContainer.homeUrl = this.mappedTeams[this.week[i].HomeTeam].photo_url

                this.$refs.GameContainer.stadium = this.week[i].StadiumDetails.Name
                this.$refs.GameContainer.overUnder = this.week[i].OverUnder
            }
        }
    },
    components: {
        GameContainer
    }
}
</script>

<style>

</style>