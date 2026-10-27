import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');
const ssrEntryPath = path.resolve(rootDir, 'dist-ssr', 'entry-server.js');

const staticRoutes = [
  '/',
  '/business',
  '/growth',
  '/skills-esp',
  '/career',
  '/services',
  '/about',
  '/about/lokesh-verma',
  '/about/ajay-verma',
  '/about/surendra-nagar',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/disclaimer',
  // Dedicated Service Pages
  '/gst-registration',
  '/itr-filing',
  '/msme-registration',
  '/fssai-license',
  '/trademark-registration',
  '/company-registration',
  '/gst-filing',
  '/llp-registration',
  '/partnership-firm',
  '/compliance-filing',
  '/licenses-certificates',
  '/project-reports',
  '/business-expansion',
  '/financial-guidance',
  '/market-support',
];

async function prerender() {
  console.log('🚀 Starting Pre-rendering for Madhav Consultancy SEO...');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build template not found at: ${templatePath}. Run vite build first.`);
  }

  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error(`SSR bundle not found at: ${ssrEntryPath}. Run vite build --ssr first.`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  // Use file:// protocol for Windows ES module import
  const ssrModule = await import(`file://${ssrEntryPath.replace(/\\/g, '/')}`);
  const { render } = ssrModule;

  let count = 0;

  for (const route of staticRoutes) {
    const helmetContext = {};
    let appHtml = '';

    try {
      appHtml = render(route, helmetContext);
    } catch (err) {
      console.error(`❌ Error rendering route "${route}":`, err);
      continue;
    }

    const { helmet } = helmetContext;

    // Collect all helmet head tags
    let headTags = '';
    if (helmet) {
      headTags = [
        helmet.title ? helmet.title.toString() : '',
        helmet.meta ? helmet.meta.toString() : '',
        helmet.link ? helmet.link.toString() : '',
        helmet.script ? helmet.script.toString() : '',
      ]
        .filter(Boolean)
        .join('\n    ');
    }

    // Inject appHtml into <div id="root">
    let pageHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // If headTags exist, inject them right before </head>
    if (headTags) {
      pageHtml = pageHtml.replace('</head>', `    ${headTags}\n  </head>`);
    }

    // Determine output file path
    const routePath = route === '/' ? '' : route;
    const destDir = path.join(distDir, routePath);
    const destFile = path.join(destDir, 'index.html');

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    fs.writeFileSync(destFile, pageHtml, 'utf-8');
    count++;
    console.log(`  ✓ Pre-rendered: ${route} -> ${path.relative(rootDir, destFile)}`);
  }

  console.log(`\n🎉 Successfully pre-rendered ${count} routes into static HTML!`);

  // Clean up dist-ssr temporary folder
  const ssrDir = path.resolve(rootDir, 'dist-ssr');
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
    console.log('🧹 Cleaned up temporary SSR bundle (dist-ssr).');
  }
}

prerender().catch((err) => {
  console.error('Fatal Pre-rendering Error:', err);
  process.exit(1);
});
