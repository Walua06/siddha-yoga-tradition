import { c as createComponent, m as maybeRenderHead, e as renderScript, b as addAttribute, a as renderTemplate, f as createAstro, g as renderHead, r as renderComponent, h as renderSlot } from './astro/server_qGYhCKi_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Our Gurus", url: "/gurus" },
    { text: "Virtual Darshan", url: "/darshan" },
    { text: "Literature", url: "/literature" },
    { text: "Practices", url: "/practices" },
    { text: "Events", url: "/events" },
    { text: "Contact", url: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full transition-all duration-300 z-50" id="header"> <div class="container mx-auto px-4 py-3 flex items-center justify-between"> <a href="/" class="flex items-center"> <span class="text-xl font-playfair font-semibold text-deep-charcoal">Siddha Yoga Tradition</span> </a> <!-- Mobile menu button --> <button id="mobile-menu-button" class="lg:hidden text-deep-charcoal focus:outline-none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <!-- Desktop navigation --> <nav class="hidden lg:flex space-x-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="font-poppins text-sm text-deep-charcoal hover:text-lotus-coral transition-colors duration-300"> ${link.text} </a>`)} <a href="/darshan" class="font-poppins text-sm font-medium px-5 py-2 rounded-full bg-gradient-to-r from-lotus-pink to-lotus-coral text-white hover:shadow-soft-glow transition duration-300">
Virtual Darshan
</a> </nav> </div> <!-- Mobile navigation --> <div id="mobile-menu" class="hidden lg:hidden bg-sacred-ivory shadow-md"> <div class="container mx-auto px-4 py-3"> <nav class="flex flex-col space-y-4"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="font-poppins text-sm text-deep-charcoal hover:text-lotus-coral py-2 border-b border-misty-ash"> ${link.text} </a>`)} <a href="/darshan" class="font-poppins text-sm font-medium px-5 py-2 text-center rounded-full bg-gradient-to-r from-lotus-pink to-lotus-coral text-white hover:shadow-soft-glow transition duration-300">
Virtual Darshan
</a> </nav> </div> </div> </header> ${renderScript($$result, "/home/project/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const quickLinks = [
    { text: "About Us", url: "/about" },
    { text: "Our Gurus", url: "/gurus" },
    { text: "Virtual Darshan", url: "/darshan" },
    { text: "Literature", url: "/literature" },
    { text: "Practices", url: "/practices" },
    { text: "Events", url: "/events" },
    { text: "Contact", url: "/contact" }
  ];
  const communityLinks = [
    { text: "WhatsApp Groups", url: "/community#whatsapp" },
    { text: "Seva Groups", url: "/community#seva" },
    { text: "Business Connect", url: "/community#business" },
    { text: "Youth Connect", url: "/community#youth" }
  ];
  const ashramLocations = [
    "Rishikesh, Uttarakhand",
    "Vrindavan, Mathura",
    "Bengaluru, Karnataka"
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-himalayan-sky bg-opacity-20 pt-16 pb-8"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- About section --> <div> <h3 class="text-xl font-cormorant font-semibold mb-4 text-deep-charcoal">Siddha Yoga Tradition</h3> <p class="text-sm mb-4 text-deep-charcoal">A revered lineage under Sri Prabhuji and Sri Guruji, bringing ancient wisdom to modern seekers.</p> <div class="flex space-x-4"> <a href="#" aria-label="Facebook" class="text-lotus-coral hover:text-lotus-pink transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"> <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path> </svg> </a> <a href="#" aria-label="Instagram" class="text-lotus-coral hover:text-lotus-pink transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a> <a href="#" aria-label="YouTube" class="text-lotus-coral hover:text-lotus-pink transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"> <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path> </svg> </a> </div> </div> <!-- Quick Links --> <div> <h3 class="text-xl font-cormorant font-semibold mb-4 text-deep-charcoal">Quick Links</h3> <ul class="space-y-2"> ${quickLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="text-sm text-deep-charcoal hover:text-lotus-coral transition-colors"> ${link.text} </a> </li>`)} </ul> </div> <!-- Community --> <div> <h3 class="text-xl font-cormorant font-semibold mb-4 text-deep-charcoal">Community</h3> <ul class="space-y-2"> ${communityLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="text-sm text-deep-charcoal hover:text-lotus-coral transition-colors"> ${link.text} </a> </li>`)} </ul> </div> <!-- Newsletter Signup --> <div> <h3 class="text-xl font-cormorant font-semibold mb-4 text-deep-charcoal">Join Our Journey</h3> <p class="text-sm mb-4 text-deep-charcoal">Subscribe to receive our monthly newsletter with spiritual insights and upcoming events.</p> <form class="space-y-3"> <div> <input type="email" placeholder="Your email address" class="w-full px-4 py-2 text-sm rounded-md border border-misty-ash focus:outline-none focus:ring-2 focus:ring-lotus-pink" required> </div> <button type="submit" class="w-full px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-lotus-pink to-lotus-coral text-white hover:shadow-soft-glow transition duration-300">
Subscribe
</button> </form> </div> </div> <!-- Ashram Locations --> <div class="mt-12 pt-8 border-t border-misty-ash"> <h3 class="text-xl font-cormorant font-semibold mb-4 text-deep-charcoal">Our Ashram Locations</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${ashramLocations.map((location) => renderTemplate`<div class="text-sm text-deep-charcoal">${location}</div>`)} </div> </div> <!-- Copyright --> <div class="mt-12 pt-6 border-t border-misty-ash text-center"> <p class="text-xs text-deep-charcoal">
&copy; ${currentYear} Siddha Yoga Tradition. All rights reserved.
</p> </div> </div> </footer>`;
}, "/home/project/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Experience the ancient wisdom of Siddha Yoga Tradition - a spiritual lineage under Sri Prabhuji and Sri Guruji." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Font imports --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet"><title>${title} | Siddha Yoga Tradition</title>${renderHead()}</head> <body class="min-h-screen flex flex-col bg-sacred-ivory"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/project/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const {
    title,
    subtitle,
    alignment = "center",
    scriptText
  } = Astro2.props;
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mb-12 ${alignmentClasses[alignment]}`, "class")}> ${scriptText && renderTemplate`<div class="script-text text-lotus-coral text-2xl mb-2">${scriptText}</div>`} <h2 class="text-3xl md:text-4xl font-playfair font-semibold text-deep-charcoal mb-4"> ${title} </h2> ${subtitle && renderTemplate`<p class="text-base md:text-lg max-w-3xl mx-auto text-deep-charcoal opacity-80"> ${subtitle} </p>`} <div class="w-24 h-1 bg-gradient-to-r from-lotus-pink to-lotus-coral rounded-full mt-4 mb-4 
    {alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}"></div> </div>`;
}, "/home/project/src/components/SectionTitle.astro", void 0);

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    text,
    href = "#",
    variant = "primary",
    size = "md",
    class: className = ""
  } = Astro2.props;
  const baseStyles = "inline-block rounded-full font-poppins transition duration-300 text-center";
  const variantStyles = {
    primary: "bg-gradient-to-r from-lotus-pink to-lotus-coral text-white hover:shadow-soft-glow",
    secondary: "bg-himalayan-sky text-deep-charcoal hover:bg-himalayan-sky hover:bg-opacity-80",
    outline: "border-2 border-lotus-coral text-lotus-coral hover:bg-lotus-coral hover:bg-opacity-10"
  };
  const sizeStyles = {
    sm: "text-xs px-4 py-1.5",
    md: "text-sm px-6 py-2",
    lg: "text-base px-8 py-3"
  };
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}> ${text} </a>`;
}, "/home/project/src/components/Button.astro", void 0);

export { $$Layout as $, $$SectionTitle as a, $$Button as b };
