<template>
  <transition-group 
    appear
    name="fade" 
    tag="div"
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div 
      @click="pause"
      v-for="i in [currentIdx]" 
      :key="i"
    >
      <nuxt-img
        class="img"
        :src="currentImage"
        alt="Mount Adams"
        sizes="sm:100vw md:90vw lg:700px xl:700px"
      />
      <h1 
        v-if="currentIdx == 0 && isHeader" 
        class="title"
      >
        BZ<span class="title-offset">Blends</span> 
      </h1>
    </div>
  </transition-group>
</template>

<script>
import { gsap } from 'gsap';
let tl = gsap.timeline();

export default {
  name: 'Images',
  props: ['isHeader'],
  data() {
    return {
      currentIdx: 0
    };
  },
  computed: {
    images() {
      return this.isHeader ? this.$store.getters.images :
        this.$store.getters.foodImages
    },
    currentImage() {
      return this.images[this.currentIdx % this.images.length];
    },
  },
  mounted() {
    this.next();
  },
  methods: {
    pause() {
      tl.paused() ? tl.play() : tl.pause();
    },
    next() {
      this.currentIdx = (this.currentIdx + 1) % this.images.length;
    },
    beforeEnter(el, done) {
      gsap.set(el, {
        immediateRender: true,
        visibility: 'hidden',
        opacity: 0,
        onComplete: done
      })
    },
    enter(el, done) {
      tl.to(el, {
        visibility: 'visible',
        immediateRender: false,
        duration: 1,
        opacity: 1,
        ease: 'power1.easeInOut',
      })
    },
    leave(el, done) {
      tl.to(el, {
        delay: 2,
        opacity: 0,
        duration: 1,
        ease: 'power1.easeInOut',
        onComplete: done,
      })
    },
    afterLeave(el) {
      this.next();
    }
  }
};
</script>

<style scoped>
.img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.title {
  position: absolute;
  width: 100%;
  left: -15%;
  bottom: 2rem;
  text-align: center;
  font-family: Tahoma;
  font-weight: 400;
  font-size: 12vw;
  color: #ec4e01;
  letter-spacing: 1px;
}

.title-offset {
  position: absolute;
  bottom: -7vw;
/*   bottom: -1.7rem;*/
}

@media (min-width: 600px) {
  .title {
    font-size: 5rem;
    bottom: 5rem;
  }
  .title-offset {
    position: absolute;
    bottom: -3rem;
  }
}

</style>
