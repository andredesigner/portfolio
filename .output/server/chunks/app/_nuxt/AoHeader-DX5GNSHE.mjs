import { _ as __nuxt_component_0$1 } from './nuxt-link-D3jPBkif.mjs';
import { _ as _export_sfc, b as useRoute } from '../server.mjs';
import { useSSRContext, withCtx, createVNode, createTextVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "36",
    height: "50",
    viewBox: "0 0 36 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M32.8141 7.80304C31.3671 5.34653 29.3414 3.43334 26.7484 2.05769C24.1612 0.693603 21.1688 0 17.7713 0C14.3738 0 11.3814 0.687823 8.78842 2.05769C6.20121 3.43334 4.18122 5.34653 2.73424 7.80304C1.7908 9.39255 1.15413 11.1439 0.824219 13.0397H10.2701C10.409 12.4964 10.6058 11.9878 10.8373 11.5023C11.4914 10.1497 12.4117 9.10355 13.6098 8.37526C14.8079 7.64698 16.197 7.27706 17.7771 7.27706C19.3572 7.27706 20.7694 7.64698 21.956 8.37526C23.1425 9.10355 24.057 10.1497 24.711 11.5023C24.9425 11.982 25.1335 12.4964 25.284 13.0397H34.7299C34.3942 11.1381 33.7634 9.38677 32.8199 7.80304H32.8141Z" fill="black"></path><path d="M35.5553 48.6996C34.525 47.3124 33.9115 45.6015 33.8999 43.7461V33.0762C33.8999 23.7414 26.2946 16.1465 16.9471 16.1465C7.59956 16.1465 0 23.7414 0 33.0762C0 38.0355 0.625097 41.4341 2.02578 44.0929C3.44382 46.7864 6.41303 50.0001 12.4962 50.0001C16.8371 50.0001 22.4688 47.4569 25.9705 43.6768C25.9705 45.5553 26.584 47.2951 27.6258 48.6938H33.8941H35.5495L35.5553 48.6996ZM21.6816 38.9603C18.886 40.8561 15.2801 42.0873 12.4962 42.0873C10.1231 42.0873 9.46906 41.226 9.04076 40.411C8.29411 38.9892 7.92947 36.5904 7.92947 33.0762C7.92947 28.1111 11.9752 24.0709 16.9471 24.0709C21.9189 24.0709 25.9647 28.1111 25.9647 33.0762C25.9647 34.9374 24.3614 37.1338 21.6758 38.9603H21.6816Z" fill="#FFB607"></path><path d="M16.9601 36.6553C19.1817 36.6553 20.9827 34.8568 20.9827 32.6382C20.9827 30.4196 19.1817 28.6211 16.9601 28.6211C14.7385 28.6211 12.9375 30.4196 12.9375 32.6382C12.9375 34.8568 14.7385 36.6553 16.9601 36.6553Z" fill="black"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AoLogo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AoLogo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "AoHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<!--[--><header data-v-9a9a8ec4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "my-logo",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AoLogo, { class: "in-top-bottom" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(AoLogo, { class: "in-top-bottom" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$route.name != "fale-comigo") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "in-top-bottom ao-btn",
          id: "talk-to-me",
          to: "/fale-comigo"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Fale comigo`);
            } else {
              return [
                createTextVNode("Fale comigo")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (_ctx.$route.name == "index") {
        _push(`<div class="container-fluid" data-v-9a9a8ec4><div class="row" data-v-9a9a8ec4><div class="offset-2 col offset-lg-2 col-lg-7" data-v-9a9a8ec4><p class="first-element-page" data-v-9a9a8ec4> Ol\xE1, <br data-v-9a9a8ec4> seja bem vindo. </p></div></div></div>`);
      } else {
        _push(`<div class="container-fluid" data-v-9a9a8ec4><div class="row" data-v-9a9a8ec4><div class="offset-2 col offset-lg-2 col-lg-9" data-v-9a9a8ec4><div class="first-element-page position-fixed" data-v-9a9a8ec4>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "d-inline-block mr-3",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` In\xEDcio `);
            } else {
              return [
                createTextVNode(" In\xEDcio ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span data-v-9a9a8ec4>/</span><span data-v-9a9a8ec4>${ssrInterpolate(_ctx.$route.name)}</span></div></div></div></div>`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AoHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9a9a8ec4"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=AoHeader-DX5GNSHE.mjs.map
