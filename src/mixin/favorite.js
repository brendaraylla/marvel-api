export default {
  methods: { 
    isFavorite(heroe) {
      const { favoriteHeroes } = this.$store.getters;
      const find = favoriteHeroes.find((el) => el.id === heroe.id);
      return !!find;
    },
    heroeInfo(heroe) {
      return {
        id: heroe.id,
        thumbnail: heroe.thumbnail,
        name: heroe.name,
        description: heroe.description,
        comics: heroe.comics,
        series: heroe.series,
        stories: heroe.stories,
      };
    },
    markAsFavorite(value) {
      const heroe = this.heroeInfo(value);
      this.$store.dispatch('addHeroe', heroe);
    },
    removeAsFavorite(value) {
      const heroe = this.heroeInfo(value);
      this.$store.dispatch('removeHeroe', heroe);
    },
  },
};
