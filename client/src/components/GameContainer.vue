<template>
  <div>
      <div class="card game-container text-center">
            <div class="card-body">
                <div class="container text-center">
                    <div class="row">
                        <div class="col" v-on:click="changePick" v-bind:class="{'selected-team': mode == 1, 'other-team': mode == 0}">
                            <a href="#"><img v-bind:src="awayUrl" class="team-logos"></a>
                        </div>

                        <div class="col" v-on:click="changePick" v-bind:class="{'selected-team': mode == 0, 'other-team': mode == 1}">
                            <a href="#"><img class="team-logos" v-bind:src="homeUrl"></a>
                        </div>
                    </div>
                </div>
            </div>
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button class="info-button" block v-b-toggle.accordion-1>More game info</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="container">
                            <div class="row">
                            <div class="col">
                                <div class="card">
                                    <div class="card-header">
                                        Away team info
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Name: {{awayName}}</li>
                                        <li class="list-group-item">Line: {{awayLine}}</li>
                                        <li class="list-group-item">Record: {{awayRecord}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card-header">
                                        Game details
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Game starts at: {{gameStart}}</li>
                                        <li class="list-group-item">Stadium: {{stadium}}</li>
                                        <li class="list-group-item">Over/Under: {{overUnder}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card-header">
                                        Home team info
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Name: {{homeName}}</li>
                                        <li class="list-group-item">Line: {{homeLine}}</li>
                                        <li class="list-group-item">Record: {{homeRecord}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            mode: 0,
            awayUrl: "",
            awayName: "Hey!",
            awayLine: 0,
            awayRecord: "0-0",
            homeUrl: "",
            homeName: "",
            homeLine: 0,
            homeRecord: "0-0",
            gameStart: "0:00",
            stadium: "",
            overUnder: 0
        };
    },
    methods:{
        changePick(){
            if(this.mode == 0){
                this.mode = 1
                console.log(this.mode)
            }else{
                this.mode = 0
            }
        }
    }
}
</script>

<style>
    .game-container{
        margin: 40px 40px 50px 40px;
    }

    .other-team{
        background-color: #fff;
    }

    .selected-team{
        background-color: rgb(39, 39, 39);
    }

    .team-logos{
        width: 25%;
    }

    .info-button{
        background-color: #013369 !important;
    }

    .info-button:hover{
        text-decoration: underline;
    }
</style>