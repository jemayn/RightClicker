import type {
  UmbEntryPointOnInit,
  UmbEntryPointOnUnload,
} from "@umbraco-cms/backoffice/extension-api";
import { UMB_CURRENT_USER_CONTEXT } from "@umbraco-cms/backoffice/current-user";

let rightClickMenuEnabled = false;

function rightClickMenuHandler(e: MouseEvent) {
  const path = e.composedPath();
  const menuItem = path.find(
    (el): el is Element => el instanceof Element && el.tagName === 'UUI-MENU-ITEM'
  );
  if (menuItem) {
    e.preventDefault();
    let el: Element | null | undefined = menuItem;
    el = el.querySelector('umb-entity-actions-bundle');
    if (!el) return;
    el = (el as HTMLElement).shadowRoot?.querySelector('uui-action-bar');
    if (!el) return;
    el = el.querySelector('umb-entity-actions-dropdown');
    if (!el) return;
    el = (el as HTMLElement).shadowRoot?.querySelector('umb-dropdown');
    if (!el) return;
    el = (el as HTMLElement).shadowRoot?.querySelector('uui-button');
    if (!el) return;
    (el as HTMLElement).click();
  }
}

function enableRightClickMenu() {
  if (!rightClickMenuEnabled) {
    document.body.addEventListener('contextmenu', rightClickMenuHandler);
    rightClickMenuEnabled = true;
  }
}

function disableRightClickMenu() {
  if (rightClickMenuEnabled) {
    document.body.removeEventListener('contextmenu', rightClickMenuHandler);
    rightClickMenuEnabled = false;
  }
}

export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {
  _host.consumeContext(UMB_CURRENT_USER_CONTEXT, (currentUserCtx) => {
    let userPermissions: string[] | undefined;
    let fallbackPermissions: string[] | undefined;

    function evaluatePermissions() {
      const hasPermission =
        (userPermissions?.includes('RightClicker') ?? false) ||
        (fallbackPermissions?.includes('RightClicker') ?? false);

      if (hasPermission) {
        enableRightClickMenu();
      } else {
        disableRightClickMenu();
      }
    }

    _host.observe(currentUserCtx?.permissions, (newPermissions) => {
      userPermissions = newPermissions as string[] | undefined;
      evaluatePermissions();
    });

    _host.observe(currentUserCtx?.fallbackPermissions, (newFallbacks) => {
      fallbackPermissions = newFallbacks;
      evaluatePermissions();
    });
  });
};

export const onUnload: UmbEntryPointOnUnload = (_host, _extensionRegistry) => {
  disableRightClickMenu();
};
