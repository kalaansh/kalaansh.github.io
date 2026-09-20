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
  enquiryNote: "For pricing, custom orders or availability, drop us a DM on Instagram with the piece you’re interested in.",
};

const PRODUCTS = [
  {
    name: "Beach Theme Clock",
    tagline: "Serene beach-inspired resin clock with ocean waves, sandy textures and delicate seashells.",
    category: "Resin Art",
    featured: false, // optional — gives the piece a larger tile
    media: [
      { type: "image", src: "assets/products/Beach Theme Clock.jpg", alt: "Beach themed resin clock with seashells" },
      // { type: "image", src: "assets/products/sample-1b.jpg" },
      // A video is added exactly like this — uncomment once your file is in place:
      // { type: "video", src: "assets/products/sample-1.mp4" },
    ],
  },
  {
    name: "Pooja Thali",
    tagline: "Beautifully handcrafted morpankh pooja thali, perfect for your festive and everyday rituals.",
    category: "Resin Art",
    media: [
      { type: "image", src: "assets/products/Pooja Thali Large.jpg" },
      { type: "image", src: "assets/products/Pooja Thali Small.jpg" },
    ],
  },
  {
    name: "Peach Resin Shubh Laabh",
    tagline: "Handcrafted peach resin Shubh Laabh décor, adding a traditional touch with a beautiful, modern finish to your space.",
    category: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/Resin Shubh Laabh bg1.jpg" },
      { type: "image", src: "assets/products/Resin Shubh Laabh bg2.jpg" },
    ],
  },
  {
    name: "Pink Floral Toran",
    tagline: "Beautiful pink floral toran, crafted to add a soft and festive charm to your doorway.",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/Pink Floral Toran.jpg" },
    ],
  },
  {
    name: "Brocade 4 Diya Table Runner",
    tagline: "Handcrafted table runner featuring a brocade design, paired with a set of four tealight candle holders for a festive setup.",
    category: "Table Runner",
    media: [
      { type: "image", src: "assets/products/Brocade 4 Diya Table Runner.jpg" },
    ],
  },
  {
    name: "Floral Toran",
    tagline: "Vibrant floral toran designed to bring colour, charm and a festive touch to your home entrance.",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/Floral Toran.jpg" },
    ],
  },
  {
    name: "Hanging Floral Shubh Laabh",
    tagline: "Graceful hanging Shubh Laabh décor adorned with delicate flowers, perfect for adding a festive touch to your home.",
    category: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/Hanging Floral Shubh Laabh.jpg" },
    ],
  },
  {
    name: "Keychains",
    tagline: "Personalised alphabet keychains, handcrafted with colourful details to make everyday essentials a little more special.",
    category: "Resin Art",
    media: [
      { type: "image", src: "assets/products/Keychains.jpg" },
    ],
  },
  {
    name: "Marble Effect Clock",
    tagline: "Classic resin clock with an elegant black-and-gold marble effect, bringing a touch of luxury to your space.",
    category: "Resin Art",
    media: [
      { type: "image", src: "assets/products/Marble Effect Clock 1.jpg" },
      { type: "image", src: "assets/products/Marble Effect Clock 2.jpg" },
    ],
  },
  {
    name: "Peacock Table Runner",
    tagline: "Peacock-themed table runner with matching tealight candle holders, designed to sit beautifully at the centre of your table",
    category: "Table Runner",
    media: [
      { type: "image", src: "assets/products/Peacock Table Runner 1.jpg" },
      { type: "image", src: "assets/products/Peacock Table Runner 2.jpg" },
    ],
  },
  {
    name: "Resin Diya Set",
    tagline: "A pair of handcrafted resin tealight candle holders, adding a warm and elegant glow to your table.",
    category: "Diya",
    media: [
      { type: "image", src: "assets/products/Resin Tealight Candle Set 1.jpg" },
      { type: "image", src: "assets/products/Resin Tealight Candle Set 2.jpg" },
    ],
  },
  {
    name: "Shreenath Ji Toran",
    tagline: "Traditional Shreenath Ji toran, thoughtfully designed to complement your doorway beautifully.",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/Shreenath Ji Toran.jpg" },
    ],
  },
  {
    name: "Photo Frame",
    tagline: "A unique resin photo frame that brings your special moments to life with a personal touch.",
    category: "Resin Art",
    media: [
      { type: "image", src: "assets/products/Photo Frame 1.jpg" },
      { type: "image", src: "assets/products/Photo Frame 2.jpg" },
    ],
  },
  {
    name: "Floral Resin Diya",
    tagline: "Simple and elegant resin tealight candle holder, perfect for everyday décor or festive occasions.",
    category: "Diya",
    media: [
      { type: "image", src: "assets/products/Single Diya 1.jpg" },
      { type: "image", src: "assets/products/Single Diya 2.jpg" },
    ],
  },
  {
    name: "Shubh Laabh and Diya set",
    tagline: "Traditional Shubh Laabh set with an elegant resin diya, perfect for your entrance, pooja space or festive décor.",
    categories: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/Shubh Laabh and Diya.jpeg" },
    ],
  },
  {
    name: "Pearl White Shubh Laabh",
    tagline: "Shubh Laabh décor piece with floral and pearl detailing, made to bring a traditional element to your home",
    category: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/Pearl Shubh Laabh 1.jpeg" },
      { type: "image", src: "assets/products/Pearl Shubh Laabh 2.jpeg" },
    ],
  },
];
