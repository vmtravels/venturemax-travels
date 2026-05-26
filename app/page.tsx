export default function TasmaniaTourPromoPage() {
  const testimonials = [
    {
      name: "Emily & Jason",
      review:
        "Amazing Tasmania experience! The itinerary was perfectly organised and the scenery was unforgettable.",
    },
    {
      name: "王小姐",
      review:
        "導遊非常專業又親切，整個旅程非常輕鬆愉快，下次還會再來塔州。",
    },
    {
      name: "Airbnb Guest",
      review:
        "The house is very peaceful yet close to the city. We walked to Salamanca Market in about 30 minutes and to a nearby pub for dinner in around 20 minutes. The house was clean, comfortable, and perfect for our Tasmania stay.",
    },
  ];
  const accommodations = [
    {
      name: "Luxury Hobart Waterfront Stay",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      description:
        "Modern waterfront accommodation with stunning harbour views.",
      link: "https://www.booking.com",
    },
    {
      name: "Stylish 3-Bedroom Townhouse",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      description:
        "Premium Tasmania accommodation perfect for couples, families, and Tasmania road trips.",
      link: "https://www.airbnb.com.au/rooms/883806796100378896?adults=3&search_mode=regular_search&source_impression_id=p3_1779689372_P3SRjWPeF0s1de5v&previous_page_section_name=1000&federated_search_id=b7ec1969-44d5-4dad-a972-6be537d2a280&guests=1",
    },
  ];

  const tours = [
    {
      title: "Classic 4-Day Hobart Tour",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Explore Hobart, Bruny Island, Port Arthur, and the stunning Wineglass Bay.",
    },
    {
      title: "Bruny Island Gourmet Experience",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      description:
        "Fresh oysters, artisan cheese, breathtaking coastal scenery, and wildlife.",
    },
    {
      title: "Port Arthur & Tasman Peninsula",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Discover Tasmania’s dramatic coastline and famous historic convict site.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              VentureMax Travels
            </h1>
            <p className="text-sm text-gray-300">Tasmania Luxury Tours</p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#tours" className="transition hover:text-gray-300">
              Tours
            </a>
            <a href="#stay" className="transition hover:text-gray-300">
              Accommodation
            </a>
            <a href="#reviews" className="transition hover:text-gray-300">
              Reviews
            </a>
            <a href="#contact" className="transition hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section
        className="relative flex h-[100vh] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute right-6 top-6 z-20 flex gap-3">
          <button className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow-lg">
            ENGLISH
          </button>
          <button className="rounded-full bg-black/80 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            繁體中文
          </button>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <div className="mb-6 space-y-3">
            <h1 className="text-5xl font-bold md:text-7xl">
              Discover Tasmania
            </h1>
            <h2 className="text-3xl font-semibold md:text-5xl">
              探索塔斯馬尼亞
            </h2>
          </div>
          <div className="mb-8 max-w-3xl space-y-3 text-lg md:text-2xl">
            <p>
              Premium small-group tours, unforgettable landscapes, and authentic
              Tasmanian experiences.
            </p>
            <p>
              精品小團旅行、壯麗自然風景與最道地的塔州體驗。
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black shadow-2xl transition hover:scale-105">
              Explore Tours
            </button>

            <a
              href="https://wa.me/61402571386"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop"
            alt="Tasmania"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="mb-6 text-4xl font-bold">Why Travel With Us?</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              We specialise in personalised Tasmania tours designed for
              international visitors, families, couples, and small groups.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              From gourmet food experiences to breathtaking national parks, we
              help you experience the best of Tasmania comfortably and
              stress-free.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gray-100 p-5 shadow-sm">
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-gray-600">Happy Guests</p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-5 shadow-sm">
                <h3 className="text-2xl font-bold">4.9★</h3>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Banner */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-black text-white shadow-2xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="p-10 md:p-16">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
                Luxury Tasmania Experience
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Tailor-Made Private Tours Across Tasmania
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                Exclusive itineraries, boutique accommodation, gourmet food,
                wildlife encounters, and unforgettable scenic journeys.
              </p>

              <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
                Plan Your Trip
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury Tasmania"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tours" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Popular Tours</h2>
            <p className="text-lg text-gray-600">
              Carefully designed Tasmania travel experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {tours.map((tour, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-semibold">{tour.title}</h3>
                  <p className="mb-6 text-gray-600">{tour.description}</p>

                  <button className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="stay" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Accommodation Booking ｜ 民宿預訂
            </h2>
            <p className="text-lg text-gray-600">
              Carefully selected Tasmania stays for your perfect holiday.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {accommodations.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-semibold">{item.name}</h3>
                  <p className="mb-6 text-gray-600">{item.description}</p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-2xl bg-black px-6 py-3 text-white transition hover:opacity-90"
                  >
                    Book Now ｜ 立即預訂
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Guest Reviews ｜ 客人評價</h2>
            <p className="text-lg text-gray-600">
              Real experiences from our lovely guests.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-gray-50 p-8 shadow-lg"
              >
                <div className="mb-4 text-3xl">★★★★★</div>
                <p className="mb-6 leading-relaxed text-gray-700">
                  “{item.review}”
                </p>
                <h3 className="font-semibold">— {item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/61402571386"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-5 text-white shadow-2xl transition hover:scale-110"
      >
        <span className="text-2xl">💬</span>
      </a>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="mb-4 text-4xl font-bold">Start Your Tasmania Journey</h2>
        <p className="mb-8 text-lg text-gray-600">
          Contact us today for customised itineraries and private tours.
        </p>

        <div className="mx-auto max-w-xl rounded-3xl bg-gray-100 p-8 shadow-lg">
          <div className="space-y-4 text-lg">
            <p>📧 Email: Info@venturemaxtravels.com</p>
            <p>📱 WhatsApp: +61 402 571 386</p>
            <p>📍 Hobart, Tasmania</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-white">
        <div className="mb-4 flex justify-center gap-6 text-sm text-gray-400">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Xiaohongshu</a>
        </div>
        <p>© 2026 VentureMax Travels. All rights reserved.</p>
      </footer>
    </div>
  );
}
