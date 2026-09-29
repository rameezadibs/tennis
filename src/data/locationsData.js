/**
 * Locations Data Architecture for Lion Elite Tennis Academy
 * Structured as an expandable array for multi-location court bookings.
 */

export const locationsData = [
  {
    id: "al-jaddaf",
    number: "01",
    name: "Lion Elite Tennis Academy - Al Jaddaf",
    badge: "MAIN TRAINING LOCATION",
    venue: "Swiss International Scientific School in Dubai",
    address: "Dubai Healthcare City, Phase 2, Al Jaddaf, Dubai, United Arab Emirates.",
    shortAddress: "Al Jaddaf, Dubai, UAE",
    city: "Dubai",
    country: "UAE",
    area: "Al Jaddaf",
    subDistrict: "Dubai Healthcare City, Phase 2",
    courtBookingPrice: "150 AED",
    sport: "Tennis",
    coordinates: {
      lat: 25.2094,
      lng: 55.3327,
      display: "25°12'34\" N, 55°19'58\" E",
    },
    heroImage: "https://res.cloudinary.com/q5fz3r2n/image/upload/hero-court",
    facilityImage: "https://res.cloudinary.com/q5fz3r2n/image/upload/facility-courts",
    altTextHero: "Lion Elite championship tennis court under bright natural daylight in Dubai with modern architecture",
    altTextFacility: "Lion Elite premier tennis training facility with championship courts at Swiss International Scientific School Dubai",
    googleMapsUrl: "https://maps.app.goo.gl/hrLRsoCudoPXbSHV9?g_st=ac",
    embedMapUrl: "https://maps.google.com/maps?q=Swiss+International+Scientific+School+in+Dubai,+Al+Jaddaf,+Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed",
    description: "Find Lion Elite Tennis Academy at Swiss International Scientific School in Al Jaddaf, Dubai. Professional tennis coaching and court bookings available from 150 AED per session.",
    displayTags: [
      { label: "LOCATION", value: "AL JADDAF" },
      { label: "COURT BOOKING", value: "150 AED" },
      { label: "SPORT", value: "TENNIS" }
    ],
    contactPhone: "+971 55 276 6535",
    contactEmail: "lionelitetennis890@gmail.com",
    whatsappUrl: "https://wa.me/971552766535?text=Hello%20Lion%20Elite,%20I%20would%20like%20to%20book%20a%20tennis%20court%20at%20Al%20Jaddaf%20(150%20AED)."
  },
  {
    id: "business-bay",
    number: "02",
    name: "Lion Elite Tennis Academy - Business Bay",
    badge: "PREMIUM DOWNTOWN VENUE",
    venue: "Business Bay Tennis Courts",
    address: "Business Bay, Downtown Dubai, United Arab Emirates.",
    shortAddress: "Business Bay, Dubai, UAE",
    city: "Dubai",
    country: "UAE",
    area: "Business Bay",
    subDistrict: "Downtown Dubai",
    courtBookingPrice: "350 AED",
    sport: "Tennis",
    coordinates: {
      lat: 25.1857,
      lng: 55.2713,
      display: "25°11'08\" N, 55°16'16\" E",
    },
    heroImage: "https://res.cloudinary.com/q5fz3r2n/image/upload/hero-court",
    facilityImage: "https://res.cloudinary.com/q5fz3r2n/image/upload/facility-courts",
    altTextHero: "Lion Elite premium tennis court located at Business Bay Downtown Dubai",
    altTextFacility: "Luxury tennis court facility in Business Bay Dubai",
    googleMapsUrl: "https://maps.google.com/maps?q=Business+Bay,+Dubai",
    embedMapUrl: "https://maps.google.com/maps?q=Business+Bay,+Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed",
    description: "Book championship tennis courts at our Business Bay location in Downtown Dubai. Premium tennis court sessions available at 350 AED.",
    displayTags: [
      { label: "LOCATION", value: "BUSINESS BAY" },
      { label: "COURT BOOKING", value: "350 AED" },
      { label: "SPORT", value: "TENNIS" }
    ],
    contactPhone: "+971 55 276 6535",
    contactEmail: "lionelitetennis890@gmail.com",
    whatsappUrl: "https://wa.me/971552766535?text=Hello%20Lion%20Elite,%20I%20would%20like%20to%20book%20a%20tennis%20court%20at%20Business%20Bay%20(350%20AED)."
  }
];

export const getPrimaryLocation = () => locationsData[0];
