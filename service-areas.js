// service-areas.js — Quick Haulers | Single source of truth for all service area links
// To add or update an area: edit this file only. All pages update automatically.

const SERVICE_AREAS = [
  { name: "Riverhead",        url: "riverhead-ny.html" },
  { name: "Southampton",      url: "southampton-ny.html" },
  { name: "Hampton Bays",     url: "hampton-bays-ny.html" },
  { name: "Wading River",     url: "wading-river-ny.html" },
  { name: "Southold",         url: "southold-ny.html" },
  { name: "Greenport",        url: "greenport-ny.html" },
  { name: "Sag Harbor",       url: "sag-harbor-ny.html" },
  { name: "Bridgehampton",    url: "bridgehampton-ny.html" },
  { name: "East Hampton",     url: "east-hampton-ny.html" },
  { name: "Westhampton Beach",url: "westhampton-beach-ny.html" },
  { name: "Jamesport",        url: "jamesport-ny.html" },
  { name: "Aquebogue",        url: "aquebogue-ny.html" },
  { name: "Cutchogue",        url: "cutchogue-ny.html" },
  { name: "Mattituck",        url: "mattituck-ny.html" },
  { name: "East Marion",      url: "east-marion-ny.html" },
  { name: "Shelter Island",   url: "shelter-island-ny.html" },
  { name: "Calverton",        url: "calverton-ny.html" },
  { name: "Manorville",       url: "manorville-ny.html" },
  { name: "East Moriches",    url: "east-moriches-ny.html" },
  { name: "Quogue",           url: "quogue-ny.html" },
  { name: "Wainscott",        url: "wainscott-ny.html" },
  { name: "Sagaponack",       url: "sagaponack-ny.html" },
  { name: "Speonk",           url: "speonk-ny.html" },
  { name: "Eastport",         url: "eastport-ny.html" },
  { name: "Remsenburg",       url: "remsenburg-ny.html" },
  { name: "Peconic",          url: "peconic-ny.html" },
  { name: "Laurel",           url: "laurel-ny.html" },
  { name: "New Suffolk",      url: "new-suffolk-ny.html" },
  { name: "🗺 All Areas",     url: "map.html", isMapLink: true }
];

/**
 * renderAreaTags(containerId, currentAreaName)
 * Injects area tag links into the element with the given ID.
 * Pass the current page's area name to highlight it as active.
 *
 * Usage on every service area page:
 *   <div id="area-tags-container"></div>
 *   <script>renderAreaTags('area-tags-container', 'Riverhead');</script>
 *
 * Usage on index/blog (no active tag):
 *   <div id="area-tags-container"></div>
 *   <script>renderAreaTags('area-tags-container');</script>
 */
function renderAreaTags(containerId, currentAreaName) {
  var container = document.getElementById(containerId);
  if (!container) return;

  SERVICE_AREAS.forEach(function(area) {
    var el = document.createElement('a');
    var isActive = currentAreaName && area.name === currentAreaName;
    var isMap    = area.isMapLink;

    el.href      = area.url || '#';
    el.className = 'area-tag'
                 + (isActive ? ' active' : '')
                 + (isMap    ? ' area-tag--map' : '');
    el.textContent = area.name;
    container.appendChild(el);
  });
}