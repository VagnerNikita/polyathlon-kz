export default function Subscribe() {
    return (
      <form className="flex gap-3">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-3 py-2 text-sm w-56"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded text-sm">
          SUBSCRIBE
        </button>
      </form>
    );
  }
  