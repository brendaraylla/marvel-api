<template>
  <div class="favorite">
    <router-link class="back-route" to="/">&leftarrow; BACK</router-link>

    <div v-if="favoriteHeroes && favoriteHeroes.length" class="flex f-wrap f-justify-center">
      <div class="" v-for="card in favoriteHeroes" :key="card.id">
        <custom-card :card="card" />
      </div>
    </div>
    <div v-else>
      <p class="text-center">You have not saved any heroes as favorite yet</p>
    </div>
  </div>
</template>

<script>
import CustomCard from '@/components/CustomCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Favorite',
  components: {
    CustomCard,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['favoriteHeroes']),
  },
};
</script>

<style lang="sass" scoped>
.favorite
  padding-top: 15px
  @media (min-width: 768px) // md
    padding-top: 50px
  .back-route
    color: #fff
    text-decoration: none
    font-weight: bold
    padding: 15px
    @media (min-width: 768px) // md
      padding: 50px
  .text-center
    text-align: center
    margin-top: 130px
</style>
