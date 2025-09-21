import { UMB_DOCUMENT_ENTITY_TYPE as i } from "@umbraco-cms/backoffice/document";
const t = [
  {
    name: "Right Clicker Entrypoint",
    alias: "RightClicker.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-BvHGXj2R.js")
  }
], e = [
  {
    type: "entityUserPermission",
    alias: "RightClicker.Permission",
    name: "RightClicker permission",
    forEntityTypes: [i],
    meta: {
      group: "RightClicker",
      label: "Enable old style right clicking context menus",
      description: "Gives the user access to right clicking to bring up the context menu in trees",
      verbs: ["RightClicker"]
    }
  }
], s = [
  ...t,
  ...e
];
export {
  s as manifests
};
//# sourceMappingURL=right-clicker.js.map
