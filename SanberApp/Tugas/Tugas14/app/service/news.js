import { client } from "./api";

export const newsGetAll = async () => client.get(`/news`);

export const newsAdd = async (title, value) =>
    client.post(`/news`, { title, value });

export const newsEdit = async (id, title, value) =>
    client.put(`/news/${id}`, { title, value });

export const newsDelete = async (id) => client.delete(`/news/${id}`);
