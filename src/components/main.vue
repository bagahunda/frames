<template>
  <div class='main'>
    <div class='design-container'>
      <div class='design-container__preview'>
        <div :class="[{'preview--mat': hasMat}, matClass, matColor, previewClass, frameWidthClass, matWidthClass, frameClass]">
          <div class='preview__image' :style="{ 'background-image': bg }" @click="onPickFile"></div>
          <input type='file' ref='fileInput' accept='image/*' @change='onFilePicked'>
        </div>
        <div class='frame-select'>
          <h3>Choose your frame</h3>
          <div class='frames-container'>
            <div class='frame-checkbox'>
              <input type='radio' id="black" v-model="frameClass" value="preview--black">
              <label for='black'>
                <img src='../assets/black-corner-thumb.jpg' alt=''>
              </label>
            </div>
            <div class='frame-checkbox'>
              <input type='radio' id="white" v-model="frameClass" value="preview--white">
              <label for='white'>
                <img src='../assets/white-corner-thumb.jpg' alt=''>
              </label>
            </div>
            <div class='frame-checkbox'>
              <input type='radio' id="cream" v-model="frameClass" value="preview--cream">
              <label for='cream'>
                <img src='../assets/maple-corner-thumb.jpg' alt=''>
              </label>
            </div>
            <div class='frame-checkbox'>
              <input type='radio' id="brown" v-model="frameClass" value="preview--brown">
              <label for='brown'>
                <img src='../assets/walnut-corner-thumb.jpg' alt=''>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class='design-container__options options'>
        <h2 class="options__header">Designing a frame for your 30x40cm print</h2>
        <div class='options__item'>
          <h3>Choose the width of your frame</h3>
          <div class='options__input'>
            <input type='range' min="3" max="7" step="2" v-model="frameWidth" @input="frameWidthChanged">
            <div class='frame-width-data'>
              <span>3cm</span>
              <span>5cm</span>
              <span>7cm</span>
            </div>
          </div>
        </div>
        <div class='options__item'>
          <h3>Would you like a mat?</h3>
          no
          <toggle-button v-model="useMat" @input="matShowed"/>
          yes
        </div>
        <div class='options__item mat' v-if="useMat">
          <div class='mat__item'>
            <span>color</span>
            <div class='mat-checkbox'>
              <input type='radio' id="matWhite" v-model="matColor" value="previewMat--white">
              <label for='matWhite'></label>
            </div>
            <div class='mat-checkbox'>
              <input type='radio' id="matBlack" v-model="matColor" value="previewMat--black">
              <label class="black" for='matBlack'></label>
            </div>
          </div>
          <div class='mat__item'>
            <span>width</span>
            <div class='options-input'>
              <input type='range' min="3" max="9" step="2" v-model="matWidth" @input="matWidthChanged">
              <div class='mat-data'>
                <span>3cm</span>
                <span>5cm</span>
                <span>7cm</span>
                <span>9cm</span>
              </div>
            </div>
          </div>
        </div>
        <div class='options__item'>
          <h3>Which type of glazing?</h3>
          <div class='options-input'>
            <input type='range' min="10" max="30" step="10" v-model="glazing" @change="glazingChanged">
            <div class='glazing-data'>
              <span>standard</span>
              <span>uv70</span>
              <span>uv99</span>
            </div>
          </div>
        </div>
        <div class='options__item price'>
          <span>{{totalPrice | currency}}</span>
          <button class='btn' type="button">buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      frameWidth: '3',
      // bg: 'url(http://fillmurray.com/300/400)',
      bg: '',
      useMat: false,
      matWidth: '3',
      glazing: '10',
      previewClass: 'preview',
      frameClass: 'preview--black',
      matClass: 'previewMat--white',
      hasMat: false,
      matColor: 'previewMat--white',
      startPrice: 55,
      framePrice: 0,
      matPrice: 0
    }
  },
  methods: {
    frameWidthChanged (event) {
      let val = event.target.value
      if (val === '3') {
        this.framePrice = 0
      }
      if (val === '5') {
        this.framePrice = 4
      }
      if (val === '7') {
        this.framePrice = 7
      }
    },
    matWidthChanged (event) {
      let val = event.target.value
      if (val === '3') {
        this.matPrice = 9
      }
      if (val === '5') {
        this.matPrice = 16
      }
      if (val === '7') {
        this.matPrice = 25
      }
      if (val === '9') {
        this.matPrice = 29
      }
    },
    matShowed () {
      if (this.useMat === true) {
        if (this.matWidth === '3') {
          this.matPrice = 9
        }
        if (this.matWidth === '5') {
          this.matPrice = 16
        }
        if (this.matWidth === '7') {
          this.matPrice = 25
        }
        if (this.matWidth === '9') {
          this.matPrice = 29
        }
      } else {
        this.matPrice = 0
      }
    },
    glazingChanged (event) {
      console.log(event.target.value)
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      // let fileName = files[0].filename
      // if (fileName.lastIndexOf('.') <= 0) {
      //   return alert('Please choose a valid image!')
      // }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.bg = 'url(' + fileReader.result + ')'
      })
      fileReader.readAsDataURL(files[0])
    }
  },
  computed: {
    frameWidthClass () {
      return 'preview--' + this.frameWidth
    },
    matWidthClass () {
      if (this.useMat) {
        return 'previewMat--' + this.matWidth
      }
    },
    totalPrice () {
      return this.startPrice + this.framePrice + this.matPrice
    }
  },
  filters: {
    currency (value) {
      return '$ ' + value
    }
  }
}
</script>

<style>
  .design-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
  }

  .design-container__preview,
  .design-container__options {
    width: 50%;
    text-align: left;
  }

  .preview {
    margin: 0 auto;
    width: 300px;
    height: 400px;
    border: #2e1a12 solid 8px;
    // border-image: url('../assets/wood.png') 200 stretch;
    box-shadow: inset 0px 0px 10px rgba(0,0,0,1);
    background-color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  .preview--brown {
    border-image: url('../assets/wood--brown.jpg') 200 stretch;
  }

  .preview--black {
    border-image: url('../assets/wood--black.jpg') 200 stretch;
  }

  .preview--white {
    border-image: url('../assets/wood--white.jpg') 200 stretch;
  }

  .preview--cream {
    border-image: url('../assets/wood--cream.jpg') 200 stretch;
  }

  .preview--3 {
    border-width: 8px;
  }

  .preview--5 {
    border-width: 12px;
  }

  .preview--7 {
    border-width: 15px;
  }

  .previewMat--3 {
    padding: 8px;
  }

  .previewMat--5 {
    padding: 12px;
  }

  .previewMat--7 {
    padding: 15px;
  }

  .previewMat--9 {
    padding: 18px;
  }

  .previewMat--white {
    background-color: #ffffff;
  }

  .previewMat--black {
    background-color: #000000;
  }

  .preview__image {
    width: 100%;
    height: 100%;
    background-image: url('../assets/placeholder.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .preview--mat {
    padding: 8px;
  }

  .frame-select {
    margin-top: 1em;
    text-align: center;
  }

  .frames-container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .frames-container input[type="radio"] {
    display: none;
  }

  .frames-container label {
    display: block;
    padding: 5px;
    width: 80px;
    height: 80px;
    border-radius: 4px;
    border: 1px solid #eee;
  }

  .frames-container input[type="radio"]:checked + label {
    border-color: #000000;
  }

  .frames-container img {
    max-width: 100%;
  }

  h3 {
    margin: 0 0 1em;
  }

  .options__header {
    margin: 0 0 30px;
  }

  .options__item {
    padding: 1em 0;
  }

  .label {
    display: block;
  }

  .frame-width-data,
  .glazing-data {
    margin-top: 5px;
    width: 240px;
    display: flex;
    justify-content: space-between;
  }

  .glazing-data {
    text-transform: uppercase;
  }

  .price {
    display: flex;
    align-items: center;
    margin-top: 2em;
    font-size: 22px;
    font-weight: bold;
    color: #57ad68;
  }

  .price .btn {
    margin-left: 2em;
  }

  .btn {
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
  }

  .frames-container {
    position: relative;
  }

  input[type="file"] {
    display: none;
  }

  .mat__item {
    display: flex;
    align-items: center;
  }

  .mat__item span {
    margin-right: 1em;
  }

  .mat__item input[type="radio"] {
    display: none;
  }

  .mat__item label {
    margin-right: 10px;
    position: relative;
    display: block;
    width: 37px;
    height: 37px;
    border: 1px solid #bbb;
    border-radius: 4px;
  }

  .mat__item label:before {
    content: '';
    width: 31px;
    height: 31px;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 4px;
    border: 1px solid #bbb;
    background-color: #fff;
  }

  .mat__item label.black:before {
    background-color: #000;
  }

  .mat__item input[type="radio"]:checked + label {
    border-color: #000;
  }

  .mat-data {
    width: 240px;
    display: flex;
    justify-content: space-between;
  }

  .mat-data span {
    margin: 0;
  }

  @media screen and (max-width: 720px) {
    .design-container {
      flex-direction: column;
    }

    .design-container__preview,
    .design-container__options {
      box-sizing: border-box;
      width: 100%;
      padding: 0 20px;
    }

    .design-container__options {
      margin-top: 20px;
    }

    .frames-container {
      width: 100%;
    }

    .frame-checkbox {
      width: calc((100% - 15px)/4)
    }
  }

  /* range slider styles */

  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 240px; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type=range]::-ms-track {
    width: 240px;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  /* Special styling for WebKit/Blink */
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #2d73a4;
    cursor: pointer;
    margin-top: -5px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }

  /* All the same stuff for Firefox */
  input[type=range]::-moz-range-thumb {
    border: 1px solid #000000;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #2d73a4;
    cursor: pointer;
  }

  /* All the same stuff for IE */
  input[type=range]::-ms-thumb {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #2d73a4;
    cursor: pointer;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background: #ececec;
    border-radius: 3px;
    border: 1px solid #afafaf;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ececec;
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background: #ececec;
    border-radius: 1.3px;
    border: 1px solid #afafaf;
  }

  input[type=range]::-ms-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #ececec;
    border: 1px solid #afafaf;
    border-radius: 3px;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #ececec;
  }
  input[type=range]::-ms-fill-upper {
    background: #ececec;
    border: 1px solid #afafaf;
    border-radius: 3px;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #ececec;
  }
</style>
