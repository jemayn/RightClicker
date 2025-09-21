import { UMB_CURRENT_USER_CONTEXT as d } from "@umbraco-cms/backoffice/current-user";
let a = !1;
function s(o) {
  var i, t, l;
  const n = o.composedPath().find(
    (e) => e instanceof Element && e.tagName === "UUI-MENU-ITEM"
  );
  if (n) {
    o.preventDefault();
    let e = n;
    if (e = e.querySelector("umb-entity-actions-bundle"), !e || (e = (i = e.shadowRoot) == null ? void 0 : i.querySelector("uui-action-bar"), !e) || (e = e.querySelector("umb-entity-actions-dropdown"), !e) || (e = (t = e.shadowRoot) == null ? void 0 : t.querySelector("umb-dropdown"), !e) || (e = (l = e.shadowRoot) == null ? void 0 : l.querySelector("uui-button"), !e)) return;
    e.click();
  }
}
function f() {
  a || (document.body.addEventListener("contextmenu", s), a = !0);
}
function c() {
  a && (document.body.removeEventListener("contextmenu", s), a = !1);
}
const r = (o, u) => {
  o.consumeContext(d, (n) => {
    let i, t;
    function l() {
      ((i == null ? void 0 : i.includes("RightClicker")) ?? !1) || ((t == null ? void 0 : t.includes("RightClicker")) ?? !1) ? f() : c();
    }
    o.observe(n == null ? void 0 : n.permissions, (e) => {
      i = e, l();
    }), o.observe(n == null ? void 0 : n.fallbackPermissions, (e) => {
      t = e, l();
    });
  });
}, b = (o, u) => {
  c();
};
export {
  r as onInit,
  b as onUnload
};
//# sourceMappingURL=entrypoint-BvHGXj2R.js.map
