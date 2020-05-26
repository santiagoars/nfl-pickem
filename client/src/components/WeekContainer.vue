<template>
  <div>
      <div v-for="item in gameComponents" :key="item.id">
          {{item}}
      </div>
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
            mappedTeams: {},
            gameComponents:[]
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
        createGameComponents(){
            for(let i = 0; i<this.week.length;i++){
                this.gameComponents.push(new GameContainer())
            }
        },
        fillGames(){
            for(let i = 0; i < this.week.length; i++){
                this.gameComponents[i].awayName = this.mappedTeams[this.week[i].AwayTeam].FullName
                this.gameComponents[i].awayLine = this.week[i].AwayTeamMoneyLine
                this.gameComponents[i].awayUrl = this.mappedTeams[this.week[i].AwayTeam].photo_url

                this.gameComponents[i].homeName = this.mappedTeams[this.week[i].HomeTeam].FullName
                this.gameComponents[i].homeLine = this.week[i].HomeTeamMoneyLine
                this.gameComponents[i].homeUrl = this.mappedTeams[this.week[i].HomeTeam].photo_url

                this.gameComponents[i].stadium = this.week[i].StadiumDetails.Name
                this.gameComponents[i].overUnder = this.week[i].OverUnder
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