<template>
  <div class="container">
    <div class="row">
      <h3>車両カウンター</h3>
      <div class="form-group">
        <label>車名追加</label>
        <input type="text" v-model="mystring" class="form-control" placeholder="車名を入力してください。"/>
        <button class="btn btn-default add-btn" @click="ADD_CAR(mystring)">追加</button>
        <!--<button class="btn btn-default add-btn" @click="SAVE_CAR(mystring)">セーブ</button>-->
        <!--<button class="btn btn-default add-btn" @click="READ_CAR(mystring)">読み込み</button>-->
      </div>

    </div>

    <div class="row">
      <Leaf :item="item" v-for="item in cars"/>
    </div>

  </div>
</template>

<script>
  import {ADD_CAR, CHANGE_MYSTRING, GET_CARS,SAVE_CAR,READ_CAR} from '../store/mutation-type'
  import {mapActions, mapGetters} from 'vuex'
  import Leaf from './Leaf'
  // import firebase from '../firebase/firestore'

  export default {
    name: 'car',
    components: {
      Leaf
    },
    computed: {
      mystring: {
        get() {
          return this.$store.state.car.mystring
        },
        set(value) {
          this.$store.commit('car/' + CHANGE_MYSTRING, {data: value})
        }
      },
      ...mapGetters('car', {
        cars: GET_CARS
      })
    },
    methods: {
      ...mapActions('car', [
        ADD_CAR
      ])
    }



  }
</script>

<style scoped>

  .add-btn{
    width: 100%;
  }
</style>
