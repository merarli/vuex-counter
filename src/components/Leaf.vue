<template>
  <div class="panel panel-primary col-xs-6 col-lg-4">

    <div class="panel-heading">
      <h3 @click="DONE_CAR(item)" class="fl lhand" v-bind:class="{done: item.is_done}">{{item.name}}</h3>
    </div>

    <div class="panel-body">

      <h2>{{item.count}}</h2>
      <button @click="COUNT_DOWN_CAR(item)" class="glyphicon glyphicon-download"></button>
      <button @click="COUNT_UP_CAR(item)" class="glyphicon glyphicon-upload"></button>


        <button class="btn btn-default" @click="REMOVE_CAR(item)">削除</button>


    </div>
  </div>
</template>

<script>
  import {COUNT_DOWN_CAR, COUNT_UP_CAR, DONE_CAR, REMOVE_CAR} from '../store/mutation-type'
  import {mapActions} from 'vuex'

  export default {
    name: "Leaf",
    props: ['item'],
    methods: {
      ...mapActions('car', [
        DONE_CAR,
        REMOVE_CAR,
        COUNT_UP_CAR,
        COUNT_DOWN_CAR
      ])
    }
  }

</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }

  .panel-body .glyphicon {
    font-size: 3em;
  }

  .panel-heading {
    color: dimgray;
    background-color: #ffffff;
    border-color: gray;
  }

  .panel-primary {
    border-bottom-color: lightpink;
    border-color: gray;
  }

  .glyphicon-download {
    color: cadetblue;
  }

  .glyphicon-upload {
    color: crimson;
  }

  .panel-heading h3{
    margin-top: 5px;
    margin-bottom: 5px;
  }


</style>
