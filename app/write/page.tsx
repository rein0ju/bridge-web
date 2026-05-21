const categories = ["Free Talk", "Anonymous", "Info", "Roommates", "Internships"];

export default function WritePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_30%),#f8fafc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/community" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white shadow-sm">
              B
            </div>
            <span className="text-2xl font-extrabold text-slate-900">Bridge</span>
          </a>

          <a
            href="/community"
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-200"
          >
            Cancel
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-8 rounded-[2rem] bg-blue-700 p-8 text-white shadow-xl">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-blue-100">
            UW-Madison Community
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight">
            Write a New Post
          </h1>
          <p className="mt-4 max-w-2xl text-blue-100">
            You can post with your <span className="font-extrabold text-white">name hidden</span> or with a nickname.
            Share campus information, questions, or personal concerns in a safe space.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <form className="rounded-[2rem] bg-white p-6 shadow-sm">
            <div>
              <label className="text-sm font-extrabold text-slate-700">
                Choose a Board
              </label>
              <div className="mt-3 grid gap-2 sm:grid-cols-5">
                {categories.map((category, index) => (
                  <label
                    key={category}
                    className={`cursor-pointer rounded-2xl border px-4 py-3 text-center text-sm font-bold transition ${
                      index === 0
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      defaultChecked={index === 0}
                      className="sr-only"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-extrabold text-slate-700">
                Posting Type
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="cursor-pointer rounded-2xl border border-blue-600 bg-blue-50 p-4 transition hover:bg-blue-100">
                  <input
                    type="radio"
                    name="authorType"
                    value="anonymous"
                    defaultChecked
                    className="sr-only"
                  />
                  <p className="font-extrabold text-blue-700">Anonymous</p>
                  <p className="mt-1 text-xs leading-5 text-blue-600">
                    Good for questions that feel difficult to ask with your name shown.
                  </p>
                </label>

                <label className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50">
                  <input
                    type="radio"
                    name="authorType"
                    value="nickname"
                    className="sr-only"
                  />
                  <p className="font-extrabold text-slate-800">Nickname</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Use a nickname to connect more naturally with students from your school.
                  </p>
                </label>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-extrabold text-slate-700">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter a title"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            <div className="mt-6">
              <label className="text-sm font-extrabold text-slate-700">
                Content
              </label>
              <textarea
                placeholder="Write your question or information you want to share."
                rows={10}
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-4 text-sm font-medium leading-6 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <a
                href="/community"
                className="rounded-full bg-slate-100 px-6 py-3 text-center text-sm font-bold text-slate-600 transition hover:bg-slate-200"
              >
                Cancel
              </a>
              <a
                href="/community"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Post
              </a>
            </div>
          </form>

          <aside className="space-y-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-blue-700">Posting Guide</p>
              <ul className="mt-4 space-y-3 text-xs font-semibold leading-5 text-slate-600">
                <li>• Avoid sharing personal information.</li>
                <li>• Visa and tax information should be checked with official sources.</li>
                <li>• Reported posts may be reviewed by the admin team.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-blue-600 p-5 text-white shadow-sm">
              <p className="text-sm font-bold text-blue-100">Anonymous</p>
              <h2 className="mt-1 text-xl font-extrabold">Anonymous Posting Available</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                The author is not shown to users, but the system may keep a record for safe community management.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}