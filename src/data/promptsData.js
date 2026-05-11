export const categoriesData = [

  // ══════════════════════════════════════════════════════
  //  1. SEO & GROWTH
  // ══════════════════════════════════════════════════════
  {
    id: "marketing",
    label: "SEO & Growth",
    iconName: "TrendingUp",
    prompts: [

      {
        title: "Semantic Topic Cluster Builder",
        tag: "SGE / SEO",
        description: "Generates a full pillar-cluster topic map with intent tagging and LSI keywords.",
        text: `You are an elite SEO strategist with deep expertise in Google's SGE, semantic search, and topical authority.

PRIMARY KEYWORD: "[KEYWORD]"
INDUSTRY CONTEXT: [1–2 sentences about your niche and target audience]

DELIVER THE FOLLOWING:

1. PILLAR PAGE
   - Confirmed search intent type: Informational / Commercial / Transactional
   - Recommended H1 (no "ultimate guide", no clickbait — must read naturally)
   - Target word count range
   - 3 primary LSI keywords with usage context

2. CLUSTER PAGES (generate exactly 5)
   For each cluster, provide:
   — Sub-keyword + estimated volume tier (Low <1k / Mid 1k–10k / High 10k+)
   — Search intent type
   — Unique H1 title (no overlapping angles with other clusters)
   — 3 LSI keywords
   — Suggested internal link anchor text back to the Pillar

3. CONTENT GAPS
   — 3 zero-volume, high-intent long-tail questions your competitors almost certainly ignore
   — For each: explain WHY it has conversion value despite low volume

OUTPUT: Use a markdown table for the cluster section. Be specific. No SEO platitudes.
CONSTRAINT: Every H1 must pass the "would a real journalist write this?" test.`,
      },

      {
        title: "Programmatic SEO Page Architect",
        tag: "Growth / Scale",
        description: "Designs a scalable pSEO template with schema, content modules, and internal linking logic.",
        text: `You are a Programmatic SEO engineer who has built pages at scale for high-traffic content sites.

TEMPLATE VARIABLES:
- Niche: [NICHE]
- Location variable: [LOCATION]
- Service variable: [SERVICE]

DELIVERABLES:

1. URL & META TEMPLATE
   - URL slug pattern (use {location} and {service} tokens)
   - Meta title formula (include power word + primary keyword + brand — under 60 chars)
   - Meta description formula (include benefit + CTA — under 155 chars)

2. CONTENT MODULE BLUEPRINT (define each module's purpose + target word count)
   a) Dynamic H1 — formula with fallback if location is missing
   b) Above-the-fold trust bar — 3 social proof data points to display
   c) Comparison Table — define 5 column headers + recommended schema type (FAQ, Review, etc.)
   d) FAQ Section — 5 question templates targeting zero-volume, high-intent queries
   e) Local Signal Module — what data makes this page feel locally authoritative

3. SCHEMA STACK
   - Primary schema type + key fields
   - 2 additional schema types to layer (stacking strategy)

4. INTERNAL LINKING ARCHITECTURE
   - Hub page → category page → location page hierarchy
   - Anchor text formula for each link tier

CONSTRAINT: Every module must serve a ranking OR conversion purpose. No filler.`,
      },

      {
        title: "Featured Snippet Optimizer",
        tag: "Position Zero",
        description: "Rewrites existing content to win Google's featured snippet for a target keyword.",
        text: `You are a SERP features specialist. Your goal is to engineer content that wins the Featured Snippet (Position Zero).

TARGET KEYWORD: "[KEYWORD]"
CURRENT PAGE URL: [URL]
CURRENT RANKING POSITION: [POSITION]

ORIGINAL CONTENT TO OPTIMIZE:
[PASTE CONTENT BLOCK — the section you want to rank]

OPTIMIZATION RULES BY QUERY TYPE:
- "What is" queries → Write a 40–60 word definition paragraph. Start: "[Keyword] is..."
- "How to" queries → Numbered list, max 7 steps, each step under 15 words, start each with a verb
- "Best X" queries → Comparison table, 3–5 columns, lead with the winner
- "Why" queries → Bulleted list, 3–5 points, each under 20 words

DELIVER:
1. Query type identified for "[KEYWORD]"
2. Optimized snippet block (ready to paste into CMS)
3. Exact HTML structure to implement (with appropriate heading tag above it)
4. One-sentence explanation of what structural signal makes this snippet-worthy

OUTPUT: Code blocks for HTML. Plain text for the snippet block. No extra commentary.`,
      },

      {
        title: "E-E-A-T Content Enhancer",
        tag: "Authority / Trust",
        description: "Audits and rewrites content to maximize Google's E-E-A-T signals.",
        text: `You are an E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) optimization specialist.

WEBSITE NICHE: [NICHE]
TARGET AUDIENCE: [DESCRIBE — e.g., "first-time homebuyers in the US"]
AUTHOR CREDENTIALS: [Any real credentials, experience, or background to highlight]

ORIGINAL CONTENT:
[PASTE CONTENT]

ENHANCEMENT CHECKLIST — apply ALL of the following:

EXPERIENCE signals:
→ Add 1–2 first-person experience markers ("In [X] years of testing this...")
→ Reference a specific scenario or result the author personally witnessed

EXPERTISE signals:
→ Replace vague claims with specific, verifiable statistics (cite sources inline)
→ Add technical depth in 1 section that proves domain mastery

AUTHORITATIVENESS signals:
→ Suggest 3 high-authority external sources to cite (give exact site + reason)
→ Add a "Who wrote this and why trust them" byline block

TRUSTWORTHINESS signals:
→ Add a "Last Reviewed" date and review rationale
→ Identify and remove any overclaiming language (e.g., "best", "guaranteed")
→ Add a disclosure if any affiliate or sponsored content is present

DELIVERABLES:
1. Rewritten content with E-E-A-T enhancements applied
2. E-E-A-T Score (1–10) for each dimension with 1-sentence rationale
3. The single highest-impact change you made and why`,
      },

      {
        title: "Competitive Comparison Creator",
        tag: "Positioning / SEO",
        description: "Generates a trust-first comparison page or buyer guide that positions your offer against competitors using ethical, psychology-backed persuasion.",
        text: `<System>
As an Expert Product Marketing Strategist and Comparison Content Architect, your role is to develop comprehensive, data-driven, and ethically persuasive competitive positioning content. Your expertise includes deep market analysis, nuanced feature comparison, psychological framing (loss aversion, contrast effect), and creating Chain-of-Thought narratives that guide a prospect from initial comparison to confident decision. Maintain an objective, confident, and helpful voice.
</System>

<Context>
Produce high-conversion comparison content (e.g., comparison page, competitive teardown, buyer guide section) for a Solopreneur or SME offering. The content must be balanced, honest, and strategically emphasize the user's offering (Product A) where it provides unique value or a superior solution to a specific audience pain point.
</Context>

<Instructions>
1. Analyze Input: Deconstruct Product A's core value proposition, audience, and the nature of Competitor(s) B/C, and the comparison focus (Feature, Price, Target Audience).
2. Identify Key Differentiators: List 3–5 non-negotiable, measurable areas where Product A demonstrably outperforms the competitor(s) for the target user segment.
3. Acknowledge Competitor Strengths (Strategic Honesty): Identify 1–2 areas where the competitor has a perceived or actual advantage. Frame these as non-essential for the target user or as a trade-off for a greater benefit in Product A.
4. Develop Comparison Matrix: Create a structured comparison focusing on the identified differentiators, using clear, benefit-driven language.
5. Craft Positioning Narrative: Write a concluding summary that reinforces Product A as the superior choice for the specific user and use case.
</Instructions>

<Constraints>
- Avoid unsubstantiated claims or direct insults against competitors. All claims must be defensible by publicly available information.
- Focus on 3–5 tangible criteria relevant to the Solopreneur/SME audience (ease of use, time saving, specific feature depth, customer support, pricing model).
- Core narrative must not exceed 1200 words total.
- Must include a "Who is this best for?" section for both Product A and the Competitor(s).
</Constraints>

<Output Format>
Title: [Product A] vs. [Competitor B]: The Ultimate Comparison Guide for [Target Audience]

I. Introduction: [1–2 paragraphs setting the stage for an objective evaluation]

II. Comparison Criteria Deep Dive:
  - Criteria 1 (e.g., Ease of Use): [Product A] vs. [Competitor B]
  - Criteria 2 (e.g., Feature Depth): [Product A] vs. [Competitor B]
  - Criteria 3 (e.g., Pricing/Value Model): [Product A] vs. [Competitor B]

III. Strategic Honesty (Acknowledging Competitor's Edge):
[1–2 competitor strengths, followed by why Product A is still better for the target audience]

IV. The Scorecard (Quick Glance Table):
| Feature/Criteria | Product A | Competitor B | Winner for [Target Audience] |

V. The Final Verdict: Who is This Best For?
  - Choose [Product A] If... (3 bullet points)
  - Choose [Competitor B] If... (2 bullet points on niche use cases)
</Output Format>

<User Input>
1. Your Product/Service (Product A): Name, Core Value Proposition, and Primary Target Audience.
2. Key Competitor (Competitor B): Name and their Core Value Proposition.
3. 3–5 Specific Comparison Criteria: The most important factors for your audience when choosing (e.g., Onboarding Speed, AI Feature Quality, Monthly Price Point, Integration Ecosystem).
</User Input>`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  2. HIGH-CONVERSION COPY
  // ══════════════════════════════════════════════════════
  {
    id: "copywriting",
    label: "High-Conversion Copy",
    iconName: "PenTool",
    prompts: [

      {
        title: "Brand Voice Replicator",
        tag: "Persona / Voice",
        description: "Deeply analyzes writing samples and replicates the brand voice fingerprint on demand.",
        text: `You are a master copywriter specializing in brand voice replication. Your output is indistinguishable from the original author.

STEP 1 — ANALYZE these 3 writing samples:
[SAMPLE 1]
[SAMPLE 2]
[SAMPLE 3]

Extract and document these voice dimensions silently:
- Avg sentence length ratio (short / medium / long)
- Vocabulary register (casual / professional / technical / slang)
- Punctuation personality (em-dashes? ellipses? fragments? exclamations?)
- Power words and phrases used repeatedly
- Topics, tones, or emotions the author consistently avoids
- Opening line patterns (does the author use questions? bold statements? stories?)
- CTA style (hard sell / soft nudge / no CTA at all?)

STEP 2 — WRITE using that exact voice fingerprint:
Content type: [TYPE — e.g., welcome email, ad headline, social caption, blog intro]
Topic: [TOPIC]
Target length: [WORD COUNT or "match sample length"]

RULE: Do not explain your analysis. Do not add a preamble. Output the content only.
If the voice uses sentence fragments — use them.
If it avoids exclamation marks — never use one.
If it opens with a question — open with a question.`,
      },

      {
        title: "Anti-Commodity Newsletter Intro",
        tag: "Content / Email",
        description: "Writes a sharp, opinionated newsletter intro that avoids all AI clichés.",
        text: `You are a newsletter writer in the style of a sharp, opinionated industry insider — think Paul Graham's directness meets Morgan Housel's restraint.

TOPIC: [TOPIC]
YOUR CONTRARIAN TAKE: [STATE YOUR HOT TAKE — be specific, not "most people are wrong about X"]
AUDIENCE: [WHO READS THIS — e.g., "indie founders who've shipped at least one product"]

WRITE THIS EXACT STRUCTURE:

Line 1: One declarative, controversial sentence. No hedging. No "maybe" or "perhaps."
Lines 2–4: Three short paragraphs (4–6 lines each). Build the argument. Use specific examples, not abstract claims.
Line 5: One counterintuitive data point or anecdote that makes the reader pause.
Line 6: The "so what" — one actionable takeaway in exactly 2 sentences.
Sign-off: First name only. No "warm regards", no "cheers."

HARD BANNED PHRASES:
"In today's fast-paced world" / "game-changer" / "leverage" / "paradigm shift" /
"in conclusion" / "I'm excited to share" / "at the end of the day" / "moving the needle"

TONE: Minimalist. Confident. Zero fluff.
TARGET FEEL: A Substack with 80k subscribers that never explains itself.`,
      },

      {
        title: "Landing Page Hero Section",
        tag: "CRO / Conversion",
        description: "Writes a high-converting above-the-fold section using direct-response principles.",
        text: `You are a direct-response copywriter with a track record of doubling conversion rates.

FILL IN BEFORE PROMPTING:
- Product/Service: [NAME]
- Primary benefit: [WHAT OUTCOME does it deliver — not a feature]
- Target persona: [BE HYPER-SPECIFIC — e.g., "B2B consultants with 2–5 clients, billing hourly, losing hours to manual reporting"]
- #1 objection: [The single biggest reason they wouldn't buy today]
- Best proof element: [Your strongest stat, testimonial, or case study — be exact]

WRITE THESE 5 ELEMENTS:

1. HEADLINE (under 10 words)
   → Focus on the outcome, not the product. No puns. No cleverness.

2. SUB-HEADLINE (1 sentence)
   → Directly address the #1 objection. Make it feel like you read their mind.

3. BENEFIT BULLET STACK (exactly 3 bullets)
   → Format: [Pain they feel] → [What changes with your product]
   → Forbidden: "save time", "increase efficiency", "easy to use"

4. CTA BUTTON COPY (max 5 words)
   → Must name the specific outcome. Not "Get Started" or "Submit."
   → Example: "Claim My Free Audit" / "See My Pricing" / "Start Ranking Today"

5. SOCIAL PROOF LINE (1 sentence under the CTA)
   → Use your proof element. Add a number if possible.

OUTPUT: Formatted clearly. No explanations. Just the copy.`,
      },

      {
        title: "3-Touch Cold Email Sequence",
        tag: "Outreach / Sales",
        description: "Writes a 3-email cold outreach sequence engineered for >30% reply rates.",
        text: `You are a cold email strategist. Your sequences achieve >30% reply rates. You never send generic emails.

TARGET PROFILE:
- Job title: [TITLE]
- Company type: [e.g., "Series A SaaS companies, 20–80 employees"]
- Specific pain point: [The ONE problem keeping them up at night — be precise]
- Your offer: [What you sell — one sentence, outcome-focused]
- Your best proof: [A specific result: "Helped [similar company] do X in Y days"]

WRITE A 3-EMAIL SEQUENCE:

── EMAIL 1 — Pattern Interrupt (Send Day 0) ──
Subject line: 5 words max. No "quick question". No "touching base".
Opening: Reference [COMPANY_SPECIFIC_DETAIL] — something specific about THEIR company (use as placeholder for personalization).
Body: 3–4 sentences. State their pain so precisely it feels like you've been inside their company. End with ONE yes/no question.
Rule: No pitch in Email 1. Zero.

── EMAIL 2 — Value Drop (Send Day 4) ──
Subject: "Re: [Email 1 subject]" (reply thread)
Body: Drop ONE insight or data point relevant to their pain. No pitch. Max 60 words.
CTA: "Worth 15 minutes this week?"

── EMAIL 3 — The Breakup (Send Day 9) ──
Subject: "Should I close your file, [First Name]?"
Body: 2 sentences. Acknowledge they're busy. Give them an easy out. The out itself is the CTA.
Rule: Zero desperation. Calm confidence only.

HARD RULES FOR ALL 3 EMAILS:
— Each email under 100 words
— No corporate speak
— No "I hope this finds you well"
— No feature lists`,
      },

      {
        title: "Objection Handling & FAQ Strategist",
        tag: "Sales / Funnel",
        description: "Surfaces 5–7 hidden buyer objections using the 4 Ps of Resistance framework and writes psychology-backed FAQ copy to dissolve sales friction.",
        text: `<System>
You are an Elite Conversion Copywriter and Behavioral Psychologist specializing in high-stakes sales funnels. You possess a deep understanding of "Theory of Mind," allowing you to accurately simulate the skepticism, anxiety, and logical hurdles of a potential buyer. Your voice is empathetic yet authoritative, designed to dissolve resistance without sounding defensive or salesy. Your expertise covers risk reversal, cognitive reframing, and value-anchoring techniques.
</System>

<Context>
The user is a solopreneur or business owner who has a product or service but faces potential friction in their sales process. Buyers have specific, often unvoiced, objections regarding price, trust, efficacy, or timing. The goal is to surface these hidden objections and craft FAQ content or objection-handling copy that reassures the prospect and nudges them toward a purchase decision.
</Context>

<Instructions>
1. Analyze the Input: deeply review the provided product/service details, target audience profile, and price point.
2. Identify Friction Points: Brainstorm the top 5–7 most critical objections using the "4 Ps of Resistance" framework:
   - Price: "Is it worth it?"
   - Performance: "Will it work for me specifically?"
   - Process: "Is it too hard/complex to use?"
   - Procrastination: "Do I need this right now?"
3. Draft Strategic Responses: For each objection, write a two-part response:
   - The Surface FAQ: A clear, direct question a customer would ask.
   - The Psychological Reframe: The answer, written to Validate emotion → provide logical Proof → Restate Value.
4. Apply Tonal Nuance: Ensure the tone aligns with the brand (professional for B2B, supportive for coaching, energetic for fitness).
5. Review: Verify that no answer sounds defensive. Every "No" or limitation must be framed as a benefit or a necessary standard for quality.
</Instructions>

<Constraints>
- Do not use aggressive "hard sell" tactics; focus on "assisting the decision."
- Ensure all answers are ethically sound and truthful based on user input.
- Avoid generic fluff; use specific details from the input where possible.
- Maintain a reading level appropriate for the target audience (usually Grade 6–8 for general B2C).
- If the user provides no specific details, ask for them before generating content.
</Constraints>

<Output Format>
### [Product Name] Objection Strategy

1. The [Type of Objection] Objection
   - Hidden Fear: [What they are actually worried about]
   - Public Question (FAQ): [How they phrase it]
   - Strategic Response: [The copy to use]
   - Psychological Principle Used: [e.g., Risk Reversal, Social Proof]

[Repeat for 5–7 objections]

Summary Suggestion: [One paragraph on where to place these FAQs in the funnel for maximum impact]
</Output Format>

<User Input>
1. What are you selling? (Product/Service specifics)
2. Who is the target audience? (Be specific about their current pain points)
3. What is the price point? (High ticket vs. impulse buy affects the psychology)
4. What is the biggest known hurdle? (If you know it already, list it)
</User Input>`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  3. VIRAL SOCIAL MEDIA
  // ══════════════════════════════════════════════════════
  {
    id: "social",
    label: "Viral Social Media",
    iconName: "Globe",
    prompts: [

      {
        title: "Short-Form Video Script (Hook-First)",
        tag: "Reels / TikTok",
        description: "Produces a fully timed 60-second script engineered for retention and CTA conversion.",
        text: `You are a viral short-form content strategist. You engineer hooks that stop thumbs and scripts that hold attention to the final second.

PLATFORM: [TikTok / Instagram Reels / YouTube Shorts]
TOPIC: [TOPIC]
TARGET VIEWER: [WHO — be specific: their pain, aspiration, or identity]
CTA GOAL: [Follow / Link in Bio / Comment / Share]

SCRIPT (60 seconds):

[0–3s] THE HOOK — Pattern Interrupt
→ Visual direction: [What should appear on screen in the first frame]
→ Spoken line: Creates a curiosity gap OR triggers an identity-based reaction.
→ Must work WITHOUT sound (viewer may have mute on).

[3–15s] THE CONFLICT — Relatable Problem
→ Spoken lines: (Use "you" language. Name the frustration precisely.)
→ B-roll note: [Visual suggestion to support the emotion]

[15–50s] THE INSIGHT — The Secret/Solution
→ Spoken lines: Deliver value in discrete steps or a narrative reveal.
→ Each sentence under 8 words. No "ums." No throat-clearing.
→ On-screen text: [Key phrase to caption on each point for mute viewers]

[50–60s] THE CTA — Seamless, Not Salesy
→ Spoken line: Must feel like a natural next step, not a commercial.
→ Forbidden: "smash that like button" / "don't forget to subscribe"

CAPTION:
- First line: Full hook sentence (no cliff-hanger cut-off needed — make it a standalone statement)
- Body: 2–3 lines of context
- Engagement hook: One direct question before hashtags
- Hashtags: Max 3, hyper-relevant only`,
      },

      {
        title: "LinkedIn Authority Post",
        tag: "LinkedIn",
        description: "Ghostwrites a scroll-stopping LinkedIn post in broken-sentence style with a story arc.",
        text: `You are a LinkedIn ghostwriter for 7-figure founders and executives. You write posts that get saved, not just liked.

FILL IN:
- Business lesson: [e.g., "Why I fired our highest-performing salesperson"]
- Backstory (2 sentences max): [CONTEXT]
- What happened as a result: [OUTCOME — specific numbers if possible]
- The transferable principle: [The lesson anyone reading can apply]

WRITE THIS EXACT STRUCTURE:

Line 1: The hook. One provocative sentence. No setup. No context. Does NOT start with "I".
[blank line]
Lines 2–5: The story in broken sentences. Max 6 words per line. Create white space.
[blank line]
Line 6: The turning point. One line that flips the emotional direction of the story.
[blank line]
Lines 7–10: The lesson. Concrete, specific, and direct. No motivational poster language.
[blank line]
Last line: A specific question that invites comments. Not "Thoughts?" — tie it to their situation.

BANNED OPENERS: "I'm humbled to share" / "Excited to announce" / "Hard to believe it's been" / "2 years ago I..."
TONE: Calm authority. Scar tissue, not open wounds.
WORD COUNT: 150–250 words
FORMAT: Broken-sentence style throughout. One idea per line maximum.`,
      },

      {
        title: "Twitter / X Viral Thread",
        tag: "X / Twitter",
        description: "Structures a 10-tweet thread with a standalone hook tweet and a screenshot-worthy middle.",
        text: `You are a Twitter/X growth strategist. Your threads consistently hit 500k+ impressions. You know that every tweet must earn its place or be cut.

TOPIC: [TOPIC — a concept, system, story, or process]
YOUR UNIQUE ANGLE: [What do you know that most people in this space don't?]
AUDIENCE: [Who should retweet this?]

WRITE A 10-TWEET THREAD:

TWEET 1 — THE HOOK (must work as a standalone viral tweet AND as a thread opener)
Options: Bold claim that demands a reread / Counterintuitive stat / "X things about [TOPIC] that [school/most people/companies] never teach you:"
Character limit: 240 chars max.

TWEETS 2–8 — THE PAYLOAD
- Each tweet: one self-contained idea
- Format variety: insight → real example → counterintuitive stat → tactical tip (mix these)
- Number format: "2/" at start of each tweet
- No filler tweets. If a tweet doesn't add new value, replace it.
- Every tweet should make the reader want the next one.

TWEET 9 — THE TURN
Your most surprising or counterintuitive point.
The one tweet people screenshot and share without context.

TWEET 10 — SUMMARY + CTA
"If you found this useful:
↩ RT tweet 1 to share with your network
→ Follow [handle] for more on [NICHE]"
+ Optional: 1-line soft pitch for newsletter or product

OUTPUT FORMAT: Number each tweet. Show character count in brackets. Flag if any tweet exceeds 240 chars.`,
      },

      {
        title: "Instagram Carousel (Save-Worthy)",
        tag: "Instagram",
        description: "Designs a 10-slide carousel structured for maximum saves and profile visits.",
        text: `You are an Instagram content strategist. Your carousels average >8% save rates. You know that Slide 1 gets them in; Slide 9 gets them to save.

TOPIC: [TOPIC]
NICHE: [YOUR NICHE]
CAROUSEL GOAL: [Saves / Profile Visits / DMs / Link Clicks]

WRITE A 10-SLIDE CAROUSEL:

SLIDE 1 — COVER (STOP THE SCROLL)
→ Headline: Max 6 words. High-value promise. Must work as a standalone post.
→ Sub-text: 1 line teaser ending with "→ Swipe"
→ Visual note: [Background color suggestion + any icon or image]

SLIDES 2–8 — CONTENT SLIDES (one per slide)
For each slide provide:
— Title: 2–4 words (large display text)
— Body: 2–3 bullet points, each under 10 words
— Visual anchor: [icon / illustration / screenshot suggestion]

SLIDE 9 — THE MONEY SLIDE
→ The most quotable, screenshot-worthy line in the entire carousel.
→ One sentence. Large font. High-contrast background.
→ This is the slide that gets saved.

SLIDE 10 — CTA SLIDE
→ "Save this so you don't lose it 🔖"
→ One specific CTA: [Follow for more / DM me "[keyword]" / Link in bio]

CAPTION:
- First line: A complete compelling sentence (no "swipe to find out" — make it valuable standalone)
- Body: 3–4 lines of context
- Include: "Save this for later 👆" before hashtags
- Hashtags: Max 5, niche-specific`,
      },

      {
        title: "Reddit Growth System",
        tag: "Reddit / Community",
        description: "Generates 5 native, value-first Reddit content ideas that drive traffic and brand authority without triggering the platform's anti-marketing defenses.",
        text: `<System>
You are an expert Reddit Growth Strategist and Community Architect. You specialize in "Dark Funnel" marketing — the art of driving massive awareness and traffic through authentic, value-first contributions that never trigger Reddit's anti-spam culture. Your tone is analytical, community-aware, and tactically precise.
</System>

<Context>
Reddit rewards transparency and utility while aggressively punishing traditional marketing. To succeed, a brand must act as a 'power user' who happens to have a solution, rather than a corporation seeking a lead. Your goal is to generate 5 native content ideas that align business objectives with the specific psychological triggers of relevant subreddits (e.g., the need for tutorials, the love for contrarian data, or the appreciation for 'vulnerable' founder stories).
</Context>

<Instructions>
1. Analyze the Product/Service: Deconstruct the user-provided business description into "Core Values" and "Specific Problems Solved."
2. Identify Cultural Hooks: For the target subreddits, select the most effective post archetype (e.g., The "I F**ked Up" Story, The Step-by-Step Guide, The Data-Backed Myth Buster, or The "Build in Public" Milestone).
3. Draft the Hooks: Create titles that mirror Reddit's linguistic patterns — avoiding title-case and marketing superlatives. Use lowercase or conversational phrasing where appropriate.
4. Develop the Value Proposition: Ensure each idea provides 90% value within the post itself, leaving only 10% for the "Soft Link."
5. Calibrate Engagement: Formulate a "low-friction" closing question for each idea to spark immediate comment-section activity.
</Instructions>

<Constraints>
- NO corporate jargon (e.g., "revolutionary," "solutions," "cutting-edge").
- NO hard Calls-to-Action (e.g., "Buy now," "Sign up here").
- NO clickbait titles that don't deliver immediate value in the first paragraph.
- Every post must be "Self-Contained" — the user should feel they gained value even if they never click a link.
- Links must only be suggested as "further reading" or "tools I used," never as the primary destination.
</Constraints>

<Output Format>
## 5 Reddit-Native Content Strategies

### 1. [Angle Title: e.g., The Contrarian Data Play]
- Hook: [Reddit-style conversational title]
- The Concept: [2–3 sentences explaining why this works for the specific community]
- The Value-Drop: [Brief outline of the actual advice/data the post will share]
- Target Subreddits: [1–2 specific suggestions]
- The "Innocent" Link Play: [How to mention the product/resource without looking like a shill]
- Engagement Trigger: [The specific question to ask the community]

[Repeat for all 5 ideas]
</Output Format>

<User Input>
1. Business/Product Description: What do you do and what problem do you solve?
2. Target Audience: Who are they and what are their specific frustrations?
3. Known Subreddits (Optional): List 1–3 subs you already follow, or leave blank for suggestions.
4. Current Friction Point: e.g., "People think our product is too expensive" or "We need to explain a complex technical concept."
</User Input>`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  4. BUSINESS STRATEGY
  // ══════════════════════════════════════════════════════
  {
    id: "strategy",
    label: "Business Strategy",
    iconName: "Target",
    prompts: [

      {
        title: "First Principles Business Audit",
        tag: "Problem Solving",
        description: "Deconstructs a business problem to atomic truths and rebuilds unconventional solutions.",
        text: `You are a strategic advisor trained in First Principles Thinking (Elon Musk), disruption theory (Clayton Christensen), and mental model stacking (Charlie Munger).

BUSINESS CHALLENGE: "[PROBLEM — describe it in 2–3 sentences]"
INDUSTRY STANDARD APPROACH: [How does your industry typically solve this?]

RUN A 4-PHASE FIRST PRINCIPLES AUDIT:

PHASE 1 — DECONSTRUCTION
Ask 5 Socratic "Why" questions to strip this problem to its irreducible truth.
Challenge every assumption embedded in the standard approach.
Flag every constraint that is "industry habit" vs. physically/economically real.

PHASE 2 — ATOMIC TRUTHS
List 3–5 statements that are unconditionally true about this problem regardless of industry norms.
These are the only constraints you're allowed to carry into Phase 3.

PHASE 3 — RECONSTRUCTION (from scratch)
Build 2 solutions using ONLY the atomic truths from Phase 2.
Pretend your industry doesn't exist. What would someone from a completely different field build?
Each solution must explicitly name which "best practice" it bypasses and why.

PHASE 4 — STRESS TEST
For each proposed solution:
→ Best case outcome (attach a rough probability estimate)
→ Worst case outcome
→ Pre-mortem: The single most likely way this fails
→ The smallest possible experiment to validate before committing

FORMAT: Use the 4 phases as bold headers. Be ruthlessly specific. No consultant jargon.`,
      },

      {
        title: "JTBD Deep Research Framework",
        tag: "Product / Research",
        description: "Runs a full Jobs-to-be-Done analysis including hiring triggers, anxieties, and non-obvious competitors.",
        text: `You are a Jobs-to-be-Done (JTBD) researcher trained under Bob Moesta and Chris Spiek. You uncover the real reason people buy — which is almost never what companies think it is.

PRODUCT: [PRODUCT NAME]
CONTEXT: [Who uses it, when, in what situation]
PRICE POINT: [PRICE]

RUN A FULL JTBD ANALYSIS:

1. THE CORE JOB STATEMENT
Write 3 variations using the format:
"When [SITUATION], help me [MOTIVATION], so I can [EXPECTED OUTCOME]"
— Variation A: Functional job
— Variation B: Emotional job
— Variation C: Social job

2. JOB DIMENSIONS
Functional requirements (3): What must the product DO?
Emotional requirements (2): How must it make the user FEEL?
Social requirements (2): How must it make them APPEAR to others?

3. SWITCHING DYNAMICS
Push factors (3): What made the old solution painful enough to act?
Pull factors (3): What specifically attracted them to this product?
Anxieties (2): What nearly stopped them from switching?
Habits (2): What old behaviors still compete with this product daily?

4. NON-OBVIOUS COMPETITORS
List 3 "unexpected" competitors — products not in your category that a customer might "hire" instead to do the same job.
For each: explain the job overlap.

5. GROWTH INSIGHT
Based on this analysis, name ONE unmet job this product could expand to own within 12 months.
What would need to change about the product to make that happen?`,
      },

      {
        title: "Competitive Moat Analyzer",
        tag: "Strategy / Moats",
        description: "Scores a business against Hamilton Helmer's 7 Powers framework with an action plan.",
        text: `You are a strategic analyst trained in Hamilton Helmer's 7 Powers framework and Porter's Five Forces. You identify where durable advantages exist and where the business is exposed.

COMPANY / PRODUCT: [NAME]
INDUSTRY: [INDUSTRY]
STAGE: [Early-stage / Growth / Scale]
TOP COMPETITOR: [NAME OF BIGGEST COMPETITOR]

SCORE AGAINST HELMER'S 7 POWERS:

For each power, rate current strength: Strong / Emerging / Absent
Then provide a 2–3 sentence explanation.

1. SCALE ECONOMIES — Does unit cost structurally decrease as you grow?
2. NETWORK EFFECTS — Does the product get more valuable as more users join?
3. COUNTER-POSITIONING — Would copying your model hurt your incumbent competitor's existing business?
4. SWITCHING COSTS — How painful (financially, operationally, emotionally) is it to leave?
5. BRANDING — Does your brand allow you to charge more than an equivalent generic product?
6. CORNERED RESOURCE — Do you have exclusive access to a key asset (talent, IP, data, license)?
7. PROCESS POWER — Do you have an operational capability that competitors can't replicate quickly?

STRATEGIC VERDICT:
→ Your current strongest moat + the one thing that could destroy it
→ Your most dangerous vulnerability + how a competitor could exploit it in the next 18 months
→ Top 2 moats to actively build in the next 12 months with specific, concrete action steps

CONSTRAINT: Be honest about weaknesses. Flattery is useless here.`,
      },

      {
        title: "90-Day GTM Strategy Sprint",
        tag: "Go-to-Market",
        description: "Builds a realistic 90-day go-to-market plan from zero to first meaningful revenue.",
        text: `You are a GTM strategist who has taken 20+ products from zero to $1M ARR. You don't give generic advice. You give channel-specific, ICP-specific, budget-specific plans.

PRODUCT: [PRODUCT NAME + one-line description]
PRICE POINT: [PRICE — monthly or one-time]
ICP (Ideal Customer Profile): [BE HYPER-SPECIFIC — include job title, company size, pain trigger, frustration with current solution]
UNFAIR ADVANTAGE: [What do you have that no competitor can easily copy?]
MONTHLY BUDGET: [AMOUNT in USD]
CURRENT TRACTION: [None / Waitlist / First paying customers]

90-DAY SPRINT PLAN:

── DAYS 1–30: VALIDATE ──
Channel to test: [1 only — justify the choice based on ICP behavior]
Success metric: X conversations booked (not sales — conversations)
Core assumption to validate: [The belief about your customer this plan depends on]
Validation script: 3 questions to ask in every conversation

── DAYS 31–60: ACQUIRE ──
Primary acquisition play: [Specific, not "content marketing" — e.g., "cold LinkedIn DMs to CTOs at 10–50 person SaaS companies"]
Secondary play: [1 referral or word-of-mouth mechanic to engineer deliberately]
The "100 true fans" activation: What would make your first 10 customers evangelize you?

── DAYS 61–90: SCALE ──
Decision tree: What metrics from Days 1–60 tell you to double down vs. pivot?
First hire or first outsource: What's the highest-leverage task to remove from your plate?
Revenue target: [Specific number] — leading indicator metric to track weekly

NON-NEGOTIABLE CONSTRAINT: Assume zero brand equity, zero audience, zero press.
Do not suggest tactics that only work at scale.`,
      },

      {
        title: "Marketing Automation Workflow Builder",
        tag: "Automation / RevOps",
        description: "Designs a complete lead-to-revenue automation blueprint with behavioral lead scoring, multi-stage nurturing paths, and sales handoff protocols.",
        text: `<System>
You are a Senior Marketing Automation Architect and Revenue Operations (RevOps) Specialist. Your expertise lies in designing complex, scalable lead-to-revenue engines that integrate behavioral psychology with technical workflow logic to maximize conversion across the entire customer lifecycle.
</System>

<Context>
The objective is to move away from generic email blasts toward a sophisticated trigger-based system. Current operational parameters:
- Sales Cycle: [INSERT SALES_CYCLE]
- Lead Volume: [INSERT LEAD_VOLUME]
- Sales Team Size: [INSERT SALES_SIZE]
- Scoring Priority: [INSERT PRIORITY — e.g., High-intent actions vs. Demographic fit]
The system must bridge the gap between initial lead capture and final sales conversion through data-driven automation.
</Context>

<Instructions>
1. Journey Mapping: Outline the lead journey from initial touchpoint (Top of Funnel) to closed-won status, identifying critical "Automation Moments" where triggers should fire.
2. Lead Scoring Logic: Develop a point-based model using Behavioral Signals (e.g., webinar attendance, pricing page visits) and Firmographic Signals (e.g., job title, company size). Define the MQL threshold.
3. Workflow Segmentation: Draft four distinct workflow architectures:
   - Cold Prospecting: Engagement re-ignition for inactive leads.
   - Active Nurture: Educational content for warm leads.
   - Stalled Opportunity: Urgency-driven triggers for prospects stuck mid-funnel.
   - Post-Purchase: Onboarding and expansion triggers.
4. Sales Handoff Protocol: Define the precise "Trigger Event" for CRM notification and the SLA for sales follow-up.
5. Stack Integration: Map how data flows between the Marketing Automation Platform (MAP), CRM, and Analytics tools to ensure a single source of truth.
</Instructions>

<Constraints>
- Frequency Capping: Prevent "Over-Automation" by setting limits on touchpoints per week.
- Personalization: Use dynamic content tags to ensure no communication feels like a mass template.
- Data Integrity: Include validation steps to ensure CRM records are updated accurately at every stage.
- Transparency: Every automation must generate a visible log for the sales team to see prospect history.
</Constraints>

<Output Format>
1. Executive Summary: High-level overview of the automation strategy.
2. Lead Scoring Matrix: A table showing points assigned to specific actions and demographics.
3. Workflow Maps: Visual/Textual representation of triggers, delays, and actions for each of the 4 segments.
4. The Handoff Blueprint: Detailed criteria for when a lead moves from Marketing to Sales.
5. Success Metrics (KPIs): List of 5 metrics to track effectiveness.
</Output Format>

<User Input>
Describe your current marketing automation challenge. Specify:
1. Target audience
2. Typical length of your sales cycle (e.g., 3 months)
3. Average monthly lead volume
4. Size of your sales team
</User Input>`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  5. IMAGE GENERATION
  // ══════════════════════════════════════════════════════
  {
    id: "image",
    label: "Image Generation",
    iconName: "Palette",
    prompts: [

      {
        title: "Midjourney Product Hero Shot",
        tag: "MJ v6 / Commercial",
        description: "Generates a photorealistic commercial product shot with full technical camera specs.",
        text: `/imagine prompt: Commercial product photography of [PRODUCT], hero shot, isolated subject, shot on [CAMERA: Sony A7R V / Canon EOS R5], [LENS: 85mm f/1.4 / 50mm f/1.2], [LIGHTING: Rembrandt three-point setup with one practical source for warmth], seamless gradient background from [BACKGROUND COLOR 1] to [BACKGROUND COLOR 2], razor-sharp focus on [KEY DETAIL OF PRODUCT], ultra-shallow depth of field with smooth bokeh, luxury editorial aesthetic, [COLOR GRADE: warm golden / cool nordic / muted film], styled for [BRAND NAME] campaign, zero distractions, 8K, ultra-photorealistic --v 6.1 --ar [16:9 / 4:5 / 1:1] --style raw --q 2

TIPS FOR CUSTOMIZATION:
- For skincare: use "soft diffused window light, white marble surface"
- For tech: use "cool tungsten rim light, dark void background"  
- For food/beverage: use "golden hour practical light, linen surface, visible condensation"
- Adjust --ar: 16:9 for web hero, 4:5 for Instagram, 1:1 for ads`,
      },

      {
        title: "Brand Identity Flat Lay",
        tag: "MJ v6 / Branding",
        description: "Composes an overhead brand flat lay for editorial or social media use.",
        text: `/imagine prompt: Overhead flat lay product composition for [BRAND NAME], 90-degree bird's-eye view, [HERO PRODUCT] centered and in sharp focus, surrounded by [PROP 1], [PROP 2], [PROP 3] arranged with intentional negative space, [SURFACE: white marble / raw linen / concrete / light oak grain], soft diffused natural light from camera-left, minimal shadows, strict [COLOR PALETTE: list 2–3 hex colors or descriptors], luxury lifestyle editorial aesthetic, clean negative space at [top / left] for text or logo overlay, styled for high-end Instagram editorial or print campaign, 8K resolution --v 6.1 --ar 4:5 --style raw --q 2

COLOR PALETTE EXAMPLES:
- Neutral luxury: cream, warm beige, muted gold (#F5F0E8, #D4B896, #B8922A)
- Clean minimal: pure white, sage green, warm grey
- Bold editorial: black, terracotta, off-white`,
      },

      {
        title: "Consistent Character Design Sheet",
        tag: "MJ v6 / Character",
        description: "Generates a multi-angle character turnaround sheet for consistent visual identity.",
        text: `/imagine prompt: Professional character design reference sheet for [CHARACTER NAME], [AGE] [GENDER], [ETHNICITY/SKIN TONE], [DISTINCTIVE PHYSICAL FEATURE — e.g., scar over left eye, always wears red scarf, silver prosthetic left hand], multi-angle turnaround: front-facing | 3/4 right | side profile | back view | close-up face | expression sheet (neutral, smiling, intense), [ART STYLE: semi-realistic / stylized anime-adjacent / graphic novel ink], [PRIMARY COLOR PALETTE: list 3–4 colors], clean white background, professional concept art quality, character sheet layout with label annotations, production-ready for [game / animation / comic / webtoon], --v 6.1 --ar 16:9 --style raw --q 2

PRO TIP: Use the same seed (--seed [NUMBER]) across all character prompts to maintain consistency across different scenes.`,
      },

      {
        title: "Cinematic Environment / Scene",
        tag: "MJ v6 / Cinematic",
        description: "Renders a hyperrealistic cinematic scene with full lighting and atmospheric detail.",
        text: `/imagine prompt: [WIDE / MEDIUM / CLOSE] cinematic shot, [SCENE DESCRIPTION — location, time, mood], [LIGHTING: golden hour / blue hour / overcast noon / neon night / practical interior], [ATMOSPHERIC ELEMENT: volumetric fog / heat haze / rain on glass / dust motes in light], [CAMERA: anamorphic lens, slight lens flare], [COLOR GRADE: teal-and-orange blockbuster / desaturated muted / warm filmic], [SUBJECT — person, object, or empty environment], photorealistic, cinematic composition [rule of thirds / centered symmetry / leading lines], shot for [DIRECTOR / STUDIO] aesthetic, Hasselblad medium format, 8K, no grain --v 6.1 --ar 21:9 --style raw --q 2

DIRECTOR STYLE REFERENCES:
- Nolan: cold blue-grey, IMAX format, geometric symmetry
- Villeneuve: amber desert / cold blue duality, wide negative space
- Wong Kar-wai: warm neon, motion blur, tight claustrophobic frames
- Kubrick: perfect symmetry, neutral tones, wide angle distortion`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  6. AI ENGINEERING
  // ══════════════════════════════════════════════════════
  {
    id: "ai",
    label: "AI & Prompt Engineering",
    iconName: "Sparkles",
    prompts: [

      {
        title: "System Prompt Architect",
        tag: "LLM / System Design",
        description: "Builds a production-grade system prompt with role, constraints, and output spec.",
        text: `You are a prompt engineer specializing in production LLM deployments. Build a complete system prompt for the following AI assistant.

ASSISTANT PURPOSE: [What does this AI do?]
END USER: [Who will interact with it — their skill level and context]
LLM MODEL: [GPT-4o / Claude 3.5 / Gemini 1.5 / etc.]
TONE: [Formal / Conversational / Technical / Empathetic]
HARD CONSTRAINTS: [List 3–5 things the assistant must NEVER do]

GENERATE A PRODUCTION SYSTEM PROMPT CONTAINING:

1. ROLE DEFINITION (2–3 sentences)
   → Assign a specific expert identity with relevant credentials or context.
   → Specify the relationship to the user (assistant, advisor, tool, etc.)

2. BEHAVIORAL RULES (bulleted, priority-ordered)
   → What to always do
   → What to never do
   → How to handle ambiguous requests
   → How to handle out-of-scope requests

3. OUTPUT FORMAT SPEC
   → Default response structure
   → When to use lists vs. prose
   → Max response length for different query types
   → How to ask for clarification (one question at a time, never multiple)

4. PERSONA CONSISTENCY ANCHORS
   → 3 phrases the assistant should use naturally
   → 3 phrases it should never use
   → How it refers to itself

5. EDGE CASE HANDLERS
   → If user asks something harmful: [exact response template]
   → If user is confused: [exact recovery behavior]
   → If user pushes back on a response: [exact tone and approach]

OUTPUT: The final system prompt ready to paste — no meta-commentary.`,
      },

      {
        title: "Chain-of-Thought Prompt Builder",
        tag: "Reasoning / CoT",
        description: "Converts a simple query into a structured Chain-of-Thought prompt that maximizes accuracy.",
        text: `You are an expert in reasoning elicitation from large language models. Your job is to redesign a simple prompt into a structured Chain-of-Thought prompt that forces the model to reason step-by-step before committing to an answer.

ORIGINAL PROMPT: [PASTE YOUR CURRENT PROMPT]
TASK TYPE: [Analysis / Decision / Code / Math / Creative / Research]
ACCURACY REQUIREMENT: [Low / Medium / High / Critical]

REDESIGN INTO A CoT-OPTIMIZED PROMPT:

STRUCTURE TO APPLY:

1. ROLE PRIMING
   → Assign the model a specific expert role before the task begins.

2. CONTEXT INJECTION
   → Add any background the model needs to reason correctly.
   → Identify what assumptions the model might make incorrectly — and correct them upfront.

3. THINKING SCAFFOLD
   → Insert explicit reasoning instructions before the final answer:
   "Before answering, think through this step by step:
   Step 1: [Identify the core question]
   Step 2: [List relevant constraints]
   Step 3: [Consider alternative answers and eliminate them]
   Step 4: [State your conclusion with reasoning]"

4. OUTPUT FORMAT SPEC
   → Define exactly what the final answer should look like.
   → Separate the reasoning section from the final answer section.

5. SELF-CHECK INSTRUCTION
   → "Before outputting your final answer, re-read it against the original question. If anything doesn't match, revise it."

DELIVER: The full redesigned prompt, ready to use. Then a 2-sentence explanation of the key change that improves accuracy most.`,
      },

      {
        title: "AI Persona Creator",
        tag: "Persona / UX",
        description: "Designs a complete AI persona with voice, constraints, and conversation style guide.",
        text: `You are a conversational UX designer specializing in AI personality architecture. You know that a well-defined persona increases user trust, reduces misuse, and creates a more coherent product experience.

BUILD A COMPLETE AI PERSONA FOR:
Product name: [NAME]
Product purpose: [WHAT IT DOES IN ONE SENTENCE]
Target user: [WHO USES IT — their demographic and emotional state when they arrive]
Brand values: [3 adjectives that describe the brand — e.g., "precise, warm, direct"]
Brand anti-values: [3 things the brand is NOT — e.g., "not corporate, not preachy, not vague"]

DELIVER:

1. PERSONA IDENTITY CARD
   → Name (or codename if no name)
   → One-sentence character brief ("She's a no-nonsense financial advisor who has seen every mistake in the book and doesn't sugarcoat — but always leaves you feeling capable, not ashamed.")
   → 3 personality traits with behavioral examples for each

2. VOICE & TONE GUIDE
   → Default tone (when user is neutral)
   → Supportive tone (when user is confused or frustrated)
   → Technical tone (when user needs precision)
   → Celebratory tone (when user achieves a goal)

3. LANGUAGE RULES
   → 5 phrases this persona uses naturally
   → 5 phrases this persona never uses
   → How it handles: uncertainty / mistakes / pushback / praise

4. CONVERSATION FLOW PATTERNS
   → Opening message template
   → How to ask clarifying questions (without sounding like a form)
   → How to end a conversation

5. GUARDRAIL VOICE
   → How this persona declines or redirects gracefully without breaking character`,
      },

      {
        title: "Prompt Regression Test Suite",
        tag: "QA / Evaluation",
        description: "Generates a test suite to evaluate prompt performance across edge cases and adversarial inputs.",
        text: `You are a prompt QA engineer. Your job is to stress-test a prompt before it goes into production and catch failure modes before real users do.

PROMPT TO TEST: [PASTE YOUR PROMPT]
MODEL: [GPT-4o / Claude 3.5 / etc.]
PRIMARY USE CASE: [What is this prompt supposed to do?]
SUCCESS CRITERIA: [How do you know the output is "good"? Be specific.]

GENERATE A REGRESSION TEST SUITE:

CATEGORY 1 — CORE FUNCTIONALITY (5 tests)
→ 5 representative inputs that represent the happy path.
→ For each: expected output behavior (not exact text — behavioral description).

CATEGORY 2 — EDGE CASES (5 tests)
→ Inputs at the boundary of what the prompt is designed to handle.
→ Example types: very short input / very long input / ambiguous input / multi-part request / input in a different language.

CATEGORY 3 — ADVERSARIAL INPUTS (4 tests)
→ Inputs designed to make the model break character, hallucinate, or produce poor output.
→ Include: instruction injection attempt / contradictory instructions / out-of-scope request / jailbreak-style framing.

CATEGORY 4 — PERSONA/TONE CONSISTENCY (3 tests)
→ Inputs designed to check if the model maintains its defined persona under pressure.
→ Include: emotional user / angry user / user testing boundaries.

FOR EACH TEST:
- Test ID: [T-001, T-002, etc.]
- Input: [Exact test input]
- Expected behavior: [What a passing response looks like]
- Failure indicator: [What a failing response looks like]

SCORING GUIDE: Suggest a simple 1–3 rubric for each test category.`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  7. YOUTUBE CREATION
  // ══════════════════════════════════════════════════════
  {
    id: "youtube",
    label: "YouTube Creation",
    iconName: "Play",
    prompts: [

      {
        title: "Video Hook Arsenal",
        tag: "Hooks / Retention",
        description: "Generates 10 proven hook types for any YouTube video topic.",
        text: `You are a YouTube retention specialist. Your hooks keep viewers watching past the 30-second mark consistently.

VIDEO TOPIC: [TOPIC]
TARGET AUDIENCE: [WHO — e.g., "beginner freelancers trying to get their first client"]
VIDEO GOAL: [Educate / Entertain / Convert / Build trust]

WRITE 10 DIFFERENT HOOKS for this video, one of each type:

1. CURIOSITY GAP — Tease the outcome without revealing it
2. BOLD CLAIM — Make a statement most creators wouldn't dare say
3. PATTERN INTERRUPT — Open mid-action or mid-sentence to shock the algorithm
4. IDENTITY TRIGGER — Speak directly to who the viewer IS ("If you're a freelancer who...")
5. COUNTER-INTUITIVE — Tell them something that contradicts what they believe
6. STORY OPEN — Drop into a specific moment in time ("At 2am, I was about to quit...")
7. STAT / NUMBER — Open with a surprising, specific data point
8. QUESTION — A question the viewer is already asking themselves
9. PROMISE — Tell them exactly what they'll have at the end
10. RELATABILITY — Name the frustration they feel RIGHT NOW

FOR EACH HOOK: Write the first 2–3 spoken sentences + a matching thumbnail text (max 4 words).
RULE: Every hook must be completable in under 15 seconds. No fluff, no "Hey guys welcome back."`,
      },

      {
        title: "Full YouTube Script Writer",
        tag: "Script / Long-Form",
        description: "Produces a complete structured YouTube script with timestamps and B-roll notes.",
        text: `You are a professional YouTube scriptwriter whose videos average 65%+ retention.

VIDEO DETAILS:
- Topic: [TOPIC]
- Target length: [8 / 10 / 15 / 20 minutes]
- Audience: [WHO + their current knowledge level]
- Channel style: [Educational / Story-driven / Tutorial / Commentary]
- CTA goal: [Subscribe / Link in description / Comment / Buy]

WRITE A COMPLETE SCRIPT USING THIS STRUCTURE:

[0:00–0:30] HOOK
→ Pattern interrupt opening (no intro music, no "welcome back")
→ State the exact problem or promise in 3 sentences

[0:30–1:30] CREDIBILITY + SETUP
→ Why should they listen to YOU specifically
→ Preview the 3 key things they'll learn (retention anchor)

[1:30 – END-2:00] MAIN CONTENT
→ Break into 3–5 clear sections with bold section headers
→ Each section: Point → Explanation → Real example → Mini-summary
→ Add [B-ROLL NOTE: description] for visual direction throughout
→ Add [PAUSE FOR EMPHASIS] where delivery timing matters

[END-2:00 – END] OUTRO + CTA
→ 30-second summary of the 3 key takeaways
→ Bridge to the next video ("If you want to go deeper on X, watch this next →")
→ CTA: Natural, not desperate

FORMAT: Timestamp each section. Put [B-ROLL] and [ON SCREEN TEXT] in brackets throughout.
RULE: Write for the ear, not the eye. Short sentences. Conversational. No walls of text.`,
      },

      {
        title: "YouTube SEO Bundle",
        tag: "SEO / Discovery",
        description: "Generates title, description, tags, and thumbnail copy optimized for search and CTR.",
        text: `You are a YouTube SEO and CTR specialist. You know that 70% of watch time comes from recommendations and search.

VIDEO TOPIC: [TOPIC]
MAIN KEYWORD: [PRIMARY KEYWORD people search for]
VIDEO SUMMARY: [2–3 sentences about what the video covers]
CHANNEL NICHE: [YOUR NICHE]

DELIVER A COMPLETE SEO BUNDLE:

1. TITLE OPTIONS (write 5 variations)
   — Variation A: Search-first (keyword at the front)
   — Variation B: Curiosity-gap style
   — Variation C: Number/list format ("7 ways to...")
   — Variation D: Emotional/identity trigger
   — Variation E: Controversy or bold claim
   → Mark your #1 recommended title and explain why

2. DESCRIPTION (fully written, ready to paste)
   — First 2 lines: Hook + keyword-rich summary (visible before "Show more")
   — Lines 3–8: Timestamps for key sections (use [00:00] format)
   — Lines 9–12: 3–5 related links or resources
   — Last 3 lines: Channel CTA + social links + hashtags (3 only)

3. TAGS (20 tags, comma-separated)
   — Mix: exact match, broad, long-tail, related topics, channel brand

4. THUMBNAIL COPY
   — Main text (max 4 words, high contrast, readable at 100px)
   — Emotion/expression direction for the face in the thumbnail
   — Background color recommendation + contrast check`,
      },

      {
        title: "YouTube Channel Growth Strategy",
        tag: "Strategy / Monetization",
        description: "Builds a 90-day content strategy with pillars, posting schedule, and monetization roadmap.",
        text: `You are a YouTube channel strategist who has helped creators go from 0 to 10k subscribers in under 6 months.

CHANNEL DETAILS:
- Niche: [NICHE]
- Current subscribers: [NUMBER or "0 / just starting"]
- Posting frequency target: [X videos per week]
- Monetization goal: [AdSense / Sponsorships / Course / Affiliate / Products]
- Biggest competitor channel: [CHANNEL NAME or "unknown"]

BUILD A 90-DAY CHANNEL GROWTH PLAN:

1. CONTENT PILLAR STRATEGY (3 pillars)
   For each pillar:
   — Pillar name + purpose (search-driven / community-driven / viral-potential)
   — 5 specific video ideas with working titles
   — Target keyword for each video

2. POSTING ARCHITECTURE
   — Week 1–4: Foundation content (what to publish first and why)
   — Week 5–8: Doubling down on what's working
   — Week 9–12: Expansion play (Shorts strategy, community posts, collaborations)

3. THUMBNAIL + BRAND SYSTEM
   — Consistent thumbnail formula (color, font style, face position)
   — Channel icon and banner brief

4. MONETIZATION ROADMAP
   — At 100 subs: [first revenue action]
   — At 1,000 subs: [second revenue action]
   — At 10,000 subs: [full monetization stack]

5. THE 1 VIDEO THAT WILL BREAK YOUR CHANNEL
   — Based on the niche, suggest the single "breakout video" concept most likely to get recommended by the algorithm`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  8. INSTAGRAM REELS & STORIES
  // ══════════════════════════════════════════════════════
  {
    id: "reels",
    label: "Instagram Reels",
    iconName: "Film",
    prompts: [

      {
        title: "Reel Script + Caption Bundle",
        tag: "Reels / Caption",
        description: "Writes a complete Reel script with matching caption, hook, and hashtag set.",
        text: `You are an Instagram Reels strategist with a track record of 500k+ view reels. You know that Reels live and die in the first 2 seconds.

REEL DETAILS:
- Topic: [TOPIC]
- Niche: [YOUR NICHE]
- Tone: [Educational / Entertaining / Inspirational / Behind-the-scenes]
- CTA goal: [Follow / Save / DM / Link in bio]
- Approximate length: [15s / 30s / 60s / 90s]

DELIVER A COMPLETE BUNDLE:

PART 1 — REEL SCRIPT
[0–2s] Visual hook: [What appears on screen in frame 1]
[0–2s] Spoken/text hook: (Must create an instant "wait, what?" reaction)

[2s–END-5s] Content body:
→ Each spoken line under 8 words
→ Mark key moments with [ON-SCREEN TEXT: ...]
→ Mark music energy changes with [BEAT DROP] or [SLOW]
→ Mark transitions with [CUT TO / ZOOM / TEXT POP]

[END-5s – END] CTA:
→ Spoken line that makes following/saving feel natural
→ [FINAL ON-SCREEN TEXT: short CTA text]

PART 2 — CAPTION
→ Line 1: Full hook sentence (no cliffhanger — make it stand-alone valuable)
→ Lines 2–4: 3-sentence expansion or storytelling
→ Engagement question before hashtags
→ CTA line: specific action
→ Hashtags: 5–8, mix of niche + broad + location (if relevant)

PART 3 — COVER FRAME BRIEF
→ Text overlay: max 5 words
→ Visual description: what to show as the still cover image`,
      },

      {
        title: "Instagram Story Sequence",
        tag: "Stories / Engagement",
        description: "Designs a 5-slide Story arc engineered for tap-through rate and DM replies.",
        text: `You are an Instagram Stories strategist. You know that the average story drop-off is 20% per slide — your job is to kill that stat.

STORY GOAL: [What do you want viewers to DO — DM you / swipe up / answer a poll / visit link]
TOPIC: [WHAT THIS STORY IS ABOUT]
AUDIENCE PAIN POINT: [The frustration or desire driving this story]

DESIGN A 5-SLIDE STORY SEQUENCE:

SLIDE 1 — THE HOOK
→ Type: [Poll / Bold text / Question sticker / Image with text]
→ Text: Creates curiosity or triggers identity ("Are you doing this wrong?")
→ Visual note: [Color / background / font style]
→ Why it earns the tap-forward: [explain the pull]

SLIDE 2 — THE SETUP
→ Expand the problem or premise
→ Make them feel seen ("If you've ever...")
→ Interactive element: [Poll / Emoji slider / Question box]

SLIDE 3 — THE VALUE DROP
→ The core insight, tip, or reveal
→ Keep to 3 bullet points max
→ Add [SAVE THIS] text element

SLIDE 4 — THE PROOF
→ Screenshot, result, testimonial, or before/after
→ Add context text overlay

SLIDE 5 — THE CTA
→ Direct, specific ask: "DM me [KEYWORD]" / "Tap the link" / "Reply YES if this helped"
→ Urgency element if relevant: "Gone in 24hrs"
→ Link sticker or @mention if applicable

FORMAT: For each slide, give: Text content + Visual direction + Interactive element used`,
      },

      {
        title: "Reel Series Content Planner",
        tag: "Series / Planning",
        description: "Plans a 4-part connected Reel series with a thread that drives follows and saves.",
        text: `You are an Instagram content strategist. Single viral reels get views. Series get followers. You design series that create content dependency.

SERIES DETAILS:
- Niche: [YOUR NICHE]
- Series topic: [BROAD TOPIC — e.g., "How I built a 6-figure freelance business"]
- Target audience: [WHO]
- Posting frequency: [Daily / Every 2 days / Weekly]
- End goal: [Grow following / Sell a product / Build email list]

DESIGN A 4-PART REEL SERIES:

SERIES HOOK CONCEPT:
→ The overarching promise that makes someone want to watch ALL 4 parts
→ The "open loop" that only closes in Part 4

FOR EACH REEL (Parts 1–4):

Part [N] Title:
→ Working title / hook text
→ 1-sentence summary of what this part covers
→ The cliffhanger or open loop that pulls to the next part
→ On-screen series indicator: "Part [N] of 4 — [SERIES NAME]"
→ Caption hook line (unique per part)

SERIES LINKING STRATEGY:
→ How to reference previous parts without being repetitive
→ Pinned comment template to link all parts
→ Highlight cover naming convention

CTA PROGRESSION:
→ Part 1: [Soft CTA — save or follow]
→ Part 2: [Engagement CTA — comment or poll]
→ Part 3: [DM CTA — build relationship]
→ Part 4: [Conversion CTA — link, product, or list]`,
      },

      {
        title: "Viral Audio & Trend Brief",
        tag: "Trends / Audio",
        description: "Creates a brief for using trending audio with original content that doesn't feel forced.",
        text: `You are a social media trend analyst. You know how to attach original value to trending audio without the content feeling cheap or desperate.

YOUR NICHE: [NICHE]
TRENDING AUDIO / FORMAT: [DESCRIBE THE TREND — e.g., "the 'I did X so you don't have to' format" or "POV audio trending on Reels"]
YOUR ANGLE: [What unique take can YOU put on this trend from your niche perspective?]

WRITE A TREND ADAPTATION BRIEF:

1. TREND ANALYSIS
→ Why this audio/format is working right now (psychological hook it triggers)
→ The pattern most creators use (that you should NOT copy exactly)
→ The gap in how others are using it (your opportunity)

2. YOUR UNIQUE ADAPTATION
→ How to use this audio/trend but make it native to your niche
→ The specific original insight or content to layer on top
→ Why your version will feel fresh, not derivative

3. FULL REEL BRIEF
→ Visual concept: [What to film]
→ Text overlay sequence: [Line 1 / Line 2 / Line 3 timed to audio]
→ Pacing note: [Where to cut for the beat drop or lyric]
→ Cover frame: [Thumbnail text + visual]

4. CAPTION
→ Hook line that references the trend without being cringe
→ Your value add in 2 sentences
→ CTA + 5 hashtags

RULE: The goal is to ride the wave of the trend while making your content the most informative or entertaining version of it in your niche.`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  9. WEBSITE BUILDING
  // ══════════════════════════════════════════════════════
  {
    id: "website",
    label: "Website Building",
    iconName: "Globe",
    prompts: [

      {
        title: "Full Landing Page Copy",
        tag: "Landing Page / CRO",
        description: "Writes complete above-and-below-fold landing page copy section by section.",
        text: `You are a CRO copywriter who has written landing pages that convert at 3–8%. You know every section has one job.

PAGE DETAILS:
- Product/Service: [NAME]
- Primary offer: [WHAT THEY GET — be specific]
- Target visitor: [WHO lands here + where they came from — ad, email, organic?]
- Price: [FREE / PAID — if paid, state price]
- #1 objection: [The main reason they'd leave without converting]
- Social proof: [Your best testimonial, number, or case study]

WRITE THE COMPLETE PAGE (section by section):

HERO SECTION
→ Headline (under 10 words, outcome-focused)
→ Sub-headline (1 sentence addressing the #1 objection)
→ CTA button (specific, not "Get Started")
→ Trust indicator line (below button)

PROBLEM SECTION (3 bullet pain points)
→ Each bullet: name the specific pain, not a generic problem

SOLUTION SECTION
→ Bridge statement ("That's why we built [PRODUCT]...")
→ 3 feature-to-benefit pairs (Feature: / What it means for you:)

SOCIAL PROOF SECTION
→ Primary testimonial (write a realistic one based on the proof element you provided)
→ Supporting stat or logo line

OBJECTION-HANDLER SECTION (2–3 FAQs)
→ Write the most feared questions + honest answers

FINAL CTA SECTION
→ Restate the offer in one sentence
→ Urgency or scarcity element (if genuine)
→ CTA button (same as hero or stronger)

FOOTER MICRO-COPY
→ Guarantee statement (1 line)
→ Privacy reassurance (1 line)`,
      },

      {
        title: "About Page Brand Story",
        tag: "About / Brand",
        description: "Writes a compelling About page using a narrative arc that builds trust and connection.",
        text: `You are a brand storytelling specialist. You know that the About page is where visitors decide whether to trust you — and most About pages are wasted.

BRAND DETAILS:
- Brand/Founder name: [NAME]
- What you do: [SERVICE OR PRODUCT]
- Who you serve: [AUDIENCE]
- Origin moment: [The specific moment or reason you started this — be honest and specific]
- The turning point: [What changed that led to where you are now]
- Your unique angle: [What makes your approach different from everyone else in this space]
- Proof of expertise: [Credentials, results, years of experience, notable clients]

WRITE A COMPELLING ABOUT PAGE:

OPENING (2–3 sentences)
→ Start with the customer, not yourself ("If you've ever felt...")
→ Name the specific frustration your audience shares

ORIGIN STORY (1 short paragraph)
→ Your inciting moment — specific, vulnerable, relatable
→ What problem you personally experienced that led here

THE JOURNEY (1–2 paragraphs)
→ What you tried, what failed, what you learned
→ The realization or method you developed

YOUR MISSION (1 paragraph)
→ What you believe about how this problem should be solved
→ What you stand against (the industry norm you reject)

WHO YOU SERVE (1 short paragraph)
→ Specific description of your ideal reader/customer
→ "You're in the right place if..." format

CREDIBILITY BLOCK
→ 3–5 bullet proof points (results, credentials, media, clients)

CTA
→ Natural next step — what should they do after reading this?

TONE: First-person, warm, direct. No corporate speak. Reads like a letter, not a brochure.`,
      },

      {
        title: "Website Design Brief",
        tag: "Design / Webflow",
        description: "Generates a detailed design brief for Webflow, Framer, or a developer.",
        text: `You are a web design brief specialist. You translate business goals into design language that designers and no-code builders can execute without guessing.

PROJECT DETAILS:
- Website type: [Portfolio / SaaS / E-commerce / Agency / Personal brand / Blog]
- Platform: [Webflow / Framer / Wix / Squarespace / Custom code]
- Brand personality: [3 adjectives — e.g., "Bold, minimal, technical"]
- Target user: [WHO visits this site and what they need to feel/do]
- Primary conversion goal: [Book a call / Buy / Sign up / Read]
- Competitor sites you like: [2–3 URLs or descriptions]
- Sites you hate the look of: [describe what to avoid]

GENERATE A COMPLETE DESIGN BRIEF:

1. VISUAL DIRECTION
   → Color palette: Primary / Secondary / Accent / Background / Text
   → Typography pairing: Heading font + Body font (suggest Google Fonts or system fonts)
   → Overall aesthetic: [reference 2 design styles, e.g., "Brutalist minimalism meets warm editorial"]
   → What imagery/illustration style to use

2. LAYOUT ARCHITECTURE (page by page)
   → Homepage: section order + purpose of each section
   → Secondary pages needed: list + one-line purpose
   → Navigation structure: top nav items + mobile behavior

3. INTERACTION & ANIMATION BRIEF
   → Scroll behavior (parallax / fade-up / none)
   → Hover states (subtle / dramatic / none)
   → Page transitions (instant / fade / slide)
   → Performance constraint: keep animations under [X] to preserve load speed

4. COMPONENT LIBRARY
   → List 8–10 reusable components needed (cards, buttons, nav, footer, etc.)
   → For each: describe the variant states (default / hover / active / disabled)

5. MOBILE FIRST NOTES
   → Key breakpoint behaviors
   → Elements to simplify or hide on mobile`,
      },

      {
        title: "FAQ Section Generator",
        tag: "FAQ / Objections",
        description: "Generates 10 objection-handling FAQs that convert hesitant visitors into buyers.",
        text: `You are a conversion copywriter who treats every FAQ as a hidden sales page. You know that people scroll to the FAQ when they're almost convinced but still have doubts.

PRODUCT/SERVICE: [NAME + one-line description]
PRICE: [PRICE POINT]
TARGET CUSTOMER: [WHO — specific description]
TOP 3 SALES OBJECTIONS: [List the real reasons people don't buy]
COMMON QUESTIONS FROM SALES CALLS/EMAILS: [Paste any real questions customers ask]

WRITE 10 FAQ ENTRIES:

For each FAQ:
Q: [The question — written exactly as a customer would type it, not as a business would ask it]
A: [2–4 sentences. Honest. Specific. Ends with either reassurance or a soft nudge forward.]

QUESTION MIX REQUIRED:
— 2 questions about price/value ("Is this worth it?", "Why is it more expensive than X?")
— 2 questions about trust ("Who is this for?", "What if it doesn't work for me?")
— 2 questions about process ("How does it work?", "How long until I see results?")
— 2 questions about risk ("What's your refund policy?", "What if I'm not satisfied?")
— 2 questions about comparison ("How is this different from [competitor/alternative]?")

TONE: Honest, warm, and direct. Never defensive. Never corporate.
RULE: Every answer should make the visitor MORE confident, not just inform them.
BONUS: Add a "Still have questions?" CTA at the end with a contact option.`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  10. PRESENTATIONS & SLIDES
  // ══════════════════════════════════════════════════════
  {
    id: "ppt",
    label: "Presentations & Slides",
    iconName: "Layout",
    prompts: [

      {
        title: "Slide Deck Architect",
        tag: "Structure / Outline",
        description: "Creates a complete slide-by-slide deck outline with speaker notes and visual direction.",
        text: `You are a presentation designer and speechwriter. You know that a bad deck is a wall of bullets. A great deck is a story with visuals.

PRESENTATION DETAILS:
- Topic: [TOPIC]
- Audience: [WHO + their knowledge level + what they care about]
- Purpose: [Inform / Persuade / Train / Pitch / Inspire]
- Length: [X minutes → approximately X÷2 slides]
- Tone: [Formal / Conversational / Energetic / Calm / Technical]
- Key message (one sentence): [The one thing they MUST remember]

GENERATE A COMPLETE SLIDE OUTLINE:

For EACH slide provide:
- SLIDE NUMBER + TITLE (max 6 words)
- LAYOUT TYPE: [Title / Text + visual / Full image / Data / Quote / Two-column / Blank + headline]
- MAIN CONTENT: (bullet points or key text — max 3 points per slide, max 7 words per bullet)
- VISUAL DIRECTION: [What image, chart, icon, or graphic goes here]
- SPEAKER NOTE: (2–4 sentences of what to say — written in spoken language, not read language)
- TRANSITION PURPOSE: [Why this slide follows the previous one]

REQUIRED SLIDE TYPES TO INCLUDE:
→ Opening slide (hook — not the title slide)
→ Agenda / roadmap slide
→ 1 data visualization slide
→ 1 quote or testimonial slide
→ 1 "key insight" slide (the most important point, full-bleed design)
→ Summary + next steps slide
→ Closing CTA slide

RULE: No slide should have more than 30 words of text visible at once.`,
      },

      {
        title: "Investor Pitch Deck",
        tag: "Pitch / Fundraising",
        description: "Builds a 12-slide investor deck following the Sequoia/YC structure with compelling narrative.",
        text: `You are a pitch deck writer who has helped founders raise seed and Series A rounds. You know investors see 1,000 decks per year and decide in the first 3 slides.

COMPANY DETAILS:
- Company name: [NAME]
- One-liner: [What you do in one sentence — "We are [X] for [Y]"]
- Problem: [The specific, measurable pain you solve]
- Solution: [What you built]
- Traction: [Revenue / users / growth rate / key partnerships — be specific]
- Market size: [TAM / SAM / SOM — with source]
- Business model: [How you make money]
- Ask: [How much you're raising + what you'll use it for]
- Team: [Founder names + the 1 credential that matters most per person]

WRITE A 12-SLIDE PITCH DECK OUTLINE:

Slide 1: COVER — Company name + one-liner + logo placement
Slide 2: THE PROBLEM — Make the investor feel the pain (use a story or stat)
Slide 3: THE SOLUTION — Your product in one visual + one sentence
Slide 4: WHY NOW — The market timing argument (regulation / tech shift / behavior change)
Slide 5: MARKET SIZE — TAM/SAM/SOM with a bottom-up calculation
Slide 6: PRODUCT — 2–3 key features with screenshots or mockup directions
Slide 7: BUSINESS MODEL — Revenue streams + unit economics
Slide 8: TRACTION — The most impressive number you have + growth chart
Slide 9: GO-TO-MARKET — How you'll acquire your first 1,000 customers
Slide 10: COMPETITION — Positioning matrix (not a feature checklist)
Slide 11: TEAM — Why YOU are the ones to build this
Slide 12: THE ASK — Amount / use of funds / milestones unlocked

For each slide: content bullets + visual direction + the 1 question this slide must answer in the investor's mind.`,
      },

      {
        title: "Academic / Class Presentation",
        tag: "Academic / Education",
        description: "Structures a research or class presentation with evidence hierarchy and Q&A prep.",
        text: `You are an academic presentation coach. You help students and researchers turn dense material into clear, engaging presentations that professors and peers actually remember.

PRESENTATION DETAILS:
- Subject / Course: [SUBJECT]
- Topic: [SPECIFIC TOPIC]
- Audience: [Classmates / Professor / Conference peers / Mixed]
- Time limit: [X minutes]
- Assessment criteria (if known): [What are you being graded on?]
- Key argument or thesis: [Your main claim in one sentence]
- Sources available: [Number + types — e.g., "3 peer-reviewed papers, 1 textbook chapter"]

STRUCTURE THE PRESENTATION:

OPENING (first 10% of time)
→ Attention-grabber: [Statistic / question / brief anecdote relevant to topic]
→ Thesis statement: clear, arguable, specific
→ Roadmap: "I'll cover three areas: X, Y, and Z"

BODY SECTIONS (70% of time — split into 3 parts)
For each section:
— Section heading
— Core argument in 1 sentence
— 2 pieces of evidence (cite format: Author, Year)
— Transition to next section

VISUAL AIDS PLAN
→ Recommended slides: [number + what each shows]
→ One key visual/chart/diagram per section
→ What NOT to put on slides (avoid text-dumping)

CONCLUSION (last 20% of time)
→ Restate thesis (in different words)
→ Summarize 3 key points in 3 sentences
→ Broader implication: "This matters because..."
→ Strong closing line (call to action or thought-provoking question)

Q&A PREPARATION
→ Predict 5 questions the audience might ask
→ Write a 2-sentence answer for each`,
      },

      {
        title: "Data Story Presentation",
        tag: "Data / Storytelling",
        description: "Transforms raw data and numbers into a compelling visual narrative presentation.",
        text: `You are a data storytelling expert. You know that data doesn't persuade — stories do. Your job is to find the human narrative inside the numbers.

DATA CONTEXT:
- What data do you have: [Describe your dataset, metrics, or findings]
- Audience: [Who will see this — executives / clients / team / public]
- Decision you want them to make: [What should they do after seeing this?]
- The most surprising finding: [Your most counterintuitive data point]
- The "so what": [Why this data matters to the audience specifically]

BUILD A DATA STORY PRESENTATION:

1. THE NARRATIVE ARC
→ Act 1 — The Status Quo: What did we think was true before this data?
→ Act 2 — The Conflict: What does the data reveal that challenges assumptions?
→ Act 3 — The Resolution: What should we do differently now?

2. SLIDE-BY-SLIDE DATA VISUALIZATION PLAN
For each key metric:
— Chart type recommendation (bar / line / scatter / map / table) + why
— What the visual axis labels should say
— The one-sentence insight to caption below the chart
— What to highlight/annotate (circle, arrow, callout)

3. THE BIG NUMBER SLIDE
→ The single most impactful stat from your data
→ Full-bleed slide: large number + context sentence + visual metaphor

4. EXECUTIVE SUMMARY SLIDE
→ 3 findings + 3 recommended actions (one-to-one mapping)
→ Estimated impact of each action (if possible)

5. COMMON MISREADING PREVENTION
→ What wrong conclusions could someone draw from this data?
→ How to visually prevent misinterpretation (add context, baseline comparisons)`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  11. SMART NOTES & SUMMARIES
  // ══════════════════════════════════════════════════════
  {
    id: "notes",
    label: "Smart Notes",
    iconName: "FileText",
    prompts: [

      {
        title: "Lecture / Video Summarizer",
        tag: "Notes / Study",
        description: "Converts raw lecture content or video transcripts into structured, actionable notes.",
        text: `You are an expert note-taker and knowledge organizer. Your notes make complex material easy to review, retain, and apply.

CONTENT TO SUMMARIZE:
[PASTE LECTURE TRANSCRIPT / VIDEO TRANSCRIPT / ARTICLE TEXT / CHAPTER TEXT]

SUBJECT / COURSE: [SUBJECT NAME]
PURPOSE: [Exam review / Project reference / Personal learning / Teaching others]

GENERATE STRUCTURED NOTES IN THIS FORMAT:

━━━ LECTURE NOTES: [TOPIC] ━━━
Date: [DATE IF KNOWN]
Source: [LECTURER / VIDEO / BOOK]

📌 CORE THESIS (1 sentence)
→ The single most important idea from this content

🔑 KEY CONCEPTS (list each with a 2-line explanation)
1. [Concept] — [definition in plain language] — [why it matters]
2. [Continue for all major concepts]

📊 IMPORTANT FACTS & DATA
→ Bullet list of specific stats, dates, names, formulas mentioned

🔗 CONNECTIONS
→ How does this connect to [previous topic]?
→ Real-world application: [concrete example]

❓ QUESTIONS RAISED
→ 3 questions this content left unanswered or you want to explore further

⚡ FLASHCARD PROMPTS (5 Q&A pairs ready for Anki or manual review)
Q: [Question]
A: [Answer]

📝 ONE-PARAGRAPH SUMMARY
→ Explain the entire content as if teaching it to someone who wasn't there. Plain language. No jargon.`,
      },

      {
        title: "Book Chapter Deep Notes",
        tag: "Reading / Retention",
        description: "Creates Cornell-style notes from book chapters with key arguments and personal insights.",
        text: `You are a reading comprehension specialist trained in the Cornell Note method and Zettelkasten system.

BOOK: [TITLE + AUTHOR]
CHAPTER: [CHAPTER NUMBER + TITLE]
CHAPTER CONTENT:
[PASTE CHAPTER TEXT or DESCRIBE the chapter's content]

GENERATE DEEP READING NOTES:

CORNELL-STYLE FORMAT:

LEFT COLUMN — CUE QUESTIONS (write 8 questions that the notes answer)
1. [Question]
2. [Question]
...

RIGHT COLUMN — NOTES (organized by section)

[Section heading from chapter]
→ Main argument in 1 sentence
→ Supporting evidence or example
→ Your reaction / critique / connection to other ideas [mark as 🧠 YOUR THOUGHT]

[Continue for each section]

BOTTOM SUMMARY BOX
→ The author's central argument in 2 sentences
→ The strongest idea in this chapter
→ The weakest or most questionable claim
→ Your personal takeaway: how does this change how you think or act?

QUOTE BANK (3 most important direct quotes — under 20 words each)
"[Quote]" — p.[PAGE]
Significance: [Why this quote matters]

CONNECTIONS MAP
→ Connects to: [other books / concepts / personal experiences]
→ Contradicts: [any opposing ideas you know of]
→ Builds on: [foundational concept this assumes]`,
      },

      {
        title: "Meeting Minutes Formatter",
        tag: "Meetings / Docs",
        description: "Converts raw meeting notes or audio transcripts into professional formatted minutes.",
        text: `You are a professional minute-taker and executive assistant. You turn chaotic meeting conversations into clear, actionable documents that people actually refer back to.

RAW MEETING NOTES / TRANSCRIPT:
[PASTE YOUR NOTES OR TRANSCRIPT]

MEETING CONTEXT:
- Meeting type: [Standup / Project review / Strategy / Client / Board / Team sync]
- Attendees: [List names and roles if known]
- Date: [DATE]
- Duration: [LENGTH]

GENERATE PROFESSIONAL MEETING MINUTES:

━━━━━━━━━━━━━━━━━━━━━━━
MEETING MINUTES
[MEETING TITLE]
Date: | Time: | Duration: | Location/Platform:
━━━━━━━━━━━━━━━━━━━━━━━

ATTENDEES
Present: [list]
Apologies/Absent: [list]

AGENDA ITEMS COVERED
1. [Agenda Item]
   Discussion: [2–3 sentence summary of what was discussed]
   Decision: [What was decided — or "No decision reached"]
   
2. [Continue for each topic]

⚡ ACTION ITEMS
| # | Action | Owner | Deadline |
|---|--------|-------|----------|
| 1 | [Specific task] | [Name] | [Date] |

KEY DECISIONS MADE
→ [Decision 1]
→ [Decision 2]

OPEN ISSUES / PARKED TOPICS
→ [Topics raised but not resolved — carry forward to next meeting]

NEXT MEETING
Date: | Time: | Location:
Proposed Agenda Items: [list]

Minutes prepared by: [NAME]
Distribution: [WHO RECEIVES THESE]`,
      },

      {
        title: "Exam Study Guide Creator",
        tag: "Exam / Revision",
        description: "Generates a complete exam-ready study guide with practice questions and memory aids.",
        text: `You are an academic coach and learning specialist trained in spaced repetition, active recall, and the Feynman Technique.

EXAM DETAILS:
- Subject: [SUBJECT]
- Exam type: [Multiple choice / Essay / Problem-solving / Oral / Mixed]
- Topics to cover: [LIST THE CHAPTERS OR TOPICS]
- Exam date: [DATE — so we can plan review sessions]
- Your current confidence level: [Low / Medium / High]
- Biggest knowledge gaps: [What confuses you most?]

GENERATE A COMPLETE STUDY GUIDE:

1. MASTER TOPIC CHECKLIST
→ Full list of everything that could appear on the exam
→ Mark each: ✅ Know it / ⚠️ Shaky / ❌ Need to study

2. CORE CONCEPTS EXPLAINED (Feynman Method)
For each major concept:
→ Plain-language explanation (as if explaining to a 12-year-old)
→ Common exam trick or trap for this concept
→ Memory aid or mnemonic

3. FORMULA / FACT SHEET
→ All equations, dates, definitions, or frameworks in one scannable block

4. PRACTICE QUESTIONS (10 total)
→ 5 recall questions ("What is...?" / "Define...")
→ 3 application questions ("Given X, what would happen if...?")
→ 2 essay-style questions with a model answer outline

5. 7-DAY REVISION PLAN
Day 1–2: [Topics to review first — your weakest areas]
Day 3–4: [Middle difficulty topics]
Day 5–6: [Strongest topics — light review + practice questions]
Day 7: [Mock exam conditions — no notes, timed]

6. DAY-BEFORE CHECKLIST
→ What to review (max 30 min)
→ What NOT to cram the night before
→ Sleep, nutrition, and mindset reminders`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  12. ESSAYS & ASSIGNMENTS
  // ══════════════════════════════════════════════════════
  {
    id: "assignments",
    label: "Essays & Assignments",
    iconName: "BookOpen",
    prompts: [

      {
        title: "Academic Essay Framework",
        tag: "Essay / Writing",
        description: "Structures a full argumentative or analytical essay with thesis, body, and conclusion.",
        text: `You are an academic writing coach who has helped students improve essay grades by 2 letter grades on average.

ESSAY DETAILS:
- Essay type: [Argumentative / Analytical / Expository / Comparative / Reflective]
- Topic / Question: [EXACT ESSAY QUESTION OR TOPIC]
- Word count: [WORD COUNT]
- Academic level: [High school / Undergraduate / Postgraduate]
- Subject: [SUBJECT]
- Citation style: [APA / MLA / Harvard / Chicago / No citations]
- Your position / argument (if argumentative): [YOUR STANCE]

GENERATE A COMPLETE ESSAY FRAMEWORK:

TITLE
→ Academic title suggestion (if not provided)

INTRODUCTION (10% of word count)
→ Hook sentence (statistic, quote, or provocative question)
→ Context: 2–3 sentences of background
→ THESIS STATEMENT: [Your specific, arguable claim — not just a statement of fact]
→ Roadmap: "This essay will argue/examine/analyze..."

BODY PARAGRAPHS (80% of word count)
For each paragraph use the PEEL structure:
P — Point: [Topic sentence — the paragraph's argument in 1 sentence]
E — Evidence: [Paraphrased source or data to support it]
E — Explanation: [Why this evidence proves the point]
L — Link: [How this connects to the thesis / transitions to next paragraph]

[Write 4–6 paragraphs — for comparative essays, use block or point-by-point structure]

COUNTERARGUMENT PARAGRAPH (optional but adds marks)
→ Present the opposing view fairly
→ Rebut it with stronger evidence

CONCLUSION (10% of word count)
→ Restate thesis (in NEW words — never copy the introduction)
→ Synthesize main points (don't list them — connect them)
→ Broader significance: "This matters because..."
→ Closing statement: ends with a forward-looking idea

REFERENCE LIST TEMPLATE
→ [Placeholder entries in correct citation format]`,
      },

      {
        title: "Research Paper Architect",
        tag: "Research / Academic",
        description: "Builds a full research paper structure with methodology, literature review, and argument map.",
        text: `You are a research methodology advisor and academic writing specialist.

PAPER DETAILS:
- Research question: [YOUR SPECIFIC RESEARCH QUESTION]
- Field: [ACADEMIC DISCIPLINE]
- Paper type: [Empirical / Literature review / Case study / Theoretical / Mixed methods]
- Word count target: [LENGTH]
- Level: [Undergraduate / Masters / PhD / Journal submission]
- Methodology (if known): [Qualitative / Quantitative / Mixed / Literature analysis]
- Key argument: [What is your central claim or hypothesis?]

GENERATE A COMPLETE PAPER ARCHITECTURE:

ABSTRACT (150–250 words)
→ Purpose sentence, methodology sentence, key finding sentence, implication sentence
→ Keywords: [5 keywords]

INTRODUCTION
→ Hook + background (funnel from broad to specific)
→ Research gap: "However, limited research has examined..."
→ Research question stated explicitly
→ Paper structure overview

LITERATURE REVIEW
→ Thematic organization (not chronological)
→ 3 themes to cover:
   Theme 1: [Foundational theory or concept]
   Theme 2: [Directly related prior studies]
   Theme 3: [Gap or contradiction in the literature]
→ Synthesis sentence: how these themes connect to your research question

METHODOLOGY
→ Research design rationale
→ Data collection method + justification
→ Sample/population description
→ Analysis approach
→ Limitations acknowledged upfront

FINDINGS / RESULTS
→ Structure by research sub-question or theme
→ Data presentation approach (tables, themes, statistics)

DISCUSSION
→ Link findings back to literature
→ Unexpected findings addressed
→ Theoretical and practical implications

CONCLUSION
→ Answer the research question directly
→ Limitations + future research directions

REFERENCE FORMAT
→ [Show 3 example entries in correct style]`,
      },

      {
        title: "Case Study Analyzer",
        tag: "Case Study / Analysis",
        description: "Applies structured frameworks to analyze business, law, medical, or academic case studies.",
        text: `You are a case study analysis expert trained across business (HBS method), law (IRAC), medicine (SOAP), and social science frameworks.

CASE DETAILS:
- Field: [Business / Law / Medicine / Psychology / Engineering / Social science]
- Case title or description: [PASTE CASE or DESCRIBE IT]
- Analysis framework required: [SWOT / PESTLE / IRAC / SOAP / Porter's Five Forces / Custom]
- Question to answer: [What specific question must your analysis address?]
- Word count: [LENGTH]

RUN THE ANALYSIS:

PART 1 — CASE SUMMARY
→ Situation: Who, what, when, where (3–4 sentences max)
→ The central problem or decision to be made
→ Stakeholders involved + their interests

PART 2 — ANALYSIS (apply the specified framework)

[If Business — SWOT]:
Strengths: (internal positives)
Weaknesses: (internal negatives)
Opportunities: (external positives)
Threats: (external negatives)
→ Strategic implication of each quadrant

[If Law — IRAC]:
Issue: [Exact legal question]
Rule: [Applicable law/principle]
Application: [How the rule applies to the facts]
Conclusion: [Legal outcome]

[If Medical — SOAP]:
Subjective / Objective / Assessment / Plan

PART 3 — ALTERNATIVE OPTIONS
→ Option A: [Course of action] — Pros / Cons
→ Option B: [Course of action] — Pros / Cons
→ Option C: [Course of action] — Pros / Cons

PART 4 — RECOMMENDATION
→ Recommended option + evidence-based justification
→ Implementation steps (if business/medical)
→ Risk mitigation for the chosen option

PART 5 — LESSONS LEARNED
→ What broader principle does this case illustrate?`,
      },

      {
        title: "Assignment Breakdown Planner",
        tag: "Planning / Productivity",
        description: "Breaks any complex assignment into manageable daily tasks with a completion timeline.",
        text: `You are an academic project manager and productivity coach. You help students turn overwhelming assignments into clear daily actions — and actually finish on time.

ASSIGNMENT DETAILS:
- Assignment type: [Essay / Research paper / Project / Presentation / Lab report / Group work]
- Topic: [TOPIC]
- Word count / length: [LENGTH]
- Submission deadline: [DATE]
- Today's date: [TODAY'S DATE]
- Available hours per day: [HOW MANY HOURS you can realistically work on this per day]
- Resources available: [Library access / specific databases / supervisor meetings / etc.]

GENERATE A COMPLETE ASSIGNMENT PLAN:

1. SCOPE BREAKDOWN
→ Every distinct task required (research, outline, draft, edit, format, cite, proofread)
→ Estimated time for each task (in hours)
→ Total hours required vs. total hours available (flag if there's a gap)

2. DAILY TASK SCHEDULE
[Day 1 — Date]:
→ Task: [SPECIFIC action — not "work on essay"]
→ Output: [What you'll have at the end of this session]
→ Time: [X hours]

[Continue for each day until deadline]

3. RESEARCH GUIDE
→ 5 specific search queries to find relevant sources
→ Best databases for this subject
→ How to evaluate source credibility quickly

4. MILESTONE CHECKPOINTS
→ Day X: Outline complete
→ Day X: First draft done
→ Day X: Peer review / feedback session
→ Day X: Final draft submitted

5. COMMON MISTAKES TO AVOID
→ For this specific assignment type, list 3 errors that cost students marks
→ Quick self-checklist before submission

6. PROCRASTINATION EMERGENCY PROTOCOL
→ If you fall behind by 1 day: [adjusted plan]
→ If you fall behind by 3+ days: [minimum viable submission strategy]`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  13. REPORTS & DOCUMENTS
  // ══════════════════════════════════════════════════════
  {
    id: "reports",
    label: "Reports & Documents",
    iconName: "FileBarChart",
    prompts: [

      {
        title: "Professional Report Writer",
        tag: "Report / Formal",
        description: "Writes a complete formal report with executive summary, findings, and recommendations.",
        text: `You are a professional business and technical writer. Your reports are read by executives who have 4 minutes — and they decide in the first paragraph whether to keep reading.

REPORT DETAILS:
- Report type: [Annual / Project / Audit / Research / Progress / Incident / Feasibility]
- Organization: [COMPANY / DEPARTMENT NAME]
- Prepared for: [RECIPIENT — their role and what they care about]
- Prepared by: [AUTHOR NAME / TEAM]
- Date: [DATE]
- Core data or findings to include: [PASTE YOUR RAW DATA / KEY POINTS]
- Recommended action you want them to take: [THE DECISION or ACTION you're pushing for]

WRITE A COMPLETE PROFESSIONAL REPORT:

COVER PAGE ELEMENTS
→ Report title | Prepared for | Prepared by | Date | Confidentiality level

EXECUTIVE SUMMARY (max 300 words — must standalone)
→ Purpose in 1 sentence
→ Methodology in 1 sentence
→ Top 3 findings (numbered, 1 sentence each)
→ Primary recommendation in 1 sentence

TABLE OF CONTENTS (generate section headings)

1. INTRODUCTION
→ Background and context
→ Scope and limitations
→ Methodology overview

2. FINDINGS (organize by theme, not chronology)
→ Section 2.1, 2.2, 2.3 — each finding with supporting data
→ Use [TABLE] or [FIGURE] placeholders where visuals should go

3. ANALYSIS
→ Implications of each finding
→ Root cause analysis (for problem-type reports)

4. RECOMMENDATIONS
→ Recommendation 1: [Action] — Expected outcome — Priority: High/Med/Low
→ Recommendation 2: [Continue for all recommendations]

5. CONCLUSION
→ Restate the key message in 3 sentences

APPENDICES (list what should go here)

FORMAT RULES: No jargon. Active voice. Short paragraphs. Every claim backed by data.`,
      },

      {
        title: "Data Analysis Report",
        tag: "Data / Insights",
        description: "Transforms raw data or metrics into a clear insight report with visual recommendations.",
        text: `You are a data analyst and business intelligence writer. You turn numbers into narratives that drive decisions.

DATA CONTEXT:
- Data source: [Where the data comes from — survey, CRM, analytics, spreadsheet, etc.]
- Time period: [DATE RANGE]
- Key metrics available: [LIST THE METRICS YOU HAVE]
- Business question to answer: [What decision does this data need to inform?]
- Audience: [Who reads this — CEO / Marketing team / Clients / Board]

RAW DATA / SUMMARY:
[PASTE YOUR DATA, KEY NUMBERS, OR SUMMARIZE WHAT YOU HAVE]

GENERATE A DATA ANALYSIS REPORT:

HEADLINE INSIGHT (1 sentence)
→ The single most important thing the data tells you

KEY FINDINGS (5 findings maximum)
For each finding:
→ Finding: [State what the data shows — be specific with numbers]
→ Context: [Is this good, bad, or surprising? Compare to benchmark or previous period]
→ Implication: [What does this mean for the business?]
→ Chart recommendation: [What type of visualization shows this best?]

TREND ANALYSIS
→ What's growing?
→ What's declining?
→ What's flat (and should it be moving)?

ANOMALIES & OUTLIERS
→ Any data points that don't fit the pattern
→ Possible explanations (do not over-interpret without more data)

RECOMMENDATIONS (ranked by impact)
1. [Action] — Based on [finding] — Expected outcome: [specific result]
2. [Continue]

DATA QUALITY NOTES
→ Limitations of this dataset
→ What additional data would improve the analysis

NEXT REPORT METRICS TO TRACK
→ Suggest 3 KPIs to add for the next reporting period`,
      },

      {
        title: "Business Proposal Writer",
        tag: "Proposal / Sales",
        description: "Writes a client-winning business proposal with scope, pricing, and ROI justification.",
        text: `You are a proposal writer who has helped agencies and consultants win contracts worth $10k to $500k. You know proposals are lost on page 1 and won on ROI.

PROPOSAL DETAILS:
- Your company/name: [NAME]
- Client name: [CLIENT]
- Project type: [Web design / Marketing / Consulting / Software / Event / Other]
- Client's stated problem: [WHAT THEY TOLD YOU THEY NEED]
- Client's real problem (underlying): [What you believe is actually driving the request]
- Your proposed solution: [WHAT YOU'LL DO]
- Investment (price): [YOUR PRICE]
- Delivery timeline: [LENGTH]
- Your proof / past work: [Relevant case study or result]

WRITE A COMPLETE BUSINESS PROPOSAL:

COVER PAGE
→ Title: "Proposal for [Client]: [Project Name]"
→ Submitted by / date / validity period

EXECUTIVE OVERVIEW (half page max)
→ Mirror their problem back to them (show you understood)
→ Your recommended solution in 2 sentences
→ The outcome they can expect

UNDERSTANDING OF YOUR NEEDS
→ Restate the problem, goals, and constraints — show you listened
→ Success criteria: "This project will be successful when..."

PROPOSED SOLUTION
→ Section 1: [Phase/Component name] — Description + deliverables
→ Section 2: [Continue for each phase]
→ What's included + what's NOT included (scope protection)

TIMELINE
[Visual schedule — Week by week or phase by phase]

INVESTMENT
→ Option A: [Core package — price + what's included]
→ Option B: [Premium package — price + what's included]
→ Payment terms

ROI JUSTIFICATION
→ How will this investment pay for itself? (use their numbers if known)
→ "If this [outcome] increases by X%, you recover the investment in Y months"

WHY US
→ 3 specific reasons (not generic "we care about clients")
→ Relevant case study: [client type similar to them] achieved [result]

NEXT STEPS
→ Exactly what they need to do to move forward (remove all friction)`,
      },

      {
        title: "SOP & Process Document",
        tag: "SOP / Operations",
        description: "Creates a step-by-step Standard Operating Procedure document for any business process.",
        text: `You are an operations documentation specialist. You write SOPs that new team members can follow without asking questions — and experienced team members actually refer back to.

PROCESS DETAILS:
- Process name: [WHAT THIS SOP COVERS]
- Department / Team: [WHO USES THIS]
- Frequency: [Daily / Weekly / Monthly / Ad-hoc / One-time]
- Person responsible: [ROLE — not just name]
- Time required: [How long the process takes]
- Tools / software required: [LIST ALL TOOLS]
- Process trigger: [What event starts this process?]
- Process end state: [What does "done" look like?]
- Last updated: [DATE]

WRITE THE COMPLETE SOP:

━━━━━━━━━━━━━━━━━━━━━━━
SOP: [PROCESS NAME]
Version: 1.0 | Owner: [ROLE] | Last reviewed: [DATE]
━━━━━━━━━━━━━━━━━━━━━━━

PURPOSE
→ Why this process exists and what problem it solves (2 sentences)

SCOPE
→ What this covers + what it does NOT cover

ROLES & RESPONSIBILITIES
| Role | Responsibility in this process |
|------|-------------------------------|
| [Role] | [What they do] |

PREREQUISITES
→ What must be done / in place before starting this process

STEP-BY-STEP PROCEDURE
Step 1: [Action] — [Details + screenshot placeholder if tool-specific]
          ↳ If [condition]: [do this]
          ↳ If [other condition]: [do that]
Step 2: [Continue for each step]
[Mark decision points with 🔀, warnings with ⚠️, and tips with 💡]

QUALITY CHECKS
→ How to verify the process was completed correctly

COMMON ERRORS & TROUBLESHOOTING
| Error | Likely Cause | Solution |
|-------|-------------|----------|

RELATED DOCUMENTS
→ Links to related SOPs, templates, or resources

REVISION HISTORY
| Version | Date | Changed by | What changed |`,
      },

    ],
  },


  // ══════════════════════════════════════════════════════
  //  14. EMAIL MARKETING
  // ══════════════════════════════════════════════════════
  {
    id: "email",
    label: "Email Marketing",
    iconName: "Mail",
    prompts: [

      {
        title: "Welcome Email Sequence (5-Part)",
        tag: "Sequence / Onboarding",
        description: "Writes a 5-email welcome sequence that converts new subscribers into engaged buyers.",
        text: `You are an email marketing strategist. You know the first 7 days after subscribe are worth more than the next 7 months — most brands waste them.

LIST DETAILS:
- Brand/product: [NAME]
- What the subscriber signed up for: [LEAD MAGNET / FREE RESOURCE / NEWSLETTER]
- Primary product to eventually sell: [PRODUCT + PRICE]
- Subscriber persona: [WHO subscribes — their pain and aspiration]
- Brand voice: [Casual / Professional / Witty / Warm / Direct]

WRITE A 5-EMAIL WELCOME SEQUENCE:

EMAIL 1 — THE DELIVERY (Send immediately)
Subject: [Deliver the promised resource + set expectations]
Goal: Deliver, impress, make them open Email 2
Content: Deliver the resource + 1 unexpected bonus insight + preview of what's coming

EMAIL 2 — THE STORY (Send Day 2)
Subject: [Personal — not promotional]
Goal: Build trust through vulnerability or origin story
Content: Your personal "before" state → the turning point → what you built → why it matters to them

EMAIL 3 — THE VALUE BOMB (Send Day 4)
Subject: [Pure value — no selling]
Goal: Position as the most useful voice in their inbox
Content: Your single best tip, framework, or insight. Give away something you could charge for.

EMAIL 4 — THE SOCIAL PROOF (Send Day 6)
Subject: [Result-driven — someone like them succeeded]
Goal: Make the reader imagine their own success
Content: Customer story (before → after) + the method behind the result + soft product mention

EMAIL 5 — THE OFFER (Send Day 8)
Subject: [Direct — they know it's coming]
Goal: Convert warm subscribers to buyers
Content: The problem → your solution → proof → price → CTA → urgency/scarcity (if genuine)

FORMAT: Write each email fully. Include subject line + preview text + full body + CTA for each.
RULE: Emails 1–3 give, give, give. Email 4 primes. Email 5 asks.`,
      },

      {
        title: "Promotional Campaign Email",
        tag: "Promotions / Sales",
        description: "Writes a high-converting product launch or promotional email with urgency mechanics.",
        text: `You are a direct-response email copywriter. Your promotional emails generate revenue without feeling like spam.

CAMPAIGN DETAILS:
- Product/offer: [WHAT YOU'RE SELLING]
- Price (original + sale if applicable): [PRICE]
- Promotion type: [Launch / Flash sale / Seasonal / Anniversary / New feature]
- Urgency mechanic: [Deadline date / Limited quantity / Bonus expires]
- Best proof element: [Testimonial / Result / Number of customers]
- Primary objection: [Why would they NOT buy today?]
- CTA link: [URL placeholder]

WRITE THE PROMOTIONAL EMAIL:

SUBJECT LINE (write 3 options)
→ A: Curiosity-based (doesn't mention the sale)
→ B: Benefit-driven (states the outcome)
→ C: Urgency-based (mentions deadline)

PREVIEW TEXT (for each subject line — max 90 chars)

EMAIL BODY:

Opening (2 sentences)
→ Start with the reader's situation or desire — not your product

Problem bridge (1 short paragraph)
→ Describe the pain or missed opportunity with specificity

The offer reveal (clear, not buried)
→ State what's included
→ State the normal price vs. offer price
→ State what the deadline is

Proof block
→ One quote-style testimonial or one result stat

Objection crusher (1–2 sentences)
→ Address the #1 reason they'd wait

Primary CTA (button text + link)
→ Specific outcome-focused copy: not "Buy Now" — "Get [Result] for $[Price]"

P.S. (always include)
→ Restate the deadline + what happens if they miss it
→ OR introduce a secondary fear of missing out

RULE: One email = one offer = one CTA. No distractions.`,
      },

      {
        title: "Re-Engagement Campaign",
        tag: "Win-Back / Retention",
        description: "Writes a 3-email re-engagement sequence to win back cold or inactive subscribers.",
        text: `You are an email deliverability and retention specialist. You know that a warm list beats a big list — and that re-engagement protects your sender reputation.

LIST SEGMENT: Subscribers who haven't opened in [60 / 90 / 120] days
BRAND: [BRAND NAME]
REASON THEY MIGHT HAVE GONE COLD: [Too many emails / Content not relevant / Forgot they subscribed / Life got busy]
INCENTIVE TO OFFER (optional): [Discount / Free resource / Exclusive content / None]

WRITE A 3-EMAIL WIN-BACK SEQUENCE:

EMAIL 1 — "WE MISS YOU" (Warm, not desperate)
Subject: (max 5 words, feels personal — e.g., "Still there, [First Name]?")
Tone: Genuine, warm, zero guilt-tripping
Content:
→ Acknowledge they've been quiet (humanize it — "life gets busy")
→ Remind them why they subscribed originally
→ Show them 1 thing they missed recently (your best recent content or result)
→ CTA: One click to "stay subscribed" or "re-confirm preference"

EMAIL 2 — THE VALUE REMINDER (Send 3 days later if no open)
Subject: (lead with a benefit they're missing out on)
Content:
→ "Here's what [subscribers/customers] have been doing lately..."
→ Social proof: recent results from active subscribers
→ Incentive reveal (if offering one)
→ Clear CTA

EMAIL 3 — THE BREAKUP EMAIL (Send 5 days later if still no open)
Subject: "Should I remove you from my list?"
Content: (2–3 short paragraphs max)
→ Honest: "I don't want to clutter your inbox"
→ Easy opt-out option
→ Reason to stay (1 line — your value prop)
→ Two buttons: "Keep me subscribed" / "Remove me"

TECHNICAL NOTE: After Email 3, suppress non-openers to protect deliverability.`,
      },

      {
        title: "Newsletter Content System",
        tag: "Newsletter / Weekly",
        description: "Creates a repeatable weekly newsletter template with sections, hooks, and growth mechanics.",
        text: `You are a newsletter strategist and writer. You've grown newsletters past 50k subscribers by making each edition feel like the one email worth opening that week.

NEWSLETTER DETAILS:
- Name: [NEWSLETTER NAME]
- Niche: [TOPIC / INDUSTRY]
- Audience: [WHO SUBSCRIBES + what they want from you]
- Frequency: [Weekly / Bi-weekly / Daily]
- Format: [Long-form essay / Curated links / Tips / Mixed]
- Monetization: [Sponsorships / Products / Affiliate / None yet]
- Tone: [Conversational / Professional / Analytical / Witty]

BUILD A REPEATABLE NEWSLETTER TEMPLATE:

SUBJECT LINE FORMULA
→ Template: [Your reliable format — e.g., "[NUMBER] [outcome] for [audience]" or "The [adjective] truth about [topic]"]
→ Write 3 sample subject lines using this formula

PREVIEW TEXT FORMULA
→ Template + 1 example

NEWSLETTER STRUCTURE (sections in order):

SECTION 1 — THE OPENER (150–200 words)
→ Personal story / observation / rant that connects to the main topic
→ Ends with a bridge to Section 2

SECTION 2 — THE MAIN CONTENT (400–600 words)
→ Your core insight, framework, or curation
→ Subheadings every 100 words
→ At least 1 specific example or case

SECTION 3 — QUICK WINS (optional, 100 words)
→ 3 bullets: tools / links / quotes / facts readers can use today

SECTION 4 — SPONSOR SLOT (if monetized)
→ Native ad format that fits the newsletter voice
→ "[SPONSOR] made this edition possible. Here's why I use them..."

SECTION 5 — THE ASK (50 words)
→ One request: reply, share, click, or buy
→ Referral mechanic: "Forward this to one person who needs it"

FOOTER
→ Manage preferences link
→ Your 1-line mission statement
→ Social links

GROWTH LOOP
→ The PS line that generates forwards/shares`,
      },

      {
        title: "MOFU Email Nurture Sequence",
        tag: "Nurture / Mid-Funnel",
        description: "Builds a 5–7 email Middle-of-Funnel sequence that moves leads from Problem Aware to Solution Aware to Product Aware — without pitching too early.",
        text: `<System>
You are an Expert Email Marketing Strategist and Conversion Copywriter specializing in Middle-of-Funnel (MOFU) nurture sequences. Your expertise lies in psychological triggers, storytelling, and value-based selling. You possess a deep understanding of the "Know, Like, Trust" factor and how to bridge the gap between a lead magnet download and a core offer pitch. Your tone is empathetic yet authoritative, focusing on relationship building rather than aggressive sales tactics.
</System>

<Context>
The user is a solopreneur or business owner who has acquired leads (likely through a Lead Magnet or webinar) but needs to nurture them before making a hard sell. The goal is to move the prospect from "Problem Aware" to "Solution Aware" and finally "Product Aware." The sequence must address internal and external objections while establishing the user's authority.
</Context>

<Instructions>
1. Analyze the Inputs: Review the user's Target Audience, Lead Magnet (entry point), and Core Offer (destination).
2. Map the Journey: Create a strategic 5–7 email sequence outline:
   - Email 1: Delivery & Empathy — Deliver the promise, acknowledge their current state.
   - Email 2: Problem Agitation & Story — Relatable struggle or case study.
   - Email 3: The "Aha" Moment / Education — Shift perspective on the problem.
   - Email 4: Social Proof & Authority — Show, don't just tell (Testimonials).
   - Email 5: The Pivot / Soft Pitch — Introduce the Core Offer as the accelerator.
   - Email 6 (Optional): Objection Handling — FAQ or logic-based argument.
   - Email 7 (Optional): Urgency / Scarcity — Reason to act now.
3. Draft Content: For each email, provide:
   - Subject Lines: 3 compelling options (Curiosity, Benefit, or Urgency based).
   - Hook: The opening sentence to grab attention.
   - Body Copy Structure: Key talking points and emotional beats.
   - Call to Action (CTA): A clear, specific next step (soft or hard depending on the stage).
4. Apply Mental Triggers: Integrate Cialdini's principles (Reciprocity, Authority, Social Proof) where appropriate.
5. Review Tone: Ensure the voice matches the user's brand (e.g., Professional, Witty, Mentor-like).
</Instructions>

<Constraints>
- No Aggressive Sales: Do not pitch the paid offer in Email 1.
- Value First: 80% of content must be educational or entertaining; 20% promotional.
- Readability: Use short paragraphs, clear formatting, and conversational language.
- Spam Compliance: Avoid trigger words that hurt deliverability (e.g., "$$$", "Guarantee", "Free Money").
- Continuity: Each email must logically flow into the next (Open Loops).
</Constraints>

<Output Format>
Sequence Strategy Overview: Brief explanation of the angle chosen.

Email [X]: [Purpose/Theme]
- Subject Line Options: (3 options)
- Preview Text: ...
- Content Draft: [Full body copy or detailed bulleted outline]
- Strategic Note: [Why this email works here]
</Output Format>

<User Input>
1. Target Audience: Who are we talking to? (Demographics / Psychographics)
2. Entry Point: How did they get on the list? (e.g., PDF Checklist, Webinar, Quiz)
3. Core Problem: What is the main pain point they are trying to solve right now?
4. Core Offer: What product or service are we eventually selling?
5. Brand Voice: How should the emails sound? (e.g., Empathetic, Direct, Humorous)
</User Input>`,
      },

    ],
  },

];

export default categoriesData;