<template>
  <div class="c-empty-avatar">
    <div class="c-empty-avatar__user-info">
      <p class="c-empty-avatar__full-name">John Doe</p>
      <p class="c-empty-avatar__status">Available</p>
    </div>
    <img :src="imagePath" alt="" class="c-empty-avatar__image" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  imagePath?: string
}

const props = defineProps<Props>()

const imagePath = computed(() => {
  return props.imagePath ? props.imagePath : '/assets/images/Oval.png'
})
</script>

<style scoped lang="scss">
.c-empty-avatar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  background-color: $color--white;
  margin-right: 20px;

  &__user-info {
    margin-right: 8px;
    margin-left: 17px;
  }

  &__full-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: $color--font-primary;
    margin: 0 0 1px;
  }

  &__status {
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    color: $color--font-primary;
    margin: 0;
  }

  &__image {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }

  &--border-none {
    border: none;
  }
}
</style>
