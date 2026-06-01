export type AdminEvents = {
    productSelected: {
        sku: string;
    };
    productDeleted: {
        id: number;
    };
    categoryDeleted: {
        id: number;
    };
};
export declare const bus: import("mitt").Emitter<AdminEvents>;
export default bus;
//# sourceMappingURL=index.d.ts.map