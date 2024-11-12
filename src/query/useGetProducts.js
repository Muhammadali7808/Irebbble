import { useQuery } from "@tanstack/react-query";
import { request } from "../service/request";

export const usegetProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => request.get("/products").then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["products"]);
        },
    });
};
