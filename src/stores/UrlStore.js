import {writable} from "svelte/store";
import axios from "axios";


export const aboutData  = writable([]);

const fetchAbout = async() => {
        axios.get('https://b-gold.be/wp-json/wp/v2/pages')
            .then((res)=> {
               aboutData.set(res.data[0].acf)
            })

}
fetchAbout();

export const activityData = writable([]);

export const fetchActivityData = async() => {
   await axios.get('https://b-gold.be/wp-json/wp/v2/activities')
        .then((res)=>{
            activityData.set(res.data)
        })
}

export const boostData = writable([]);




