export const featuredDorms = [
    {
        id: "1",
        name: "Xavier Residences",
        description: "Modern dormitory with complete amenities near Xavier University",
        price: "₱4,000 - ₱6,000",
        location: "Pueblo de Oro, Cagayan de Oro",
        imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
        isFavorite: false
    },
    {
        id: "2",
        name: "University Tower",
        description: "Affordable student housing with WiFi and clean study areas",
        price: "₱5,500 - ₱7,000",
        location: "Upper Balulang, Cagayan de Oro",
        imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
        isFavorite: true
    },
    {
        id: "3",
        name: "Blue Residences",
        description: "Students-only dorm with 24/7 security and laundry service",
        price: "₱3,000 - ₱5,000",
        location: "Fuente de Oro, Cagayan de Oro",
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        isFavorite: false
    }
]

export const featuredCarinderias = [
    {
        id: "1",
        name: "Aling Nena's Carinderia",
        description: "Home-cooked Filipino meals at student-friendly prices",
        price: "₱60 - ₱100",
        location: "España Boulevard, Manila",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80",
        isFavorite: true,
    },
    {
        id: "2",
        name: "Kuya Ben's Lutong Bahay",
        description: "Affordable silog meals and Filipino classics",
        price: "₱50 - ₱90",
        location: "P. Noval St, Manila",
        image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=80",
        isFavorite: false,
    },
    {
        id: "3",
        name: "Ate Lorna's Eatery",
        description: "Budget-friendly meals with vegetarian options",
        price: "₱45 - ₱85",
        location: "Kalayaan Avenue, Quezon City",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        isFavorite: false,
    }
]

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
        location: "España Boulevard, Manila",
        imageUrl:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        tags: ["Budget", "WiFi", "Near School"],
      },
      {
        id: "5",
        name: "Elite Student Residence",
        description: "Premium dormitory with gym and swimming pool",
        price: "₱12,000 - ₱18,000",
        location: "BGC, Taguig",
        imageUrl:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        tags: ["Premium", "Gym", "Pool", "Security"],
      },
      {
        id: "6",
        name: "Cozy Corner Dorm",
        description: "Small but comfortable rooms near UP Diliman",
        price: "₱5,000 - ₱7,000",
        location: "Diliman, Quezon City",
        imageUrl:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        tags: ["Near UP", "Cozy", "WiFi"],
      },
]

// export const allCarinderias 

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
    distance: "0.5km from University",
    availability: "Available from June 1, 2025",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    ],
}