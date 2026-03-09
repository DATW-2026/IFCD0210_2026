# Entidades

- Invoice (facturas)

  - #brand: Company
  - #client: Company
  - #items: Item[]
  - #total: number
  - #ivaType: number
  - #payment: string
  
  - #calculateTotal: function: number
  - showTotal: function: void
  - showInvoice: function: void

- Company
  - name
  - address
  - phone
  - nif

- Item
  - product: Product
  - amount: number

- Product
  - description
  - price
