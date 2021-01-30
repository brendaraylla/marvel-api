<template>
  <div class="card" @click="goToDetailsPage">
    <img class="image" :src="`${card.thumbnail.path}/portrait_incredible.${card.thumbnail.extension}`" alt="">
    <div class="favorite">
      <div v-if="!isFavorite(card)" key="is" class="flex f-align-center favorite--not" @click.stop.prevent="markAsFavorite(card)">❤</div>
      <div v-else key="not" class="flex f-align-center favorite--is" @click.stop.prevent="removeAsFavorite(card)">❤</div>
    </div>
    <div class="content">
      <div class="infos flex-column">
        <span class="title">{{ card.name }}</span>
        <p class="description">{{ card.description }}</p>
        <div class="flex f-justify-center">
          <div class="flex-column f-align-center f-justify-center numbers-content">
            <div class="">{{ card.comics.available }}</div>
            <span>Comics</span>
          </div>
          <div class="flex-column f-align-center f-justify-center numbers-content">
            <div class="">{{ card.series.available }}</div>
            <span>Series</span>
          </div>
          <div class="flex-column f-align-center f-justify-center numbers-content">
            <div class="">{{ card.stories.available }}</div>
            <span>Stories</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import favoriteMixin from '@/mixin/favorite';

export default {
  props: ['card'],
  mixins: [favoriteMixin],
  methods: {
    goToDetailsPage() {
      this.$router.push({ name: 'About', params: { id: this.card.id } });
    },
  },
};
</script>

<style scoped lang="sass">
.card
  margin: 10px
  position: relative
  overflow: hidden
  border-radius: 15px
  height: 324px
  width: 216px
  transition: .5s all ease
  cursor: pointer
  @media (min-width: 768px)
    margin: 20px
  &:hover
    transform: scale(1.05)
    box-shadow: 0 0 26px 0 rgb(0 200 245)
    > .image
      filter: brightness(1.3)
  .image
    transition: .5s all ease
  //   filter: brightness(0.9)
  .content
    background: linear-gradient(#00000000, #243346)
    width: 100%
    position: absolute
    bottom: 0
    left: 0
  .infos
    padding: 16px
  .title
    font-size: 18px
    font-weight: bold
    text-shadow: 2px 2px #243346
  .description
    width: 100%
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    margin: 8px 0

  .numbers-content
    border-radius: 8px
    background: rgba(#000, .8)
    padding: 8px
    text-align: center
    font-size: 12px
    &:nth-child(2)
      margin: 0 14px
    
  .favorite
    cursor: pointer
    position: absolute
    top: 12px
    right: 0
    &--is,
    &--not
      height: 30px
      width: 35px
      border-radius: 20px 0 0 20px
      padding-left: 19px
      box-shadow: 3px 3px 4px 0 rgba(#000000, .6)
      background: #ffc3c3
      text-shadow: 1px 2px rebeccapurple
    &--is
      color: red
      font-size: 24px
    &--not
      font-size: 22px
      color: grey

</style>
