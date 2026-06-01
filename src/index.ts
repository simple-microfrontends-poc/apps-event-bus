import mitt from "mitt";

export type AdminEvents = {
  productSelected: { sku: string };
  productDeleted: { id: number };
  categoryDeleted: { id: number };
};

export const bus = mitt<AdminEvents>();

export default bus;
