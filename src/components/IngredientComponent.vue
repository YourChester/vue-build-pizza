<template>
  <div class="ingredient-item">
    <p 
      v-show="item.count > 0"
      class="ingredient-item__count"
    >
      {{ item.count }}
    </p>
    <p 
      class="ingredient-item__price"
    >
      {{ item.price }}р.
    </p>
    <div class="ingredient-item__img">
      <img :src="item.img" :alt="item.name" width="60" height="50">
    </div>
    <div class="ingredient-item__text">
      <p>{{ item.name }}</p>
    </div>
    <div class="ingredient-item__button-group">
      <button
        @click="minus()"
        :disabled="item.count == 0"
        :class="item.count == 0 ? 'disable' : ''"
        class="ingredient-item__button-group-item left"
      >
        <img src="../assets/minus.png" alt="" width="15" height="15">
      </button>
      <button
        @click="plus()"
        class="ingredient-item__button-group-item right"
      >
        <img src="../assets/plus.png" alt="" width="15" height="15">
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IngredientComponent',
  props: ['item', 'index', 'name'],
  data () {
    return {
      
    }
  },
  methods: {
    ...mapActions('ingredients', [
      'minusCount',
      'plusCount'
    ]),
    ...mapActions('bag', [
      'minusPrice',
      'plusPrice'
    ]),
    minus() {
      this.minusPrice({
        num: this.item.price * this.item.count
      })
      this.minusCount({
        name: this.name,
        id: this.index
      })
    },
    plus() {
      this.plusCount({
        name: this.name, 
        id: this.index
      })
      this.plusPrice({
        num: this.item.price * this.item.count
      })
    }
  }
}
</script>

<style scoped>
  .ingredient-item {
    text-align: center;
    margin: 5px;
  }
  .ingredient-item__count {
    width: 25px;
    height: 25px;
    margin-left: 30px;
    position: absolute;
    border-radius: 50%;
    background-color: #e53935;
    color: #fff;
  }
  .ingredient-item__price {
    width: 30px;
    height: 30px;
    margin-left: 90px;
    padding: 2px 0 0;
    position: absolute;
    border-radius: 50%;
    background-color: #e53935;
    color: #fff;}
  .ingredient-item__img {
    height: 60px;
    width: 60px;
    margin: 0 auto 0;
  }
  .ingredient-item__text {
    height: 50px;
    margin: 5px auto 5px;
  }
  .ingredient-item__button-group {
    height: 30px;
    width: 50px;
    display: flex;
    margin: 0 auto 5px;
  }
  .ingredient-item__button-group-item {
    height: 25px;
    width: 25px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: #e53935;
  }
  .left {
    border-radius: 5px 0 0 5px;
  }
  .right {
    border-radius: 0 5px 5px 0;
  }
  .disable {
    background-color: #e57373;
  }
</style>
