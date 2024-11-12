import React from "react";
import { usegetProducts } from "../query/useGetProducts";
import { useProductsList } from "../zustand/useProductsList";

export const Products = () => {
    const { data, error, isLoading } = usegetProducts();
    const { addProduct } = useProductsList();

    const handleAddProduct = (product) => {
        addProduct(product);
    };

    return (
        <div className="flex items-center gap-[30px] flex-wrap justify-center py-[80px]">
            {data?.map((item) => (
                <div key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <div className="flex items-center gap-[20px] pt-[10px]">
                        <h1>{item.name}</h1>
                        <button
                            className="bg-green-500 rounded-[15px] py-[10px] px-[20px] text-white"
                            onClick={() => handleAddProduct(item)}
                        >
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
