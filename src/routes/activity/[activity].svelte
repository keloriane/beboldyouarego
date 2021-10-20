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
                 console.log(activityData);
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
            };

        })




</script>
<section>

<h1>{cheerio.load(mainActivity.title.rendered).text()}</h1>
<!--  <p>  {cheerio.load(mainActivity.content.rendered).html()} </p>-->

 <p>
  {parse(mainActivity.content.rendered)}
 </p>






</section>
<style>
ol , ul {
  list-style: inherit !important;
}
</style>