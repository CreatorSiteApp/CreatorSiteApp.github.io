const OWNER = '1nfu';
const APP_REPO = 'islandos-app';
const releaseUrl = `https://github.com/${OWNER}/${APP_REPO}/releases/latest/download/IslandOS.exe`;
const repoUrl = `https://github.com/${OWNER}/${APP_REPO}`;

document.querySelectorAll('[data-download]').forEach((link) => { link.href = releaseUrl; });
document.querySelectorAll('a[href*="github.com/1nfu/islandos-app"]').forEach((link) => { link.href = repoUrl; });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
}, { threshold: .14 });
document.querySelectorAll('.feature-card,.step,.signal-band,.final-cta').forEach((item) => observer.observe(item));

document.querySelectorAll('.step').forEach((step) => {
  step.addEventListener('mouseenter', () => {
    document.querySelectorAll('.step').forEach((item) => item.classList.remove('active'));
    step.classList.add('active');
  });
});

