<script>

    export let url;

</script>
<div class="text__container call__to__action">
    <button>
        <a href={url}>En savoir plus</a>
    </button>
</div>

<style lang="scss">
  .call__to__action {
    margin-top: 47px;
    button{
      border: none;
      width: 188px;
      height: 48px;
      border-radius: 30px;
      background: #E7650F;

      a {
        color: white;
        text-decoration: none;
        font-weight: 800;
        font-size: 14px;
      }
    }
  }

</style>