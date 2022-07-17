import { ColumnDef } from "@tanstack/react-table";

import TableHeader from ".";

export class TableHeaderBuilder<T> {
  headers: TableHeader<T>[] = [];

  add(
    idOrKey: keyof T | string,
    fn?: (column: TableHeader<T>) => TableHeader<T>,
    toAdd: boolean = true
  ): TableHeaderBuilder<T> {
    if (!toAdd) return this;

    const header = new TableHeader(idOrKey);

    this.headers.push(fn ? fn(header) : new TableHeader<T>(idOrKey));

    return this;
  }

  build(): ColumnDef<T>[] {
    return this.headers.map((header) => header.build());
  }
}

export default TableHeaderBuilder;
