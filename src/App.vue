  <template>
  <div id="app">
    <nav class="nav-bar">

    </nav>
    <div class="components">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #cccccc;
  }
  .nav-bar {
    width: 100%;
    height: 100px;
    background-color: #ff6400;
  }
  .components {
    width: 70%;
    margin: -20px auto 0;
  }
</style>
