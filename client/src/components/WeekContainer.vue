<template>
  <div ref=container>
    <a href="#" class="float" v-on:click="saveGames">
        <img src="../assets/save.png" class="my-float">
    </a>
  </div>
</template>

<script>
import GetService from '../GetService'
import GameContainer from '../components/GameContainer.vue'
import Vue from 'vue'
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
            this.createGameComponents()
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
            var GameContainerClass=Vue.extend(GameContainer);
            for(let i = 0; i<this.week.length;i++){
                this.gameComponents.push(new GameContainerClass()) 
            }
            console.log(this.gameComponents)
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
                this.gameComponents[i].$mount()
                this.$refs.container.appendChild(this.gameComponents[i].$el)
            }
        },
        saveGames(){
            alert("Games saved!")
        }
    }
}
</script>

<style>
    *{padding:0;margin:0;}

body{
	font-family:Verdana, Geneva, sans-serif;
	font-size:18px;
}

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:rgb(234, 236, 240);
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
    z-index: 3000;
}

.my-float{
	margin-top:20px;
    width: 20px;
}
</style>