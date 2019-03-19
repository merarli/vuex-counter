import {
  ADD_CAR,
  CHANGE_MYSTRING,
  COUNT_DOWN_CAR,
  COUNT_UP_CAR,
  DONE_CAR,
  GET_CARS,
  READ_CAR,
  REMOVE_CAR,
  SAVE_CAR
} from './mutation-type';


const car = {
  namespaced: true,
  state: {
    //初期データ
    items: [
      {
        name: 'crown',
        is_done: false,
        count: 0
      },

      {
        name: '86',
        is_done: false,
        count: 0
      },

      {
        name: 'corolla',
        is_done: false,
        count: 0
      }
    ],
    mystring: '',
  },


  actions: {

    [ADD_CAR]({commit, state, rootState}, newValue) {
      let newItem = {
        name: newValue,
        is_done: false,
        count: 0
      }
      commit(ADD_CAR, {data: newItem})
      commit(CHANGE_MYSTRING, {data: ''})
    },


    [DONE_CAR]({commit, state, rootState}, selItem) {
      commit(DONE_CAR, {data: selItem})
    },


    [REMOVE_CAR]({commit, state, rootState}, selItem) {
      commit(REMOVE_CAR, {data: selItem})
    },

    [COUNT_UP_CAR]({commit, state, rootState}, selItem) {
      commit(COUNT_UP_CAR, {data: selItem})
    },

    [COUNT_DOWN_CAR]({commit, state, rootState}, selItem) {
      commit(COUNT_DOWN_CAR, {data: selItem})
    },

    [READ_CAR]({commit, state, rootState}, selItem) {
      commit(READ_CAR, {data: selItem})
    },

    [SAVE_CAR]({commit, state, rootState}, selItem) {
      commit(SAVE_CAR, {data: selItem})
    }
  },

  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    [ADD_CAR](state, payload) {
      if (payload.data.name == "") {
        alert("車名を入力してください");
      } else {
        state.items.push(payload.data);
      }
    },

    [READ_CAR](state, payload) {
      //GETリクエスト
      $.ajax({
        url: 'https://script.google.com/macros/s/AKfycby8g63J8uflVsHDwiOA01ftgCF1DmP7su7qcJcDBsG2eoiHkc5V/exec',
        type: 'GET',
        dataType: 'json',
        // フォーム要素の内容をハッシュ形式に変換
        timeout: 10000,
      })
        .done(function (data) {
          // 通信成功時の処理を記述
          console.log(JSON.parse(data));
        })
        .fail(function () {
          // 通信失敗時の処理を記述
          console.log('通信失敗');
        });
    },

    [SAVE_CAR](state, payload) {

    },

    [DONE_CAR](state, payload) {
      state.items.map(it => {
        if (it.name == payload.data.name) {
          it.is_done = !it.is_done
        }
      })
    },


    [REMOVE_CAR](state, payload) {
      if (window.confirm('本当に削除しますか？')) {

        for (let i = 0; i < state.items.length; i++) {
          if (state.items[i].name == payload.data.name) {
            state.items.splice(i, 1)
            break
          }
        }
      }
    },

    [COUNT_UP_CAR](state, payload) {
      state.items.map(it => {
        //他のオブジェクトに干渉しないようになっている
        if (it.name == payload.data.name) {
          it.count++;
        }
      })
    },

    [COUNT_DOWN_CAR](state, payload) {
      state.items.map(it => {
        if (it.name == payload.data.name) {
          if (it.count > 0) {
            it.count--;
          }
        }
      })
    },


    [CHANGE_MYSTRING](state, payload) {
      state.mystring = payload.data
    }
  },
  //getters:コンポーネントでいうcomputed的なもの
  getters: {
    [GET_CARS](state, getters, rootState) {
      return state.items;
    }
  }
}

export default car
