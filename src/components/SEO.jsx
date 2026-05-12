import { Helmet } from 'react-helmet-async'

const DEFAULT = {
  title:       'AI4Marketers — AI Workshop for Marketing Teams | Sai Ganesh',
  description: 'A 1-day hands-on AI workshop for marketing teams. Learn 25+ AI tools, build real outputs, and stay ahead. Trusted by Zomato, AB InBev, TVS Motors & IIM Indore.',
  url:         'https://ai4marketers.co.in/',
  image:       'https://ai4marketers.co.in/assets/og-image.png',
}

export default function SEO({ title, description, url, image, schema }) {
  const t = title       || DEFAULT.title
  const d = description || DEFAULT.description
  const u = url         || DEFAULT.url
  const i = image       || DEFAULT.image

  return (
    <Helmet>
      {/* ── Primary ───────────────────────────────────── */}
      <title>{t}</title>
      <meta name="description"        content={d} />
      <link rel="canonical"           href={u} />

      {/* ── Open Graph ────────────────────────────────── */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={u} />
      <meta property="og:title"       content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:image"       content={i} />
      <meta property="og:locale"      content="en_IN" />
      <meta property="og:site_name"   content="AI4Marketers" />

      {/* ── Twitter ───────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:url"         content={u} />
      <meta name="twitter:title"       content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image"       content={i} />
      <meta name="twitter:creator"     content="@sai_ganesh" />

      {/* ── Schema.org ────────────────────────────────── */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}