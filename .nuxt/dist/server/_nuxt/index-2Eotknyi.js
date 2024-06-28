import { _ as __nuxt_component_0 } from "./nuxt-link-CTD-Dlqn.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "destr";
import "gsap";
import "gsap/ScrollTrigger.js";
import "gsap/ScrollToPlugin.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { href: "/sobre", text: "Sobre" },
      { href: "/projetos", text: "Projetos" },
      { href: "/fale-comigo", text: "Fale comigo" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-fluid" }, _attrs))}><div class="row"><div class="offset-lg-2 col-lg-8"><div class="hero in-up"><h1 class="title in-top-bottom">Designer de produtos digitais com experiência em criação de marca e desenvolvimento.</h1></div></div></div><div class="row"><nav class="offset-lg-2 col-lg-8"><p class="mb-3">Menu</p><ul class="ao-nav"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: link.href
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-2Eotknyi.js.map
