import mitt from "mitt";

export type AdminEvents = {
  productSelected: { id: number };
  productDeleted: { id: number };
  categoryDeleted: { id: number };
};

export const bus = mitt<AdminEvents>();

export default bus;
