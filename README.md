# React Table Utils

Util functions & classes for easily creating [TanStack Table v8](https://tanstack.com/table/v8/?from=reactTableV7&original=https://react-table-v7.tanstack.com/) (ReactTable).

---

## Install

````bash
yarn add react-table-utils
# or
npm install react-table-utils
````

## Getting Started

This is utils package for TanStack Table so you need to install it to your project.

````bash
yarn @tanstack/react-table
````

## Classes & Functions

### TableHeader Class

TableHeader is a generic class for generating table headers for the table. It gives you the option to modify all the required properties of your column directly by using the different setter functions. It supports chaining.

````js
new TableHeader<EntityType>("name") // id or key for the column
  .header("Name") // optional header text or element
  .footer(("Total")) // optional footer text or element
  .cell((value) => <strong>{value}</strong>) // optional cell element, returns the value by default
  .accessorFn((row) => row.name) // optional accessor function, overrides the cell
  .build(); // returns the JSON object
````

### TableHeaderBuilder Class

While [TableHeader](#tableheader-class) is good for creating single column headers, it is not enough for creating multiple columns. TableHeaderBuilder is a class for creating multiple columns. It gives you an `add()` to quickly chain as many table headers as you like.

The `add()` takes three parameters:

- `idOrKey`: id or key for the column
- `fn`: function that gives you the generated TableHeader to modify
- `toAdd`: boolean flag to conditionally add the header to the builder

It also has an `addAt()` that accepts all the parameters of `add()` but also takes an `position` parameter to add the header at a specific index.

**Example:**
````js
new TableHeaderBuilder<EntityType>()
  .add("serial", (col) =>
    col.header("#").accessorFn((_, index) => index + 1)
  )
  .add("actions", (col) => col.header(""))
  .add("name")
  .add("email", (col) =>
    col.cell((value) => (
      <LinkedItem href={`mailto:${value}`}>{value}</LinkedItem>
    ))
  )
  .add("mobile", (col) =>
    col.cell((value) =>
      <LinkedItem href={`tel:${value}`}>{value}</LinkedItem>
    )
  )
  .add("language", (col) =>
    col.cell((value) => <span>{value}</span>)
  )
  .add("status", (col) =>
    col.cell((value) => (
      <Tag>{value.toLowerCase()}</Tag>
    ))
  )
  .build(); // returns an array of (TableHeader) JSON objects
````