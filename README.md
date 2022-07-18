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

````javascript
new TableHeader("name") // id or key for the column
  .header("Name") // optional header text or element
  .footer("Total") // optional footer text or element
  .cell((value) => <strong>{value}</strong>) // optional cell element, returns the value by default
  .accessorFn((row) => row.name) // optional accessor function, overrides the cell
  .build(); // returns the JSON object
````