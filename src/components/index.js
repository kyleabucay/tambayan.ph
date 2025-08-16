export const allDorms = [
    {
        id: "1",
        name: "Xavier Residences",
        description: "Modern dormitory with complete amenities near Xavier University",
        price: "₱4,000 - ₱6,000",
        location: "Pueblo de Oro, Cagayan de Oro",
        imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
        isFavorite: false,
        tags: ["WiFi", "Laundry", "Security", "Study Area"]
    },
    {
        id: "2",
        name: "University Tower",
        description: "Affordable student housing with WiFi and clean study areas",
        price: "₱5,500 - ₱7,000",
        location: "Upper Balulang, Cagayan de Oro",
        imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
        isFavorite: true,
        tags: ["WiFi", "Laundry", "Security", "Study Area"]
    },
    {
        id: "3",
        name: "Blue Residences",
        description: "Students-only dorm with 24/7 security and laundry service",
        price: "₱3,000 - ₱5,000",
        location: "Fuente de Oro, Cagayan de Oro",
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        isFavorite: false,
        tags: ["WiFi", "Laundry", "Security", "Study Area"]
    },
    {
        id: "4",
        name: "Student Haven",
        description: "Budget-friendly dormitory with basic amenities",
        price: "₱4,000 - ₱6,000",
        location: "Lumbia, Cagayan de Oro",
        imageUrl:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        tags: ["Budget", "WiFi", "Near School"],
      },
      {
        id: "5",
        name: "Elite Student Residence",
        description: "Premium dormitory with gym and swimming pool",
        price: "₱12,000 - ₱18,000",
        location: "Manresa Avenue, Cagayan de Oro",
        imageUrl:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        tags: ["Premium", "Gym", "Pool", "Security"],
      },
      {
        id: "6",
        name: "Cozy Corner Dorm",
        description: "Small but comfortable rooms near Xavier University Senior High Campus",
        price: "₱5,000 - ₱7,000",
        location: "Manresa Avenue, Cagayan de Oro",
        imageUrl:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        tags: ["Near XUSHS", "Cozy", "WiFi"],
      },
]

export const allCarinderias = [
    {
      id: "1",
      name: "Aling Nena's Carinderia",
      description: "Student-friendly, home-cooked meals to make students feel at home",
      price: "₱60 - ₱100",
      location: "Macasandig, Cagayan de Oro",
      imageUrl:
        "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80",
      tags: ["Ulam", "Budget", "Home-cooked"],
    },
    {
      id: "2",
      name: "Kuya Ben's Lutong Bahay",
      description: "Affordable, high-quality silog meals and Filipino classics",
      price: "₱50 - ₱90",
      location: "Gaerlan St., Cagayan de Oro",
      imageUrl:
        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=80",
      tags: ["Silog", "Breakfast", "Filipino"],
    },
    {
      id: "3",
      name: "Ate Tata's Kainan",
      description: "Budget-friendly meals with vegetarian options",
      price: "₱45 - ₱85",
      location: "Velez St., Cagayan de Oro",
      imageUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      tags: ["Vegetarian", "Budget", "Healthy"],
    },
    {
      id: "4",
      name: "Tito's Merienda Corner",
      description: "Best merienda spot with fresh lumpia and halo-halo",
      price: "₱30 - ₱70",
      location: "Macanhan, Cagayan de Oro",
      imageUrl:
        "https://images.unsplash.com/photo-1536489885071-87983c3e2859?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Merienda", "Lumpia", "Halo-halo"],
    },
    {
      id: "5",
      name: "Nanay's Kitchen",
      description: "Traditional Filipino dishes like your mom used to make",
      price: "₱70 - ₱120",
      location: "Xavier Heights, Cagayan de Oro",
      imageUrl:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
      tags: ["Traditional", "Ulam", "Home-style"],
    },
    {
      id: "6",
      name: "Student's Choice Eatery",
      description: "Quick and affordable meals perfect for busy students",
      price: "₱40 - ₱80",
      location: "PN Roa St., Cagayan de Oro",
      imageUrl:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
      tags: ["Student-friendly", "Affordable"],
    },
]

const today = new Date()
const currentDate = today.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
})

export const mockDormitory = {
    id: "1",
    name: "Xavier Residences",
    description:
      "A comfortable dormitory located just 5 minutes away from major universities. Offers clean rooms with basic amenities and 24/7 security.",
    price: "₱4,000 - ₱6,000 / month",
    location: "Pueblo de Oro, Cagayan de Oro City",
    address: "1234 Monte Avenue, Pueblo de Oro, Cagayan de Oro City",
    contact: {
      phone: "+63 912 345 6789",
      email: "xavierresidences.dorm@edu.ph",
    },
    amenities: ["WiFi", "24/7 Security", "Study Area", "Laundry Service"],
    rules: ["No Smoking", "No Pets", "Curfew at 10PM", "No Visitors After 8PM"],
    gender: "Female Only",
    distance: "0.5km from Xavier University Senior High School",
    availability: `Available from ${currentDate}`,
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    ],
}

export const mockCarinderia = {
  id: "1",
  name: "Aling Nena's Carinderia",
  description: "Home-cooked Filipino meals at student-friendly prices. A popular spot for students craving affordable yet flavorful dishes.",
  price: "₱60 - ₱100 / meal",
  location: "Macasandig, Cagayan de Oro",
  address: "NVM Bldg, Tomas Saco St, Cagayan De Oro City, Misamis Oriental",
  contact: {
    phone: "+63 917 123 4567",
    email: "alingnena.carinderia@gmail.com",
  },
  menu: ["Adobo", "Sinigang", "Tinola", "Tortang Talong", "Pork BBQ"],
  tags: ["Ulam", "Budget", "Home-cooked", "Rice Meals"],
  distance: "300m from Corpus Christi School",
  availability: "Open Daily, 8:00 AM  - 9:00 PM",
  images: [
    "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80",
    "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&q=80",
    "https://images.unsplash.com/photo-1534596382981-1974b10d4e1a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};