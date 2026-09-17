/* Kalaansh — rendering. You shouldn't need to edit this file. */

(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var igUrl = "https://instagram.com/" + SITE.instagram;

  /* ---------- text from SITE ---------- */
  $("siteIntro").textContent = SITE.intro;
  $("founderName").textContent = SITE.founder;
  $("founderFoot").textContent = SITE.founder;
  $("enquiryNote").textContent = SITE.enquiryNote;

  var ig = $("igLink");
  ig.href = igUrl;
  ig.textContent = "@" + SITE.instagram;

  var mail = $("mailLink");
  mail.href = "mailto:" + SITE.email;
  mail.textContent = SITE.email;

  /* ---------- helpers ---------- */
  function firstImage(p) {
    for (var i = 0; i < p.media.length; i++) {
      if (p.media[i].type === "image") return p.media[i];
    }
    return null;
  }
  function hasVideo(p) {
    return p.media.some(function (m) { return m.type === "video"; });
  }
  function dmLink(p) {
    return igUrl; // opens the profile; visitors DM from there
  }

  /* ---------- grid ---------- */
  var grid = $("grid");
  var empty = $("empty");
  var active = "All";

  function render() {
    grid.innerHTML = "";
    var list = PRODUCTS.filter(function (p) {
      return active === "All" || p.category === active;
    });

    empty.hidden = list.length > 0;

    list.forEach(function (p) {
      var idx = PRODUCTS.indexOf(p);
      var card = document.createElement("button");
      card.className = "card" + (p.featured ? " card--wide" : "");
      card.type = "button";
      card.setAttribute("aria-label", "View " + p.name);

      var frame = document.createElement("div");
      frame.className = "card__frame";

      var img = firstImage(p);
      if (img) {
        var el = document.createElement("img");
        el.src = img.src;
        el.alt = img.alt || p.name;
        el.loading = "lazy";
        el.onerror = function () {
          el.remove();
          frame.insertAdjacentHTML("afterbegin",
            '<div class="card__fallback">Photo coming soon</div>');
        };
        frame.appendChild(el);
      } else {
        frame.innerHTML = '<div class="card__fallback">Photo coming soon</div>';
      }

      if (hasVideo(p)) {
        frame.insertAdjacentHTML("beforeend", '<span class="card__flag">Video</span>');
      }

      card.appendChild(frame);
      card.insertAdjacentHTML("beforeend",
        '<p class="card__name"></p><p class="card__tag"></p>');
      card.querySelector(".card__name").textContent = p.name;
      card.querySelector(".card__tag").textContent = p.tagline || "";

      card.addEventListener("click", function () { openViewer(idx); });
      grid.appendChild(card);
    });
  }

  /* ---------- filters (built from the data) ---------- */
  var cats = ["All"];
  PRODUCTS.forEach(function (p) {
    if (p.category && cats.indexOf(p.category) === -1) cats.push(p.category);
  });

  var filters = $("filters");
  if (cats.length > 2) {
    cats.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = c;
      b.setAttribute("aria-pressed", String(c === active));
      b.addEventListener("click", function () {
        active = c;
        Array.prototype.forEach.call(filters.children, function (x) {
          x.setAttribute("aria-pressed", String(x === b));
        });
        render();
      });
      filters.appendChild(b);
    });
  }

  render();

  /* ---------- viewer ---------- */
  var viewer = $("viewer");
  var vMedia = $("vMedia");
  var vThumbs = $("vThumbs");
  var vPrev = $("vPrev");
  var vNext = $("vNext");
  var current = null;
  var slide = 0;
  var lastFocus = null;

  function showSlide(i) {
    var p = PRODUCTS[current];
    slide = (i + p.media.length) % p.media.length;
    var m = p.media[slide];
    vMedia.innerHTML = "";

    if (m.type === "video") {
      var v = document.createElement("video");
      v.src = m.src;
      v.controls = true;
      v.playsInline = true;
      if (m.poster) v.poster = m.poster;
      vMedia.appendChild(v);
    } else {
      var im = document.createElement("img");
      im.src = m.src;
      im.alt = m.alt || p.name;
      im.onerror = function () {
        vMedia.innerHTML = '<div class="card__fallback" style="position:static;padding:80px 20px">Photo coming soon</div>';
      };
      vMedia.appendChild(im);
    }

    Array.prototype.forEach.call(vThumbs.children, function (t, n) {
      t.setAttribute("aria-current", String(n === slide));
    });
  }

  function openViewer(index) {
    current = index;
    lastFocus = document.activeElement;
    var p = PRODUCTS[index];

    $("vCat").textContent = p.category || "";
    $("vTitle").textContent = p.name;
    $("vTag").textContent = p.tagline || "";
    $("vDm").href = dmLink(p);

    var many = p.media.length > 1;
    vPrev.hidden = !many;
    vNext.hidden = !many;

    vThumbs.innerHTML = "";
    if (many) {
      p.media.forEach(function (m, n) {
        var t = document.createElement("button");
        t.type = "button";
        t.setAttribute("aria-label", "View item " + (n + 1));
        if (m.type === "video") {
          t.innerHTML = '<span class="isVideo">&#9658;</span>';
        } else {
          t.innerHTML = '<img src="' + m.src + '" alt="" loading="lazy">';
        }
        t.addEventListener("click", function () { showSlide(n); });
        vThumbs.appendChild(t);
      });
    }

    showSlide(0);
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
    $("vClose").focus();
  }

  function closeViewer() {
    viewer.hidden = true;
    vMedia.innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  $("vClose").addEventListener("click", closeViewer);
  viewer.querySelector("[data-close]").addEventListener("click", closeViewer);
  vPrev.addEventListener("click", function () { showSlide(slide - 1); });
  vNext.addEventListener("click", function () { showSlide(slide + 1); });

  document.addEventListener("keydown", function (e) {
    if (viewer.hidden) return;
    if (e.key === "Escape") closeViewer();
    if (e.key === "ArrowLeft") showSlide(slide - 1);
    if (e.key === "ArrowRight") showSlide(slide + 1);
  });
})();
