export const handler = async (event) => {
    const products = event.products
    const response = {
      statusCode: 200,
      body: JSON.stringify('the products are: ' + products),
    };
    return response;
  };
  