<template>
  <div class="fancy-btn">
    Tugas 4 PBK
 	</div>
  <div id="wrapper">
    <h1>Makanan</h1>
    <Makanan
      v-for="x in Makanan"
      :key="x.name"
      :Makanan-name="x.name"
      :Makanan-desc="x.desc"
      :is-favorite="x.favorite" 
      @toggle-favorite="receiveEmit" />
      <br>
    <h1>Minuman</h1>
    <Minuman
      v-for="x in Minuman"
      :key="x.name"
      :Minuman-name="x.name"
      :Minuman-desc="x.desc"
      :is-favorite="x.favorite" 
      @toggle-favorite="receiveEmit" />
      <br>
      <h1>Snack</h1>
      <Snack
      v-for="x in Snack"
      :key="x.name"
      :Snack-name="x.name"
      :Snack-desc="x.desc"
      :is-favorite="x.favorite" 
      @toggle-favorite="receiveEmit" />
      
  </div>
</template>

<script>
import Makanan from './components/Makanan.vue';
import Minuman from './components/Minuman.vue';
import Snack from './components/Snack.vue';
import FancyButton from './components/FancyButton.vue';

export default {
  components: {
    Makanan,
    Minuman,
    Snack
  },
  data() {
    return {
      Makanan: [
        { name: 'Nasi Goreng', desc: 'Nasi yang digoreng dengan bumbu dan sayuran', favorite: true },
        { name: 'Mie Goreng', desc: 'Mie yang digoreng dengan bumbu dan sayuran', favorite: false },
        { name: 'Sate Ayam', desc: 'Daging ayam yang ditusuk dan dibakar', favorite: true },
        { name: 'Ayam Penyet', desc: 'Ayam yang digoreng lalu dipenyet dengan sambal', favorite: true }
      ],
      Minuman: [
        { name: 'Es Teh', desc: 'Minuman teh yang disajikan dingin', favorite: true },
        { name: 'Es Jeruk', desc: 'Minuman jeruk yang disajikan dingin', favorite: false },
        { name: 'Es Campur', desc: 'Minuman campuran buah dan es', favorite: true },
        { name: 'Es Teler', desc: 'Minuman campuran buah, es, dan susu', favorite: true }
      ],
      Snack: [
        { name: 'Keripik Kentang', desc: 'Keripik kentang yang renyah', favorite: true },
        { name: 'Keripik Singkong', desc: 'Keripik singkong yang renyah', favorite: false },
        { name: 'Keripik Pisang', desc: 'Keripik pisang yang renyah', favorite: true },
        { name: 'Keripik Tempe', desc: 'Keripik tempe yang renyah', favorite: true }
      ],
    };
  },
  methods: {
    receiveEmit() {
      alert('Telah ditambahkan ke favorite!');
    }
  }
};
</script>

<style>
  #wrapper {
    display:block;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background:linear-gradient(315deg, #f35454 25%, #ffaa64);
  }
</style>  