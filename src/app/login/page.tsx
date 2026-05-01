import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#252B42]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-[#737373]">
            Or{' '}
            <Link href="/register" className="font-medium text-[#23A6F0] hover:text-[#1a7bb3]">
              register for a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] rounded-t-md focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] focus:z-10 sm:text-sm"
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
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] rounded-b-md focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#23A6F0] focus:ring-[#23A6F0] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#737373]">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="/register" className="font-medium text-[#23A6F0] hover:text-[#1a7bb3]">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[#23A6F0] hover:bg-[#1a7bb3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23A6F0]"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
