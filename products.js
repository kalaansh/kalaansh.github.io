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
    category: "Pooja Thali",
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
    category: "Diya/Tealight Candle",
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
    category: "Diya/Tealight Candle",
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
  {
    name: "Floral Shubh Laabh Toran",
    tagline: "Handcrafted floral Shubh Laabh toran, bringing together vibrant blooms, traditional detailing and a beautiful statement for your doorway.",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/Floral Shubh Laabh Toran.jpeg" },
    ],
  },
  {
    name: "Floral Table Runner with Tealight",
    tagline: "Richly detailed floral table runner, with roses and tealight holders beautifully worked into the design.",
    category: "Table Runner",
    media: [
      { type: "image", src: "assets/products/Floral Table Runner 1.jpeg" },
      { type: "image", src: "assets/products/Floral Table Runner 2.jpeg" },
    ],
  },
  {
    name: "24 inch Rangoli",
    tagline: "Handcrafted 24-inch MDF rangoli with a central tealight holder for festive decor.",
    category: "Rangoli",
    media: [
      { type: "image", src: "assets/products/24inch_rangoli.jpeg" },
    ],
  },
  {
    name: "Colourful Shubh Laabh",
    tagline: "Shubh Labh set with matching tealight holder, available in multiple vibrant colours for festive entrances.",
    category: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/colour_shubh_laabh1.jpeg" },
       { type: "image", src: "assets/products/colour_shubh_laabh2.jpeg" },
       { type: "image", src: "assets/products/colour_shubh_laabh3.jpeg" },
       { type: "image", src: "assets/products/colour_shubh_laabh4.jpeg" },
    ],
  },
  {
    name: "Gau Shubh Laabh",
    tagline: "Cow and calf shubh laabh wall hangings for an auspicious entrance.",
    category: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/gau_shubh_laabh.jpeg" },
    ],
  },
  {
    name: "Krishna Theme Floral Toran",
    tagline: "Krishna themed pink floral and peacock toran with shubh Labh hangings",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/krishna_theme_floral_toran.jpeg" },
    ],
  },
  {
    name: "Pearl Floral Shubh Laabh",
    tagline: "Resin shubh laabh featuring delicate pearls and florals",
    category: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/pearl_floral_shubhlaabh_1.jpeg" },
       { type: "image", src: "assets/products/pearl_floral_shubhlaabh_2.jpeg" },
       { type: "image", src: "assets/products/pearl_floral_shubhlaabh_3.jpeg" },
    ],
  },
  {
    name: "Assorted Pooja Thali",
    tagline: "Collection of 8 inch pooja thalis available in multiple colours",
    category: "Pooja Thali",
    media: [
      { type: "image", src: "assets/products/assorted_8inch_pooja_thali.jpeg" },
    ],
  },
  {
    name: "Rose Theme Tealight Candle",
    tagline: "Red and white rose tealight candle holders to add a warm, festive glow to any space.",
    category: "Diya/Tealight Candle",
    media: [
      { type: "image", src: "assets/products/rose_theme_tealight_candle_1.jpeg" },
       { type: "image", src: "assets/products/rose_theme_tealight_candle_2.jpeg" },
    ],
  },
  {
    name: "3ft Toran",
    tagline: "3 foot Krishna themed toran adorned with elephant motifs, lotus accents, and hanging bells",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/3ft_toran.jpeg" },
    ],
  },
  {
    name: "Brown Resin Shubh Laabh",
    tagline: "Brown resin shubh laabh adorned with pearls and florals.",
    category: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/brown_resin_shubh_laabh.jpeg" },
    ],
  },
  {
    name: "Colourful Ghungroo Hangings",
    tagline: "Colourful hanging toran with ghungroos that chime with every soft breeze.",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/colourful_ghungroo_hangings.jpeg" },
    ],
  },
  {
    name: "Evil Eye Hangings",
    tagline: "Evil eye and lotus wall hangings for positive vibes.",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/evil_eye_hangings.jpeg" },
    ],
  },
  {
    name: "Lotus Shubh Laabh",
    tagline: "Red and gold lotus shubh laabh for an auspicious entrance.",
    category: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/lotus_shubh_laabh.jpeg" },
    ],
  },
  {
    name: "Lotus Tealight Cangle",
    tagline: "Handcrafted pink and lavender lotus tealight holder accented with delicate pearls for a charming festive glow.",
    category: "Diya/Tealight Candle",
    media: [
      { type: "image", src: "assets/products/lotus_tealight_candle1.jpeg" },
      { type: "image", src: "assets/products/lotus_tealight_candle2.jpeg" },
    ],
  },
  {
    name: "Peacock Tealight Candle Set",
    tagline: "Peacock themed floral tealight holder set with red and white roses and pearl beaded rings.",
    category: "Diya/Tealight Candle",
    media: [
      { type: "image", src: "assets/products/peacock_theme_tealight_candle_set.jpeg" },
    ],
  },
  {
    name: "Pearl Blue Toran",
    tagline: "Pearl blue toran featuring cow motifs, evil eye accents, lotus work, and hanging bells.",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/pearl_blue_toran.jpeg" },
    ],
  },
  {
    name: "Red and White Toran",
    tagline: "White mogra and red rose floral toran with shubh laabh hangings",
    category: "Toran",
    media: [
      { type: "image", src: "assets/products/red_and_white_toran.jpeg" },
    ],
  },
  {
    name: "Resin Cutlery Stand",
    tagline: "Purple and gold resin cutlery and napkin holder to elevate your dining table.",
    category: "Resin Art",
    media: [
      { type: "image", src: "assets/products/resin_cutlery_stand1.jpeg" },
      { type: "image", src: "assets/products/resin_cutlery_stand2.jpeg" },
    ],
  },
  {
    name: "Resin Shubh Laabh",
    tagline: "Pearl white resin shubh laabh, available in multiple designs for an elegant entrance.",
    category: "Shubh Laabh",
    media: [
      { type: "image", src: "assets/products/resin_shubh_laabh1.jpeg" },
      { type: "image", src: "assets/products/resin_shubh_laabh2.jpeg" },
       { type: "image", src: "assets/products/resin_shubh_laabh3.jpeg" },
    ],
  },
];
