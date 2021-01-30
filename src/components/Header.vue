<template>
  <header class="header flex f-justify-center f-align-center">
    <router-link to="/">HOME</router-link> |
    <router-link to="/favorite">FAVORITES</router-link>
  </header>
</template>

<script>
export default {
  name: 'header',
  components: {},
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="sass" scoped>
.header 
  width: 100%
  height: 60px
  background: #191e25
  box-shadow: 0 -6px 26px 0 rgba(0, 200, 245, .3)
  position: fixed
  z-index: 3
  top: 0
  a
    font-size: 18px
    font-weight: bold
    margin: 16px
    text-decoration: none
    text-shadow: 2px 2px #66768a
    color: #fff
</style>
