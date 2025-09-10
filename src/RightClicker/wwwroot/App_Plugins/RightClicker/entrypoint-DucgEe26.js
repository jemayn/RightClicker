const a = (i, c) => {
  document.body.addEventListener("contextmenu", function(e) {
    var n, r, u;
    const o = e.composedPath().find(
      (t) => t instanceof Element && t.tagName === "UUI-MENU-ITEM"
    );
    if (o) {
      e.preventDefault();
      let t = o;
      if (t = t.querySelector("umb-entity-actions-bundle"), !t || (t = (n = t.shadowRoot) == null ? void 0 : n.querySelector("uui-action-bar"), !t) || (t = t.querySelector("umb-entity-actions-dropdown"), !t) || (t = (r = t.shadowRoot) == null ? void 0 : r.querySelector("umb-dropdown"), !t) || (t = (u = t.shadowRoot) == null ? void 0 : u.querySelector("uui-button"), !t)) return;
      t.click();
    }
  });
}, d = (i, c) => {
};
export {
  a as onInit,
  d as onUnload
};
//# sourceMappingURL=entrypoint-DucgEe26.js.map
