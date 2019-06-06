  <template>
  <div id="app">
    <nav class="nav-bar">
      <div class="nav-bar__group">
        <img class="nav-bar__group-image" src="./assets/logo-mini.png" alt="logo" width="60" height="60">
        <h1 class="nav-bar__group-title">Pizza</h1>
      </div>
      <div class="nav-bar__group">
        <h3 class="nav-bar__group-price">Price:  {{price}} р.</h3>
        <img class="nav-bar__group-image bag" src="./assets/bag.png" alt="logo" width="50" height="50">
      </div>
    </nav>
    <div class="components">
      <router-view/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('bag', [
      'price'
    ]),
  },
  //Прсто какойто коментарий
}
</script>
<style>
  #app {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #cccccc;
  }
  .nav-bar {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    background-color: #ff6400;
  }
  .nav-bar__group {
    display: flex;
    margin: 15px;
  }
  .nav-bar__group-title {
    padding: 5px 15px 0;
  }
  .nav-bar__group-price {
    padding: 10px 15px 0;
  }
  .bag {
    margin: 5px 20px 5px;
  }
  .components {
    width: 75%;
    height: 80%;
    position: fixed;
    left: 14%;
    margin: -20px auto 0;
  }
</style>
