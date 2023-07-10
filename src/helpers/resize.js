export function resize() {
  if (window.innerWidth < 768) {
    return 1;
  }

  if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    return 2;
  }

  if (window.innerWidth >= 1440) {
    return 4;
  }
}