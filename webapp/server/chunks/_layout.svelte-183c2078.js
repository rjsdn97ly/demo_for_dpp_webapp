import { c as create_ssr_component, v as validate_component, a as add_attribute, b as compute_rest_props, d as spread, e as escape_attribute_value, f as escape_object } from './index2-5afa8c64.js';
import { F as Frame } from './Indicator.svelte_svelte_type_style_lang-cc4c1706.js';
import { twMerge } from 'tailwind-merge';

const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["navClass", "navDivClass", "fluid"]);
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = false } = $$props;
  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.navDivClass === void 0 && $$bindings.navDivClass && navDivClass !== void 0)
    $$bindings.navDivClass(navDivClass);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: "nav" }, $$restProps, { class: twMerge(navClass, $$props.class) }), {}, {
    default: () => {
      return `<div${add_attribute("class", twMerge(navDivClass, fluid && "w-full" || "container"), 0)}>${slots.default ? slots.default({ hidden, toggle }) : ``}</div>`;
    }
  })}

`;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>

`;
});
const logo = "/_app/immutable/assets/kaist_logo.19b6c683.png";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="header-div " style="display: flex; flex-direction: column;">${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      color: "form",
      navClass: "px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
    },
    {},
    {
      default: ({ hidden, toggle }) => {
        return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
          default: () => {
            return `<img${add_attribute("src", logo, 0)} class="mt-1 mr-2 h-4" alt="Logo">
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">GS1 DIGITAL LINK
            </span>`;
          }
        })}
        `;
      }
    }
  )}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-y2s0nj_START --><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"><!-- HEAD_svelte-y2s0nj_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}


`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-183c2078.js.map
