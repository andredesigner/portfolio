import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "destr";
import "gsap";
import "gsap/ScrollTrigger.js";
import "gsap/ScrollToPlugin.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-fluid my-content" }, _attrs))} data-v-2e8c9ec0><div class="row" data-v-2e8c9ec0><div class="offset-lg-2 col-lg-3" data-v-2e8c9ec0><h1 data-v-2e8c9ec0>Muito obrigado pela visita.</h1></div><div class="offset-lg-1 col-lg-4" data-v-2e8c9ec0><p data-v-2e8c9ec0>Fique a vontade para me mandar mensagem e marcar uma conversa ou um café, será um prazer conhece-lo e me apresentar.</p><form data-v-2e8c9ec0><div class="ao-input radius-top-left-right-10" data-v-2e8c9ec0><input type="text" class="ao-form-control form-control shadow-none" id="name" required data-v-2e8c9ec0><label for="name" class="ao-form-label form-label" data-v-2e8c9ec0>Como costumam te chamar</label></div><div class="ao-input" data-v-2e8c9ec0><input type="email" class="ao-form-control form-control shadow-none" id="e-mail" required data-v-2e8c9ec0><label for="e-mail" class="ao-form-label form-label" data-v-2e8c9ec0>Um e-mail para eu retornar</label></div><div class="ao-input radius-bottom-left-right-10" data-v-2e8c9ec0><textarea for="message" class="ao-form-control ao-textarea form-control shadow-none" id="message" contenteditable required data-v-2e8c9ec0></textarea><label for="message" class="ao-form-label form-label" data-v-2e8c9ec0>Você gosta de café?</label></div><button type="submit" class="btn ao-btn ao-btn-fill" data-v-2e8c9ec0>Enviar</button></form></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fale-comigo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faleComigo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2e8c9ec0"]]);
export {
  faleComigo as default
};
//# sourceMappingURL=fale-comigo-UBYJ9St9.js.map
