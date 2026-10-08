const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Sell Your RV with Peace of Mind | Sell My RV Online</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{--bg:#F6F1EA;--bg2:#EDE5D8;--ink:#1c1915;--mut:#6b6358;--acc:#9c6a34;--card:#fffdf9;--line:rgba(28,25,21,.14);box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#14110e;--bg2:#1c1814;--ink:#f2ebe0;--mut:#a89d8e;--acc:#d09a5a;--card:#1f1b16;--line:rgba(242,235,224,.16)}}
:root[data-theme="dark"]{--bg:#14110e;--bg2:#1c1814;--ink:#f2ebe0;--mut:#a89d8e;--acc:#d09a5a;--card:#1f1b16;--line:rgba(242,235,224,.16)}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:calc(env(safe-area-inset-top,0px) + 80px)}
body{margin:0;background:var(--bg);color:var(--ink);font:400 17px/1.6 Inter,system-ui,-apple-system,"Segoe UI",sans-serif;overflow-x:hidden}
h1,h2,h3{font-family:Fraunces,Georgia,"Times New Roman",serif;font-weight:400;line-height:1.05;margin:0;letter-spacing:-.02em}
em{font-style:italic;color:var(--acc)}
a{color:inherit;text-decoration:none}
.wrap{max-width:1180px;margin:0 auto;padding:0 24px}
.eyebrow{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--acc);font-weight:600}
.btn{display:inline-flex;align-items:center;gap:8px;padding:15px 26px;border-radius:99px;font-weight:600;font-size:15px;border:1px solid var(--ink);background:var(--ink);color:var(--bg);cursor:pointer;position:relative;overflow:hidden;transition:transform .25s,box-shadow .25s;font-family:inherit}
.btn::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);transform:translateX(-120%);transition:transform .7s}
.btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.2)}.btn:hover::after{transform:translateX(120%)}
.btn.ghost{background:transparent;color:var(--ink)}
nav{position:sticky;top:env(safe-area-inset-top,0px);z-index:20;transition:background .3s,box-shadow .3s}
nav.s{background:color-mix(in srgb,var(--bg) 85%,transparent);backdrop-filter:blur(14px);box-shadow:0 1px 0 var(--line)}
nav .wrap{display:flex;align-items:center;justify-content:space-between;height:72px;gap:16px}
.logo{font-family:Fraunces,Georgia,serif;font-size:20px;font-weight:600}.logo em{font-weight:400}
nav ul{display:flex;gap:28px;list-style:none;margin:0;padding:0;font-size:14px;font-weight:500}
nav ul a{position:relative;padding:4px 0}
nav ul a::after{content:"";position:absolute;left:0;bottom:0;height:1px;width:100%;background:var(--acc);transform:scaleX(0);transform-origin:left;transition:transform .3s}
nav ul a:hover::after{transform:scaleX(1)}
nav .btn{padding:10px 18px;font-size:14px}
.hero{padding:48px 0 80px}
.hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center}
h1{font-size:clamp(42px,6vw,76px);margin:18px 0 22px}
.lead{color:var(--mut);max-width:520px;font-size:18px}
.cta{display:flex;flex-wrap:wrap;gap:12px;margin:30px 0 40px}
.stats{display:flex;gap:36px;flex-wrap:wrap;border-top:1px solid var(--line);padding-top:24px}
.stats b{display:block;font:400 40px/1 Fraunces,Georgia,serif}.stats span{font-size:13px;color:var(--mut)}
.scene{margin-top:36px;color:var(--ink)}
.scene svg{width:100%;height:auto;display:block;overflow:visible}
.coach{animation:bob 1.6s ease-in-out infinite}
.wh{transform-box:fill-box;transform-origin:center;animation:spin 1s linear infinite}
.road{stroke-dasharray:30 24;animation:road 1s linear infinite}
@keyframes bob{50%{transform:translateY(-2px)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes road{to{stroke-dashoffset:-54}}
.card{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:32px;box-shadow:0 30px 60px -30px rgba(60,40,10,.35)}
.card h2{font-size:30px;margin:6px 0 6px}.card p{color:var(--mut);font-size:14px;margin:0 0 20px}
.dots{display:flex;gap:6px;margin-bottom:18px}.dots i{height:4px;flex:1;border-radius:4px;background:var(--line);transition:background .4s}.dots i.on{background:var(--acc)}
.step{display:none;animation:slide .5s cubic-bezier(.2,.7,.2,1)}.step.on{display:block}
@keyframes slide{from{opacity:0;transform:translateX(24px)}}
.g{display:grid;grid-template-columns:1fr 1fr;gap:12px}
label{display:block;font-size:12px;font-weight:600;color:var(--mut);margin-bottom:12px}
input,textarea{width:100%;margin-top:5px;padding:13px 14px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font:inherit;font-size:15px;transition:border-color .2s,box-shadow .2s}
input:focus,textarea:focus{outline:none;border-color:var(--acc);box-shadow:0 0 0 3px color-mix(in srgb,var(--acc) 22%,transparent)}
.row{display:flex;gap:10px;margin-top:6px}.row .btn{flex:1;justify-content:center}
.done{text-align:center;padding:30px 0;display:none}.done.on{display:block;animation:slide .6s}
.done svg{width:64px;height:64px;stroke:var(--acc);fill:none;stroke-width:3;stroke-dasharray:60;animation:draw 1s .2s both}
@keyframes draw{from{stroke-dashoffset:60}}
.marq{border-block:1px solid var(--line);background:var(--bg2);overflow:hidden;padding:18px 0}
.track{display:flex;width:max-content;animation:m 32s linear infinite}
.track span{font:italic 400 24px Fraunces,Georgia,serif;padding:0 30px;white-space:nowrap}.track span::after{content:"✦";color:var(--acc);margin-left:60px;font-style:normal;font-size:14px}
@keyframes m{to{transform:translateX(-50%)}}
section{padding:110px 0}
.head{max-width:680px;margin-bottom:54px}.head h2{font-size:clamp(34px,4.6vw,56px);margin:14px 0 14px}.head p{color:var(--mut)}
.cmp{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.c{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:30px;transition:transform .4s,box-shadow .4s}
.c:hover{transform:translateY(-6px);box-shadow:0 24px 44px -24px rgba(60,40,10,.35)}
.c small{font-family:Fraunces,Georgia,serif;color:var(--acc);font-size:15px}
.c h3{font-size:26px;margin:8px 0 16px}
.c p{margin:6px 0;font-size:15px}.c .old{color:var(--mut);text-decoration:line-through}.c b{font-size:11px;letter-spacing:.14em;text-transform:uppercase;display:block;color:var(--mut)}
.how{background:var(--bg2)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;position:relative}
.steps::before{content:"";position:absolute;top:34px;left:8%;right:8%;height:1px;background:var(--acc);transform:scaleX(0);transform-origin:left;transition:transform 1.6s .3s cubic-bezier(.2,.7,.2,1)}
.steps.in::before{transform:scaleX(1)}
.n{width:68px;height:68px;border-radius:50%;background:var(--bg);border:1px solid var(--acc);display:grid;place-items:center;font:400 28px Fraunces,Georgia,serif;margin-bottom:22px;position:relative;z-index:1}
.steps h3{font-size:26px;margin-bottom:8px}.steps p{color:var(--mut);margin:0}
.band{background:var(--ink);color:var(--bg);text-align:center;border-radius:32px;padding:80px 24px;position:relative;overflow:hidden}
.band::before{content:"";position:absolute;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,var(--acc),transparent 65%);opacity:.35;left:50%;top:-260px;transform:translateX(-50%);animation:pulse 6s ease-in-out infinite}
@keyframes pulse{50%{transform:translateX(-50%) scale(1.25);opacity:.2}}
.band h2{font-size:clamp(34px,5vw,60px);position:relative}.band em{color:var(--acc)}
.band .btn{background:var(--bg);color:var(--ink);border-color:var(--bg);margin-top:30px;font-size:20px;padding:18px 34px;position:relative}
footer{padding:50px 0 40px;font-size:14px;color:var(--mut)}
footer .wrap{display:flex;flex-wrap:wrap;gap:20px;justify-content:space-between}
footer a:hover{color:var(--acc)}
.js .r{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.2,.7,.2,1) var(--d,0s),transform .9s cubic-bezier(.2,.7,.2,1) var(--d,0s)}
.js .r.in{opacity:1;transform:none}
@media (max-width:900px){.hero .wrap,.cmp,.steps{grid-template-columns:1fr}nav ul{display:none}.steps::before{display:none}section{padding:80px 0}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}.js .r{opacity:1;transform:none}}
</style>
</head>
<body>
<nav id="nav"><div class="wrap">
  <a class="logo" href="#top">Sell My <em>RV</em> Online</a>
  <ul><li><a href="#top">Sell Your RV</a></li><li><a href="#how">How It Works</a></li><li><a href="https://www.sellmyrvonline.com/faq/">FAQs</a></li><li><a href="#contact">Contact Us</a></li></ul>
  <a class="btn" href="tel:8008631848">800-863-1848</a>
</div></nav>

<header class="hero" id="top"><div class="wrap">
  <div>
    <span class="eyebrow r">Free nationwide pickup</span>
    <h1 class="r" style="--d:.1s">Sell us your RV <em>with peace of mind.</em></h1>
    <p class="lead r" style="--d:.2s">A hassle-free, quick sale for your coach. 30+ years of experience and network in the RV business means more cash to you.</p>
    <div class="cta r" style="--d:.3s"><a class="btn" href="#offer">Get your cash offer →</a><a class="btn ghost" href="#how">How it works</a></div>
    <div class="stats r" style="--d:.4s">
      <div><b><span data-to="30">0</span>+</b><span>Years in the RV business</span></div>
      <div><b>$0</b><span>Nationwide pickup</span></div>
      <div><b>1</b><span>Real person, no call centers</span></div>
    </div>
    <div class="scene" aria-hidden="true">
      <svg viewBox="0 0 640 230"><g class="coach">
        <rect x="40" y="56" width="500" height="112" rx="28" fill="currentColor"/>
        <path d="M540 86q64 8 74 62v20h-74z" fill="currentColor"/>
        <g fill="var(--bg)" opacity=".9"><rect x="76" y="80" width="64" height="38" rx="8"/><rect x="156" y="80" width="64" height="38" rx="8"/><rect x="236" y="80" width="64" height="38" rx="8"/><rect x="316" y="80" width="64" height="38" rx="8"/><rect x="396" y="80" width="64" height="38" rx="8"/><path d="M552 98q42 6 50 30h-50z"/></g>
        <rect x="40" y="136" width="560" height="8" fill="var(--acc)"/>
        <g><circle cx="150" cy="172" r="28" fill="currentColor" stroke="var(--bg)" stroke-width="4"/><g class="wh"><circle cx="150" cy="172" r="12" fill="var(--acc)"/><rect x="148" y="162" width="4" height="20" fill="var(--bg)"/></g>
        <circle cx="470" cy="172" r="28" fill="currentColor" stroke="var(--bg)" stroke-width="4"/><g class="wh"><circle cx="470" cy="172" r="12" fill="var(--acc)"/><rect x="468" y="162" width="4" height="20" fill="var(--bg)"/></g></g>
      </g><line class="road" x1="0" y1="208" x2="640" y2="208" stroke="var(--mut)" stroke-width="3"/></svg>
    </div>
  </div>

  <div class="card r" id="offer" style="--d:.25s">
    <span class="eyebrow">Get your cash offer now</span>
    <h2>Tell us about <em>your RV</em></h2>
    <p>One of our staff members will contact you. Prefer to talk? <a href="tel:8008631848"><b>800-863-1848</b></a></p>
    <div class="dots"><i class="on"></i><i></i></div>
    <form id="f" novalidate>
      <div class="step on" data-s="0">
        <div class="g"><label>Year*<input name="year" inputmode="numeric" required></label><label>Make*<input name="make" required></label></div>
        <div class="g"><label>Model*<input name="model" required></label><label>Mileage<input name="mi" inputmode="numeric"></label></div>
        <label>Comments / Questions<textarea name="c" rows="2"></textarea></label>
        <label>Upload photo<input name="photo" type="file" accept="image/*"></label>
        <div aria-hidden="true" style="position:absolute;left:-9999px"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
        <div class="row"><button type="button" class="btn" data-next>Next →</button></div>
      </div>
      <div class="step" data-s="1">
        <div class="g"><label>Name*<input name="name" autocomplete="name" required></label><label>Phone*<input name="tel" type="tel" autocomplete="tel" required></label></div>
        <div class="g"><label>Email*<input name="email" type="email" autocomplete="email" required></label><label>ZIP / Postal code*<input name="zip" autocomplete="postal-code" required></label></div>
        <p id="err" role="alert" style="color:#c0392b;display:none;margin:0 0 10px"></p>
        <div class="row"><button type="button" class="btn ghost" data-prev>← Back</button><button class="btn" type="submit" id="sub">Submit</button></div>
      </div>
    </form>
    <div class="done" id="done"><svg viewBox="0 0 64 64"><path d="M14 34l12 12 24-26"/></svg><h2>Thank <em>you.</em></h2><p>A real person will contact you shortly.</p></div>
  </div>
</div></header>

<div class="marq" aria-hidden="true"><div class="track" id="tr"><span>Free nationwide pickup</span><span>We handle all paperwork</span><span>Bank payoffs included</span><span>A real person from the start</span><span>30+ years in the RV business</span></div></div>

<section id="why"><div class="wrap">
  <div class="head r"><span class="eyebrow">Nº 01 · Why sell with us</span><h2>A different kind <em>of buyer.</em></h2><p>Selling a coach shouldn't be a second job. Here is what changes when you sell to us.</p></div>
  <div class="cmp">
    <div class="c r"><small>01</small><h3>Paperwork, <em>handled.</em></h3><b>The usual way</b><p class="old">Title, lien and lender calls on you.</p><b>With us</b><p>We handle all paperwork, including bank payoffs.</p></div>
    <div class="c r" style="--d:.1s"><small>02</small><h3>Pickup, <em>on us.</em></h3><b>The usual way</b><p class="old">Arrange and pay for your own transport.</p><b>With us</b><p>Fast, free nationwide pickup.</p></div>
    <div class="c r" style="--d:.2s"><small>03</small><h3>A real <em>person.</em></h3><b>The usual way</b><p class="old">Call centers and endless hold music.</p><b>With us</b><p>Easy communication with a real person from the start.</p></div>
    <div class="c r" style="--d:.3s"><small>04</small><h3>More cash <em>to you.</em></h3><b>The usual way</b><p class="old">A lowball from someone who doesn't know coaches.</p><b>With us</b><p>30+ years of experience and network in the RV business.</p></div>
  </div>
</div></section>

<section class="how" id="how"><div class="wrap">
  <div class="head r"><span class="eyebrow">Nº 02 · How it works</span><h2>Three steps. <em>No stress.</em></h2></div>
  <div class="steps r" id="st">
    <div><div class="n">1</div><h3>Tell us about it</h3><p>Year, make, model and mileage, plus a photo if you have one. Use the form or call us.</p></div>
    <div><div class="n">2</div><h3>Get your offer</h3><p>A real person reaches out with a cash offer backed by 30+ years in the business.</p></div>
    <div><div class="n">3</div><h3>We take it from here</h3><p>We handle the paperwork and bank payoff, then pick up your coach for free.</p></div>
  </div>
</div></section>

<section id="contact"><div class="wrap"><div class="band r">
  <span class="eyebrow">Ready when you are</span>
  <h2 style="margin-top:14px">Let's talk about <em>your coach.</em></h2>
  <a class="btn" href="tel:8008631848">Call 800-863-1848</a>
</div></div></section>

<footer><div class="wrap">
  <span>© 2026 Southwest Luxury Coach. All rights reserved.</span>
  <span><a href="https://www.sellmyrvonline.com/about-us/">About Us</a> · <a href="https://www.sellmyrvonline.com/faq/">FAQs</a> · <a href="https://www.sellmyrvonline.com/privacy-policy/">Privacy Policy</a> · <a href="https://www.sellmyrvonline.com/sitemap/">Sitemap</a></span>
</div></footer>

<script>
document.documentElement.classList.add('js');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);var c=e.target.querySelector('[data-to]');if(c)count(c)}})},{threshold:.15});
document.querySelectorAll('.r').forEach(function(el){io.observe(el)});
function count(el){var t=+el.dataset.to,s=null;(function f(ts){s=s||ts;var p=Math.min((ts-s)/1400,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(performance.now())}
var tr=document.getElementById('tr');tr.innerHTML+=tr.innerHTML;
var nav=document.getElementById('nav');addEventListener('scroll',function(){nav.classList.toggle('s',scrollY>10)},{passive:true});
var f=document.getElementById('f'),st=f.querySelectorAll('.step'),dots=document.querySelectorAll('.dots i');
function go(n){st.forEach(function(s,i){s.classList.toggle('on',i==n)});dots.forEach(function(d,i){d.classList.toggle('on',i<=n)})}
function ok(s){var good=true;s.querySelectorAll('[required]').forEach(function(i){var v=i.value.trim()&&i.checkValidity();i.style.borderColor=v?'':'#c0392b';if(!v)good=false});return good}
f.querySelector('[data-next]').onclick=function(){if(ok(st[0]))go(1)};
f.querySelector('[data-prev]').onclick=function(){go(0)};
f.onsubmit=function(e){e.preventDefault();if(!ok(st[1]))return;var b=document.getElementById('sub'),er=document.getElementById('err');b.disabled=true;er.style.display='none';
fetch('/api/lead',{method:'POST',body:new FormData(f)}).then(function(r){return r.json().catch(function(){return{}}).then(function(j){if(!r.ok)throw new Error(j.error||'Something went wrong');})}).then(function(){f.style.display='none';document.querySelector('.dots').style.display='none';document.getElementById('done').classList.add('on')}).catch(function(x){b.disabled=false;er.textContent=x.message+'. Please try again or call 800-863-1848.';er.style.display='block'})};
</script>
</body>
</html>
`;

const MAX_PHOTO = 8 * 1024 * 1024;
const STATUSES = ['new', 'contacted', 'offer', 'closed'];

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

const clean = (v, max) => String(v ?? '').trim().slice(0, max);

async function authorized(request, env) {
  if (!env.API_TOKEN) return false;
  const given = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(given)),
    crypto.subtle.digest('SHA-256', enc.encode(env.API_TOKEN)),
  ]);
  const x = new Uint8Array(a), y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

async function createLead(request, env, ctx) {
  let form;
  try { form = await request.formData(); } catch { return json({ error: 'Invalid form data' }, 400); }

  // Honeypot: bots fill the hidden field; pretend success.
  if (clean(form.get('website'), 100)) return json({ ok: true });

  const lead = {
    year: clean(form.get('year'), 10),
    make: clean(form.get('make'), 60),
    model: clean(form.get('model'), 80),
    mileage: clean(form.get('mi'), 20),
    comments: clean(form.get('c'), 2000),
    name: clean(form.get('name'), 100),
    phone: clean(form.get('tel'), 30),
    email: clean(form.get('email'), 120),
    zip: clean(form.get('zip'), 12),
  };
  const missing = ['year', 'make', 'model', 'name', 'phone', 'email', 'zip'].filter((k) => !lead[k]);
  if (missing.length) return json({ error: 'Missing required fields' }, 400);
  if (!/^\S+@\S+\.\S+$/.test(lead.email)) return json({ error: 'Invalid email' }, 400);

  const id = crypto.randomUUID();
  let photoKeys = [];
  const photo = form.get('photo');
  if (photo && typeof photo === 'object' && photo.size > 0) {
    if (!photo.type.startsWith('image/')) return json({ error: 'Photo must be an image' }, 400);
    if (photo.size > MAX_PHOTO) return json({ error: 'Photo is too large (max 8 MB)' }, 400);
    const key = `leads/${id}/photo-1`;
    await env.PHOTOS.put(key, photo.stream(), { httpMetadata: { contentType: photo.type } });
    photoKeys = [key];
  }

  const createdAt = new Date().toISOString();
  await env.DB.prepare(
    `INSERT INTO leads (id, created_at, status, year, make, model, mileage, comments, name, phone, email, zip, photo_keys)
     VALUES (?, ?, 'new', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(id, createdAt, lead.year, lead.make, lead.model, lead.mileage, lead.comments,
         lead.name, lead.phone, lead.email, lead.zip, JSON.stringify(photoKeys)).run();

  // Optional push to another service (e.g. the other Cloudflare site). The lead is already saved.
  if (env.WEBHOOK_URL) {
    const payload = { id, created_at: createdAt, status: 'new', ...lead, photo_keys: photoKeys };
    ctx.waitUntil(
      fetch(env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json', authorization: `Bearer ${env.WEBHOOK_SECRET || ''}` },
        body: JSON.stringify(payload),
      }).catch(() => {})
    );
  }
  return json({ ok: true, id }, 201);
}

async function listLeads(url, env) {
  const status = url.searchParams.get('status');
  const before = url.searchParams.get('before');
  const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') || '50', 10) || 50, 1), 200);
  const where = [], args = [];
  if (status && STATUSES.includes(status)) { where.push('status = ?'); args.push(status); }
  if (before) { where.push('created_at < ?'); args.push(before); }
  const sql = `SELECT * FROM leads ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY created_at DESC LIMIT ?`;
  const { results } = await env.DB.prepare(sql).bind(...args, limit).all();
  return json({ leads: results.map((r) => ({ ...r, photo_keys: JSON.parse(r.photo_keys || '[]') })) });
}

async function api(request, env, ctx, url) {
  const { pathname } = url;
  if (pathname === '/api/lead' && request.method === 'POST') return createLead(request, env, ctx);

  if (!(await authorized(request, env))) return json({ error: 'Unauthorized' }, 401);

  if (pathname === '/api/leads' && request.method === 'GET') return listLeads(url, env);

  const lead = pathname.match(/^\/api\/leads\/([\w-]+)$/);
  if (lead && request.method === 'GET') {
    const r = await env.DB.prepare('SELECT * FROM leads WHERE id = ?').bind(lead[1]).first();
    return r ? json({ ...r, photo_keys: JSON.parse(r.photo_keys || '[]') }) : json({ error: 'Not found' }, 404);
  }
  if (lead && request.method === 'PATCH') {
    const body = await request.json().catch(() => ({}));
    if (!STATUSES.includes(body.status)) return json({ error: 'Invalid status' }, 400);
    const r = await env.DB.prepare('UPDATE leads SET status = ? WHERE id = ?').bind(body.status, lead[1]).run();
    return r.meta.changes ? json({ ok: true }) : json({ error: 'Not found' }, 404);
  }

  const photo = pathname.match(/^\/api\/photos\/(leads\/[\w-]+\/photo-\d+)$/);
  if (photo && request.method === 'GET') {
    const obj = await env.PHOTOS.get(photo[1]);
    if (!obj) return json({ error: 'Not found' }, 404);
    return new Response(obj.body, { headers: { 'content-type': obj.httpMetadata?.contentType || 'application/octet-stream' } });
  }
  return json({ error: 'Not found' }, 404);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      try { return await api(request, env, ctx, url); }
      catch (e) { console.error(e); return json({ error: 'Server error' }, 500); }
    }
    return new Response(html, { headers: { 'content-type': 'text/html;charset=UTF-8' } });
  },
};
