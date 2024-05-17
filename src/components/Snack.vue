<template>
    <div>
        <h2>
            {{ SnackName }}
            <img src="/bintang.svg" v-show="SnackIsFavorite">
        </h2>
        <p>{{ SnackDesc }}</p>
        <button @click="toggleFavorite">Favorite</button>
    </div>
</template>

<script>
export default {
    props: ['SnackName','SnackDesc','isFavorite'],
    data() {
        return {
            SnackIsFavorite: this.isFavorite
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
    }
    </style>