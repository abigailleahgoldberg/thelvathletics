export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  emoji: string;
  body: string;
}

const affiliateBlock = `
<div class="affiliate-block" style="background:#111009;border:1px solid rgba(239,178,30,0.3);border-radius:8px;padding:24px;margin-top:40px;">
  <div style="font-family:Arial,sans-serif;font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#EFB21E;margin-bottom:12px;">Tickets &amp; Gear</div>
  <p style="font-size:0.9rem;margin-bottom:16px;opacity:0.85;">Find Las Vegas A&apos;s tickets and gear through our affiliate partners. Purchases made through these links support independent coverage at no extra cost to you.</p>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <a href="https://www.stubhub.com/las-vegas-athletics-tickets/?PCID=lvathletics-20" target="_blank" rel="noopener" style="display:inline-block;padding:10px 20px;background:#EFB21E;color:#0A0800;font-family:Arial,sans-serif;font-weight:bold;font-size:0.85rem;border-radius:4px;text-decoration:none;">Find Tickets on StubHub</a>
    <a href="https://www.seatgeek.com/athletics-tickets?aid=lvathletics-20" target="_blank" rel="noopener" style="display:inline-block;padding:10px 20px;background:#003831;color:#FAFAF8;font-family:Arial,sans-serif;font-weight:bold;font-size:0.85rem;border-radius:4px;text-decoration:none;border:1px solid #EFB21E;">Browse on SeatGeek</a>
    <a href="https://www.fanatics.com/mlb/oakland-athletics/o-2793+t-53395338?aff=lvathletics-20" target="_blank" rel="noopener" style="display:inline-block;padding:10px 20px;background:#003831;color:#FAFAF8;font-family:Arial,sans-serif;font-weight:bold;font-size:0.85rem;border-radius:4px;text-decoration:none;border:1px solid #EFB21E;">Shop Gear on Fanatics</a>
  </div>
</div>

<div style="background:#0A1A0F;border:1px solid rgba(239,178,30,0.2);border-radius:8px;padding:24px;margin-top:20px;">
  <div style="font-family:Arial,sans-serif;font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#EFB21E;margin-bottom:14px;">More From The A&apos;s Network</div>
  <p style="font-size:0.85rem;color:rgba(250,250,248,0.7);margin-bottom:14px;">For more A&apos;s coverage across the network:</p>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <a href="https://thelvas.com" style="font-size:0.9rem;color:#EFB21E;text-decoration:none;font-family:Arial,sans-serif;"><strong>TheLVAs.com</strong> — Hot takes, fan culture, and bold predictions on Las Vegas Athletics baseball</a>
    <a href="https://lvathleticsnation.com" style="font-size:0.9rem;color:#EFB21E;text-decoration:none;font-family:Arial,sans-serif;"><strong>LVAthleticsNation.com</strong> — The fan community: tailgate guides, bar scene, and building something new in the desert</a>
  </div>
</div>
`;

const posts: Post[] = [
  {
    slug: "las-vegas-athletics-2026-opening-day-preview",
    title: "Las Vegas Athletics 2026: What to Watch for Opening Day and Beyond",
    description: "Opening Day 2026 is here. A real breakdown of the key players to watch, the storylines that will define this season, and what success actually looks like in Year 1 of the Las Vegas era.",
    date: "March 23, 2026",
    category: "Analysis",
    emoji: "⚾",
    body: `
<h2>Year One. For Real This Time.</h2>
<p>The Sacramento years were the bridge. Opening Day 2026 is the first real chapter of the Las Vegas Athletics era — not the arrival, not the announcement, but the actual season. Eighty-one home games at Sutter Health Park while the Strip stadium rises, yes. But this roster, this staff, this front office — they're being evaluated now. By the time the new ballpark opens in 2028, the question won't be "can Las Vegas support baseball?" It'll be "what did they build while nobody was watching?"</p>

<p>This is what to watch for when that first pitch gets thrown.</p>

<h2>The Player to Watch: Lawrence Butler, Center Field</h2>
<p>Brent Rooker is the name on more tongues, and for good reason — 30 home runs is 30 home runs, and he enters a contract year with something to prove. But the player who could genuinely change what this franchise looks like over the next five years is Lawrence Butler.</p>

<p>The tools were always there. The athleticism is elite. The questions were always about pitch recognition and plate discipline — could he hit advanced velocity, could he lay off the breaking ball down and away, could he get on base at a rate that made the power matter. Spring camp gave real reason to believe those questions are getting answered. His walk rate trended up. His chase rate trended down. If that holds in the regular season, Butler isn't just a nice piece — he's a cornerstone.</p>

<p>Watch him in his first 20 games. That's when we'll know whether 2026 is the year he takes the step or the year we keep waiting for it.</p>

<h2>The Rotation Storyline: Luis Medina's Make-or-Break Season</h2>
<p>JP Sears anchors the rotation and he's a known quantity — reliable, smart, not going to embarrass himself. The wild card that could make this team legitimately interesting is Luis Medina.</p>

<p>The raw stuff is real. A mid-to-upper-90s fastball with arm-side run. A slider that disappears when he locates it. When Medina is locked in, he looks like what you'd build in a lab if you wanted an American League West ace. When he's not, the walks pile up and the damage happens fast. He's shown both versions in every recent season.</p>

<p>This year feels different only because the good version appeared more consistently in spring. "More consistently" is still not consistent enough for a top-of-rotation guy, but it's progress. If Medina posts a 3.40 ERA by the All-Star break, this team is in wild card conversations. If he reverts to 4.80 and unpredictable control, the rotation falls back to average and the season becomes about development rather than results.</p>

<h2>Mason Miller's Health</h2>
<p>The closer is, when healthy, one of the most dominant relievers in the American League. Triple digits, a slider that breaks off the table. The spring reports were the best we've seen — he looked fully right, working multiple consecutive days without issue. If that holds, the back end of this bullpen is a genuine weapon. If the arm issues resurface, the ninth inning becomes a real problem every close game.</p>

<p>There's no way to know this in advance. It's the one variable that could shift this team's ceiling by five or six wins in either direction. Watch his usage patterns in April. If manager Mark Kotsay is using Miller on consecutive nights regularly, that's a sign the training staff is comfortable. If he's being managed carefully, that's its own signal.</p>

<h2>What Success Actually Looks Like in Year 1</h2>
<p>This is not a World Series roster. Anyone telling you otherwise is selling something. But "success" doesn't have to mean October baseball in 2026.</p>

<p>Success looks like finishing above .500 for the first time in several years. It looks like Butler emerging as a legitimate everyday player. It looks like Medina delivering on even half the promise scouts have been projecting. It looks like Zack Gelof at second base continuing to build toward the player the organization believes he can be. It looks like this team being competitive in the division — not winning it, but making teams beat them rather than giving games away.</p>

<p>Most importantly, success looks like Las Vegas fans who bought tickets to Opening Day coming back for the games in May and June, because they watched something that was worth watching. The stadium opens in 2028. The fanbase is being built right now.</p>

<h2>The Matchup Worth Circling: AL West Series Against Seattle</h2>
<p>The Mariners and the Athletics are the most direct comparison in the division right now — similar organizational philosophy, similar budget constraints, both trying to develop their way to competitiveness in a division with at least one team that outspends them significantly. The head-to-head results between Seattle and Las Vegas this year will tell us more about which organization is executing better than any individual player statistic will.</p>

<p>Circle those series. They're the ones where you'll see who this team actually is.</p>
${affiliateBlock}
`,
  },
  {
    slug: "allegiant-stadium-baseball-honest-review",
    title: "Playing Baseball at Allegiant Stadium: The Honest Fan Experience Review",
    description: "The A's played exhibition baseball at Allegiant Stadium before the new ballpark opens. Here's what it's actually like watching baseball at a football stadium — sight lines, atmosphere, what works, and what doesn't.",
    date: "March 23, 2026",
    category: "Fan Scene",
    emoji: "🏟️",
    body: `
<h2>A Football Stadium Is Still a Football Stadium</h2>
<p>Let's get the obvious thing out of the way first: Allegiant Stadium was not designed for baseball. The field is reconfigured, the foul territory stretches in ways that don't exist in a purpose-built ballpark, and the geometry of the seating bowl was engineered around an end zone, not home plate. None of that is a surprise. What is worth discussing honestly is what the experience actually feels like from the seats — because it's not as bad as you'd expect, and it's also not as good as the marketing would suggest.</p>

<p>This is a real review from someone who sat through multiple games and paid attention to the right things.</p>

<h2>The Sight Lines: Better Than Expected, With Caveats</h2>
<p>The lower bowl seats along the baselines are genuinely good for baseball. The sightline angles aren't perfectly oriented toward home plate, but you're close to the field and the action is readable. A seat in the lower club level between first base and right field is a legitimately enjoyable place to watch a game.</p>

<p>The issues start as you move toward the end zones. The corners of the lower bowl — sections that would be behind the baselines in a stadium built for this sport — sit at awkward angles to the infield. You're watching the game from a weird vantage point that requires consciously reorienting yourself each at-bat. It's not unworkable. It's not comfortable.</p>

<p>The upper deck is where the football-stadium-as-baseball-venue reality really asserts itself. You're far. You're high. The field looks small in a way that purpose-built baseball parks, even the ones with larger capacities, don't. If you're in the upper deck end zones, you're watching the game on a screen more than you're watching the players. The screens are good, at least.</p>

<h2>Capacity and Atmosphere: The Reduced Setup Actually Helps</h2>
<p>For baseball, the Athletics configure Allegiant to use only a portion of the full 65,000-seat capacity. Tarped sections in the upper deck reduce the available seating to somewhere in the 30,000 to 35,000 range. This is the right call, and it makes the atmosphere meaningfully better than it would be at full football capacity.</p>

<p>A half-full 35,000-seat configuration feels different from a half-full 65,000-seat configuration. The crowd is more concentrated, the noise has less dead space to dissipate into, and the stadium doesn't feel haunted the way large venues do when they're underpopulated. The games I attended had real atmosphere in the lower bowl even when the upper sections were sparse.</p>

<p>The roof is the other major factor here. Allegiant's retractable roof means a baseball game in Las Vegas doesn't involve 108-degree heat. The climate control is real and it works. The experience of watching baseball in an air-conditioned building is genuinely different from watching it under the desert sun, and for this particular sport in this particular city, that difference matters more than the baseball purists who insist on open-air parks want to admit. You can actually focus on the game when you're not actively trying to survive it.</p>

<h2>What Works</h2>
<p>The concessions are better than a typical baseball experience. Allegiant has permanent food and beverage infrastructure built to handle NFL crowds, and that infrastructure works for baseball too. The variety of food options, the speed of service, the quality level — it's all above what you get at the average ballpark. Las Vegas knows how to feed people and that knowledge translates.</p>

<p>The club areas are excellent. If you're in a premium seat or a club section, you're in climate-controlled comfort with good sightlines and better food. For a baseball game in Nevada in the summer, that combination is hard to beat.</p>

<p>The parking and transit situation, while imperfect, is more manageable for baseball than for football. Baseball crowds are smaller and the schedule is more spread throughout the week. Arriving 30 minutes before first pitch doesn't require the same logistics that a Sunday afternoon NFL game demands.</p>

<h2>What Doesn't Work</h2>
<p>The foul territory. There's a lot of it. Baseball configurations in football stadiums typically involve more foul ground than purpose-built ballparks, and Allegiant is no exception. Seats that would be close to the action in a normal park are separated from it by a wide expanse of dirt and warning track. At the field level, this is noticeable. At the lower club level, you start to feel like you're watching from a distance even when you're technically close to the field.</p>

<p>The baseline seats at the far ends of the lower bowl — sections that in football are behind the end zones — have difficult angles for baseball. The outfield is essentially sideways from those positions. If you're trying to watch a fly ball develop in real time, you're frequently craning your neck.</p>

<p>The stadium's visual identity doesn't shift fully for baseball. The scoreboard is designed for football information displays and the baseball presentation, while functional, feels like an overlay rather than a purpose-built experience. Small thing, but it contributes to the overall sense that you're watching baseball in a place that's tolerating it rather than celebrating it.</p>

<h2>The Honest Bottom Line</h2>
<p>Allegiant Stadium is a good temporary home for baseball, with emphasis on both "good" and "temporary." It solves the weather problem entirely. It delivers a comfortable experience with strong food and beverage infrastructure. The reduced-capacity configuration makes the atmosphere work better than the venue's size would suggest.</p>

<p>It's not a baseball stadium. The angles are wrong in too many places, the foul territory is excessive, and the upper deck might as well be a different sport. But for what it is — a premium NFL facility hosting baseball while the actual baseball park gets built — it does the job. Go to a game. Sit in the lower club or lower bowl between the bases. Enjoy the air conditioning. Watch some baseball.</p>

<p>The new ballpark on the Strip opens in 2028. Then we'll have the real conversation about what Las Vegas baseball looks and feels like. Until then, Allegiant is good enough, and in a city where "good enough" is usually just the starting point, that counts for something.</p>
${affiliateBlock}
`,
  },
  {
    slug: "john-fisher-as-full-controversy-explained",
    title: "John Fisher and the A's: The Full Controversy Explained",
    description: "A definitive deep dive into the cheapskate ownership, the Oakland betrayal, and the path that led the Athletics to Las Vegas.",
    date: "March 9, 2026",
    category: "Editorial",
    emoji: "🔥",
    body: `
<h2>The Most Despised Man in Baseball?</h2>
<p>In the long history of Major League Baseball, there have been villains. There have been owners who lost money, owners who lost games, and owners who lost their minds. But John Fisher, the reclusive heir to the Gap clothing fortune, has achieved a singular status. He is the man who didn't just move a team—he methodically dismantled a community's soul to save a fraction of a billionaire's portfolio.</p>
<p>To understand the current state of the Las Vegas Athletics, one must understand the scorched earth left behind in Oakland. This isn't just a story about a stadium; it’s a case study in corporate extraction, neglect, and the ultimate betrayal of a fan base that gave everything while receiving nothing but disrespect in return.</p>

<h2>The Cheapskate Era: Slashing the Pulse of a Franchise</h2>
<p>John Fisher took control of the Athletics in 2005. At the time, the A's were the "Moneyball" darlings—a team that competed against giants on a budget. But under Fisher, "Moneyball" stopped being a clever competitive advantage and started being a convenient excuse for austerity. While other mid-market teams eventually spent to win, Fisher's A's became a developmental laboratory for the rest of the league.</p>
<p>The payroll slashing wasn't just about saving money; it was about stripping the team of its identity. Every time a star player captured the heart of Oakland, they were shipped out. Matt Chapman, Matt Olson, Chris Bassitt, Sean Manaea, Marcus Semien—the list of All-Stars sold for pennies on the dollar is an indictment of an owner who viewed players as depreciating assets rather than the heart of a franchise. By the time the team reached its final years in Oakland, the roster was a collection of Triple-A talent and placeholders, a deliberate attempt to suppress attendance and justify a relocation.</p>

<h2>The Howard Terminal Saga: A Negotiated Deception</h2>
<p>For years, the A's leadership, led by Fisher and his hatchet-man Dave Kaval, insisted their "Parallel Paths" (Oakland vs. Las Vegas) were genuine. They proposed a multi-billion dollar waterfront stadium at Howard Terminal in Oakland. The city, despite its financial challenges, stepped up. They secured hundreds of millions in infrastructure grants. They cleared environmental hurdles that usually take decades. They did the work.</p>
<p>But whenever the finish line appeared, Fisher moved the goalposts. The project was never about the stadium; it was about the massive real estate development surrounding it. When the interest rates rose and the real estate market cooled, Fisher pivoted. The "Oakland is our home" banners were ripped down, replaced by a sudden, desperate craving for the Nevada desert.</p>

<h2>Selling Out the Community: The Sacramento Stopover</h2>
<p>Perhaps the most insulting chapter of the saga is the interim period. After refusing to negotiate a fair lease extension with the city of Oakland—a city that had hosted them for 56 years—Fisher decided to move the team to a minor league park in Sacramento. Sutter Health Park, a 14,000-seat Triple-A stadium, will host a Major League team for three years. It is a humiliation for the sport of baseball and a final middle finger to the fans in the East Bay.</p>

<h2>The "Sell The Team" Movement</h2>
<p>The response from the fans was nothing short of heroic. The "Reverse Boycott" of 2023 saw 27,000 fans pack the Coliseum, not to support Fisher, but to tell him—and the world—to "Sell The Team." Thousands wore green t-shirts with that simple, powerful demand. They stayed in the parking lot in protest. They flew planes over the stadium with banners. They showed that the fans weren't the problem—the leadership was.</p>
<p>Fisher ignored them. He sat in his private box, sheltered from the anger of the people whose heritage he was auctioning off. The move to Las Vegas was approved by MLB owners, a group of billionaires protecting one of their own from the consequences of his own incompetence.</p>

<h2>Public Funding and the Vegas Fight</h2>
<p>Even in Las Vegas, the controversy follows. The $380 million in public funding granted by the Nevada Legislature was met with fierce opposition. "Schools Over Stadiums," a teacher-led movement, has fought the deal every step of the way, pointing out that Nevada ranks near the bottom in education while handing out welfare to a billionaire for a 9-acre ballpark footprint that many still believe is too small.</p>

<h2>The Definitive Piece: Why It Matters</h2>
<p>The Las Vegas A's will play in 2028. There will be lights, there will be a roof, and there will be tourists. But a franchise built on the foundation of betrayal carries a heavy burden. For the fans in Oakland, the "Sell The Team" chants will never truly stop. For the fans in Vegas, the question remains: if he did it to them, what's to stop him from doing it to you?</p>
<p>This controversy isn't an "Oakland problem." It's a John Fisher problem. And until the ownership changes, the cloud over the Athletics will remain, no matter how bright the Vegas sun shines.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-as-2026-sacramento-schedule-guide",
    title: "Las Vegas A's 2026 Sacramento Schedule: Every Game, Every Way to Watch",
    description: "The complete guide to the 2026 season at Sutter Health Park. How to travel, where to stream, and the best ways to catch the A's in their interim home.",
    date: "March 9, 2026",
    category: "Game Day",
    emoji: "📅",
    body: `
<h2>The Sacramento Era Continues</h2>
<p>As construction continues on the Las Vegas Strip, the Athletics return to Sacramento for the second year of their three-year residency at Sutter Health Park. It remains one of the most unique settings in Major League history—a Triple-A ballpark acting as a temporary sanctuary for a franchise in flight. For fans in Las Vegas, following the team in 2026 requires a bit of planning, a subscription or two, and perhaps a weekend trip up North.</p>

<h2>The 2026 Schedule Highlights</h2>
<p>The 2026 season kicks off with a challenging stretch. Because Sutter Health Park is a smaller venue, the atmosphere is intimate—every game feels like a "big event." Key series to watch include the April visit from the New York Yankees and the late-summer showdown with the Houston Astros. The home schedule is packed with weekend series designed to attract traveling fans from both the Bay Area and Southern Nevada.</p>

<h2>Sutter Health Park: The Fan Experience</h2>
<p>Watching a game at Sutter Health Park is unlike any other MLB experience. With a capacity of just 14,000, you are remarkably close to the action. The "Home Run Terrace" in right field remains the most popular spot for social fans, offering a grass-berm experience that feels more like a picnic than a professional sports venue. However, be warned: Sacramento temperatures in July and August can easily rival Las Vegas, often exceeding 100 degrees. With limited shade, hydration and sunscreen are your primary equipment.</p>

<h2>How to Watch: TV and Streaming</h2>
<p>For fans staying in Las Vegas, catching the games requires navigating the regional sports network (RSN) landscape. Most games will be broadcast on the local carrier, but with the move, streaming has become the preferred method for the younger fan base. MLB.TV remains the gold standard, though local blackout rules in Las Vegas still apply unless you are using a provider that carries the local A's feed. For those cutting the cord, several digital platforms now offer "Single Team" packages that are more affordable than a full cable subscription.</p>

<h2>Vegas to Sacramento: The Travel Guide</h2>
<p>If you're planning to make the trip from the 702 to the 916, you have two main options:
<ul>
  <li><strong>Flying:</strong> Southwest Airlines offers multiple daily non-stops from Harry Reid (LAS) to Sacramento International (SMF). The flight is roughly 90 minutes. From SMF, it's a quick 15-minute rideshare to West Sacramento and the stadium area.</li>
  <li><strong>Driving:</strong> It's a long haul—about 8 to 9 hours depending on traffic. You'll take US-95 North through the heart of Nevada, eventually cutting over to California. It's a beautiful, desolate drive, but not for the faint of heart.</li>
</ul>
</p>

<h2>Tailgating at Sutter Health</h2>
<p>The tailgating scene in West Sacramento is more relaxed than the old Coliseum parking lot. The lots surrounding the park are smaller, so the energy is concentrated. The "Barn" nearby has become the unofficial pre-game headquarters, offering local craft beers and an outdoor area that captures the Sacramento summer vibe perfectly. If you're looking for Vegas-style energy, you won't find it here—this is a community baseball vibe through and through.</p>

<h2>Best Bars in Vegas to Catch the Game</h2>
<p>If you aren't traveling, several Las Vegas sports bars have become the de facto "A's Hubs" for the 2026 season. Spots like <strong>The Front Yard at Ellis Island</strong> or <strong>Beerhaus at The Park</strong> consistently show the games with sound, providing a sense of community for the growing Vegas fan base. Look for "Athletics Watch Party" events scheduled for the Friday night games of major series.</p>

<p>Whether you're in the stands at Sutter Health or on a barstool on the Strip, the 2026 season is a vital bridge to the future. Make sure your calendar is marked—baseball is a daily grind, even in transition.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-as-top-prospects-2026-watch-list",
    title: "Every Las Vegas A's Prospect to Watch in 2026 and Beyond",
    description: "The future is arriving. A deep dive into the top 10 prospects in the A's system and how they fit into the 2028 Las Vegas roster.",
    date: "March 9, 2026",
    category: "Roster Intel",
    emoji: "⭐",
    body: `
<h2>The Foundation of the 2028 Vegas Roster</h2>
<p>While the headlines are dominated by stadium renderings and ownership drama, the actual success of the Las Vegas Athletics will be determined in places like Lansing, Midland, and Las Vegas (Triple-A). The A's farm system has undergone a major infusion of talent over the last two years, shifting from a bottom-tier group to a top-10 system in baseball. These are the names you will be cheering for when the roof opens on the Strip in 2028.</p>

<h2>1. Jacob Wilson (SS) - The Contact King</h2>
<p><strong>Scouting Report:</strong> Wilson is perhaps the most unique prospect in baseball. His bat-to-ball skills are legendary; he simply does not strike out. In an era of high-velocity swing-and-miss, Wilson is a throwback. He has refined his defensive range at shortstop and looks like a Huntington-caliber defender.
<br><strong>ETA:</strong> Mid-2026. Wilson is the centerpiece of the future infield.</p>

<h2>2. Luis Morales (RHP) - The Cuban Flame-Thrower</h2>
<p><strong>Scouting Report:</strong> Morales features an effortless 98-100 mph fastball and a slider that disappears. Since signing out of Cuba, his command has improved significantly. He has "Ace" potential and could be the Opening Day starter for the 2028 Vegas opener.
<br><strong>ETA:</strong> 2027.</p>

<h2>3. Denzel Clarke (OF) - The Five-Tool Freak</h2>
<p><strong>Scouting Report:</strong> Clarke has the highest ceiling in the system. Standing 6'5", he has light-tower power and elite speed. His strikeout rate was the only concern, but 2025 saw him make major adjustments to his swing plane. He is a highlight reel waiting to happen.
<br><strong>ETA:</strong> Late 2026.</p>

<h2>4. Steven Echavarria (RHP) - The Polished Projection</h2>
<p><strong>Scouting Report:</strong> A high-school pick who has matured quickly. Echavarria has a four-pitch mix and poise that belies his age. He isn't just a thrower; he’s a pitcher. His "stuff" continues to tick up as he fills out his frame.
<br><strong>ETA:</strong> 2027.</p>

<h2>5. Myles Naylor (3B) - The Next Generation</h2>
<p><strong>Scouting Report:</strong> The youngest of the Naylor brothers, Myles has the most raw power of the bunch. He’s a natural third baseman with a cannon for an arm. If he can maintain his plate discipline, he is a perennial 30-home run threat in the making.
<br><strong>ETA:</strong> 2027.</p>

<h2>6. Henry Bolte (OF) - Power and Speed</h2>
<p><strong>Scouting Report:</strong> Like Clarke, Bolte is an elite athlete. He has a massive "power-speed" combo that translates well to the modern game. His 2025 season in High-A was a breakout, showing he can handle advanced velocity.
<br><strong>ETA:</strong> 2027.</p>

<h2>7. Colby Thomas (OF) - The Sneaky Star</h2>
<p><strong>Scouting Report:</strong> All Thomas does is hit. He’s been one of the most productive hitters in the minors since being drafted. He may not have the "tools" of a Clarke, but his "at-bat quality" is through the roof.
<br><strong>ETA:</strong> 2026.</p>

<h2>8. Daniel Susac (C) - The Anchor</h2>
<p><strong>Scouting Report:</strong> A big, physical catcher who can handle a staff and provide pop from the right side. The A's have been patient with his development, focusing on his game-calling. He projects as a solid everyday Major League catcher.
<br><strong>ETA:</strong> 2026.</p>

<h2>9. Ryan Lasko (OF) - The Defensive Specialist</h2>
<p><strong>Scouting Report:</strong> Lasko is already a Gold Glove-caliber outfielder. His ability to track balls in the gap is elite. His bat is catching up to his glove, making him a potential high-value "glue" player for the Vegas outfield.
<br><strong>ETA:</strong> 2027.</p>

<h2>10. Mason Barnett (RHP) - The Mid-Rotation Workhorse</h2>
<p><strong>Scouting Report:</strong> Barnett has a high floor. He throws strikes, eats innings, and has a competitive fire that scouts love. He may not be a superstar, but every winning team needs a guy like Barnett to take the ball every fifth day.
<br><strong>ETA:</strong> 2026.</p>

<h2>The Road to 2028</h2>
<p>The 2028 roster in Las Vegas will likely feature a core built entirely from this list. By then, players like Zack Gelof and Lawrence Butler will be the "veteran" leaders, while Wilson and Morales enter their prime. The farm system is finally producing the volume of talent necessary to compete in the AL West without needing a $300 million payroll. The wait might be frustrating, but the talent is undeniable.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-athletics-stadium-update-2026",
    title: "Las Vegas Athletics Stadium Update 2026: What We Know About the New Ballpark",
    description: "Stadium construction progress, the location, design details, capacity numbers, and what fans can expect when the new Las Vegas ballpark opens in 2028.",
    date: "March 5, 2026",
    category: "Stadium Watch",
    emoji: "🏟️",
    body: `
<h2>The Build Is Real and It Is Moving Fast</h2>
<p>Walk past the corner of Las Vegas Boulevard South and Tropicana Avenue today and you will not see a finished ballpark. What you will see is a construction site that, by every indication, is turning into exactly what the Athletics promised when they announced the move. The foundation work is underway. The cranes are operating. The 9-acre footprint has been cleared, graded, and handed over to the construction crews who will build what the organization calls a jewel-box stadium for the desert Southwest.</p>
<p>This is not a renderings-only situation anymore. Real money has moved. Real ground has broken. And real fans in Las Vegas are starting to believe that 2028 baseball is not just a promise on a press release.</p>
<p>Here is everything we know about the new stadium as of early 2026.</p>

<h2>Location: Right on the Strip</h2>
<p>The site sits at 1501 S. Las Vegas Blvd., immediately adjacent to the Tropicana site on the southern end of the Strip. This is a remarkable piece of real estate for a baseball team. No other major league ballpark in North America occupies anything close to this kind of tourism-adjacent land. The Las Vegas Aces play the WNBA Finals a few miles away. The Raiders play at Allegiant Stadium three blocks west. The A's new home will sit in the middle of all of it.</p>
<p>For locals, the Strip location is a double-edged sword. On one hand, getting to a game from Henderson, Summerlin, or North Las Vegas means driving into the tourist corridor -- a commute most valley residents try to avoid. On the other hand, the location puts the Athletics on the radar of millions of visitors every year, creating a tourist-fan pipeline that no other franchise in baseball can match.</p>
<p>The team and the stadium authority have acknowledged the traffic challenge. There are plans for pedestrian access from the Mandalay Bay monorail stop, shuttle service from designated parking lots on the west side of the freeway, and potential integration with the planned expansion of the Las Vegas Monorail system. None of this is finalized, but the conversations are ongoing and the team appears committed to solving the access problem before opening day.</p>

<h2>Design: A Roof, a Retractable Field, and Air Conditioning</h2>
<p>If you have been watching baseball stadium construction around the country, you know the trend is toward fixed or retractable roofs in warm-weather markets. The new Las Vegas ballpark takes this to a logical extreme. Las Vegas in July and August is not Phoenix in July and August -- it is hotter. Afternoon temperatures regularly exceed 110 degrees. No serious stadium planner in 2024 or 2025 was going to propose an open-air ballpark in that environment.</p>
<p>The design calls for a translucent roof structure that allows natural light to filter through while keeping the interior temperatures manageable. The playing field is natural grass. To make that work under a closed roof in the desert, the stadium will incorporate the same kind of retractable field technology used at Chase Field in Phoenix and Globe Life Field in Arlington -- where natural grass grows on a movable slab that can be rolled outside when the stadium is dark.</p>
<p>Architecturally, the stadium leans into the Nevada desert setting. Renderings show a low-profile structure that does not try to compete with the Strip skyline but instead spreads out horizontally, emphasizing sight lines to the mountains to the west. The exterior features references to the desert landscape, with warm earth tones and angular lines that echo the terrain outside the city.</p>

<h2>Capacity: 33,000 Seats</h2>
<p>The planned capacity is 33,000 seats, making it one of the smaller ballparks in the major leagues. For context, the old Oakland Coliseum held 56,782 for baseball -- an absurdly large number that always made the stadium feel empty for a mid-week game against a non-rival. The new Las Vegas park is designed to feel full. A sellout crowd of 33,000 in a properly designed stadium makes for a genuine baseball atmosphere in a way that 22,000 in a 56,000-seat stadium never could.</p>
<p>The seating bowl design emphasizes closeness to the field. Lower bowl seats will be notably closer to the action than what fans experienced at the Coliseum. Premium club sections are planned on multiple levels, which is where the revenue model for a small-market franchise in an expensive city will live. Expect a high ratio of club seats and premium experiences relative to the total capacity.</p>

<h2>Timeline and What Comes Next</h2>
<p>The official target is Opening Day 2028. That gives the construction team roughly two years from the current foundation phase to completion. The schedule calls for structural steel to begin arriving in 2027, with the roof frame going up in the middle of that year. Interior work -- seating installation, field preparation, concourse build-out -- is targeted for late 2027 into early 2028.</p>
<p>There is no publicly available construction timeline that shows 2028 as impossible. There is also no major league stadium construction project in recent history that came in on time and under budget. Fans should expect some slippage at the edges. The question is whether any slippage pushes the opening into the 2029 season. As of now, the team maintains 2028 is the target and construction progress supports that claim.</p>
<p>Watch this space. The stadium will become the defining story of the A's Las Vegas era, and we will be covering every significant development as it happens.</p>
${affiliateBlock}
`,
  },
  {
    slug: "best-sports-bars-las-vegas-watch-as-games",
    title: "Best Sports Bars in Las Vegas to Watch A's Games",
    description: "Where to watch Las Vegas Athletics games around the valley: the best sports bars, screen sizes, deals, and atmosphere for baseball nights.",
    date: "March 4, 2026",
    category: "Fan Scene",
    emoji: "🍺",
    body: `
<h2>Baseball Night in Vegas Has Never Been This Good</h2>
<p>Las Vegas has always had sports bars. What it did not have, until very recently, was a professional baseball team to fill those bars on weekday afternoons and playoff October nights. The Raiders changed the NFL equation. The Golden Knights turned hockey into religion in the desert. Now the Athletics are going to do the same thing for baseball, starting with a 162-game regular season that gives fans reasons to gather from April through October.</p>
<p>While the stadium goes up on the Strip, the real action in 2026 happens at your neighborhood bar. Here is where to go to watch the A's play well in Las Vegas, from the casino megaplexes to the local joints where a real baseball crowd gathers.</p>

<h2>The Viewing Rooms at Station Casinos</h2>
<p>Station Casinos runs the most dedicated sports viewing infrastructure in the valley for local fans. Red Rock Casino, Green Valley Ranch, and Sunset Station all feature race and sports books with massive screen arrays and hundreds of comfortable viewing seats. The A's games will be on the books from day one of the season, and the per-seat experience beats most dedicated sports bars simply because the screens are bigger and the seating is better.</p>
<p>Green Valley Ranch in Henderson deserves special mention. The Henderson market is where a significant chunk of the A's local fan base lives, and Green Valley Ranch has the best combination of screen quality, food options, and parking in the valley. If you are watching an afternoon game on a weekday, this is the move.</p>

<h2>PT's Gold and PT's Pubs: The Local Chain That Gets It Right</h2>
<p>PT's is a Las Vegas institution. The chain has locations across the valley and every one of them has multiple screens, cold beer at reasonable prices, and a crowd that actually watches the game rather than treating the screens as background decoration. PT's does not have the glamour of a Strip sports bar, and that is exactly the point. These are neighborhood establishments where you can go without spending Strip prices on a beer.</p>
<p>For A's games, find the PT's closest to your neighborhood. The one on Flamingo in the central valley and the Henderson location both tend to draw decent sports crowds. The bartenders know their regulars and the atmosphere during playoff games has gotten genuinely loud since the Raiders and Golden Knights normalized big-game sports watching in Las Vegas.</p>

<h2>Yard House at Town Square</h2>
<p>Yard House is a national chain, but the Las Vegas Town Square location does several things right. The screen density is high, the beer list is long, and the kitchen stays open late enough to handle night games on the West Coast schedule. When the A's are playing in Seattle or Anaheim and you need a 10 PM first pitch option, Yard House delivers.</p>
<p>The food is better than you expect from a chain. The beer selection is legitimately impressive. And the crowd at Town Square skews toward sports fans rather than nightclub tourists, which makes a difference when you actually want to watch the game.</p>

<h2>Lucky Club Casino in the Northwest Valley</h2>
<p>The northwest valley does not always get love in lists like this, but Lucky Club on Simmons Street deserves recognition. Small, local, no casino resort atmosphere. Just a genuine Nevada neighborhood bar with good screens and a clientele that watches sports. For fans living in the Summerlin or Centennial Hills area, Lucky Club is the alternative to fighting traffic to get to a major venue.</p>

<h2>The Strip Options: When You Want the Full Show</h2>
<p>Sometimes you want the spectacle. The sports book at the Westgate is the largest in the world by square footage and it shows everything. The MGM Grand sports book has been renovated and features stadium-style seating that rivals some actual stadiums. Caesars Palace has a dedicated broadcast center that makes watching any major game feel like an event.</p>
<p>The catches: Strip prices are real. A beer at a Strip sports book costs what a beer costs at a baseball game. Parking is a negotiation. And the crowd around you is as likely to be watching for the first time as to be a dedicated fan. For big games -- playoffs, rivalry games, late-season stakes -- the Strip delivers an atmosphere that matches the moment. For a Tuesday in June against the White Sox, head to the neighborhood joints.</p>

<h2>What to Look For in an A's Bar</h2>
<p>As the A's fan base builds in Las Vegas, certain bars will develop the kind of unofficial team-bar status that every franchise's cities have. Look for the spots with the A's logo merchandise on the wall, the bartenders who know the roster, and the regulars who show up for every home series. That culture is forming right now, which means you can be part of building it.</p>
<p>Bring your A's gear. Talk to the bartender. Find out if they are planning to carry the games all season. The best sports bars for the A's are not going to be the ones on any published list two years from now -- they are going to be the ones where the right crowd showed up and kept coming back.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-athletics-season-tickets-guide",
    title: "Las Vegas A's Season Tickets Guide: How to Get On the List",
    description: "Everything about Las Vegas Athletics season tickets: the waiting list, pricing tiers, what is included, and PSL options for the new ballpark.",
    date: "March 3, 2026",
    category: "Tickets",
    emoji: "🎟️",
    body: `
<h2>The List Is Real and It Is Growing</h2>
<p>Every new stadium in the modern era creates a season ticket waiting list that functions as both a demand signal and a marketing tool. The Las Vegas Athletics are no exception. The team opened a priority deposit program when the move became official, and the interest has been genuine. Las Vegas residents, transplanted Oakland fans, and sports business observers are all paying attention to the numbers.</p>
<p>Here is what we know about securing your seat for the inaugural season and what to expect from the pricing structure that is taking shape.</p>

<h2>How the Waiting List Works</h2>
<p>The A's season ticket deposit program operates on a first-come, first-served basis with position in line determining seat selection priority. When the stadium opens, depositors in the earliest positions choose first from the available inventory. This means the difference between depositing today versus six months from now is real in terms of the seats you will be able to select.</p>
<p>Deposits are fully refundable until seat selection. This is standard practice and it matters: you are not committing to a price or a specific seat when you put down a deposit. You are buying a position in line. If the final pricing comes in above your budget or the seat locations available at your position do not work for you, you get your deposit back.</p>
<p>The deposit amount has ranged from a few hundred dollars to several hundred depending on the tier of seating you are expressing interest in. Premium seating deposits are higher and give priority access to the club and field-level inventory. Upper-deck deposits are lower. The team has been running a tiered system that lets fans signal their interest and budget simultaneously.</p>

<h2>Pricing: What to Expect</h2>
<p>Full pricing has not been released as of early 2026, which is normal at this stage of the stadium construction timeline. Teams typically wait until 12 to 18 months before opening to release the full seat pricing matrix. What we can work with are the signals the organization has sent and the comparable market data from other recent stadium openings.</p>
<p>The Las Vegas market is expensive. Hotel rooms, meals, entertainment -- everything costs more here than in the average MLB city. At the same time, the A's have historically been among the more affordable franchises in baseball, and there is no obvious reason for the Las Vegas operation to abandon that positioning entirely. Expect a wide range of pricing that serves both the value end of the market and the premium end that the Strip-adjacent location naturally attracts.</p>
<p>Field-level premium club seats will likely run $200 to $400 per game face value in the lower tiers, which adds up to $16,000 to $32,000 for a full season. These numbers are comparable to what new stadiums in competitive markets have charged. Upper-deck season tickets could be as low as $30 to $50 per game at the entry level, which is $2,430 to $4,050 for a full 81-home-game season. The midrange infield box seats will fall somewhere in between.</p>

<h2>What Season Tickets Include</h2>
<p>Beyond the seat itself, season tickets typically include priority access to postseason tickets, discounts on parking and merchandise, access to exclusive events, and the ability to purchase additional tickets before the general public. The A's have traditionally offered season ticket holders first crack at playoff packages, and that benefit carries real monetary value in a competitive market where October games sell for multiples of face value.</p>
<p>Club seat season tickets will likely include access to the premium interior spaces -- the climate-controlled clubs, the private bars, the dedicated entrance tunnels. In a city where 115-degree July afternoons are a real concern, those climate-controlled spaces have more value per square foot than they would in, say, San Francisco.</p>

<h2>PSL Options: The Premium Seat License Question</h2>
<p>Premium Seat Licenses, or PSLs, are a one-time fee paid to secure the right to purchase season tickets in a specific seat for the long term. Not all stadiums use them, but new venues in high-demand markets often do because they allow the team to capture upfront capital during the construction phase.</p>
<p>The A's have not formally announced a PSL program for the Las Vegas stadium as of this writing. Whether they do will depend on how strong the waitlist demand looks as the stadium nears completion. If the list is long and the premium inventory is tight, PSLs become a natural tool. If demand is more moderate, the team may skip PSLs to keep the barrier to entry lower for new Las Vegas fans who do not have the deep A's history that Oakland fans carried for fifty years.</p>
<p>Watch for an announcement in late 2026 or early 2027. If PSLs are coming, that is when you will first hear about them.</p>

<h2>What to Do Right Now</h2>
<p>Put down a deposit. Even if you are not certain you will buy a full season package, the deposit gives you a position in line and costs you nothing until you make the actual commitment. If the pricing comes in reasonable and the seat selection at your position includes something you want, you buy. If it does not work, you get refunded.</p>
<p>The fans who are going to have the best seats on Opening Day 2028 are the ones who are on the list right now. This is not a complicated calculation.</p>
${affiliateBlock}
`,
  },
  {
    slug: "oakland-as-world-series-history",
    title: "Oakland A's World Series History: The Championships Las Vegas Inherited",
    description: "Four World Series titles, three dynasties, and the legendary players who built the legacy that now belongs to Las Vegas.",
    date: "March 2, 2026",
    category: "History",
    emoji: "🏆",
    body: `
<h2>The Trophy Case Moves With the Franchise</h2>
<p>When a franchise changes cities, the history goes with it. The championships won in Philadelphia belong to the Oakland A's. The championships won in Oakland belong to the Las Vegas Athletics. This is how it works in professional sports, and it means the city of Las Vegas inherited one of the most impressive winning legacies in the history of Major League Baseball.</p>
<p>Four World Series titles. Three separate dynasties. Players whose names define generations of baseball. All of it is now part of the Las Vegas story.</p>

<h2>The Philadelphia Years: 1910, 1911, 1913</h2>
<p>The Athletics were not always from Oakland. The franchise started in Philadelphia in 1901, and the early twentieth century Philadelphia A's were one of the dominant teams in baseball history. Connie Mack managed the club and built a dynasty around Hall of Famers including Eddie Collins, Frank "Home Run" Baker, and Rube Waddell.</p>
<p>The 1910 World Series title over the Cubs was the first. The 1911 repeat over the Giants was the second. A brief gap followed, then the 1913 title over the Giants again made it three in four years. These teams played in a different era -- the dead-ball era, before Babe Ruth changed baseball forever -- but they were the best team of their time, and that record stands regardless of what era you prefer.</p>
<p>Mack built a second dynasty in the late 1920s and early 1930s, winning again in 1929 and 1930. But for Las Vegas purposes, it is the Oakland years that feel most immediate.</p>

<h2>The Oakland Dynasty: 1972, 1973, 1974</h2>
<p>The franchise moved from Kansas City to Oakland in 1968, and within four years had assembled one of the most talented and colorful teams in baseball history. The Oakland A's of the early 1970s won three consecutive World Series championships, something only the Yankees had done in the modern era.</p>
<p>Owner Charlie Finley built a roster of genuine stars: Catfish Hunter, Rollie Fingers, Joe Rudi, Sal Bando, Bert Campaneris, Gene Tenace, and the MVP center fielder who defined the era, Reggie Jackson. These players had the kind of personality and individual identity that the buttoned-up game had rarely seen before. Mustaches were mandatory -- Finley actually paid bonuses for facial hair. Colorful yellow-and-green uniforms replaced the traditional white and gray. And they won.</p>
<p>The 1972 World Series win over the Reds was gritty and grinding, with a roster playing through injuries. The 1973 title came in seven games over the Mets, with Jackson returning from his injury and Catfish Hunter pitching brilliantly. The 1974 championship, a five-game victory over the Dodgers, completed the three-peat and cemented the Oakland A's as the dynasty of their era.</p>
<p>Reggie Jackson hit three home runs in the deciding game of the 1977 World Series -- but by then he was a Yankee. He had left Oakland after the dynasty fractured under Finley's notoriously low payroll, a preview of the financial challenges that would define the franchise for decades.</p>

<h2>The Late-80s Powerhouse: 1989</h2>
<p>The A's won one more World Series title in 1989, defeating the San Francisco Giants in the earthquake-interrupted series. Jose Canseco and Mark McGwire -- the Bash Brothers -- were the faces of that team, with Dave Stewart on the mound and Dennis Eckersley in the bullpen having the greatest closing season in history up to that point.</p>
<p>The 1989 championship was the last World Series title in franchise history. The team stayed competitive into the early 1990s, losing the 1990 Series to the Reds in a shocking sweep. Then the dynasty dissolved again as the payroll constraints that had ended the 1970s run returned to haunt the organization.</p>

<h2>The Moneyball Era and What Came After</h2>
<p>The A's never won another championship after 1989, but they remained competitive through periods that defined how modern baseball thinks about roster building. The early 2000s Moneyball teams went to the playoffs four consecutive years without spending what the big-market teams spent. The 2012 team came back from 13 games down in August to win the AL West in one of the greatest late-season runs in baseball history.</p>
<p>None of it produced a championship. The losing streaks that followed were painful for Oakland fans who had invested decades in this franchise. But the history of winning belongs to Las Vegas now, and new fans in the desert should know exactly what they inherited when the franchise crossed the Sierra Nevada.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-as-roster-2026",
    title: "Las Vegas A's Roster Breakdown for 2026: Key Players and Prospects to Watch",
    description: "A full breakdown of the A's roster heading into 2026, key returning players, prospects to track, and what the team needs to compete in the AL West.",
    date: "March 1, 2026",
    category: "Roster",
    emoji: "📋",
    body: `
<h2>A Team in Transition, a Roster With Real Pieces</h2>
<p>The Las Vegas Athletics are not the 1973 Oakland A's. They are not the 2002 Moneyball team either. What they are heading into 2026 is a franchise in a familiar position: rebuilding with intent, stockpiling young talent, and trying to figure out which parts of the current roster are the foundation of something real versus placeholder players who will be moved when the right deal comes along.</p>
<p>General manager David Forst has run this organization through multiple cycles of this kind of construction. The methods are familiar. The execution in Las Vegas needs to go further than it has in recent years, because the franchise cannot afford another decade of near-misses and mid-season sell-offs in a new market that is still earning its baseball credibility.</p>

<h2>The Starting Rotation</h2>
<p>The rotation is the most legitimate reason for optimism. JP Sears has developed into a reliable mid-rotation starter with better swing-and-miss stuff than his early career suggested. He generated solid strikeout numbers in 2025 and improved his command enough to eat innings without giving games away.</p>
<p>Luis Medina remains the rotation wild card. When his stuff is working, he looks like a potential number-two starter with a mid-90s fastball and a devastating slider. When his command goes, he walks batters in clusters and drives pitching coaches to drink. The 2026 season is a make-or-break year for Medina in terms of establishing himself as a legitimate rotation anchor.</p>
<p>Joey Estes fills a back-end rotation role and has shown the ability to give you six innings of three-run ball on a good day. He is not the guy you build around, but a rotation that goes Sears, Medina, Estes, and two additional pieces has a chance to be average, and average starting pitching is often the difference between 70 wins and 82 wins.</p>

<h2>The Bullpen</h2>
<p>The A's bullpen situation is complicated in the way that low-budget bullpens always are. Mason Miller is the closer and he is legitimately dominant when healthy. His fastball sits at 101 mph and his slider is one of the best in the American League. The problem is availability -- Miller has had arm issues that have limited his effectiveness across multiple seasons, and a reliever who cannot pitch consecutive nights is less valuable than his raw stuff suggests.</p>
<p>Behind Miller, the bullpen is a collection of decent arms with no guarantees. T.J. McFarland provides left-handed depth. Lucas Erceg has closer-caliber stuff when he locates, which is inconsistently. The back end of the bullpen will be determined by spring training performance and waiver wire additions that have not happened yet as this is written.</p>

<h2>The Lineup</h2>
<p>Brent Rooker is the offensive anchor. He hit 30 home runs in 2024 and proved that his power is legitimate at the major league level. He is not a complete hitter -- there are holes in his swing that quality pitchers attack -- but he gives the lineup a genuine power threat in the middle that the team has not had consistently for years.</p>
<p>Lawrence Butler in the outfield is the player the organization is most excited about among the position players. Butler showed plus athleticism and improving plate discipline in 2025. His ceiling is significant. Getting him to where his ceiling looks like his floor is the development challenge for 2026.</p>
<p>Zack Gelof at second base brings real promise. He can hit, he can run, and his defense at second has improved to average or better. If Gelof takes the next step in 2026 and starts consistently punishing mistakes, the lineup becomes harder to pitch around.</p>

<h2>What the Team Needs</h2>
<p>Catching is a genuine weakness. The options behind the plate right now are not the kind that make pitchers happy to shake off a sign. A quality catcher who can both call a game and hit above the Mendoza Line would change the team's pitching profile meaningfully.</p>
<p>The lineup also lacks a table-setter. The A's do not have a leadoff hitter who gets on base at a consistent clip and creates run-scoring opportunities for Rooker and Butler. Finding that player -- whether through trade, free agency, or development -- is the priority that the front office needs to solve before the stadium opens.</p>
<p>The upside is real. A healthy rotation, a functional bullpen, and offensive improvement from Butler and Gelof could push this team toward .500 and into wild-card conversation. Las Vegas baseball fans deserve at least that.</p>
${affiliateBlock}
`,
  },
  {
    slug: "john-fisher-controversy-explained",
    title: "The John Fisher Controversy Explained: Why Oakland Fans Are Angry",
    description: "A clear-eyed look at the John Fisher ownership saga, why Oakland fans feel betrayed, what actually happened, and what it means for the Las Vegas era.",
    date: "February 28, 2026",
    category: "Business",
    emoji: "💼",
    body: `
<h2>Understanding the Anger Is Important for Las Vegas Fans</h2>
<p>If you are a Las Vegas resident who became an Athletics fan when the team moved here, you may have encountered Oakland fans online who are furious -- not just disappointed, but genuinely angry in a way that feels personal and lasting. Understanding that anger is not about relitigating old arguments. It is about understanding the foundation you are building your fandom on, and the genuine human cost of franchise relocation.</p>

<h2>Who Is John Fisher?</h2>
<p>John Fisher is the owner of the Las Vegas Athletics and has been the controlling owner of the Oakland Athletics since 2005. He is a billionaire heir to the Gap clothing fortune. By all accounts, he is not a baseball-obsessed owner in the mode of the late George Steinbrenner or Steve Cohen. He is an investor who owned a baseball team, and his approach to ownership was shaped by that financial framing rather than by a love of competition.</p>
<p>Fisher's tenure in Oakland was defined by low payroll, cost-cutting, and a series of deals and negotiations around a new stadium that ultimately went nowhere. The A's had one of the lowest payrolls in baseball for most of Fisher's tenure. The team's analytics-driven approach, famous from the Moneyball era, became in later years a justification for not spending money rather than a philosophy for maximizing value.</p>

<h2>The Stadium Saga</h2>
<p>The core of the Oakland anger is not the move itself -- franchise relocation is part of sports history -- but the way it happened and the years of narrative that preceded it. For well over a decade, Fisher and the A's organization were locked in negotiations with the City of Oakland and Alameda County over building a new stadium to replace the Oakland-Alameda County Coliseum, which had been one of the worst facilities in major league baseball for at least two decades.</p>
<p>There were multiple stadium proposals. The Howard Terminal project -- a waterfront development near Jack London Square -- spent years in environmental review, city negotiations, and public debate. Supporters of the project put in enormous personal investment of time and advocacy. The city ultimately approved the project, which made the subsequent announcement of the Las Vegas move feel to many Oakland residents like a double-cross.</p>
<p>The organization has maintained that the Howard Terminal project was not financially viable without public subsidy levels that were not forthcoming. Oakland officials and advocates dispute this characterization. Whatever the factual resolution of that argument, the perception among Oakland fans was clear: Fisher never wanted to stay, and the negotiations were conducted in bad faith.</p>

<h2>The Sacramento Interim and What It Meant</h2>
<p>While the Las Vegas stadium was under construction, the A's played in Sacramento at Sutter Health Park, home of the Sacramento River Cats, a Triple-A minor league stadium. The optics were damaging. A major league team playing in a minor league park, in a market between the city it left and the city it was headed to, while attendance was predictably low and the team was deliberately not competitive.</p>
<p>For Oakland fans, the Sacramento years were confirmation that the franchise had checked out. For Las Vegas fans, they were a preview of what the product would look like before the stadium opened and the organization had genuine local stakes in building something worth watching.</p>

<h2>What It Means for Las Vegas</h2>
<p>For Las Vegas fans, the Fisher controversy is relevant for a few reasons. First, Fisher remains the owner. The same decision-maker who drew the ire of Oakland is the one who controls the franchise in Las Vegas. Whether his approach to ownership changes in a new market is an open question that only time will answer.</p>
<p>Second, the Oakland community's experience is a reminder that the connection between a team and a city is real and valuable, and that it can be broken. Building that connection in Las Vegas takes time and investment -- in the product on the field, in community engagement, and in the kind of consistent presence that turns casual fans into committed ones.</p>
<p>Third, some Oakland fans will never support this team again, and that is a legitimate choice. Others will follow the players they love regardless of the city on the jersey. Las Vegas fans can welcome both groups or neither. What they cannot do is pretend the history did not happen and expect the broader baseball world to simply accept the franchise at face value without acknowledging it.</p>
<p>The Las Vegas Athletics have a chance to build something genuinely new. Making good on that chance requires acknowledging where they came from.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-ballpark-location-guide",
    title: "Las Vegas Ballpark Location Guide: How to Get There From Anywhere in the Valley",
    description: "Where is the new A's ballpark in Las Vegas? Location details, Strip access, parking options, and directions from every part of the valley.",
    date: "February 26, 2026",
    category: "Gameday",
    emoji: "📍",
    body: `
<h2>The Address and Why It Matters</h2>
<p>The new Las Vegas Athletics ballpark is being built at 1501 S. Las Vegas Blvd., on the southern end of the Strip adjacent to the former Tropicana hotel site. The address puts the stadium roughly at the corner of Las Vegas Boulevard South and Tropicana Avenue -- a location that is simultaneously one of the most recognizable in the world and genuinely difficult to reach on a busy Saturday night.</p>
<p>This is a stadium built for tourism and entertainment as much as for baseball. It makes sense for the franchise in Las Vegas, where millions of visitors come through the resort corridor every year. It creates real logistical challenges for valley residents who do not typically spend their weekday evenings navigating the Strip. Here is how to navigate both realities.</p>

<h2>Coming From the South Valley (Henderson, Green Valley, South Las Vegas)</h2>
<p>Henderson residents have the most direct driving route. Take I-515 north to I-15 north, then exit at Tropicana Avenue and head east to Las Vegas Boulevard. You are looking at 20 to 35 minutes in normal traffic, more during peak evening hours. The commute is manageable on Tuesday and Thursday nights. On Friday and Saturday evenings, add 15 to 25 minutes to any estimate.</p>
<p>Parking on the Henderson side of the commute means either parking in the general vicinity of the stadium -- which will be expensive and will require advance planning -- or using the shuttle services that the A's have indicated they will operate from remote lots near the I-15 corridor. Details on those lots are still being finalized, but the pattern from Raiders and Knights games suggests dedicated lots on the western side of the freeway with shuttle service to the stadium.</p>

<h2>Coming From Summerlin and the Northwest Valley</h2>
<p>Summerlin residents face the most complicated commute. US-95 south to I-15 south is the standard route, putting you on the Strip from the north and fighting tourist traffic the whole way down. The alternative -- surface streets through Spring Valley and down Valley View to Tropicana -- skips the Strip entirely and can save significant time when the boulevard is backed up.</p>
<p>Northwest valley residents should realistically plan for 40 to 55 minutes from Summerlin proper on a game day with normal Strip conditions. Budget an extra 20 minutes as a buffer if you cannot afford to miss first pitch.</p>

<h2>Coming From North Las Vegas and Downtown</h2>
<p>This is actually the most straightforward commute. I-15 south from North Las Vegas takes you directly to the Tropicana interchange. Downtown residents on or near the Las Vegas Boulevard corridor have the option to drive south on the boulevard directly, though the tourist traffic makes this a variable experience. Total drive time from North Las Vegas or downtown is typically 20 to 30 minutes.</p>

<h2>Rideshare and Public Transit Options</h2>
<p>Rideshare will be the right call for many fans, particularly those coming from the Strip hotels or attending with a group that wants to drink at the game. Lyft and Uber operate heavily in the Strip corridor, and the pricing will be competitive with self-parking costs, especially if you factor in the time and stress of parking.</p>
<p>The Las Vegas Monorail runs along the eastern side of the Strip and stops near several major hotel properties. Depending on final transit configurations, there may be a walkable or shuttle connection from the monorail to the stadium. This option is more useful for visitors staying in Strip hotels than for valley residents commuting from home.</p>
<p>The RTC bus system serves the Las Vegas Boulevard corridor with the Deuce route, but the Deuce is slow in Strip traffic and is better suited for casual visitors than for fans with a specific first pitch to catch.</p>

<h2>Parking at the Stadium</h2>
<p>Full parking details will be released closer to the stadium's opening, but here is what we know from the planning documents. The stadium itself does not have an adjacent parking structure of the size you would expect for a 33,000-seat venue. The Strip location makes building a traditional stadium parking lot impractical. The solution involves a combination of nearby casino parking structures, remote lots with shuttle service, and street-level paid parking in the surrounding blocks.</p>
<p>Fans willing to pay premium prices will be able to park in the casino garages immediately adjacent to the stadium. Fans willing to walk 10 to 15 minutes will have more affordable options in the parking structures further from the Strip. Fans who refuse to pay what Las Vegas charges for parking will find this a more frustrating experience than a suburban stadium with 10,000 spaces and a $15 flat rate.</p>
<p>Plan accordingly. Buy tickets early, decide on your transportation mode in advance, and do not try to wing it on Opening Day.</p>
${affiliateBlock}
`,
  },
  {
    slug: "as-spring-training-2026-recap",
    title: "A's Spring Training 2026 Recap: What We Learned and What to Expect",
    description: "Spring training 2026 is done. Here is what we learned about the A's roster, who impressed, who made the team, and what the 2026 season looks like.",
    date: "March 7, 2026",
    category: "Roster",
    emoji: "⚾",
    body: `
<h2>Six Weeks in the Desert Tell You Something</h2>
<p>Spring training statistics do not tell the whole story. Everyone knows this. Pitchers are working on specific things, hitters are experimenting with their approach, and the competitive intensity is nothing like a late-September pennant race. But six weeks of watching players every day in practice and game conditions does reveal genuine information about who is ready, who is not, and which storylines will define the regular season.</p>
<p>The A's 2026 spring camp in Mesa, Arizona gave us a few clear answers and several questions that will not be resolved until real games start counting.</p>

<h2>The Starting Rotation Looks Like a Real Asset</h2>
<p>JP Sears was excellent in camp. Not vintage-Sears excellent, where you worry about sustainability, but consistent and controlled in a way that suggests he has taken another step forward. His changeup command improved noticeably from last September. The pitch has always been his best weapon but inconsistent command undermined it; this spring he was locating it to both sides of the plate against both righties and lefties. That is a legitimately good development.</p>
<p>Luis Medina was the big story. He had three starts that looked like what everyone has been waiting for -- sub-3.00 ERA stuff, strikeouts in bunches, and just enough walk control to keep baserunners from piling up. Then he had one start that looked like the old Luis Medina. The variance is still there. But the good version of Medina appeared more frequently this camp than in any previous spring, and that is meaningful.</p>
<p>The back of the rotation resolved itself through attrition as much as merit. Joey Estes, Hogan Harris, and Brady Basso all showed enough to earn consideration. The staff went into the final roster decisions with a legitimate competition, which is a better problem to have than falling back on whoever is left standing.</p>

<h2>Mason Miller Is Healthy and He Is Scary</h2>
<p>The closer's health is always the biggest variable in bullpen planning, and Miller's health history makes it doubly important for the A's. This spring, he looked fully right. The fastball was at 100 to 101 mph consistently. The slider was biting at the corners. He struck out 11 batters in six spring innings without walking anyone, which is not a number that happens by accident.</p>
<p>If Miller stays healthy for the first half, the back end of the bullpen becomes a genuine weapon rather than a liability. That possibility alone is reason for optimism about the 2026 season.</p>

<h2>Brent Rooker Is Ready for a Contract Year</h2>
<p>Rooker enters the final year before free agency, and he looked like a man who knows exactly what the stakes are. He hit .340 in spring games with four home runs and only 11 strikeouts in 47 at-bats, which suggests his contact rate may genuinely be improving beyond his career norms. Whether that holds up in regular season conditions is the question, but he came to camp in shape, locked in, and visibly motivated.</p>
<p>A big year from Rooker creates a difficult decision for the front office in November. He is the kind of player worth extending if the price is reasonable. He is also the kind of player you trade at the deadline if the offers are strong and you are not in playoff position. Watch the standings in July and August for signals about which path the organization is leaning toward.</p>

<h2>Lawrence Butler Takes a Real Step Forward</h2>
<p>Butler's spring was the most encouraging development for the long-term outlook. He hit consistently to all fields, showed improved pitch recognition on offspeed pitches, and played center field with the kind of confidence you want to see from a player who is being asked to be a cornerstone. The plate discipline metrics showed walks up and chases down, which is exactly the development track you want from a young player entering his prime.</p>

<h2>Questions Heading Into April</h2>
<p>Catching remains a concern. The A's catchers had an average spring with the bat and the framing numbers from the early tracking data were not impressive. This is the position where the team can least afford to be below average, given that the catching market now values framing and game-calling at premium levels.</p>
<p>The bench is thin. The A's are carrying versatile players who can play multiple positions, which is good roster construction strategy, but the gap in quality between the starters and the bench is larger than you want heading into a 162-game season where injuries are inevitable.</p>
<p>Overall verdict: this is a team that could win 78 to 85 games in 2026 if the rotation holds and the offense develops as the optimistic projections suggest. That is a meaningful improvement from recent seasons and the beginning of something Las Vegas fans can actually watch with anticipation.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-as-prospects-to-watch",
    title: "Five A's Prospects Most Likely to Impact Las Vegas in the Next Two Years",
    description: "The five Las Vegas Athletics minor league prospects with the highest chance of making a meaningful impact on the major league roster within the next 24 months.",
    date: "February 24, 2026",
    category: "Prospects",
    emoji: "🌟",
    body: `
<h2>The Pipeline Matters More Than Ever</h2>
<p>The Athletics have always had a philosophy built around player development. When you cannot outspend the Yankees or Dodgers in free agency, you draft and develop your way to competitiveness. That philosophy produced the Moneyball teams, the 2012 wildcard team, and multiple playoff appearances against all financial odds. It also, repeatedly, produced teams that were good but not quite good enough -- and that sold off the core when the window closed.</p>
<p>In Las Vegas, the development pipeline is the most important factor in whether the franchise builds something lasting or repeats the cycle of near-misses. Here are the five prospects most likely to arrive and actually change what the big league team looks like within the next 24 months.</p>

<h2>1. Tyler Soderstrom, Catcher/First Base</h2>
<p>Soderstrom was the top pick in the 2021 draft and has spent five years in the system developing. He hit for significant power at Double-A and Triple-A in 2024 and 2025, with raw pop that shows up in both game power and the exit velocity data. The question that has followed him throughout his minor league career is the position. He was drafted as a catcher, has tried to stick behind the plate, and has had multiple evaluators suggest that his long-term home is first base or a corner outfield spot.</p>
<p>Whatever position he winds up at, the bat is the reason he matters. If Soderstrom can hit .260 with 25 home runs in his first full major league season, the A's lineup transforms from below average to dangerous. He is the most impactful near-term arrival in the system.</p>

<h2>2. Max Muncy, Shortstop/Second Base</h2>
<p>Not the Max Muncy of the Dodgers. This is a younger prospect with the same name who has earned attention through a combination of defensive versatility and an improving bat. He plays shortstop and second with equal comfort, gives the A's a legitimate defensive upgrade at both positions, and has enough bat to stick in a middle-of-the-order role if his development continues on the current track.</p>
<p>Shortstop defense is undervalued in public conversation but highly valued by the teams that have to run games out. Having a shortstop who saves runs on the defensive side while also contributing offensively is worth more than a first-glance power projection suggests.</p>

<h2>3. Jacob Wilson, Shortstop</h2>
<p>Wilson was one of the organization's top priorities in recent drafts and has moved quickly through the system. He is a contact-first player with high baseball IQ, good baserunning instincts, and the kind of athleticism that lets him play multiple positions without being below average anywhere. His home run numbers will never impress anyone. His on-base percentage and his ability to put the ball in play consistently make him the kind of leadoff option the A's desperately need.</p>
<p>If Wilson arrives and performs as his minor league track suggests he can, he solves the table-setter problem that has plagued the lineup for the last several years.</p>

<h2>4. Denzel Clarke, Outfield</h2>
<p>Clarke is the most toolsy player in the system. The athleticism is obvious, the arm is plus, and the raw power is significant. The development question is the strikeout rate, which has run high through every level of the minors. When players with Clarke's physical tools learn to make contact, they become stars. When they do not, they become cautionary tales about athletic potential that never translated.</p>
<p>The A's development staff has worked with Clarke on shortening his swing and improving his pitch recognition. The early results from 2025 were encouraging -- strikeout rate trending down, walk rate trending up, which is the right direction. Give this one two years before drawing conclusions.</p>

<h2>5. Henry Baez, Starting Pitcher</h2>
<p>Pitching is always the highest-risk player development category because arm injuries can derail even the most carefully developed careers. Baez has mostly avoided those problems so far, which is the first encouraging sign. The second is that his stuff translates across multiple levels without significant degradation -- his fastball is 94 to 97 mph at Double-A, not 88 to 92 mph the way some pitchers lose velocity as the competition improves.</p>
<p>Baez is not a strikeout pitcher in the traditional sense. He generates soft contact and induces weak grounders at a high rate, which means he needs good defense behind him to be effective. On a team that is building its infield defense around Wilson and Muncy, the combination is interesting.</p>
<p>The Las Vegas era needs these players to arrive healthy and ready. The stadium is being built. The fans are forming. Now the product needs to give them reasons to come back every night.</p>
${affiliateBlock}
`,
  },
  {
    slug: "moneyball-legacy-las-vegas",
    title: "Moneyball Was Born in Oakland. Here's What It Means for Las Vegas.",
    description: "The analytics revolution that started with Billy Beane and the Oakland A's reshaped how every team in baseball is built. Las Vegas inherits that legacy.",
    date: "February 22, 2026",
    category: "History",
    emoji: "📊",
    body: `
<h2>Before the Book, Before the Movie</h2>
<p>Before Michael Lewis wrote the book and Brad Pitt played Billy Beane in the film, the Oakland A's were doing something that the rest of baseball thought was either brilliant or insane, depending on who you asked. They were building playoff-caliber rosters on budgets that should have produced losing records. They were doing it systematically, using data to find value where the conventional wisdom said none existed. And they were winning.</p>
<p>The year was 2002. The A's had lost Jason Giambi and Johnny Damon and Jason Isringhausen to free agency in the offseason. The conventional baseball mind expected the team to collapse. Instead, they won 103 games and set a then-American League record with 20 consecutive wins in August. Beane and his front office had replaced the departed stars with undervalued players who produced comparable results at a fraction of the cost.</p>
<p>That story changed baseball. And now it belongs to Las Vegas.</p>

<h2>What Moneyball Actually Was</h2>
<p>The popular understanding of Moneyball reduces it to one idea: on-base percentage was undervalued, so the A's bought on-base guys. That is real, and it was genuinely revolutionary for the time -- most of baseball was still obsessed with batting average and RBIs as the primary offensive measures. But the deeper insight was not about any specific statistic. It was about market inefficiency.</p>
<p>Beane's actual argument was that baseball had inefficiencies -- undervalued players and skills -- that a smart team could exploit to get more production per dollar than the market price suggested. In 2002, on-base percentage was the inefficiency. By 2005, every team was looking at OBP and the inefficiency was gone. By 2010, defense and pitching framing were the inefficiencies. By 2020, it was spin rate and pitch tunneling.</p>
<p>The revolution was not a specific metric. It was the method: systematic analysis to find value where others were not looking. That method has permeated every level of baseball organization from the lowest minors to the highest front offices, and the A's started it.</p>

<h2>The Arms Race That Followed</h2>
<p>When Lewis published the book in 2003, roughly half the major league teams had invested in serious statistical analysis. Within five years, every team did. The Boston Red Sox, who had hired Bill James and built a legitimate analytics department, won the World Series in 2004. The Houston Astros, who had the most aggressive analytical rebuild in sports history from 2011 to 2014, made the playoffs every year from 2015 to 2023. The Tampa Bay Rays, who had nothing but payroll constraints and analytical sophistication, competed every year against teams outspending them by three or four times.</p>
<p>The A's had started the arms race and then found themselves caught in the middle of it, still constrained by ownership's payroll philosophy but no longer possessing the analytical advantage that the constraint had once forced them to develop.</p>

<h2>How the Legacy Shapes Las Vegas Construction</h2>
<p>David Forst, the current A's general manager, is a direct intellectual heir to the Beane philosophy. He worked under Beane for years and internalized the approach. The Las Vegas front office is not going to out-spend the Houston Astros. What it can do is find the 2026 version of the 2002 Oakland inefficiency and exploit it before the rest of baseball catches up.</p>
<p>The current inefficiency most frequently discussed in analytics circles involves pitch design -- the deliberate engineering of pitcher repertoires to maximize movement and deception rather than simply velocity. The A's have invested in this area, and the pitching development work done with prospects like Henry Baez reflects the approach.</p>
<p>There is also an argument that the defensive metrics revolution is still not fully priced into the market. Teams still overpay for corner outfield power at the expense of elite middle-infield defense. A team that builds a defensive identity around its infield can save runs in ways that the box score does not immediately show but the standings eventually reflect.</p>
<p>Moneyball in Las Vegas looks different from Moneyball in Oakland. The method is the same. The specific application changes with the market. The fans who understand that history will have a richer experience watching this team than the fans who only look at the standings.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-sports-town-history",
    title: "How Las Vegas Became a Real Sports Town: Raiders, Knights, Aces, and Now the A's",
    description: "The history of Las Vegas becoming a legitimate major league sports city, from the Raiders' arrival through the Golden Knights dynasty to the Athletics completing the picture.",
    date: "February 20, 2026",
    category: "Las Vegas",
    emoji: "🏙️",
    body: `
<h2>Not Long Ago, This Was Not Possible</h2>
<p>Ten years ago, the conventional wisdom in sports business was that Las Vegas could not support major league sports. The reasons seemed logical. The city's economy ran on tourism and conventions, not resident populations. The visitor base was transient. The lack of a dominant local television market made the media rights economics difficult. And the gambling industry created legal complications that the major professional leagues had carefully avoided for generations.</p>
<p>All of that conventional wisdom is now demonstrably wrong. Las Vegas hosts four major professional sports franchises. It has produced championship-level teams, built genuine fan communities, and generated the kind of venue revenue that makes other sports markets jealous. The story of how this happened is worth understanding for any A's fan who wants context for what they are part of.</p>

<h2>The Golden Knights Changed Everything</h2>
<p>The turning point was October 2017 when the Vegas Golden Knights played their first NHL game. The team had been awarded an expansion franchise less than two years earlier, and nobody outside of Las Vegas expected them to be anything other than a respectable expansion team building toward future competitiveness.</p>
<p>Instead, the Golden Knights went to the Stanley Cup Final in their first season. They became the fastest expansion team in NHL history to reach the championship round. And in doing so, they created something that had never existed in Las Vegas: a local professional sports team that the city could rally around.</p>
<p>The Golden Knights became a civic rallying point in the aftermath of the Route 91 Harvest mass shooting that occurred just weeks into their first season. The team became a symbol of resilience and community in a way that purely sporting success never could have accomplished alone. Las Vegas fell in love with hockey in a way that confounded outsiders and defined insiders.</p>
<p>The Knights won their first Stanley Cup championship in 2023, cementing their place as one of the premier franchises in professional hockey and definitively answering any questions about whether Las Vegas was a real hockey city.</p>

<h2>The Raiders Bring the NFL</h2>
<p>The Las Vegas Raiders arrived in 2020 and immediately faced the challenge of playing their first two seasons in a stadium with no fans, due to the pandemic. The full Allegiant Stadium experience did not materialize until 2021, but when it did, it confirmed that the NFL had been right to grant the relocation.</p>
<p>Allegiant Stadium is a genuine architectural achievement. The 65,000-seat domed facility on the south end of the Strip hosts major events year-round, from NFL games to international soccer matches to boxing cards. Its presence established that Las Vegas could not just support a team but support a world-class venue.</p>
<p>The Raiders fan base in Las Vegas is complicated -- the team has significant national fan followings that travel to games regardless of the home city, which inflates attendance in ways that do not fully translate to a genuine local community. But real local Raiders fans do exist and they are building an identity that is separate from the transplanted Oakland or Los Angeles versions.</p>

<h2>The Aces and the WNBA Standard</h2>
<p>The Las Vegas Aces, owned by MGM Resorts, won back-to-back WNBA championships in 2022 and 2023 and established themselves as the model franchise in women's professional basketball. A'ja Wilson became a legitimate star whose profile extended beyond the WNBA, and the Aces demonstrated that Las Vegas could not just support sports but could develop and retain the kind of superstar talent that builds a dynasty.</p>
<p>The Aces matter for the A's story because they normalized championship-level professional sports in Las Vegas. Before the Knights and Aces, Las Vegas had to prove it could host sports. Now it has to prove it can stay at the highest level consistently, which is a much better problem to have.</p>

<h2>The A's Complete the Picture</h2>
<p>With the Athletics, Las Vegas will have teams in all four major North American professional sports leagues simultaneously. This puts it in the company of cities like New York, Los Angeles, Chicago, and Dallas. It is a remarkable transformation for a city that had no major league sports a decade ago.</p>
<p>Baseball is different from the other sports the city has adopted. The 81-home-game schedule creates a community presence that football and hockey, with their shorter seasons, cannot match. Baseball seeps into a city in a different way than other sports. It creates a rhythmic engagement over six months that makes it part of daily life in a way that a once-a-week football game simply cannot replicate.</p>
<p>Las Vegas is a sports town now. The Athletics are the final piece of that transformation.</p>
${affiliateBlock}
`,
  },
  {
    slug: "gameday-guide-las-vegas-athletics",
    title: "The Ultimate Las Vegas A's Gameday Guide",
    description: "Everything you need to know for a Las Vegas Athletics gameday: where to eat, where to drink before the game, parking, and what to expect at the new ballpark.",
    date: "February 18, 2026",
    category: "Gameday",
    emoji: "🎮",
    body: `
<h2>Building the Ritual Before the Ballpark Opens</h2>
<p>The Las Vegas Athletics ballpark does not open until 2028. But gameday culture does not wait for a stadium. It forms around the gathering places, the pre-game traditions, and the shared rituals that fans build before they ever walk through the turnstile. By the time the stadium opens, the best Las Vegas A's fans will already have their gameday routine down. Here is how to build it.</p>

<h2>The Pre-Game Meal: Strip vs. Local</h2>
<p>The stadium's location near the southern end of the Strip means you have two genuinely different pre-game dining options depending on how early you want to arrive and how much you want to spend.</p>
<p>For the full Strip pre-game experience, the restaurants along Las Vegas Boulevard within walking distance of the stadium area offer everything from quick-service to white-tablecloth dining. Giada at The Cromwell does Italian that punches above its hotel-restaurant weight class. Jaleo at the Cosmopolitan is a tapas spot that handles groups well. For something faster, In-N-Out Burger on the east side of the Strip is a legitimate Las Vegas institution that will get you fed without eating into your entire pre-game budget.</p>
<p>For the local pre-game experience that avoids Strip prices, the Henderson and East Las Vegas corridors offer better value. Born and Raised, a steakhouse on the east side, has become a gathering spot for local sports fans. Raising Cane's for chicken fingers before a game is not glamorous but it is honest and works. The bars and restaurants in the Town Square area of the southwest valley have become a genuine sports gathering corridor for valley residents who do not want to fight Strip traffic for a beer.</p>

<h2>Parking: Plan It in Advance</h2>
<p>Do not wing the parking situation at a sold-out Las Vegas A's game. The Strip location means that the casual approach of showing up and finding something will result in either an expensive impulsive purchase from a garage that knows you have no options, or a long walk from wherever you wound up parking.</p>
<p>The recommended approach for most valley residents is to identify one of the designated remote lots with shuttle service, pre-purchase a parking pass online, and budget the 15 to 20 minutes of shuttle time into your arrival plan. This costs less than Strip garage parking and removes the decision from your game-night to-do list.</p>
<p>For fans who specifically want the closest possible parking, the casino garages adjacent to the stadium will offer pre-purchase parking passes at a premium. Book these as far in advance as possible. They sell out for marquee games.</p>

<h2>Inside the Ballpark: What to Expect</h2>
<p>The new Las Vegas Athletics ballpark is designed with the fan experience at the center of every decision. The concourse will be wide enough to actually move through without fighting the crowd. The sight lines from all levels were a primary design constraint, which means there are very few bad seats in the house -- a stark contrast to the Coliseum, which had significant sections where the sight lines were obstructed or the seats were simply too far from the action.</p>
<p>The food and beverage program will reflect the Las Vegas market's expectations for quality. Expect a higher floor on concession quality than you found at the Coliseum or at Sacramento's Sutter Health Park. Las Vegas visitors are accustomed to better food options than most sports venues provide, and the A's have indicated they understand this expectation.</p>
<p>The club areas will be significant. Premium amenities are how a small-market franchise in an expensive city generates the revenue necessary to compete. Expect the club sections to feel genuinely different from the general admission experience -- dedicated bars, better food, climate-controlled spaces, and in-seat service for the highest tier options.</p>

<h2>Post-Game: Where the Night Goes After the Final Out</h2>
<p>Las Vegas is the one baseball market where the question of what to do after the game has a genuinely interesting answer. The Strip nightlife infrastructure means that post-game entertainment options within walking distance of the stadium are essentially limitless. Whether you want another drink, a late dinner, a show, or just the spectacle of the Strip at midnight, all of it is available.</p>
<p>For valley residents who do not want to navigate the Strip on a weeknight, the post-game plan is simpler: get to your car, get on I-15, and get home. The traffic out of a baseball game is significantly better than NFL game traffic, partly because baseball crowds spread their departures over the final few innings instead of all leaving at once.</p>
<p>Build your ritual now. By the time 2028 gets here, you will have it dialed in.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-as-merchandise-where-to-buy",
    title: "Where to Buy Las Vegas A's Gear: Jerseys, Hats, and Official Merchandise",
    description: "Where to find official Las Vegas Athletics merchandise: the official team store, licensed retailers, and what gear is available during the transition period.",
    date: "February 15, 2026",
    category: "Fan Scene",
    emoji: "👕",
    body: `
<h2>The Market Is Wide Open Right Now</h2>
<p>The Las Vegas Athletics are in an interesting position as a franchise in transition. The team has moved cities, the stadium is under construction, and the brand is in a state of evolution from the Oakland era to whatever the full Las Vegas identity becomes. For fans who want to wear the gear, this creates both opportunities and confusion.</p>
<p>Here is a practical guide to finding legitimate Athletics merchandise right now, with notes on what to expect as the Las Vegas brand develops further.</p>

<h2>The Official Athletics Store</h2>
<p>The team's official online store at athletics.com is the first and most reliable place to find officially licensed merchandise. The store carries the full range of current Athletics gear including the Las Vegas branding that has been introduced since the move. Jerseys, hats, t-shirts, and accessories all appear with the Las Vegas identification rather than the Oakland branding on the most current items.</p>
<p>Shipping from the official store is reliable and returns are straightforward for sizing issues. The prices reflect the official team store model -- you pay a slight premium over third-party retailers in exchange for guaranteed authenticity and the knowledge that your purchase supports the franchise directly.</p>

<h2>Fanatics: The Go-To for Online Selection</h2>
<p>Fanatics has become the dominant online retailer for professional sports merchandise, and their Athletics selection is the broadest available outside of the official store. The key advantage over the team store is the breadth of non-standard items: throwback jerseys from different eras, licensed novelty items, customized name and number options, and gear from the full history of the franchise rather than just the current season.</p>
<p>For Las Vegas A's fans who want to wear the Kelly Green and gold from the dynasty era alongside the current Las Vegas branding, Fanatics is where you find both. Their selection of retro Athletics gear -- particularly the 1970s World Series jerseys -- is unmatched and the quality on the replica jerseys is solid.</p>

<h2>Dick's Sporting Goods and Academy: Valley Locations With Inventory</h2>
<p>Major chain sporting goods retailers carry officially licensed Athletics merchandise at locations throughout the Las Vegas valley. Dick's at Town Square and the Henderson locations both stock current Athletics hats and t-shirts. Academy Sports locations in the valley have similar inventory. These are useful for fans who want to try on a hat before buying or who do not want to wait for shipping.</p>
<p>The in-store selection at chain retailers is always more limited than online options. You will not find the full jersey lineup or the throwback pieces in a Dick's. But for a standard fitted cap or a game-day t-shirt, the valley locations are convenient.</p>

<h2>The Las Vegas Premium Outlets and Town Square</h2>
<p>The Premium Outlets on South Las Vegas Boulevard and the Town Square mall both have sports merchandise retailers that carry licensed Athletics gear. These locations serve both valley residents and the millions of tourists who pass through the Las Vegas retail corridor. Expect elevated prices at both locations relative to chain sporting goods stores -- the Strip-adjacent retail market prices accordingly.</p>
<p>During game days once the stadium opens, a team merchandise store will operate in the ballpark. The in-venue store will carry the current season's full merchandise line, limited-edition items tied to specific games or promotions, and the kind of exclusive items that are only available at the stadium. For opening season, these in-venue exclusives will be the most collectible pieces of the Las Vegas Athletics brand history.</p>

<h2>StubHub and eBay: For the Rare and Historical Pieces</h2>
<p>If you are looking for genuine vintage Oakland A's merchandise -- actual game-worn items, authentic jerseys from the 1970s dynasty, or signed memorabilia from the Moneyball era -- the secondary market is your only option. StubHub, eBay, and specialty sports memorabilia dealers occasionally have legitimate pieces from the Athletics' Oakland years.</p>
<p>Exercise caution with any item described as authentic and priced suspiciously low. The Athletics memorabilia market, like all sports memorabilia markets, has its share of reproductions and misrepresented items. Stick to sellers with strong ratings and clear authentication documentation when spending significant money on vintage pieces.</p>

<h2>What to Watch For</h2>
<p>The Las Vegas-specific brand continues to evolve. Watch for the team's first dedicated Las Vegas City Connect jersey, which could arrive as early as 2027 or in conjunction with the stadium opening in 2028. These city-specific uniform releases have become major cultural moments across baseball and the Las Vegas version will draw significant attention. Get on the team's email list so you hear about limited releases before they sell out.</p>
${affiliateBlock}
`,
  },
  {
    slug: "al-west-preview-2026",
    title: "AL West Preview 2026: How the A's Stack Up Against the Division",
    description: "A full AL West preview for 2026: where the A's stand against the Astros, Rangers, Mariners, and Angels heading into the season.",
    date: "March 6, 2026",
    category: "Roster",
    emoji: "🗺️",
    body: `
<h2>The Hardest Division in Baseball Is the A's Home</h2>
<p>The American League West has been one of the most competitive divisions in baseball for most of the last decade. The Houston Astros turned a deliberate losing streak into a dynasty that collected six AL West titles and three World Series appearances from 2017 to 2022. The Texas Rangers rebuilt aggressively and won the 2023 World Series. The Seattle Mariners have been competitive without winning. The Los Angeles Angels have wasted Mike Trout's entire career while failing to build around him.</p>
<p>Into this mix come the Las Vegas Athletics, with a young roster, a limited payroll, and a new city that needs wins to build a real fan base. Here is an honest assessment of how the A's stack up against every team in the division.</p>

<h2>Houston Astros: The Standard That Must Be Matched</h2>
<p>The Astros are still the team to beat in the AL West, even after losing key players to free agency and age-related decline. Yordan Alvarez remains one of the most dangerous hitters in baseball. The Astros' pitching development system has replenished the rotation with younger arms who have learned from Dusty Baker's successor how to execute a game plan.</p>
<p>The gap between the Astros and the A's is real. Houston's payroll is three to four times the Las Vegas payroll. Their depth is superior at almost every position. Their experience in big games far exceeds anything on the current A's roster. Realistically, the A's are not competing with the Astros for the division title in 2026. What they can do is beat Houston in individual series, particularly at home, and demonstrate that the gap is narrowing rather than growing.</p>

<h2>Texas Rangers: Defending Champions Still a Threat</h2>
<p>The Rangers won the 2023 World Series on the back of Corey Seager and Marcus Semien at the top of the lineup and a pitching staff that held together at the right moments. The 2025 season was a step back as the team navigated contract decisions and age-related performance changes. Heading into 2026, Texas is still a good team but perhaps not the overwhelming force it was at its peak.</p>
<p>The A's have a chance to steal series from Texas when their young rotation lines up favorably. Seager and Semien are still threats, but the Rangers' depth has thinned as front office decisions have constrained the budget. This is a .500 series matchup for the A's in a way that the Houston matchup is not.</p>

<h2>Seattle Mariners: The Team That Keeps Being Almost Good</h2>
<p>Seattle's story for the last several years has been a consistent gap between expected performance and actual results. They have the pitching -- Robbie Ray before the injury, and a young rotation that should be better than it has been. They have center fielder Julio Rodriguez, who has shown flashes of becoming a superstar. They have never fully delivered on the promise.</p>
<p>For the A's, the Mariners are the most direct comparison in terms of organizational philosophy. Both teams are trying to develop their way to competitiveness in a division with at least one team outspending them dramatically. The head-to-head results between Seattle and Las Vegas will tell us a lot about which organization is executing better.</p>

<h2>Los Angeles Angels: The Strange Sad Story Continues</h2>
<p>The Angels are one of the great organizational tragedies in modern baseball. Mike Trout, when healthy, remains arguably the best baseball player alive. Shohei Ohtani, during his time in Anaheim, was a two-way player who rewrote the game. The Angels never surrounded either player with enough support to actually compete for a championship, and both players have now moved on.</p>
<p>The post-Ohtani Angels are rebuilding. Their rotation has multiple young arms that could develop into quality starters. Their hitting is thin. They represent the most favorable matchup on the A's schedule -- a team that the Las Vegas Athletics should expect to win series against and that provides an opportunity to pad the win column against a struggling rival.</p>

<h2>The A's Path to Relevance in 2026</h2>
<p>Winning the AL West is not realistic for 2026. Being a wild card contender is a stretch but not impossible if the rotation holds and the offense takes the step that the optimistic projections suggest. The realistic goal is to finish above .500 for the first time in several years and demonstrate to the Las Vegas fan base that the franchise is trending in the right direction.</p>
<p>That means winning the series against the Angels and competing with the Mariners. It means stealing series from the Rangers and the Astros when the matchups favor the A's rotation. It means playing better baseball in the second half than the first half, which has been a consistent failure point in recent seasons.</p>
<p>The AL West does not give anyone a free pass. But the A's have a path to respectability in 2026, and that is more than they could say for a few years during the rebuild.</p>
${affiliateBlock}
`,
  },
  {
    slug: "oakland-to-sacramento-to-vegas-timeline",
    title: "Oakland to Sacramento to Las Vegas: The Complete A's Move Timeline",
    description: "The full timeline of the Athletics' relocation: from the last game in Oakland through the Sacramento interim years to the Las Vegas era.",
    date: "February 12, 2026",
    category: "History",
    emoji: "🗓️",
    body: `
<h2>A Move Fifty Years in the Making</h2>
<p>The Athletics' relocation from Oakland to Las Vegas did not happen overnight, and it did not begin with the official announcement. The conditions that produced the move were decades in the making -- a stadium that aged into irrelevance, ownership philosophies that prioritized the bottom line over the product, city-franchise relationships that eroded slowly and then all at once. Understanding the full timeline puts the Las Vegas era in its proper context.</p>

<h2>The Coliseum Years and the Decline</h2>
<p>The Oakland-Alameda County Coliseum opened in 1966 and was, for its time, a decent facility. The A's shared it with the Oakland Raiders for decades. By the 1990s, the shared-venue problems had become acute. The Raiders demanded renovations that effectively destroyed the baseball sight lines. The addition of "Mount Davis," the upper deck structure built for football in 1996, blocked what had been pleasant views of the Oakland hills and made the ballpark feel like a prison yard. It is generally considered one of the worst renovations in sports facility history.</p>
<p>Oakland A's fans who attended games through the 1990s and 2000s became accustomed to a facility that was objectively inferior to almost every other ballpark in the major leagues. The team was good often enough that the fans showed up anyway. But the stadium problem was always there, slowly poisoning the relationship between the franchise and the city.</p>

<h2>The Howard Terminal Saga: 2018 to 2022</h2>
<p>By 2018, the A's had settled on Howard Terminal, a former shipping terminal on the Oakland waterfront near Jack London Square, as the site for a new ballpark. The proposal was ambitious: a privately financed baseball stadium surrounded by a mixed-use development that would include housing, retail, and office space. The team argued the project would pay for itself through the development value and would not require significant public subsidy.</p>
<p>The environmental review, public approval process, and negotiations with port operators, unions, and city government consumed four years. Oakland's Board of Port Commissioners approved the project. The city council gave its approval. Advocates spent years of their lives fighting for the development.</p>
<p>In April 2023, the A's announced they had signed a binding term sheet with the Las Vegas stadium authority and that the team would be relocating to Nevada. The Howard Terminal announcement was essentially over. The Las Vegas announcement confirmed what skeptics had suspected: the Howard Terminal negotiations had been conducted by an ownership group that had already identified an exit.</p>

<h2>The Final Oakland Season: 2023</h2>
<p>The 2023 season in Oakland was one of the most unusual in baseball history. The team had publicly announced it was leaving. The roster had been systematically dismantled through trades and non-tenders, reducing payroll to the minimum necessary to field a competitive minor league team dressed in major league uniforms. Attendance collapsed.</p>
<p>The fans who did show up were angry and expressive. The "Reverse Boycott" -- an organized effort by A's fans to fill the stadium one last time and demonstrate that the community cared about baseball -- drew 27,000 people and generated significant national attention. The gesture was genuine and powerful. It did not change the outcome.</p>
<p>The final game in Oakland on September 26, 2023, was emotional for the Oakland fans who attended. It was the end of 55 years of baseball in the East Bay.</p>

<h2>Sacramento: The Awkward In-Between</h2>
<p>While the Las Vegas stadium was under construction, the A's played in Sacramento at Sutter Health Park, home of the Sacramento River Cats. It was a Triple-A facility hosting major league games, which created odd moments -- a major league team playing in a 14,000-seat minor league ballpark while charging major league prices.</p>
<p>The Sacramento years were defined by low attendance, low roster investment, and the organizational limbo of a franchise waiting for its permanent home. Some Sacramento fans embraced the unexpected presence of major league baseball. Most observers treated it as a placeholder, which is essentially what it was.</p>

<h2>The Las Vegas Arrival</h2>
<p>The formal announcement of the Las Vegas move followed the Nevada legislature's approval of public funding for the stadium. The state committed $380 million toward the project, with the A's responsible for the remainder of the estimated $1.5 billion construction cost. Ground broke on the Strip site and construction began in earnest.</p>
<p>The team arrived in Las Vegas while playing their home games in Sacramento, which created the unusual situation of a franchise based in one city playing its games in another. This is the current state as of early 2026, with the countdown to Opening Day 2028 ongoing and the building rising on Las Vegas Boulevard.</p>
<p>The move is complete in spirit and nearly complete in reality. By 2028, the only remnant of the Oakland era will be the historical record and the memories of the fans who were there for all of it.</p>
${affiliateBlock}
`,
  },

  {
    slug: "as-2026-roster-breakdown-who-is-coming-to-vegas",
    title: "The A's 2026 Roster Breakdown: Who's Coming to Vegas and What to Expect",
    description: "A deep roster analysis of the Las Vegas Athletics heading into 2026: key players, emerging prospects, and what the core looks like ahead of the 2028 stadium opening.",
    date: "March 15, 2026",
    category: "Roster Intel",
    emoji: "📋",
    body: `
<h2>Building the Vegas Roster</h2>
<p>The Las Vegas Athletics enter 2026 in a recognizable position: a franchise in directed transition, with a young core developing toward what management hopes will be a competitive team by the time the Las Vegas Strip stadium opens in 2028. Evaluating this roster honestly requires separating the floor from the ceiling, the contracts from the futures, and the players who are here to contribute from the players who are here to develop.</p>

<p>What follows is a position-by-position breakdown of who matters on this roster, what their roles are, and what reasonable expectations look like for the season ahead.</p>

<h2>Starting Rotation: The Organization's Strongest Asset</h2>
<p>JP Sears anchors the rotation and is the closest thing the A's have to a genuine top-of-the-rotation starter. His stuff is not overpowering -- he is not a triple-digit fastball guy -- but his command is advanced and his ability to generate weak contact through pitch sequencing is genuine. He enters 2026 coming off his best statistical season, and the projection systems are uniformly positive about continued development.</p>

<p>Luis Medina is the most important wildcard in the organization. The raw stuff is legitimate ace-caliber: a mid-to-upper-90s fastball, a slider with swing-and-miss movement. The issue has always been command, and command development is notoriously nonlinear. The optimistic scenario has Medina building on the control improvements he showed in spring camp and becoming a genuine number-two starter. The pessimistic scenario is more of the same variance that has defined his career. Which version shows up will do more than any other single roster factor to determine whether this team contends for a wild card berth.</p>

<p>Joey Estes, Hogan Harris, and Brady Basso fill out the back end of the rotation with different profiles but similar organizational roles: innings eaters who keep the team in games while not being asked to carry them. None of the three is a long-term rotation anchor. All three are valuable as components of a competitive five-man staff.</p>

<h2>Bullpen: One Dominant Closer, Questions Behind Him</h2>
<p>Mason Miller is the most important reliever in the American League when healthy. The issue -- and it is a real issue -- is the "when healthy" qualifier. Miller has dealt with arm issues across multiple seasons that have limited his availability. A closer who cannot pitch on consecutive nights creates real late-game problems, because modern bullpen management increasingly requires the back-end arm to be available in high-leverage situations across multiple appearances per week.</p>

<p>The front office has managed this carefully, building a bullpen depth chart that does not depend on Miller being available every game. T.J. McFarland provides the left-handed matchup option. Lucas Erceg has closer-caliber stuff when he locates his secondary pitches. The back end will be supplemented by spring training performances and waiver wire additions as the season approaches.</p>

<h2>Lineup: Rooker as the Anchor, Butler as the Future</h2>
<p>Brent Rooker is the offensive centerpiece and enters a contract year with something to prove. He hit 30 home runs in 2024 and his power is genuine at the major league level. The plate discipline questions remain -- good pitchers attack him with breaking balls down and away, and the strikeout rate reflects that vulnerability -- but a 30-homer bat in the middle of a rebuilding team's lineup is valuable regardless of the contact quality concerns.</p>

<p>Lawrence Butler in the outfield is the player the organization is genuinely excited about. His athleticism is plus, his arm is strong, and the bat-to-ball skills have been improving each year in the system. The ceiling projections for Butler involve a consistent 25-homer, .280 hitter who can play above-average defense in center. Getting from his current performance level to that ceiling is the 2026 assignment.</p>

<p>Zack Gelof at second base brings real offensive promise alongside improving defense. His power-speed combination is legitimate. If Gelof takes the next step in plate discipline and starts punishing mistakes consistently, the lineup becomes genuinely dangerous rather than just threatening on paper.</p>

<h2>Catching: The Position of Concern</h2>
<p>Catching is the honest weakness on this roster. The options behind the plate are not the kind that make a pitching staff confident. Below-average framing, below-average bat. The catching market now values pitch framing at a premium, and a team that cannot provide it pays the price in runs allowed even when the ERA does not immediately reflect the deficit.</p>

<p>The farm system has catching prospects developing, but none of them project to arrive in 2026 at a level that would change the situation. This is a problem the front office needs to address through trade or free agency before the team is genuinely competing.</p>

<h2>The 2026 Outlook</h2>
<p>A realistic range for the 2026 Las Vegas Athletics is 76 to 85 wins. The optimistic case -- healthy rotation, Miller available regularly, Butler and Gelof taking developmental steps -- puts the team in wild card range. The pessimistic case -- Medina reverts to his inconsistent baseline, Miller misses time, the offense underperforms its projections -- puts them closer to 76 wins and another year of building.</p>

<p>Either way, the 2026 season is about development trajectory rather than outcomes. The players who show they belong in Las Vegas in 2026 are the players who will be there in 2028 when the Strip stadium opens and the real era begins.</p>
${affiliateBlock}
`,
  },
  {
    slug: "as-temporary-home-minor-league-park-sacramento",
    title: "Temporary Home: What to Know About the A's Playing at the Minor League Park",
    description: "The full story on the A's Sacramento residency at Sutter Health Park: why it happened, what the experience is like, and what it means for the franchise heading to Las Vegas.",
    date: "March 15, 2026",
    category: "Behind the Scenes",
    emoji: "🏟️",
    body: `
<h2>A Major League Team in a Minor League Stadium</h2>
<p>The Las Vegas Athletics are playing their 2026 home games at Sutter Health Park in West Sacramento, California. Sutter Health Park is home to the Sacramento River Cats, the Triple-A affiliate of the San Francisco Giants. Its capacity for baseball is approximately 14,000 fans. It has no retractable roof, limited shade for most of the seating bowl, and a concourse experience designed for a minor league budget and a minor league price point.</p>

<p>This is where a Major League Baseball team is playing home games. It is one of the most unusual situations in the history of the sport, and understanding how it came about, what it actually looks like as an operational reality, and what it means for the franchise requires going deeper than the headline numbers.</p>

<h2>How Did This Happen?</h2>
<p>The Athletics' move from Oakland to Las Vegas required leaving their long-term home at the Oakland-Alameda County Coliseum before their new Las Vegas stadium was ready. The Coliseum lease expired and was not renewed. The Las Vegas stadium, approved in 2023 and under construction on the old Tropicana site, will not be ready until 2028. That gap -- 2025, 2026, and 2027 -- required an interim home.</p>

<p>Sacramento was the chosen solution. The city is close enough to the Bay Area to maintain some connection with the existing fan base while being in the Northern California region where the franchise's history is rooted. The River Cats' parent organization, the Giants, had a shared-stadium arrangement that made Sutter Health Park available for A's use during the home stand schedule. It is a temporary arrangement that everyone involved acknowledges is temporary.</p>

<h2>What the Fan Experience Actually Looks Like</h2>
<p>Watching a Major League game at Sutter Health Park is genuinely different from watching one at a purpose-built MLB venue. The differences are not just numerical -- it is not simply that the stadium holds fewer people. The physical proximity to the players is remarkable. Seats that would be considered mid-priced at any major league stadium feel like field-level premium at Sutter Health Park. You can hear conversations in the dugout. You can see the pitcher's grip on the ball from a seat that costs a fraction of what comparable sight lines would cost at Dodger Stadium or Wrigley Field.</p>

<p>The concourse experience is limited by minor league infrastructure. The food and beverage options are more modest than what fans expect from MLB venues. The stadium lacks the premium amenity spaces -- clubs, all-inclusive areas, rooftop decks -- that new major league parks built in the 2000s and 2010s have made standard. You are getting baseball without the entertainment infrastructure that modern ballpark design bundles around baseball.</p>

<p>For some fans, this is a feature rather than a bug. The stripped-down experience puts the game itself at the center of the visit in a way that the palatial new stadiums sometimes do not. The players are close. The baseball is real. The $9 hot dog is still there. Everything else is optional.</p>

<h2>The Attendance Numbers and What They Mean</h2>
<p>Attendance at Sutter Health Park during the A's residency has been a complicated story. The stadium is small enough that the per-game numbers that look modest at an MLB venue fill the place to a reasonable percentage of capacity. Sold-out games at 14,000 feel like genuine events. Half-full games at 7,000 feel emptier than the same number at a 40,000-seat stadium.</p>

<p>The organizational perspective on Sacramento attendance is carefully managed. The franchise cannot be seen as failing in its temporary home, because failing attendance in Sacramento would raise legitimate questions about what the Las Vegas market can actually support. The reality is that Sacramento represents neither the franchise's floor nor its ceiling. It is a placeholder, and the relevant attendance story will be told when the Strip stadium opens in 2028.</p>

<h2>The Players and Their Sacramento Experience</h2>
<p>From the players' perspective, Sacramento has been reported as a mixed experience. The intimacy of the smaller park creates an unusual connection with fans that does not exist at a 40,000-seat venue. Players have noted that the atmosphere at well-attended games has genuine energy in a way that a sparsely attended big stadium cannot replicate.</p>

<p>The practical inconveniences are real. The clubhouse facilities are minor league standard. The training room and player development infrastructure are not what MLB players are accustomed to. The A's have invested in supplementary facilities and personnel to bridge the gap, but there is no pretending that Sutter Health Park provides the operational environment that purpose-built MLB stadiums do.</p>

<h2>What Comes After Sacramento: The Las Vegas Future</h2>
<p>The Sacramento chapter ends after the 2027 season, regardless of the construction status of the Las Vegas stadium. The target is 2028. The construction timeline supports 2028. The organization has committed to 2028. What the Las Vegas Strip stadium will represent, in contrast to Sutter Health Park, is the full realization of what this franchise is trying to build.</p>

<p>Thirty-three thousand seats. A retractable roof. Natural grass. Club spaces that meet or exceed the standards of any other MLB venue. Food and beverage that reflects the Las Vegas market's elevated expectations. A location within walking distance of the most concentrated entertainment infrastructure on the planet.</p>

<p>Sacramento is the sacrifice. Las Vegas is the prize. The players know it. The fans know it. The front office has been very clear about it. Endure the minor league park. The Strip stadium is coming.</p>
${affiliateBlock}
`,
  },
  {
    slug: "as-relocation-compared-every-mlb-team-move",
    title: "How the A's Relocation Compares to Every Other MLB Team Move",
    description: "Historical context on the A's move to Las Vegas: how it compares to the Dodgers leaving Brooklyn, the Expos becoming the Nationals, the Braves moving to the suburbs, and every other MLB relocation.",
    date: "March 15, 2026",
    category: "Historical Analysis",
    emoji: "📚",
    body: `
<h2>Baseball Has Been Moving Teams Since 1903</h2>
<p>The Oakland Athletics are not the first Major League Baseball franchise to change cities. They are not even the first franchise to change cities twice. The history of MLB relocation is a long, complicated, often painful record of economic forces, stadium politics, ownership decisions, and the collision between a sport's mythological attachment to place and the mundane financial realities of running a professional sports franchise. The A's move to Las Vegas sits in that history, and understanding where it fits requires knowing what came before it.</p>

<h2>The Wholesale Moves of 1953 to 1958</h2>
<p>The most concentrated period of franchise relocation in baseball history occurred in the late 1950s, when the geography of Major League Baseball was fundamentally redrawn. Before 1953, all sixteen MLB teams were concentrated in the northeastern and midwestern United States. Boston, New York, Philadelphia, Washington, Pittsburgh, Cleveland, Chicago, Cincinnati, Detroit, St. Louis. The west coast did not exist on baseball's map.</p>

<p>The Boston Braves moved to Milwaukee in 1953, becoming the first franchise to relocate since 1903. The Philadelphia Athletics -- the same franchise now in Las Vegas -- moved to Kansas City in 1955, responding to competition from the Phillies and the deteriorating financial position of owner Connie Mack's family. The Brooklyn Dodgers moved to Los Angeles and the New York Giants moved to San Francisco in 1958, the most seismic pair of moves in the sport's history and still the most emotionally resonant franchise relocation story in American sports.</p>

<p>The Brooklyn Dodgers comparison is the one that hangs most heavily over the Oakland situation. Brooklyn fans in 1958 felt the same betrayal that Oakland fans felt in 2023: a team that was woven into the identity of a community, owned by a man who prioritized profit over history, departing for a larger market with no genuine effort made to stay. Owner Walter O'Malley has been the villain in the Brooklyn story for more than sixty years. John Fisher will likely occupy a similar role in the Oakland story for a similar period.</p>

<h2>The Kansas City and Milwaukee Chapters</h2>
<p>The Kansas City Athletics, after arriving from Philadelphia in 1955, spent thirteen years in Missouri before moving to Oakland in 1968. During their Kansas City years, the franchise was widely acknowledged as a de facto farm team for the New York Yankees, regularly trading promising players to New York for cash and veterans. Charlie Finley bought the team in 1960 and eventually orchestrated the Oakland move, which proved to be the right decision for the franchise even if it created another set of abandoned fans.</p>

<p>Milwaukee's Braves moved to Atlanta in 1966, just thirteen years after arriving from Boston. The pattern -- team arrives, wins early, attendance declines, ownership seeks better terms elsewhere -- repeated itself on a shorter timeline than it had in Brooklyn. Atlanta became a viable baseball market as the American South urbanized. Milwaukee eventually got another franchise, the expansion Brewers, in 1969.</p>

<h2>The Expansion Era and the Washington Story</h2>
<p>The 1960s expansion brought new franchises to new markets and also produced another relocation: the original Washington Senators moved to Dallas-Fort Worth in 1972 and became the Texas Rangers. Washington was immediately given a replacement team, the expansion Senators, which was itself a historical oddity -- a city losing its team and receiving an inferior replacement while the original franchise profited elsewhere.</p>

<p>Washington did not get genuine major league baseball back until 2005, when the Montreal Expos relocated to become the Washington Nationals. The Expos' story is one of the most tragic in the sport: a franchise that was genuinely beloved in Montreal, capable of competing for championships in the early 1990s, systematically dismantled through shared ownership by MLB itself after private ownership collapsed, then moved out of Canada entirely. The Washington Nationals have been successful on the field, winning a World Series in 2019. The Montreal market has never recovered.</p>

<h2>Where the A's Move Fits in This History</h2>
<p>The Athletics' relocation to Las Vegas has several characteristics that make it distinct from most historical precedents. First, the Las Vegas destination is genuinely unprecedented -- no MLB franchise has previously been placed in a market this small by traditional broadcast metrics, this dependent on tourism, and this far from the franchise's historical footprint. Second, the Sacramento interim arrangement has no real historical parallel. Teams have played in temporary venues before, but a three-year residency in a Triple-A stadium while waiting for a Strip stadium to be built is genuinely new.</p>

<p>The comparison that most analysts reach for is the Raiders' move from Oakland to Las Vegas in 2020, also approved by the league over the objections of a community that had supported the franchise for decades. That comparison is imperfect -- football and baseball have different relationships with their cities -- but the political and emotional dynamics are similar.</p>

<h2>What History Suggests About the Las Vegas Future</h2>
<p>The historical record on franchise relocations is clear on one point: new cities eventually build new fan bases. The Dodgers are beloved in Los Angeles in a way that is not diminished by what happened in Brooklyn. The Nationals have genuine Washington fans who have no connection to Montreal. The Athletics will have genuine Las Vegas fans who will be defined entirely by what happens on the Strip, not by anything that happened at the Oakland Coliseum.</p>

<p>The Oakland fans who feel abandoned are expressing a legitimate grief, and that grief is real and permanent for many of them. But the Las Vegas chapter of Athletics history is beginning. The relocation is done. What comes next is the work of building something new.</p>
${affiliateBlock}
`,
  },
  {
    slug: "economics-of-as-vegas-deal-who-pays-who-profits",
    title: "The Economics of the A's Vegas Deal: Who Pays, Who Profits, Who Wins",
    description: "A hard look at the stadium financing, the $380 million public funding debate, economic impact projections, and what the Vegas deal actually means for taxpayers and the franchise.",
    date: "March 15, 2026",
    category: "Business",
    emoji: "💰",
    body: `
<h2>Follow the Money</h2>
<p>The Las Vegas Athletics stadium deal was approved by the Nevada Legislature with the support of a majority of elected officials and opposed vigorously by a coalition of educators, public finance critics, and citizens who believed the $380 million in public funding was a misallocation of state resources. Both sides made arguments rooted in real economic data, and both sides had legitimate points. Understanding the deal requires engaging with the numbers honestly rather than retreating to the ideological position that either all stadium subsidies are theft or all stadium investments are economic engines.</p>

<h2>The Basic Structure of the Deal</h2>
<p>The Nevada Legislature approved $380 million in public funding for the Las Vegas Athletics stadium in 2023. The total stadium cost is estimated at $1.5 billion, which means the public contribution represents approximately 25 percent of the total project cost. The Athletics and their private investors are responsible for the remaining $1.1 billion-plus.</p>

<p>The public funding flows through the Clark County Stadium Authority, a public body that was established as part of the enabling legislation. The funding mechanism uses a variety of tax instruments including a room tax increment on hotel stays in the project area, which attempts to direct a portion of the funding burden toward the tourists who will be among the primary beneficiaries of the stadium's presence on the Strip.</p>

<p>The stadium itself is technically a public asset in terms of the real property. The Athletics hold a long-term lease and operational control. This structure -- public ownership, private operation -- is the standard model for publicly financed sports facilities in the United States and has been since the stadium-building boom of the 1990s.</p>

<h2>The "Schools Over Stadiums" Opposition</h2>
<p>The most organized and morally coherent opposition to the stadium deal came from Nevada educators under the banner of the Schools Over Stadiums coalition. Their argument was direct: Nevada ranks near the bottom in per-pupil education spending, teacher retention, and student outcomes. Allocating $380 million to a facility that primarily benefits a private franchise and its billionaire owner, rather than to the education system that is failing Nevada students, represents a clear misallocation of public resources.</p>

<p>This argument is hard to dismiss. Nevada's education challenges are real and documented. The counterfactual -- would the $380 million have gone to education if it had not gone to the stadium? -- is genuinely uncertain, but the opportunity cost framing is legitimate. Public money has alternative uses, and the stadium opponents are correct that those alternatives exist and that many of them have stronger claims on public investment than a sports facility.</p>

<h2>The Economic Impact Argument</h2>
<p>Stadium proponents made the standard economic impact arguments: construction jobs, permanent employment at the facility, tourism spending generated by visitors who come specifically for A's games, the multiplier effect of that spending through the local economy. The consultants hired by the Athletics projected significant positive economic impacts over the stadium's first decade of operation.</p>

<p>Independent economists are consistently skeptical of stadium-specific economic impact studies, for several reasons. First, the methodology of hired consultants has a documented tendency to overcount benefits and undercount costs. Second, stadium spending often substitutes for other entertainment spending rather than representing net new economic activity -- fans who spend money at the ballpark are frequently fans who would have spent similar amounts at other Las Vegas entertainment venues if the ballpark did not exist. Third, the jobs created by sports stadiums tend to be seasonal, part-time, and low-wage rather than the kind of permanent middle-class employment that maximizes economic impact.</p>

<h2>What the Strip Location Changes</h2>
<p>The standard economic critique of stadium subsidies applies most powerfully to suburban stadiums surrounded by surface parking lots, where the facility captures economic activity from a contained footprint and limits the spillover into surrounding neighborhoods. The Las Vegas Strip location genuinely changes some of these dynamics.</p>

<p>A stadium at the corner of Las Vegas Boulevard and Tropicana Avenue is embedded in the most economically dense entertainment district in the country. Fans who attend games cannot help but spend money in the surrounding corridor -- before games, after games, during the rest of their Las Vegas visit. The concentration of hotels, restaurants, entertainment venues, and retail within walking distance of the stadium means that the economic activity associated with Athletics games spreads through a system that was already generating enormous economic output.</p>

<p>This is genuinely different from building a stadium in a greenfield suburban location. The Strip location maximizes whatever positive economic spillover stadium development can generate, even if it does not resolve the fundamental questions about whether the public subsidy was justified.</p>

<h2>Who Wins</h2>
<p>The honest answer is that this depends on what actually happens over the next two decades. The scenario in which the Las Vegas Athletics become a successful franchise with strong attendance, national television interest, and a genuine fan base generates real economic activity and returns real value to the public investment. The scenario in which attendance disappoints, the franchise struggles on the field, and the tourist-fan pipeline fails to materialize leaves the public with a $380 million contribution to a facility that primarily serves the interests of its private operator.</p>

<p>The historical track record of publicly financed stadiums in terms of generating the economic returns that proponents promise is not strong. The Las Vegas location is genuinely different in ways that could change that track record. What actually happens will be determined over years of games, wins, losses, and the slow building of a fan community in a city that has never had major league baseball before.</p>
${affiliateBlock}
`,
  },
  {
    slug: "building-a-fanbase-from-scratch-as-las-vegas-plan",
    title: "Building a Fanbase From Scratch: How the A's Plan to Win Over Las Vegas",
    description: "Marketing strategy, community outreach, ticket plans, competing for attention against the Raiders and Knights -- how the Athletics are building a fan base in a city that has never had baseball.",
    date: "March 15, 2026",
    category: "Business",
    emoji: "🎯",
    body: `
<h2>There Is No Inherited Fan Base</h2>
<p>When the Golden Knights began their inaugural season, they had no existing Las Vegas hockey fans to draw on. They had to build a fan base from scratch, in a market with no hockey tradition, using the novelty of professional sports in Las Vegas as their primary asset. They succeeded by winning immediately, by connecting with the community through the tragedy of October 1st, and by creating an identity that felt specifically Las Vegas rather than a transplant from somewhere else.</p>

<p>The Athletics face a similar challenge with an additional complication: they are not an expansion team with a clean slate. They are a relocated franchise with a complicated history, an owner who has become a symbol of bad-faith negotiation to a significant segment of baseball's fan base, and a relocation story that has generated more negative national attention than any franchise move since the Brooklyn Dodgers left for Los Angeles. Building a Las Vegas fan base means building it despite all of that, not because of it.</p>

<h2>The Marketing Strategy: Las Vegas First</h2>
<p>The organizational approach to fan base development in Las Vegas has centered on positioning the Athletics as a Las Vegas institution rather than an Oakland franchise that happened to move. The branding efforts have emphasized the Las Vegas identity -- the green and gold of the desert, the Strip location, the convergence of sports and entertainment that no other baseball market can offer.</p>

<p>This is the right instinct, even if execution is still in early stages. Las Vegas fans who never had any connection to Oakland are the most important growth market. Trying to inherit Oakland's fan base is both impossible and counterproductive -- Oakland fans largely want nothing to do with the franchise under its current ownership. The new fans are going to come from Las Vegas residents, from tourists who encounter the team for the first time during a Strip visit, and from baseball fans in markets without MLB teams who adopt the Athletics as their team because of the Las Vegas entertainment proposition.</p>

<h2>Community Outreach: Playing the Long Game</h2>
<p>The Athletics have invested in community programming in the Las Vegas valley since the relocation announcement. Youth baseball initiatives, school partnerships, stadium tour programs at Allegiant and other venues -- the kinds of grassroots engagement that are standard for franchise-building in new markets. The goal is to create an emotional connection with the community before the first pitch is thrown in Las Vegas, so that the stadium's opening in 2028 feels like a culmination rather than an introduction.</p>

<p>The Henderson and North Las Vegas markets are where the most important community work is happening. These are the residential communities where the families who will become multi-generational A's fans live. A ten-year-old in Henderson who gets invited to a batting clinic run by an A's prospect in 2025 is a potential lifetime season ticket holder in 2035. These investments do not show up in the financial projections but they are the actual mechanism through which sports franchises build lasting fan bases.</p>

<h2>Ticket Strategy: Competing for the Entertainment Dollar</h2>
<p>Las Vegas residents have more entertainment options per capita than residents of virtually any other American city. A summer Friday night in Las Vegas competes for attention with a concert at the T-Mobile Arena, a show at one of a hundred venues, a dinner at any of thousands of restaurants, a poker session at one of fifty-plus casinos, and a dozen other A's games on the schedule that week. The challenge of selling tickets in Las Vegas is not convincing people that baseball is worth attending -- it is convincing them that baseball is worth attending more than everything else competing for their leisure time and disposable income.</p>

<p>The ticket strategy being developed for the Las Vegas market reflects this reality. Flexible plans that allow fans to pick specific games rather than committing to a full season. Theme nights and promotional events tied to the entertainment culture Las Vegas already understands. Premium experiences that compete on Las Vegas terms -- bottle service, VIP amenities, the kind of upscale presentation that the city's entertainment infrastructure has established as the baseline expectation for a night out.</p>

<h2>The Tourist Revenue Stream</h2>
<p>One aspect of the Las Vegas fan base that has no parallel in any other baseball market is the tourist component. The Strip location means that a certain percentage of every A's home game attendance will come from visitors who happen to be in Las Vegas and decide that a baseball game is a good way to spend a Tuesday evening. This is a revenue stream that does not require any community investment or loyalty development -- it is generated purely by the stadium's location in the most visited entertainment destination in North America.</p>

<p>The team has been deliberate about marketing to this audience. Partnerships with hotel concierge programs, advertising through casino resort channels, ticket packages bundled with hotel stays. The goal is to make the A's game the automatic entertainment choice for certain categories of Las Vegas visitors the way the Bellagio fountains or the High Roller are -- something you just do when you are in Las Vegas.</p>

<h2>What Success Looks Like in 2028</h2>
<p>The metric for a successful fan base launch in Las Vegas is not whether the Athletics can sell out every game in their first season. The metric is whether the fan base that exists in year one is measurably larger and more committed than in year two, and year three, and whether the organic growth of local fandom is supplementing rather than depending on the tourist base. A franchise that draws 28,000 per game in 2028 but is growing toward sellouts by 2031 is succeeding. A franchise that draws 22,000 in 2028 and is trending downward by 2031 is failing.</p>

<p>Everything the organization is doing right now -- the community outreach, the brand work, the ticket strategy, the stadium design -- is aimed at being in the first scenario rather than the second. Whether it works will depend on the product on the field, the ownership philosophy, and the sustained commitment to being a genuine Las Vegas institution rather than just a business operating in Las Vegas. The Golden Knights showed it can be done. Now it is the Athletics' turn.</p>
${affiliateBlock}
`,
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

