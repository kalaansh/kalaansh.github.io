/* ==========================================================================
   KALAANSH — this is the ONLY file you need to edit.

   1. SITE  → your email, Instagram, intro line.
   2. PRODUCTS → your catalogue. Add, edit or delete entries freely.

   Rules of thumb:
   - Every product needs: name, tagline, category, media.
   - "media" can hold as many photos as you like, and a video if you have one.
   - To hide a product for the season, delete its block or put // in front of
     every line of it.
   - Keep the commas and curly braces exactly as shown.
   ========================================================================== */

const SITE = {
  founder: "Pooja Mantri",
  email: "kalaanshco@gmail.com",          // ← replace with your Gmail
  instagram: "kalaansh.co",                     // ← your handle, without the @
  intro:
    "Handmade décor, resin art and gifting pieces. " +
    "Every piece is poured, set and finished by hand, so no two are ever identical.",
  // Shown under the collection so people know how to ask about a piece.
  enquiryNote: "Prices and made-to-order options are shared on Instagram — send a DM with the name of the piece.",
};

const PRODUCTS = [
  {
    name: "Beach Theme Clock",
    tagline: "A serene beach-inspired resin clock",
    category: "Resin art",
    featured: true, // optional — gives the piece a larger tile
    media: [
      { type: "image", src: "assets/products/Beach Theme Clock.jpg", alt: "NA" },
      // { type: "image", src: "assets/products/sample-1b.jpg" },
      // A video is added exactly like this — uncomment once your file is in place:
      // { type: "video", src: "assets/products/sample-1.mp4" },
    ],
  },
  {
    name: "Pooja Thali",
    tagline: "Morpankh pooja thali available in small and large size",
    category: "Resin Art",
    media: [
      { type: "image", src: "assets/products/Pooja Thali Large.jpg" },
      { type: "image", src: "assets/products/Pooja Thali Small.jpg" },
    ],
  },
  {
    name: "Resin Shubh Laabh",
    tagline: "Shubh Laabh made using resin for sticking on wall",
    category: "Home décor",
    media: [
      { type: "image", src: "assets/products/Resin Shubh Laabh bg1.jpg" },
      { type: "image", src: "assets/products/Resin Shubh Laabh bg2.jpg" },
    ],
  },
  {
    name: "Pink Floral Toran",
    tagline: "Beautiful pink floral toran for hanging",
    category: "Home décor",
    media: [
      { type: "image", src: "assets/products/Pink Floral Toran.jpg" },
    ],
  },
];
