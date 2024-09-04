// import { getProducts } from "@/utils/helper";
import { BASE_URL } from "@/utils/instance";
import ViewProduct from "./_viewProduct";
import axios from "axios";

async function fetchProductIds() {
  const response = await axios.get(`${BASE_URL}/drinks/product/`);
  const products = response.data.results;
  return products.map((product) => ({ id: product.id + "" }));
}

// Static generation of paths
export async function generateStaticParams() {
  const ids = await fetchProductIds();
  return ids;
}

export default function ProductPage({ params }) {
  return (
    <div>
      <ViewProduct id={params.id} />
    </div>
  );
}
