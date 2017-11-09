<template>
  <div class='home'>
    <div class='home__content'>
      <h1>Let's get started</h1>
      <div class='frame-select-home'>
          <div class='card'>
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
        <div class='card'>
          <div class='card__content'>
            <div class='card__front'>
              <img src='../assets/Upload-photo.svg' alt=''>
              <h2>Choose from a standard sizes</h2>
            </div>
            <div class='card__back'>
              <div class='frame-select__data'>
                <input type='radio' name="size" id="size1" value="10x15" v-model="tempSize">
                <label for="size1" class='input-area input-area--sizes'>
                  10 x 15
                </label>
                <input type='radio' name="size" id="size2" value="15x20" v-model="tempSize">
                <label for="size2" class='input-area input-area--sizes'>
                  15 x 20
                </label>
                <input type='radio' name="size" id="size3" value="20x30" v-model="tempSize">
                <label for="size3" class='input-area input-area--sizes'>
                  20 x 30
                </label>
                <input type='radio' name="size" id="size4" value="30x40" v-model="tempSize">
                <label for="size4" class='input-area input-area--sizes'>
                  30 x 40
                </label>
                <input type='radio' name="size" id="size5" value="30x90" v-model="tempSize">
                <label for="size5" class='input-area input-area--sizes'>
                  30 x 90
                </label>
                <div class='hidden'>{{setSize}}</div>
              </div>
              <router-link class="btn" :to="{ name: 'frame', params: { width: width, height: height } }">Proceed</router-link>
            </div>
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
        height: '',
        tempSize: ''
      }
    },
    computed: {
      setSize () {
        let sizes = this.tempSize.split('x')
        this.width = sizes[0]
        this.height = sizes[1]
      }
    }
  }
</script>

<style>
  .home {
    padding: 1em 0;
    height: 1px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
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
    height: 350px;
    text-decoration: none;
    color: inherit;
    margin-bottom: 1em;
    overflow: hidden;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  }

  .card__content {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .card__front, .card__back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1em;
    transition: 0.6s;
  }

  .card__front {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card__front h2 {
    margin: 0;
  }

  .card__back {
    transform: translateY(-100%);
    background-color: #fff;
    z-index: 2;
  }

  .card:hover .card__back {
    transform: translateY(0);
  }

  .frame-select-home img {
    max-width: 250px;
  }

  .input-area {
    width: 100%;
    padding: 15px 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #eee;
    border-radius: 3px;
    border: 2px solid #eee;
  }

  .input-area--sizes {
    width: auto;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
  }

  .card__back input[type="radio"] {
    display: none;
  }

  .card__back input[type='radio']:checked + .input-area {
    border: 2px solid #57ad68;
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

  .card__back button:focus,
  .card__back button:active {
    outline: none;
    border: 2px solid #57ad68;
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

  @media screen and (max-width: 720px) and (max-height: 870px) {
    .home {
      height: auto;
    }
  }

</style>
