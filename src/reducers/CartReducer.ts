import { Coffee } from '../types/Coffe'

export type CartItem = {
  coffee: Coffee
  quantity: number
}

type AddCoffeToCartAction = {
  type: 'add'
  payload: Coffee
}

type RemoveCoffeToCartAction = {
  type: 'remove'
  payload: {
    id: number
  }
}

type IncrementCoffeToCartAction = {
  type: 'increment'
  payload: {
    id: number
  }
}

type DecrementCoffeToCartAction = {
  type: 'decrement'
  payload: {
    id: number
  }
}

export type CartActions =
  | AddCoffeToCartAction
  | RemoveCoffeToCartAction
  | IncrementCoffeToCartAction
  | DecrementCoffeToCartAction

export const cartReducer = (
  coffe: CartItem[],
  action: CartActions,
): CartItem[] => {
  switch (action.type) {
    case 'add': {
      const existingItem = coffe.find((c) => c.coffee.id === action.payload.id)

      if (existingItem) {
        return coffe.map((item) =>
          item.coffee.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      } else {
        return [
          ...(coffe || []),
          {
            coffee: action.payload,
            quantity: 1,
          },
        ]
      }
    }

    case 'remove':
      return coffe.filter((cof) => cof.coffee.id !== action.payload.id)

    case 'increment':
      return coffe.map((item) =>
        item.coffee.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )

    case 'decrement':
      return coffe
        .map((item) =>
          item.coffee.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0)

    default:
      return coffe
  }
}
