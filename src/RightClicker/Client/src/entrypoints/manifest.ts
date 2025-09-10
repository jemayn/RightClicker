export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Right Clicker Entrypoint",
    alias: "RightClicker.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint.js"),
  },
];
