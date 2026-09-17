// Studio data. Edit captions, alt text, or add new items here without
// touching any page code. Add a new section later (e.g. "photography") by
// introducing a new exported array and rendering it in app/studio/page.tsx.

export type StudioMedia = {
  src: string;
  alt: string;
};

export type StudioPost = {
  slug: string;
  format: "Single post" | "Carousel";
  goal: string;
  tool: "Canva";
  language: "English" | "Spanish";
  media: StudioMedia[];
  width: number;
  height: number;
};

export type StudioVideo = {
  slug: string;
  format: "Reel";
  goal: string;
  tool: "CapCut";
  language: "English" | "Spanish";
  src: string;
  poster: string;
  alt: string;
  width: number;
  height: number;
};

export const studioPosts: StudioPost[] = [
  {
    slug: "ten-signs-elderly-parents",
    format: "Single post",
    goal: "Helping families recognize when a parent needs support",
    tool: "Canva",
    language: "English",
    width: 1600,
    height: 900,
    media: [
      {
        src: "/studio/posts/10-signs-elderly-parents.webp",
        alt: "Circular infographic listing ten signs an elderly parent may need help, from noticeable weight loss to resistance to help",
      },
    ],
  },
  {
    slug: "seven-stages-of-dementia",
    format: "Single post",
    goal: "Breaking down the stages of dementia in plain language",
    tool: "Canva",
    language: "English",
    width: 940,
    height: 788,
    media: [
      {
        src: "/studio/posts/seven-stages-of-dementia.webp",
        alt: "Infographic breaking dementia into seven stages, from normal function to needing full-time care",
      },
    ],
  },
  {
    slug: "fathers-day",
    format: "Single post",
    goal: "A Father's Day tribute to caregiving fathers",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/fathers-day.webp",
        alt: "A father and daughter embracing on a porch for a Father's Day tribute post",
      },
    ],
  },
  {
    slug: "paid-caregiver-benefit",
    format: "Single post",
    goal: "A paid-ad creative promoting the caregiver compensation program",
    tool: "Canva",
    language: "English",
    width: 940,
    height: 788,
    media: [
      {
        src: "/studio/posts/paid-caregiver-benefit.webp",
        alt: "A mother and son walking together, paired with a call to action about getting paid to care for a loved one",
      },
    ],
  },
  {
    slug: "client-testimonial-gloria",
    format: "Single post",
    goal: "A client testimonial on choosing home care over a nursing home",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1080,
    media: [
      {
        src: "/studio/posts/client-testimonial-gloria.webp",
        alt: "A mother and daughter smiling together next to a written testimonial about avoiding a nursing home",
      },
    ],
  },
  {
    slug: "team-quote-graham",
    format: "Single post",
    goal: "Introducing a care manager through his own words",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/team-quote-graham.webp",
        alt: "Headshot of a care manager next to a quote about helping a caregiver retire comfortably",
      },
    ],
  },
  {
    slug: "mothers-day",
    format: "Single post",
    goal: "A Mother's Day tribute to caregiving mothers",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/mothers-day.webp",
        alt: "Two women laughing together in a living room for a Mother's Day tribute post",
      },
    ],
  },
  {
    slug: "medication-management",
    format: "Single post",
    goal: "Five steps for managing a loved one's medications at home",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/medication-management.webp",
        alt: "Five numbered steps for managing an aging parent's medications at home",
      },
    ],
  },
  {
    slug: "memorial-day",
    format: "Single post",
    goal: "A Memorial Day observance post",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/memorial-day.webp",
        alt: "A patriotic star-and-stripes graphic marking Memorial Day",
      },
    ],
  },
  {
    slug: "nurses-week",
    format: "Single post",
    goal: "A Nurses Week appreciation post for caregivers",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/nurses-week.webp",
        alt: "A nurse checking on an older man at home, with a thank-you message for Nurses Week",
      },
    ],
  },
  {
    slug: "ohio-news-style-ad",
    format: "Single post",
    goal: "A news-style paid ad announcing a new Ohio caregiver program",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1920,
    media: [
      {
        src: "/studio/posts/ohio-news-style-ad.webp",
        alt: "A mock breaking-news graphic announcing a new Ohio program that pays family caregivers, with a phone number to call",
      },
    ],
  },
  {
    slug: "team-quote-skyler",
    format: "Single post",
    goal: "Introducing a registered nurse through her own words",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/team-quote-skyler.webp",
        alt: "Portrait of a registered nurse in an office, next to a quote about why she does this work",
      },
    ],
  },
  {
    slug: "client-testimonial-stephen",
    format: "Single post",
    goal: "A client testimonial on the impact of the caregiving program",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1080,
    media: [
      {
        src: "/studio/posts/client-testimonial-stephen.webp",
        alt: "An older man and his dog on a couch next to a quote calling the caregiving program great",
      },
    ],
  },
  {
    slug: "paid-caregiver-benefits-breakdown",
    format: "Single post",
    goal: "Explaining the benefits of paid family caregiving for both sides",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/paid-caregiver-benefits-breakdown.webp",
        alt: "A two-column infographic comparing benefits for the person under care and benefits for the caregiver",
      },
    ],
  },
  {
    slug: "you-already-care",
    format: "Single post",
    goal: "A direct-response post inviting caregivers to get paid for the care they already give",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/you-already-care.webp",
        alt: "An older couple embracing in their kitchen, paired with a message about getting paid for caregiving you already do",
      },
    ],
  },
  {
    slug: "rosalynn-carter-quote",
    format: "Single post",
    goal: "Framing caregiving as a universal experience with a well-known quote",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      {
        src: "/studio/posts/rosalynn-carter-quote.webp",
        alt: "A black-and-white photo of former First Lady Rosalynn Carter next to her quote about the four kinds of people in the world",
      },
    ],
  },
  {
    slug: "caregiving-facts",
    format: "Carousel",
    goal: "Surprising statistics to build awareness around unpaid caregiving",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      { src: "/studio/posts/caregiving-facts/slide-1.webp", alt: "Cover slide for a carousel titled 5 Caregiving Facts That'll Surprise You, over a close-up of hands holding" },
      { src: "/studio/posts/caregiving-facts/slide-2.webp", alt: "Fact 1: over 57 million Americans provide unpaid care to a loved one" },
      { src: "/studio/posts/caregiving-facts/slide-3.webp", alt: "Fact 2: unpaid caregiving in the US is worth an estimated $470 billion a year" },
      { src: "/studio/posts/caregiving-facts/slide-4.webp", alt: "Fact 3: one in four caregivers spends over 41 hours a week giving care" },
      { src: "/studio/posts/caregiving-facts/slide-5.webp", alt: "Fact 4: 75 percent of caregivers are women, who spend 50 percent more time caregiving than men" },
      { src: "/studio/posts/caregiving-facts/slide-6.webp", alt: "Fact 5: 43 percent of caregivers perform medical or nursing tasks without formal training" },
      { src: "/studio/posts/caregiving-facts/slide-7.webp", alt: "Closing slide encouraging viewers to share the post and let a caregiver know they're not alone" },
    ],
  },
  {
    slug: "caregiver-faqs",
    format: "Carousel",
    goal: "Answering the most common questions about qualifying as a paid caregiver",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      { src: "/studio/posts/caregiver-faqs/slide-1.webp", alt: "Cover slide for a Caregiver FAQs carousel with a search bar graphic" },
      { src: "/studio/posts/caregiver-faqs/slide-2.webp", alt: "FAQ: am I a caregiver? Yes, if you help a loved one with daily tasks like eating, bathing, and dressing" },
      { src: "/studio/posts/caregiver-faqs/slide-3.webp", alt: "FAQ: can I really be compensated for caring for a family member? Yes, up to $2,500 a month depending on state and care level" },
      { src: "/studio/posts/caregiver-faqs/slide-4.webp", alt: "FAQ: what are the main requirements to qualify as a caregiver, including being 18 and providing daily care" },
      { src: "/studio/posts/caregiver-faqs/slide-5.webp", alt: "FAQ: what if the person I'm caring for isn't on Medicaid? Free guidance through the application" },
      { src: "/studio/posts/caregiver-faqs/slide-6.webp", alt: "FAQ: wondering if you qualify for the program if the person you care for is on Medicaid" },
      { src: "/studio/posts/caregiver-faqs/slide-7.webp", alt: "FAQ: which caregiving tasks qualify for compensation, from bathing to transportation" },
      { src: "/studio/posts/caregiver-faqs/slide-8.webp", alt: "FAQ: what are the benefits of being a paid family caregiver, for both the caregiver and the person under care" },
      { src: "/studio/posts/caregiver-faqs/slide-9.webp", alt: "Closing slide inviting followers to drop any other questions in the comments" },
    ],
  },
  {
    slug: "alzheimers-awareness-month",
    format: "Carousel",
    goal: "Early signs of Alzheimer's for Awareness Month",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      { src: "/studio/posts/alzheimers-awareness-month/slide-1.webp", alt: "Cover slide announcing June is Alzheimer's Awareness Month, with a tangled-thoughts head icon" },
      { src: "/studio/posts/alzheimers-awareness-month/slide-2.webp", alt: "Early sign 1: memory loss that disrupts daily life, like forgetting recently learned information" },
      { src: "/studio/posts/alzheimers-awareness-month/slide-3.webp", alt: "Early sign 2: difficulty planning or solving problems, like following a recipe or keeping track of bills" },
      { src: "/studio/posts/alzheimers-awareness-month/slide-4.webp", alt: "Early sign 3: challenges completing familiar tasks, like forgetting how to drive to a known location" },
      { src: "/studio/posts/alzheimers-awareness-month/slide-5.webp", alt: "Early sign 4: confusion with time or place, like losing track of dates or where they are" },
      { src: "/studio/posts/alzheimers-awareness-month/slide-6.webp", alt: "Early sign 5: mood and personality changes, like becoming confused, suspicious, or depressed" },
      { src: "/studio/posts/alzheimers-awareness-month/slide-7.webp", alt: "Closing slide about how patience, presence, and love make a difference for someone with Alzheimer's" },
    ],
  },
  {
    slug: "client-testimonial-reviews",
    format: "Carousel",
    goal: "Real client reviews of the caregiver program",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      { src: "/studio/posts/client-testimonial-reviews/slide-1.webp", alt: "A five-star review from a client in New Bedford, Massachusetts, about feeling supported by the program" },
      { src: "/studio/posts/client-testimonial-reviews/slide-2.webp", alt: "A five-star review from a client in Taunton, Massachusetts, praising the staff and application process" },
      { src: "/studio/posts/client-testimonial-reviews/slide-3.webp", alt: "A five-star review from a client in Marshfield, Massachusetts, about an easy and efficient process" },
    ],
  },
  {
    slug: "invisible-work-of-caregiving",
    format: "Carousel",
    goal: "Naming the emotional side of caregiving that rarely gets discussed",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      { src: "/studio/posts/invisible-work-of-caregiving/slide-1.webp", alt: "Cover slide, the side of caregiving no one talks about, over a photo of a mother and daughter embracing" },
      { src: "/studio/posts/invisible-work-of-caregiving/slide-2.webp", alt: "Some days you'll feel invisible, over a photo of a man and his dog at home" },
      { src: "/studio/posts/invisible-work-of-caregiving/slide-3.webp", alt: "You'll grieve the life you had and the person they used to be, over a photo of a man walking his dog by the water" },
      { src: "/studio/posts/invisible-work-of-caregiving/slide-4.webp", alt: "You'll love harder, deeper, and fiercer than you ever thought possible, over a photo of a man resting with his dog" },
      { src: "/studio/posts/invisible-work-of-caregiving/slide-5.webp", alt: "And yet, over a photo of a man waving from a balcony to family below" },
      { src: "/studio/posts/invisible-work-of-caregiving/slide-6.webp", alt: "Closing slide: that's caregiving, even if it feels small it matters, over a photo of a father and daughter on a porch" },
    ],
  },
  {
    slug: "why-families-love-us",
    format: "Carousel",
    goal: "Reasons families choose the caregiver program",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      { src: "/studio/posts/why-families-love-us/slide-1.webp", alt: "Cover slide, why caregivers and families love the program, over a photo of a woman helping an older man walk on a porch" },
      { src: "/studio/posts/why-families-love-us/slide-2.webp", alt: "No paperwork headaches, over a photo of two women reviewing enrollment forms at a kitchen table" },
      { src: "/studio/posts/why-families-love-us/slide-3.webp", alt: "Clear answers from real people, over a photo of three people talking on a window seat" },
      { src: "/studio/posts/why-families-love-us/slide-4.webp", alt: "Support that doesn't stop, from first call to latest renewal, over a photo of a nurse checking an older man's heartbeat" },
    ],
  },
  {
    slug: "hidden-caregiver-carousel",
    format: "Carousel",
    goal: "Helping people recognize themselves as caregivers",
    tool: "Canva",
    language: "English",
    width: 1080,
    height: 1350,
    media: [
      { src: "/studio/posts/hidden-caregiver-carousel/slide-1.webp", alt: "Cover slide, you might be a caregiver and not even know it, over a photo of a woman helping an older man down porch steps" },
      { src: "/studio/posts/hidden-caregiver-carousel/slide-2.webp", alt: "Do you live with, remind, cook for, dress, drive, or emotionally support a loved one? A list of overlooked caregiving tasks" },
      { src: "/studio/posts/hidden-caregiver-carousel/slide-3.webp", alt: "Closing slide, that's caregiving, even if it feels small it matters, over a photo of a father and daughter embracing on a porch" },
      { src: "/studio/posts/hidden-caregiver-carousel/slide-4.webp", alt: "And yes, you might even get paid for it, with a link to check eligibility" },
    ],
  },
];

export const studioVideos: StudioVideo[] = [
  {
    slug: "brand-intro",
    format: "Reel",
    goal: "A short brand intro card used to open testimonial videos",
    tool: "CapCut",
    language: "English",
    src: "/studio/video/brand-intro.mp4",
    poster: "/studio/video/brand-intro-poster.jpg",
    alt: "Animated logo card used to open a testimonial video",
    width: 720,
    height: 1280,
  },
  {
    slug: "caregiver-reminder",
    format: "Reel",
    goal: "A reminder message to caregivers who put everyone else first",
    tool: "CapCut",
    language: "English",
    src: "/studio/video/caregiver-reminder.mp4",
    poster: "/studio/video/caregiver-reminder-poster.jpg",
    alt: "A quiet river and trees, with a message to every woman caring for everyone but herself",
    width: 720,
    height: 1280,
  },
  {
    slug: "ohio-office-visit",
    format: "Reel",
    goal: "A quick travel update visiting the Ohio office",
    tool: "CapCut",
    language: "English",
    src: "/studio/video/ohio-office-visit.mp4",
    poster: "/studio/video/ohio-office-visit-poster.jpg",
    alt: "An airport terminal with a caption about visiting the Ohio office",
    width: 720,
    height: 1280,
  },
  {
    slug: "bts-meet-the-care-team",
    format: "Reel",
    goal: "Behind the scenes on a video shoot introducing the care team",
    tool: "CapCut",
    language: "English",
    src: "/studio/video/bts-meet-the-care-team.mp4",
    poster: "/studio/video/bts-meet-the-care-team-poster.jpg",
    alt: "A film slate for a Meet the Care Team video shoot, held up by a crew member on set",
    width: 720,
    height: 1280,
  },
  {
    slug: "bts-testimonial-intro",
    format: "Reel",
    goal: "Behind the scenes introducing a client testimonial shoot",
    tool: "CapCut",
    language: "English",
    src: "/studio/video/bts-testimonial-intro.mp4",
    poster: "/studio/video/bts-testimonial-intro-poster.jpg",
    alt: "Two team members sitting on porch steps introducing a testimonial video shoot",
    width: 720,
    height: 1280,
  },
  {
    slug: "bts-with-pets",
    format: "Reel",
    goal: "A lighthearted behind-the-scenes moment from a caregiver story shoot",
    tool: "CapCut",
    language: "English",
    src: "/studio/video/bts-with-pets.mp4",
    poster: "/studio/video/bts-with-pets-poster.jpg",
    alt: "A large dog investigating camera equipment during a video shoot, with a caption naming the pets on set",
    width: 720,
    height: 1280,
  },
  {
    slug: "bts-testimonial-pov",
    format: "Reel",
    goal: "A behind-the-scenes moment poking fun at filming a serious testimony",
    tool: "CapCut",
    language: "English",
    src: "/studio/video/bts-testimonial-pov.mp4",
    poster: "/studio/video/bts-testimonial-pov-poster.jpg",
    alt: "Two people at an outdoor table joking about filming a serious caregiver testimony",
    width: 720,
    height: 1280,
  },
];
