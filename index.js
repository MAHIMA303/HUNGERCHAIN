import { AppRegistry, Platform } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { registerRootComponent } from "expo";

if (Platform.OS === "web") {
  const rootTag = document.getElementById("root") || document.createElement("div");
  if (!rootTag.parentNode) document.body.appendChild(rootTag);
  AppRegistry.runApplication(appName, { initialProps: {}, rootTag });
} else {
  registerRootComponent(App);
}
