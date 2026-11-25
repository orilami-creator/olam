{
const lang=document.documentElement.lang==='en'?'en':'he';

const L=(he,en)=>lang==='en'?en:he;
const KINDS={doco:['דוקו','Docu'],scripted:['מתוסרט','Scripted'],oncamera:['און קאמרה','On camera'],promo:['פרומו','Promo'],audio:['פודקאסטים ורדיו','Podcasts & radio']};
const ORDER=Object.keys(KINDS);
/* the first works shown under "הכל" (in this order), then everything else by genre */
const FEATURED=['dPL7OrazVGw','ECtKswTCMog','H4aGqiXSyHM','ASVu9JXJBBc','A8Bx1oX_Tls','Y2JkuJQf6wQ','7bj1FphLXR4','SmJgRgJIQyE','s7zHZhwwa4k'];
const allOrder=()=>{const vidOf=w=>(w.m.url.match(/v=([\w-]+)/)||[])[1];const f=FEATURED.map(id=>W.find(w=>vidOf(w)===id)).filter(Boolean);return f.concat([...W].filter(w=>!f.includes(w)).sort((a,c)=>ORDER.indexOf(a.k)-ORDER.indexOf(c.k)))};
const K=k=>L(KINDS[k][0],KINDS[k][1]);
const CLIENT={'כאן דיגיטל':'Kan Digital','כאן חדשות':'Kan News','בית״ר ירושלים':'Beitar Jerusalem','חברת מוריה':'Moriah Company','כאן גימל':'Kan Gimel','כאן 88':'Kan 88','כאן הסכתים':'Kan Podcasts'};
const ROLE={'בימוי':'Directing','קונספט':'Concept','עריכת תוכן':'Content editing','תחקיר':'Research','הפקה':'Production','הגשה':'Presenting','כתיבה':'Writing','עריכה מוזיקלית':'Music editing'};
const yt=id=>({embed:'https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&playsinline=1&rel=0',url:'https://www.youtube.com/watch?v='+id});
const W=[
 ['doco','אינסטגרם חסמו את רותם','כאן דיגיטל','אז היא יצאה למסע פילוסופי בעקבות הזהות האותנטית שלה.','בימוי|קונספט',yt('dPL7OrazVGw')],
 ['doco','תרגיל בחיבור: שתי אמהות חטופים נפגשות לשיחה','כאן דיגיטל','2 אמהות. 2 חטופים. 2 גישות. דאגה אחת. (צולם במהלך המו״מ על עסקאות החטופים, פברואר 2024)','בימוי',yt('D3igZF82xqc')],
 ['doco','סיפורה של סוליקה הצדקת','כאן דיגיטל','ללה סוליקה, צעירה יהודייה שהואשמה בכפירה באסלאם במרוקו במאה ה-19, ולמרות שנגזר עליה גזר דין מוות סירבה לנטוש את יהדותה. סול. אגדה שהייתה באמת.','בימוי',yt('26YPxgVhWHA')],
 ['doco','בית אחד בח׳אן יונס','כאן דיגיטל','פרויקט תיעוד מיוחד בן 18 ימים בבית אחד, של האנשים במלחמה, בזמן שלא נלחמים. ״האח הגדול״ ח׳אן יונס, אם תרצו.','קונספט|עריכת תוכן',yt('dgCvfAUChp8')],
 ['doco','עוקץ נפרדים מטייגה','כאן דיגיטל | כאן חדשות','טייגה היה הכלב הישראלי האחרון של יחידת עוקץ. במשימתו האחרונה הוא חשף מחבלים והציל חיים, רגע לפני שנהרג. פרידה מגיבור.','בימוי|עריכת תוכן|קונספט',yt('H4aGqiXSyHM')],
 ['doco','לנצח צהוב שחור: פרויקט הנצחה מיוחד','בית״ר ירושלים','3 נרצחים. 3 סיפורים. אהבה אחת.','בימוי|קונספט|תחקיר|הפקה',yt('A8Bx1oX_Tls')],
 ['doco','הכומר היהודי','כאן דיגיטל','הוא למד כמוּרה אחרי השואה, הגיע לגדולה ואפילו היה בקשרים עם האפיפיור, אבל אף פעם לא שכח את הדם הזורם בעורקיו. סיפורו של הכומר היהודי מיפו.','בימוי',yt('ECtKswTCMog')],
 ['doco','20 שנה ל-5:0 על אוסטריה','כאן דיגיטל','מפגש מחזור של כוכבי אחת מתצוגות הכדורגל הכי גדולות של נבחרת ישראל לדורותיה.','עריכת תוכן|תחקיר|קונספט',yt('SDehhNoGnCc')],
 ['doco','תרגיל בחיבור: חרדי ומילואימניק','כאן דיגיטל','מצד אחד מילואימניק ציוני בן הציונות הדתית ומהצד השני חרדי, לוחם קרבי לשעבר בעצמו. על הגיוס, על יהדות ועל עם ישראל.','בימוי',yt('3DyWmEZj5ww')],
 ['doco','כאן אורייתא: יום הזיכרון הוא ראש השנה','כאן דיגיטל','הרבה לפני הרובד הציוני העצוב של הביטוי, יום הזיכרון היה למעשה יום הולדתה של האנושות.','בימוי',yt('SWNimXa5VVQ')],
 ['doco','למורן אטיאס נמאס מהצביעות של ארגוני הנשים אחרי ה-7.10','כאן דיגיטל','מורן אטיאס בזעקה אל לבבותיהם הצבועים של ארגוני הנשים ברחבי העולם בעקבות זוועות השבעה באוקטובר.','בימוי',yt('HDm-RX-XSmU')],
 ['doco','חנה אזולאי הספרי פונה לעם המרוקאי. במרוקאית','כאן דיגיטל','חנה אזולאי הספרי פונה לעם המרוקאי בשפתו ומבקשת להעביר להם את סיפור השבעה באוקטובר מזווית שכנראה עוד לא שמעו.','בימוי',yt('bPlpKjMCzfw')],
 ['scripted','יום האיש','כאן דיגיטל','איך נראה ראיון עבודה בעולם הפוך?','בימוי',yt('Y2JkuJQf6wQ')],
 ['scripted','מסיבת פרידה מ-2023: השנאחסית','כאן דיגיטל','31 בדצמבר. 2023, שהביאה לנו את ההפגנות והמלחמה, עוד רגע מסתיימת, אבל 2024 מסרבת לצאת. ומה יש ל-1973 להגיד על זה? מסיבת שנים.','בימוי',yt('tw7QVt88N44')],
 ['scripted','מחשבות: מסאז׳ בזמן מלחמה','כאן דיגיטל','רות מרגישה קצת לא נעים להתענג על מסאז׳ בזמן המלחמה, אבל השובר פג תוקף עוד יומיים.','בימוי',yt('2F-gCksMRdY')],
 ['scripted','משכתבים את עשר המכות','כאן דיגיטל','כמו כל דבר, גם את עשר מכות מצריים צריך לרענן (או שלא).','בימוי',yt('d8nl7FoIrKs')],
 ['scripted','האינטרוונשן','כאן דיגיטל','החבר׳ה במשרד סיכמו שלא מזמינים יותר אוכל, אבל מיכאל לא עמד בהבטחה.','בימוי',yt('ODbxRt-jGAk')],
 ['oncamera','מה הסיפור של אליעזר בן יהודה?','כאן דיגיטל','כמה רחוק הלך מחיה השפה העברית אחר החזון שלו?','הגשה',yt('ASVu9JXJBBc')],
 ['oncamera','איך השפיעו היפנים על המוזיקה המזרחית בישראל?','כאן דיגיטל','מהפכה טכנולוגית מדהימה שקרתה בצד אחד של העולם הובילה למהפכה חברתית-תרבותית מדהימה לא פחות בצד השני שלו.','הגשה',yt('8Fe0RkiWvkw')],
 ['oncamera','אל תתרבו בנובמבר','כאן דיגיטל','לילדי החופש הגדול יש עניין לא פתור עם יום ההולדת שלהם, אז מצאנו להם פתרון אלטרנטיבי.','הגשה|כתיבה|קונספט',yt('7bj1FphLXR4')],
 ['oncamera','מה הסיפור של באג 2000?','כאן דיגיטל','זה אמור היה להיות האסון הכי גדול שידעה האנושות. או אולי יריית פתיחה מטורפת לעידן הפייק ניוז?','בימוי|כתיבה|תחקיר|הגשה',yt('5-gH_q7OWbU')],
 ['oncamera','מי מפחד מהמפלצת הירושלמית?','כאן דיגיטל','צבועה שחור לבן, עם חלל שמזכיר רחם ו-3 מגלשות אדומות תלולות. הכירו את המפלצת, זאת שלכל ירושלמי יש זיכרון ממנה.','הגשה|תחקיר',yt('2EUEoh2fywM')],
 ['oncamera','למה אנחנו עושים ק*י רק בבית?','כאן דיגיטל','תסמונת ״השירותים הבטוחים״ — למה זה קורה? ומאיפה היא הגיעה?','כתיבה|קונספט|הגשה',yt('PwqSX5168x0')],
 ['audio','25 שנה אחרי, חיים צינוביץ׳ חוזר לשרוף','כאן גימל','פרויקט השרוף היה ״הפיגוע התרבותי הגדול בישראל״ והוא טמן בתוכו המון זעם ותסכול. רבע מאה ו-EP אחרי, צינוביץ׳ יושב לשיחה.','הגשה|כתיבה|תחקיר|הפקה',{embed:'https://open.spotify.com/embed/episode/68VsX7Rmlx4GBbswowqpzL',url:'https://open.spotify.com/episode/68VsX7Rmlx4GBbswowqpzL',audio:'ספוטיפיי'}],
 ['audio','בחזרה לנובה','כאן 88','מסע זיכרון מוזיקלי בין הסיפורים שקרעו את הלב, למוזיקה שמעט מאחה אותו. פרויקט חיבוק לשבט הטראנס הכאוב (נובמבר 2023).','הגשה|תחקיר|עריכה מוזיקלית',{embed:'https://omny.fm/shows/mizadimandmarathons88/61dd2fe8-7342-472d-bcfb-b0b800f9c82d/embed?media=Audio&size=Square',url:'https://omny.fm/shows/mizadimandmarathons88/61dd2fe8-7342-472d-bcfb-b0b800f9c82d',audio:'Omny'}],
 ['audio','עכשיו אתה מדבר','כאן הסכתים','בין ציפיות החברה לדרישות האבולוציה; בין הכוח והתחרות לרגישות ולחרדות; בין הדימוי לשקר. אורי לביא והפסיכולוג ד״ר גבריאל בוקובזה ז״ל מדברים בפתיחות על הנושא שגברים הכי פחות מדברים עליו — גברים.','הגשה|כתיבה',{embed:'https://open.spotify.com/embed/show/13dElT81nLEUlsX9FgPStN',url:'https://open.spotify.com/show/13dElT81nLEUlsX9FgPStN',audio:'ספוטיפיי'}],
 ['promo','מונדיאל 2026 ישודר כאן!','כאן דיגיטל','','בימוי',yt('s7zHZhwwa4k')],
 ['promo','חדש: קומדי BOX!','כאן דיגיטל','','בימוי',yt('XrSV1HlLrpw')],
 ['promo','אורי גבריאל מציג: תסכית הכוורת','כאן דיגיטל','','בימוי',yt('SmJgRgJIQyE')],
 ['promo','לך תזכור, הסכת על השואה מהרגע שהסתיימה','כאן דיגיטל','','בימוי',yt('KPQhVAbs-ug')],
 ['promo','חברת מוריה: סיכום פעילות שנת 2025','חברת מוריה','','בימוי',yt('7xqLVI5d7aQ')]
].map((r,i)=>({i,k:r[0],t:r[1],c:r[2],d:r[3],roles:r[4].split('|'),m:r[5]}));
const ENT=[
['Instagram Blocked Rotem','So she set out on a philosophical journey in search of her authentic identity.'],
['An Exercise in Connection: Two Mothers of Hostages Sit Down to Talk','2 mothers. 2 hostages. 2 approaches. One worry. (Filmed during the hostage-deal negotiations, February 2024)'],
['The Story of Solica the Righteous','Lalla Solica was a young Jewish woman accused of renouncing Islam in 19th-century Morocco. Even when she was sentenced to death, she refused to abandon her Judaism. Sol, a legend that really happened.'],
['One House in Khan Younis','A special 18-day documentary project in one house, following the people of the war while they’re not fighting. Khan Younis “Big Brother”, if you will.'],
['Oketz Says Goodbye to Taiga','Taiga was the last Israeli dog of the Oketz unit. On his final mission he exposed terrorists and saved lives, moments before he was killed. A farewell to a hero.'],
['Forever Yellow and Black: A Special Memorial Project','3 murdered. 3 stories. One love.'],
['The Jewish Priest','He trained for the priesthood after the Holocaust, rose high and was even in contact with the Pope, but he never forgot the blood running through his veins. The story of the Jewish priest from Jaffa.'],
['20 Years Since the 5-0 Over Austria','A reunion of the stars of one of the greatest performances in the history of Israel’s national football team.'],
['An Exercise in Connection: A Haredi Man and a Reservist','On one side, a reservist from the religious-Zionist community; on the other, a Haredi man who is a former combat soldier himself. On the draft, on Judaism and on the people of Israel.'],
['Kan Oraita: The Day of Remembrance Is Rosh Hashanah','Long before the phrase took on its sad Zionist meaning, the Day of Remembrance was actually humanity’s birthday.'],
['Moran Atias Is Fed Up With Women’s Organizations’ Hypocrisy After October 7','Moran Atias cries out to the hypocritical hearts of women’s organizations around the world after the atrocities of October 7.'],
['Hanna Azoulay Hasfari Speaks to the Moroccan People. In Moroccan.','Hanna Azoulay Hasfari addresses the Moroccan people in their own language, telling the story of October 7 from an angle they probably haven’t heard yet.'],
['Men’s Day','What does a job interview look like in an upside-down world?'],
['A Farewell Party for 2023: The Year That Wouldn’t Leave','December 31st. 2023, the year that brought us the protests and the war, is about to end, but 2024 refuses to come out. And what does 1973 have to say about it? A party of years.'],
['Thoughts: A Massage in Wartime','Ruth feels a little uneasy enjoying a massage during the war, but the voucher expires in two days.'],
['Rewriting the Ten Plagues','Like everything else, the Ten Plagues of Egypt need a refresh (or not).'],
['The Intervention','The office crew agreed to stop ordering food, but Michael didn’t keep his promise.'],
['What’s the Story of Eliezer Ben-Yehuda?','How far did the man who revived Hebrew go for his vision?'],
['How Did the Japanese Shape Mizrahi Music in Israel?','An amazing technological revolution on one side of the world led to an equally amazing social and cultural revolution on the other.'],
['Don’t Breed in November','Kids born over the summer break have unfinished business with their birthdays, so we found them an alternative.'],
['What’s the Story of the Y2K Bug?','It was supposed to be the biggest disaster humanity had ever known. Or maybe a crazy opening shot for the age of fake news?'],
['Who’s Afraid of the Jerusalem Monster?','Painted black and white, with a hollow that looks like a womb and 3 steep red slides. Meet the Monster, the one every Jerusalemite has a memory of.'],
['Why Do We Only P**p at Home?','“Safe toilet” syndrome: why does it happen? And where did it come from?'],
['25 Years Later, Haim Tzinovitz Burns Again','The HaSaruf project was “the biggest cultural attack in Israel,” and it carried a lot of anger and frustration. A quarter of a century and an EP later, Tzinovitz sits down to talk.'],
['Back to Nova','A musical memory journey between the stories that tore our hearts apart and the music that mends them a little. A hug for the grieving trance tribe (November 2023).'],
['Now You’re Talking','Between society’s expectations and the demands of evolution; between power and competition and sensitivity and anxiety; between image and lies. Orry Lavie and the late psychologist Dr. Gabriel Bukobza talk openly about the subject men talk about least: men.'],
['The 2026 World Cup Is Coming to Kan!',''],
['New: Comedy BOX!',''],
['Uri Gavriel Presents: The Hive, a Radio Drama',''],
['Go Remember: A Podcast About the Holocaust From the Moment It Ended',''],
['Moriah Company: 2025 Year in Review','']
];
const loc=w=>lang==='en'?{t:ENT[w.i][0],d:ENT[w.i][1],c:w.c.split(' | ').map(x=>CLIENT[x]||x).join(' | '),roles:w.roles.map(r=>ROLE[r]||r)}:w;
const CASES=[3,4,5];
/* thumbnails per YouTube id: images/thumbs/<name>-480|960.webp (+ .jpg fallback) */
const THUMBS={'dPL7OrazVGw':'rotem','D3igZF82xqc':'mothers','26YPxgVhWHA':'solica','dgCvfAUChp8':'khanyunis2','H4aGqiXSyHM':'taiga','A8Bx1oX_Tls':'beitar','ECtKswTCMog':'priest','SDehhNoGnCc':'austria','3DyWmEZj5ww':'haredi','SWNimXa5VVQ':'oraita','HDm-RX-XSmU':'moran','bPlpKjMCzfw':'hanna','Y2JkuJQf6wQ':'mensday','ASVu9JXJBBc':'benyehuda','7bj1FphLXR4':'november','SmJgRgJIQyE':'hive','s7zHZhwwa4k':'mundial','tw7QVt88N44':'farewell','2F-gCksMRdY':'massage3','d8nl7FoIrKs':'plagues','ODbxRt-jGAk':'intervention','8Fe0RkiWvkw':'japanese','5-gH_q7OWbU':'y2k','2EUEoh2fywM':'monster','PwqSX5168x0':'home2','XrSV1HlLrpw':'comedybox','KPQhVAbs-ug':'remember2','7xqLVI5d7aQ':'moriah','https://open.spotify.com/episode/68VsX7Rmlx4GBbswowqpzL':'tzinovitz','https://omny.fm/shows/mizadimandmarathons88/61dd2fe8-7342-472d-bcfb-b0b800f9c82d':'nova','https://open.spotify.com/show/13dElT81nLEUlsX9FgPStN':'nowtalking'};
const BASE=lang==='en'?'../':'';
const vid=w=>(w.m.url.match(/v=([\w-]+)/)||[])[1]||w.m.url;
const thumb=(w,t)=>{const n=THUMBS[vid(w)];if(!n)return '';const p=BASE+'images/thumbs/'+n;
  return '<picture class="thumb"><source type="image/webp" srcset="'+p+'-480.webp 480w, '+p+'-960.webp 960w" sizes="(max-width: 600px) 92vw, (max-width: 860px) 46vw, 400px"><img src="'+p+'-480.jpg" srcset="'+p+'-480.jpg 480w, '+p+'-960.jpg 960w" sizes="(max-width: 600px) 92vw, (max-width: 860px) 46vw, 400px" alt="'+esc(t)+'" width="480" height="300" loading="lazy" decoding="async" onerror="var c=this.closest(\'.card\');c&&c.classList.remove(\'has-thumb\');this.parentNode.remove()"></picture>'};
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const FW=()=>L('←','→');
let canEmbed=false;try{canEmbed=window.top===window.self}catch(e){}
const store=(k,v)=>{try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}};
const CK='olam-consent';
let consent=store(CK);
const cc=document.getElementById('cc');
if(!consent)cc.hidden=false;
document.addEventListener('click',e=>{
  const c=e.target.closest('[data-cc]');
  if(c){consent=c.dataset.cc;store(CK,consent);cc.hidden=true;if(document.body.classList.contains('open')&&seq.length)show();return}
  if(e.target.closest('[data-cc-open]')){cc.hidden=false;cc.querySelector('button').focus();return}
  const p=e.target.closest('[data-policy]');
  if(p){e.preventDefault();openPolicy(p.dataset.policy==='a11y'?'a11y':'privacy')}
});

const roll=document.getElementById('roll');
function renderRoll(){roll.innerHTML=Array(2).fill(L(['בימוי','תסריט','קריאייטיב','הגשה','סושיאל','אסטרטגיה','דוקו','מערכונים','אקספליינרים','פרומו','פודקאסטים'],['Directing','Screenwriting','Creative','Presenting','Social','Strategy','Docu','Sketches','Explainers','Promo','Podcasts'])).flat().map(s=>'<span>'+s+'</span>').join('')}

const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -12% 0px',threshold:.08}):null;
function watch(els){els.forEach(el=>io?io.observe(el):el.classList.add('in'))}
watch(document.querySelectorAll('.rv,.rvp'));
const motion=document.documentElement.classList.contains('motion'),secs=[...document.querySelectorAll('.sec')],heroWrap=document.querySelector('.hero .wrap');
const prog=document.getElementById('prog'),frameEl=document.querySelector('.frame'),strip=document.querySelector('.strip div');
let ticking=false,lastY=scrollY,skew=0;
function fx(){
  ticking=false;
  const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;
  prog.style.transform='scaleX('+(max>0?y/max:0)+')';
  if(motion){
    const H=innerHeight;
    heroWrap.style.setProperty('--h',innerWidth<=760?'0':Math.min(1,Math.max(0,y/(H*.9))).toFixed(3)); /* stacked phone layout: don't fade the photo away */
    secs.forEach(el=>{const r=el.getBoundingClientRect();
      const p=Math.min(1,Math.max(0,(H-r.top)/(H*.55)));
      const q=Math.min(1,Math.max(0,(-r.bottom+H*.35)/(H*.5)));
      el.style.setProperty('--p',p.toFixed(3));el.style.setProperty('--q',q.toFixed(3))});
  }
  if(motion){
    const sg=lang==='en'?-1:1;
    if(innerWidth<=600)frameEl.style.transform='';else if(y<innerHeight*1.2)frameEl.style.transform='translateY('+(y*.18)+'px) rotate('+sg*(2.5+y*.012)+'deg)';
    const v=Math.max(-12,Math.min(12,(y-lastY)*.25));skew+=(v-skew)*.3;
    strip.style.transform='skewX('+(sg*skew).toFixed(2)+'deg)';
    if(Math.abs(skew)>.05)req();
  }
  lastY=y;
}
function req(){if(!ticking){ticking=true;requestAnimationFrame(fx)}}
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);
/* hero background video: always autoplays (muted, inline); pause button for anyone who wants it still */
const hv=document.getElementById('heroVideo'),heroSec=document.querySelector('.hero'),vt=document.getElementById('vidToggle');
let userPaused=false,heroVisible=true;
function syncBtn(){const p=hv.paused;vt.firstElementChild.textContent=p?'▶':'❚❚';vt.setAttribute('aria-label',p?L('הפעלת סרטון הרקע','Play background video'):L('השהיית סרטון הרקע','Pause background video'))}
function tryPlay(){if(userPaused||!heroVisible||!hv.paused)return;const p=hv.play();if(p&&p.catch)p.catch(()=>{})}
if(hv&&hv.dataset.src){
  /* iOS/Android only autoplay when these are set before the source loads */
  hv.muted=true;hv.defaultMuted=true;hv.playsInline=true;
  hv.setAttribute('muted','');hv.setAttribute('playsinline','');hv.setAttribute('webkit-playsinline','');
  if(hv.dataset.poster)hv.poster=(innerWidth<=760&&hv.dataset.posterSm)?hv.dataset.posterSm:hv.dataset.poster;
  hv.preload='auto';
  hv.src=(innerWidth<=760&&hv.dataset.srcSm)?hv.dataset.srcSm:hv.dataset.src;
  heroSec.classList.add('has-video');vt.hidden=false; /* poster shows right away, video takes over when it plays */
  hv.load();tryPlay();
  ['loadeddata','canplay'].forEach(ev=>hv.addEventListener(ev,tryPlay));
  /* if the phone blocked autoplay (e.g. Low Power Mode), start on the first touch or scroll */
  const kick=()=>{tryPlay();if(!hv.paused)['touchstart','pointerdown','scroll','keydown'].forEach(ev=>removeEventListener(ev,kick))};
  ['touchstart','pointerdown','scroll','keydown'].forEach(ev=>addEventListener(ev,kick,{passive:true}));
  hv.addEventListener('play',syncBtn);hv.addEventListener('pause',syncBtn);syncBtn();
  vt.addEventListener('click',()=>{if(hv.paused){userPaused=false;tryPlay()}else{userPaused=true;hv.pause()}});
  if('IntersectionObserver' in window)new IntersectionObserver(es=>es.forEach(e=>{heroVisible=e.isIntersecting;if(heroVisible)tryPlay();else hv.pause()})).observe(heroSec);
}
let lenis=null;
if(motion&&window.Lenis){
  try{
    lenis=new Lenis({lerp:.085,wheelMultiplier:1,smoothWheel:true,autoRaf:true,prevent:n=>!!(n.closest&&n.closest('.panel,.cc,#nav.open'))});
    lenis.on('scroll',req);
    document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||a.hasAttribute('data-policy')||a.hasAttribute('data-skip'))return;const id=a.getAttribute('href').slice(1);const t=id&&document.getElementById(id);if(!t)return;e.preventDefault();lenis.scrollTo(id==='top'?0:Math.max(0,t.getBoundingClientRect().top+scrollY-document.querySelector('.bar').offsetHeight-8),{duration:1.4})});
  }catch(e){lenis=null}
}

let filter='all',list=W,showAll=false;
const moreBtn=document.getElementById('moreBtn');
const LIMIT=()=>innerWidth<=600?6:innerWidth<=860?8:9;
const chips=document.getElementById('chips'),grid=document.getElementById('grid');
function renderChips(){
  const data=[['all',L('הכל','All'),W.length]].concat(Object.keys(KINDS).map(k=>[k,K(k),W.filter(w=>w.k===k).length]));
  chips.innerHTML=data.map(c=>'<button class="chip" data-f="'+c[0]+'" aria-pressed="'+(c[0]===filter)+'">'+c[1]+'<small>'+c[2]+'</small></button>').join('');
}
function render(){
  list=filter==='all'?allOrder():W.filter(w=>w.k===filter);
  const vis=showAll||list.length<=LIMIT()+2?list:list.slice(0,LIMIT());
  moreBtn.hidden=vis.length===list.length;
  moreBtn.textContent=L('הצגת כל העבודות','Show all work')+' ('+list.length+') ↓';
  grid.innerHTML=vis.map((w,n)=>{const x=loc(w);return '<div role="button" tabindex="0" class="card rv k-'+w.k+(THUMBS[vid(w)]?' has-thumb':'')+'" style="--d:'+((n%3)*.08)+'s" data-i="'+w.i+'" data-href="'+esc(w.m.url)+'"><div class="shot">'+thumb(w,x.t)+''+(w.k==='audio'?'':'<span class="play" aria-hidden="true">▶</span>')+''+(w.k==='audio'?'<span class="aud" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg></span>':'')+'<h3>'+esc(x.t)+'</h3></div><div class="meta"><b>'+esc(x.c)+'</b><span>'+esc(x.roles.join(' | '))+'</span></div></div>'}).join('');
  watch(grid.querySelectorAll('.rv'));
}
chips.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;filter=b.dataset.f;showAll=false;b.scrollIntoView({block:'nearest',inline:'nearest',behavior:'smooth'});chips.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));render()});
grid.addEventListener('click',e=>{const b=e.target.closest('.card');if(b){e.preventDefault();open(+b.dataset.i,list)}});
grid.addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const b=e.target.closest('.card');if(b){e.preventDefault();open(+b.dataset.i,list)}});
moreBtn.addEventListener('click',()=>{const n=grid.children.length;showAll=true;render();const c=grid.children[n];if(c)c.focus({preventScroll:true})});

const caseList=document.getElementById('caseList');
function renderCases(){
  if(!caseList)return;
  const was=caseList.querySelector('.in')!==null;
  caseList.innerHTML=CASES.map((i,n)=>{const w=W[i],x=loc(w);return '<button type="button" class="case rv'+(was?' in':'')+'" style="--d:'+(n*.1)+'s" data-i="'+i+'" data-href="'+esc(w.m.url)+'"><div><div class="who">'+esc(x.c)+'</div><h3>'+esc(x.t)+'</h3></div><p>'+esc(x.d)+'</p><span class="go" aria-hidden="true">'+FW()+'</span></button>'}).join('');
  if(!was)watch(caseList.querySelectorAll('.rv'));
}
if(caseList)caseList.addEventListener('click',e=>{const b=e.target.closest('.case');if(b){e.preventDefault();open(+b.dataset.i,CASES.map(i=>W[i]))}});

const panel=document.getElementById('panel'),pBody=document.getElementById('pBody'),pCount=document.getElementById('pCount');
let seq=[],pos=0,lastFocus=null,policyOpen=false;
function open(i,s){seq=s;pos=s.findIndex(w=>w.i===i);if(!document.body.classList.contains('open'))lastFocus=document.activeElement;show()}
function iframe(w){return '<iframe src="'+esc(w.m.embed)+'" title="'+esc(loc(w).t)+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>'}
function show(){
  policyOpen=false;
  const w=seq[pos],x=loc(w),nxt=seq[(pos+1)%seq.length],isA=w.k==='audio';
  const raw=isA?w.m.audio:'YouTube',svcEn=raw==='ספוטיפיי'?'Spotify':raw,svc={YouTube:'יוטיוב',Omny:'אומני'}[raw]||raw;
  const watchTxt=isA?L('להאזנה ב'+svc,'Listen on '+svcEn):L('לצפייה ביוטיוב','Watch on YouTube');
  /* a click on a project = choosing to watch it: load and start the player right away */
  const media=canEmbed
    ?iframe(w)
    :'<div><p style="margin-bottom:16px;font-weight:600">'+K(w.k)+'</p><a href="'+esc(w.m.url)+'" target="_blank" rel="noopener">'+watchTxt+' '+FW()+'</a></div>';
  pBody.innerHTML='<div class="p-media'+(isA&&canEmbed?' sq':'')+'" style="--c:var(--c'+({doco:1,scripted:2,oncamera:3,audio:4,promo:1}[w.k])+');color:'+(w.k==='scripted'?'#1c1504':'#fff')+'">'+media+'</div>'
   +'<div class="p-who">'+esc(x.c)+'</div><h3 id="pTitle">'+esc(x.t)+'</h3>'
   +(x.d?'<p class="d">'+esc(x.d)+'</p>':'')
   +'<div class="p-role">'+x.roles.map(r=>'<span>'+esc(r)+'</span>').join('')+'</div>'
   +(canEmbed?'<a href="'+esc(w.m.url)+'" target="_blank" rel="noopener" style="color:var(--soft);font-weight:600">'+watchTxt+' ↗</a>':'')
   +(seq.length>1?'<button class="btn p-next" id="pNext">'+L('הפרויקט הבא: ','Next project: ')+esc(loc(nxt).t)+' '+FW()+'</button>':'');
  pCount.textContent=seq.length>1?(pos+1)+' / '+seq.length:'';
  document.body.classList.add('open');panel.setAttribute('aria-hidden','false');panel.scrollTop=0;if(lenis)lenis.stop();
  document.getElementById('pClose').focus({preventScroll:true});
}
function close(){if(lenis)lenis.start();policyOpen=false;document.body.classList.remove('open');panel.setAttribute('aria-hidden','true');setTimeout(()=>{if(!document.body.classList.contains('open'))pBody.innerHTML=''},450);if(lastFocus)lastFocus.focus({preventScroll:true})}
panel.addEventListener('click',e=>{
  if(e.target.closest('#pNext')){pos=(pos+1)%seq.length;show()}
  const l=e.target.closest('#loadOne');
  if(l){const w=seq[pos],box=l.closest('.p-media');box.innerHTML=iframe(w);if(w.k==='audio')box.classList.add('sq')}
});
const DOCS={privacy:['policyTpl','policyTplEn'],a11y:['a11yTpl','a11yTplEn']},HASH={privacy:'#privacy',a11y:'#accessibility'};
function openPolicy(name){name=DOCS[name]?name:'privacy';
  if(!document.body.classList.contains('open'))lastFocus=document.activeElement;
  policyOpen=true;seq=[];if(lenis)lenis.stop();pBody.innerHTML=document.getElementById(L(DOCS[name][0],DOCS[name][1])).innerHTML;pCount.textContent='';
  document.body.classList.add('open');panel.setAttribute('aria-hidden','false');panel.scrollTop=0;
  document.getElementById('pClose').focus({preventScroll:true});
}
const hashDoc=()=>Object.keys(HASH).find(k=>HASH[k]===location.hash);
window.addEventListener('hashchange',()=>{const d=hashDoc();if(d)openPolicy(d)});
document.getElementById('pClose').addEventListener('click',close);
document.getElementById('scrim').addEventListener('click',close);
document.addEventListener('keydown',e=>{
  if(!document.body.classList.contains('open'))return;
  if(e.key==='Escape')close();
  if(e.key==='Tab'){const f=panel.querySelectorAll('button,a[href],iframe');if(!f.length)return;const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
});

const btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>{const o=!nav.classList.contains('open');nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});

/* Google Apps Script web-app URL (…/exec). Empty = fall back to preparing an email. */
const FORM_ENDPOINT='https://script.google.com/macros/s/AKfycbyiDnswH5J2Jc3Q-DfONWTghVV0yZINmLebGmukkfLzlf8GcM1N-GJukMe-7IbABz80/exec';
const form=document.getElementById('form'),sent=document.getElementById('sent');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const v=id=>document.getElementById(id).value.trim();
  const sel=id=>{const s=document.getElementById(id);return s.options[s.selectedIndex].textContent};
  const need=[['f-name',L('שם','Name')],['f-mail',L('מייל','Email')],['f-tel',L('טלפון','Phone')],['f-msg',L('ספרו לי על הפרויקט','Tell me about the project')]].filter(([id])=>!v(id)||(id==='f-mail'&&!/^\S+@\S+\.\S+$/.test(v(id)))||(id==='f-tel'&&!/^\+?\d{9,15}$/.test(v(id).replace(/[\s\-().]/g,''))));
  if(!document.getElementById('f-ok').checked)need.push(['f-ok',L('אישור מדיניות הפרטיות','agreeing to the privacy policy')]);
  sent.hidden=false;
  if(need.length){sent.innerHTML='<p>'+L('רגע, חסר משהו: ','Hold on, something’s missing: ')+need.map(n=>n[1]).join(', ')+'.</p>';document.getElementById(need[0][0]).focus();return}
  if(document.getElementById('f-web').value){sent.innerHTML='<p><b>'+L('תודה!','Thanks!')+'</b></p>';form.reset();return}
  const showDraft=failed=>{
  const body=L('שם','Name')+': '+v('f-name')+'\n'+L('מייל','Email')+': '+v('f-mail')+'\n'+L('טלפון','Phone')+': '+v('f-tel')+'\n'+L('חברה / מותג','Company / brand')+': '+(v('f-co')||'—')+'\n'+L('סוג הפרויקט','Project type')+': '+sel('f-type')+'\n\n'+v('f-msg');
  const href='mailto:orry.lavie@gmail.com?subject='+encodeURIComponent(L('פרויקט חדש: ','New project: ')+sel('f-type')+' — '+v('f-name'))+'&body='+encodeURIComponent(body);
  sent.innerHTML='<p><b>'+(failed?L('אופס, השליחה לא עברה.','Oops, that didn’t go through.'):L('יאללה, כמעט שם.','Almost there.'))+'</b> '+L('ההודעה מוכנה. אפשר לפתוח אותה באפליקציית המייל, או להעתיק ולשלוח ל-','Your message is ready. Open it in your email app, or copy it and send it to ')+'<span dir="ltr">orry.lavie@gmail.com</span>.</p><div class="row"><a class="btn hot" href="'+href+'">'+L('פתיחה במייל','Open in email')+' '+FW()+'</a><button type="button" class="btn" id="copyBtn">'+L('העתקת ההודעה','Copy the message')+'</button></div>';
  document.getElementById('copyBtn').addEventListener('click',ev=>{
    navigator.clipboard.writeText(body).then(()=>{ev.target.textContent=L('הועתק ✓','Copied ✓')},()=>{ev.target.textContent=L('לא הצלחתי להעתיק','Couldn’t copy')})
  });
  };
  if(!FORM_ENDPOINT){showDraft(false);return}
  const btn=form.querySelector('[type=submit]'),btnTxt=btn.innerHTML;
  btn.disabled=true;btn.textContent=L('שולח…','Sending…');sent.innerHTML='<p>'+L('שולח…','Sending…')+'</p>';
  const data=new URLSearchParams({name:v('f-name'),email:v('f-mail'),phone:v('f-tel'),company:v('f-co'),type:sel('f-type'),message:v('f-msg'),lang:lang});
  fetch(FORM_ENDPOINT,{method:'POST',mode:'no-cors',body:data}).then(()=>{
    form.reset();sent.innerHTML='<p><b>'+L('תודה, קיבלתי!','Thanks, got it!')+'</b> '+L('אחזור אליך בהקדם.','I’ll get back to you soon.')+'</p>';
  },()=>showDraft(true)).finally(()=>{btn.disabled=false;btn.innerHTML=btnTxt});
});

/* language: each language is its own page (/ and /en/) */
if(location.protocol==='file:'||/claudeusercontent|claude\.ai/.test(location.hostname))document.querySelectorAll('a[hreflang]').forEach(a=>{const h=a.getAttribute('href');if(h.endsWith('/'))a.setAttribute('href',h+'index.html')});
document.querySelectorAll('.arr').forEach(a=>a.textContent=FW());
renderRoll();renderChips();render();renderCases();
{const d=hashDoc();if(d)openPolicy(d)}
fx();
}

/* skip link: move focus into the main content */
document.addEventListener('click',e=>{const k=e.target.closest('[data-skip]');if(!k)return;e.preventDefault();const m=document.querySelector('main');m.setAttribute('tabindex','-1');m.style.outline='none';m.focus();scrollTo(0,0)});

/* contact background video: loads when the section comes near, plays only while visible */
{const L=(h,e)=>document.documentElement.lang==='en'?e:h,cv=document.getElementById('contactVideo'),cs=document.getElementById('contact'),ct=document.getElementById('contactVidToggle');
if(cv&&cv.dataset.src&&cs&&ct&&'IntersectionObserver' in window){
  let loaded=false,paused=false,vis=false;
  const sync=()=>{const p=cv.paused;ct.firstElementChild.textContent=p?'▶':'❚❚';ct.setAttribute('aria-label',p?L('הפעלת סרטון הרקע','Play background video'):L('השהיית סרטון הרקע','Pause background video'))};
  const play=()=>{if(paused||!vis||!cv.paused)return;const p=cv.play();if(p&&p.catch)p.catch(()=>{})};
  const load=()=>{if(loaded)return;loaded=true;cv.muted=true;cv.defaultMuted=true;cv.playsInline=true;cv.setAttribute('muted','');cv.setAttribute('playsinline','');
    if(cv.dataset.poster)cv.poster=cv.dataset.poster;cv.preload='auto';cv.src=(innerWidth<=760&&cv.dataset.srcSm)?cv.dataset.srcSm:cv.dataset.src;
    cs.classList.add('has-video');ct.hidden=false;cv.load();['loadeddata','canplay'].forEach(ev=>cv.addEventListener(ev,play))};
  const near=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){load();near.disconnect()}},{rootMargin:'600px 0px'});near.observe(cs);
  new IntersectionObserver(es=>es.forEach(e=>{vis=e.isIntersecting;if(vis)play();else cv.pause()})).observe(cs);
  cv.addEventListener('play',sync);cv.addEventListener('pause',sync);sync();
  ct.addEventListener('click',()=>{if(cv.paused){paused=false;play()}else{paused=true;cv.pause()}});
}}
