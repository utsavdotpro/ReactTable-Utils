import { ColumnDef } from "@tanstack/react-table";

import TableHeader from ".";

export class TableHeaderBuilder<T> {
  headers: TableHeader<T>[] = [];

  addAt(
    position: number | undefined,
    idOrKey: keyof T | string,
    fn?: (column: TableHeader<T>) => TableHeader<T>,
    toAdd: boolean = true
  ): TableHeaderBuilder<T> {
    if (!toAdd) return this;

    let header = new TableHeader(idOrKey);

    header = fn ? fn(header) : header;

    if (position === undefined) this.headers.push(header);
    else this.headers.splice(position, 0, header);

    return this;
  }

  add(
    idOrKey: keyof T | string,
    fn?: (column: TableHeader<T>) => TableHeader<T>,
    toAdd: boolean = true
  ): TableHeaderBuilder<T> {
    return this.addAt(undefined, idOrKey, fn, toAdd);
  }

  build(): ColumnDef<T>[] {
    return this.headers.map((header) => header.build());
  }
}

export default TableHeaderBuilder;
