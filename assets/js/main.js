console.log("portfolio script v3");
/* ============ DATA ============ */
const fieldData=[
  {img:"fieldex1",th:"การสำรวจแปลงตัวอย่างป่าชายเลน",en:"Mangrove Forest Sample Plot Survey."},
  {img:"fieldex2",th:"การสำรวจแปลงตัวอย่างป่าชายเลน",en:"Mangrove Forest Sample Plot Survey."},
  {img:"fieldex3",th:"เครื่องมือในการทำงาน",en:"Working Tools / Equipment."},
  {img:"fieldex4",th:"การสำรวจแปลงตัวอย่าง",en:"Sample Plot Survey."},
  {img:"fieldex5",th:"ลักษณะพื้นที่แปลงตัวอย่าง",en:"Characteristics of the Sample Plot Area."},
  {img:"fieldex6",th:"ลักษณะพื้นที่แปลงตัวอย่าง",en:"Characteristics of the Sample Plot Area."}
];
const skills=[
  {name:"GIS",nameTh:"ระบบสารสนเทศภูมิศาสตร์ (GIS)",th:"จัดทำแผนที่เชิงพื้นที่ วิเคราะห์การใช้ประโยชน์ที่ดินและสภาพปกคลุมพื้นที่",en:"Spatial mapping, land-use & land-cover analysis for forest planning.",ic:'<path d="M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3-6 3z"/><path d="M9 7v13M15 4v13"/>'},
  {name:"SMART",nameTh:"ลาดตระเวนเชิงคุณภาพ (SMART)",th:"ใช้โปรแกรม SMART ซึ่งเป็นเครื่องมือสำหรับการติดตามและรายงานผลในการลาดตระเวนป้องกันการลักลอบล่าสัตว์ป่า",en:"Use SMART (Spatial Monitoring and Reporting Tool) for anti-poaching patrols.",ic:'<path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/>'},
  {name:"Forest Survey",nameTh:"สำรวจทรัพยากรป่าไม้",th:"สำรวจป่าไม้ วัดขนาดต้นไม้ ประเมินความหลากหลายและมวลชีวภาพ",en:"Forest inventory, tree measurement & biomass estimation.",ic:'<path d="M12 2L7 10h3l-4 7h5v5h2v-5h5l-4-7h3z"/>'},
  {name:"Bird Identification",nameTh:"จำแนกชนิดพันธุ์นก",th:"จำแนกชนิดพันธุ์นกจากลักษณะ พฤติกรรม และเสียงร้อง",en:"Identifying bird species by plumage, behavior & vocalization.",ic:'<path d="M16 7h.01"/><path d="M20 8c0 4-3 6-6 7l-7 6v-4c0-6 4-11 9-11a4 4 0 0 1 4 2z"/><path d="M9 12L4 9"/>'},
  {name:"Photography",nameTh:"การถ่ายภาพ",th:"ถ่ายภาพธรรมชาติ สัตว์ป่า และภูมิทัศน์ เพื่อการอนุรักษ์",en:"Wildlife, nature & landscape photography for conservation.",ic:'<path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="4"/>'},
  {name:"Drone",nameTh:"อากาศยานไร้คนขับ",th:"ใช้อากาศยานไร้คนขับสำรวจพื้นที่และจัดทำแผนที่ทางอากาศ",en:"Aerial surveys and drone mapping.",ic:'<circle cx="12" cy="12" r="2.5"/><path d="M12 9.5V6M12 14.5V18M9.5 12H6M14.5 12H18"/><circle cx="5" cy="5" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/>'},
  {name:"Scuba Open Water",nameTh:"ดำน้ำ Open Water",th:"ได้รับการรับรอง NAUI Open Water Diver",en:"Certified NAUI Open Water Diver.",ic:'<path d="M3 15c1.5 0 1.5 1.5 3 1.5S9 15 10.5 15s1.5 1.5 3 1.5S15 15 16.5 15s1.5 1.5 3 1.5"/><path d="M3 19c1.5 0 1.5 1.5 3 1.5S9 19 10.5 19s1.5 1.5 3 1.5S15 19 16.5 19s1.5 1.5 3 1.5"/><circle cx="12" cy="6" r="2"/><path d="M12 8v3"/>'}
];
const allGalleryData={
  gal1:{th:"วาฬบรูด้า",en:"Bryde's Whale",sci:"(<i>Balaenoptera edeni</i>)"},
  gal2:{th:"แมงมุมใยกลม",en:"Orb-weaver spider",sci:"(วงศ์ Araneidae)"},
  gal3:{th:"นกกาบบัว",en:"Painted Stork",sci:"(<i>Mycteria leucocephala</i>)"},
  gal4:{th:"ป่าสนในสายหมอกยามเช้า",en:"Pine forest in the morning mist",sci:""},
  gal5:{th:"นกยางกรอกพันธุ์ชวา",en:"Javan Pond Heron",sci:"(<i>Ardeola speciosa</i>)"},
  gal6:{th:"นกชายเลนปากช้อน",en:"Spoon-billed Sandpiper",sci:"(<i>Calidris pygmaea</i>)"},
  gal7:{th:"นกชายเลนปากช้อน",en:"Spoon-billed Sandpiper",sci:"(<i>Calidris pygmaea</i>)"},
  gal8:{th:"นกกระจิบหญ้าสีเรียบ",en:"Plain Prinia",sci:"(<i>Prinia inornata</i>)"},
  gal9:{th:"นกบูบี้ตีนแดง",en:"Red-footed Booby",sci:"(<i>Sula sula</i>)"},
  gal10:{th:"นกจาบคาหัวเกาลัด",en:"Chestnut-headed Bee-eater",sci:"(<i>Merops leschenaulti</i>)"},
  gal11:{th:"นกแว่นตาขาวหลังเขียว",en:"Warbling White-eye",sci:"(<i>Zosterops simplex</i>)"},
  gal12:{th:"นกอีเสือสีน้ำตาล",en:"Brown Shrike",sci:"(<i>Lanius cristatus</i>)"},
  gal13:{th:"นกกะเต็นใหญ่ธรรมดา",en:"Stork-billed Kingfisher",sci:"(<i>Pelargopsis capensis</i>)"},
  gal14:{th:"กลุ่มผีเสื้อดูดน้ำแร่ธาตุ",en:"Butterflies mud-puddling on sand",sci:""},
  gal15:{th:"ตะกอง",en:"Chinese Water Dragon",sci:"(<i>Physignathus cocincinus</i>)"},
  gal16:{th:"นกกระจาบทอง",en:"Asian Golden Weaver",sci:"(<i>Ploceus hypoxanthus</i>)"},
  gal17:{th:"นกยูงไทย ตัวผู้",en:"Green Peafowl, male",sci:"(<i>Pavo muticus</i>)"},
  gal18:{th:"ชะนีมือขาว",en:"White-handed Gibbon",sci:"(<i>Hylobates lar</i>)"},
  gal19:{th:"ปูก้ามดาบ",en:"Fiddler crab",sci:"(<i>Uca</i> sp.)"},
  gal20:{th:"หยาดน้ำค้าง",en:"Sundew",sci:"(<i>Drosera</i> sp.)"},
  gal21:{th:"ปูก้ามดาบ",en:"Fiddler crab",sci:"(<i>Uca</i> sp.)"},
  gal22:{th:"นกอีเสือหลังเทา",en:"Grey-backed Shrike",sci:"(<i>Lanius tephronotus</i>)"},
  gal23:{th:"ฝูงนกหัวโตหลังจุดสีทอง",en:"Pacific Golden Plover",sci:"(<i>Pluvialis fulva</i>)"},
  gal24:{th:"ใบไม้สีแดงยามแสงส่องยามเช้า",en:"Red leaves lit by morning light",sci:""},
  gal25:{th:"กิ้งก่าแก้ว",en:"Forest Crested Lizard",sci:"(<i>Calotes emma</i>)"},
  gal26:{th:"นกกก",en:"Great Hornbill",sci:"(<i>Buceros bicornis</i>)"},
  gal27:{th:"นกเขนน้อยปีกแถบขาว",en:"Bar-winged Flycatcher-shrike",sci:"(<i>Hemipus picatus</i>)"},
  gal28:{th:"นกแก๊ก",en:"Oriental Pied Hornbill",sci:"(<i>Anthracoceros albirostris</i>)"},
  gal29:{th:"นกกระเต็นน้อยธรรมดาเกาะป้ายเตือนริมน้ำ",en:"Common Kingfisher perched on a warning sign",sci:"(<i>Alcedo atthis</i>)"},
  gal30:{th:"นกเงือกกรามช้าง",en:"Wreathed Hornbill",sci:"(<i>Rhyticeros undulatus</i>)"},
  gal31:{th:"ป่าสนและสายหมอก",en:"Pine forest and mist",sci:""},
  gal32:{th:"นกหัวโตทรายเล็ก",en:"Tibetan Sand-Plover",sci:"(<i>Anarhynchus atrifrons</i>)"},
  gal33:{th:"ระยะชัดตื้น",en:"Depth of field",sci:""}
};
/* Photos already shown in "Through the Lens" — excluded here to avoid duplicates */
const featured=["gal11","gal1","gal7","gal18","gal17","gal15","gal8","gal5"];
const certData=[
  {img:"cert1",th:"ประกาศนียบัตรหลักสูตร \"การประกันคุณภาพและควบคุมคุณภาพ (QA/QC) ข้อมูลกิจกรรม สำหรับการจัดทำบัญชีก๊าซเรือนกระจกรายสาขาและมาตรการลดก๊าซเรือนกระจกของประเทศไทย\" จัดโดยกรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม ร่วมกับมหาวิทยาลัยธรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ UNDP (25–29 พ.ค. 2569)",en:"Certificate of Achievement — Quality Assurance and Quality Control (QA/QC) of Activity Data for Thailand's Sectoral Greenhouse Gas Inventory and Mitigation, Department of Climate Change and Environment with Thammasat University, Kasetsart University and UNDP (May 25–29, 2026)."},
  {img:"cert2",th:"เกียรติบัตรผ่านการฝึกอบรมหลักสูตร \"การดำน้ำเบื้องต้น\" (Open Water) รุ่นที่ 1 จัดโดยกรมทรัพยากรทางทะเลและชายฝั่ง ณ เกาะล้าน อำเภอบางละมุง จังหวัดชลบุรี (26–30 พ.ย. 2568)",en:"Certificate — Basic Open Water Diving Course (Batch 1), Department of Marine and Coastal Resources, held at Koh Larn, Bang Lamung, Chonburi (Nov 26–30, 2025)."},
  {img:"cert3",th:"ประกาศนียบัตรผ่านการฝึกอบรมวิชาการลาดตระเวนเชิงคุณภาพสำหรับการจัดการพื้นที่คุ้มครอง (SMART Patrol) รุ่นที่ 9 จัดโดยคณะวนศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ ร่วมกับกรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช, WWF และ WCS ประเทศไทย ณ เขตรักษาพันธุ์สัตว์ป่าห้วยขาแข้ง อำเภอลานสัก จังหวัดอุทัยธานี (1–3 ก.พ. 2567)",en:"Certificate — SMART Patrol Training Course (Batch 9), Faculty of Forestry, Kasetsart University with the Department of National Parks, Wildlife and Plant Conservation, WWF Thailand and WCS Thailand, held at Huai Kha Khaeng Wildlife Sanctuary, Lan Sak, Uthai Thani (Feb 1–3, 2024)."},
  {img:"cert4",th:"เกียรติบัตรจากกรมส่งเสริมคุณภาพสิ่งแวดล้อม กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม ในฐานะผู้มีบทบาทสำคัญในการขับเคลื่อนโครงการกิจกรรมด้านสิ่งแวดล้อมของเยาวชนภายในมหาวิทยาลัย (Green Youth) ระดับประเทศ ประจำปี 2564 (19 ส.ค. 2565)",en:"Certificate of Recognition — Department of Environmental Quality Promotion, Ministry of Natural Resources and Environment, for a key role in driving the national university Green Youth environmental program, 2021 cycle (Aug 19, 2022)."},
  {img:"cert5",th:"เกียรติบัตรจากมหาวิทยาลัยเกษตรศาสตร์ ให้ไว้เพื่อแสดงว่าได้ร่วมดำเนินกิจกรรมกับชมรมอนุรักษ์ธรรมชาติและทรัพยากรธรรมชาติ ปฏิบัติหน้าที่ในฐานะกรรมการ (28 มี.ค. 2565)",en:"Certificate of Honor — Kasetsart University, for serving as a committee member of the Nature and Natural Resources Conservation Club (March 28, 2022)."},
  {img:"cert6",th:"ใบประกาศนียบัตรจากมหาวิทยาลัยเกษตรศาสตร์ ให้ไว้เพื่อแสดงว่าได้ร่วมดำเนินกิจกรรมกับชมรมอนุรักษ์ธรรมชาติและทรัพยากรธรรมชาติ ปฏิบัติหน้าที่ในฐานะกรรมการ (29 มี.ค. 2564)",en:"Certificate — Kasetsart University, for serving as a committee member of the Nature and Natural Resources Conservation Club (March 29, 2021)."}
];
const IMG="assets/img/",TH="assets/img/thumb/";
const zoomSVG='<span class="zoom"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><line x1="16" y1="16" x2="21" y2="21"></line></svg></span>';

/* ============ FIELD EXPERIENCE — VERTICAL THUMBNAIL AUTOSTART SLIDER ============
   Ported from an Embla vertical-thumbnail-autostart carousel component to plain
   JS: a tall main frame with a vertical thumbnail rail beside it. Autoplays
   every 2s, does not loop past the last slide (matches the reference's
   loop:false), and keeps playing through hover/clicks (stopOnMouseEnter and
   stopOnInteraction are both false in the original). Clicking a thumbnail
   jumps straight there; clicking the main photo opens the site lightbox. */
(function(){
  const host=document.getElementById("fieldVSlider"),main=document.getElementById("fvMain"),thumbs=document.getElementById("fvThumbs");
  if(!host||!main||!thumbs)return;
  let idx=0,onScreen=true;

  fieldData.forEach((f,i)=>{
    const img=document.createElement("img");
    img.src=IMG+f.img+".jpg";img.alt=f.en;img.loading=i===0?"eager":"lazy";
    if(i===0)img.classList.add("active");
    main.appendChild(img);

    const t=document.createElement("div");
    t.className="fv-thumb"+(i===0?" active":"");
    t.innerHTML=`<img src="${TH}${f.img}.jpg" alt="${f.en}" loading="lazy"/>`;
    t.onclick=()=>goTo(i);
    thumbs.appendChild(t);
  });
  const cap=document.createElement("div");
  cap.className="fv-cap";
  main.appendChild(cap);
  main.addEventListener("click",()=>openLB("field",idx));

  function render(){
    [...main.querySelectorAll("img")].forEach((img,i)=>img.classList.toggle("active",i===idx));
    [...thumbs.children].forEach((t,i)=>t.classList.toggle("active",i===idx));
    const f=fieldData[idx];
    cap.innerHTML=`<div class="th l-th">${f.th}</div><div class="en l-en">${f.en}</div>`;
    /* scroll only the thumbnail rail itself into position — never
       element.scrollIntoView() here, since on a page this tall it can walk
       up and drag the whole viewport down to this section on every autoplay
       tick, fighting anyone trying to scroll away (e.g. back up to the hero) */
    const activeThumb=thumbs.children[idx];
    if(activeThumb){
      thumbs.scrollTo({
        top:activeThumb.offsetTop-(thumbs.clientHeight-activeThumb.clientHeight)/2,
        left:activeThumb.offsetLeft-(thumbs.clientWidth-activeThumb.clientWidth)/2,
        behavior:"smooth"
      });
    }
  }
  function goTo(i){ idx=Math.max(0,Math.min(fieldData.length-1,i)); render(); }
  render();

  const reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* only autoplay while the section is actually on screen — otherwise the
     interval keeps ticking (and re-centering the thumb rail) even while the
     user has scrolled far away, e.g. up at the hero */
  if("IntersectionObserver" in window){
    new IntersectionObserver(es=>{onScreen=es[0].isIntersecting;},{rootMargin:"100px 0px"}).observe(host);
  }
  if(!reduced){
    setInterval(()=>{ if(onScreen&&idx<fieldData.length-1)goTo(idx+1); },2000);
  }
})();

/* ============ BUILD SKILLS ============ */
const sg=document.getElementById("skillsGrid");
skills.forEach((s,i)=>{
  const c=document.createElement("div");
  c.className="skill-card reveal rs d"+((i%4)+1);
  c.innerHTML=`<div class="skill-ic"><svg viewBox="0 0 24 24">${s.ic}</svg></div>
    <div class="skill-name"><span class="l-th">${s.nameTh||s.name}</span><span class="l-en">${s.name}</span></div>
    <div class="skill-th l-th">${s.th}</div>
    <div class="skill-th l-en">${s.en}</div>`;
  c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px");});
  sg.appendChild(c);
});

/* ============ BUILD "THROUGH THE LENS" CARD STACK (adapted from a React CardStack component) ============ */
const cardStack=document.getElementById("cardStack"),cardDots=document.getElementById("cardDots");
let csActive=0;
const CS_MAX_OFFSET=3;   /* how many cards show on either side of the active one */
const CS_SPACING_DESKTOP=230; /* px between fanned cards on PC */
const CS_SPACING_MOBILE=170;  /* px between fanned cards on mobile (<=720px) */
function csSpacing(){ return window.innerWidth<=720 ? CS_SPACING_MOBILE : CS_SPACING_DESKTOP; }
const CS_ROTATE=9;       /* deg per step */
featured.forEach((n,i)=>{
  const c=document.createElement("div");
  c.className="cs-card";
  c.innerHTML=`<img src="${TH}${n}.jpg" alt="Featured photograph" loading="lazy"/>`;
  c.onclick=()=>{ if(i===csActive){ openLB("featured",csActive); } else { csActive=i; renderStack(); } };
  cardStack.appendChild(c);
  const dot=document.createElement("button");
  dot.setAttribute("aria-label","Go to photo "+(i+1));
  dot.onclick=()=>{csActive=i;renderStack();};
  cardDots.appendChild(dot);
});
function csOffset(i,active,len){
  const raw=i-active;
  const alt=raw>0?raw-len:raw+len;
  return Math.abs(alt)<Math.abs(raw)?alt:raw;
}
function renderStack(){
  const cards=[...cardStack.children];
  const len=cards.length;
  cards.forEach((el,i)=>{
    const off=csOffset(i,csActive,len);
    const abs=Math.abs(off);
    if(abs>CS_MAX_OFFSET){
      el.style.opacity="0";el.style.pointerEvents="none";el.classList.remove("is-active");
      return;
    }
    el.style.pointerEvents="auto";
    const isActive=off===0;
    const scale=isActive?1:Math.max(0.72,1-abs*0.12);
    const x=off*csSpacing();
    const y=abs*12;
    const rot=off*CS_ROTATE;
    el.style.transform=`translateX(${x}px) translateY(${-(isActive?14:0)+y}px) rotate(${rot}deg) scale(${scale})`;
    el.style.opacity=isActive?"1":String(Math.max(0.35,0.85-abs*0.22));
    el.style.zIndex=String(100-abs);
    el.classList.toggle("is-active",isActive);
  });
  [...cardDots.children].forEach((d,i)=>d.classList.toggle("active",i===csActive));
}
renderStack();
window.addEventListener("resize",renderStack);
cardStack.addEventListener("keydown",e=>{
  if(e.key==="ArrowRight"){csActive=(csActive+1)%featured.length;renderStack();}
  if(e.key==="ArrowLeft"){csActive=(csActive-1+featured.length)%featured.length;renderStack();}
});
/* gentle autoplay, paused while hovering the stack */
let csHover=false;
cardStack.addEventListener("mouseenter",()=>csHover=true);
cardStack.addEventListener("mouseleave",()=>csHover=false);
if(!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)){
  setInterval(()=>{ if(!csHover){ csActive=(csActive+1)%featured.length; renderStack(); } },3500);
}

/* ============ GALLERY MARQUEE ============
   Ported from a framer-motion ScrollVelocity component to plain JS. Each row
   drifts at its own constant speed; the page's scroll velocity scales that
   speed and flips the direction, so the images surge when you scroll down and
   run backwards when you scroll up. Two identical halves per track let the
   transform wrap seamlessly at -50%. Shows the full 33-photo gallery set. */
(function(){
  const host=document.getElementById("galleryMarquee");
  if(!host)return;

  const galItems=Array.from({length:33},(_,i)=>"gal"+(i+1));
  const ROWS=[{velocity:3,items:galItems},
              {velocity:-3,items:[...galItems].reverse()}];
  const REPEAT=3;            /* copies per half — enough to span a wide screen */
  const rows=[];

  ROWS.forEach(cfg=>{
    const row=document.createElement("div"); row.className="sv-row";
    const track=document.createElement("div"); track.className="sv-track";
    for(let half=0;half<2;half++){
      for(let r=0;r<REPEAT;r++){
        cfg.items.forEach(n=>{
          const idx=galItems.indexOf(n);
          const meta=allGalleryData[n]||{};
          const d=document.createElement("div");
          d.className="field-item";
          d.innerHTML=`<img src="${TH}${n}.jpg" alt="${meta.en||"Photograph "+(idx+1)}" loading="lazy"/>${zoomSVG}
            <div class="cap"><div class="th l-th">${meta.th||""}</div><div class="th l-en">${meta.en||""}</div></div>`;
          d.onclick=()=>openLB("gallery",idx);
          track.appendChild(d);
        });
      }
    }
    row.appendChild(track); host.appendChild(row);
    const state={track,velocity:cfg.velocity,baseX:0,dir:1,paused:false};
    /* hold still while the pointer is over a row so the images can be clicked */
    row.addEventListener("mouseenter",()=>state.paused=true);
    row.addEventListener("mouseleave",()=>state.paused=false);
    rows.push(state);
  });

  const reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduced)return;   /* leave the rows parked */

  /* wrap into the [-50%, 0] window the doubled track is built for */
  function wrap(v){ const min=-50,range=50; return min+((((v-min)%range)+range)%range); }

  let lastY=window.scrollY,lastT=0,smooth=0,raf=null,onScreen=false;

  function frame(t){
    if(!onScreen||document.hidden){ raf=null; return; }
    const dt=lastT?Math.min(t-lastT,64):16; lastT=t;
    const y=window.scrollY;
    const raw=(y-lastY)/(dt/1000); lastY=y;
    smooth+=(raw-smooth)*Math.min(1,dt/1000*8);
    let factor=smooth/10000*5;
    if(factor>5)factor=5; else if(factor<-5)factor=-5;

    rows.forEach(r=>{
      if(r.paused)return;
      let moveBy=r.dir*r.velocity*(dt/1000);
      if(factor<0)r.dir=-1; else if(factor>0)r.dir=1;
      moveBy+=r.dir*moveBy*factor;
      r.baseX=wrap(r.baseX+moveBy);
      r.track.style.transform="translateX("+r.baseX+"%)";
    });
    raf=requestAnimationFrame(frame);
  }
  function start(){ if(!raf&&onScreen&&!document.hidden){ lastT=0; lastY=window.scrollY; raf=requestAnimationFrame(frame); } }

  if("IntersectionObserver" in window){
    new IntersectionObserver(es=>{ onScreen=es[0].isIntersecting; start(); },{rootMargin:"200px 0px"}).observe(host);
  }else{ onScreen=true; }
  document.addEventListener("visibilitychange",start);
  start();
})();

/* ============ BUILD CERTIFICATES (animated stacked showcase) ============ */
const certStack=document.getElementById("certStack"),
      certText=document.getElementById("certText"),
      certCount=document.getElementById("certCount"),
      certPrevBtn=document.getElementById("certPrev"),
      certNextBtn=document.getElementById("certNext");
let certActive=0;
/* fixed, non-random per-index rotation so the stack looks the same on every render */
const certTilt=certData.map((_,i)=>((i%2===0)?-1:1)*(4+(i%3)*2));
certData.forEach((c,i)=>{
  const d=document.createElement("div");
  d.className="cs-item";
  d.innerHTML=`<img src="${TH}${c.img}.jpg" alt="${c.en}" loading="lazy"/>`;
  d.onclick=()=>{ if(i===certActive){ openLB("cert",certActive); } else { certActive=i; renderCert(); } };
  certStack.appendChild(d);
});
function renderCert(){
  const items=[...certStack.children];
  items.forEach((el,i)=>{
    const offset=(i-certActive+certData.length)%certData.length;
    if(offset===0){
      el.style.transform="translateY(0) scale(1) rotate(0deg)";
      el.style.opacity="1";
      el.style.zIndex=String(certData.length+5);
      el.classList.add("is-active");
    }else if(offset<=2){
      el.style.transform=`translateY(${offset*10}px) scale(${1-offset*0.05}) rotate(${certTilt[i]}deg)`;
      el.style.opacity=String(0.55/offset);
      el.style.zIndex=String(certData.length-offset);
      el.classList.remove("is-active");
    }else{
      el.style.transform="translateY(30px) scale(0.85) rotate(0deg)";
      el.style.opacity="0";
      el.style.zIndex="0";
      el.classList.remove("is-active");
    }
  });
  certText.classList.add("switching");
  setTimeout(()=>{
    const c=certData[certActive];
    certText.innerHTML=`<div class="th l-th">${c.th}</div><div class="th l-en">${c.en}</div>`;
    certCount.innerHTML=`<b>${String(certActive+1).padStart(2,"0")}</b> / ${String(certData.length).padStart(2,"0")}`;
    certText.classList.remove("switching");
  },160);
}
certPrevBtn.onclick=()=>{certActive=(certActive-1+certData.length)%certData.length;renderCert();};
certNextBtn.onclick=()=>{certActive=(certActive+1)%certData.length;renderCert();};
renderCert();

/* ============ LIGHTBOX ============ */
const groups={
  field:fieldData.map(f=>({src:IMG+f.img+".jpg",thumb:TH+f.img+".jpg",th:f.th,en:f.en})),
  featured:featured.map(n=>({src:IMG+n+".jpg",thumb:TH+n+".jpg",th:allGalleryData[n]?.th,en:allGalleryData[n]?.en,sci:allGalleryData[n]?.sci})),
  gallery:Array.from({length:33},(_,i)=>"gal"+(i+1)).map(n=>({src:IMG+n+".jpg",thumb:TH+n+".jpg",th:allGalleryData[n]?.th,en:allGalleryData[n]?.en,sci:allGalleryData[n]?.sci})),
  cert:certData.map(c=>({src:IMG+c.img+".jpg",thumb:TH+c.img+".jpg",th:c.th,en:c.en}))
};
const lb=document.getElementById("lb"),lbImg=document.getElementById("lbImg"),
lbCap=document.getElementById("lbCap"),lbCount=document.getElementById("lbCount");
let curG=[],curI=0,lbToken=0;
const lbLoaded={}; /* remember full-size images already downloaded */
let lbHideTimer=null;
function openLB(g,i){
  curG=groups[g];curI=i;renderLB();
  clearTimeout(lbHideTimer);
  lb.style.display="flex";
  void lb.offsetHeight; /* force reflow so the fade-in still animates */
  lb.classList.add("open");
  document.body.classList.add("lb-lock");
}
function renderLB(){
  const it=curG[curI];
  lbCap.innerHTML=(it.th||it.en)
    ? `<div class="th l-th">${it.th||it.en||""}</div><div class="th l-en">${it.en||it.th||""}</div>`
      +(it.sci?`<div class="en">${it.sci}</div>`:"")
    : "";
  lbCount.textContent=(curI+1)+" / "+curG.length;
  const token=++lbToken;
  if(lbLoaded[it.src]){ /* already downloaded — show instantly */
    lbImg.src=it.src;lb.classList.remove("loading");
  }else{
    /* show the (already cached) thumbnail right away + spinner, swap in full-size when ready */
    lbImg.src=it.thumb;lb.classList.add("loading");
    const full=new Image();
    full.onload=()=>{lbLoaded[it.src]=1;if(token===lbToken){lbImg.src=it.src;lb.classList.remove("loading");}};
    full.onerror=()=>{if(token===lbToken)lb.classList.remove("loading");};
    full.src=it.src;
  }
  /* preload neighbours so arrows feel instant */
  [1,-1].forEach(d=>{
    const n=curG[(curI+d+curG.length)%curG.length];
    if(!lbLoaded[n.src]){const p=new Image();p.onload=()=>{lbLoaded[n.src]=1;};p.src=n.src;}
  });
}
function closeLB(){
  lb.classList.remove("open");
  lb.classList.remove("loading");
  document.body.classList.remove("lb-lock");
  /* after the fade-out, remove the overlay from the page entirely so it can never block clicks */
  clearTimeout(lbHideTimer);
  lbHideTimer=setTimeout(()=>{if(!lb.classList.contains("open"))lb.style.display="none";},300);
}
function lbNav(d){curI=(curI+d+curG.length)%curG.length;renderLB();}
document.getElementById("lbClose").onclick=closeLB;
document.getElementById("lbNext").onclick=()=>lbNav(1);
document.getElementById("lbPrev").onclick=()=>lbNav(-1);
lb.onclick=e=>{if(e.target===lb||e.target.classList.contains("lb-stage"))closeLB();};
document.addEventListener("keydown",e=>{
  if(!lb.classList.contains("open"))return;
  if(e.key==="Escape")closeLB();
  if(e.key==="ArrowRight")lbNav(1);
  if(e.key==="ArrowLeft")lbNav(-1);
});

/* ============ LANGUAGE TOGGLE (TH / EN) ============ */
/* Both languages are always in the DOM; CSS decides which set is visible, so
   switching costs nothing and needs no re-render of the generated sections. */
const langToggle=document.getElementById("langToggle");
function applyLang(l){
  document.documentElement.setAttribute("data-lang",l);
  document.documentElement.setAttribute("lang",l);
  try{localStorage.setItem("lang",l);}catch(e){}
  if(typeof setNavLang==="function")setNavLang(l);
}
langToggle.onclick=()=>{
  applyLang(document.documentElement.getAttribute("data-lang")==="en"?"th":"en");
};

/* ============ THEME TOGGLE (light / dark) ============ */
const themeToggle=document.getElementById("themeToggle");
function applyTheme(t){
  /* perf: freeze transitions for one frame so hundreds of elements don't
     animate colour/shadow simultaneously at the moment of the swap */
  document.documentElement.classList.add("theme-swap");
  if(t==="light")document.documentElement.setAttribute("data-theme","light");
  else document.documentElement.removeAttribute("data-theme");
  try{localStorage.setItem("theme",t);}catch(e){}
  if(window.__syncSiteBg) window.__syncSiteBg();
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    document.documentElement.classList.remove("theme-swap");
  }));
}
themeToggle.onclick=()=>{
  const isLight=document.documentElement.getAttribute("data-theme")==="light";
  applyTheme(isLight?"dark":"light");
};

/* ============ NAV: scroll, burger, spy ============ */
const nav=document.getElementById("nav"),navLinks=document.getElementById("navLinks"),burger=document.getElementById("burger");
window.addEventListener("scroll",()=>{nav.classList.toggle("scrolled",window.scrollY>40);});
burger.onclick=()=>{burger.classList.toggle("open");navLinks.classList.toggle("open");};
navLinks.querySelectorAll("a").forEach(a=>a.onclick=()=>{burger.classList.remove("open");navLinks.classList.remove("open");});
const spy=[...document.querySelectorAll("section[id]")];
window.addEventListener("scroll",()=>{
  let cur="";const y=window.scrollY+120;
  spy.forEach(s=>{if(y>=s.offsetTop)cur=s.id;});
  navLinks.querySelectorAll("a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+cur));
});

/* ============ NAV: random-letter-swap hover (adapted from a React/shadcn
   RandomLetterSwap component into plain JS — each letter briefly cycles
   through random characters, staggered left-to-right, then settles back
   on the real label). Skipped entirely for prefers-reduced-motion. */
const prefersReducedNav=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!prefersReducedNav){
  const LSW_LATIN="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const LSW_THAI="กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ";
  const LSW_STAGGER=55;   /* ms between letters — the wave travels across */
  const LSW_TICK=85;      /* ms per scramble frame */
  const LSW_TICKS=4;      /* scramble frames before a letter settles */

  /* Thai writes vowels and tone marks as combining characters that belong to
     the consonant before them (ก + ◌ั + ◌้ is ONE thing on screen). Splitting
     by code point would tear those apart, so split by grapheme cluster and
     treat each cluster as one "letter". */
  const seg = (typeof Intl!=="undefined" && Intl.Segmenter)
    ? new Intl.Segmenter("th",{granularity:"grapheme"}) : null;
  function splitLetters(str){
    if(seg) return [...seg.segment(str)].map(x=>x.segment);
    /* fallback: glue combining marks onto the preceding character */
    const out=[];
    for(const ch of str){
      if(/[ัิ-ฺ็-๎]/.test(ch) && out.length) out[out.length-1]+=ch;
      else out.push(ch);
    }
    return out;
  }
  const isThai=str=>/[฀-๿]/.test(str);

  function lswWrap(a){
    const label=a.textContent;
    const letters=splitLetters(label);
    a._lswLetters=letters;
    a.textContent="";
    letters.forEach(ch=>{
      const span=document.createElement("span");
      span.className="lsw-letter";
      span.textContent=ch===" "?" ":ch;
      a.appendChild(span);
    });
  }
  function lswSettle(span,finalChar,pool){
    if(finalChar===" "||finalChar===" ")return;
    clearInterval(span._lswTimer);
    let ticks=0;
    span._lswTimer=setInterval(()=>{
      if(ticks<LSW_TICKS){
        span.textContent=pool[Math.floor(Math.random()*pool.length)];
        ticks++;
      }else{
        span.textContent=finalChar;
        clearInterval(span._lswTimer);
      }
    },LSW_TICK);
  }
  document.querySelectorAll(".nav-links a").forEach(a=>{
    a.addEventListener("mouseenter",()=>{
      const letters=a._lswLetters;
      if(!letters)return;
      /* scramble through the alphabet the label is actually written in */
      const pool=isThai(letters.join(""))?LSW_THAI:LSW_LATIN;
      [...a.querySelectorAll(".lsw-letter")].forEach((span,i)=>{
        setTimeout(()=>lswSettle(span,letters[i],pool),i*LSW_STAGGER);
      });
    });
  });
  window.__lswWrap=lswWrap;
}

/* Nav labels are swapped as plain text, then re-split into per-letter spans so
   the hover animation works in both languages. */
function setNavLang(l){
  document.querySelectorAll(".nav-links a").forEach(a=>{
    const label=(l==="en"?a.dataset.en:a.dataset.th);
    if(label)a.textContent=label;
    a._lswLetters=null;
    if(window.__lswWrap)window.__lswWrap(a);
  });
}
setNavLang(document.documentElement.getAttribute("data-lang")||"th");

/* ============ HERO — scroll to expand the video ============
   The page is held at the top while the media card grows from a small
   portrait card to a full-bleed frame. Once it is fully expanded the
   page unlocks and behaves normally (parallax + fade on the way down).
   Scrolling back up to the very top collapses it again. */
(function(){
  const hero=document.getElementById("top");
  const media=document.getElementById("heroMedia");
  const bg=document.getElementById("heroBg");
  const veil=document.getElementById("heroVeil");
  const heroContent=document.getElementById("heroContent");
  const video=document.getElementById("heroVideo");
  if(!hero||!media) return;

  const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root=document.documentElement;
  /* expanded = the video has reached full size
     released = the page is free to scroll again (a short beat later, so the
                full-screen frame is actually seen before the page moves) */
  let progress=0,expanded=false,released=false,releaseTimer=null,
      touchStartY=0,mobile=window.innerWidth<768;

  const lock=()=>{root.classList.add("hero-lock");document.body.classList.add("hero-lock");};
  const unlock=()=>{root.classList.remove("hero-lock");document.body.classList.remove("hero-lock");};

  /* the four numbers below are the component's own: media 300 + p*1250 wide
     (650 on mobile), 400 + p*400 tall (200 on mobile), text sliding p*150vw
     (180vw on mobile), and the veil easing 0.5 -> 0.2 */
  function render(){
    media.style.width=(300+progress*(mobile?650:1250))+"px";
    media.style.height=(400+progress*(mobile?200:400))+"px";
    hero.style.setProperty("--tx",(progress*(mobile?180:150)).toFixed(2));
    hero.style.setProperty("--fade",Math.max(0,1-progress*1.7).toFixed(3));
    if(bg)bg.style.opacity="1"; /* stays fully visible so the real photo shows in the margin around the media at full expand, instead of fading to a flat fallback color */
    if(veil)veil.style.opacity=(0.5-progress*0.3).toFixed(3);
    hero.classList.toggle("is-expanded",progress>=1);
  }

  function release(){
    clearTimeout(releaseTimer);
    released=true;unlock();
  }

  function setProgress(p){
    progress=Math.min(1,Math.max(0,p));
    render();
    if(progress>=1&&!expanded){expanded=true;release();}
  }

  function collapse(){
    clearTimeout(releaseTimer);
    expanded=false;released=false;lock();
    window.scrollTo(0,0);
    setProgress(0.999);
  }

  /* --- desktop wheel --- */
  function onWheel(e){
    if(!released){
      e.preventDefault();
      if(!expanded)setProgress(progress+e.deltaY*0.0009);
      return;
    }
    if(e.deltaY<0&&window.scrollY<=5){collapse();e.preventDefault();}
  }

  /* --- touch --- */
  function onTouchStart(e){touchStartY=e.touches[0].clientY;}
  function onTouchMove(e){
    if(!touchStartY)return;
    const y=e.touches[0].clientY,dy=touchStartY-y;
    if(!released){
      e.preventDefault();
      if(!expanded){setProgress(progress+dy*(dy<0?0.008:0.005));touchStartY=y;}
      return;
    }
    if(dy<-20&&window.scrollY<=5){collapse();e.preventDefault();}
  }
  function onTouchEnd(){touchStartY=0;}

  /* --- keyboard --- */
  function onKey(e){
    if(released)return;
    if(["ArrowDown","PageDown"," ","Spacebar"].includes(e.key)){e.preventDefault();setProgress(progress+0.22);}
    else if(["ArrowUp","PageUp"].includes(e.key)){e.preventDefault();setProgress(progress-0.22);}
    else if(e.key==="End"||e.key==="Escape"){e.preventDefault();setProgress(1);release();}
  }

  /* --- keep the page pinned while locked --- */
  window.addEventListener("scroll",()=>{if(!released)window.scrollTo(0,0);},{passive:true});

  /* --- parallax once the page is free to scroll --- */
  window.addEventListener("scroll",()=>{
    if(!released)return;
    const y=window.scrollY;
    if(y<window.innerHeight){
      heroContent.style.transform=`translateY(${y*0.3}px)`;
      if(bg)bg.style.transform=`translateY(${y*0.16}px)`;
    }
  },{passive:true});

  window.addEventListener("resize",()=>{mobile=window.innerWidth<768;render();});

  /* any in-page link (CTA, nav) skips the animation instead of
     fighting the scroll lock */
  document.addEventListener("click",e=>{
    const a=e.target.closest&&e.target.closest('a[href^="#"]');
    if(a&&!released){setProgress(1);release();}
  },true);

  if(reduce||(location.hash&&location.hash!=="#top")){
    setProgress(1);release();
  }else{
    window.scrollTo(0,0);
    lock();
    setProgress(0);
    window.addEventListener("wheel",onWheel,{passive:false});
    window.addEventListener("touchstart",onTouchStart,{passive:false});
    window.addEventListener("touchmove",onTouchMove,{passive:false});
    window.addEventListener("touchend",onTouchEnd);
    window.addEventListener("keydown",onKey);
  }

  /* some browsers block autoplay until the first gesture */
  if(video){
    const kick=()=>{const p=video.play();if(p&&p.catch)p.catch(()=>{});};
    kick();
    ["pointerdown","touchstart","keydown"].forEach(ev=>window.addEventListener(ev,kick,{once:true,passive:true}));
  }
})();

/* ============ REVEAL on scroll ============ */
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});
},{threshold:0.12,rootMargin:"0px 0px -60px 0px"});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

document.getElementById("yr").textContent=new Date().getFullYear();

/* ============ ABOUT PHOTO SLIDER ============ */
const aboutTrack=document.getElementById("aboutTrack"),aboutDotsEl=document.getElementById("aboutDots");
if(aboutTrack&&aboutDotsEl){
  const aboutSlides=aboutTrack.children.length;
  let aboutIndex=0,aboutTimer;
  for(let i=0;i<aboutSlides;i++){
    const d=document.createElement("span");
    if(i===0)d.className="active";
    d.onclick=()=>{aboutIndex=i;updateAbout();resetAboutTimer();};
    aboutDotsEl.appendChild(d);
  }
  function updateAbout(){
    aboutTrack.style.transform=`translateX(${-aboutIndex*100}%)`;
    [...aboutDotsEl.children].forEach((d,i)=>d.classList.toggle("active",i===aboutIndex));
  }
  function resetAboutTimer(){
    clearInterval(aboutTimer);
    aboutTimer=setInterval(()=>{aboutIndex=(aboutIndex+1)%aboutSlides;updateAbout();},4000);
  }
  resetAboutTimer();
}


/* ============ VELARIS ANIMATED GRADIENT BG (Contact visual) ============ */
/* Ported from the Velaris WebGL component (React/shadcn) to plain JS so it
   runs in this static site with no build step — colors adapted to the
   site's green/near-black theme, and used as the whole page's animated
   background (replacing the old static ambient-glow gradient behind
   every section). Fixed to the viewport, very low opacity so photos and
   text stay the focus; falls back to the static glow if WebGL is
   unavailable. */
(function(){
  const canvas = document.getElementById("siteBg");
  if(!canvas) return;
  const gl = canvas.getContext("webgl");
  if(!gl) return;

  const vertexSrc = `
    attribute vec2 position;
    varying vec2 vUv;
    void main(){
      vUv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;
  const fragmentSrc = `
    precision highp float;
    varying vec2 vUv;
    uniform vec2  u_resolution;
    uniform float u_time;
    uniform float u_grain;
    uniform vec3  u_colors[4];
    uniform vec3  u_bg;
    uniform float u_glow;
    vec3 permute(vec3 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    void main(){
      vec2 uv = vUv;
      float ratio = u_resolution.x / u_resolution.y;
      vec2 p = uv - 0.5;
      p.x *= ratio;
      float t = u_time * 0.1;
      float n1 = snoise(p * 0.4 + vec2(t * 0.2, -t * 0.3));
      float n2 = snoise(p * 0.55 + vec2(-t * 0.15, t * 0.25) + n1 * 0.25);
      float n3 = snoise(p * 0.75 + vec2(t * 0.1, -t * 0.2) + n2 * 0.2);
      vec3 col = u_bg;
      float dist = length(p) * 1.5;
      float vignette = 1.0 - smoothstep(0.3, 1.2, dist);
      col = mix(col, u_colors[0], smoothstep(-0.2, 0.5, n1) * 0.85);
      col = mix(col, u_colors[1], smoothstep(-0.1, 0.6, n2) * 0.7);
      col = mix(col, u_colors[2], smoothstep(-0.3, 0.4, n3) * 0.6);
      col = mix(col, u_colors[3], smoothstep(0.0, 0.7, n1 * n2) * 0.5);
      float glow = smoothstep(0.8, 0.0, dist) * u_glow;
      col += u_colors[1] * glow;
      /* fade the edges toward the page background — on the dark theme that
         reads as the old darkening, on the light one it stays paper-coloured
         instead of going black in the corners */
      col = mix(mix(col, u_bg, 0.8), col, vignette);
      float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453 + u_time);
      col += (grain - 0.5) * u_grain * 0.2;
      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function createShader(type, src){
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    return sh;
  }
  const program = gl.createProgram();
  gl.attachShader(program, createShader(gl.VERTEX_SHADER, vertexSrc));
  gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fragmentSrc));
  gl.linkProgram(program);
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const posLoc = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const locs = {
    res: gl.getUniformLocation(program, "u_resolution"),
    time: gl.getUniformLocation(program, "u_time"),
    grain: gl.getUniformLocation(program, "u_grain"),
    colors: gl.getUniformLocation(program, "u_colors"),
    bg: gl.getUniformLocation(program, "u_bg"),
    glow: gl.getUniformLocation(program, "u_glow")
  };

  function hexToRgb(hex){
    const h = hex.replace("#","");
    return [parseInt(h.slice(0,2),16)/255, parseInt(h.slice(2,4),16)/255, parseInt(h.slice(4,6),16)/255];
  }
  /* One field, two palettes. The dark theme keeps the original greens; the
     light theme runs the same noise in earth tones on a paper ground, with a
     much weaker centre glow so it doesn't blow out to white. */
  const PALETTES = {
    dark : {bg:"#050a07", colors:["#86efac","#4ade80","#37e07b","#0e3a24"], glow:0.30, grain:0.45},
    light: {bg:"#f2eee3", colors:["#eae4d2","#d6d6b4","#bcc292","#e6d8bc"], glow:0.05, grain:0.30}
  };
  let BG, COLORS, GLOW, GRAIN_A;
  function applyPalette(){
    const pal = document.documentElement.getAttribute("data-theme")==="light"
      ? PALETTES.light : PALETTES.dark;
    BG = hexToRgb(pal.bg);
    COLORS = pal.colors.map(hexToRgb);
    GLOW = pal.glow;
    GRAIN_A = pal.grain;
  }
  applyPalette();
  const SPEED = 0.35;
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize(){
    const dpr = 1; /* perf: bg is a soft blurred gradient — 1x is visually identical, 4x fewer pixels */
    canvas.width = Math.max(1, window.innerWidth * dpr);
    canvas.height = Math.max(1, window.innerHeight * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener("resize", resize);
  resize();

  let raf = null, running = false, lastDraw = 0;
  const FRAME_MS = 1000/30;  /* the field drifts slowly — 30fps is plenty and
                                halves the GPU work versus every frame */
  function draw(t){
    gl.uniform2f(locs.res, canvas.width, canvas.height);
    gl.uniform1f(locs.time, t * 0.001 * SPEED);
    gl.uniform1f(locs.grain, GRAIN_A);
    gl.uniform1f(locs.glow, GLOW);
    gl.uniform3f(locs.bg, BG[0], BG[1], BG[2]);
    gl.uniform3fv(locs.colors, new Float32Array(COLORS.flat()));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  function render(t){
    if(!running) return;
    if(t - lastDraw >= FRAME_MS){ lastDraw = t; draw(t); }
    if(!prefersReduced) raf = requestAnimationFrame(render);
  }
  /* perf: a hidden tab needs no frames at all */
  function shouldRun(){ return !document.hidden; }
  function syncSiteBg(){
    applyPalette();
    const want = shouldRun();
    if(want && !running){ running = true; lastDraw = 0; raf = requestAnimationFrame(render); }
    else if(!want && running){ running = false; if(raf) cancelAnimationFrame(raf); raf = null; }
    if(running) requestAnimationFrame(t=>{ lastDraw = t; draw(t); }); /* repaint at once on a theme swap */
  }
  window.__syncSiteBg = syncSiteBg;
  document.addEventListener("visibilitychange", syncSiteBg);
  syncSiteBg();
})();

/* ============ IMAGE / RIGHT-CLICK PROTECTION ============ */
document.addEventListener("dragstart",e=>{if(e.target.tagName==="IMG")e.preventDefault();});
document.addEventListener("contextmenu",e=>e.preventDefault());
