<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html {
    box-sizing: border-box;
  }
  *, *:after, *:before {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
  }

  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 60px auto 0;
    text-align: left;
  }

  .btn {
    display: inline-block;
    padding: 0 30px;
    appearance: none;
    background-color: #57ad68;
    color: #ffffff;
    border: none;
    outline: none;
    text-transform: uppercase;
    line-height: 40px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
  }
</style>
