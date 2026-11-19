import { motion } from 'framer-motion';
const moods={neutral:['•','smile'],happy:['⌣','happy'],shocked:['○','oh'],angry:['ಠ','flat'],pout:['¬','pout']};
export default function Blossom({mood='neutral'}){
 const [eyes,mouth]=moods[mood]||moods.neutral;
 return <motion.div className="blossom-wrap" animate={mood==='angry'?{rotate:[-3,3,-3,0],y:[0,-3,0]}:{y:[0,-7,0],rotate:[0,2,0]}} transition={{duration:mood==='angry'?.45:3.2,repeat:Infinity,ease:'easeInOut'}}>
  <div className="flower-shadow"/><div className="flower-head">{Array.from({length:8},(_,i)=><span className="petal" key={i} style={{transform:`translate(-50%,-50%) rotate(${i*45}deg) translateY(-37px)`}}/>)}
   <div className="flower-center"><div className={`face ${mood}`}><span className="eye left">{eyes}</span><span className="eye right">{eyes}</span>{!['shocked','angry'].includes(mood)&&<><i className="blush left-blush"/><i className="blush right-blush"/></>}<span className={`mouth ${mouth}`}/></div></div>
  </div><div className="leaf leaf-left"/><div className="leaf leaf-right"/><motion.span className="blossom-sparkle sparkle-one" animate={{scale:[.7,1.2,.7],rotate:[0,25,0]}} transition={{duration:2,repeat:Infinity}}>✦</motion.span><motion.span className="blossom-sparkle sparkle-two" animate={{scale:[1,.7,1],rotate:[0,-25,0]}} transition={{duration:2.4,repeat:Infinity}}>✧</motion.span>
 </motion.div>
}
