<template>
  <div class="Home  banner">
    <!--========== SPINNER ==========-->
    <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage"></loading>
    <Header />

    <!--- S'affiche lorsque la taille de l'écran supérieur à 1245px --->
    <section class="" style="">
      <div class="container">
        <div class="sub-banner row">
          <div class="col-md-6">
            <h4 class="home__subtitle title">
              <b>Votre restaurant préféré, livré chez vous en un clic</b>
            </h4>

            <div class="info-banner rounded">
              <p class="text-banner">
                Entrez votre adresse pour savoir si vous êtes éligible à la
                livraison à domicile
              </p>
              <form action="">
                <div class="row">
                  <div class="col-8">
                    <input type="text" class="search-adresse-banner" placeholder="Ex. Centre-ville" v-model="adresse" />
                  </div>
                  <div class="col-4">
                    <p>
                      <a class="boutton-rechercher-banner rounded text-decoration-none"
                        @click="rechercher()">Rechercher</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-5">
            <img src="../../public/images/image-banniere.png" alt="image" />
          </div>
        </div>
      </div>
    </section>

    <!--Les catégories Nazo's-->
    <aside class="bg-white" style="padding-bottom: 50px; padding-top: 50px;">
      <div class="container">
        <h3 class="titre-categorie"><b>Faites votre choix</b></h3>

        <div class="row">
          <div class="col-6 box-categorie" v-for="cat in categoryList" :key="cat.id">
            <div class="content">
              <p>
                <router-link to='Product' @click="getOneCategory(cat.id)">
                  <img :src="cat.image" alt="Snow" class="img-fluid" style="width:100%; height:150px" />
                </router-link>
              </p>
              <div class="centered">
                <p class="nom-categorie">{{ cat.nom }}</p>
              </div>
            </div>
            <p class="description-categorie">
              {{ cat.description }} <br />
              <router-link to="Product" class="lien-categorie">Voir {{ cat.nom }} →</router-link>
            </p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Pourquoi Nazo's-->
    <article class="banner-business bg-light" style="padding-top: 50px; padding-bottom: 50px;">
      <div class="container">
        <h3 class="titre-categorie"><b>Au bureau</b></h3>
        <div class="row">
          <div class="col-6 bg">
            <img src="../../public/images/business.jpg" alt="image business" class="img-fluid" />
          </div>
          <div class="col-6 titre-business bg-white">
            <h4>Nazo's pour les entreprises</h4>
            <p class="text-business">
              Commandez le déjeuner pour les réunions ou des livraisons de fin
              de soirée. Votre restaurant préféré arrive à votre bureau !
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              unde labore qui provident molestiae modi corrupti iusto autem
            </p>
            <p>
              <a class="boutton-rechercher-banner rounded text-decoration-none">Commencer</a>
            </p>
          </div>
        </div>
      </div>
    </article>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import constant from "../../constant";
import Swal from "sweetalert2";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
// import Script from "../../module/script";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Loading,
  },
  data() {
    return {
      adresseEligible: [
        "centre-ville",
        "centre ville",
        "mpita",
        "km4",
        "ngoyo",
        "tchibamba",
        "sangolo",
        "loandjili",
        "mvoumvou",
        "tchikobo",
        "port",
        "raffinerie",
        "nkouikou",
        "grand marché",
        "grand-marché",
        "aeroport",
        "malala",
        "port",
      ],
      categoryList: [],
      category: null,
      adresse: "",
      newadresse: "",
      isLoading: false,
      fullPage: true,
      etatadresse: false,
      // cryptId: "",
      // script: null,
    };
  },
  mounted() {
    this.getAllCategory();
  },
  methods: {
    getAllCategory() {
      // récupérer toutes les catégories de produits
      axios
        .get(constant.apiURL + "productcategory/getAll")
        .then((response) => {
          if (response.status == 200) {
            // console.log(response);
            this.categoryList = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getOneCategory(id) {
      // récupérer une catégorie
      axios
        .get(constant.apiURL + "productcategory/get/" + id)
        .then((response) => {
          if (response.status == 200) {
            console.log(response);
            localStorage.setItem('idcat', response.data.id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    rechercher() {
      // Méthode de recherche  des adresses éligibles à la livraison
      if (this.adresse != "") {
        this.isLoading = true;
        setTimeout(() => {
          this.etatadresse = true;
          this.newadresse = this.adresse.toLowerCase().trim();
          for (let i = 0; i < this.adresseEligible.length; i++) {
            if (this.adresseEligible[i] == this.newadresse) {
              this.isLoading = false;
              Swal.fire({
                icon: "success",
                title:
                  this.adresse + " fait parti des endroits où nous livrons.",
                showConfirmButton: true,
              });
              break;
            } else {
              this.isLoading = false;
              Swal.fire({
                icon: "error",
                title:
                  "Désolé, " +
                  this.adresse +
                  " ne fait pas parti des endroits déservis par nos livreurs",
                showConfirmButton: true,
              });
            }
          }
        }, 1500);
      }
    },

    /* crypter l'id du produit
        localid(id) {
          return (this.cryptId = this.script.encrypt(id.toString()));
        },*/
  },
};
</script>

<style scoped>
.md-progress-spinner {
  margin-top: 24px;
}

.home {
  margin-top: 100px;
}

.title,
.sous-titre {
  margin-top: 10%;
  font-size: 2.1rem;
  font-weight: 900;
}

.nom_element {
  color: black;
}

.titre {
  text-align: center;
  font-weight: 600;
}

.description {
  font-size: 15px;
  text-align: center;
}

.banner {
  background: linear-gradient(-7deg, #fdcd3b 75%, #ffed4b 80%);
}

.bg {
  background: linear-gradient(120deg, rgb(247, 247, 247) 50%, #fff 50%);
}

.info-banner {
  color: black;
  padding: 1.3rem;
  padding-bottom: 30px;
  background-color: #fff;
}

.text-banner {
  font-size: 13px;
}

.search-adresse-banner {
  width: 100%;
  font-size: 13px;
  font-family: "BasisGrotesque";
  padding: 0.8rem 0.4rem;
  outline: #fdcd3b;
  border-radius: 4px;
  border: 1px solid rgb(211, 201, 201);
}

.boutton-rechercher-banner {
  cursor: pointer;
  color: #fff;
  padding: 0.9rem 1.3rem;
  background-color: #f7b655;
  font-size: 13px;
}

.col-4 {
  padding-top: 11px;
}

.titre-categorie {
  color: rgb(56, 56, 56);
  margin-bottom: 20px;
}

.nom-categorie {
  font-size: 40px;
}

.box-categorie {
  margin-bottom: 20px;
}

.description-categorie {
  font-size: 13px;
  margin-top: 5px;
}

.lien-categorie {
  font-size: 13px;
  text-decoration: none;
  color: rgb(109, 180, 107);
}

.content {
  cursor: pointer;
  position: relative;
  text-align: center;
  color: white;
}

.content:hover {
  transition: 0.5s;
  opacity: 0.9;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.titre-business {
  padding: 2rem;
}

.text-business {
  font-size: 13px;
}

.element {
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  margin-right: 15px;
  cursor: pointer;
}

.element img {
  width: 45px;
}

.element1 {
  width: 350px;
  height: auto;
  border-radius: 1rem;
  padding-bottom: 20px;
}

.element1_text {
  width: 300px;
}

#conteneur {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: auto;
}

.hvr-float {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: ease-out;
}

.hvr-float:hover,
.hvr-float:focus,
.hvr-float:active {
  transform: scale(1.1);
}

/* lorsque la taille de l'écran est inférieur à 1245px*/
@media screen and (max-width: 1245px) {
  .content_querie {
    margin-top: 6%;
    padding-top: 2%;
    background-color: rgb(247, 182, 85);
  }
}

/* lorsque la taille de l'écran est comprise entre 1051px et 648px */
@media screen and (min-width: 648px) and (max-width: 1051px) {
  .element1 {
    width: 600px;
    height: auto;
    border-radius: 1rem;
    padding-bottom: 20px;
    margin: 2%;
  }

  .element1 img {
    width: 300px;
  }

  .titre {
    font-size: 23px;
  }

  .element1_text {
    width: 100%;
  }

  .content_querie {
    margin-top: 5%;
    padding-top: 10%;
    background-color: rgb(247, 182, 85);
  }
}

/* lorsque la taille de l'écran est inférieur à 648px*/
@media screen and (max-width: 648px) {
  .description {
    font-size: 13px;
  }

  .element1_text {
    width: 280px;
  }

  .content_querie {
    margin-top: 15%;
    padding-top: 2%;
    background-color: rgb(247, 182, 85);
  }
}

/* lorsque l'écran est comprise entre 557px et 706px*/
@media screen and (min-width: 557px) and (max-width: 706px) {
  .element {
    width: 90px;
    height: 90px;
  }

  .element img {
    width: 32px;
  }

  .nom_element {
    font-size: 15px;
  }
}

/* lorsque l'écran est comprise entre 431px et 557px*/
@media screen and (min-width: 457px) and (max-width: 557px) {
  .element {
    width: 70px;
    height: 70px;
  }

  .element img {
    width: 24px;
  }

  .nom_element {
    font-size: 12px;
  }
}

/* lorsque l'écran est inférieur à 431px*/
@media screen and (max-width: 457px) {
  .content_querie {
    margin-top: 19%;
    padding-top: 2%;
    background-color: rgb(247, 182, 85);
  }

  .titre {
    margin-top: 30px;
  }

  .sous-titre {
    font-size: 12px;
  }

  .element {
    width: 78px;
    height: 78bbpx;
    margin-bottom: 50px;
    margin-right: 15px;
    cursor: pointer;
  }

  .element img {
    width: 36px;
  }

  .nom_element {
    font-size: 12px;
  }
}
</style>
