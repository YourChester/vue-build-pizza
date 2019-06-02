<template>
  <div class="constructor">
    <div class="constructor__ingredient">
      <div class="constructor__ingredient-card">
        <h3 
          @click="onIngredientsShow(0)"
          class="constructor__ingredient-text"
        >
          Мясо
        </h3>
        <div 
          v-show="ingredientsShow == 0 ? true : false "
          class="constructor__ingredient-item"
        >
          <IngredientComponent
            v-for="(item, index) in meat"
            :key="index"
            :item="item"
            :index="index"
            name="meat"
          >
          </IngredientComponent>
        </div>
      </div>
      <div class="constructor__ingredient-card">
        <h3 
          @click="onIngredientsShow(1)"
          class="constructor__ingredient-text"
        >
          Овощи
        </h3>
        <div 
          v-show="ingredientsShow == 1 ? true : false "
          class="constructor__ingredient-item"
        >
          <IngredientComponent
            v-for="(item, index) in vegetables"
            :key="index"
            :item="item"
            :index="index"
            name="vegetables"
          >
          </IngredientComponent>
        </div>
      </div>
      <div class="constructor__ingredient-card">
        <h3 
          @click="onIngredientsShow(2)"
          class="constructor__ingredient-text"
        >
          Рыба
        </h3>
        <div 
          v-show="ingredientsShow == 2 ? true : false "
          class="constructor__ingredient-item"
        >
          <IngredientComponent
            v-for="(item, index) in fish"
            :key="index"
            :item="item"
            :index="index"
            name="fish"
          >
          </IngredientComponent>
        </div>
      </div>
      <div class="constructor__ingredient-card">
        <h3 
          @click="onIngredientsShow(3)"
          class="constructor__ingredient-text"
        >
          Сыр
        </h3>
        <div 
          v-show="ingredientsShow == 3 ? true : false "
          class="constructor__ingredient-item"
        >
          <IngredientComponent
            v-for="(item, index) in cheese"
            :key="index"
            :item="item"
            :index="index"
            name="cheese"
          >
          </IngredientComponent>
        </div>
      </div>
    </div>
    <div class="constructor__view">
      <div class="constructor__view-ingredient">
        <div v-if="activeBread" class="constructor__view-ingredient-img" style="background-image: url(./static/img/americanBread.png);">
        </div>
        <div v-else class="constructor__view-ingredient-img" style="background-image: url(./static/img/italiaBread.png);">
        </div>
        <div v-if="activeSouse" class="constructor__view-ingredient-img" style="background-image: url(./static/img/constructorRedSouce.png);">
        </div>
        <div  v-else class="constructor__view-ingredient-img" style="background-image: url(./static/img/constructorWhiteSouce.png);">
        </div>
        <div
          v-for="(item, index) in cheese"
          :key="index"
          v-show="item.count > 0"
          class="constructor__view-ingredient-img" 
          :style="`background-image: url(${item.imgCons});`"
        >
        </div>
        <div
          v-for="(item, index) in meat"
          :key="index+10"
          v-show="item.count > 0"
          class="constructor__view-ingredient-img" 
          :style="`background-image: url(${item.imgCons});`"
        >
        </div>
        <div
          v-for="(item, index) in vegetables"
          :key="index+100"
          v-show="item.count > 0"
          class="constructor__view-ingredient-img" 
          :style="`background-image: url(${item.imgCons});`"
        >
        </div>
        <div
          v-for="(item, index) in fish"
          :key="index+1000"
          v-show="item.count > 0"
          class="constructor__view-ingredient-img" 
          :style="`background-image: url(${item.imgCons});`"
        >
        </div>
      </div>
    </div>
    <div class="constructor__radio-button">
      <div class="constructor__radio-button-group">
        <button 
          @click="activeBread = true"
          :class="activeBread ? 'active' : '' "
          class="constructor__radio-button-group-item left"
        >
          <img src="/static/img/americanBread.png" alt="american bread" width="60" height="60">
        </button>
        <button 
          @click="activeBread = false"
          :class="activeBread ? '' : 'active' "
          class="constructor__radio-button-group-item right"
        >
          <img src="/static/img/italiaBread.png" alt="italia bread" width="60" height="60">
        </button>
        <div v-if="activeBread" class="constructor__radio-button-group-text">
          <p>
            Американский корж
          </p>
          <small class="form-text text-muted">{{americanBredPrice}}р.</small>
        </div>
        <div v-else class="constructor__radio-button-group-text">
          <p>
            Итальянский корж
          </p>
          <small class="form-text text-muted">{{italianBredPrice}}р.</small>
        </div>
      </div>
      <div class="constructor__radio-button-group">
        <button 
          @click="activeSouse = true"
          :class="activeSouse ? 'active' : '' "
          class="constructor__radio-button-group-item left"
        >
          <img src="/static/img/constructorRedSouce.png" alt="american bread" width="60" height="60">
        </button>
        <button 
          @click="activeSouse = false"
          :class="activeSouse ? '' : 'active' "
          class="constructor__radio-button-group-item right"
        >
          <img src="/static/img/constructorWhiteSouce.png" alt="italia bread" width="60" height="60">
        </button>
        <div v-if="activeSouse" class="constructor__radio-button-group-text">
          <p>
            Томатный соус
          </p>
          <small class="form-text text-muted">{{potatoSousePrice}}р.</small>
        </div>
        <div v-else class="constructor__radio-button-group-text">
          <p>
            Сливочный соус
          </p>
          <small class="form-text text-muted">{{sliveSousePrice}}р.</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IngredientComponent from '@/components/IngredientComponent'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { IngredientComponent },
  name: 'PizzaComponent',
  data () {
    return {
      ingredientsShow: 0,
      activeSouse: true,
      activeBread: true,
      americanBredPrice: 50,
      italianBredPrice: 80,
      potatoSousePrice: 20,
      sliveSousePrice: 30,
    }
  },
  watch: {
    activeSouse(newVal, oldVal) {
      this.minusPrice({
        num: oldVal ? this.potatoSousePrice : this.sliveSousePrice
      })
      this.plusPrice({
        num: newVal ? this.potatoSousePrice : this.sliveSousePrice
      })
    },
    activeBread(newVal, oldVal) {
      this.minusPrice({
        num: oldVal ? this.americanBredPrice : this.italianBredPrice
      })
      this.plusPrice({
        num: newVal ? this.americanBredPrice : this.italianBredPrice
      })
    }
  },
  computed: {
    ...mapGetters('ingredients', [
      'meat',
      'vegetables',
      'cheese',
      'fish'
    ]),
  },
  methods: {
    ...mapActions('bag', [
      'minusPrice',
      'plusPrice'
    ]),
    onIngredientsShow(num) {
      this.ingredientsShow = num
    }
  }
}
</script>

<style scoped>
  .constructor {
    height: 100%;
    padding: 15px 5px 5px 5px;
    display: flex;
    background-color: white;
    box-shadow: 2px 2px 5px rgba(90, 90, 90, 0.5);
  }
  .constructor__ingredient-card {
    width: 100%;
    margin: 5px 5px 5px 10px;
    box-shadow: 0.5px 0.5px 3px rgba(90, 90, 90, 0.5);
  }
  .constructor__ingredient-text{
    width: 100%;
    height: 50px;
    padding: 10px 20px 0;
    cursor: pointer;
    border: solid rgba(90, 90, 90, 0.5);
    border-width: 0 0 1px;
  }
  .constructor__ingredient-item {
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
    margin: 0 0 0 40px;
  }
  .constructor__view-ingredient {
    /* background-color: aqua; */
    width: 40%;
    height: 60%;
    position: fixed;
    margin: 0 0 0 40px;
  }
  .constructor__view-ingredient-img {
    background-color: transparent;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 20px;
    bottom: 20px;
    left: 100px;
  }
  .constructor__view-ingredient-img::after {
    content: '';
    display: block;
    padding-top: 100%;
  }
  .constructor__radio-button {
    position: absolute;
    top: 80%;
    left: 50%;
    display: flex;
  }
  .constructor__radio-button-group {
    display: flex;
    margin: 0 20px 0;
  }
  .constructor__radio-button-group-item {
    border: 1px solid rgba(90, 90, 90, 0.5);
    margin: 0;
  }
  .constructor__radio-button-group-text {
    width: 200px;
    padding: 15px 15px 0;
  }
  .left {
    border-radius: 5px 0 0 5px;
  }
  .right {
    margin-left: -1px;
    border-radius: 0 5px 5px 0;
  }
  .active {
    border: 1px solid rgba(9, 255, 0, 0.644);
  }
</style>
