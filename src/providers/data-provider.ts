import type { DataProvider } from "@refinedev/core";

export const dataProvider: DataProvider = {
    getOne: () => {
        throw new Error("Not implemented");
    },
    update: () => {
        throw new Error("Not implemented");
    },
    getList: () => {
        throw new Error("Not implemented");
    },
    create: () => {
        throw new Error("Not implemented");
    },
    deleteOne: () => {
        throw new Error("Not implemented");
    },
    getApiUrl: () => import.meta.env.VITE_API_URL,
    // Optional methods:
    // getMany: () => { /* ... */ },
    // createMany: () => { /* ... */ },
    // deleteMany: () => { /* ... */ },
    // updateMany: () => { /* ... */ },
    // custom: () => { /* ... */ },
};
