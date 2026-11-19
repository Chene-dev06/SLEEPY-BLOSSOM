import {useEffect,useRef,useState} from 'react';
import './App.css';
import {AnimatePresence,motion} from 'framer-motion';
import {Heart,Music2,Volume2,VolumeX,Sparkles,Flower2,ArrowRight,RotateCcw} from 'lucide-react';
import Blossom from './components/Blossom';
import Confetti from './components/Confetti';

const reactions=[
 {mood:'shocked',text:'Ohh Really?'},
 {mood:'angry',text:'Mr.Claude told me that u are always ready and excited 🙄'},
 {mood:'pout',text:"Choose YES or I'm going to kiss u 😒"}
];
const birthdayMessage=`Happy birthday Amina ❤️❤️

It's my first birthday with u hhhh maybe it's weird but u deserve it .
So koul 3am w nti b 10000 khir , I wish u all the best and the infinite happiness in ur life dear , enjoy Ur journey tomorrow it's ur day 🥳🌸.

To be honest u are a really beautiful and cute person with pure soul and hot voice and smile that makes me melt hhhhh 😂🫠 .

Always stay positive even when u feel alone or facing big problems ( u won't be alone 😁) believe me there's always a solution u have a marvellous energy so don't waste it on stupid things, inchallah tkouni happy fi had nhare. May this new chapter bring u everything ur beautiful heart wishes for 🌸❤️`;
function FloatingDecor(){return <div className="floating-decor" aria-hidden="true"><span className="decor d1">♡</span><span className="decor d2">✿</span><span className="decor d3">✧</span><span className="decor d4">♡</span><span className="decor d5">✦</span><span className="decor d6">❀</span><span className="decor d7">·</span><span className="decor d8">♡</span></div>}
export default function App(){
 const [page,setPage]=useState('welcome'),[noCount,setNoCount]=useState(0),[mood,setMood]=useState('neutral'),[reaction,setReaction]=useState(''),[musicOn,setMusicOn]=useState(false),[letterOpen,setLetterOpen]=useState(false);
 const audioRef=useRef(null);
 const handleNo=()=>{const n=Math.min(noCount+1,3);setNoCount(n);setMood(reactions[n-1].mood);setReaction(reactions[n-1].text)};
 const handleYes=async()=>{setMood('happy');setReaction('');setPage('letter');setMusicOn(true);try{if(audioRef.current){audioRef.current.volume=.42;await audioRef.current.play()}}catch{setMusicOn(false)}};
 const toggleMusic=async()=>{if(!audioRef.current)return;if(musicOn){audioRef.current.pause();setMusicOn(false)}else{try{audioRef.current.volume=.42;await audioRef.current.play();setMusicOn(true)}catch{setMusicOn(false)}}};
 useEffect(()=>{if(page==='letter'&&audioRef.current&&musicOn)audioRef.current.play().catch(()=>setMusicOn(false))},[page,musicOn]);
 const restart=()=>{audioRef.current?.pause();if(audioRef.current)audioRef.current.currentTime=0;setPage('welcome');setNoCount(0);setMood('neutral');setReaction('');setMusicOn(false);setLetterOpen(false)};
 return <main className="app-shell">
<audio ref={audioRef} src={`${import.meta.env.BASE_URL}calm-instrumental.wav`} loop preload="auto"/>  <FloatingDecor/><div className="top-note"><Flower2 size={15}/> A LITTLE SOMETHING FOR YOU <Heart size={13} fill="currentColor"/></div>
  <AnimatePresence mode="wait">
   {page==='welcome'?<motion.section className="welcome-screen" key="welcome" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.96}} transition={{duration:.55}}>
    <div className="welcome-card"><div className="tiny-label"><Sparkles size={13}/> YOUR SPECIAL DAY IS CALLING <Sparkles size={13}/></div>
     <Blossom mood={mood}/><motion.div className="speech-bubble" key={reaction||'question'} initial={{opacity:0,y:8,scale:.94}} animate={{opacity:1,y:0,scale:1}} transition={{type:'spring',stiffness:250,damping:18}}>{reaction||'Are you ready Sleepy Blossom ?'}</motion.div>
     <p className="welcome-hint">{noCount===0?'Blossom has a little surprise waiting for you…':'Hmm… Blossom is waiting for your answer.'}</p>
     <div className="choice-row"><motion.button className="yes-button" whileHover={{y:-3,scale:1.04}} whileTap={{scale:.96}} onClick={handleYes}>YES <Heart size={17} fill="currentColor"/></motion.button><motion.button className="no-button" whileHover={{y:-3}} whileTap={{scale:.96}} onClick={handleNo}>NO <span>🙈</span></motion.button></div>
     <div className="card-footnote"><span>made with</span><Heart size={12} fill="currentColor"/><span>just for Amina</span></div>
    </div><p className="under-card">psst… the flower is a little dramatic 🌷</p>
   </motion.section>:<motion.section className="letter-screen" key="letter" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:.65}}>
    <Confetti/><div className="celebration-heading"><span className="eyebrow">A LITTLE NOTE FROM THE HEART</span><h1>For you, <em>Amina</em> <span>♡</span></h1><p>One more year of being wonderfully you.</p></div>
    <div className={`letter-card ${letterOpen?'opened':''}`}><div className="letter-topline"><span>✿ &nbsp; A SPECIAL DELIVERY &nbsp; ✿</span><span>NO. 001 ♡</span></div><div className="letter-flower flower-a">✿</div><div className="letter-flower flower-b">✧</div>
     {!letterOpen?<motion.button className="open-letter" onClick={()=>setLetterOpen(true)} whileHover={{scale:1.04}} whileTap={{scale:.97}}><span className="envelope-icon">💌</span><strong>Open your birthday letter</strong><small>There's something I want you to know</small><span className="open-pill">OPEN LETTER <ArrowRight size={14}/></span></motion.button>:
      <motion.div className="letter-content" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.65}}><div className="letter-greeting">To the lovely Amina,</div><div className="message-text">{birthdayMessage.split('\n\n').map((p,i)=><p key={i}>{p}</p>)}</div><div className="signature"><span>With lots of love,</span><strong>🖋️ Mr.Claude (Abderrahmane).</strong></div><div className="letter-bottom-hearts">♡ &nbsp; ✿ &nbsp; ♡</div></motion.div>}
    </div>
    <div className="letter-actions"><button className="music-button" onClick={toggleMusic}>{musicOn?<Volume2 size={16}/>:<VolumeX size={16}/>} {musicOn?'Music on':'Play calm music'}</button><button className="restart-button" onClick={restart}><RotateCcw size={15}/> Replay surprise</button></div>
    <p className="ending-note">May your day be as lovely as your smile. 🌸</p>
   </motion.section>}
  </AnimatePresence>
  <button className="music-fab" onClick={toggleMusic} aria-label={musicOn?'Pause music':'Play music'}>{musicOn?<Music2 size={18}/>:<VolumeX size={18}/>}</button>
  <footer className="site-footer">A tiny world made with ♡ for Amina</footer>
 </main>
}
