import { _ as __nuxt_component_0 } from './nuxt-link-D3jPBkif.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'gsap';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { href: "/grupo-paes", text: "Grupo Paes." },
      { href: "/hyundai", text: "Hyundai." },
      { href: "/paraiso-feminino", text: "Para\xEDso Feminino." },
      { href: "/pratic-app", text: "Pratic App" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-fluid my-content" }, _attrs))}><div class="row"><div class="offset-lg-2 col-lg-8"><ul class="ao-nav"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "projetos" + link.href
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
      _push(`<!--]--></ul></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projetos/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-mQF4LtbU.mjs.map