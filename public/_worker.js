const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="theme-color" content="#14110e">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Sell Your RV with Peace of Mind | Sell My RV Online</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{--bg:#F6F1EA;--bg2:#EDE5D8;--ink:#1c1915;--mut:#6b6358;--acc:#9c6a34;--card:#fffdf9;--line:rgba(28,25,21,.14);--hero:#14110e;--heroink:#f2ebe0;--herom:#a89d8e;--heroacc:#d09a5a;--heroline:rgba(242,235,224,.16);box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
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
.btn{display:inline-flex;align-items:center;gap:8px;padding:15px 26px;border-radius:99px;font-weight:600;font-size:15px;border:1px solid var(--ink);background:var(--ink);color:var(--bg);cursor:pointer;transition:transform .25s,background .25s,color .25s,border-color .25s;font-family:inherit}
.btn:hover{transform:translateY(-2px)}
.btn:disabled{opacity:.6;cursor:wait;transform:none}
.btn.ghost{background:transparent;color:var(--ink)}
nav{position:fixed;top:14px;left:50%;z-index:50;width:min(calc(100% - 2rem),1180px);transform:translateX(-50%);display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:.45rem .45rem .45rem 1rem;border-radius:999px;background:rgba(246,241,234,.88);-webkit-backdrop-filter:blur(22px) saturate(1.3);backdrop-filter:blur(22px) saturate(1.3);box-shadow:inset 0 0 0 1px rgba(255,255,255,.55),inset 0 1px 0 rgba(255,255,255,.8),0 10px 40px -18px rgba(40,22,6,.45);transition:background .4s}
nav.s{background:rgba(246,241,234,.95)}
.nlogo{display:flex;align-items:center;flex-shrink:0}
.nlogo img{display:block;height:40px;width:auto}
.nlinks{display:flex;align-items:center;gap:.15rem;list-style:none;margin:0;padding:0}
.nlinks a{display:block;font-size:.8rem;font-weight:500;color:#6C5847;padding:.55rem .95rem;border-radius:999px;transition:color .3s,background .3s}
.nlinks a:hover{color:#1B120A}
.nlinks a.on{color:#1B120A;background:rgba(107,70,30,.09)}
.nright{display:flex;align-items:center;gap:.9rem}
.nphone{font-size:.8rem;font-weight:500;color:#6C5847;transition:color .2s}
.nphone:hover{color:#1B120A}
.nbtn{display:inline-flex;align-items:center;gap:.7rem;padding:.35rem .35rem .35rem 1.15rem;border-radius:999px;background:#95600F;color:#FFF8EC;font:500 .76rem Inter,system-ui,sans-serif;letter-spacing:.02em;white-space:nowrap;box-shadow:0 1px 2px rgba(80,48,12,.06),0 4px 14px -6px rgba(80,48,12,.1);transition:background .4s,box-shadow .4s}
.nbtn:hover{background:#7C4F0B;box-shadow:0 2px 4px rgba(80,48,12,.04),0 14px 30px -14px rgba(80,48,12,.3)}
.nbtn i{width:1.95rem;height:1.95rem;border-radius:50%;display:grid;place-items:center;background:rgba(255,248,236,.16);transition:transform .5s cubic-bezier(.32,.72,0,1)}
.nbtn:hover i{transform:translate(3px,-1px) scale(1.06)}
.nbtn svg{width:14px;height:14px}
.hb{display:none;position:relative;width:46px;height:46px;border-radius:50%;background:#1B120A;border:0;cursor:pointer;flex-shrink:0}
.hb span{position:absolute;left:50%;top:50%;width:18px;height:1.5px;background:#F6F1EA;border-radius:2px;transition:transform .5s cubic-bezier(.32,.72,0,1)}
.hb span:nth-child(1){transform:translate(-50%,-4px)}
.hb span:nth-child(2){transform:translate(-50%,4px)}
.hb.open span:nth-child(1){transform:translate(-50%,0) rotate(45deg)}
.hb.open span:nth-child(2){transform:translate(-50%,0) rotate(-45deg)}
#mm{position:fixed;inset:0;z-index:40;display:flex;flex-direction:column;gap:1.1rem;padding:7rem 1.5rem calc(2rem + env(safe-area-inset-bottom,0px));overflow-y:auto;overscroll-behavior:contain;background:#F6F3EE;color:#1B120A;opacity:0;visibility:hidden;transition:opacity .5s cubic-bezier(.32,.72,0,1),visibility 0s linear .5s}
#mm.open{opacity:1;visibility:visible;transition:opacity .5s cubic-bezier(.32,.72,0,1),visibility 0s}
.mlinks{list-style:none;margin:0;padding:0}
.mlinks a{display:flex;align-items:baseline;gap:1rem;padding:1.05rem 0;border-bottom:1px solid rgba(100,62,18,.14);font:400 2rem/1.1 Fraunces,Georgia,serif;letter-spacing:-.02em}
.mlinks small{font:500 .7rem Inter,system-ui,sans-serif;color:#95600F;letter-spacing:.12em;min-width:1.6rem}
.mdock{margin-top:auto;display:grid;gap:.6rem;padding:.95rem;border-radius:24px;background:linear-gradient(150deg,#2A1C10,#140D07);color:#F4EBDD;box-shadow:0 24px 40px -26px rgba(40,22,8,.85),inset 0 1px 0 rgba(255,236,205,.1)}
.mdock a{display:flex;align-items:center;justify-content:space-between;gap:.8rem;padding:.9rem 1.1rem;border-radius:16px;font-weight:600;font-size:.95rem}
.mdock .mcta{background:#D09A5A;color:#14110e}
.mdock .mcall{background:rgba(244,235,221,.08);color:#F4EBDD}
.mdock .mcall small{display:block;font-weight:400;font-size:.76rem;opacity:.7}
.hero{background:var(--hero);color:var(--heroink);padding:136px 0 48px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;width:760px;height:760px;border-radius:50%;background:radial-gradient(circle,var(--heroacc),transparent 65%);opacity:.14;left:-240px;top:-300px;pointer-events:none}
.hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:72px;align-items:center;position:relative}
.hero .eyebrow,.hero em{color:var(--heroacc)}
h1{font-size:clamp(44px,6vw,80px);margin:20px 0 24px}
.lead{color:var(--herom);max-width:500px;font-size:18px}
.cta{display:flex;flex-wrap:wrap;gap:12px;margin:36px 0 52px}
.hero .cta .btn{background:var(--heroacc);border-color:var(--heroacc);color:var(--hero)}
.hero .cta .btn:hover{background:var(--heroink);border-color:var(--heroink)}
.hero .cta .btn.ghost{background:transparent;color:var(--heroink);border-color:var(--heroline)}
.hero .cta .btn.ghost:hover{border-color:var(--heroink);background:transparent}
.stats{display:flex;gap:48px;flex-wrap:wrap;border-top:1px solid var(--heroline);padding-top:28px}
.stats b{display:block;font:400 44px/1 Fraunces,Georgia,serif}.stats span{font-size:13px;color:var(--herom)}.stats b span{font-size:inherit;color:inherit}
.card{background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:24px;padding:36px;box-shadow:0 40px 80px -30px rgba(0,0,0,.6)}
.card h2{font-size:30px;margin:6px 0 6px}.card p{color:var(--mut);font-size:14px;margin:0 0 20px}
.dots{display:flex;gap:6px;margin-bottom:18px}.dots i{height:3px;flex:1;border-radius:4px;background:var(--line);transition:background .4s}.dots i.on{background:var(--acc)}
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
.showcase{margin:-1px 0 -28px;background:linear-gradient(to bottom,var(--hero) 0,var(--hero) 20%,var(--bg) 85%,var(--bg) 100%);overflow:hidden}
.showcase img{display:block;width:100%;max-width:1440px;margin:0 auto;height:clamp(300px,46vw,620px);object-fit:cover;object-position:62% 78%;-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 26%,#000 84%,transparent 100%),linear-gradient(to right,transparent 0,#000 12%,#000 88%,transparent 100%);-webkit-mask-composite:source-in;mask-image:linear-gradient(to bottom,transparent 0,#000 26%,#000 84%,transparent 100%),linear-gradient(to right,transparent 0,#000 12%,#000 88%,transparent 100%);mask-composite:intersect}
.trust{position:relative;z-index:1;border-bottom:1px solid var(--line)}
.trust .wrap{display:grid;grid-template-columns:repeat(4,1fr)}
.trust .wrap>div{padding:28px 24px;border-left:1px solid var(--line);font-size:14px;color:var(--mut)}
.trust .wrap>div:first-child{border-left:0;padding-left:0}
.trust b{display:block;font:400 20px/1.2 Fraunces,Georgia,serif;color:var(--ink);margin-bottom:4px}
.brands{padding:28px 0 26px;background:var(--bg2);border-bottom:1px solid var(--line)}
.brands .wrap{text-align:center;margin-bottom:16px}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.mq{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.brands .track{--ls:1;display:flex;align-items:center;width:max-content;animation:m 64s linear infinite}
.brands:hover .track{animation-play-state:paused}
.mlogo{display:block;flex:none;margin:0 2.4rem;width:calc(var(--w) * var(--ls));height:calc(var(--w) * var(--ls) / var(--r));background:var(--ink);opacity:.82;-webkit-mask:var(--src) center / contain no-repeat;mask:var(--src) center / contain no-repeat}
.mdot{flex:none;width:5px;height:5px;border-radius:50%;background:var(--acc)}
@keyframes m{to{transform:translateX(-50%)}}
section{padding:120px 0}
.head{max-width:680px;margin-bottom:64px}.head h2{font-size:clamp(34px,4.6vw,56px);margin:14px 0 14px}.head p{color:var(--mut)}
.cmp{display:grid;grid-template-columns:repeat(2,1fr);column-gap:72px}
.c{border-top:1px solid var(--line);padding:36px 0 52px}
.c small{font-family:Fraunces,Georgia,serif;color:var(--acc);font-size:15px}
.c h3{font-size:28px;margin:8px 0 18px}
.c p{margin:6px 0;font-size:15px}.c .old{color:var(--mut);text-decoration:line-through}.c b{font-size:11px;letter-spacing:.14em;text-transform:uppercase;display:block;color:var(--mut);margin-top:10px}
.how{border-top:1px solid var(--line)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:64px}
.steps>div{border-top:1px solid var(--acc);padding-top:24px}
.n{font:400 64px/1 Fraunces,Georgia,serif;color:var(--acc);margin-bottom:20px}
.steps h3{font-size:26px;margin-bottom:8px}.steps p{color:var(--mut);margin:0}
.band{background:var(--hero);color:var(--heroink);text-align:center;border-radius:32px;padding:96px 24px;position:relative;overflow:hidden}
.band::before{content:"";position:absolute;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,var(--heroacc),transparent 65%);opacity:.3;left:50%;top:-260px;transform:translateX(-50%)}
.band .eyebrow,.band em{color:var(--heroacc)}
.band h2{font-size:clamp(34px,5vw,60px);position:relative}
.band .btn{background:var(--heroacc);color:var(--hero);border-color:var(--heroacc);margin-top:32px;font-size:20px;padding:18px 34px;position:relative}
.band .btn:hover{background:var(--heroink);border-color:var(--heroink)}
footer{padding:50px 0 40px;font-size:14px;color:var(--mut)}
footer .wrap{display:flex;flex-wrap:wrap;gap:20px;justify-content:space-between}
footer a:hover{color:var(--acc)}
.js .r{opacity:0;transform:translateY(24px);transition:opacity .9s cubic-bezier(.2,.7,.2,1) var(--d,0s),transform .9s cubic-bezier(.2,.7,.2,1) var(--d,0s)}
.js .r.in{opacity:1;transform:none}
@media (max-width:900px){nav{padding-left:.8rem}.nlinks,.nphone,.nbtn{display:none}.hb{display:block}.nlogo img{height:34px}.brands .track{--ls:.72}.mlogo{margin:0 1.5rem}.showcase{margin-bottom:-16px}.showcase img{object-position:72% 60%}.hero .wrap,.cmp,.steps{grid-template-columns:1fr}nav ul{display:none}section{padding:80px 0}.hero{padding:112px 0 24px}.hero .wrap{gap:48px}.steps{gap:40px}.trust .wrap{grid-template-columns:1fr 1fr}.trust .wrap>div:nth-child(odd){border-left:0;padding-left:0}.trust .wrap>div:nth-child(n+3){border-top:1px solid var(--line)}}
@media (max-width:1060px){.nphone{display:none}}
@media (min-width:901px){#mm{display:none}}
@media (prefers-reduced-motion:reduce){.brands .track{width:auto;flex-wrap:wrap;justify-content:center}.brands .track>*:nth-child(n+13){display:none}.mq{-webkit-mask-image:none;mask-image:none}*,*::before,*::after{animation:none!important;transition:none!important}.js .r{opacity:1;transform:none}}
</style>
</head>
<body>
<nav id="nav" aria-label="Main navigation">
  <a class="nlogo" href="#top" aria-label="Sell My RV Online home"><img src="/logo.png" alt="Sell My RV Online" width="66" height="40"></a>
  <ul class="nlinks">
    <li><a href="#top">Sell Your RV</a></li>
    <li><a href="#how">How It Works</a></li>
    <li><a href="https://www.sellmyrvonline.com/faq/">FAQs</a></li>
    <li><a href="#contact">Contact Us</a></li>
  </ul>
  <div class="nright">
    <a class="nphone" href="tel:8008631848" aria-label="Call us at 800-863-1848">800-863-1848</a>
    <a class="nbtn" href="#offer">Get your cash offer<i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg></i></a>
    <button class="hb" id="hb" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mm"><span></span><span></span></button>
  </div>
</nav>
<div id="mm" role="dialog" aria-label="Mobile navigation" aria-modal="true" aria-hidden="true">
  <ul class="mlinks">
    <li><a href="#top"><small>01</small>Sell Your RV</a></li>
    <li><a href="#how"><small>02</small>How It Works</a></li>
    <li><a href="https://www.sellmyrvonline.com/faq/"><small>03</small>FAQs</a></li>
    <li><a href="#contact"><small>04</small>Contact Us</a></li>
  </ul>
  <div class="mdock">
    <a class="mcta" href="#offer">Get your cash offer <span aria-hidden="true">&rarr;</span></a>
    <a class="mcall" href="tel:8008631848"><span>Call us<small>800-863-1848</small></span><span aria-hidden="true">&rarr;</span></a>
  </div>
</div>

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

<figure class="showcase r"><picture><source srcset="/hero.webp" type="image/webp"><img src="/hero.jpg" width="1376" height="768" alt="A luxury motorcoach parked in the desert at sunset" decoding="async"></picture></figure>

<div class="trust"><div class="wrap">
  <div class="r"><b>Free pickup</b>Nationwide, at no cost to you</div>
  <div class="r" style="--d:.08s"><b>Paperwork handled</b>Including bank payoffs</div>
  <div class="r" style="--d:.16s"><b>A real person</b>No call centers, from the start</div>
  <div class="r" style="--d:.24s"><b>30+ years</b>In the RV business</div>
</div></div>

<section class="brands" aria-label="Brands we know best">
  <p class="sr">Brands we know best: Newell, Prevost, Newmar, Marathon Coach, Renegade RV, ShowHauler.</p>
  <div class="wrap"><span class="eyebrow">Brands we know best</span></div>
  <div class="mq" aria-hidden="true"><div class="track"><span class="mlogo" style="--src:url(/brands/newell.png);--w:188px;--r:10.24"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/prevost.svg);--w:168px;--r:11.76"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/newmar.svg);--w:108px;--r:2.5"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/marathon.svg);--w:98px;--r:2.04"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/renegade.png);--w:150px;--r:4.01"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/showhauler.png);--w:96px;--r:2.09"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/newell.png);--w:188px;--r:10.24"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/prevost.svg);--w:168px;--r:11.76"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/newmar.svg);--w:108px;--r:2.5"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/marathon.svg);--w:98px;--r:2.04"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/renegade.png);--w:150px;--r:4.01"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/showhauler.png);--w:96px;--r:2.09"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/newell.png);--w:188px;--r:10.24"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/prevost.svg);--w:168px;--r:11.76"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/newmar.svg);--w:108px;--r:2.5"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/marathon.svg);--w:98px;--r:2.04"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/renegade.png);--w:150px;--r:4.01"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/showhauler.png);--w:96px;--r:2.09"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/newell.png);--w:188px;--r:10.24"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/prevost.svg);--w:168px;--r:11.76"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/newmar.svg);--w:108px;--r:2.5"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/marathon.svg);--w:98px;--r:2.04"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/renegade.png);--w:150px;--r:4.01"></span><span class="mdot"></span><span class="mlogo" style="--src:url(/brands/showhauler.png);--w:96px;--r:2.09"></span><span class="mdot"></span></div></div>
</section>

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
var nav=document.getElementById('nav');addEventListener('scroll',function(){nav.classList.toggle('s',scrollY>10)},{passive:true});
var hb=document.getElementById('hb'),mm=document.getElementById('mm');
function setMenu(o){hb.classList.toggle('open',o);hb.setAttribute('aria-expanded',o);hb.setAttribute('aria-label',o?'Close menu':'Open menu');mm.classList.toggle('open',o);mm.setAttribute('aria-hidden',!o);document.body.style.overflow=o?'hidden':''}
hb.onclick=function(){setMenu(!hb.classList.contains('open'))};
[].forEach.call(mm.querySelectorAll('a'),function(a){a.addEventListener('click',function(){setMenu(false)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&mm.classList.contains('open')){setMenu(false);hb.focus()}});
addEventListener('resize',function(){if(innerWidth>900&&mm.classList.contains('open'))setMenu(false)});
var nl=[].slice.call(document.querySelectorAll('.nlinks a[href^="#"]'));
var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){nl.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
nl.forEach(function(l){var t=document.querySelector(l.getAttribute('href'));if(t)spy.observe(t)});
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

const adminHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Leads | Sell My RV Online</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{--bg:#F6F1EA;--bg2:#EDE5D8;--ink:#1c1915;--mut:#6b6358;--acc:#9c6a34;--card:#fffdf9;--line:rgba(28,25,21,.14);--hero:#14110e;--heroink:#f2ebe0;--heroacc:#d09a5a}
@media (prefers-color-scheme:dark){:root{--bg:#14110e;--bg2:#1c1814;--ink:#f2ebe0;--mut:#a89d8e;--acc:#d09a5a;--card:#1f1b16;--line:rgba(242,235,224,.16)}}
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:400 16px/1.5 Inter,system-ui,-apple-system,"Segoe UI",sans-serif}
h1,h2,h3{font-family:Fraunces,Georgia,serif;font-weight:400;margin:0;letter-spacing:-.02em}
em{font-style:italic;color:var(--acc)}
a{color:inherit}
.wrap{max-width:960px;margin:0 auto;padding:0 20px}
header{background:var(--hero);color:var(--heroink)}
header .wrap{display:flex;align-items:center;justify-content:space-between;height:64px;gap:12px}
.logo{font-family:Fraunces,Georgia,serif;font-size:19px;font-weight:600}.logo em{color:var(--heroacc);font-weight:400}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 18px;border-radius:99px;font:600 14px Inter,sans-serif;border:1px solid var(--ink);background:var(--ink);color:var(--bg);cursor:pointer}
.btn.ghost{background:transparent;color:inherit;border-color:var(--line)}
header .btn.ghost{color:var(--heroink);border-color:rgba(242,235,224,.3)}
.btn:disabled{opacity:.6;cursor:wait}
#login{max-width:420px;margin:12vh auto;padding:0 20px}
#login h1{font-size:38px;margin-bottom:8px}
#login p{color:var(--mut);margin:0 0 20px}
input,select{width:100%;padding:13px 14px;border-radius:12px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit;font-size:15px}
input:focus,select:focus{outline:none;border-color:var(--acc);box-shadow:0 0 0 3px color-mix(in srgb,var(--acc) 22%,transparent)}
#login .btn{width:100%;margin-top:12px;padding:14px}
.rem{display:flex;align-items:center;gap:8px;margin-top:14px;font-size:14px;color:var(--mut);cursor:pointer}
.rem input{width:auto;margin:0;accent-color:var(--acc)}
.err{color:#c0392b;font-size:14px;margin-top:10px;min-height:20px}
#app{display:none}
.bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:28px 0 18px}
.bar h2{font-size:32px}
.tabs{display:flex;flex-wrap:wrap;gap:8px}
.tab{padding:8px 16px;border-radius:99px;border:1px solid var(--line);background:transparent;color:var(--ink);font:500 14px Inter,sans-serif;cursor:pointer}
.tab.on{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.lead{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:20px 22px;margin-bottom:12px}
.top{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;align-items:flex-start}
.lead h3{font-size:24px}
.when{color:var(--mut);font-size:13px}
.rv{font-size:17px;font-weight:600;margin:10px 0 2px}
.meta{color:var(--mut);font-size:14px}
.contact{display:flex;flex-wrap:wrap;gap:8px 20px;margin-top:12px;font-size:15px}
.contact a{color:var(--acc);font-weight:600;text-decoration:none}
.contact a:hover{text-decoration:underline}
.note{margin:12px 0 0;padding:10px 12px;background:var(--bg2);border-radius:10px;font-size:14px;white-space:pre-wrap}
.actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:14px}
.actions select{width:auto;padding:9px 12px;font-size:14px}
.photo img{display:block;max-width:100%;max-height:420px;border-radius:12px;margin-top:12px}
.empty{text-align:center;color:var(--mut);padding:60px 0}
.more{text-align:center;padding:12px 0 48px}
.badge{display:inline-block;font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;padding:3px 10px;border-radius:99px;border:1px solid var(--line);color:var(--mut)}
.badge.new{background:var(--acc);border-color:var(--acc);color:#fff}
</style>
</head>
<body>
<header><div class="wrap"><span class="logo">Sell My <em>RV</em> Online</span><button class="btn ghost" id="out" style="display:none">Sign out</button></div></header>

<div id="login">
  <h1>Leads <em>admin</em></h1>
  <p>Enter your access token to view the leads. Tick the box below to stay signed in on this device.</p>
  <form id="lf"><input id="tok" type="password" placeholder="Access token" autocomplete="current-password" required>
  <label class="rem"><input type="checkbox" id="rem"> Remember me on this device</label>
  <button class="btn" type="submit" id="lb">Sign in</button>
  <div class="err" id="le" role="alert"></div></form>
</div>

<div id="app"><div class="wrap">
  <div class="bar"><h2>Leads <em id="count"></em></h2><button class="btn ghost" id="rf">Refresh</button></div>
  <div class="tabs" id="tabs"></div>
  <div style="height:16px"></div>
  <div id="list"></div>
  <div class="more"><button class="btn ghost" id="more" style="display:none">Load more</button></div>
</div></div>

<script>
var STATUSES=['new','contacted','offer','closed'];
var LABEL={all:'All','new':'New',contacted:'Contacted',offer:'Offer',closed:'Closed'};
var token='',filter='all',leads=[],lastBefore=null;
try{token=localStorage.getItem('rvtoken')||sessionStorage.getItem('rvtoken')||''}catch(e){}
var $=function(id){return document.getElementById(id)};
function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}
function api(path,opts){opts=opts||{};opts.headers=Object.assign({authorization:'Bearer '+token},opts.headers||{});return fetch(path,opts)}
function showApp(on){$('login').style.display=on?'none':'block';$('app').style.display=on?'block':'none';$('out').style.display=on?'inline-flex':'none'}
function signOut(){token='';try{sessionStorage.removeItem('rvtoken');localStorage.removeItem('rvtoken')}catch(e){}leads=[];showApp(false);$('tok').value=''}

function buildTabs(){var t=$('tabs');t.innerHTML='';['all'].concat(STATUSES).forEach(function(s){var b=el('button','tab'+(s===filter?' on':''),LABEL[s]);b.onclick=function(){filter=s;buildTabs();load(true)};t.appendChild(b)})}

function load(reset){
  if(reset){leads=[];lastBefore=null}
  var q='?limit=50';if(filter!=='all')q+='&status='+filter;if(lastBefore)q+='&before='+encodeURIComponent(lastBefore);
  return api('/api/leads'+q).then(function(r){
    if(r.status===401){signOut();$('le').textContent='Invalid token.';throw new Error('401')}
    if(!r.ok)throw new Error('Request failed');
    return r.json();
  }).then(function(j){
    leads=leads.concat(j.leads);
    lastBefore=j.leads.length?j.leads[j.leads.length-1].created_at:lastBefore;
    $('more').style.display=j.leads.length===50?'inline-flex':'none';
    render();
  });
}

function render(){
  var list=$('list');list.innerHTML='';
  $('count').textContent=leads.length?'('+leads.length+(leads.length%50===0?'+':'')+')':'';
  if(!leads.length){list.appendChild(el('div','empty','No leads here yet.'));return}
  leads.forEach(function(l){list.appendChild(card(l))});
}

function card(l){
  var c=el('div','lead');
  var top=el('div','top');
  var left=el('div');left.appendChild(el('h3','',l.name));
  left.appendChild(el('div','when',new Date(l.created_at).toLocaleString()));
  top.appendChild(left);
  top.appendChild(el('span','badge '+l.status,LABEL[l.status]||l.status));
  c.appendChild(top);
  c.appendChild(el('div','rv',[l.year,l.make,l.model].join(' ')));
  c.appendChild(el('div','meta',(l.mileage?l.mileage+' miles · ':'')+'ZIP '+l.zip));
  var ct=el('div','contact');
  var tel=el('a','',l.phone);tel.href='tel:'+l.phone.replace(/[^0-9+]/g,'');ct.appendChild(tel);
  var ml=el('a','',l.email);ml.href='mailto:'+encodeURI(l.email);ct.appendChild(ml);
  c.appendChild(ct);
  if(l.comments)c.appendChild(el('div','note',l.comments));
  var ac=el('div','actions');
  var sel=document.createElement('select');
  STATUSES.forEach(function(s){var o=el('option','',LABEL[s]);o.value=s;if(s===l.status)o.selected=true;sel.appendChild(o)});
  sel.onchange=function(){setStatus(l,sel.value,sel)};
  ac.appendChild(sel);
  var ph=el('div','photo');
  if(l.photo_keys&&l.photo_keys.length){
    var pb=el('button','btn ghost','View photo');
    pb.onclick=function(){pb.disabled=true;pb.textContent='Loading...';
      api('/api/photos/'+l.photo_keys[0]).then(function(r){if(!r.ok)throw new Error();return r.blob()}).then(function(b){
        var im=document.createElement('img');im.alt='Photo submitted for '+l.name;im.src=URL.createObjectURL(b);ph.appendChild(im);pb.remove();
      }).catch(function(){pb.disabled=false;pb.textContent='Photo failed, retry'})};
    ac.appendChild(pb);
  }
  c.appendChild(ac);c.appendChild(ph);
  return c;
}

function setStatus(l,s,sel){
  var prev=l.status;
  api('/api/leads/'+l.id,{method:'PATCH',headers:{'content-type':'application/json'},body:JSON.stringify({status:s})}).then(function(r){
    if(!r.ok)throw new Error();l.status=s;
    if(filter!=='all'&&s!==filter){leads=leads.filter(function(x){return x.id!==l.id})}
    render();
  }).catch(function(){sel.value=prev;alert('Could not update the status. Try again.')});
}

$('lf').onsubmit=function(e){
  e.preventDefault();token=$('tok').value.trim();$('le').textContent='';$('lb').disabled=true;
  load(true).then(function(){try{var keep=$('rem').checked;sessionStorage.removeItem('rvtoken');localStorage.removeItem('rvtoken');(keep?localStorage:sessionStorage).setItem('rvtoken',token)}catch(x){}showApp(true)}).catch(function(x){if(x.message!=='401')$('le').textContent='Something went wrong. Try again.'}).then(function(){$('lb').disabled=false});
};
$('out').onclick=signOut;
$('rf').onclick=function(){load(true)};
$('more').onclick=function(){load(false)};
buildTabs();
if(token){load(true).then(function(){showApp(true)}).catch(function(){})}
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
    if (url.pathname === '/admin' || url.pathname === '/admin/') {
      return new Response(adminHtml, {
        headers: { 'content-type': 'text/html;charset=UTF-8', 'x-robots-tag': 'noindex, nofollow', 'cache-control': 'no-store' },
      });
    }
    if (url.pathname === '/') {
      return new Response(html, { headers: { 'content-type': 'text/html;charset=UTF-8' } });
    }
    return env.ASSETS.fetch(request);
  },
};
