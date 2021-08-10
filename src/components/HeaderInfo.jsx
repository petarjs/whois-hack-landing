import { ClockIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/outline"

/* This example requires Tailwind CSS v2.0+ */
export default function HeaderInfo() {
    return (
      <div className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Whois Onlajn Hakaton
            </h2>
            <p className="mt-3 text-xl text-gray-500 md:text-2xl sm:mt-4">
                Takmiči se i izradi aplikaciju koja nudi odgovor o nacionalnim ali i svim drugim domenima na svetu.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 " />
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Sati</dt>
                    <dd className="flex items-center justify-center order-1 text-5xl font-extrabold text-red-600">
                        <span className="w-12 mr-2">
                            <ClockIcon/>
                        </span>
                        <span>48</span>
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Timova</dt>
                    <dd className="flex items-center justify-center order-1 text-5xl font-extrabold text-red-600">
                        <span className="w-12 mr-2">
                            <UserGroupIcon/>
                        </span>
                        <span>10</span>
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Članova po timu</dt>
                    <dd className="flex items-center justify-center order-1 text-5xl font-extrabold text-red-600">
                        <span className="w-12 mr-2">
                            <UsersIcon/>
                        </span>
                        <span>5</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  