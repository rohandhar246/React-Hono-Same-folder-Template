import { useEffect, useState } from "react";

function App() {
  const [status, setstatus] = useState("");

  useEffect(() => {
    fetch("/api/status")
      .then((res) => res.json())
      .then((data) => setstatus(data));
  }, []);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/decorative-glowing-sparkle-dark-background-with-magical-effect_1017-56930.jpg?semt=ais_user_personalization&w=740&q=80)"
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Are you exited for{" "}
            <span className="text-blue-500 font-bold">CollabBoard</span> to
            publish as soon as possible? the is our waitlist subscibe to it to
            show your love 💙💙💙
          </p>
          <div className="pb-3">
            <label className="input validator">
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>

          <button className="btn bg-blue-600 hover:bg-blue-700">
            Join Now
          </button>
          <h3 className="mt-4 font-bold text-xl">Server Status: {status} </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
