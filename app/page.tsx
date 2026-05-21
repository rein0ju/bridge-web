export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_top_right,#ede9fe,transparent_30%),#f8fafc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white shadow-sm">
              B
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Bridge
            </span>
          </a>

          <div className="flex items-center gap-3 text-sm">
            <a href="/login" className="font-semibold text-slate-600 hover:text-slate-900">
              Log In
            </a>
            <a
              href="/signup"
              className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-2 lg:py-10">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex flex-col lg:pt-8">
            <p className="mb-5 inline-flex w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Starting with UW-Madison international students
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Everything for
              <br />
              international
              <br />
              student life,
              <br />
              <span className="bg-gradient-to-r from-blue-700 to-violet-600 bg-clip-text text-transparent">
                Bridge
              </span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Timetables, anonymous posts, class reviews, roommates, internships, restaurants, and daily campus tips.
              <br />
              <span className="font-extrabold text-blue-700">Bridge</span> brings campus life, classes, housing, jobs, and student questions into one simple platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/signup"
                className="rounded-full bg-blue-600 px-8 py-4 text-center font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Start Bridge
              </a>
            </div>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              <TrustCard
                eyebrow="First Launch"
                title="UW-Madison"
                description="Starting with the international student community at our school."
              />
              <TrustCard
                eyebrow="School Verification"
                title=".edu Email"
                description="Join your campus board after verifying your school email."
              />
              <TrustCard
                eyebrow="Core Features"
                title="Timetable + Boards"
                description="Check classes, questions, roommates, and campus tips in one place."
              />
            </div>
          </div>
        </div>

        <div id="preview" className="space-y-5 pb-8">
          <PreviewPhone />
          <PreviewDashboard />
          <PreviewCommunity />
          <PreviewTimetable />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-blue-700 p-8 text-center text-white shadow-xl md:p-12">
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-violet-300/20 blur-2xl" />

          <div className="relative mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-blue-700 shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500" />
            Beta Now Open
          </div>

          <h2 className="relative mt-3 text-3xl font-extrabold md:text-5xl">
            Help build the UW-Madison
            <br />
            international student community.
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-blue-100">
            Bridge is currently a beta prototype before the official launch. The goal is to build useful features with early users and bring essential campus life information into one place.
          </p>

          <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/signup"
              className="inline-block rounded-full bg-white px-8 py-3 font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Join the Beta
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500">
        <div className="flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 md:flex-row">
          <p>© 2026 Bridge. A campus life community for international students in the U.S.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms of Use
            </a>
            <a href="#" className="hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PreviewPhone() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
      <div className="rounded-[1.5rem] bg-slate-50 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Bridge</p>
            <h2 className="text-lg font-bold">Today's Campus</h2>
          </div>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
            Verified
          </span>
        </div>

        <div className="mb-4 rounded-2xl bg-blue-600 p-4 text-white">
          <p className="text-xs text-blue-100">Next Class</p>
          <h3 className="mt-1 text-xl font-bold">LIS 201</h3>
          <p className="mt-1 text-sm text-blue-100">10:00 AM · Helen C. White Hall</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <MiniInfoCard title="Popular Post" value="When should I apply for CPT?" />
          <MiniInfoCard title="Roommate" value="Looking for August move-in" />
        </div>

        <div className="mt-3 space-y-3">
          <PreviewPost category="Visa / CPT / OPT" title="How long does a CPT application usually take?" />
          <PreviewPost category="Classes / Major" title="Is CS 300 manageable for international students?" />
          <PreviewPost category="Food / Campus Life" title="Any restaurant recommendations near Madison?" />
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 rounded-2xl bg-white p-2 text-center text-[11px] font-bold text-slate-500 shadow-sm">
          <div className="rounded-xl bg-blue-100 px-2 py-2 text-blue-700">Home</div>
          <div className="px-2 py-2">Board</div>
          <div className="px-2 py-2">Timetable</div>
          <div className="px-2 py-2">Profile</div>
        </div>
      </div>
    </div>
  );
}

function PreviewDashboard() {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-blue-700">Dashboard</p>
          <h3 className="mt-1 text-2xl font-extrabold">Student life at a glance</h3>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
          Home
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">Today's Class</p>
          <p className="mt-2 text-xl font-bold">STAT 240</p>
          <p className="mt-1 text-sm text-slate-500">2:30 PM · Van Vleck Hall</p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">Checklist</p>
          <p className="mt-2 text-xl font-bold">CPT Prep</p>
          <p className="mt-1 text-sm text-slate-500">Check application timeline</p>
        </div>
      </div>

      <div className="mt-5 h-40 rounded-2xl bg-slate-50 p-4">
        <div className="flex h-full items-end gap-4">
          <Bar label="A" height="35%" />
          <Bar label="AB" height="58%" />
          <Bar label="B" height="45%" />
          <Bar label="BC" height="75%" />
          <Bar label="C" height="68%" />
        </div>
      </div>
    </div>
  );
}

function PreviewCommunity() {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-blue-700">Community</p>
          <h3 className="mt-1 text-2xl font-extrabold">Community Preview</h3>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          Anonymous Available
        </span>
      </div>

      <div className="space-y-3">
        <BoardPreview category="Free Talk" title="Isn't campus so cold today?" comments={12} />
        <BoardPreview category="Anonymous Board" title="I have a lease issue with my roommate. Any advice?" comments={8} />
        <BoardPreview category="Info Board" title="Banks where you can open an account without an SSN" comments={21} />
        <BoardPreview category="Internship Board" title="Can F-1 students apply for this on-campus job?" comments={5} />
      </div>
    </div>
  );
}


function PreviewTimetable() {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-blue-700">Timetable</p>
          <h3 className="mt-1 text-2xl font-extrabold">My Timetable</h3>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
          Fall 2026
        </span>
      </div>

      <div className="grid grid-cols-5 gap-2 text-center text-xs font-bold text-slate-500">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
      </div>

      <div className="mt-3 grid h-80 grid-cols-5 gap-2">
        <ScheduleColumn>
          <ClassBlock className="mt-8 bg-blue-100 text-blue-800" code="CS 300" />
          <ClassBlock className="mt-16 bg-green-100 text-green-800" code="LIS 201" />
        </ScheduleColumn>
        <ScheduleColumn>
          <ClassBlock className="mt-20 bg-purple-100 text-purple-800" code="STAT 240" />
        </ScheduleColumn>
        <ScheduleColumn>
          <ClassBlock className="mt-8 bg-blue-100 text-blue-800" code="CS 300" />
          <ClassBlock className="mt-24 bg-amber-100 text-amber-800" code="GEOG 170" />
        </ScheduleColumn>
        <ScheduleColumn>
          <ClassBlock className="mt-20 bg-purple-100 text-purple-800" code="STAT 240" />
        </ScheduleColumn>
        <ScheduleColumn>
          <ClassBlock className="mt-14 bg-green-100 text-green-800" code="LIS 201" />
        </ScheduleColumn>
      </div>
    </div>
  );
}

function TrustCard({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white bg-white/80 p-4 text-left shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-bold text-blue-600">{eyebrow}</p>
      <p className="mt-1 text-lg font-extrabold text-slate-900">{title}</p>
      <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function MiniInfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm">
      <p className="text-xs font-semibold text-slate-500">{title}</p>
      <p className="mt-1 text-sm font-bold text-slate-800">{value}</p>
    </div>
  );
}

function PreviewPost({ category, title }: { category: string; title: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-blue-600">{category}</p>
        <p className="text-[11px] font-medium text-slate-400">Just now</p>
      </div>
      <p className="mt-1 text-sm font-semibold text-slate-800">“{title}”</p>
      <div className="mt-3 flex gap-2 text-[11px] font-medium text-slate-400">
        <span>Comments 8</span>
        <span>Saves 3</span>
      </div>
    </div>
  );
}

function Bar({ label, height }: { label: string; height: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-end gap-2">
      <div className="w-full rounded-t-xl bg-blue-400" style={{ height }} />
      <p className="text-xs font-bold text-slate-500">{label}</p>
    </div>
  );
}

function BoardPreview({
  category,
  title,
  comments,
}: {
  category: string;
  title: string;
  comments: number;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-bold text-blue-600">{category}</p>
        <p className="text-xs font-medium text-slate-400">Comments {comments}</p>
      </div>
      <p className="mt-2 font-semibold text-slate-800">{title}</p>
    </div>
  );
}



function ScheduleColumn({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl bg-slate-50 p-2">{children}</div>;
}

function ClassBlock({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  return (
    <div className={`rounded-xl p-2 text-center text-xs font-bold ${className}`}>
      {code}
    </div>
  );
}