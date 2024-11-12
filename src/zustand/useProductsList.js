import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProductsList = create(
    persist(
        (set) => ({
            data: [],
            addProduct: (newProduct) =>
                set((state) => ({ data: [...state.data, newProduct] })),
        }),
        { name: "productsList" }
    )
);
