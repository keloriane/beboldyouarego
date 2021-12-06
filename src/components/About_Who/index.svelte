<script>
export let aboutWhoTitle="";
export let aboutWhoText="";
</script>


<section id="about_who_section">
    <div class="title_who_container">
        <h2>{aboutWhoTitle}</h2>
        <p>{aboutWhoText} </p>
    </div>
</section>

<style lang="scss">
    #about_who_section {
        max-width: 1280px;
        width: 100%;
        margin: 150px auto;
        .title_who_container {
            text-align: center;
          h2 {
            color: #152565;
          }

        }
      p {
        margin-top: 40px;
      }
    }
</style>