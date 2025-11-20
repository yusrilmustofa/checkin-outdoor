'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  desc: string;
  image: string;
  items?: string[]; // Optional items array for packages
}

export interface CartItem extends Product {
  quantity: number;
  rentalDays: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerInfo: CustomerInfo;
  totalPrice: number;
  orderDate: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  rentalStartDate: string;
  rentalEndDate: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
  guarantee: string;
  pickupDay: string;
  pickupTime: string;
  needDP: boolean;
}

interface CartState {
  items: CartItem[];
  orders: Order[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; rentalDays: number } }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'UPDATE_RENTAL_DAYS'; payload: { id: number; rentalDays: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'LOAD_ORDERS'; payload: Order[] }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { orderId: string; status: Order['status'] } };

const initialState: CartState = {
  items: [],
  orders: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, rentalDays } = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      let newItems: CartItem[];
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity, rentalDays }
            : item
        );
      } else {
        newItems = [...state.items, { ...product, quantity, rentalDays }];
      }

      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity * item.rentalDays), 0),
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity * item.rentalDays), 0),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: id });
      }

      const newItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );

      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity * item.rentalDays), 0),
      };
    }

    case 'UPDATE_RENTAL_DAYS': {
      const { id, rentalDays } = action.payload;
      const newItems = state.items.map(item =>
        item.id === id ? { ...item, rentalDays } : item
      );

      return {
        ...state,
        items: newItems,
        totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity * item.rentalDays), 0),
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };

    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload,
        totalItems: action.payload.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: action.payload.reduce((sum, item) => sum + (item.price * item.quantity * item.rentalDays), 0),
      };

    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case 'LOAD_ORDERS':
      return {
        ...state,
        orders: action.payload,
      };

    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.orderId
            ? { ...order, status: action.payload.status }
            : order
        ),
      };

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addToCart: (product: Product, quantity: number, rentalDays: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  updateRentalDays: (id: number, rentalDays: number) => void;
  clearCart: () => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart and orders from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }

    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      try {
        const orders = JSON.parse(savedOrders).map((order: any) => ({
          ...order,
          orderDate: new Date(order.orderDate)
        }));
        dispatch({ type: 'LOAD_ORDERS', payload: orders });
      } catch (error) {
        console.error('Error loading orders from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(state.orders));
  }, [state.orders]);

  const addToCart = (product: Product, quantity: number, rentalDays: number) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, rentalDays } });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const updateRentalDays = (id: number, rentalDays: number) => {
    dispatch({ type: 'UPDATE_RENTAL_DAYS', payload: { id, rentalDays } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addOrder = (order: Order) => {
    dispatch({ type: 'ADD_ORDER', payload: order });
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { orderId, status } });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateRentalDays,
        clearCart,
        addOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};