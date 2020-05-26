<template>
  <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container justify-content-center">
          <div class="row">
            <div class="col">
              <img id="nfl-logo" src="../assets/nfl-logo.png" alt="nfl-logo">
              <h1 class="navbar-brand title">NFL PICK'EM</h1>
            </div>
          </div>
        </div>
      </nav>
      <div class="select-week container">
        <div class="row justify-content-center">
          <div class="form-group" id="select">
            <select class="form-control" style="width:350px">
              <option>Week 1</option>
              <option>Week 2</option>
              <option>Week 3</option>
              <option>Week 4</option>
              <option>Week 5</option>
              <option>Week 6</option>
              <option>Week 7</option>
              <option>Week 8</option>
              <option>Week 9</option>
              <option>Week 10</option>
              <option>Week 11</option>
              <option>Week 12</option>
              <option>Week 13</option>
              <option>Week 14</option>
              <option>Week 15</option>
              <option>Week 16</option>
              <option>Week 17</option>
            </select>
          </div>
        </div>
      </div>
      <div class="games">
        <WeekContainer />
      </div>
  </div>
</template>

<script>
import WeekContainer from '../components/WeekContainer.vue'
export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  components: {
    WeekContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

 *{
   font-family: 'Lato', sans-serif;
 }

  #nfl-logo{
    width: 65px;
    margin-bottom: 14px;
  }

  .title{
    color: #fff;
    text-align: center;
    font-size: 35px;
    margin-left: 20px;
    margin-top: 14px;
  }

  .select-week{
    margin-top: 50px;
  }

  #select{
    text-align: center;
  }
</style>
