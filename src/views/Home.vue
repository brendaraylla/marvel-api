<template>
  <div class="home">
    <loader v-if="loading"/>
    <div>
      <form class="form" @submit.prevent="getByName">
        <input class="input" type="text" v-model="nameSearch" @blur="getByName" placeholder="Character">
        <button class="btn-search" :class="!nameSearch ? 'disabled' : ''" @click="getByName" :disabled="!nameSearch">Search</button>
      </form>
    </div>
    <div v-if="heroes" class="flex f-wrap f-justify-center">
      <div class="" v-for="card in heroes" :key="card.id">
        <custom-card :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import Service from '@/services/api';
import CustomCard from '@/components/CustomCard.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'Home',
  components: {
    CustomCard,
    Loader,
  },
  data: () => ({
    service: new Service(),
    heroes: [],
    nameSearch: null,
    offset: 0,
    count: 0,
    loading: true,
  }),
  mounted() {
    this.getAll();
    window.onscroll = () => {
      const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        this.offset += 1;
        this.getAll();
      }
    };
  },
  beforeDestroy() {},
  methods: {
    getAll() {
      this.loading = true;
      this.service.getAll(this.offset * this.count + 1).then((resp) => {
        const { results } = resp.data;
        this.loading = false;
        this.count = resp.data.count;
        results.forEach(element => {
          this.heroes.push(element);
        });
      });
    },
    getByName() {
      if (!this.nameSearch) return;
      this.loading = true;
      this.service.getByName(this.nameSearch).then((resp) => {
        this.loading = false;
        this.heroes = resp.data.results;
      });
    }
  },
  watch: {
    nameSearch(newValue) {
      if (!newValue) {
        this.heroes = [];
        this.offset = 0;
        this.getAll();
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.home
  .form
    display: flex
    justify-content: center
    padding: 25px 15px
    @media (min-width: 992px) // lg
      padding: 25px 0

  .input
    background: none
    border: none
    border-bottom: 1px solid #0079ff
    width: 100%
    transition: all .4s ease
    color: #fff
    @media (min-width: 992px) // lg
      width: 500px
    &:focus
      border-bottom: 1px solid #6cb2ff
      outline: none
  .btn-search
    background: linear-gradient(to right, #6cb2ff, #0079ff)
    border: none
    height: 35px
    border-radius: 5px
    width: 75px
    cursor: pointer
    color: #fff
    &:focus
      outline: none
    &.disabled
      background: rgb(0 0 0 / 20%)
      cursor: not-allowed
</style>
