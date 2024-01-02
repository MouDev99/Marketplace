import { Button } from "@nextui-org/react";

function CartSummary() {

  return (
    <div className="flex flex-col gap-2">
      <div className="w-96 h-fit border-1 py-4 px-6 rounded-sm">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="w-full flex items-center mb-4">
          <span className="text-sm font-bold">Total:</span>
          <span className="text-xl font-bold ml-auto">US $0.00</span>
        </div>
        <Button size="lg" variant="shadow" color="primary"
          className="w-full text-lg font-bold mb-4"
        >
          Checkout (0)
        </Button>
      </div>
      <div className="w-96 h-fit border-1 py-4 px-6 rounded-sm">
        <h2 className="text-xl font-bold mb-2">Pay with</h2>
        <div className="w-full flex flex-wrap gap-1 justify-start mb-4">
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/Sa4a89534ef694f1c8877ae3d864db6acz/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/S85aba413145f4b479fc18825603f87aaZ/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/S0321450614244c4dafba2517560de3b8s/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/Sffbd9fb9807e42d9a32feda7bc09121cA/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/S7774cbfd89914cad85c8b548087820308/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/Sf9caac85ebcd470a95d0ff441ebf609fc/216x144.png" />
          <img className="w-12 h-8" src="https://ae01.alicdn.com/kf/S2a5881f5906b4fb58a0c6da600ddf7bf1/216x144.png" />
        </div>
        <h2 className="text-xl font-bold mb-1">Buyer protection</h2>
        <p className="text-sm font-semibold">
          <span className="text-lg text-success">✔</span>
          Get full refund if the item is not as described or if is not delivered
        </p>
      </div>
    </div>
  )
};

export default CartSummary;
