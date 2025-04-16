export default function Newsletter() {
    return (
      <section className="bg-brand-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center gap-6">
          <h3 className="text-xl font-semibold flex-1">Subscribe to our newsletter</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 flex-[2]"
          >
            <input
              type="email"
              placeholder="Email"
              required
              className="flex-1 px-4 py-2 rounded text-black"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-brand-500 hover:bg-brand-400 rounded"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    );
  }
  