const size = {
  phone: "37.5em", // 600px mobile
  tab_port: "56.25em", // 900px tablet portrait
  tab_land: "75em", //1200px tablet landscape
  big_desktop: "112.5em", //1800px big desktop
};
export const device = {
  phone: `(max-width: ${size.phone})`,
  tab_port: `(max-width: ${size.tab_port})`,
  tab_land: `(max-width: ${size.tab_land})`,
  big_desktop: `(min-width: ${size.big_desktop})`,
};
export const rem = (size, base = 16) => `
 ${size}px; // older browsers fallback
  calc(${size / base} * 1rem);
  `;
