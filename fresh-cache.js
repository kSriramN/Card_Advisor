// FreshCache: drop-in "clear app cache" and stale-version helper for PWAs.
// 1) Add <script src="fresh-cache.js"></script> before your app script.
// 2) FreshCache.init({label:'v1', backup:function(){ /* download a backup */ }, openSettings:function(){ /* show your settings page */ }});
//    label = your current version text. The server copy of your page must contain  APP_LABEL='<label>'  (or pass versionPattern).
// 3) Add a Settings button that calls FreshCache.openDialog().
// 4) Service worker: fetch(e.request.url,{cache:'reload'}) to bypass the HTTP cache, and register with {updateViaCache:'none'}.
// It only removes service workers and Cache Storage. localStorage and IndexedDB data are never touched.
(function(){
var o={},sent=false;
function css(){if(document.getElementById('fc-css'))return;var s=document.createElement('style');s.id='fc-css';
s.textContent='.fc-bar{position:fixed;left:10px;right:10px;top:calc(10px + env(safe-area-inset-top,0px));z-index:2000;background:#172538;color:#fff;border-radius:14px;padding:11px 12px;font:13px/1.4 -apple-system,system-ui,sans-serif;display:flex;gap:8px;align-items:center;box-shadow:0 6px 20px rgba(0,0,0,.3)}.fc-bar button{width:auto;margin:0;padding:7px 11px;border:0;border-radius:9px;background:#fff;color:#172538;font:600 12px system-ui,sans-serif}.fc-bar .fc-x{background:none;color:#fff;padding:7px}.fc-ov{position:fixed;inset:0;z-index:2100;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:20px}.fc-box{background:#fff;color:#172538;border-radius:16px;padding:18px;max-width:340px;width:100%;font:14px/1.5 -apple-system,system-ui,sans-serif}.fc-box h3{margin:0 0 6px;font-size:18px}.fc-box p{margin:0 0 8px}.fc-box button{display:block;width:100%;margin-top:8px;padding:11px;border-radius:10px;border:1px solid #ccd5df;background:#f3f6fa;color:#172538;font:600 14px system-ui,sans-serif}.fc-box .fc-go{background:#0f6e56;border-color:#0f6e56;color:#fff}#fc-msg{font-size:12px;color:#0f6e56;min-height:16px}';
document.head.appendChild(s);}
function bar(msg,label,fn){var old=document.getElementById('fc-bar');if(old)old.remove();css();var b=document.createElement('div');b.id='fc-bar';b.className='fc-bar';var t=document.createElement('span');t.style.flex='1';t.textContent=msg;var g=document.createElement('button');g.type='button';g.textContent=label;g.onclick=function(){b.remove();fn();};var x=document.createElement('button');x.type='button';x.textContent='✕';x.className='fc-x';x.setAttribute('aria-label','Dismiss');x.onclick=function(){b.remove();};b.appendChild(t);b.appendChild(g);b.appendChild(x);document.body.appendChild(b);}
async function clearAll(){try{if(navigator.serviceWorker){var rs=await navigator.serviceWorker.getRegistrations();for(var i=0;i<rs.length;i++)await rs[i].unregister();}if(window.caches){var ks=await caches.keys();for(var j=0;j<ks.length;j++)await caches.delete(ks[j]);}}catch(e){}location.href=location.pathname+'?fresh='+Date.now();}
function openDialog(){css();var ov=document.createElement('div');ov.className='fc-ov';ov.innerHTML='<div class="fc-box"><h3>Clear app cache?</h3><p>This reloads the latest version of the app. Your saved data stays on this device, but make sure you have a backup first.</p><div id="fc-msg"></div></div>';var box=ov.firstChild;
function btn(t,c,f){var b=document.createElement('button');b.type='button';b.textContent=t;b.className=c||'';b.onclick=f;box.appendChild(b);}
if(o.backup)btn('Download backup now','',function(){var m=ov.querySelector('#fc-msg');try{o.backup();m.textContent='Backup downloaded. Check Files or Downloads.';}catch(e){m.textContent='Backup failed. Try again.';}});
btn("I've backed up, clear cache",'fc-go',function(){ov.remove();clearAll();});btn('Cancel','',function(){ov.remove();});document.body.appendChild(ov);}
function remote(){return fetch((o.versionUrl||location.pathname)+'?'+Date.now(),{cache:'no-store'}).then(function(r){return r.text();}).then(function(t){var m=t.match(o.versionPattern||new RegExp("APP_LABEL"+"='([^']+)'"));return m?m[1]:null;});}
function check(manual,el){if(manual&&el)el.textContent='Checking…';var p;try{p=remote();}catch(e){p=Promise.reject(e);}
return p.then(function(v){if(!v){if(manual&&el)el.textContent='Could not read the server version.';return;}
if(v===o.label){if(manual&&el)el.textContent='You are on the latest: '+o.label;return;}
if(manual){if(el)el.textContent='Updating to '+v+'…';clearAll();}else bar('New version '+v+' is ready.','Update now',clearAll);}).catch(function(){if(manual&&el)el.textContent='Offline or unreachable.';});}
function init(x){o=x||{};css();
if(/[?&]fresh=/.test(location.search)){try{history.replaceState(null,'',location.pathname);}catch(e){}}
else{try{var k='fc-loads:'+location.pathname,n=Date.now(),a=JSON.parse(localStorage.getItem(k)||'[]').filter(function(t){return n-t<60000;});a.push(n);localStorage.setItem(k,JSON.stringify(a));
if(a.length>3)bar('Reloaded several times in a minute. If you still see an old version, clear the app cache in Settings.','Open settings',function(){if(o.openSettings)o.openSettings();else openDialog();});}catch(e){}}
if(navigator.serviceWorker&&navigator.serviceWorker.controller)navigator.serviceWorker.addEventListener('controllerchange',function(){if(!sent){sent=true;location.reload();}});
if(o.label){setTimeout(function(){check(false);},1500);var last=Date.now();document.addEventListener('visibilitychange',function(){if(!document.hidden&&Date.now()-last>30000){last=Date.now();check(false);}});}}
window.FreshCache={init:init,openDialog:openDialog,check:check,clearAll:clearAll};
})();
