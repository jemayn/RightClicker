import type {
  UmbEntryPointOnInit,
  UmbEntryPointOnUnload,
} from "@umbraco-cms/backoffice/extension-api";

export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {
  document.body.addEventListener('contextmenu', function(e) {
    const path = e.composedPath();
    const menuItem = path.find(
      (el): el is Element => el instanceof Element && el.tagName === 'UUI-MENU-ITEM'
    );
    if (menuItem) {
      e.preventDefault();
      // Traverse from menuItem as before
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
  });
};

export const onUnload: UmbEntryPointOnUnload = (_host, _extensionRegistry) => {
};
