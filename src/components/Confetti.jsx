import {motion} from 'framer-motion';
const pieces=Array.from({length:44},(_,i)=>({id:i,left:`${(i*37)%100}%`,delay:(i%11)*.12,duration:3.4+(i%5)*.45,rotate:(i*53)%360,color:['#f28bbd','#b7a2ef','#ffd2e5','#f5c96d','#a8d9c5'][i%5]}));
export default function Confetti(){return <div className="confetti-layer" aria-hidden="true">{pieces.map(p=><motion.i key={p.id} style={{left:p.left,background:p.color}} initial={{y:-30,opacity:0,rotate:p.rotate}} animate={{y:'110vh',opacity:[0,1,1,0],rotate:p.rotate+480}} transition={{duration:p.duration,delay:p.delay,repeat:Infinity,ease:'linear'}}/>)}</div>}
