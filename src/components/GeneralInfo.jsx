/* This example requires Tailwind CSS v2.0+ */
import { CodeIcon, LightningBoltIcon, NewspaperIcon, PhoneIcon, SupportIcon, UserGroupIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const supportLinks = [
  {
    name: 'Takmičenje',
    description:
      'Ekipe imaju tačno 48 sati za izradu aplikacije. Predstavljanje rešenja će biti 27. septembra u 11 časova.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Ekipe',
    description:
      'Od svih prijavljenih ekipa ćemo izabrati 10 timova sa do pet članova. Odluku o izboru takmičarskih ekipa ćemo objaviti 22. septembra.',
    icon: UserGroupIcon,
  },
  {
    name: 'Tehnologija',
    description:
      'Po izboru takmičara.',
    icon: CodeIcon,
  },
]

export default function GeneralInfo() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="/images/team-hackathon.jpeg"
            layout="fill"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          Whois Onlajn Hakaton
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-gray-300">
          Takmiči se i izradi aplikaciju koja nudi odgovor o nacionalnim ali i svim drugim domenima na svetu.
          25 i 26. septembar - Prijavite se do 19. Septembra u 23:59h.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white shadow-xl rounded-2xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 bg-green-500 shadow-lg rounded-xl">
                  <link.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
            
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
