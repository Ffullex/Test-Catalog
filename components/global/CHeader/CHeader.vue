<template>
  <div class="c-header">
    <div class="c-header__icon-container">
      <icon-template name="mail" width="21px" height="16px" class="c-header__icon color-icon-gray" />
      <icon-template name="calendar" width="19px" height="20px" class="c-header__icon color-icon-gray" />
      <icon-template name="star" width="21px" height="19px" class="c-header__icon color-orange" />
    </div>
    <div class="c-header__icon-container">
      <icon-template name="bell" width="19px" height="20px" class="c-header__icon color-icon-gray" />
      <icon-template name="search" width="19px" height="18px" class="c-header__icon color-icon-gray" />
      <c-empty-avatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTemplate from '~/components/global/IconTemplate/IconTemplate.vue'
import CEmptyAvatar from '~/components/global/CEmptyAvatar/CEmptyAvatar.vue'
</script>

<style scoped lang="scss">
.c-header {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 $color--shadow;
  background-color: $color--white;
  margin: 30px 32px 69px;

  &__icon-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
  }

  &__icon {
    margin: 23px 12px;
  }
}
</style>
