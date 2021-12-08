<script context="module">

    import axios from "axios";
    import  cheerio from 'cheerio';
    import {parse} from "node-html-parser"
    import {convert} from 'html-to-text'
    export let activityData
    export let slug
    export const load = async ({page}) => {
        await axios.get('https://b-gold.be/wp-json/wp/v2/activities')
             .then((res) => {
                activityData = res.data

             })
        slug = page.params.activity;
        return {
            props: {
                slug
            }
        }
    }
    console.log("nel");


</script>
<script>
    export let mainActivity
    console.log(activityData , slug);

        activityData.forEach((activity)=>{
            if(activity.slug === slug) {
                mainActivity = activity
             console.log(mainActivity);
            };

        })




</script>
<section id="activity_details">

 <div class="activity_wrapper">
  <div class="text_container">
 <div class="title__container">
<h2>{cheerio.load(mainActivity.title.rendered).text()}</h2>
<!--  <p>  {cheerio.load(mainActivity.content.rendered).html()} </p>-->

 </div>
<p>
    {@html cheerio.load(mainActivity.content.rendered , null , false).html()}

</p>

  </div>
  <div class="image_container">
   <img src={mainActivity.acf.image} alt="">
  </div>
 </div>






</section>
<style lang="scss">
ol , ul {
  list-style: inherit !important;
}

#activity_details {
 width: 80vw;
 height: 100vh;
 margin: auto;


}
.title__container {
 text-transform: uppercase;
 max-width: 500px;
 width: 100%;
 font-weight: 800;
 color: #E7650F;
}
.activity_wrapper {
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 gap:10px;


}
.text_container {
 width: 60%;
 min-width: 320px;
}
.image_container {
 width: 35%;
 img {
  width: 100%;

 }

}
</style>