import CheckoutAddressClient from "@/app/(checkout)/checkout-address/CheckoutAddressClient";
import RouteComplete from "@/utils/RouteComplete";

export default function CheckoutAddress() {
  return (
    <RouteComplete>
      <CheckoutAddressClient />
    </RouteComplete>
  );
}
