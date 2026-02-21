const DB = {

  Career: {
    color: '#ff4d9d', icon: '💼',
    questions: [
      { q: "How do you prefer to spend your working hours?", opts: ["Building & coding systems", "Helping & advising people", "Creating art or content"] },
      { q: "Which school subject excited you most?", opts: ["Math & Science", "Literature & Communication", "Art & Design"] },
      { q: "Your dream work environment?", opts: ["Remote, solo deep work", "Collaborative office team", "On-site, hands-on field"] },
      { q: "Pick a superpower for your career:", opts: ["Solving complex problems", "Persuading and leading people", "Making beautiful things"] },
      { q: "What kind of impact do you want to have?", opts: ["Technological advancement", "Social & human well-being", "Cultural influence"] },
      { q: "How do you handle failure?", opts: ["Analyze data and iterate", "Reflect and seek feedback", "Experiment again creatively"] },
      { q: "Which activity sounds most exciting?", opts: ["Building an app or website", "Running a workshop or talk", "Designing a brand identity"] },
      { q: "Your ideal career growth path?", opts: ["Deep specialist expertise", "Climbing the management ladder", "Building my own brand or business"] },
      { q: "How do you learn best?", opts: ["Tutorials and documentation", "Mentors and discussion", "Trial, error and exploration"] },
      { q: "Which outcome excites you most?", opts: ["Launching a working product", "Transforming someone's life", "Winning a creative award"] }
    ],
    results: [
      { name: "Software Engineering",  icon: "💻", desc: "Build apps & systems", color: "#7873f5" },
      { name: "Web Development",       icon: "🌐", desc: "Create web experiences", color: "#00eaff" },
      { name: "Data Science",          icon: "📊", desc: "Extract insights from data", color: "#ff6ec4" },
      { name: "UI/UX Design",          icon: "🎨", desc: "Design user experiences", color: "#ff914d" },
      { name: "Product Management",    icon: "🗺️", desc: "Lead products to market", color: "#00ffab" },
      { name: "Cybersecurity",         icon: "🔐", desc: "Protect digital systems", color: "#ffcc00" },
      { name: "AI & Machine Learning", icon: "🤖", desc: "Build intelligent systems", color: "#8a2be2" },
      { name: "DevOps & Cloud",        icon: "☁️", desc: "Scale infrastructure", color: "#ff5733" },
      { name: "Digital Marketing",     icon: "📣", desc: "Grow brands online", color: "#00c9ff" },
      { name: "Entrepreneurship",      icon: "🚀", desc: "Build your own venture", color: "#ff4d9d" }
    ]
  },

  Money: {
    color: '#6c63ff', icon: '💰',
    questions: [
      { q: "How comfortable are you with financial risk?", opts: ["Love high risk, high reward", "Prefer moderate balanced risk", "Keep it safe and steady"] },
      { q: "What's your relationship with money?", opts: ["Tool to build wealth fast", "Security and freedom", "Means to enjoy experiences"] },
      { q: "How do you make big decisions?", opts: ["Pure data and numbers", "Gut feeling and instinct", "Research then decide slowly"] },
      { q: "Pick your money-making style:", opts: ["Investing and compounding", "Side hustles and freelancing", "Salary climb and saving"] },
      { q: "Your time horizon for financial goals?", opts: ["1–3 years (quick wins)", "5–10 years (steady growth)", "20+ years (long game)"] },
      { q: "What motivates you financially?", opts: ["Achieving financial freedom ASAP", "Building generational wealth", "Earning enough to live fully"] },
      { q: "How do you feel about markets?", opts: ["Fascinated — I study them", "Curious but nervous", "I prefer real estate and assets"] },
      { q: "Your ideal income source?", opts: ["Passive income from investments", "Active hustle through business", "Stable job with bonuses"] },
      { q: "How do you handle a financial loss?", opts: ["Cut losses and pivot fast", "Hold and wait it out", "Diversify to reduce exposure"] },
      { q: "What's your ultimate money goal?", opts: ["Retire early (FIRE movement)", "Build a business empire", "Live comfortably, never stress"] }
    ],
    results: [
      { name: "Stock Trading",         icon: "📈", desc: "Master the markets", color: "#6c63ff" },
      { name: "Real Estate Investing", icon: "🏠", desc: "Property investment path", color: "#ff914d" },
      { name: "Crypto & Web3",         icon: "⚡", desc: "Digital asset investing", color: "#00eaff" },
      { name: "Freelancing Empire",    icon: "💻", desc: "Sell your skills globally", color: "#ff6ec4" },
      { name: "Dropshipping",          icon: "📦", desc: "E-commerce without stock", color: "#00ffab" },
      { name: "Angel Investing",       icon: "😇", desc: "Fund early-stage startups", color: "#ffcc00" },
      { name: "Content Monetization",  icon: "🎬", desc: "Earn from your content", color: "#ff4d9d" },
      { name: "Index Fund FIRE",       icon: "🔥", desc: "Retire early strategy", color: "#8a2be2" },
      { name: "SaaS Business",         icon: "🛠️", desc: "Build recurring revenue", color: "#7873f5" },
      { name: "Investment Banking",    icon: "🏦", desc: "High finance career", color: "#ff5733" }
    ]
  },

  Creativity: {
    color: '#00eaff', icon: '🎨',
    questions: [
      { q: "Where does your creative energy naturally go?", opts: ["Visual art and imagery", "Words, stories and ideas", "Sound, music and rhythm"] },
      { q: "What kind of projects excite you?", opts: ["Large visual campaigns", "Deep solo personal work", "Collaborative performances"] },
      { q: "How do you feel about sharing your work?", opts: ["Love it — I crave feedback", "Nervous but I do it", "I prefer privacy, create for myself"] },
      { q: "Pick your creative medium:", opts: ["Digital and tech tools", "Traditional and analog craft", "Live performance"] },
      { q: "What's your ultimate creative goal?", opts: ["Build a commercial brand", "Create meaningful lasting art", "Entertain and inspire masses"] },
      { q: "How do you overcome creative blocks?", opts: ["Research and mood boards", "Step away and rest", "Collaborate with others"] },
      { q: "What's your signature aesthetic style?", opts: ["Bold, graphic and vibrant", "Minimalist, quiet and refined", "Experimental and rule-breaking"] },
      { q: "Which creative era inspires you most?", opts: ["Futuristic and digital", "Classic and timeless", "90s/Y2K nostalgic"] },
      { q: "Your ideal creative workspace?", opts: ["Home studio setup", "Open co-working space", "Nature or outdoor locations"] },
      { q: "Which creative output matters most to you?", opts: ["A viral visual campaign", "A published book or film", "A sold-out live show"] }
    ],
    results: [
      { name: "Graphic Design",     icon: "✏️", desc: "Visual communication mastery", color: "#00eaff" },
      { name: "Video & Film",       icon: "🎬", desc: "Tell stories through visuals", color: "#ff6ec4" },
      { name: "Photography",        icon: "📸", desc: "Capture real moments", color: "#ffcc00" },
      { name: "Music Production",   icon: "🎵", desc: "Craft sonic experiences", color: "#8a2be2" },
      { name: "Creative Writing",   icon: "📖", desc: "Stories that move people", color: "#ff914d" },
      { name: "Animation & Motion", icon: "🌀", desc: "Bring ideas to life", color: "#7873f5" },
      { name: "Fashion Design",     icon: "👗", desc: "Wear your vision", color: "#ff4d9d" },
      { name: "Interior Design",    icon: "🏡", desc: "Design living spaces", color: "#00ffab" },
      { name: "Illustration",       icon: "🖼️", desc: "Draw your imagination", color: "#ff5733" },
      { name: "Content Creation",   icon: "📱", desc: "Build a creative audience", color: "#00c9ff" }
    ]
  },

  Passion: {
    color: '#ff914d', icon: '🔥',
    questions: [
      { q: "What makes you lose complete track of time?", opts: ["Learning or researching things", "Making or building things", "Connecting with people"] },
      { q: "If money wasn't a factor, you'd spend your life:", opts: ["Exploring the world endlessly", "Creating and inventing constantly", "Teaching and mentoring others"] },
      { q: "What energizes you most?", opts: ["A new challenge to solve", "A project coming to life", "Changing someone's perspective"] },
      { q: "Your passion is best expressed through:", opts: ["Action and doing things", "Thinking and strategizing", "Speaking and sharing ideas"] },
      { q: "What kind of stories inspire you deeply?", opts: ["Scientists and innovators", "Artists and creators", "Leaders and activists"] },
      { q: "How do you spend free weekends?", opts: ["Learning something completely new", "Making something creative", "Socializing and networking"] },
      { q: "What would you do for free forever?", opts: ["Research and discover things", "Design and build things", "Teach and inspire others"] },
      { q: "Your passion has a natural audience of:", opts: ["Fellow curious intellectuals", "Creative communities", "People who need change"] },
      { q: "What makes your passion unique?", opts: ["Deep expertise no one else has", "A unique and original creative vision", "Ability to connect and move people"] },
      { q: "If you wrote a book, it would be:", opts: ["How the world works (non-fiction)", "A universe you imagined (fiction/art)", "How to live better (self-help/memoir)"] }
    ],
    results: [
      { name: "Research & Academia",  icon: "🔬", desc: "Advance human knowledge", color: "#ff914d" },
      { name: "Social Impact Work",   icon: "🌍", desc: "Change lives at scale", color: "#00ffab" },
      { name: "Sports & Coaching",    icon: "⚽", desc: "Lead others to peak performance", color: "#ff5733" },
      { name: "Travel & Adventure",   icon: "✈️", desc: "Explore the entire planet", color: "#00eaff" },
      { name: "Health & Wellness",    icon: "🧘", desc: "Heal body and mind", color: "#7873f5" },
      { name: "Food & Culinary Arts", icon: "🍳", desc: "Create through taste", color: "#ffcc00" },
      { name: "Education & Teaching", icon: "📚", desc: "Shape future minds", color: "#ff4d9d" },
      { name: "Environmentalism",     icon: "🌿", desc: "Protect our planet", color: "#00c9ff" },
      { name: "Animal & Wildlife",    icon: "🦁", desc: "Advocate for nature", color: "#8a2be2" },
      { name: "Gaming & Esports",     icon: "🎮", desc: "Compete at the top level", color: "#6c63ff" }
    ]
  },

  Stability: {
    color: '#00ffab', icon: '🏛️',
    questions: [
      { q: "What does stability mean to you?", opts: ["Consistent income always", "Job security and tenure", "Predictable daily routine"] },
      { q: "How do you feel about change at work?", opts: ["Prefer it stays consistent", "Some change is fine", "Love slow, planned transitions"] },
      { q: "Pick your ideal employment type:", opts: ["Government or public sector", "Large established corporation", "Small stable local business"] },
      { q: "Your savings philosophy:", opts: ["Max savings, minimal spend", "Balance saving and enjoying", "Invest steadily for the future"] },
      { q: "How important is work-life balance?", opts: ["The most important thing", "Important but so is career", "I dedicate fully to my career"] },
      { q: "Which kind of stability matters most?", opts: ["Financial certainty", "Career permanence", "Emotional consistency"] },
      { q: "How do you handle uncertainty?", opts: ["Avoid it at all costs", "Prepare for it and accept it", "Hedge everything with backup plans"] },
      { q: "Your ideal career achievement:", opts: ["30-year expert in one field", "Steady management climb", "Business owner with stable revenue"] },
      { q: "Benefits that matter most to you:", opts: ["Health insurance and pension", "Paid leave and flexibility", "Bonuses and profit sharing"] },
      { q: "Your ideal retirement plan:", opts: ["Government pension at 60", "Early retirement at 45", "Work until I genuinely want to stop"] }
    ],
    results: [
      { name: "Civil Services / IAS",     icon: "🏛️", desc: "Serve and govern", color: "#00ffab" },
      { name: "Banking & Finance",        icon: "🏦", desc: "Stable financial sector career", color: "#6c63ff" },
      { name: "Healthcare / Medicine",    icon: "🏥", desc: "Lifelong needed profession", color: "#ff6ec4" },
      { name: "Teaching / Professor",     icon: "📚", desc: "Tenured academic career", color: "#ff914d" },
      { name: "Law & Legal",              icon: "⚖️", desc: "Established legal career", color: "#ffcc00" },
      { name: "Core Engineering",         icon: "⚙️", desc: "Civil, mechanical, electrical", color: "#7873f5" },
      { name: "Accounting & CA",          icon: "🔢", desc: "Financial certainty role", color: "#ff4d9d" },
      { name: "Public Health",            icon: "💉", desc: "Population-level care", color: "#00eaff" },
      { name: "Logistics & Supply Chain", icon: "🚚", desc: "Essential operations backbone", color: "#ff5733" },
      { name: "Real Estate Agency",       icon: "🏠", desc: "Property professional career", color: "#00c9ff" }
    ]
  },

  Freedom: {
    color: '#ffcc00', icon: '🦋',
    questions: [
      { q: "What does freedom mean to you?", opts: ["Work from anywhere on Earth", "Own your time completely", "No boss, no limits on life"] },
      { q: "How do you feel about structure?", opts: ["Hate it — I make my own rules", "Some structure is helpful", "Deadlines actually motivate me"] },
      { q: "Your ideal work style:", opts: ["Digital nomad, travel and work", "Freelance from my own home", "Build a business, delegate everything"] },
      { q: "How long can you wait to be free?", opts: ["I need freedom NOW", "1–3 years of grind first", "5+ years building the right base"] },
      { q: "What's your freedom currency?", opts: ["Time (unlimited leisure)", "Money (unlimited resources)", "Experience (unlimited adventures)"] },
      { q: "What's your income model for freedom?", opts: ["Passive income streams", "Consulting and freelancing", "Selling products or content"] },
      { q: "Which location fits your free life?", opts: ["Bali, Lisbon or Chiang Mai", "My hometown, my own rules", "Constantly changing — no base"] },
      { q: "Freedom from what most?", opts: ["A 9–5 schedule", "A physical office location", "A difficult or controlling boss"] },
      { q: "How do you sell your unique skills?", opts: ["Online platforms like Upwork", "My own personal brand", "Network and word of mouth"] },
      { q: "Your ultimate free life looks like:", opts: ["4-hour workweek lifestyle", "Growing empire from a beach", "Traveling artist or creator"] }
    ],
    results: [
      { name: "Digital Nomad Life",    icon: "🌏", desc: "Work remotely, travel always", color: "#ffcc00" },
      { name: "Freelance Developer",   icon: "💻", desc: "Code from absolutely anywhere", color: "#00eaff" },
      { name: "YouTuber / Creator",    icon: "🎥", desc: "Build audience-based freedom", color: "#ff6ec4" },
      { name: "Online Course Creator", icon: "🎓", desc: "Teach and earn passively", color: "#7873f5" },
      { name: "Dropshipping / Ecom",   icon: "🛒", desc: "Sell without holding inventory", color: "#00ffab" },
      { name: "Consulting / Coaching", icon: "🎯", desc: "Charge premium for expertise", color: "#ff914d" },
      { name: "Print on Demand",       icon: "🖨️", desc: "Sell designs passively online", color: "#8a2be2" },
      { name: "Affiliate Marketing",   icon: "🔗", desc: "Earn commissions while you sleep", color: "#ff4d9d" },
      { name: "Remote SaaS Founder",   icon: "🚀", desc: "Build software from anywhere", color: "#ff5733" },
      { name: "Travel Blogger",        icon: "✈️", desc: "Document your adventures", color: "#00c9ff" }
    ]
  },

  Growth: {
    color: '#8a2be2', icon: '🌱',
    questions: [
      { q: "Growth to you means:", opts: ["Learning new skills rapidly", "Moving up in career or title", "Becoming a better human being"] },
      { q: "How fast do you want to grow?", opts: ["Sprint — 10x in 2 years", "Steady — 20% better each year", "Deep — mastery over decades"] },
      { q: "What's your biggest growth blocker?", opts: ["Lack of the right skills", "Lack of opportunities", "Mindset and confidence issues"] },
      { q: "Your preferred growth vehicle:", opts: ["Online courses and books", "Mentors and masterminds", "Building and failing fast"] },
      { q: "Which growth matters most to you?", opts: ["Intellectual and skill growth", "Career and financial growth", "Personal and spiritual growth"] },
      { q: "How do you measure your own growth?", opts: ["Skills added and certifications", "Income and promotions received", "Relationships and impact made"] },
      { q: "Your growth role model is:", opts: ["A self-made tech billionaire", "A world-class craftsperson", "A wise philosopher or monk"] },
      { q: "How do you react to being seriously challenged?", opts: ["Thrive — pressure makes diamonds", "Steady — I process and respond", "Reflect — I need space to grow"] },
      { q: "Growth requires sacrificing:", opts: ["Comfort and leisure time", "Social life temporarily", "Financial security short-term"] },
      { q: "Your growth destination:", opts: ["World-class expert in my field", "Leader of a growing organization", "Fully realized, balanced person"] }
    ],
    results: [
      { name: "Tech Skills Mastery",     icon: "⚡", desc: "Code, AI, Cloud expertise", color: "#8a2be2" },
      { name: "Leadership Development",  icon: "👑", desc: "Rise to the C-suite", color: "#ff914d" },
      { name: "Startup Founder",         icon: "🚀", desc: "Build something from zero", color: "#ff4d9d" },
      { name: "Personal Coaching",       icon: "🧠", desc: "Transform yourself and others", color: "#00ffab" },
      { name: "MBA & Business",          icon: "🎓", desc: "Advanced business mastery", color: "#7873f5" },
      { name: "Public Speaking",         icon: "🎤", desc: "Influence through words", color: "#ffcc00" },
      { name: "High-Performance Sports", icon: "🏆", desc: "Peak physical performance", color: "#ff5733" },
      { name: "Research & Innovation",   icon: "🔬", desc: "Push knowledge boundaries", color: "#00eaff" },
      { name: "Mindfulness & Stoicism",  icon: "🧘", desc: "Master the inner game", color: "#6c63ff" },
      { name: "Sales & Negotiation",     icon: "🤝", desc: "Master the art of the deal", color: "#ff6ec4" }
    ]
  },

  Impact: {
    color: '#ff6ec4', icon: '🌍',
    questions: [
      { q: "What kind of impact fires you up?", opts: ["Solving a global crisis", "Changing one person's life deeply", "Shifting culture and mindset"] },
      { q: "How do you prefer to create impact?", opts: ["Through technology and systems", "Through relationships and community", "Through art and storytelling"] },
      { q: "Which problem do you most want to solve?", opts: ["Climate and environment", "Poverty and inequality", "Mental health and wellness"] },
      { q: "Your ideal impact role:", opts: ["Founder solving it at massive scale", "Activist or organizer on the ground", "Creator changing hearts and minds"] },
      { q: "Impact requires what sacrifice?", opts: ["Income (non-profit path)", "Comfort (difficult conditions)", "Time (decades of commitment)"] },
      { q: "Which impact metric matters most?", opts: ["Number of people reached", "Depth of lives changed", "Policy or systemic shifts made"] },
      { q: "Your impact vehicle:", opts: ["A social enterprise business", "An NGO or non-profit org", "A media platform or movement"] },
      { q: "Who inspires your impact vision?", opts: ["Malala or Greta (activist)", "Elon or Jobs (tech disruptor)", "Oprah or Eckhart (human transformer)"] },
      { q: "How do you fund your impact work?", opts: ["Grants and donations", "Commercial model that funds mission", "Government and public sector funding"] },
      { q: "Your impact legacy:", opts: ["An institution named after you", "Millions of lives quietly improved", "A movement that outlives you"] }
    ],
    results: [
      { name: "Social Entrepreneur",    icon: "🌍", desc: "Business that does good", color: "#ff6ec4" },
      { name: "Climate Tech",           icon: "🌱", desc: "Tech solving the climate crisis", color: "#00ffab" },
      { name: "Public Health",          icon: "💉", desc: "Save lives at massive scale", color: "#ff4d9d" },
      { name: "EdTech Founder",         icon: "🎓", desc: "Democratize education globally", color: "#7873f5" },
      { name: "Journalism & Media",     icon: "📰", desc: "Speak truth to power", color: "#ffcc00" },
      { name: "Policy & Government",    icon: "🏛️", desc: "Systemic change from inside", color: "#00eaff" },
      { name: "NGO Leadership",         icon: "🤲", desc: "Organize for real change", color: "#ff914d" },
      { name: "Mental Health Advocate", icon: "💚", desc: "Heal millions of people", color: "#8a2be2" },
      { name: "Human Rights Law",       icon: "⚖️", desc: "Fight for justice everywhere", color: "#ff5733" },
      { name: "Community Organizing",   icon: "🏘️", desc: "Build grassroots power", color: "#6c63ff" }
    ]
  },

  Skills: {
    color: '#00c9ff', icon: '⚡',
    questions: [
      { q: "What kind of skill do you want to master?", opts: ["Technical and hard skills", "Creative and artistic skills", "Social and communication skills"] },
      { q: "How do you prefer to practice skills?", opts: ["Structured courses with tests", "Real projects and building things", "Watching and mimicking masters"] },
      { q: "Your skill-building style:", opts: ["Focused on one deep skill", "Multiple complementary skills", "A broad range of surface skills"] },
      { q: "What's your benchmark for mastery?", opts: ["10,000 hours of deliberate practice", "Earning money from the skill", "Being recognized as expert by peers"] },
      { q: "Which skill superpower appeals most?", opts: ["Technical: coding, math, engineering", "Creative: design, writing, music", "Human: leadership, sales, empathy"] },
      { q: "How fast do you want to develop skills?", opts: ["Bootcamp intensity — 3 months", "Consistent 1 hour per day — 1 year", "Patient apprenticeship — 3+ years"] },
      { q: "What's your skill learning challenge?", opts: ["Finding the right resources", "Staying consistent and disciplined", "Applying theory to real practice"] },
      { q: "Your ideal skill outcome:", opts: ["Get hired for a high-paying job", "Build my own products and services", "Teach others the skill I mastered"] },
      { q: "Skills that excite you most:", opts: ["AI and emerging tech skills", "Creative production skills", "Business and strategy skills"] },
      { q: "What do people already say you're good at?", opts: ["Thinking and analyzing things", "Making and creating things", "Communicating and influencing people"] }
    ],
    results: [
      { name: "Full-Stack Coding",       icon: "💻", desc: "Build anything on the web", color: "#00c9ff" },
      { name: "AI & Prompt Engineering", icon: "🤖", desc: "Master the AI era", color: "#8a2be2" },
      { name: "Video Editing & Motion",  icon: "🎬", desc: "Visual storytelling craft", color: "#ff6ec4" },
      { name: "Copywriting & SEO",       icon: "✍️", desc: "Words that convert and rank", color: "#ffcc00" },
      { name: "Data Analysis",           icon: "📊", desc: "Decisions from raw numbers", color: "#7873f5" },
      { name: "Graphic Design",          icon: "🎨", desc: "Visual communication mastery", color: "#ff914d" },
      { name: "Public Speaking",         icon: "🎤", desc: "Command absolutely any room", color: "#ff4d9d" },
      { name: "Digital Marketing",       icon: "📣", desc: "Grow brands online", color: "#00ffab" },
      { name: "Music Production",        icon: "🎵", desc: "Create entire sonic worlds", color: "#ff5733" },
      { name: "No-Code & Automation",    icon: "⚙️", desc: "Build products without coding", color: "#00eaff" }
    ]
  },

  Recognition: {
    color: '#ff5733', icon: '🏆',
    questions: [
      { q: "What kind of recognition do you crave?", opts: ["Fame and public status", "Respect among peers and experts", "Community love and loyalty"] },
      { q: "How do you want to be known?", opts: ["A disruptive innovator", "The very best in your craft", "A beloved figure who gave back"] },
      { q: "Your preferred recognition platform:", opts: ["Social media and internet fame", "Industry awards and conferences", "Local community influence"] },
      { q: "What's recognition worth sacrificing for?", opts: ["Privacy and personal life", "Financial gain short-term", "Comfort and stability"] },
      { q: "Pick your recognition achievement:", opts: ["Forbes 30 Under 30", "A viral TED Talk", "A Grammy, Oscar, or top industry award"] },
      { q: "How do you build a great reputation?", opts: ["Consistent content output", "Excellence in high-stakes work", "Relationship building over time"] },
      { q: "Your recognition motivation:", opts: ["Validation that I truly matter", "Proof that I am excellent", "Platform to amplify my message"] },
      { q: "Which recognized person inspires you?", opts: ["A viral entrepreneur or CEO", "An acclaimed artist or author", "A respected scientist or researcher"] },
      { q: "How do you handle public criticism?", opts: ["Block it and keep moving forward", "Engage with it and grow", "Quietly improve my work privately"] },
      { q: "Your recognition legacy:", opts: ["A globally known household name", "The definitive expert on my subject", "Someone who inspired thousands locally"] }
    ],
    results: [
      { name: "Personal Branding",       icon: "✨", desc: "Build your name as a brand", color: "#ff5733" },
      { name: "Influencer / Creator",    icon: "📱", desc: "Millions follow your lead", color: "#ff6ec4" },
      { name: "Award-Winning Author",    icon: "📖", desc: "Write work that truly lasts", color: "#ffcc00" },
      { name: "TEDx / Keynote Speaker",  icon: "🎤", desc: "Ideas worth spreading globally", color: "#7873f5" },
      { name: "Startup Founder",         icon: "🚀", desc: "Get featured in Forbes/TechCrunch", color: "#00eaff" },
      { name: "Top Athlete / Coach",     icon: "🏆", desc: "Champion in your domain", color: "#ff914d" },
      { name: "Expert Consultant",       icon: "🎯", desc: "The go-to authority in your field", color: "#00ffab" },
      { name: "Award-Winning Artist",    icon: "🎨", desc: "Create work that wins prizes", color: "#8a2be2" },
      { name: "Podcast Host",            icon: "🎙️", desc: "Build a loyal listening audience", color: "#ff4d9d" },
      { name: "LinkedIn Thought Leader", icon: "💼", desc: "Professional influence at scale", color: "#00c9ff" }
    ]
  }

};

const ROADMAPS = {

  "Software Engineering": { color: "#7873f5", steps: [
    { icon: "📚", label: "Phase 1 · Month 1–3",  title: "Learn the Foundations",        desc: "Master HTML/CSS, JavaScript basics, and pick one language (Python or JS). Use freeCodeCamp, CS50, or The Odin Project." },
    { icon: "💻", label: "Phase 2 · Month 3–6",  title: "Build Your First Projects",    desc: "Create 3–5 portfolio projects: a calculator, to-do app, and weather app. Push everything to GitHub daily." },
    { icon: "⚙️", label: "Phase 3 · Month 6–12", title: "Learn a Framework",            desc: "Master React (frontend) or Node.js/Django (backend). Build a full-stack project with a database and authentication." },
    { icon: "🧪", label: "Phase 4 · Year 1–2",   title: "Practice DSA & System Design", desc: "Solve 150+ LeetCode problems. Learn Big O notation, trees, graphs. Read Cracking the Coding Interview." },
    { icon: "🤝", label: "Phase 5 · Year 1–2",   title: "Land Your First Job",          desc: "Apply to 50+ positions. Do mock interviews on Pramp. Target startups first for faster growth and real responsibility." },
    { icon: "🚀", label: "Phase 6 · Year 2–4",   title: "Specialize & Level Up",        desc: "Choose a specialization: AI/ML, Cloud (AWS), Mobile, or DevOps. Get certifications. Lead a full project end-to-end." },
    { icon: "👑", label: "Phase 7 · Year 4+",    title: "Senior / Staff Engineer",      desc: "Mentor junior devs, lead architecture decisions, speak at conferences. Open source contributions build massive reputation." }
  ]},

  "Web Development": { color: "#00eaff", steps: [
    { icon: "🌐", label: "Phase 1 · Month 1–2",  title: "HTML & CSS Mastery",       desc: "Build 10 static websites. Master Flexbox, Grid, and responsive design. Use Frontend Mentor for daily challenges." },
    { icon: "⚡", label: "Phase 2 · Month 2–4",  title: "JavaScript Deep Dive",     desc: "Master DOM manipulation, Fetch API, async/await, and ES6+. Build interactive projects without any frameworks first." },
    { icon: "⚛️", label: "Phase 3 · Month 4–8",  title: "React & Modern Stack",     desc: "Learn React, Next.js, and Tailwind CSS. Deploy on Vercel. Add TypeScript once you're comfortable with the basics." },
    { icon: "🗄️", label: "Phase 4 · Month 6–10", title: "Backend & Databases",      desc: "Learn Node.js + Express or Next.js API routes. Connect PostgreSQL or MongoDB. Implement full authentication flow." },
    { icon: "💼", label: "Phase 5 · Month 8–12", title: "Build & Launch Projects",  desc: "Launch 2–3 real projects with actual users. Get testimonials. Document your process publicly on Twitter or LinkedIn." },
    { icon: "💰", label: "Phase 6 · Year 1–2",   title: "First Freelance Clients",  desc: "Offer websites to local businesses at $500–2000. Use Upwork and Fiverr to start. Build to $3–5k per month." },
    { icon: "🏢", label: "Phase 7 · Year 2+",    title: "Agency or Senior Role",    desc: "Join a top agency, land a senior remote role, or start your own web agency. Six-figure income is fully within reach." }
  ]},

  "Data Science": { color: "#ff6ec4", steps: [
    { icon: "🐍", label: "Phase 1 · Month 1–3",  title: "Python & Statistics",             desc: "Master Python (pandas, numpy). Learn statistics: distributions, hypothesis testing, regression. Start Kaggle courses." },
    { icon: "📊", label: "Phase 2 · Month 3–6",  title: "Data Analysis & Visualization",   desc: "Master matplotlib, seaborn, Plotly. Complete 5+ EDA projects. Learn to present findings clearly to stakeholders." },
    { icon: "🤖", label: "Phase 3 · Month 6–9",  title: "Machine Learning Core",           desc: "Learn scikit-learn: regression, classification, clustering, and evaluation metrics. Enter 3+ Kaggle competitions." },
    { icon: "🧠", label: "Phase 4 · Month 9–15", title: "Deep Learning & AI",              desc: "Learn TensorFlow or PyTorch. Study CNNs, RNNs, and Transformers. Complete fast.ai and build a real ML project." },
    { icon: "☁️", label: "Phase 5 · Year 1–2",   title: "MLOps & Deployment",              desc: "Deploy models with Flask or FastAPI. Learn Docker and AWS SageMaker or GCP Vertex AI. Version models with MLflow." },
    { icon: "💼", label: "Phase 6 · Year 1–2",   title: "Land DS Roles",                   desc: "Build a portfolio of 3 end-to-end projects. Target analyst then data scientist path. Overhaul your LinkedIn profile." },
    { icon: "👑", label: "Phase 7 · Year 3+",    title: "Principal / Lead Data Scientist", desc: "Define data strategy and mentor teams. Speak at PyData or KDD. Specialize in NLP, Computer Vision, or RecSys." }
  ]},

  "UI/UX Design": { color: "#ff914d", steps: [
    { icon: "🎨", label: "Phase 1 · Month 1–2",  title: "Design Principles",           desc: "Study typography, color theory, layout, and Gestalt principles. Read The Design of Everyday Things by Don Norman." },
    { icon: "🛠️", label: "Phase 2 · Month 2–4",  title: "Master Figma",                desc: "Learn Figma end-to-end: components, auto-layout, prototyping, and design systems. Rebuild 5 existing well-known apps." },
    { icon: "🔍", label: "Phase 3 · Month 4–6",  title: "UX Research Methods",         desc: "Learn user interviews, usability testing, card sorting, personas, and user journeys. Practice with real users." },
    { icon: "📐", label: "Phase 4 · Month 6–9",  title: "Build Case Study Portfolio",  desc: "Design 3 full case studies: problem → research → wireframes → final design → testing. Document your thinking clearly." },
    { icon: "💼", label: "Phase 5 · Month 9–15", title: "Land First Design Role",      desc: "Apply to product companies. Nail design critiques in interviews. Target UX designer roles at mid-size companies." },
    { icon: "🚀", label: "Phase 6 · Year 2–3",   title: "Senior Designer",             desc: "Own product design end-to-end. Build and maintain a full design system. Collaborate deeply with engineering and PM." },
    { icon: "👑", label: "Phase 7 · Year 4+",    title: "Design Lead / Head of Design",desc: "Lead a design team, define company design vision, present to executives. Speak at UX conferences globally." }
  ]},

  "Stock Trading": { color: "#6c63ff", steps: [
    { icon: "📚", label: "Phase 1 · Month 1–3",  title: "Learn Market Fundamentals",  desc: "Study how stock markets work, P/E ratios, earnings reports, and sectors. Read The Intelligent Investor by Graham." },
    { icon: "📈", label: "Phase 2 · Month 3–6",  title: "Paper Trade First",          desc: "Use a virtual trading account on Thinkorswim or Webull paper mode. Practice strategies with zero real money for 3 months." },
    { icon: "💰", label: "Phase 3 · Month 6–12", title: "Start Small & Real",         desc: "Invest $500–1000 in index ETFs like VOO or QQQ first. Build emotional discipline with real stakes before going active." },
    { icon: "🔍", label: "Phase 4 · Year 1–2",   title: "Develop Your Edge",          desc: "Choose a style: value, growth, momentum, or swing trading. Backtest your system. Journal every single trade carefully." },
    { icon: "📊", label: "Phase 5 · Year 2–3",   title: "Scale Capital",              desc: "Grow your account consistently. Never risk more than 2% per trade. Compound gains steadily. Target 20–30% annually." },
    { icon: "🤖", label: "Phase 6 · Year 3–5",   title: "Automate & Systematize",     desc: "Build or use algorithmic trading tools. Learn options and spreads. Diversify across multiple uncorrelated strategies." },
    { icon: "🏆", label: "Phase 7 · Year 5+",    title: "Fund Manager / Prop Trader", desc: "Manage capital professionally. Join a prop firm, launch a small hedge fund, or trade full-time from your portfolio." }
  ]},

  "Graphic Design": { color: "#00eaff", steps: [
    { icon: "🎨", label: "Phase 1 · Month 1–2",  title: "Art Fundamentals",             desc: "Study color theory, typography, composition, and hierarchy. Complete the 100 Days of Design challenge online." },
    { icon: "🛠️", label: "Phase 2 · Month 2–4",  title: "Master Adobe Suite",           desc: "Learn Illustrator (vectors), Photoshop (photos), and InDesign (layouts). Complete all free Adobe tutorials first." },
    { icon: "📱", label: "Phase 3 · Month 4–6",  title: "Digital Design Tools",         desc: "Add Figma and Canva Pro. Learn motion graphics basics with After Effects. Design for web and social media." },
    { icon: "💼", label: "Phase 4 · Month 6–10", title: "Build Portfolio & Get Clients",desc: "Design 10 brand identities, 5 poster series, and 3 full brand packages. Post consistently on Behance and Dribbble." },
    { icon: "💰", label: "Phase 5 · Year 1–2",   title: "Freelance Income",             desc: "Start at $30 per hour on Upwork. Specialize in logos or brand identity. Grow to $60–100 per hour over time." },
    { icon: "🏢", label: "Phase 6 · Year 2–3",   title: "Studio or Agency Role",        desc: "Join a top creative agency or launch your own design studio. Charge $2–10k per complete brand identity project." },
    { icon: "👑", label: "Phase 7 · Year 4+",    title: "Creative Director",            desc: "Lead design vision for major brands. Speak at CreativeMornings globally. Build a signature style clients seek." }
  ]},

  "Digital Nomad Life": { color: "#ffcc00", steps: [
    { icon: "💻", label: "Phase 1 · Month 1–3", title: "Develop a Remote Skill",       desc: "Master a sellable skill: web dev, design, copywriting, or VA work. Complete one intensive bootcamp or course." },
    { icon: "💰", label: "Phase 2 · Month 3–6", title: "Land Remote Income",           desc: "Get your first freelance clients or a fully remote job. Hit $2,000 per month consistently before going nomadic." },
    { icon: "🌏", label: "Phase 3 · Month 6–9", title: "Test the Lifestyle",           desc: "Start with a 1–3 month trip to a low-cost city: Chiang Mai, Bali, or Medellín. Validate that it works for you." },
    { icon: "⚡", label: "Phase 4 · Year 1",    title: "Optimize Income",              desc: "Raise your rates, add more clients, or build passive income streams. Target $4–6k per month for comfortable nomad life." },
    { icon: "🛡️", label: "Phase 5 · Year 1–2",  title: "Logistics & Systems",          desc: "Set up international health insurance, legal tax structure, mail forwarding, VPN, and travel banking with Wise." },
    { icon: "🌱", label: "Phase 6 · Year 2–3",  title: "Build a Nomad Community",     desc: "Join communities like Nomad List. Attend digital nomad conferences. Build deep relationships across all time zones." },
    { icon: "🚀", label: "Phase 7 · Year 3+",   title: "Location Independent Business",desc: "Graduate from freelancing to a scalable business. Productize your service, launch a SaaS, or build an agency." }
  ]},

  "Social Entrepreneur": { color: "#ff6ec4", steps: [
    { icon: "🔍", label: "Phase 1 · Month 1–3",  title: "Identify the Problem",        desc: "Deeply research one social problem. Talk to 100 people directly affected. Understand root causes, not just symptoms." },
    { icon: "💡", label: "Phase 2 · Month 3–6",  title: "Design the Solution",         desc: "Map out a solution that is both high-impact and financially sustainable. Apply design thinking methodology." },
    { icon: "🧪", label: "Phase 3 · Month 6–12", title: "Pilot & Validate",            desc: "Run a small pilot with 10–50 people. Measure outcomes rigorously. Iterate rapidly and continuously based on evidence." },
    { icon: "💰", label: "Phase 4 · Year 1–2",   title: "Fund the Mission",            desc: "Apply for grants and enter impact competitions like Echoing Green or Skoll. Build relationships with impact investors." },
    { icon: "🏗️", label: "Phase 5 · Year 2–3",   title: "Build the Team & Structure",  desc: "Register as a B Corp, NGO, or social enterprise. Hire for mission alignment above all. Create systems for scale." },
    { icon: "📣", label: "Phase 6 · Year 3–5",   title: "Scale Your Impact",           desc: "Partner with governments, corporations, and NGOs. Document and openly share your model. Go for 10x growth." },
    { icon: "🌍", label: "Phase 7 · Year 5+",    title: "Systems Change",              desc: "Influence policy, build wide coalitions, and replicate the model globally. Win recognition: UN Awards, Ashoka Fellowship." }
  ]},

  "Personal Branding": { color: "#ff5733", steps: [
    { icon: "🔍", label: "Phase 1 · Month 1–2",  title: "Find Your Niche & Voice",   desc: "Define your area of authority clearly. Answer: who are you for? What unique angle do you offer? Write your brand statement." },
    { icon: "✍️", label: "Phase 2 · Month 2–4",  title: "Start Creating Content",    desc: "Commit to one primary platform (LinkedIn, Twitter/X, YouTube, or Instagram). Post 3–5 times per week for 90 days." },
    { icon: "📸", label: "Phase 3 · Month 4–6",  title: "Professional Presence",     desc: "Get professional headshots. Build a personal website. Optimize all social profiles with a consistent visual identity." },
    { icon: "🤝", label: "Phase 4 · Month 6–12", title: "Network & Collaborate",     desc: "DM 3 people in your space every day. Write guest posts, appear on podcasts, and collaborate to grow through others' audiences." },
    { icon: "📣", label: "Phase 5 · Year 1–2",   title: "Leverage & Monetize",       desc: "Speak at events, launch a newsletter, sell a course or coaching offer. Your personal brand becomes a serious revenue engine." },
    { icon: "📺", label: "Phase 6 · Year 2–3",   title: "Media & Press",             desc: "Pitch yourself to top podcasts, write for industry publications, get quoted in major articles. Build media credibility." },
    { icon: "👑", label: "Phase 7 · Year 3+",    title: "Industry Authority",        desc: "You are THE name in your niche. Write a book. Launch a paid community. Your name opens major doors automatically." }
  ]}

};

function genericRoadmap(name, color) {
  return {
    color,
    steps: [
      { icon: "📚", label: "Phase 1 · Month 1–3",  title: `Learn ${name} Foundations`,  desc: `Study the core principles, terminology, and best practices of ${name}. Find 2–3 top resources and commit fully.` },
      { icon: "🛠️", label: "Phase 2 · Month 3–6",  title: "Build First Real Projects",  desc: `Apply your learning with real hands-on projects. Even small wins build momentum and create strong portfolio material.` },
      { icon: "🤝", label: "Phase 3 · Month 6–12", title: "Find a Mentor or Community", desc: `Join active communities and find mentors in ${name}. Connect with others already doing it. Your network accelerates growth 10x.` },
      { icon: "💼", label: "Phase 4 · Year 1",     title: "Land First Opportunity",     desc: `Get your first client, job, or collaboration in ${name}. Document everything you do and share your progress publicly.` },
      { icon: "📈", label: "Phase 5 · Year 1–2",   title: "Specialize & Niche Down",    desc: `Go deeper into one specific area of ${name}. Specialists earn significantly more and are remembered better than generalists.` },
      { icon: "🚀", label: "Phase 6 · Year 2–3",   title: "Build Your Reputation",      desc: `Speak, write, post, and create content about ${name}. Become a recognizable name in your corner of the industry.` },
      { icon: "👑", label: "Phase 7 · Year 3+",    title: "Mastery & Leadership",       desc: `Now you are teaching others, leading teams, and actively shaping the direction of ${name} within your sphere of influence.` }
    ]
  };
}