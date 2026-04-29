import useCounterStore from "@/auth/store/auth.store";
import { Button } from "@/components/ui/button";

const ProductPage = function () {
  const { count, increase, reduce } = useCounterStore();

  return (
    <>
      <h1 className="text-3xl">Contador de prueba: {count}</h1>
      <Button onClick={increase}>+1</Button>
      <Button onClick={reduce}>-1</Button>
    </>
  );
};

export default ProductPage;
