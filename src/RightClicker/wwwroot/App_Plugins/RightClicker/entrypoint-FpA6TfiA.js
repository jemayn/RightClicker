const a = (u, c) => {
  document.body.addEventListener("rightClicker", function(e) {
    var n, r, i;
    const o = e.composedPath().find(
      (t) => t instanceof Element && t.tagName === "UUI-MENU-ITEM"
    );
    if (o) {
      e.preventDefault();
      let t = o;
      if (t = t.querySelector("umb-entity-actions-bundle"), !t || (t = (n = t.shadowRoot) == null ? void 0 : n.querySelector("uui-action-bar"), !t) || (t = t.querySelector("umb-entity-actions-dropdown"), !t) || (t = (r = t.shadowRoot) == null ? void 0 : r.querySelector("umb-dropdown"), !t) || (t = (i = t.shadowRoot) == null ? void 0 : i.querySelector("uui-button"), !t)) return;
      t.click();
    }
  });
}, d = (u, c) => {
};
export {
  a as onInit,
  d as onUnload
};
//# sourceMappingURL=entrypoint-FpA6TfiA.js.map
