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
`;

const posts: Post[] = [
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
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
