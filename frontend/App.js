import { StripeProvider } from "@stripe/stripe-react-native";
import { Provider } from "react-redux";
import Main from "./Main";
import { store } from "./redux/store";

const stripeKey =
  "pk_test_51P4eAeSJKmsZFVSqiz3XKljOFcSYErRIPw0JcJYOu2hD3f7WtvM9OhWIIqm8oeM3ZrdsUBFSdFpBYRSDIfekZtCm00kX3T7Xy1";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="6-pack-ecom.com"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}