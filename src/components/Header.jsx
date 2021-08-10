/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center h-screen bg-black bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <Image
          src="/images/symbol.svg"
          alt=""
          width="805px"
          height="345px"
          className="w-full"
        />
        <Image
          src="/images/whois.svg"
          alt=""
          width="805px"
          height="130px"
          className="w-full"
        />

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 mt-4 text-base font-medium text-white uppercase bg-red-600 border border-transparent rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Prijavi Ekipu
        </a>
      </header>
  )
}
