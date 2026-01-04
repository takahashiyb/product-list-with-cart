import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    itemsCart: [],
    isOpenConfirmationPage: false,
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
    isCartEmpty(state) {
      return state.itemsCart.length === 0
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
        image: item.image,
      })
    },

    removeCartItem(item) {
      this.itemsCart = this.itemsCart.filter((i) => i.name !== item.name)
    },

    closeButton(item) {
      this.removeCartItem(item)
    },

    openConfirmationPage() {
      this.isOpenConfirmationPage = true
    },
    closeConfirmationPage() {
      this.isOpenConfirmationPage = false
    },
  },
})
