import { Product, Response } from "../types";
import { api } from "../utils/axios";

export const getData = async () => {
  const { data } = await api.get<Response<Product[]>>("catalogs");

  return data;
};

export const getProductById = async (id: string) => {
  const { data } = await api.get<Response<Product[]>>(`/catalogs/${id}`);

  return data;
};