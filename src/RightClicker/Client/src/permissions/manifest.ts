import { UMB_DOCUMENT_ENTITY_TYPE } from "@umbraco-cms/backoffice/document";

export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "entityUserPermission",
    alias: "RightClicker.Permission",
    name: "RightClicker permission",
    forEntityTypes: [UMB_DOCUMENT_ENTITY_TYPE],
    meta: {
      group: "RightClicker",
      label: "Enable old style right clicking context menus",
      description: "Gives the user access to right clicking to bring up the context menu in trees",
      verbs: ["RightClicker"]
    }
  },
];
