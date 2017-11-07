<template>
  <div class='home'>
    <h1>Let's get started</h1>
    <div class='frame-select-home'>
        <div class='card card--flip'>
          <div class='card__content'>
            <div class='card__front'>
              <img src='../assets/Custom-frame.svg' alt=''>
              <h2>Create a custom frame</h2>
            </div>
            <div class='card__back'>
              <div class='frame-select__data'>
                <p>Measure the width and height of the artwork you'd like to frame, and provide both dimensions below.</p>
                <div class='input-area'>
                  <input type='text' placeholder="Width" v-model="width">
                  <input type='text' placeholder="Height" v-model="height">
                  <router-link class="btn" :to="{ name: 'frame', params: { width: width, height: height } }">Proceed</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class='card card--flip'>
        <div class='card__content'>
          <div class='card__front'>
            <img src='../assets/Upload-photo.svg' alt=''>
            <h2>Choose from a standard sizes</h2>
          </div>
          <div class='card__back'>
            <div class='frame-select__data'>
              <button class='input-area' @click="setSize('10', '15')">
                10 x 15
              </button>
              <button class='input-area' @click="setSize('15', '20')">
                15 x 20
              </button>
              <button class='input-area' @click="setSize('20', '30')">
                20 x 30
              </button>
              <button class='input-area' @click="setSize('30', '40')">
                30 x 40
              </button>
              <button class='input-area' @click="setSize('30', '90')">
                30 x 90
              </button>
            </div>
            <router-link class="btn" :to="{ name: 'frame', params: { width: width, height: height } }">Proceed</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        width: '',
        height: ''
      }
    },
    methods: {
      setSize (w, h) {
        this.width = w
        this.height = h
      }
    }
  }
</script>

<style>
  .home {
    padding: 1em 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home h1 {
    margin: 0 0 1em;
  }

  .frame-select-home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .card {
    position: relative;
    height: 340px;
    text-decoration: none;
    color: inherit;
    margin-bottom: 1em;
    perspective: 1000;
  }

  .card__content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    transition: 0.6s;
    transform-style: preserve-3d;
  }

  .card__front, .card__back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1em;
    backface-visibility: hidden;
  }

  .card__front {
    z-index: 2;
  }

  .card__back {
    transform: rotateY(180deg);
  }

  .card:hover .card__content {
    transform: rotateY(180deg);
  }

  .frame-select-home img {
    max-width: 250px;
  }

  .input-area {
    padding: 15px 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #eee;
    border-radius: 3px;
  }

  .input-area input:focus {
    outline: 1px solid #2980b9;
  }

  .input-area input {
    width: calc((100% - 20px)/2);
    padding: 0 10px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #ddd;
  }


  .input-area .btn {
    margin: 20px auto;
  }

  .card__back .frame-select__data {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1em;
  }

  .card__back .input-area {
    margin-bottom: 1em;
  }

  @media screen and (min-width: 720px) {
    .frame-select-home {
      flex-direction: row;
    }

    .card {
      margin-bottom: 0;
      width: calc((100% - 20px)/2);
    }
  }

</style>
