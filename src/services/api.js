const API_URL = "https://fakestoreapi.com";

export const getJewelryProducts = async () => {
  const response = await fetch(`${API_URL}/products/category/jewelery`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
};