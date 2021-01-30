<template>
  <div id="app">
    <main-header/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/Header';
export default {
  components: { MainHeader }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url('./assets/bg2.jpg');
  background-size: cover;
  color: white;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(#000, .7);
  }
  > .container {
    padding-top: 60px;
    position: relative;
    @media (min-width: 768px) { // md
    }
    @media (min-width: 992px) { // lg
    }
    @media (min-width: 1200px) { // xl
    }
    @media (min-width: 1400px) { // xxl
    }
  }
}

html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.flex {
  display: flex;
  flex: 1;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.f-wrap {
  flex-wrap: wrap;
}
.f-justify-center {
  justify-content: center;
}
.f-align-center {
  align-items: center;
}
.f-1 {
  flex: 1;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
