// store/useHeaderStore.js
import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    title: '타이틀',
  }),
  actions: {
    setTitle(newTitle) {
      this.title = newTitle;
    },
  },
});
