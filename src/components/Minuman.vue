<template>
    <div>
        <h2>
            {{ MinumanName }}
            <img src="/bintang.svg" v-show="MinumanIsFavorite">
        </h2>
        <p>{{ MinumanDesc }}</p>
        <button @click="toggleFavorite">Favorite</button>
    </div>    
</template>

<script>
export default {
 props: ['MinumanName','MinumanDesc','isFavorite'],
    data() {
        return {
            MinumanIsFavorite: this.isFavorite
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