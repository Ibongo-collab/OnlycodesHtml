<template>
  <!--========== FOOTER ==========-->
  <footer class="footer section container-mx">

    <div id="conteneur">

      <div class="footer__content service p-3">
        <div class="mx-auto" style="width: 300px;">
          <p class="text-center text-white"><b>Adresse</b></p>
          <p class="text-center text-white">
            75 avenue Barthélemy Boganda, Centre-ville, Pointe-noire, Congo
          </p>
        </div>
      </div>

      <div class="footer__content service p-3">
        <div class="mx-auto" style="width: 300px;">
          <p class="text-center text-white"><b>Contact</b></p>
          <p class="text-center">
            <a :href="'mailto:'+email" class="text-white">{{email}}</a> <br>
            <a :href="'tel:'+numero" class="text-white">{{numero}}</a>
          </p>
        </div>
      </div>

      <div class="footer__content service p-3">
        <div class="mx-auto" style="width: 300px;">
          <p class="text-center text-white"><b>Nous suivre</b></p>
          <p class="text-center text-muted description">
            <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/nazoscg/" target="_blank" class="footer__social"><i
              class='bx bxl-instagram'></i></a>
          </p>
        </div>
      </div>

    </div>

    <p class="footer__copy">&#169;{{copyright}}. Tous les droits sont réservés.</p>

  </footer>
</template>


<script>
  export default {
    name: "Footer",
    data() {
      return {
        namelogo: "Nazo's",
        email: "contact@nazosapp.cg",
        numero: "+242 06 692 20 11"
      }
    },
    computed: {
      copyright() {
        const currentYear = new Date().getFullYear()
        return `Copyright ${this.namelogo} ${currentYear}`
      }
    },
  }
</script>

<style scoped>
  p{
    font-size: 13px;
  }

  a {
    text-decoration: none;
  }

  .icone{
    color: #fff;
    font-size: 28px;
  }

  .footer {
    background-color: rgb(7, 7, 7);
  }

  .element {
    width: 350px;
    height: auto;
    border-radius: 1rem;
    padding-bottom: 20px;
  }

  #conteneur {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    height: auto;
  }

  .footer__container{
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  row-gap: 2rem;
}

.footer__logo{
  font-size: var(--h3-font-size);
  /*color: var(--first-color);*/
  color: white;
  font-weight: var(--font-semi-bold);
}

.footer__description{
  display: block;
  font-size: var(--small-font-size);
  margin: .25rem 0 var(--mb-3);
}

.footer__social{
  font-size: 1.5rem;
  /*color: var(--title-color);*/
  color: rgb(209, 209, 209);
  margin-right: var(--mb-2);
}

.footer__social:hover{
 /* color: var(--first-color);*/
  color: #EA8A1E;
}

.footer__title{
  font-size: var(--h2-font-size);
  /*color: var(--title-color);*/
  color: white;
  margin-bottom: var(--mb-2);
}

.footer__logo:hover{
 /* color: var(--first-color);*/
 color: rgb(241, 240, 240);
}

.footer__link{
  display: inline-block;
  /*color: var(--text-color);*/
  color: rgb(209, 209, 209);
  margin-bottom: var(--mb-1);
}

.footer__link:hover{
  /*color: var(--first-color);*/
  color: white;
}

.footer__copy{
  text-align: center;
  font-size: var(--small-font-size);
  /*color: var(--text-color-light);*/
  color: white;
  margin-top: 3.5rem;
}

.section{
  padding: 4rem 0 2rem;
}
</style>