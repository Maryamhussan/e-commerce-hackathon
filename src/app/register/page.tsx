import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#252B42]">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-[#737373]">
            Or{' '}
            <Link href="/login" className="font-medium text-[#23A6F0] hover:text-[#1a7bb3]">
              sign in to your existing account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] rounded-t-md focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] rounded-b-md focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-[#23A6F0] focus:ring-[#23A6F0] border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-[#737373]">
              I agree to the{' '}
              <Link href="#" className="text-[#23A6F0] hover:text-[#1a7bb3]">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[#2DC071] hover:bg-[#27a862] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2DC071]"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
