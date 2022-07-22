import ProductRow from "./ProductRow";

function ProductsTable(props) {

  const { products } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((individualProduct, index) => {
            return (
              <ProductRow
                key={index}
                name={individualProduct.name}
                price={individualProduct.price}
                inStock={individualProduct.inStock}
              />
            );
          })}
        </tbody>
      </table>
    </div>
    
  );
}

export default ProductsTable;