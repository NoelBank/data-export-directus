export interface RelationsResponse {
  data: Datum[];
}

export interface Datum {
  collection: string;
  field: string;
  related_collection: string;
  schema: Schema | null;
  meta: Meta;
}

export interface Meta {
  id?: number;
  many_collection: string;
  many_field: string;
  one_collection: string;
  one_field: null | string;
  one_collection_field: null;
  one_allowed_collections: null;
  junction_field: null;
  sort_field: null;
  one_deselect_action: OneDeselectAction;
  system?: boolean;
}

export enum OneDeselectAction {
  Delete = "delete",
  Nullify = "nullify",
}

export interface Schema {
  table: string;
  column: string;
  foreign_key_table: string;
  foreign_key_column: ForeignKeyColumn;
  constraint_name: string;
  on_update: On;
  on_delete: On;
}

export enum ForeignKeyColumn {
  Collection = "collection",
  ID = "id",
}

export enum On {
  Cascade = "CASCADE",
  NoAction = "NO ACTION",
  Restrict = "RESTRICT",
  SetNull = "SET NULL",
}
