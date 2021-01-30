<template>
  <div class="list-items" v-if="getItems && getItems.length">
    <div class="info-card flex-column f-align-center f-1">
      <span class="title">{{ title }}</span>
      <transition name="fade" mode="out-in">
        <ul :key="getItems.length">
          <li class="item" v-for="el in getItems" :key="el.name">{{ el.name }}</li>
        </ul>
      </transition>
      <div class="more">
        <div class="cursor-pointer" v-if="hasMore > 0" @click="changeCollapsed(false)">
          <small>&#43; Show more {{ hasMore }}</small>
        </div>
        <div class="cursor-pointer" v-if="items.length > 5 && !hasMore" @click="changeCollapsed(true)">
          <small>&#8722; Hide</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-items',
  components: {},
  props: ['title', 'items'],
  data: () => ({
    collapsed: true,
  }),
  computed: {
    getItems() {
      if (this.collapsed && this.items.length > 5) {
        return this.items.slice(0, 5);
      }
      return this.items;
    },
    hasMore() {
      return this.items.length - this.getItems.length;
    },
  },
  methods: {
    changeCollapsed(value) {
      this.collapsed = value;
    },
  },
};
</script>

<style lang="sass" scoped>
.list-items 
  margin-top: 20px
  width: 100%
  @media (min-width: 768px)  // md
    width: 30% 
  .title
    text-align: center
    text-shadow: 2px 2px #66768a
    font-weight: 500
  .item
    font-size: 14px
  .more
    margin-bottom: 20px

.fade-enter-active, .fade-leave-active 
  transition: opacity .2s

.fade-enter, .fade-leave-to 
  opacity: 0

</style>
