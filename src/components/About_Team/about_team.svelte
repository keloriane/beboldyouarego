<script>
    import axios from 'axios';
    import cheerio from "cheerio";

    let teams = []
    let descriptionTeam = ""


    axios.get('https://b-gold.be/wp-json/acf/v3/team')
        .then(res => {
            teams = res.data;
            console.log(teams);
        })
    axios.get('https://b-gold.be/wp-json/acf/v3/pages/')
        .then(res => {
            descriptionTeam = res.data[2].acf.description_team
            console.log(descriptionTeam);
        })

</script>

<section class="about-team">
    <div class="about-team-layer">

    </div>
    <div class="team__section__wrapper">
        <div class="team__text text__container">
            <div class="team__title__container">
                <h2>Qui Sommes <br> <span class="orange">Nous ?</span></h2>
            </div>
            <div class="text__container">
                <p>{descriptionTeam}</p>
            </div>
        </div>
        <div class="card__container">


             {#each teams as team (team.id) }
             <div class="team__card" style={team.id%2===0 ? "align-self:'flex-start'" : "align-self:flex-end"}>

                 <div class="team__card__image-wrapper">
                     <img src="{team?.acf.photo.url}" alt={`${team?.acf?.prenom}-photo`}>
                     <div class="card__team-container">
                         <h4 class="orange">CEO / FOUDNER <br></h4>


                         <h3 class="team-name">{team?.acf?.prenom}</h3>


                         <h3 class="team-name">{team?.acf?.nom} </h3>


                         <!--  <p>
                               {cheerio.load(team?.acf?.description).text()}
                           </p>-->

                     </div>

                     <div class="layer__text">
                         <p>
                             {cheerio.load(team?.acf?.description).text()}
                         </p>
                     </div>

                 </div>



             </div>
                 {/each}
        </div>
    </div>

</section>
<style lang="scss">

  .about-team {
    width: 100%;
    background: linear-gradient(262.72deg, rgba(21, 37, 101, 0.9) 84.14%, rgba(21, 37, 101, 0.687755) 96.18%, rgba(21, 37, 101, 0.528571) 103.58%);
    margin-top: 300px;
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
    .team__card__image-wrapper {
      position: relative;

      .layer__text {

        width: 103%;
        height: 110%;

        left: 14px;
        p {
          color: white;
        }

      }
    }

    .about-team-layer {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url("https://b-gold.be/wp-content/uploads/2021/09/team-player.png");
      background-size: cover;
      z-index: -1;

    }
    .team__section__wrapper {
      width: 100%;
      max-width: 1117px;
      margin: 20px auto;
      display: flex;
      flex-wrap: wrap;

      justify-content: space-evenly;
      align-items: center;
    }
    .team__text {
      width: 100%;
      max-width: 378px;
      h2 {
        color: white;
      }
      p {
        font-family: Poppins , sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: 0.01em;
        color: #FFFFFF;
      }
    }
    .card__team-container {
      color: white;
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;


      .team-name {

        font-style: normal;
        font-weight: normal;
        font-size: 31.3764px;
        line-height: 111%;
        /* or 35px */

        letter-spacing: 0.01em;

        color: #FFFFFF;

      }
      
    }
    .card__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
      gap: 30px;
      .team__card {
        width: 100%;
        max-width: 285px;
        img {
          width: 100%;
          max-width: 279px;
        }

      }
    }
  }
</style>