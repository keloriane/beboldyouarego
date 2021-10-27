<script>
import axios from 'axios';

let howText = '';
axios.get('https://b-gold.be/wp-json/acf/v3/pages/')
    .then(res => {
        howText = res.data[2].acf.description
    })
</script>

<section id="how_section">
    <div class="section__title__container">
        <h2> <span class="blue"> Que faisons-nous</span> <br> <span class="orange"> et comment ?</span> </h2>
    </div>
    <div class="how-section__container">
        <div class="image__container">
            <img src="https://b-gold.be/wp-content/uploads/2021/03/cv.png" alt="">
        </div>
        <div class="text__container">
            <p>
                {howText}

            </p>
        </div>
    </div>
</section>

<style lang="scss">
    #how_section {
      margin-top: 100px;
      .section__title__container {
        h2 {
          text-align: center;
          line-height: 42px;
        }
      }
        .how-section__container {
          display: flex;
            padding: 20px;
          width: 100%;
          flex-wrap: wrap;
          max-width: 1110px;
          margin: auto;
          justify-content: space-evenly;
          align-items: center;
          .image__container {
            width: 100%;
            padding: 5px;
            max-width: 432px;
            img {
              width: 100%;
            }
          }
          .text__container {
            width: 100%;
            max-width: 483px;
          }
        }
    }
</style>