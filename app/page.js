'use client';
import { useState } from 'react';

const hero = 'https://www.papermag.com/media-library/image.jpg?coordinates=0%2C446%2C0%2C1554&height=900&id=68452874&quality=70&width=1800';
const story = [
  `“There’s a thing that rings inside of me when I know something is right for me,” Tyla says. “If I don’t have that feeling, then I know it’s not meant to be. And when I have a feeling or a vision and I see it actually happen, it’s like I literally have superpowers.”`,
  `The singer-songwriter and global pop star is calling from her hotel room in New York, where she was still arriving from the airport when we started the call — “it may break up, she’s still in the elevator,” her publicist warned. I am bracing myself for a travel-worn, sparing interviewee, but when Tyla greets me moments later, she’s as ebullient as ever.`,
  `She trills and giggles and growls and jokes, and is exactly in conversation as she is in her music; relaxed, playfully coy, charmingly irreverent, and then suddenly, subtly commanding.`,
  `When we speak, it’s been two months since the release of her sophomore album A*POP, which she celebrated with a party in Los Angeles hosted by PAPER and Kate Spade New York. Tyla refers to A*POP as a “diary entry of everything I felt during that time, everything I wanted to make.”`,
  `“We wanna party” is something we always chant in South Africa, and at that time, that's all I wanted to do,” she explains. “I just wanted to go out and do anything and everything that I wanted to, whether it made sense or not, so that’s what I did.”`,
  `The resulting record is a lush 14-track blend of electronic pop, amapiano, R&B, and percussive Afrobeats that she says honor her inner child and true tastes. With songwriting and executive production credits on every track, there’s a clear progression in the sonic landscape of what she’s coined “African Pop.”`,
  `The 24-year-old South African has spent the last few years becoming one of the most visible and consistent faces from her continent on the global stage. Since her 2023 breakout hit “Water,” she has released two albums and an EP, won two Grammys, two VMAs, two BET Awards, and three American Music Awards.`,
  `When Tyla first appeared on our screens and in our headphones, it did almost feel as though her space in the pop pantheon had been carved out all along. But when Tyla was growing up, there were no such globally successful models to look to.`,
  `“A big thing that I stand by, that we say in South Africa, is that the aim is not to sweat,” she says. “You could be doing the most, but it should look easy, not like you’re doing too much. Everything should just feel like it’s meant to be on your body, and you were meant to do that.”`,
  `“Always lean more into yourself,” she says. “The most potent version of yourself is the coolest version of yourself that you could ever be. Keep learning who you are, and don’t ever get bored of learning more about yourself.”`
];

export default function Page(){
 const [search,setSearch]=useState(false);
 return <main>
  <div className="topbar"><span>PAPER</span><span className="toplinks">SHOP &nbsp;&nbsp; NEWSLETTER &nbsp;&nbsp; SUBSCRIBE</span></div>
  <header><button className="hamb" aria-label="Menu">☰</button><div className="logo">PAPER</div><button className="search" onClick={()=>setSearch(!search)}>⌕</button></header>
  {search && <div className="searchbox"><input autoFocus placeholder="Search PAPER"/><span onClick={()=>setSearch(false)}>×</span></div>}
  <nav className="categories">{['MUSIC','FASHION','BEAUTY','NIGHTLIFE','CELEBRITY','INTERNET','ENTERTAINMENT','ART','CARE','POLITICS'].map(x=><a key={x}>{x}</a>)}</nav>
  <div className="social"><span>f</span><span>𝕏</span><span>◎</span><span>↗</span></div>
  <section className="hero"><img src={hero} alt="Tyla editorial portrait"/><div className="hero-credit">Photography by Sara Pardini</div></section>
  <article>
   <div className="kicker">MUSIC　 FASHION　 CELEBRITY</div><h1>Tyla’s Aim is<br/>Not to Sweat</h1>
   <p className="dek">The global pop star on A*POP, African pop, and staying true to herself.</p>
   <div className="byline">STORY BY BROOK ASTER　 /　 PHOTOGRAPHY BY SARA PARDINI</div>
   {story.map((p,i)=><p key={i} className={i===0?'lead':''}>{p}</p>)}
   <div className="pull">“The most potent version of yourself is the coolest version of yourself that you could ever be.”</div>
   <div className="credits"><b>CREATIVE & EDITORIAL</b><br/>Head of Creative: Brian Calle<br/>Editor-in-Chief: Jordan Bradfield<br/>Fashion Director: Angelina Cantú<br/><br/><b>PRODUCTION</b><br/>Print Design: Composite Co.</div>
  </article>
  <footer><div className="logo">PAPER</div><div>© PAPER COMMUNICATIONS 2026</div><div>INSTAGRAM　 TIKTOK　 CONTACT</div></footer>
 </main>
}
