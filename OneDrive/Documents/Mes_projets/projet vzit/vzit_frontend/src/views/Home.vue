<template>
  <div class="home">

    <Header></Header>

    <section>
      <div class="container">
        <div class="row">
          <div class="element">
            <div class="row element_content">
              <div class="col-md-6">
                <p class="element_text">Hôtels</p>
              </div>
              <div class="col-md-6" style="padding-left: 39px;">
                <span class="material-icons">
                  bed
                </span>
              </div>
            </div>
          </div>
          <div class="element">
            <div class="row element_content">
              <div class="col-md-6">
                <p class="element_text">Restaurants</p>
              </div>
              <div class="col-md-6" style="padding-left: 39px;">
                <span class="material-icons">
                  restaurant_menu
                </span>
              </div>
            </div>
          </div>
          <div class="element">
            <div class="row element_content">
              <div class="col-md-6">
                <p class="element_text">Bars</p>
              </div>
              <div class="col-md-6" style="padding-left: 39px;">
                <span class="material-icons">
                  local_bar
                </span>
              </div>
            </div>
          </div>
          <div class="element">
            <div class="row element_content">
              <div class="col-md-6">
                <p class="element_text">Activités</p>
              </div>
              <div class="col-md-6" style="padding-left: 39px;">
                <span class="material-icons">
                  local_activity
                </span>
              </div>
            </div>
          </div>

          <div class="element">
            <div class="row element_content">
              <div class="col-md-6">
                <p class="element_text">Voyage</p>
              </div>
              <div class="col-md-6" style="padding-left: 39px;">
                <span class="material-icons">
                  directions_bus
                </span>
              </div>
            </div>
          </div>
          <div class="element">
            <div class="row element_content">
              <div class="col-md-6">
                <p class="element_text">Sport</p>
              </div>
              <div class="col-md-6" style="padding-left: 39px;">
                <span class="material-icons">
                  sports_soccer
                </span>
              </div>
            </div>
          </div>
          <div class="element">
            <div class="row element_content">
              <div class="col-md-6">
                <p class="element_text">Shopping</p>
              </div>
              <div class="col-md-6" style="padding-left: 39px;">
                <span class="material-icons">
                  shopping_bag
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <aside>
      <div class="container grande-div-go-vzit">
        <div id="content-go-vzit">
          <div class="element-go-vzit">
            <p class="phrase-go-vzit display-4 pt-5">
              <span style="color: rgb(252, 115, 115);">Découvrez</span> les meilleurs endroits à Abidjan
            </p>
            <router-link class="button-go-vzit" to="/tourisme"><b>Go vzit</b></router-link>
          </div>
          <div class="element-go-vzit">
            <img src="../assets/images/go-vzit.png" alt="go vzit" class="image-go-vzit img-fluid">
          </div>
        </div>
      </div>
    </aside>

    <article>
      <div class="container content-offre-speciale">
        <p class="offre-speciale mb-0 pb-0">
          <b>Offre spéciale</b>
        </p>

        <vue-horizontal-list :items="items" :options="options" class="border-bottom mb-5">
          <template v-slot:nav-prev>
            <div>
              <span class="material-icons ">
                arrow_back
              </span>
            </div>
          </template>

          <template v-slot:nav-next>
            <div>
              <span class="material-icons ">
                arrow_forward
              </span>
            </div>
          </template>

          <template v-slot:default="{ item }">
            <div class="offre">
              <div class="image-offre">
                <img
                  :src="item.image"
                  alt="image" class="image">
              </div>
              <div class="titre-offre">
                <p>
                  {{item.title}}
                </p>
              </div>
              <div class="date-offre">
                <p>
                  {{item.date}}
                </p>
              </div>
            </div>
          </template>
        </vue-horizontal-list>

      </div>
    </article>

    <article>
      <div class="container content-event">
        <p class="evenement-populaire">
          <b>Evenements populaires</b>
        </p>
        <div id="content-evenement">

          <div class="element-evenement">
            <div class="image-evenement">
              <div class="coeur-evenement rounded-circle">
                <span class="material-icons">favorite_border</span>
              </div>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7e/67/5d/caption.jpg?w=300&h=300&s=1"
                alt="image" class="image">
            </div>
            <div class="titre-evenement">
              <p>Safari Premium à dos de chameau dans les dunes de sable rouge</p>
            </div>
            <div class="date-evenement">
              <p> sam. 24 avr. 2021 13:00 +00</p>
            </div>
          </div>

          <div class="element-evenement">
            <div class="image-evenement">
              <div class="coeur-evenement rounded-circle">
                <span class="material-icons">favorite_border</span>
              </div>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7e/67/5d/caption.jpg?w=300&h=300&s=1"
                alt="image" class="image">
            </div>
            <div class="titre-evenement">
              <p>Safari Premium à dos de chameau dans les dunes de sable rouge</p>
            </div>
            <div class="date-evenement">
              <p> sam. 24 avr. 2021 13:00 +00</p>
            </div>
          </div>

          <div class="element-evenement">
            <div class="image-evenement">
              <div class="coeur-evenement rounded-circle">
                <span class="material-icons">favorite_border</span>
              </div>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7e/67/5d/caption.jpg?w=300&h=300&s=1"
                alt="image" class="image">
            </div>
            <div class="titre-evenement">
              <p>Safari Premium à dos de chameau dans les dunes de sable rouge</p>
            </div>
            <div class="date-evenement">
              <p> sam. 24 avr. 2021 13:00 +00</p>
            </div>
          </div>

          <div class="element-evenement">
            <div class="image-evenement">
              <div class="coeur-evenement rounded-circle">
                <span class="material-icons">favorite_border</span>
              </div>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7e/67/5d/caption.jpg?w=300&h=300&s=1"
                alt="image" class="image">
            </div>
            <div class="titre-evenement">
              <p>Safari Premium à dos de chameau dans les dunes de sable rouge</p>
            </div>
            <div class="date-evenement">
              <p> sam. 24 avr. 2021 13:00 +00</p>
            </div>
          </div>

          <div class="element-evenement">
            <div class="image-evenement">
              <div class="coeur-evenement rounded-circle">
                <span class="material-icons">favorite_border</span>
              </div>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7e/67/5d/caption.jpg?w=300&h=300&s=1"
                alt="image" class="image">
            </div>
            <div class="titre-evenement">
              <p>Safari Premium à dos de chameau dans les dunes de sable rouge</p>
            </div>
            <div class="date-evenement">
              <p> sam. 24 avr. 2021 13:00 +00</p>
            </div>
          </div>

          <div class="element-evenement">
            <div class="image-evenement">
              <div class="coeur-evenement rounded-circle">
                <span class="material-icons">favorite_border</span>
              </div>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7e/67/5d/caption.jpg?w=300&h=300&s=1"
                alt="image" class="image">
            </div>
            <div class="titre-evenement">
              <p>Safari Premium à dos de chameau dans les dunes de sable rouge</p>
            </div>
            <div class="date-evenement">
              <p> sam. 24 avr. 2021 13:00 +00</p>
            </div>
          </div>

          <div class="element-evenement">
            <div class="image-evenement">
              <div class="coeur-evenement rounded-circle">
                <span class="material-icons">favorite_border</span>
              </div>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7e/67/5d/caption.jpg?w=300&h=300&s=1"
                alt="image" class="image">
            </div>
            <div class="titre-evenement">
              <p>Safari Premium à dos de chameau dans les dunes de sable rouge</p>
            </div>
            <div class="date-evenement">
              <p> sam. 24 avr. 2021 13:00 +00</p>
            </div>
          </div>

          <div class="element-evenement">
            <div class="image-evenement">
              <div class="coeur-evenement rounded-circle">
                <span class="material-icons">favorite_border</span>
              </div>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7e/67/5d/caption.jpg?w=300&h=300&s=1"
                alt="image" class="image">
            </div>
            <div class="titre-evenement">
              <p>Safari Premium à dos de chameau dans les dunes de sable rouge</p>
            </div>
            <div class="date-evenement">
              <p> sam. 24 avr. 2021 13:00 +00</p>
            </div>
          </div>

        </div>

        <div>
          <a href="#" class="button-go-vzit "><b>Afficher plus</b></a>
        </div>
      </div>
    </article>

    <Footer />


  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import VueHorizontalList from "vue-horizontal-list"

  export default {
    name: 'Home',
    components: {
      Header,
      Footer,
      // VueSlickCarousel,
      VueHorizontalList
    },
    data() {
      return {
        isLoading: false,
        fullPage: true,
        options: {
          responsive: [{
              end: 576,
              size: 1
            },
            {
              start: 576,
              end: 768,
              size: 2
            },
            {
              start: 768,
              end: 992,
              size: 3
            },
            {
              size: 4
            },
          ],
          list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,
            // Because: #app {padding: 80px 24px;}
            padding: 24,
          },
          position: {
            start: 0,
          },
          autoplay: {
            play: false,
            repeat: true,
            speed: 2500
          },
        },
        items: [{
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ba/16/8c/caption.jpg?w=300&h=300&s=1",
            title: "Safari Premium à dos de chameau dans les dunes de sable rouge",
            date: "sam. 24 avr. 2021 13:00 +00"
          },
          {
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6c/c7/8c/caption.jpg?w=300&h=300&s=1",
            title: "Visite du Parc National du Banco et de Bengerville",
            date: "sam. 24 avr. 2021 13:00 +00"
          },
          {
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8b/c0/da/caption.jpg?w=300&h=300&s=1",
            title: "Découverte Bini lagune au bord le côte de divo",
            date: "sam. 24 avr. 2021 13:00 +00"
          },
          {
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/83/91/21/caption.jpg?w=300&h=300&s=1",
            title: "Campagne electorale delegue du personnel",
            date: "sam. 24 avr. 2021 13:00 +00"
          },
          {
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/98/1c/6d/caption.jpg?w=300&h=300&s=1",
            title: "Inauguration de la 1ère maison de disque d'abidjan",
            date: "sam. 24 avr. 2021 13:00 +00"
          },
          {
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6c/ac/56/caption.jpg?w=300&h=300&s=1",
            title: "Prestation des enfants de la paroisse d'Abobo",
            date: "sam. 24 avr. 2021 13:00 +00"
          },
          {
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0d/dc/7e/caption.jpg?w=300&h=300&s=1",
            title: "1er Concert des Allianz star boudjele à Cocody",
            date: "sam. 24 avr. 2021 13:00 +00"
          },
          {
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/c1/47/caption.jpg?w=300&h=300&s=1",
            title: "Fête de la femme, danses culturelles, chants et poêmes",
            date: "sam. 24 avr. 2021 13:00 +00"
          },
        ],
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  @media (min-width: 1200px) {
    #app {
      padding-left: 80px;
      padding-right: 80px;
    }
  }

  a {
    color: rgb(75, 74, 74);
    text-decoration: none;
  }

  /* go-vzit  */
  .grande-div-go-vzit {
    border-radius: 1rem;
    margin-top: 5px;
  }

  #content-go-vzit {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: auto;
    height: auto;
    margin-bottom: 20px;
  }

  .element-go-vzit {
    width: 500px;
    height: auto;
  }

  .phrase-go-vzit {
    font-size: 45px;
    font-weight: 700;
  }

  .button-go-vzit {
    color: white;
    background-color: rgb(17, 17, 17);
    font-size: 15px;
    padding: 0.5rem 2rem;
    border-radius: 4rem;
    width: 150px;
    text-align: center;
  }

  .button-go-vzit:hover {
    background-color: rgb(75, 75, 75);
  }

  .image-go-vzit {
    width: 500px;
    height: 500px;
    margin-top: 10px;
  }

  /* element */
  .element {
    width: 151px;
    height: 85px;
    cursor: pointer;
    margin-top: 100px;
    margin-right: 11px;
    border: 1px solid rgb(34, 34, 34);
    border-radius: 0.6rem;
    transition: 0.2s;
  }

  .element:hover {
    background-color: black;
    color: white;
  }

  .element_content {
    padding-top: 12px;
  }

  .element_text {
    font-weight: 600;
  }

  /* Offre spéciale */

  .content-offre-speciale {
    margin-top: 0px;
  }

  .offre-speciale {
    font-weight: 600;
    font-size: 20px;
  }

  .offre {
    width: 270px;
    height: auto;
    cursor: pointer;
    outline: none;
    padding: 4px;
  }

  .titre-offre,
  .date-offre {
    font-weight: 500;
  }

  .date-offre {
    color: rgb(252, 115, 115);
  }

  .image-offre img {
    width: 100%;
    height: auto;
  }

  .image {
    transition: 0.2s;
  }

  .image:hover {
    opacity: 0.9;
  }
  .coeur {
    width: 43px;
    height: 43px;
    text-align: center;
    padding: 10px;
    color: black;
    background-color: white;
  }
  .coeur:hover {
    background-color: rgb(248, 248, 248);
  }

  /* evenement populaire */

  .content-event {
    margin-bottom: 100px;
  }
  #content-evenement {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: auto;
    height: auto;
  }
  .evenement-populaire {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 30px;
  }
  .image-evenement img {
    width: 100%;
    height: 175px;
  }
  .element-evenement {
    width: 270px;
    height: 275px;
    margin-right: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    outline: none;
  }
  .titre-evenement,
  .date-evenement {
    font-weight: 500;
  }
  .date-evenement {
    color: rgb(252, 115, 115);
  }
  .coeur-evenement {
    width: 43px;
    height: 43px;
    margin-left: 16%;
    margin-top: 0.5%;
    text-align: center;
    padding: 10px;
    z-index: 1;
    position: absolute;
    color: black;
    background-color: white;
  }
  .coeur-evenement:hover {
    background-color: rgb(248, 248, 248);
  }

</style>