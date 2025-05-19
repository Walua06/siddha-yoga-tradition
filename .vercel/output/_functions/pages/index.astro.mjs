/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_qGYhCKi_.mjs';
import 'kleur/colors';
import { b as $$Button, a as $$SectionTitle, $ as $$Layout } from '../chunks/Button_kad_h6Qf.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const backgroundUrl = "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg";
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center py-20"> <!-- Background image with overlay --> <div class="absolute inset-0 z-0"> <img${addAttribute(backgroundUrl, "src")} alt="Divine Himalayan mountains at sunrise" class="w-full h-full object-cover" fetchpriority="high"> <div class="absolute inset-0 bg-gradient-to-r from-deep-charcoal/50 to-deep-charcoal/30"></div> </div> <div class="container mx-auto px-4 relative z-10"> <div class="max-w-3xl fade-in"> <div class="script-text text-saffron-light text-3xl mb-2">Welcome to</div> <h1 class="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
Siddha Yoga Tradition
</h1> <p class="text-lg md:text-xl text-white opacity-90 mb-8">
Walk the path of ancient wisdom in modern times. Experience the profound
        teachings of Sri Prabhuji and Sri Guruji through our spiritual sanctuary.
</p> <div class="flex flex-wrap gap-4"> ${renderComponent($$result, "Button", $$Button, { "text": "Virtual Darshan", "href": "/darshan", "variant": "primary", "size": "lg" })} ${renderComponent($$result, "Button", $$Button, { "text": "Explore Teachings", "href": "/literature", "variant": "outline", "size": "lg", "class": "border-white text-white hover:bg-white hover:bg-opacity-10" })} </div> </div> </div> </section>`;
}, "/home/project/src/components/Hero.astro", void 0);

const $$GurusSection = createComponent(($$result, $$props, $$slots) => {
  const guruImage1 = "https://images.pexels.com/photos/8108391/pexels-photo-8108391.jpeg";
  const guruImage2 = "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg";
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-sacred-ivory"> <div class="container mx-auto px-4"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Our Revered Gurus", "subtitle": "The enlightened masters who guide our spiritual lineage with wisdom and compassion.", "scriptText": "Divine Guidance" })} <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"> <!-- Sri Prabhuji --> <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]"> <div class="h-64 overflow-hidden"> <img${addAttribute(guruImage1, "src")} alt="Sri Prabhuji" class="w-full h-full object-cover"> </div> <div class="p-6"> <h3 class="text-2xl font-cormorant font-semibold mb-3 text-deep-charcoal">Sri Prabhuji</h3> <p class="text-sm mb-6 text-deep-charcoal">
A realized master who has illuminated the path for thousands of seekers worldwide.
            His teachings blend ancient wisdom with practical guidance for modern life.
</p> <div class="text-sm text-lotus-coral italic mb-6">
"True spirituality is not an escape from life, but a deeper engagement with it."
</div> ${renderComponent($$result, "Button", $$Button, { "text": "Learn More", "href": "/gurus/prabhuji", "variant": "primary", "size": "sm" })} </div> </div> <!-- Sri Guruji --> <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]"> <div class="h-64 overflow-hidden"> <img${addAttribute(guruImage2, "src")} alt="Sri Guruji" class="w-full h-full object-cover"> </div> <div class="p-6"> <h3 class="text-2xl font-cormorant font-semibold mb-3 text-deep-charcoal">Sri Guruji</h3> <p class="text-sm mb-6 text-deep-charcoal">
Continuing the unbroken lineage of sages, Sri Guruji offers profound spiritual insights
            that awaken the divine connection within each aspirant.
</p> <div class="text-sm text-lotus-coral italic mb-6">
"The journey to enlightenment begins with the practice of awareness in every moment."
</div> ${renderComponent($$result, "Button", $$Button, { "text": "Learn More", "href": "/gurus/guruji", "variant": "primary", "size": "sm" })} </div> </div> </div> </div> </section>`;
}, "/home/project/src/components/GurusSection.astro", void 0);

const $$VirtualDarshanSection = createComponent(($$result, $$props, $$slots) => {
  const darshanBg = "https://images.pexels.com/photos/10640260/pexels-photo-10640260.jpeg";
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-himalayan-sky bg-opacity-10"> <div class="container mx-auto px-4"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Virtual Darshan", "subtitle": "Experience the divine presence of our gurus through virtual darshan, wherever you are in the world.", "scriptText": "Divine Connection" })} <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"> <div class="aspect-w-16 aspect-h-9 relative"> <!-- Placeholder for video with background image --> <div class="absolute inset-0 flex items-center justify-center"> <img${addAttribute(darshanBg, "src")} alt="Temple sanctuary" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-deep-charcoal/30 flex items-center justify-center"> <button class="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center transition-transform duration-300 hover:scale-110" aria-label="Play darshan video"> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </button> </div> </div> </div> <div class="p-6 md:p-8"> <h3 class="text-2xl font-cormorant font-semibold mb-3 text-deep-charcoal">Daily Virtual Darshan</h3> <p class="text-sm mb-6 text-deep-charcoal">
Experience the sacred energy and blessings of our gurus through virtual darshan sessions. 
          These sessions are designed to provide spiritual nourishment and connection, no matter where you are located.
</p> <div class="flex flex-wrap gap-4 items-center justify-between"> <div class="flex items-center space-x-4"> <div class="w-12 h-12 rounded-full bg-himalayan-sky flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-deep-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <div class="text-xs text-deep-charcoal opacity-70">Daily Timings</div> <div class="font-medium">7:00 AM & 7:00 PM (IST)</div> </div> </div> ${renderComponent($$result, "Button", $$Button, { "text": "Join Live Darshan", "href": "/darshan", "variant": "primary", "size": "md" })} </div> </div> </div> </div> </section>`;
}, "/home/project/src/components/VirtualDarshanSection.astro", void 0);

const $$LiteratureSection = createComponent(($$result, $$props, $$slots) => {
  const literatureItems = [
    {
      title: "Blogs & Articles",
      description: "Spiritual insights and wisdom for daily living",
      icon: "pencil",
      link: "/literature/blogs"
    },
    {
      title: "Bhajans & Chants",
      description: "Sacred music to elevate your spiritual practice",
      icon: "music",
      link: "/literature/bhajans"
    },
    {
      title: "Pravachans",
      description: "Recorded teachings and discourses by our gurus",
      icon: "microphone",
      link: "/literature/pravachans"
    },
    {
      title: "E-Books",
      description: "Digital publications on spiritual topics",
      icon: "book",
      link: "/literature/ebooks"
    }
  ];
  const icons = {
    pencil: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>`,
    music: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>`,
    microphone: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>`,
    book: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>`
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-sacred-ivory"> <div class="container mx-auto px-4"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Our Literature", "subtitle": "Explore our collection of spiritual texts, teachings, and recordings to deepen your practice.", "scriptText": "Ancient Wisdom" })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${literatureItems.map((item) => renderTemplate`<div class="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:translate-y-[-5px]"> <div class="w-16 h-16 rounded-full bg-himalayan-sky bg-opacity-40 flex items-center justify-center mb-4 text-lotus-coral"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icons[item.icon])}` })} </div> <h3 class="text-xl font-cormorant font-semibold mb-2 text-deep-charcoal">${item.title}</h3> <p class="text-sm mb-4 text-deep-charcoal opacity-80">${item.description}</p> <a${addAttribute(item.link, "href")} class="text-lotus-coral hover:text-lotus-pink transition-colors duration-300 inline-flex items-center text-sm font-medium">
Explore
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div>`)} </div> <div class="mt-12 text-center"> ${renderComponent($$result, "Button", $$Button, { "text": "View All Resources", "href": "/literature", "variant": "primary", "size": "md" })} </div> </div> </section>`;
}, "/home/project/src/components/LiteratureSection.astro", void 0);

const $$PracticesSection = createComponent(($$result, $$props, $$slots) => {
  const practiceImageUrl = "https://images.pexels.com/photos/5701756/pexels-photo-5701756.jpeg";
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-lotus-pink bg-opacity-5"> <div class="container mx-auto px-4"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Do It Along Practices", "subtitle": "Join our guided spiritual practices to deepen your connection and inner peace.", "scriptText": "Daily Sadhana" })} <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"> <div class="order-2 lg:order-1"> <h3 class="text-2xl font-cormorant font-semibold mb-4 text-deep-charcoal">
Guided Spiritual Practices
</h3> <p class="text-base mb-6 text-deep-charcoal">
Our "Do It Along" practices offer step-by-step guidance for spiritual aspirants at all levels. 
          These practices include meditation, breathwork, mantra chanting, and more, designed to help you 
          establish a consistent and meaningful spiritual routine.
</p> <div class="space-y-4 mb-8"> <div class="flex items-start"> <div class="w-10 h-10 rounded-full bg-himalayan-sky flex items-center justify-center mr-4 shrink-0 text-lotus-coral"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path> </svg> </div> <div> <h4 class="text-lg font-cormorant font-semibold text-deep-charcoal">Morning Meditation</h4> <p class="text-sm text-deep-charcoal">Start your day with clarity and intention through our guided morning meditation.</p> </div> </div> <div class="flex items-start"> <div class="w-10 h-10 rounded-full bg-himalayan-sky flex items-center justify-center mr-4 shrink-0 text-lotus-coral"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path> </svg> </div> <div> <h4 class="text-lg font-cormorant font-semibold text-deep-charcoal">Pranayama Sessions</h4> <p class="text-sm text-deep-charcoal">Learn ancient breathing techniques to balance your energy and calm your mind.</p> </div> </div> <div class="flex items-start"> <div class="w-10 h-10 rounded-full bg-himalayan-sky flex items-center justify-center mr-4 shrink-0 text-lotus-coral"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path> </svg> </div> <div> <h4 class="text-lg font-cormorant font-semibold text-deep-charcoal">Evening Chanting</h4> <p class="text-sm text-deep-charcoal">Close your day with sacred mantras that purify your mind and environment.</p> </div> </div> </div> ${renderComponent($$result, "Button", $$Button, { "text": "Explore Practices", "href": "/practices", "variant": "primary", "size": "md" })} </div> <div class="order-1 lg:order-2"> <div class="rounded-lg overflow-hidden shadow-md"> <img${addAttribute(practiceImageUrl, "src")} alt="Meditation practice" class="w-full h-auto"> </div> </div> </div> </div> </section>`;
}, "/home/project/src/components/PracticesSection.astro", void 0);

const $$EventsSection = createComponent(($$result, $$props, $$slots) => {
  const upcomingEvents = [
    {
      title: "Monthly Online Satsang",
      date: "June 15, 2025",
      time: "7:00 PM IST",
      location: "Online via Zoom",
      description: "Join us for the monthly online gathering with Sri Guruji for spiritual discourse and Q&A session.",
      link: "/events/monthly-satsang"
    },
    {
      title: "Himalayan Retreat",
      date: "July 10-17, 2025",
      time: "One Week",
      location: "Rishikesh Ashram",
      description: "A week-long immersive spiritual retreat in the foothills of the Himalayas, guided by Sri Prabhuji.",
      link: "/events/himalayan-retreat"
    },
    {
      title: "Bhajan Sandhya",
      date: "June 27, 2025",
      time: "6:30 PM IST",
      location: "Online & Bengaluru Ashram",
      description: "An evening of devotional music and chanting to elevate your spiritual consciousness.",
      link: "/events/bhajan-sandhya"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-himalayan-sky bg-opacity-10"> <div class="container mx-auto px-4"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Upcoming Events", "subtitle": "Join us for transformative gatherings, retreats, and satsangs both online and in our ashrams.", "scriptText": "Spiritual Calendar" })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> ${upcomingEvents.map((event) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden"> <div class="p-6"> <div class="flex justify-between items-start mb-4"> <div> <h3 class="text-xl font-cormorant font-semibold text-deep-charcoal">${event.title}</h3> </div> <div class="bg-lotus-pink bg-opacity-10 text-lotus-coral px-3 py-1 rounded-full text-xs font-medium"> ${event.date} </div> </div> <div class="space-y-3 mb-6"> <div class="flex items-center text-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-lotus-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${event.time} </div> <div class="flex items-center text-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-lotus-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> ${event.location} </div> </div> <p class="text-sm text-deep-charcoal mb-6"> ${event.description} </p> ${renderComponent($$result, "Button", $$Button, { "text": "Register Now", "href": event.link, "variant": "primary", "size": "sm" })} </div> </div>`)} </div> <div class="mt-12 text-center"> ${renderComponent($$result, "Button", $$Button, { "text": "View All Events", "href": "/events", "variant": "outline", "size": "md", "class": "border-lotus-coral" })} </div> </div> </section>`;
}, "/home/project/src/components/EventsSection.astro", void 0);

const $$NewsletterSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-r from-lotus-pink to-lotus-coral"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <div class="script-text text-sacred-ivory text-3xl mb-2">Join Our Journey</div> <h2 class="text-3xl md:text-4xl font-playfair font-semibold text-white mb-4">
Subscribe to Our Newsletter
</h2> <p class="text-lg text-white opacity-90 mb-8">
Stay connected with our spiritual community and receive monthly insights, event updates,
        and wisdom teachings from our gurus.
</p> <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"> <input type="email" placeholder="Your email address" class="flex-grow px-4 py-3 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-deep-charcoal" required> <button type="submit" class="px-6 py-3 bg-deep-charcoal text-white rounded-md hover:bg-opacity-90 transition duration-300">
Subscribe
</button> </form> <p class="text-sm text-white opacity-80 mt-4">
We respect your privacy and will never share your information.
</p> </div> </div> </section>`;
}, "/home/project/src/components/NewsletterSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "GurusSection", $$GurusSection, {})} ${renderComponent($$result2, "VirtualDarshanSection", $$VirtualDarshanSection, {})} ${renderComponent($$result2, "LiteratureSection", $$LiteratureSection, {})} ${renderComponent($$result2, "PracticesSection", $$PracticesSection, {})} ${renderComponent($$result2, "EventsSection", $$EventsSection, {})} ${renderComponent($$result2, "NewsletterSection", $$NewsletterSection, {})} ` })}`;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
