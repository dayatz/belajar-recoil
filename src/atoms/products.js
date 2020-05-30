import { atom } from 'recoil'

export const productsState = atom({
  key: 'products',
  default: [
    {
      id: 1,
      nama: "Sepatu",
      gambarUrl: "https://ae01.alicdn.com/kf/H3ef6ba8f9c1142b4b3fdc88df8ac7835W/LARNMERN-Men-s-Work-Safety-Shoes-Steel-Toe-Construction-Sneaker-Breathable-Lightweight-Anti-smashing-Anti-static.jpg_640x640.jpg",
      harga: 100
    },
    {
      id: 2,
      nama: "Baju",
      gambarUrl: "https://ae01.alicdn.com/kf/He3e6c01b2fe74f60b17e428457d9291bx/Harajuku-T-Shirt-Unisex-Original-Naruto-Men-s-tshirt-Cool-Japanese-Anime-Funny-Printed-Short-Sleeve.jpg_640x640.jpg",
      harga: 13
    },
    {
      id: 3,
      nama: "Mouse",
      gambarUrl: "https://ae01.alicdn.com/kf/Hc78912bfa5d84d238a71a43217fe30b3b/Ergonomic-Wired-Gaming-Mouse-7-Button-LED-5500-DPI-USB-Computer-Mouse-Gamer-Mice-X7-Silent.jpg",
      harga: 32
    },
    {
      id: 4,
      nama: "Keyboard",
      gambarUrl: "https://ae01.alicdn.com/kf/HTB14DRAaUjrK1RkHFNRq6ySvpXar/Gaming-Mechanical-Keyboard-Blue-Red-Switch-87key-RU-US-Wired-Keyboard-Anti-ghosting-RGB-Mix-Backlit.jpg",
      harga: 38
    },
    {
      id: 5,
      nama: "iPhone",
      gambarUrl: "https://ae01.alicdn.com/kf/HTB1aXKpatfvK1RjSszhq6AcGFXaV/Unlocked-Apple-iPhone-6-add-gift-mobile-phone-4-7-inch-Dual-Core-16G-64G-128GB.jpg",
      harga: 299
    },
    {
      id: 6,
      nama: "PUBG Controller",
      gambarUrl: "https://ae01.alicdn.com/kf/H26250086d24843ebb3f30cec2d189338M/PUBG-Mobile-Joystick-Controller-Turnover-Button-Gamepad-for-PUBG-iOS-Android-Six-6-Finger-Operating-Gamepad.jpg",
      harga: 14
    }
  ]
})