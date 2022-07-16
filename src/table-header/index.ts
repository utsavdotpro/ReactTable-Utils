import { AccessorFn, ColumnDef } from "@tanstack/react-table";

class TableHeader<T extends unknown> {
  private id?: string;
  private key: keyof T;
  private _cell?: ColumnDef<T>["cell"];
  private _accessorFn?: AccessorFn<T>;
  private _header?: ColumnDef<T>["header"];
  private _footer?: ColumnDef<T>["footer"];

  constructor(idOrKey: keyof T | string) {
    this.id = idOrKey as string;
    this.key = idOrKey as keyof T;
  }

  cell(ele: (value: string) => JSX.Element): TableHeader<T> {
    this._cell = (info) => ele(info.getValue());
    return this;
  }

  header(header: ColumnDef<T>["header"]): TableHeader<T> {
    this._header = header;
    return this;
  }

  footer(footer: ColumnDef<T>["footer"]): TableHeader<T> {
    this._footer = footer;
    return this;
  }

  accessorFn(fn: (row: T, index: number) => unknown): TableHeader<T> {
    this._accessorFn = fn;
    return this;
  }

  build(): ColumnDef<T> {
    const column: ColumnDef<T> = {
      id: this.id,
      header: this._header ?? this.id,
      footer: this._footer,
      accessorKey: this.key,
      accessorFn: this._accessorFn,
    };

    if (this._cell) {
      column.cell = this._cell;
    }

    // @ts-ignore: accessorFn property isn't available on ColumnDef
    if (this._accessorFn) column.accessorFn = this._accessorFn;

    return column;
  }
}

export default TableHeader;
