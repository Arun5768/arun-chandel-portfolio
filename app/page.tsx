const proof = [
  { value: '52+', label: 'community initiatives' },
  { value: '1,300+', label: 'members in the core group' },
  { value: '600+', label: 'largest reported turnout' },
  { value: '150+', label: 'AI-assisted videos produced' },
];

const mediaFrames = [
  {
    title: 'Bhopal Blockchain Blitz',
    note: 'Devcon satellite · 959 went on Luma',
    image: 'https://images.lumacdn.com/cdn-cgi/image/format%3Dauto%2Cfit%3Dcover%2Cdpr%3D2%2Cbackground%3Dwhite%2Cquality%3D80%2Cwidth%3D800%2Cheight%3D800/event-covers/dv/66be5f1e-a997-4df3-b34c-f6a7ea006a93',
    link: 'https://luma.com/vfr1ozki',
  },
  {
    title: 'Monad Blitz Bhopal',
    note: 'Full-day builder sprint · $1.5K prize pool',
    image: 'https://images.lumacdn.com/cdn-cgi/image/format%3Dauto%2Cfit%3Dcover%2Cdpr%3D2%2Cbackground%3Dwhite%2Cquality%3D80%2Cwidth%3D800%2Cheight%3D800/event-covers/am/3b1d84ee-ef51-4f46-be37-c6c5e862eabc.png',
    link: 'https://luma.com/blitz-bhopal-dec-2025',
  },
  {
    title: 'Claude Community Conversation',
    note: 'AI community · Bhopal',
    image: 'https://images.lumacdn.com/cdn-cgi/image/format%3Dauto%2Cfit%3Dcover%2Cdpr%3D2%2Cbackground%3Dwhite%2Cquality%3D80%2Cwidth%3D800%2Cheight%3D800/api-uploads/ay/01cb8bc6-aad5-4599-9edb-99566793751a.png',
    link: 'https://luma.com/claude-w1nu',
  },
];

const eventReel = [
  { title: 'Bhopal Blockchain Blitz', meta: 'Devcon satellite · Bhopal', image: '/event-reel/bhopal-blockchain-blitz.jpg' },
  { title: 'Claude Code for Builders', meta: 'Hands-on AI lab · Bhopal', image: '/event-reel/claude-code-builders.jpg' },
  { title: 'Solana Across Campuses', meta: 'Campus workshop · Central India', image: '/event-reel/solana-campus.jpg' },
  { title: 'Chainlink Prediction Markets', meta: 'Technical workshop · Bhopal', image: '/event-reel/chainlink-prediction-markets.jpg' },
  { title: 'Monad Blitz', meta: 'Full-day hackathon · Bhopal', image: '/event-reel/monad-blitz.jpg' },
  { title: 'Superteam Dev with Dinner', meta: 'Builder dinner · Bhopal', image: '/event-reel/superteam-dev-dinner.jpg' },
  { title: 'GitHub Copilot Dev Days', meta: 'AI coding lab · Bhopal', image: '/event-reel/github-copilot-dev-days.jpg' },
  { title: 'MetaMask Builder Night', meta: 'Community builder night · Vidisha', image: '/event-reel/metamask-builder-night.jpg' },
];

const communityArchive = 'https://celestial-lift-d60.notion.site/Highlighted-Previous-Community-Initiatives-355d71208f4080b587aecb79265070b8';

const evidenceLinks = [
  { code: 'A/01', label: 'AI Production', title: 'Selected AI-assisted work', meta: 'Research · scripts · voice · image · video · human review', link: 'https://drive.google.com/drive/folders/1DuxVuVEhO5WYij0rI-1fvsvvYvtEBdQP' },
  { code: 'A/02', label: 'Video Portfolio', title: 'Editing and production reel', meta: '150+ AI-assisted videos produced', link: 'https://drive.google.com/drive/folders/10mGNOHz4x05vpZCGn_VivYHulrCBTkHf?usp=sharing' },
  { code: 'W/01', label: 'Technical Writing', title: 'Practical field notes on Medium', meta: 'AI · observability · blockchain · privacy', link: 'https://medium.com/@arunchandel1780' },
  { code: 'C/01', label: 'Community Archive', title: 'Highlighted community initiatives', meta: 'Case studies, formats and outcomes', link: 'https://celestial-lift-d60.notion.site/Highlighted-Previous-Community-Initiatives-355d71208f4080b587aecb79265070b8' },
  { code: 'C/02', label: 'Event Gallery', title: 'Field photographs and highlights', meta: 'People, rooms and shipped moments', link: 'https://drive.google.com/drive/folders/1aopl4w3usafbQLXqel1Vo9BjnMyzEoOi?usp=drive_link' },
  { code: 'C/03', label: 'Event History', title: 'The Origin Guild on Luma', meta: 'Published community events', link: 'https://luma.com/user/theoriginguild' },
  { code: 'C/04', label: 'Personal Events', title: 'Arun’s Luma record', meta: 'Hosted and collaborative programs', link: 'https://luma.com/user/arun_edition' },
  { code: 'N/01', label: 'Community Network', title: '1,300+ on WhatsApp · 600+ on Telegram', meta: 'A living Central India builder network', link: 'https://t.me/tog_guild' },
];

const missions = [
  {
    number: '01', title: 'Bhopal Blockchain Blitz', place: 'Bhopal', type: 'Devcon Satellite',
    description: 'A large-format developer gathering with technical sessions, panels, quizzes, prizes and community networking.',
    metrics: [['≈970', 'applications'], ['600+', 'reported attendance']],
    evidence: 'https://luma.com/vfr1ozki', accent: 'blue',
  },
  {
    number: '02', title: 'Claude Code Impact Lab', place: 'Bhopal', type: 'AI Build Lab',
    description: 'Practical Claude Code education that exceeded its planned capacity and proved strong local demand for hands-on AI development.',
    metrics: [['150', 'approved'], ['105', 'verified check-ins']],
    evidence: 'https://luma.com/claude-af61', accent: 'acid',
  },
  {
    number: '03', title: 'Monad Blitz', place: 'Bhopal', type: 'Full-day Hackathon',
    description: 'Workshops, testnet deployment, rapid consumer-app building, live demos and audience voting—with a real prize pool.',
    metrics: [['114', 'applications'], ['$1.5K', 'prize pool']],
    evidence: 'https://luma.com/blitz-bhopal-dec-2025', accent: 'coral',
  },
  {
    number: '04', title: 'Miro Meetup', place: 'Vidisha', type: 'Community Workshop',
    description: 'A focused, community-oriented format with transparent attendance data and approximately 79% verified turnout.',
    metrics: [['48', 'approved'], ['38', 'verified check-ins']],
    evidence: 'https://luma.com/zhmtqj7y', accent: 'blue',
  },
  {
    number: '05', title: 'MetaMask Builder Night', place: 'Delhi', type: 'Community Night',
    description: 'A focused wallet, onboarding and Web3 ecosystem gathering for developers and community builders.',
    metrics: [['114', 'approved'], ['78', 'verified check-ins']],
    evidence: 'https://luma.com/cbndelhijuly', accent: 'acid',
  },
  {
    number: '06', title: 'Chainlink Blockchain 101', place: 'Bhopal', type: 'Learning Session',
    description: 'An accessible entry point connecting blockchain fundamentals to practical applications and real-world examples.',
    metrics: [['101', 'applications'], ['25', 'verified check-ins']],
    evidence: 'https://luma.com/cl_bhopal01', accent: 'coral',
  },
];

const builds = [
  { index: 'B/01', title: 'EventOps Hub', tag: 'SOFTR · OPERATIONS', text: 'A working system for event evidence, searchable case studies, speaker applications and a protected organizer dashboard.', link: 'https://eventops.softr.app/' },
  { index: 'B/02', title: 'Echoverse', tag: 'ELEVENLABS · 3D WEB', text: 'A voice-controlled interactive 3D storytelling experience built around natural audio interaction.', link: 'https://echoverse-amber-gamma.vercel.app/' },
  { index: 'B/03', title: 'Proofpack Kimi', tag: 'AUTOMATION · AI OPS', text: 'A working workflow that turns real project evidence into grounded application answers using Kimi K2.5.', link: 'https://github.com/Arun5768/proofpack-kimi' },
  { index: 'B/04', title: 'Observability, Eventually', tag: 'GRAFANA · FIELD NOTE', text: 'A practical breakdown of why a dashboard can look alive while telling you almost nothing useful.', link: 'https://medium.com/@arunchandel1780/i-built-a-grafana-dashboard-then-i-realised-it-wasnt-observability-32dbbe5752fa' },
];

const workshops = [
  { number: 'W01', title: 'Hindi–English Voice AI Lab', output: 'A cloned voice, localized asset or conversational agent', tools: 'ElevenLabs · APIs · voice workflows' },
  { number: 'W02', title: 'One Host, Many Teams', output: 'A working tenant cluster and public repository', tools: 'vCluster · Kubernetes · RBAC · CRDs' },
  { number: 'W03', title: 'Build. Monetize. Ship.', output: 'An app concept, pricing model and shipping plan', tools: 'Mobile · RevenueCat · product growth' },
  { number: 'W04', title: 'From Idea to Published App', output: 'A real database-backed application', tools: 'Softr · databases · permissions' },
  { number: 'W05', title: 'Automation for Community Ops', output: 'A working intake, routing and follow-up workflow', tools: 'n8n · CRM · dashboards · AI' },
];

const ledger = [
  ['Bhopal Blockchain Blitz', 'Bhopal', '≈970 applications', '600+ reported attendance', 'https://luma.com/vfr1ozki'],
  ['Claude Code Impact Lab', 'Bhopal', '150 approved', '105 verified', 'https://luma.com/claude-af61'],
  ['Monad Blitz', 'Bhopal', '114 applications', '70 builder capacity', 'https://luma.com/blitz-bhopal-dec-2025'],
  ['Miro Meetup', 'Vidisha', '48 approved', '38 verified', 'https://luma.com/zhmtqj7y'],
  ['Chainverse Flux', 'Bhopal', '367 campaign registrations', '103 approved on Luma', 'https://luma.com/8u7mvja3'],
  ['CO_HACK', 'Vidisha', '86 Luma records', '89 reported participation', 'https://luma.com/8fmp1gix'],
  ['GitHub Copilot Dev Days', 'Central India', '75 dashboard applications', '97 reported reach', 'https://luma.com/4tmkg6uf'],
  ['TON Developer Meetup', 'Bhopal', '40 approved', '14 verified', 'https://luma.com/9l08wbcy'],
  ['Chainlink Blockchain 101', 'Bhopal', '45 approved', '25 verified', 'https://luma.com/cl_bhopal01'],
  ['MetaMask Builder Night', 'Delhi', '114 approved', '78 verified', 'https://luma.com/cbndelhijuly'],
  ['Claude Community Meetup', 'Bhopal', '—', '102 reported attendance', 'https://luma.com/claude-w1nu'],
  ['TON Breakfast', 'Bhopal', '90+ registrations', '52 reported attendance', 'https://luma.com/7z970jim'],
  ['Alephium Builders Meetup', 'Bhopal', '200 registrations', '80+ reported attendance', 'https://luma.com/o5r2ufvf'],
  ['TON Developer Meetup', 'Bina', '50 registrations', '35 reported attendance', 'https://luma.com/lnv0hrtc'],
  ['Superteam: Dev with Dinner', 'Bhopal', '11 approved', '10 developers', 'https://luma.com/4yopjydm'],
  ['Avalanche Game Night', 'Bhopal', '45+ registrations', '25+ approved', 'https://luma.com/fnzf94tq'],
  ['Avalanche Connect', 'Bhopal', '150+ registrations', '55 approved', 'https://luma.com/28j6co63'],
  ['Arbitrum Workshop', 'Bhopal', '100+ registrations', '50+ approved', 'https://luma.com/qjsqanz1'],
  ['TON Developer Breakfast', 'Bhopal', '40+ registrations', '38 approved', 'https://luma.com/dqyu9yis'],
  ['Avalanche Connect 2.0', 'Bhopal', '150 registrations', '90+ approved', 'https://luma.com/13nndl4q'],
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Arun Chandel — home"><span className="wordmark-dot" aria-hidden="true" />ARUN / OPS</a>
        <div className="nav-links"><a href="#about">About</a><a href="#media">Proof in motion</a><a href="#missions">Missions</a><a href="#builds">Builds</a></div>
        <a className="nav-cta" href="mailto:arunchandel1780@gmail.com">Start a build day <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Community operator · Automation builder · Central India · Bhopal</p>
          <h1>I turn curious<br />audiences into<br /><em>active builders.</em></h1>
          <p className="hero-deck">I design practical programs around AI, automation, developer tools and emerging technology—where people leave with something working, not just another event photograph.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#missions">See the field record <span>↓</span></a>
            <a className="button button-secondary" href="https://luma.com/user/theoriginguild" target="_blank" rel="noreferrer">The Origin Guild ↗</a>
          </div>
        </div>
        <aside className="hero-console" aria-label="Current operating principles">
          <div className="console-top"><span className="console-light" /><span>MISSION CONTROL</span><span className="console-id">IND · 23.25°N</span></div>
          <div className="console-body">
            <p className="console-kicker">CURRENT DIRECTIVE</p>
            <p className="console-statement">Build the room.<br />Teach the tool.<br /><strong>Ship the proof.</strong></p>
            <div className="signal-lines" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="console-footer"><span>STATUS: OPEN TO COLLABORATE</span><span className="status-pulse" aria-hidden="true" /></div>
          <p className="console-note">No panels that could have been an email.</p>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Selected impact figures">
        {proof.map((item, index) => <div className="proof-item" key={item.label}><span className="proof-index">0{index + 1}</span><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-portrait">
          <div className="portrait-frame">
            <img src="https://avatars.githubusercontent.com/u/97609559?v=4&size=640" alt="Arun Chandel" width="640" height="640" />
          </div>
          <span className="portrait-label">ACTUAL HUMAN · VERIFIED BY COFFEE</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> About the operator</p>
          <p className="about-kicker">ARUN PRATAP SINGH CHANDEL</p>
          <h2>Community operator.<br /><em>Automation builder.</em></h2>
          <p className="about-role">Co-founder, The Origin Guild · Technology &amp; automation lead</p>
          <div className="about-background">
            <p>I build CRM workflows, AI-assisted operations, dashboards and follow-up systems for teams doing real work.</p>
            <p>Outside work, I help run a 1,300+ member builder community and have delivered 52+ AI, developer and emerging-tech initiatives across Central India.</p>
            <p>My favourite format is simple: learn the tool deeply, build a useful workshop around it, and keep people shipping after the group photo.</p>
          </div>
          <div className="about-links"><a href="https://www.linkedin.com/in/arun-pratap-singh-chandel-7aa101259/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Arun5768" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </div>
      </section>

      <section className="media-section" id="media">
        <div className="media-heading">
          <p className="eyebrow light"><span /> Proof in motion</p>
          <h2>Real rooms.<br />Real work.<br /><em>Press play.</em></h2>
          <p>Not stock photography. These are public artefacts from programs I helped bring to life—and direct doors into the work behind them.</p>
        </div>
        <article className="production-card">
          <span className="production-code">PRODUCTION SYSTEM / 01</span>
          <div className="production-number"><strong>150+</strong><span>AI-assisted videos produced</span></div>
          <p>I combine research, scripting, voice, image generation, video generation, editing and human review into repeatable production workflows.</p>
          <div className="tool-ticker" aria-label="AI production toolkit"><span>n8n</span><span>ElevenLabs</span><span>Higgsfield</span><span>Seedance</span><span>Runway</span><span>Veo</span><span>Kling</span><span>Premiere Pro</span><span>After Effects</span></div>
          <div className="production-links"><a href="https://drive.google.com/drive/folders/1DuxVuVEhO5WYij0rI-1fvsvvYvtEBdQP" target="_blank" rel="noreferrer">Selected work ↗</a><a href="https://drive.google.com/drive/folders/10mGNOHz4x05vpZCGn_VivYHulrCBTkHf?usp=sharing" target="_blank" rel="noreferrer">Video portfolio ↗</a></div>
        </article>
        <div className="media-wall">
          {mediaFrames.map((frame, index) => (
            <a className="media-frame" href={frame.link} target="_blank" rel="noreferrer" key={frame.title}>
              <img src={frame.image} alt={`${frame.title} official event artwork`} loading="lazy" />
              <span className="frame-index">0{index + 1}</span>
              <div><strong>{frame.title}</strong><span>{frame.note}</span></div>
            </a>
          ))}
        </div>
        <div className="event-reel" aria-label="Selected photographs from community events">
          <div className="reel-topline">
            <div><span className="reel-status" aria-hidden="true" />FIELD REEL / 08 SELECTED FRAMES</div>
            <span>Hover to hold the room</span>
            <a href={communityArchive} target="_blank" rel="noreferrer">Explore the full event archive ↗</a>
          </div>
          <div className="reel-viewport">
            <div className="reel-track">
              {[...eventReel, ...eventReel].map((event, index) => (
                <figure className="reel-frame" key={`${event.title}-${index}`} aria-hidden={index >= eventReel.length ? true : undefined}>
                  <img src={event.image} alt={index < eventReel.length ? `${event.title} community event` : ''} loading="lazy" />
                  <figcaption><strong>{event.title}</strong><span>{event.meta}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
          <p className="reel-note">A moving glimpse, not a substitute for the record. The linked archive contains the wider event history, formats and source evidence.</p>
        </div>
      </section>

      <section className="missions-section section-shell" id="missions">
        <div className="section-heading"><p className="eyebrow"><span /> Selected field record</p><h2>Proof, not<br /><em>portfolio theatre.</em></h2></div>
        <p className="section-intro">Numbers are labelled by what they actually mean: applications, approvals, verified check-ins or reported attendance. Wildly refreshing, apparently.</p>
        <div className="missions-grid">
          {missions.map((mission) => (
            <article className={`mission-card accent-${mission.accent}`} key={mission.title}>
              <div className="mission-number">{mission.number}</div>
              <div className="mission-main">
                <div className="mission-tags"><span>{mission.type}</span><span>{mission.place}</span></div>
                <h3>{mission.title}</h3><p>{mission.description}</p>
                <a href={mission.evidence} target="_blank" rel="noreferrer">Open event evidence ↗</a>
              </div>
              <div className="mission-metrics">{mission.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
            </article>
          ))}
        </div>
        <p className="metric-note">Registrations are nice. Verified check-ins are nicer.</p>
      </section>

      <section className="builds-section" id="builds">
        <div className="builds-heading"><p className="eyebrow light"><span /> Things that work</p><h2>Built between<br /><em>the events.</em></h2><p>Community is the distribution system. The work still needs to survive contact with a real user.</p></div>
        <div className="builds-list">
          {builds.map((build) => (
            <a className="build-row" href={build.link} target="_blank" rel="noreferrer" key={build.title}>
              <span className="build-index">{build.index}</span><div><span className="build-tag">{build.tag}</span><h3>{build.title}</h3></div><p>{build.text}</p><span className="build-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="workshops-section section-shell" id="workshops">
        <div className="section-heading workshop-heading"><p className="eyebrow"><span /> Ready-to-run programs</p><h2>One room.<br /><em>One real outcome.</em></h2></div>
        <div className="workshop-grid">
          {workshops.map((workshop) => (
            <article className="workshop-card" key={workshop.number}><span className="workshop-number">{workshop.number}</span><h3>{workshop.title}</h3><div className="workshop-output"><span>PARTICIPANTS LEAVE WITH</span><p>{workshop.output}</p></div><p className="workshop-tools">{workshop.tools}</p></article>
          ))}
          <article className="workshop-card workshop-punchline"><p>Slides are allowed.<br /><strong>Shipping is mandatory.</strong></p><a href="mailto:arunchandel1780@gmail.com">Bring this to your community ↗</a></article>
        </div>
      </section>

      <section className="ledger-section" id="ledger">
        <div className="ledger-top"><div><p className="eyebrow light"><span /> The complete record</p><h2>Event ledger</h2></div><p>Twenty selected initiatives. No mystery arithmetic. Open the source evidence whenever you like.</p></div>
        <div className="ledger-table" role="table" aria-label="Selected community event record">
          <div className="ledger-row ledger-head" role="row"><span>Mission</span><span>Place</span><span>Interest / approval</span><span>Attendance / outcome</span><span>Proof</span></div>
          {ledger.map(([title, place, interest, outcome, link], index) => (
            <div className="ledger-row" role="row" key={`${title}-${place}`}><span className="ledger-title"><i>{String(index + 1).padStart(2, '0')}</i>{title}</span><span>{place}</span><span>{interest}</span><span>{outcome}</span><a href={link} target="_blank" rel="noreferrer" aria-label={`Open evidence for ${title}`}>↗</a></div>
          ))}
        </div>
      </section>

      <section className="writing-section section-shell" id="writing">
        <div className="writing-intro"><p className="eyebrow"><span /> Field notes</p><h2>I learn it.<br />I break it.<br /><em>I document it.</em></h2></div>
        <div className="writing-links">
          <a href="https://medium.com/@arunchandel1780/cardano-infrastructure-is-not-just-another-container-a-kubernetes-and-ai-operations-blueprint-1dc9abe8f931" target="_blank" rel="noreferrer"><span>Kubernetes · AI operations</span><strong>Cardano infrastructure is not just another container</strong><i>↗</i></a>
          <a href="https://medium.com/@arunchandel1780/i-built-a-grafana-dashboard-then-i-realised-it-wasnt-observability-32dbbe5752fa" target="_blank" rel="noreferrer"><span>Grafana · observability</span><strong>I built a dashboard. Then realised it wasn’t observability.</strong><i>↗</i></a>
          <a href="https://github.com/classroomio/classroomio/pull/898" target="_blank" rel="noreferrer"><span>Open source</span><strong>Classroomio contribution — PR #898</strong><i>↗</i></a>
          <a href="https://medium.com/@arunchandel1780" target="_blank" rel="noreferrer"><span>All field notes</span><strong>More writing on AI, infrastructure and adoption</strong><i>↗</i></a>
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="evidence-heading"><p className="eyebrow light"><span /> Open evidence deck</p><h2>Don’t take<br />my word for it.</h2><p>Open the work, the writing, the galleries and the communities. Every tile leads somewhere real.</p></div>
        <div className="evidence-grid">
          {evidenceLinks.map((item) => (
            <a href={item.link} target="_blank" rel="noreferrer" className="evidence-card" key={item.code}>
              <span className="evidence-code">{item.code}</span><span className="evidence-label">{item.label}</span><strong>{item.title}</strong><p>{item.meta}</p><i>↗</i>
            </a>
          ))}
        </div>
        <div className="community-foot"><span>THE ORIGIN GUILD</span><a href="https://x.com/og_guild" target="_blank" rel="noreferrer">X ↗</a><a href="https://www.linkedin.com/company/theoriginguild/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/theoriginguild/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://chat.whatsapp.com/Ij3DzAbeA3M7bzA7zkhtHx" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
      </section>

      <section className="contact-section" id="contact">
        <p className="contact-stamp">AVAILABLE FOR SELECTED COLLABORATIONS · CENTRAL INDIA + REMOTE</p>
        <h2>Bring the tool.<br /><em>I’ll build the room.</em></h2>
        <p>Developer product launch, practical workshop, build night or community activation—let’s make something people can use before the snacks run out.</p>
        <a className="contact-button" href="mailto:arunchandel1780@gmail.com">arunchandel1780@gmail.com <span>↗</span></a>
        <div className="social-row"><a href="https://www.linkedin.com/in/arun-pratap-singh-chandel-7aa101259/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://x.com/arun_edition" target="_blank" rel="noreferrer">X / Twitter ↗</a><a href="https://github.com/Arun5768" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linktr.ee/arun_edition" target="_blank" rel="noreferrer">Linktree ↗</a></div>
      </section>

      <footer><span>ARUN / OPS · CENTRAL INDIA · BHOPAL</span><span>Built with evidence, caffeine and a reasonable distrust of vanity metrics.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
