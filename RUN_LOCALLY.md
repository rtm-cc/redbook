# 💻 Running The Red Book Locally (Zensical)

This site is powered by **[Zensical](https://zensical.org/)**, the next-generation successor to Material for MkDocs.

---

## 🚀 Quick Start

You can run the documentation site locally with either **Python / uv** or **npm**:

### Option A: Using `uv` (Fastest, zero install)
```bash
uv tool run zensical serve -a 127.0.0.1:4321
```

### Option B: Using `pip`
```bash
pip install zensical
zensical serve -a 127.0.0.1:4321
```

### Option C: Using `npm`
```bash
npm run dev
```

Once running, open your browser at:
👉 **[http://localhost:4321/redbook/](http://localhost:4321/redbook/)**

---

## 🔄 Looking for the Old Astro Starlight Setup?

The original Astro Starlight version is preserved on the `archive/astro` branch:

```bash
git checkout archive/astro
npm run dev
```
