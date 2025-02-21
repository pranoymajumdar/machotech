export const contantInfo = {
    phone: "08048984333",
    email: "contact@example.com",
    address: "123 Main St, Anytown, USA",
    gst: "23AABCI2856A1Z5",
}

export const BASE_API_URL = "http://localhost:3000"
// export const BASE_API_URL = "https://api.mecotech.in"

export interface Category {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  }