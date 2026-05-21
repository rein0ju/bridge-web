const categories = [
  { name: "All", count: 112, active: true },
  { name: "Free Talk", count: 42 },
  { name: "Anonymous", count: 18 },
  { name: "Info", count: 31 },
  { name: "Roommates", count: 14 },
  { name: "Internships", count: 7 },
];

const hotPosts = [
  {
    category: "Info",
    title: "I made a quick CPT application timeline",
    body: "I organized the steps from ISS document preparation to approval so students can see the full process in one place.",
    comments: 21,
    saves: 18,
    time: "Just now",
  },
  {
    category: "Roommates",
    title: "Is anyone looking for an August move-in roommate?",
    body: "I am thinking about a 2B2B near campus and would prefer someone with a quiet daily routine.",
    comments: 12,
    saves: 5,
    time: "12 min ago",
  },
  {
    category: "Free Talk",
    title: "What do people do in Madison during the summer?",
    body: "I am not taking summer classes, so I would love to find people for workouts, part-time jobs, or projects.",
    comments: 15,
    saves: 4,
    time: "28 min ago",
  },
  {
    category: "Internships",
    title: "Can F-1 students apply for this on-campus job?",
    body: "It is a campus position, but I am not sure about weekly hour limits or whether I can apply for an SSN.",
    comments: 9,
    saves: 11,
    time: "1 hour ago",
  },
];

const latestPosts = [
  {
    category: "Free Talk",
    title: "Is State St crowded today?",
    comments: 4,
  },
  {
    category: "Anonymous",
    title: "What should I do when my roommate and I have very different routines?",
    comments: 9,
  },
  {
    category: "Info",
    title: "Services you can use with SHIP insurance",
    comments: 6,
  },
  {
    category: "Roommates",
    title: "What should I check before signing a sublet agreement?",
    comments: 7,
  },
  {
    category: "Internships",
    title: "What can I do during summer break without CPT?",
    comments: 3,
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_30%),#f8fafc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white shadow-sm">
              B
            </div>
            <span className="text-2xl font-extrabold text-slate-900">
              Bridge
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-extrabold text-slate-500 md:flex">
            <a href="/community" className="text-blue-700">
              Community
            </a>
            <a href="/timetable" className="hover:text-slate-900">
              Timetable
            </a>
            <a href="/classrooms" className="hover:text-slate-900">
              Classrooms
            </a>
            <a href="/gpa" className="hover:text-slate-900">
              GPA Calculator
            </a>
            <a href="/campus-news" className="hover:text-slate-900">
              Campus News
            </a>
          </nav>

          <a
            href="/write"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Write a Post
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 overflow-hidden rounded-[2rem] bg-blue-700 p-8 text-white shadow-xl md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-blue-100">
                UW-Madison Community
              </p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
                Community Board
              </h1>
              <p className="mt-4 max-w-3xl text-blue-100">
                Students can post <span className="font-extrabold text-white">anonymously</span>,
                making it easier to ask both public questions and personal concerns.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <HeroStat number="112" label="Posts" />
              <HeroStat number="86" label="Comments" />
              <HeroStat number="Beta" label="Live" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr_300px]">
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <h2 className="text-lg font-extrabold">Boards</h2>
              <div className="mt-4 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                      category.active
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={category.active ? "text-blue-100" : "text-slate-400"}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-blue-600 p-5 text-white shadow-sm">
              <p className="text-sm font-bold text-blue-100">Beta Feedback</p>
              <h2 className="mt-1 text-xl font-extrabold">Collecting early user feedback</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                Students can suggest boards or features they want to see next.
              </p>
              <button className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-700">
                Send Feedback
              </button>
            </div>

          </aside>

          <section className="space-y-5">
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <span className="text-slate-400">⌕</span>
                <input
                  placeholder="Search CPT, roommates, CS 300, insurance"
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-blue-700">Popular Board</p>
                  <h2 className="text-2xl font-extrabold">Trending Posts</h2>
                </div>
                <a
                  href="/write"
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700"
                >
                  Write a Post
                </a>
              </div>

              <div className="space-y-3">
                {hotPosts.map((post) => (
                  <a
                    key={post.title}
                    href="/community/1"
                    className="block rounded-3xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-extrabold text-blue-700">
                        {post.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {post.time}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-extrabold text-slate-900">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {post.body}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs font-bold text-slate-400">
                      <span>Comments {post.comments}</span>
                      <span>Saves {post.saves}</span>
                      <span>Anonymous</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-extrabold">Latest Posts</h2>
                <span className="text-sm font-bold text-slate-400">
                  Updated just now
                </span>
              </div>

              <div className="space-y-3">
                {latestPosts.map((post) => (
                  <a
                    key={post.title}
                    href="/community/1"
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4 transition hover:bg-blue-50"
                  >
                    <div>
                      <p className="text-xs font-bold text-blue-700">
                        {post.category}
                      </p>
                      <h3 className="mt-1 font-extrabold text-slate-900">
                        {post.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      Comments {post.comments}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-blue-700">Popular Searches</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["CPT", "Roommates", "CS 300", "SHIP", "SSN", "Sublet"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-blue-100 hover:text-blue-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold text-blue-700">School Verification</p>
              <h2 className="mt-1 text-lg font-extrabold">@wisc.edu verification coming soon</h2>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                After school email verification, students will be able to join the UW-Madison board.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function HeroStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">
      <p className="text-2xl font-extrabold">{number}</p>
      <p className="mt-1 text-xs font-bold text-blue-100">{label}</p>
    </div>
  );
}
