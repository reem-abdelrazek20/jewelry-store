const API_URL = "https://fakestoreapi.com";

export const getJewelryProducts = async () => {
  const response = await fetch(`${API_URL}/products/category/jewelery`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};