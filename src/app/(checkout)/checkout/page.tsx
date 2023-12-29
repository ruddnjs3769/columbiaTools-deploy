import CheckoutClient from "@/app/(checkout)/checkout/CheckoutClient";
import RouteComplete from "@/utils/RouteComplete";

export default function Checkout() {
  return (
    <RouteComplete>
      <CheckoutClient />
    </RouteComplete>
  );
}
