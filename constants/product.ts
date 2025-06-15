const PHOTO_SIZE = {
  width: 300,
  height: 250
};

export const PRODUCTS = ref([
  {
    id: 1,
    name: 'MacBook Air Pro',
    summary: 'Powerful laptop with M2 chip and all-day battery life. Perfect for professionals and creatives who need performance on the go.',
    description: 'The MacBook Air Pro represents the pinnacle of portable computing, featuring Apple\'s revolutionary M2 chip that delivers exceptional performance while maintaining incredible energy efficiency. With up to 18 hours of battery life, this laptop is designed for professionals, students, and creatives who demand uncompromising performance without being tethered to a power outlet. The stunning Retina display with True Tone technology ensures colors are vibrant and accurate, making it perfect for photo editing, video work, and everyday tasks. The fanless design keeps the laptop completely silent while the aluminum unibody construction provides durability and a premium feel.',
    price: 1299.99,
    rating: 4.8,
    category: 'electronics',
    photo: getRandomPhoto(1, PHOTO_SIZE)
  },
  {
    id: 2,
    name: 'Desk Lamp',
    summary: 'Adjustable LED desk lamp with multiple brightness levels. Features modern design with energy-efficient lighting technology.',
    description: 'This contemporary desk lamp combines form and function to create the perfect lighting solution for your workspace. Featuring advanced LED technology, it offers multiple brightness levels and color temperature settings to reduce eye strain during long work sessions. The adjustable arm and head allow you to direct light exactly where you need it, while the sleek aluminum construction adds a modern touch to any office or home setup. The energy-efficient LEDs last up to 50,000 hours and consume 80% less energy than traditional bulbs, making this lamp both environmentally friendly and cost-effective.',
    price: 89.99,
    rating: 4.3,
    category: 'furniture',
    photo: getRandomPhoto(2, PHOTO_SIZE)
  },
  {
    id: 3,
    name: 'Coffee Table',
    summary: 'Modern glass top coffee table with steel frame. Combines contemporary style with practical functionality for living spaces.',
    description: 'Elevate your living room with this stunning contemporary coffee table that perfectly balances style and functionality. The tempered glass top provides a spacious surface for books, magazines, and beverages while the powder-coated steel frame ensures exceptional durability and stability. The minimalist design complements both modern and traditional decor styles, making it a versatile addition to any home. The glass surface is easy to clean and maintain, while the open design creates an illusion of more space in smaller rooms. Assembly is straightforward with all necessary hardware included.',
    price: 199.99,
    rating: 4.5,
    category: 'furniture',
    photo: getRandomPhoto(3, PHOTO_SIZE)
  },
  {
    id: 4,
    name: 'Bookshelf',
    summary: 'Wooden bookshelf with 5 shelves and modern design. Crafted from sustainable materials with excellent storage capacity.',
    description: 'This elegant 5-shelf bookcase combines traditional craftsmanship with contemporary design to create a storage solution that\'s both beautiful and functional. Constructed from sustainably sourced solid wood with a rich finish that highlights the natural grain patterns, this bookshelf adds warmth and character to any room. Each shelf can hold up to 30 pounds, providing ample space for books, decorative items, and personal collections. The timeless design ensures it will remain stylish for years to come, while the sturdy construction guarantees long-lasting durability. Easy assembly with clear instructions and all hardware included.',
    price: 159.99,
    rating: 4.2,
    category: 'furniture',
    photo: getRandomPhoto(4, PHOTO_SIZE)
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    summary: 'Ergonomic wireless mouse with USB receiver and long battery life. Designed for comfort during extended computer use.',
    description: 'Experience ultimate comfort and precision with this ergonomically designed wireless mouse that\'s perfect for both work and gaming. The contoured shape fits naturally in your hand, reducing strain during extended use, while the high-precision optical sensor ensures smooth, accurate tracking on virtually any surface. With a battery life of up to 12 months on a single AA battery, you can work uninterrupted without frequent battery changes. The reliable 2.4GHz wireless connection provides a range of up to 30 feet, and the plug-and-play USB receiver means instant setup without software installation.',
    price: 49.99,
    rating: 4.4,
    category: 'electronics',
    photo: getRandomPhoto(5, PHOTO_SIZE)
  },
  {
    id: 6,
    name: 'Office Chair',
    summary: 'Comfortable ergonomic office chair with lumbar support. Features adjustable height and premium cushioning for all-day comfort.',
    description: 'Transform your workspace with this premium ergonomic office chair designed to support your body during long work sessions. The built-in lumbar support maintains the natural curve of your spine, while the high-density foam cushioning provides exceptional comfort without losing its shape over time. The pneumatic height adjustment allows you to find the perfect seating position, and the 360-degree swivel base with smooth-rolling casters provides excellent mobility. The breathable mesh backrest promotes airflow to keep you cool, while the durable construction supports users up to 250 pounds with a 5-year warranty for peace of mind.',
    price: 249.99,
    rating: 4.6,
    category: 'furniture',
    photo: getRandomPhoto(6, PHOTO_SIZE)
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    summary: 'Portable wireless speaker with excellent sound quality. Waterproof design perfect for indoor and outdoor use.',
    description: 'Enjoy your favorite music anywhere with this powerful portable Bluetooth speaker that delivers rich, room-filling sound despite its compact size. The advanced audio drivers and passive radiators produce deep bass and crystal-clear highs, while the 360-degree sound design ensures everyone can enjoy the music regardless of their position. With IPX7 waterproof rating, it\'s perfect for pool parties, beach trips, or outdoor adventures. The 20-hour battery life means the music never stops, and the built-in microphone allows for hands-free calls. Quick pairing with any Bluetooth device and a range of up to 100 feet provides ultimate convenience.',
    price: 79.99,
    rating: 4.7,
    category: 'electronics',
    photo: getRandomPhoto(7, PHOTO_SIZE)
  },
  {
    id: 8,
    name: 'Standing Desk',
    summary: 'Height adjustable standing desk for better productivity. Electric motor allows smooth transition between sitting and standing positions.',
    description: 'Revolutionize your work routine with this premium electric standing desk that seamlessly transitions between sitting and standing positions at the touch of a button. The powerful dual-motor system ensures smooth, quiet operation while supporting up to 220 pounds of weight. The spacious desktop surface accommodates multiple monitors, laptops, and office accessories, while the programmable memory settings allow you to save your preferred heights for instant adjustment. Standing while working can improve posture, increase energy levels, and boost productivity. The sturdy steel frame and high-quality laminate surface ensure years of reliable use, making this desk an investment in your health and well-being.',
    price: 399.99,
    rating: 4.5,
    category: 'furniture',
    photo: getRandomPhoto(8, PHOTO_SIZE)
  },
  {
    id: 9,
    name: 'Business Shirt',
    summary: 'Premium cotton business shirt with wrinkle-free fabric. Professional appearance with comfortable fit for workplace confidence.',
    description: 'Make a lasting impression with this meticulously crafted business shirt that combines professional style with all-day comfort. Made from premium 100% cotton with advanced wrinkle-resistant treatment, this shirt maintains a crisp, polished appearance even after long days at the office. The classic fit provides comfort without compromising the tailored silhouette that\'s essential for business attire. Features include mother-of-pearl buttons, reinforced seams, and a spread collar that works perfectly with or without a tie. The breathable fabric keeps you comfortable during meetings and presentations, while the easy-care properties mean less time spent on maintenance and more time focusing on what matters most.',
    price: 69.99,
    rating: 4.1,
    category: 'clothing',
    photo: getRandomPhoto(9, PHOTO_SIZE)
  },
  {
    id: 10,
    name: 'USB-C Hub',
    summary: 'Multi-port USB-C hub with HDMI and card reader. Expands connectivity options for modern laptops and devices.',
    description: 'Expand your laptop\'s connectivity with this versatile USB-C hub that transforms a single port into a complete workstation solution. Featuring HDMI output supporting 4K resolution, multiple USB 3.0 ports for high-speed data transfer, SD and microSD card readers, and a USB-C power delivery port for charging, this hub meets all your connectivity needs. The aluminum construction ensures excellent heat dissipation and durability, while the compact design makes it perfect for travel. Plug-and-play functionality means no drivers are required, and the 6-foot cable provides flexible positioning. Compatible with MacBook Pro, MacBook Air, and most USB-C devices.',
    price: 89.99,
    rating: 4.3,
    category: 'electronics',
    photo: getRandomPhoto(10, PHOTO_SIZE)
  },
  {
    id: 11,
    name: 'Programming Guide',
    summary: 'Complete guide to modern web development and best practices. Written by industry experts with real-world examples.',
    description: 'Master the art of modern web development with this comprehensive guide that covers everything from fundamental concepts to advanced techniques used by today\'s top developers. Written by a team of industry veterans with decades of combined experience, this book provides practical, real-world examples and best practices that you can immediately apply to your projects. Topics include HTML5, CSS3, JavaScript ES6+, responsive design, performance optimization, and modern frameworks. Each chapter builds upon the previous one, creating a logical learning progression that takes you from beginner to advanced developer. Includes access to online resources, code examples, and a community forum for ongoing support and discussion.',
    price: 34.99,
    rating: 4.8,
    category: 'books',
    photo: getRandomPhoto(11, PHOTO_SIZE)
  },
  {
    id: 12,
    name: 'Webcam HD',
    summary: '1080p HD webcam with auto-focus and noise reduction. Perfect for video calls, streaming, and content creation.',
    description: 'Elevate your video communication with this professional-grade HD webcam that delivers crystal-clear 1080p video at 30fps. The advanced auto-focus technology ensures you\'re always in sharp detail, while the built-in dual stereo microphones with noise reduction capture your voice clearly while filtering out background noise. The wide-angle lens provides excellent coverage for both individual calls and group meetings, and the clip-on design works with laptops, monitors, and tripods. Perfect for remote work, online education, content creation, and staying connected with family and friends. Compatible with all major video conferencing platforms and operating systems.',
    price: 129.99,
    rating: 4.4,
    category: 'electronics',
    photo: getRandomPhoto(12, PHOTO_SIZE)
  },
  {
    id: 13,
    name: 'Mechanical Keyboard',
    summary: 'Mechanical wireless keyboard with RGB backlighting. Tactile switches provide superior typing experience for gamers and professionals.',
    description: 'Experience the ultimate in typing precision and satisfaction with this premium mechanical keyboard featuring tactile switches that provide perfect feedback with every keystroke. The RGB backlighting with customizable colors and effects not only looks stunning but also enhances productivity in low-light conditions. Built for both gaming and professional use, the keyboard offers anti-ghosting technology for accurate multi-key input and programmable macro keys for efficiency. The wireless connection provides freedom from cables while maintaining ultra-low latency, and the rechargeable battery lasts up to 40 hours on a single charge. The aircraft-grade aluminum frame ensures durability that will last for millions of keystrokes.',
    price: 119.99,
    rating: 4.6,
    category: 'electronics',
    photo: getRandomPhoto(13, PHOTO_SIZE)
  },
  {
    id: 14,
    name: 'LEGO Building Set',
    summary: 'Creative building set with 500+ pieces for endless fun. Develops problem-solving skills and creativity in children and adults.',
    description: 'Unleash your creativity with this comprehensive LEGO building set that includes over 500 pieces in various shapes, sizes, and colors. Perfect for builders of all ages, this set encourages imaginative play while developing fine motor skills, spatial reasoning, and problem-solving abilities. The included instruction booklet provides ideas for multiple builds, but the real magic happens when builders create their own unique designs. Made from high-quality, durable plastic that can withstand years of play, these pieces are compatible with all LEGO sets for endless expansion possibilities. The organized storage box keeps pieces sorted and makes cleanup easy, while the satisfaction of creating something with your own hands provides hours of screen-free entertainment.',
    price: 49.99,
    rating: 4.9,
    category: 'toys',
    photo: getRandomPhoto(14, PHOTO_SIZE)
  },
  {
    id: 15,
    name: 'Wall Clock',
    summary: 'Modern minimalist wall clock with silent movement. Features clean design that complements any home or office decor.',
    description: 'Add a touch of modern elegance to your space with this beautifully designed minimalist wall clock that combines form and function in perfect harmony. The silent quartz movement ensures accurate timekeeping without the distracting tick-tock sound, making it ideal for bedrooms, offices, and study areas. The clean, uncluttered face with bold numerals provides excellent readability from across the room, while the slim profile and neutral color scheme complement any interior design style. Constructed from high-quality materials with a scratch-resistant face and durable hands, this clock is built to provide years of reliable service. Easy to hang with the included mounting hardware and operates on a single AA battery.',
    price: 45.99,
    rating: 4.2,
    category: 'furniture',
    photo: getRandomPhoto(15, PHOTO_SIZE)
  },
  {
    id: 16,
    name: 'Tablet Stand',
    summary: 'Adjustable aluminum tablet stand for all devices. Multi-angle positioning perfect for reading, watching videos, and video calls.',
    description: 'Enhance your tablet experience with this premium aluminum stand that provides the perfect viewing angle for any activity. The fully adjustable design accommodates tablets from 4 to 13 inches, including iPads, Android tablets, and e-readers, while the multi-angle positioning allows you to find the ideal angle for reading, watching videos, video calls, or digital art creation. The solid aluminum construction provides excellent stability while maintaining a lightweight, portable design that\'s perfect for home, office, or travel. The stand features protective silicone padding to prevent scratches and ensure your device stays securely in place. The foldable design makes storage and transport effortless.',
    price: 39.99,
    rating: 4.3,
    category: 'electronics',
    photo: getRandomPhoto(16, PHOTO_SIZE)
  },
  {
    id: 17,
    name: 'Casual T-Shirt',
    summary: 'Comfortable cotton t-shirt perfect for everyday wear. Soft fabric blend provides durability and comfort for active lifestyles.',
    description: 'Experience all-day comfort with this premium casual t-shirt crafted from a carefully selected blend of soft cotton and polyester. The fabric combination provides the perfect balance of breathability, moisture-wicking properties, and durability, making it ideal for everything from weekend activities to casual work environments. The classic fit flatters all body types while providing freedom of movement, and the reinforced seams ensure the shirt maintains its shape wash after wash. The versatile design pairs effortlessly with jeans, shorts, or layered under jackets, making it a wardrobe essential. Available in a range of colors to suit any personal style, this t-shirt proves that basic doesn\'t have to mean boring.',
    price: 24.99,
    rating: 4.0,
    category: 'clothing',
    photo: getRandomPhoto(17, PHOTO_SIZE)
  },
  {
    id: 18,
    name: 'Action Figure',
    summary: 'Detailed superhero action figure with accessories. Features articulated joints and high-quality construction for play and display.',
    description: 'Bring your favorite superhero to life with this meticulously crafted action figure that features incredible attention to detail and premium construction quality. Standing 6 inches tall with over 20 points of articulation, this figure can be posed in countless dynamic positions for both play and display. The figure comes with multiple accessories including interchangeable hands, weapons, and effects pieces that enhance the storytelling possibilities. Made from durable, non-toxic materials with detailed paint applications that capture every aspect of the character\'s iconic appearance. Whether you\'re a collector looking for a display piece or seeking the perfect gift for a young superhero fan, this action figure delivers exceptional value and endless entertainment possibilities.',
    price: 29.99,
    rating: 4.6,
    category: 'toys',
    photo: getRandomPhoto(18, PHOTO_SIZE)
  },
  {
    id: 19,
    name: 'Denim Jeans',
    summary: 'Classic fit denim jeans with premium quality fabric. Timeless style meets modern comfort for versatile everyday wear.',
    description: 'Discover the perfect pair of jeans that seamlessly blends classic style with contemporary comfort in these premium denim jeans. Crafted from high-quality cotton denim with just the right amount of stretch, these jeans move with you throughout your day while maintaining their shape and structure. The classic five-pocket design and traditional stitching details honor the timeless appeal of quality denim, while modern fits and washes ensure they complement today\'s fashion trends. The durable construction and fade-resistant fabric mean these jeans will look great wash after wash, season after season. From casual weekends to smart-casual work environments, these versatile jeans are the foundation of a well-dressed wardrobe.',
    price: 79.99,
    rating: 4.4,
    category: 'clothing',
    photo: getRandomPhoto(19, PHOTO_SIZE)
  },
  {
    id: 20,
    name: 'Design Principles',
    summary: 'Learn fundamental design principles and UI/UX concepts. Essential guide for aspiring designers and developers seeking design knowledge.',
    description: 'Master the fundamental principles that separate good design from great design with this comprehensive guide to visual design and user experience. Written for both aspiring designers and developers who want to understand design better, this book covers essential topics including color theory, typography, layout, user psychology, and interface design. Each chapter includes practical exercises, real-world case studies, and examples from successful brands and products. The content bridges the gap between theoretical knowledge and practical application, providing readers with the tools and understanding needed to create designs that are not only visually appealing but also functional and user-friendly. Whether you\'re designing websites, mobile apps, or print materials, the principles in this book will elevate your design skills and help you create more effective visual communications.',
    price: 39.99,
    rating: 4.5,
    category: 'books',
    photo: getRandomPhoto(20, PHOTO_SIZE)
  }
]);