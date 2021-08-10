import { AcademicCapIcon, AdjustmentsIcon, ClipboardListIcon, ClockIcon, CodeIcon, LightBulbIcon, LightningBoltIcon, UserGroupIcon } from "@heroicons/react/outline"

/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    icon: LightningBoltIcon,
    question: 'O Hakatonu',
    answer:
    `Hakaton je ekipno takmičenje tokom kojih timovi, u roku od 48 sati,  kreiraju aplikaciju na zadatu temu. Događaj će biti organizovan u onlajn formi, pa članovi timova mogu da rade iz udobnosti sopstvenog doma, sarađuju virtuelno ili u prostoru koji njima odgovara. Prva tri tima osvajaju jednu od novčanih nagrada, a za sve učesnika hakatona pripremamo i simbolične nagrade.`,
  },
  {
    icon: UserGroupIcon,
    question: 'Tim',
    answer:
    `Na hakatonu učestvuje 10 timova sa do 5 članova. Popunite prijavu i očekujte poziv ako je vaša ekipa jedna od 10 izabranih. Nismo postavili ograničenja - mogu da učestvuju i profesionalci i studenti, svi koji raspolažu sa dovoljno tehničkog znanja i volje da učestvuju na hakatonu.`,
  },
  {
    icon: LightBulbIcon,
    question: 'Tema',
    answer:
    `Pravimo aplikaciju koja vrši WHOIS pretrage, sa krajnjim ciljem da ponudi odgovor o svakom slobodnom ili registrovanom nazivu domena bez obzira na domenski prostor, a pre svega o nacionalnim .rs i .срб nazivima domena. Timovi dobijaju uputstva i precizno definisan zadatak na samom početku hakatona, 25. septembra u ponoć.`,
  },
  {
    icon: CodeIcon,
    question: 'Tehnologije',
    answer:
    `Takmičari sami biraju tehnologije i razvojno okruženje.`,
  },
  {
    icon: ClipboardListIcon,
    question: 'Kriterijumi',
    answer:
    `Žiri ocenjuje sledeće aspekte rešenja: kompletnost i relevantnost, UI/UX dizajn, kvalitet koda, skalabilnost i prezentaciju rešenja.`,
  },
  {
    icon: AcademicCapIcon,
    question: 'Ocenjivanje',
    answer:
    `O pobedničkoj ekipi odlučuje tročlani žiri nakon predstavljanja rešenja.`,
  },
  {
    icon: ClockIcon,
    question: 'Vreme izrade i resursi',
    answer:
    `Takmičarski deo hakatona traje 48 sati. Takmičari sami obezbeđuju opremu potrebnu za rad, organizator obezbeđuje kanale komunikacije za pitanja i praćenje progresa.`,
  },
]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Informacije o takmičenju</h2>
            <p className="mt-4 text-lg text-gray-500">
              Za dodatna pitanja možete se obratiti{' '}
              <a href="#" className="font-medium text-red-600 hover:text-red-500">
                našem timu
              </a>.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                    <faq.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{faq.question}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{faq.answer}</dd>
              </div>

              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
