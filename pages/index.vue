<template>
  <div class="index-page">
    <div class="image">
      <Images :isHeader="true"/> 
    </div> 
    <Menu class="menu"/> 
    <Images class="foodImg" :isHeader="false"/> 
    <Info class="info"/> 
    <TheFooter class="footer"/> 
  </div>
</template>

<style scoped>
.index-page {
  width: min(100%, 700px);
  margin-inline: auto;
  text-align: center;
  background: black;
}

.image {
  width: 99%;
  padding-bottom: 66.66%;
  position: relative;
}

.menu {
  width: 100%;
  padding: 1rem;
  background: rgb(0,7,8);
  background: linear-gradient(180deg, rgba(0,7,8,1) 0%, rgba(79,79,173,0.8701855742296919) 100%);
}

.foodImg {
  width: 99%;
  padding-bottom: 200%;
  position: relative;
}

.info {
  background: rgb(0,7,8);
  background: linear-gradient( 180deg , rgb(27 2 56) 0%, rgb(68 9 29 / 87%) 100%);
}

.footer {
  margin-top: auto;
}
</style>
