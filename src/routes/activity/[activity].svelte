<script context="module">

    import axios from "axios";
    import  cheerio from 'cheerio';
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

<h1>{mainActivity.title.rendered}</h1>
  <p></p>  {cheerio.load(mainActivity.content.rendered).text()}


</section>
<style>

</style>