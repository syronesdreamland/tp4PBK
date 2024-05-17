<template>
    <div>
        <h2>
            {{ MakananName }}
            <img src="/bintang.svg" v-show="MakananIsFavorite">
        </h2>
        <p>{{ MakananDesc }}</p>
        <button @click="toggleFavorite">Favorite</button>
    </div>
</template>

<script>
export default {
  props: ['MakananName','MakananDesc','isFavorite'],
    data() {
        return {
            MakananIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
            this.$emit('toggle-favorite');
        }
    }
};
</script>

<style scoped>
img {
        height: 1.5em;
        float: right;
    }</style>