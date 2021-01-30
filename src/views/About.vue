<template>
  <div class="about">
    <loader v-if="loading"/>

    <div v-if="heroe && !loading" class="container">
      <router-link class="back-route" to="/">&leftarrow; BACK</router-link>
      <h1 class="title">{{ heroe.name }}</h1>

      <div class="flex f-justify-center">
        <div class="info-image">
          <img class="image" :src="`${heroe.thumbnail.path}/portrait_uncanny.${heroe.thumbnail.extension}`" alt="">
          <div class="card-name flex-column">
            <span class="name">{{ heroe.name }}</span>
          </div>
          <div class="favorite">
            <div v-if="!isFavorite(heroe)" class="flex f-align-center favorite--not" @click.stop.prevent="markAsFavorite(heroe)">❤</div>
            <div v-else class="flex f-align-center favorite--is" @click.stop.prevent="removeAsFavorite(heroe)">❤</div>
          </div>
        </div>
      </div>

      <div class="description">
        <span>{{ heroe.description || 'No description' }}</span>
      </div>

      <div class="availables flex f-justify-center f-wrap">
        <list-items title="COMICS" :items="heroe.comics.items" />
        <list-items title="SERIES" :items="heroe.series.items" />
        <list-items title="STORIES" :items="heroe.stories.items" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import ListItems from '@/components/ListItems.vue';
import Service from '@/services/api';
import favoriteMixin from '@/mixin/favorite';

export default {
  name: 'About',
  components: { Loader, ListItems },
  mixins: [favoriteMixin],
  data: () => ({
    loading: true,
    heroe: null,
  }),
  mounted() {
    this.loading = true;
    const { id } = this.$route.params;
    const service = new Service();
    service.getHeroe(id).then((resp) => {
      this.heroe = resp.data.results[0];
      this.$nextTick(function () {
        this.loading = false;
      });
    });
  },
};
</script>

<style lang="sass" scoped>
.about
  .container
    padding: 15px
    @media (min-width: 768px) // md
      padding: 50px
  .title
    text-align: center
    text-shadow: 2px 2px #66768a
  .info-image
    display: inline-block
    position: relative
    margin-top: 54px
    text-align: center
  .image
    border-radius: 8px
    // border: 3px solid #a2bdca
    box-shadow: 0 0 26px 0 rgb(0 200 245)
  .card-name
    min-height: 20px
    width: 303px
    background: #00182DF0
    box-shadow: 0 0 40px 0 #5a7075
    padding: 16px
    position: absolute
    bottom: 20px
    left: 50%
    transform: translateX(-50%)
    &:before, &:after
      position: absolute
      content: ''
      top: -10px
      width: 0
      height: 0
      border-left: 13px solid transparent
      border-right: 13px solid transparent
      border-top: 13px solid #00000094
      box-shadow: 0 -20px 26px 0 #5a7075
    &:before
      right: 0
      transform: rotate(45deg)
    &:after
      left: 0
      transform: rotate(-45deg)
  .name
    font-size: 18px
    font-weight: bold
    text-shadow: 2px 2px #66768a
  .description
    margin-top: 28px
    text-align: center
  .availables
    margin-top: 36px
    
  .favorite
    cursor: pointer
    position: absolute
    top: 16px
    right: 0
    &--is,
    &--not
      height: 33px
      width: 35px
      border-radius: 20px 0 0 20px
      padding-left: 19px
      box-shadow: 0 3px 4px 0 rgba(#000000, .6)
      font-size: 22px
      background: #ffc3c3
      text-shadow: 1px 2px rebeccapurple
    &--is
      color: red
      font-size: 24px
    &--not
      font-size: 22px
      color: grey
  
  .back-route
    color: #fff
    text-decoration: none
    font-weight: bold
    
</style>
