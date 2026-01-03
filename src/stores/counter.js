import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

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
    getAddCartCount(state) {
      return (id) => {
        const item = state.itemsCart.find((i) => i.name === id.name)
        return !item ? 0 : item.count
      }
    },
  },

  actions: {
    addCartList(item, operation) {
      const itemCart = this.itemsCart.find((i) => i.name === item.name)

      if (!itemCart && operation === 'plus') {
        this.addNewCartItem(item)
        return
      }

      if (operation === 'plus') {
        itemCart.count++
      }

      if (operation === 'minus') {
        itemCart.count--
      }

      if (itemCart.count === 0) {
        this.removeCartItem(item)
      }
    },

    addNewCartItem(item) {
      this.itemsCart.push({
        name: item.name,
        price: item.price,
        count: 1,
      })
    },

    removeCartItem(item) {
      this.itemsCart = this.itemsCart.filter((i) => i.name !== item.name)
    },

    closeButton(item) {
      this.removeCartItem(item)
    },
  },
})
