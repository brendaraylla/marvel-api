<template>
  <div style="position: relative">
    <div class="loader">
      <div class="animation cm-spinner">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loader',
  components: {},
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="sass" scoped>
.loader
  position: fixed
  height: 100vh
  width: 100vw
  background: rgba(#000, .5)
  z-index: 2
  display: flex
  justify-content: center
  align-items: center
  .cm-spinner
    display: inline-block
    height: 80px
    width: 80px
    border: 3px solid transparent
    border-radius: 50%
    border-top: 4px solid #f15e41
    filter: brightness(1.8)
    -webkit-animation: spin 2s infinite
    animation: spin 2s infinite
    position: relative

  .cm-spinner::before,
  .cm-spinner::after
    content: ""
    position: absolute
    top: 6px
    bottom: 6px
    left: 6px
    right: 6px
    border-radius: 50%
    border: 4px solid transparent

  .cm-spinner::before
    border-top-color: #bad375
    -webkit-animation: 2s spin linear infinite
    animation: 2s spin linear infinite

  .cm-spinner::after
    border-top-color: #26a9e0
    -webkit-animation: spin .5s linear infinite
    animation: spin .5s linear infinite


@keyframes spin 
  from 
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)
  
  to 
    -webkit-transform: rotate(360deg)
    transform: rotate(360deg)
</style>
