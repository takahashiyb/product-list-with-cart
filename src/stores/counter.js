import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return { count, doubleCount, increment }
})

export const useCartStore = defineStore('counter', {
  state: () => ({
    itemsCart: [],
  }),

  getters: {
    getCountTotal(state) {
      return state.itemsCart.reduce((a, b) => a + b.count, 0)
    },
    getAmountTotal(state) {
      return state.itemsCart.reduce((a, b) => a + b.count * b.price, 0).toFixed(2)
    },
    getItemsCart(state) {
      return state.itemsCart
    },
    getPriceItemCart(state) {
      return (id) => {
        const item = state.itemsCart.find((i) => i.name === id.name)
        return item.count.toFixed(2)
      }
    },
    getTotalPriceItemCart(state) {
      return (id) => {
        const item = state.itemsCart.find((i) => i.name === id.name)
        return (item.count * item.price).toFixed(2)
      }
    },
  },

  actions: {
    addCartList(item, countItem) {
      const itemCart = this.itemsCart.find((i) => i.name === item.name)

      if (!itemCart) {
        this.addNewCartItem(item, countItem)
      } else {
        itemCart.count = countItem
      }

      if (countItem === 0) {
        this.removeCartItem(item)
      }
    },

    addNewCartItem(item, countItem) {
      this.itemsCart.push({
        name: item.name,
        price: item.price,
        count: countItem,
      })
    },

    removeCartItem(item) {
      this.itemsCart = this.itemsCart.filter((i) => i.name !== item.name)
    },
  },
})
