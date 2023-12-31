function generateRandomId(): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8;
  let randomId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

import {
  IFaq,
  IReview,
  IUser,
  ICarousel,
  IBrand,
  IBooking,
  ICars,
  SortItem,
  BigCategories,
} from 'src/app/directives/app-model';

export const Cars: ICars[] = [
  {
    brand: 'BMW',
    id: 'kAtNYvF0',
    name: 'BMW i8 2015',
    category: 'cars',
    rating: '4.97 (90 ratings)',
    pricePerDay: 155,

    topDetails: [
      {
        type: 'mpg',
        icon: './assets/img/icons/mpg.svg',
        detail: '29 MPG',
      },
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Hybrid (Premium)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 2,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 4,
      },
    ],

    detail:
      "Experience California in a fun and unique way with this Rose Gold BMW i8. This car attracts A LOT of attention so be prepared for phones and cameras taking pictures of you while you drive by. Also, you can park virtually ANYWHERE. You won’t have to pay meters, you can park in the handicap spots ♿️, no red zones, fire hydrants, street sweeper zones (please use discretion). This BMW i8 accelerates from 0 to 100 km/h (62 mph) in 4.4 seconds and has an electronic limited top speed of 250 km/h (155 mph)./n\nThe exotic yet futuristic design established the I8 as the BMW's first step towards a new generation of cars and combined luxury with the plug-in hybrid experience.\n\nPlease, NO SMOKING (Cigarettes, Cigars, Weed, Vaping, E-Cigs, etc.) An additional $250 cleaning fee will be assessed if this rule is violated.\n\nBe safe and have a great drive! We are here to make your trip as easy and enjoyable as possible. Please don't hesitate to reach out with any questions before, during, or after your trip as we're here to help!\n\n*** PLEASE NOTE DriveFinder IS A CAR SHARING COMMUNITY ***\nIn other words, please treat the vehicle as if it were your own. We treat and take care of all of our vehicles as best as we can, so we definitely appreciate when that effort is reciprocated. PLEASE KEEP IT CLEAN",
    features: [
      {
        icon: './assets/img/icons/25+.svg',
        feature: 'Must be 25+ to book',
      },
      {
        icon: './assets/img/icons/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Rahim',
      rating: 5.0,
      trips: 2183,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji9.png',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],

    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/bmw/BMW i8 2019-1.jpg',
      './assets/img/bmw/BMW i8 2019-2.jpg',
      './assets/img/bmw/BMW i8 2019-3.jpg',
      './assets/img/bmw/BMW i8 2019-4.jpg',
      './assets/img/bmw/BMW i8 2019-5.jpg',
      './assets/img/bmw/BMW i8 2019-6.jpg',
      './assets/img/bmw/BMW i8 2019-7.jpg',
      './assets/img/bmw/BMW i8 2019-8.jpg',
    ],

    reviews: [
      {
        reviewer: 'Lucy F.',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji3.png',
        date: 'October 22, 2023',
        comment:
          'Super easy pick up and drop off and definitely a great (and fun!) car. Recommend. 😊',
      },

      {
        reviewer: 'Amy S.',
        rating: 4,
        img: './assets/img/Memojis/Memoji7.png',
        date: 'October 15, 2023',
        comment:
          'Car was great, pick up and drop off were smooth and communication was timely and thorough. Highly recommend.',
      },
      {
        reviewer: 'George H.',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji9.png',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
  },

  {
    brand: 'BMW',
    id: 'kAtNYkF0',
    name: 'BMW i8 2019',
    category: 'convertibles',
    rating: '4.92 (10 ratings)',
    pricePerDay: 120,

    topDetails: [
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Hybrid (Premium)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 2,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 2,
      },
    ],

    detail:
      "The BMW i8 Roadster is a stunning and futuristic convertible that seamlessly blends high-performance capabilities with sustainable technology. With its sleek and aerodynamic design, this electric sports car is a head-turner, catching the eye with its unique scissor doors and captivating lines.The exterior of the BMW i8 Roadster showcases a perfect balance between elegance and sportiness. The low-slung profile, combined with the striking LED headlights and kidney grille, gives it a distinct and aggressive look. The soft-top roof can be retracted in just 15 seconds, allowing you to enjoy the open-air driving experience at a moment's notice. Safety is a top priority in the BMW i8 Roadster, with features such as stability control, traction control, and advanced braking systems ensuring optimal handling and stability. The car is also equipped with advanced airbags and a rigid carbon fiber chassis, providing maximum protection in the event of a collision.",
    features: [
      {
        icon: './assets/img/icons/25+.svg',
        feature: 'Must be 25+ to book',
      },
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },
      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/convertible.svg',
        feature: 'Convertible',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },
      {
        icon: './assets/img/icons/keyless.svg',
        feature: 'Keyless',
      },
      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USD Input',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'No smoking No pets.  Must give key upon return back to host.  Cannot leave vehicle without handing off key to host.',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Ziar',
      rating: 3.0,
      trips: 21,
      joined: 'Aug 2023',
      responseTime: '4 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji1.png',
          date: 'September 11, 2023',
          comment:
            'Loved this car and pickup/drop off was a breeze. Michael explained everything and was very patient. Great time.',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji8.png',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },

    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/bmw/BMW i8 2019-1.jpg',
      './assets/img/bmw/BMW i8 2019-2.jpg',
      './assets/img/bmw/BMW i8 2019-3.jpg',
      './assets/img/bmw/BMW i8 2019-4.jpg',
      './assets/img/bmw/BMW i8 2019-5.jpg',
      './assets/img/bmw/BMW i8 2019-6.jpg',
      './assets/img/bmw/BMW i8 2019-7.jpg',
      './assets/img/bmw/BMW i8 2019-8.jpg',
    ],

    reviews: [
      {
        reviewer: 'Rob da Bank',
        rating: 4.2,
        img: './assets/img/Memojis/Memoji1.png',
        date: 'September 23, 2023',
        comment:
          'Loved this car and pickup/drop off was a breeze. Host explained everything and was very patient. Great time.',
      },
      {
        reviewer: 'Kevin Z.',
        rating: 3.9,
        img: './assets/img/Memojis/Memoji9.png',
        date: 'September 11, 2023',
        comment:
          'Very nice car fun to drive. Easy pick up and drop off. Highly recommended',
      },
    ],
  },

  {
    brand: 'BMW',
    id: 'bAtNYvF0',
    name: 'BMW Z4 2020',
    category: ' exotic & luxury',
    rating: '4.98 (50 ratings)',
    pricePerDay: 100,

    topDetails: [
      {
        type: 'mpg',
        icon: './assets/img/icons/mpg.svg',
        detail: '28 MPG',
      },
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Gas (Premium)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 2,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 2,
      },
    ],

    detail:
      "The BMW Z4 2020 is a dynamic and stylish convertible that delivers a thrilling driving experience. With its sleek design, powerful engine options, and precise handling, the Z4 offers a perfect blend of performance and luxury. The retractable hardtop adds versatility, allowing you to enjoy open-air driving at the touch of a button. Inside, you'll find a refined interior with advanced technology features, enhancing both comfort and connectivity. Whether cruising on scenic roads or navigating city streets, the BMW Z4 2020 embodies the spirit of driving pleasure and automotive sophistication.",
    features: [
      {
        icon: './assets/img/icons/25+.svg',
        feature: 'Must be 25+ to book',
      },
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: './assets/img/icons/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },
      {
        icon: './assets/img/icons/blindspot.svg',
        feature: 'Blind spot Warning',
      },
      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/convertible.svg',
        feature: 'Convertible',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },
      {
        icon: './assets/img/icons/keyless.svg',
        feature: 'Keyless',
      },
      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },
    ],

    description: {
      rules:
        'Save time, make drop-off a breeze, and avoid additional fees by adding this Extra, which allows you to return my car at any fuel level. Price includes up to a full tank of gas.',
      guidelines:
        "Pick up & drop off meet up location will be on the upper level parking structure by the McDonald's & Ono Hawaiian Grill.",
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Ed.',
      rating: 3.0,
      trips: 21,
      joined: 'Aug 2021',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'Loved this car and pickup/drop off was a breeze. Michael explained everything and was very patient. Great time.',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji4.png',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },

    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/bmw/BMW Z4 2020-1.jpg',
      './assets/img/bmw/BMW Z4 2020-2.jpg',
      './assets/img/bmw/BMW Z4 2020-3.jpg',
      './assets/img/bmw/BMW Z4 2020-4.jpg',
      './assets/img/bmw/BMW Z4 2020-5.jpg',
      './assets/img/bmw/BMW Z4 2020-6.jpg',
      './assets/img/bmw/BMW Z4 2020-7.jpg',
      './assets/img/bmw/BMW Z4 2020-8.jpg',
    ],

    reviews: [
      {
        reviewer: 'Rob da Bank',
        rating: 4.2,
        img: './assets/img/Memojis/Memoji1.png',
        date: 'September 23, 2023',
        comment:
          'Great rental. This is the second time I’ve rented this car from the host and it was just as great of an experience the second time. Easy and fast communication, flexible on pick up/drop off, great car. Will happily rent with him again.',
      },
      {
        reviewer: 'Kevin Z.',
        rating: 3.9,
        img: './assets/img/Memojis/Memoji4.png',
        date: 'September 11, 2023',
        comment:
          'Very nice car fun to drive. Easy pick up and drop off. Highly recommended',
      },
    ],
  },

  {
    brand: 'BMW',
    id: 'kAngNYvF0',
    name: 'BMW 4 Series 2021',
    category: 'SUVs',
    rating: '4.90 (19 ratings)',
    pricePerDay: 86,

    topDetails: [
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Gas (Premium)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 2,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 4,
      },
    ],

    detail:
      'BMW M440i is a stunning all-wheel drive coupe of German assembly. The spacious trunk and roomy cabin is perfect for traveling in a group, with the car being designed for four passengers. An elegant, black leather interior design is complemented by titanium white exterior, guaranteeing your trip to be completed in style. The panoramic roof enriches the ride with the catching views around, both for business or traveling related trips.',
    features: [
      {
        icon: './assets/img/icons/25+.svg',
        feature: 'Must be 25+ to book',
      },
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: './assets/img/icons/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },

      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: './assets/img/icons/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: './assets/img/icons/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: './assets/img/icons/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: './assets/img/icons/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Driving outside the United States is prohibited',
      guidelines:
        'Save time, make drop-off a breeze, and avoid additional fees by adding this Extra, which allows you to return my car at any fuel level. Price includes up to a full tank of gas.',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'Add optional Extras to your trip at checkout.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji6.png',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },

    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/bmw/BMW 4 Series 2021-1.jpg',
      './assets/img/bmw/BMW 4 Series 2021-2.jpg',
      './assets/img/bmw/BMW 4 Series 2021-3.jpg',
      './assets/img/bmw/BMW 4 Series 2021-4.jpg',
    ],

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji1.png',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji10.png',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
  },

  {
    brand: 'Benz',
    id: 'kAtreguF0',
    name: 'Mercedes-Benz G-Class 2019',
    category: ' classics',

    rating: '4.90 (9 ratings)',
    pricePerDay: 506,

    topDetails: [
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Gas',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 5,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 5,
      },
    ],

    detail:
      'The 2019 Mercedes-Benz G-Class offers a perfect blend of rugged off-road capability and luxurious comfort. With its iconic boxy design, powerful engine options, and a lavish interior, this SUVs exudes both timeless style and modern sophistication. Whether navigating city streets or conquering challenging terrains, the G-Class delivers a commanding performance. Cutting-edge technology, premium materials, and meticulous craftsmanship define the interior, providing passengers with a first-class driving experience. In summary, the 2019 Mercedes-Benz G-Class is a symbol of prestige, combining off-road prowess with opulent refinement.',
    features: [
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: './assets/img/icons/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },

      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: './assets/img/icons/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: './assets/img/icons/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: './assets/img/icons/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: './assets/img/icons/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: './assets/img/icons/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji3.png',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/benz/Mercedes-Benz G-Class 2019-1.jpg',
      './assets/img/benz/Mercedes-Benz G-Class 2019-2.jpg',
      './assets/img/benz/Mercedes-Benz G-Class 2019-3.jpg',
      './assets/img/benz/Mercedes-Benz G-Class 2019-4.jpg',
    ],

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji8.png',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji9.png',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
  },

  {
    brand: 'Benz',
    id: 'kAtNYvFz',
    name: 'Mercedes-Benz C-Class 2017',
    category: ' car',
    rating: '4.96 (9 ratings)',
    pricePerDay: 200,

    topDetails: [
      {
        type: 'mpg',
        icon: './assets/img/icons/mpg.svg',
        detail: '24 MPG',
      },
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Gas (Premium)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 2,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 5,
      },
    ],
    detail:
      'The 2017 Mercedes-Benz C-Class is a luxury sedan that epitomizes elegance and performance. With a sleek design, advanced technology features, and a powerful engine, it offers a refined driving experience. The C-Class boasts a well-crafted interior, featuring premium materials and cutting-edge infotainment. Equipped with a range of safety features, this sedan ensures a secure and comfortable journey. Experience the perfect blend of style and performance in the Mercedes-Benz C-Class 2017.',
    features: [
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Andriod Auto',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: './assets/img/icons/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },

      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: './assets/img/icons/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: './assets/img/icons/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: './assets/img/icons/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: './assets/img/icons/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: './assets/img/icons/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Anzbelika',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji10.png',
          date: 'September 11, 2023',
          comment:
            'Anzbelika was a great host, very understanding and very professional. I had a accident with the car and she was very understanding given the circumstances. I will make sure to be renting again when I’m in LA based off the great customer service.',
        },
        {
          author: 'DriveFinder',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'The host cancelled this trip 2 hours before it started. This message was automatically posted by DriveFinder.',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/benz/Mercedes-Benz C-Class 2017-1.jpg',
      './assets/img/benz/Mercedes-Benz C-Class 2017-2.jpg',
      './assets/img/benz/Mercedes-Benz C-Class 2017-3.jpg',
      './assets/img/benz/Mercedes-Benz C-Class 2017-4.jpg',
    ],

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji1.png',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji5.png',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
  },

  {
    brand: 'Benz',
    id: 'kAtNLvF0',
    name: 'Mercedes-Benz C-Class 2019',
    category: ' SUVs',
    rating: '4.96 (9 ratings)',
    pricePerDay: 200,

    topDetails: [
      {
        type: 'mpg',
        icon: './assets/img/icons/mpg.svg',
        detail: '24 MPG',
      },
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Gas (Premium)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 4,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 5,
      },
    ],
    detail:
      'The 2019 Mercedes-Benz C-Class seamlessly combines luxury and performance in a sleek package. With its refined design, advanced technology features, and powerful engine options, the C-Class delivers a sophisticated driving experience. The meticulously crafted interior offers premium materials and cutting-edge infotainment, making every journey comfortable and connected. Experience the perfect blend of elegance and driving dynamics in the Mercedes-Benz C-Class 2019.',
    features: [
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },

      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: './assets/img/icons/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },

      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: './assets/img/icons/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: './assets/img/icons/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: './assets/img/icons/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: './assets/img/icons/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: './assets/img/icons/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Den',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'Anzbelika was a great host, very understanding and very professional. I had a accident with the car and she was very understanding given the circumstances. I will make sure to be renting again when I’m in LA based off the great customer service.',
        },
        {
          author: 'Megan',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji7.png',
          date: 'September 11, 2023',
          comment: 'You did good 👍 Appreciate the responsiveness.',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },

    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/benz/Mercedes-Benz C-Class 2019-1.jpg',
      './assets/img/benz/Mercedes-Benz C-Class 2019-2.jpg',
      './assets/img/benz/Mercedes-Benz C-Class 2019-3.jpg',
      './assets/img/benz/Mercedes-Benz C-Class 2019-4.jpg',
      './assets/img/benz/Mercedes-Benz C-Class 2019-5.jpg',
      './assets/img/benz/Mercedes-Benz C-Class 2019-6.jpg',
    ],

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji3.png',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji5.png',

        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
  },

  {
    brand: 'Benz',
    id: 'MTTtNYvF0',
    name: 'Mercedes-Benz G-Class 2016',
    rating: '4.96 (19 ratings)',
    category: ' exptic & luxury',
    pricePerDay: 200,

    topDetails: [
      {
        type: 'mpg',
        icon: './assets/img/icons/mpg.svg',
        detail: '14 MPG',
      },
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Gas (Premium)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 4,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 5,
      },
    ],

    detail:
      'The 2016 Mercedes-Benz G-Class offers a luxurious and powerful driving experience. Known for its iconic boxy design, this SUVs combines rugged off-road capabilities with a plush and sophisticated interior. With a robust V8 engine, advanced technology features, and a reputation for durability, the G-Class delivers a perfect blend of style and performance for those seeking a distinctive and high-end driving experience.',
    features: [
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Andriod Auto',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: './assets/img/icons/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },

      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: './assets/img/icons/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: './assets/img/icons/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: './assets/img/icons/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: './assets/img/icons/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: './assets/img/icons/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Anzbelika',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'Anzbelika was a great host, very understanding and very professional. I had a accident with the car and she was very understanding given the circumstances. I will make sure to be renting again when I’m in LA based off the great customer service.',
        },
        {
          author: 'DriveFinder',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji3.png',
          date: 'September 11, 2023',
          comment:
            'The host cancelled this trip 2 hours before it started. This message was automatically posted by DriveFinder.',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/benz/Mercedes-Benz G-Class 2016-1.jpg',
      './assets/img/benz/Mercedes-Benz G-Class 2016-2.jpg',
      './assets/img/benz/Mercedes-Benz G-Class 2016-3.jpg',
      './assets/img/benz/Mercedes-Benz G-Class 2016-4.jpg',
    ],

    reviews: [
      {
        reviewer: 'Williams ',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji3.png',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji9.png',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
  },

  {
    brand: 'Toyota',
    id: 'kAtPRF0',
    name: 'Toyota Prius Prime 2021',
    category: ' car',
    rating: '4.99 (19 ratings)',
    pricePerDay: 56,

    topDetails: [
      {
        type: 'mpg',
        icon: './assets/img/icons/mpg.svg',
        detail: '54 MPG',
      },
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Gas (Regular)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 4,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 5,
      },
    ],

    detail:
      'The 2019 Mercedes-Benz G-Class offers a perfect blend of rugged off-road capability and luxurious comfort. With its iconic boxy design, powerful engine options, and a lavish interior, this SUVs exudes both timeless style and modern sophistication. Whether navigating city streets or conquering challenging terrains, the G-Class delivers a commanding performance. Cutting-edge technology, premium materials, and meticulous craftsmanship define the interior, providing passengers with a first-class driving experience. In summary, the 2019 Mercedes-Benz G-Class is a symbol of prestige, combining off-road prowess with opulent refinement.',
    features: [
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: './assets/img/icons/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },

      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: './assets/img/icons/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: './assets/img/icons/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: './assets/img/icons/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: './assets/img/icons/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: './assets/img/icons/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji7.png',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/toyota/Toyota Prius Prime 2021-1.jpg',
      './assets/img/toyota/Toyota Prius Prime 2021-2.jpg',
      './assets/img/toyota/Toyota Prius Prime 2021-3.jpg',
      './assets/img/toyota/Toyota Prius Prime 2021-4.jpg',
    ],

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji4.png',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji9.png',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
  },

  {
    brand: 'Toyota',
    id: 'kAtSYvF0',
    name: 'Toyota Supra 2021',
    category: ' classics',

    rating: '4.99 (19 ratings)',
    pricePerDay: 56,

    topDetails: [
      {
        type: 'mpg',
        icon: './assets/img/icons/mpg.svg',
        detail: '28 MPG',
      },
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Gas (Premium)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 2,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 2,
      },
    ],

    detail:
      'The 2021 Toyota Supra delivers exhilarating performance and precision engineering, seamlessly blending sporty styling with cutting-edge technology. With a turbocharged inline-six engine, agile handling, and a sleek design, the Supra offers an immersive driving experience. Its driver-centric cockpit, advanced infotainment, and safety features make it a thrilling and sophisticated sports car for enthusiasts. Unleash the power of the road with the Toyota Supra 2021.',
    features: [
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: './assets/img/icons/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },

      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: './assets/img/icons/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: './assets/img/icons/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: './assets/img/icons/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: './assets/img/icons/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: './assets/img/icons/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Park in the corner of the lot.',
      guidelines: 'No Smoking',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Sarah',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji3.png',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/toyota/Toyota Supra 2021-1.jpg',
      './assets/img/toyota/Toyota Supra 2021-2.jpg',
      './assets/img/toyota/Toyota Supra 2021-3.jpg',
      './assets/img/toyota/Toyota Supra 2021-4.jpg',
      './assets/img/toyota/Toyota Supra 2021-5.jpg',
      './assets/img/toyota/Toyota Supra 2021-6.jpg',
      './assets/img/toyota/Toyota Supra 2021-7.jpg',
    ],

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji3.png',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji7.png',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
  },

  {
    brand: 'Lexus',
    id: 'kAtNYFLS',
    name: 'Lexus IS 2022',
    rating: '4.90 (19 ratings)',
    category: ' convertible',

    pricePerDay: 126,

    topDetails: [
      {
        type: 'mpg',
        icon: './assets/img/icons/mpg.svg',
        detail: '22 MPG',
      },
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Gas',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 4,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 5,
      },
    ],

    detail:
      'Looking for a sporty and luxurious ride look no further new 2022 IS 350 f sport is the car for you. Fuel efficiency is a plus with the new sporty edging design with brown a real crowd pleaser. Pearl white with red guts what a match made in heaven step inside the new 2022 IS 350 F-Sport. The 2022 Lexus IS is a luxury compact sedan that seamlessly combines performance and sophistication. With a sleek exterior design, the IS exudes modern elegance, while its powerful engine options deliver a thrilling driving experience. Inside, the refined cabin features premium materials, cutting-edge technology, and comfortable seating. Equipped with advanced safety features and a host of technology enhancements, the Lexus IS 2022 offers a perfect balance of style, comfort, and performance for those seeking a premium driving experience.',
    features: [
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: './assets/img/icons/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: './assets/img/icons/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },

      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: './assets/img/icons/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: './assets/img/icons/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: './assets/img/icons/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: './assets/img/icons/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: './assets/img/icons/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '20+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji2.png',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji6.png',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/lexus/Lexus IS 2022-1.jpg',
      './assets/img/lexus/Lexus IS 2022-2.jpg',
      './assets/img/lexus/Lexus IS 2022-3.jpg',
      './assets/img/lexus/Lexus IS 2022-4.jpg',
      './assets/img/lexus/Lexus IS 2022-5.jpg',
      './assets/img/lexus/Lexus IS 2022-6.jpg',
    ],

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji1.png',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji3.png',
        date: 'October 8, 2023',
        comment:
          'Anthony was great! Car was awesome! Seamless drop off, literally pulled up, popped the trunk, fist bump and that was it. Never had a quicker, smoother pickup before. Anthony was very flexible and accommodating as my departure kept changing. Rent from this guy! He is top notch!',
      },
    ],
  },

  {
    brand: 'Lexus',
    id: 'kAtNYvES',
    name: 'Lexus ES 2023',
    category: ' exotic & luxury',

    rating: '4.90 (29 ratings)',
    pricePerDay: 126,

    topDetails: [
      {
        type: 'mpg',
        icon: './assets/img/icons/mpg.svg',
        detail: '44 MPG',
      },
      {
        type: 'fuelType',
        icon: './assets/img/icons/fuel.svg',
        detail: 'Hybrid (Premium)',
      },
      {
        type: 'doors',
        icon: './assets/img/icons/doors.svg',
        detail: 4,
      },
      {
        type: 'seats',
        icon: './assets/img/icons/seat.svg',
        detail: 5,
      },
    ],

    // detail:
    //   'New 2023 Lexus Hybrid with gas prices on the rise you need a Hybrid that averages 36 plus MPG.  Lexus Es hybrid is real crowd pleaser and has safety and sophistication with Apple car play this car is ready for a road trip. book now while you still can sip on gas instead of guzzling gas…',

    detail:
      'The Lexus ES is a luxury sedan thats available as a hybrid. The ES offers good handling, strong powertrains, great safety, and a ride that rivals envy. Its been freshened for 2022, with styling tweaks including LED headlights on top models, a new touchscreen and interface, standard blind-spot monitors, and suspension improvements. But its the ES 300h hybrid thats the star, naturally, at 43 mpg city, 44 highway, 44 combined.\n\nStandard safety equipment includes automatic emergency braking, adaptive cruise control, active lane control, blind-spot monitors, and automatic high beams. Excellent ride quality and a quiet cabin. Impressive fuel economy considering its size and power. Comfortable and mostly upscale interior.',
    features: [
      {
        icon: './assets/img/icons/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },

      {
        icon: './assets/img/icons/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: './assets/img/icons/gps.svg',
        feature: 'Gps',
      },

      {
        icon: './assets/img/icons/usb.svg',
        feature: 'USB Input',
      },
      {
        icon: './assets/img/icons/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '20+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: './assets/img/Memojis/Memoji4.png',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: './assets/img/Memojis/Memoji5.png',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndBasedOn: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      totalRatings: 85,
    },

    ratingsAndReviews: [
      {
        label: 'Overall Rating',
        value: '4.98',
      },
      {
        label: 'Cleanliness',
        value: '4.9',
      },
      {
        label: 'Maintenance',
        value: '5.0',
      },
      {
        label: 'Communication',
        value: '5.0',
      },
      {
        label: 'Convenience',
        value: '5.0',
      },
      {
        label: 'Accuracy',
        value: '5.0',
      },
    ],
    pickup: [
      {
        select: 'pickup at car location',
        icon: './assets/img/icons/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: './assets/img/icons/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: './assets/img/icons/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: [
      './assets/img/lexus/Lexus ES 2023-1.jpg',
      './assets/img/lexus/Lexus ES 2023-2.jpg',
      './assets/img/lexus/Lexus ES 2023-3.jpg',
      './assets/img/lexus/Lexus ES 2023-4.jpg',
      './assets/img/lexus/Lexus ES 2023-5.jpg',
      './assets/img/lexus/Lexus ES 2023-6.jpg',
      './assets/img/lexus/Lexus ES 2023-7.jpg',
    ],

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: './assets/img/Memojis/Memoji6.png',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: './assets/img/Memojis/Memoji9.png',
        date: 'October 8, 2023',
        comment:
          'Anthony was great! Car was awesome! Seamless drop off, literally pulled up, popped the trunk, fist bump and that was it. Never had a quicker, smoother pickup before. Anthony was very flexible and accommodating as my departure kept changing. Rent from this guy! He is top notch!',
      },
    ],
  },
];

export const Faq: IFaq[] = [
  {
    question: 'What do I need to book a car on DriveFinder?',
    expanded: false,
    answer:
      'To book a car on DriveFinder, you must create a DriveFinder account, be 18 years old or older in the US, 21 years old or older in the UK, 23 years old or older in Canada, have a valid driver’s license, and get approved to drive on DriveFinder.',
  },
  {
    question: 'What payment methods does DriveFinder accept?',
    expanded: false,
    answer:
      'DriveFinder accepts most credit cards issued by major financial institutions, including American Express and Discover cards, as well as debit cards with a Visa or Mastercard logo that are linked to a checking account. Apple Pay and Google Pay on mobile devices are also accepted, but DriveFinder does not accept cash or checks as valid payment methods.',
  },
  {
    question: 'Can other people drive a car that I booked?',
    expanded: false,
    answer:
      'Yes, multiple guests can drive the car you book on DriveFinder, as long as they are all approved to drive. The primary driver (whoever booked the car) can add additional drivers with no fees or additional charges. Only the primary driver can request to add drivers; DriveFinder hosts cannot do it for you. We encourage you to request to add additional drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress. To speed up the process, have your additional driver create a DriveFinder account and get approved to drive before you request to add them. All drivers must have a valid driver’s license and meet the age requirements for the car you’ve booked. You can request to add drivers via the “Trips” tab in the DriveFinder app without additional driver charges or extra costs.',
  },
  {
    question: 'What is the cancellation policy on DriveFinder?',
    expanded: false,
    answer:
      'You can cancel and get a full refund up to 24 hours before your trip starts. If you book a trip with less than 24 hours’ notice, you have one hour after booking to cancel free of charge. If you cancel after the free cancellation period ends, you will be charged a small cancellation fee. In the rare event a host cancels, you’ll be notified immediately so you can book another car, or we’ll help you find one. Your refund can be temporarily held to expedite rebooking, or the funds can be returned to your bank account — your choice.',
  },
  {
    question: 'What happens if I have an accident?',
    expanded: false,
    answer:
      'If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available 24/7. We’ll make sure you’re safe, then help you get back on your way.',
  },
  {
    question: 'Can I get my car delivered to me?',
    expanded: false,
    answer:
      'Yes, many hosts offer delivery to travel hubs like airports, train stations, and hotels, or to custom delivery locations. There are cars available on DriveFinder at convenient locations near hundreds of airports. Skip the rental counter and have your car delivered for pickup and return at your hotel or vacation rental, or nearby location, to save time and hassle on your weekend getaway or family vacation. Some hosts offer free delivery, while others set their own delivery fee.',
  },
  {
    question: 'How do I get discounts when booking a car?',
    expanded: false,
    answer:
      'Many DriveFinder hosts offer discounted prices for weekly and monthly trips, as well as “early bird” discounts for trips booked a week or more in advance. So, get the best deals and lowest rates possible by booking longer trips, at least a week in advance. Commercial Hosts may also offer weekly car rental and monthly car rental deals. On your Account page, make sure you’ve checked the box to receive email notifications, and enable push notifications from the DriveFinder app in your phone settings — we’ll send you occasional promo codes, discounts, and deals! Additionally, frequent travelers on DriveFinder can get rewarded with the loyalty bonus — earn a promo code for one bonus day when you take trips totaling 10 days in a 90-day period!**',
  },
];

export const category: SortItem[] = [
  {
    img: './assets/img/categories/category__classic.jpg',
    text: 'Classics',
    id: 'classics',
    content: 'Class up your escape with an elegant vintage wedding car',
  },
  {
    img: './assets/img/categories/category__convertible.jpg',
    text: 'Convertible',
    id: 'convertibles',
    content: 'Ride off into the sunset in an epic drop top',
  },
  {
    img: './assets/img/categories/category__exotic.jpg',
    text: 'Exotic & Luxury',
    id: 'luxury-cars',
    content: 'Finish with a dramatic splash in a super swanky exotic',
  },
  {
    img: './assets/img/categories/category__suv.jpg',
    text: 'SUVs',
    id: 'suvs',
  },
  {
    img: './assets/img/categories/category__trucks.jpg',
    text: 'Trucks',
    id: 'trucks',
  },
  {
    img: './assets/img/categories/category__trucks.jpg',
    text: 'Family Cars',
    id: 'family-cars',
  },
  {
    img: './assets/img/categories/category__trucks.jpg',
    text: 'Electric Cars',
    id: 'electric-cars',
  },
  {
    img: './assets/img/categories/category__trucks.jpg',
    text: 'Sedans',
    id: 'sedans',
  },
];

export const brand: SortItem[] = [
  { img: './assets/img/benz/benz-main.jpg', text: 'Benz' },
  { img: './assets/img/bmw/bmw-main.jpg', text: 'Bmw' },
  { img: './assets/img/lexus/lexus-main.jpg', text: 'Lexus' },
  { img: './assets/img/toyota/toyota-main.jpg', text: 'Toyota' },
  { img: './assets/img/categories/category__trucks.jpg', text: 'Trucks' },
];

export const Reviews: IReview[] = [
  {
    username: 'Chris A.',
    img: './assets/img/Memojis/Memoji4.png',
    carModel: 'Mercedes-Benz C-Class 2018',
    rating: 4.8,
    date: 'June 20, 2023',
    comment: 'We will always use his cars for any Los Angeles trips!',
  },
  {
    username: 'Donna M.',
    img: './assets/img/Memojis/Memoji2.png',
    carModel: 'Mercedes-Benz E-Class 2016',
    rating: 4.8,
    date: 'November 20, 2023',
    comment: 'Thank you for making the rental process smooth and simple!',
  },
  {
    username: 'Luke B.',
    img: './assets/img/Memojis/Memoji1.png',
    carModel: 'Mercedes-Benz CLA-Class 2022',
    rating: 4.2,
    date: 'August 20, 2023',
    comment: 'Great car, communication was fast and easy.',
  },
  {
    username: 'Alexander C.',
    img: './assets/img/Memojis/Memoji3.png',
    carModel: 'BMW M8 2020',
    rating: 4.8,
    date: 'July 20, 2023',
    comment: 'A huge thank you to the for his amazing BMW M8.',
  },
  {
    username: 'David H.',
    img: './assets/img/Memojis/Memoji5.png',
    carModel: 'BMW 3 Series 2016',
    rating: 4.8,
    date: 'November 20, 2023',
    comment: 'Clean car no issues.',
  },
  {
    username: 'Edward H.',
    img: './assets/img/Memojis/Memoji6.png',
    carModel: 'BMW 4 Series 2016',
    rating: 4.2,
    date: 'August 20, 2023',
    comment: 'Had fun driving around Los Angeles in a BMW drop top.',
  },
  {
    username: 'Chris A.',
    img: './assets/img/Memojis/Memoji9.png',
    carModel: 'Toyota Supra 2023',
    rating: 4.8,
    date: 'June 20, 2023',
    comment: 'Easy street parking.',
  },
  {
    username: 'Donna M.',
    img: './assets/img/Memojis/Memoji7.png',
    carModel: 'Toyota Prius 2008',
    rating: 4.8,
    date: 'November 20, 2023',
    comment: 'Thank you for making the rental process smooth and simple!',
  },
  {
    username: 'Luke B.',
    img: './assets/img/Memojis/Memoji8.png',
    carModel: 'Toyota Corolla 2021',
    rating: 4.2,
    date: 'August 20, 2023',
    comment: 'Great car, communication was fast and easy.',
  },
];

export const SubReviews: IReview[] = [
  {
    username: 'Robert T.',
    img: './assets/img/Memojis/Memoji4.png',
    carModel: 'Mercedes-Benz C-Class 2018',
    rating: 4.8,
    date: 'Few minutes ago',
    comment:
      'Very well managed, prompt reply, everything is more professional than major car rental companies.',
  },

  {
    username: 'Jessie Z.',
    img: './assets/img/Memojis/Memoji3.png',
    carModel: 'Chevrolet Camaro 2019',
    rating: 4.8,
    date: 'Few minutes ago',
    comment:
      'Upon arrival, I was picked up from the airport and 30 minutes after writing that I had landed, I was already sitting in this beautiful car',
  },

  {
    username: 'Steven B.',
    img: './assets/img/Memojis/Memoji2.png',
    carModel: 'Toyota Corolla 2021',
    rating: 4.2,
    date: 'Few minutes ago',
    comment: 'Better option than traditional car rental agency.',
  },
];

export const Carousel: ICarousel[] = [
  {
    imgUrl: './assets/img/Memojis/Memoji4.png',
    title: 'Find the perfect car to try before you buy',
    content:
      'Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.',
    link: '',
  },
  {
    imgUrl: './assets/img/Memojis/Memoji4.png',
    title: 'Find the perfect car to conquer the great outdoors',
    content:
      'Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.',
    link: '',
  },
  {
    imgUrl: './assets/img/Memojis/Memoji4.png',
    title: 'Find the perfect car to unwind for the weekend',
    content:
      'From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.',
    link: '',
  },
  {
    imgUrl: './assets/img/Memojis/Memoji4.png',
    title: 'Find the perfect car to upgrade your vacation plans',
    content:
      'Skip the rental car counter and find the perfect car to complement your vacation vibe.',
    link: '',
  },
  {
    imgUrl: './assets/img/Memojis/Memoji4.png',
    title: 'Find the perfect car for scenic corners & curves',
    content:
      'Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.',
    link: '',
  },
  {
    imgUrl: './assets/img/Memojis/Memoji4.png',
    title: 'Find the perfect car to make errand day easier',
    content:
      'Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.',
    link: '',
  },
];

export const Users: IUser[] = [
  {
    name: 'Nick P.',
    img: './assets/img/Memojis/Memoji2.png',
    location: '',
    rating: 5.0,
    work: '',
    school: '',
    languages: '',
    email: 'Email address',
    phone: 'Phone number',
    about: '',
    icon: './assets/img/mark.svg',
    toDrive: 'approved to drive',
    Popup:
      'Approved to drive means Nick has provided their driver’s license number and passed the DriveFinder driver screening process.',
  },
  {
    name: 'Jeff A.',
    img: './assets/img/users/jeff a.jpg',
    location: '',
    rating: 4.0,
    work: '',
    school: '',
    languages: '',
    email: 'Email address',
    phone: 'Phone number',
    about: '',
    icon: './assets/img/mark.svg',
    toDrive: 'approved to drive',
    Popup:
      'Approved to drive means Nick has provided their driver’s license number and passed the DriveFinder driver screening process.',
  },
  {
    name: 'Sandy L.',
    img: './assets/img/users/sandy L.jpg',
    location: '',
    rating: 3.2,
    work: '',
    school: '',
    languages: '',
    email: 'Email address',
    phone: 'Phone number',
    about: '',
    icon: './assets/img/mark.svg',
    toDrive: 'approved to drive',
    Popup:
      'Approved to drive means Nick has provided their driver’s license number and passed the DriveFinder driver screening process.',
  },
  {
    name: 'Alex K.',
    img: './assets/img/users/alex k.jpg',
    location: 'Poland, Oregon',
    rating: 5.0,
    work: 'Tango Berretín',
    school: 'Reed College',
    languages: 'English, Spanish, German',
    email: 'Email address',
    phone: 'Phone number',
    about:
      "I love trying out different cars.  I've never been in an accident and am a responsible, safe person.  I’m familiar with manual clutch/paddle shifters.   I’m not interested in racing/peeling out.I teach Argentine Tango dancing in Portland, OR.  My website is www.alextango.com",
    icon: './assets/img/mark.svg',
    toDrive: 'approved to drive',
    Popup:
      'Approved to drive means Nick has provided their driver’s license number and passed the DriveFinder driver screening process.',
  },
];

export const Booking: IBooking = {
  startDate: '11/06/2023',
  startTime: '10:00 AM',
  endDate: '11/09/2023',
  endTime: '10:00 AM',
  pickupReturnLocation: 'Los Angeles, CA 90005',
  discount: 19,
  cancellationPolicy: 'Free cancellation',
  distanceIncluded: 300,
  feePerAdditionalMile: 1.23,
  insurance: 'Insurance via Travelers',
};

export const Brands: IBrand[] = [
  {
    brandName: 'BMW',
    backgroundImg: './assets/img/bmw/bmw-main.jpg',
    curvedImg: './assets/img/bmw/curved-bmw.jpg',
    brandDetail: {
      description: {
        title: 'Drive a BMW',
        p: 'Refined sports-luxury cars',
        main1:
          'No automaker creates luxury vehicles that are equally elegant and fun to drive like BMW does. That’s why they’re a leader among German luxury brands.',
        main2:
          'Featuring hardcore track coupes, full-size luxury sedans, and capable SUVs, the BMW model range is diverse. Regardless, all BMW cars are responsive, stylish, and high-tech — BMW claims to build the ultimate driving machine, with good reason. Book a BMW on DriveFinder for a proper Bimmer experience that will elevate any quick day trip to the next level.',
      },
      features: [
        {
          title: 'Responsive performance',
          content:
            'BMW brings you a connected, involved experience few other cars can match. Steering is direct, response from the pedals is immediate, and overall composure is excellent. Even a few minutes of driving a BMW makes it clear it’s not just an average car.',
        },
        {
          title: 'Superb quality',
          content:
            'BMW build quality is outstanding. There’s a solidity to BMW cars that’s clear whether you’re one with the interior or admiring from the outside. Materials are well-appointed and German engineering is at its best, giving confidence for any driving occasion.',
        },
        {
          title: 'Diverse options',
          content:
            'The BMW lineup continues to grow and diversify. BMW has luxury convertibles, crossovers, coupes, sedans, and wagons to choose from. That means no matter what you need a car for, you’ll be able to find a BMW for a comfortable ride.',
        },
      ],
      button: 'Book a BMW today',
      legend: {
        img: './assets/img/bmw/bmw-main.jpg',
        content: 'Feel legendary BMW performance',
        p: 'With decades of experience, BMW builds cars that are far from ordinary. Whether you drive a practical BMW SUV or powerful BMW M car, you’ll be able to tell why BMW is known for luxury road performance. Find the best BMW rental alternatives to drive on DriveFinder if you want to try a fun daily driver, sporty crossover, or luxury convertible — BMW has a car for any occasion.',
      },
      top: {
        heading: 'Top rated BMW',
        top: 'Top BMW models',
        button: 'Drive a BMW',
        topCars: [
          {
            name: 'BMW 3 Series',
            content:
              'The BMW 3 Series might be the world’s best sports sedan. All 3 Series models place an emphasis on driver experience, along with the size and practicality that makes them a superior choice. Whether you drive a BMW M3 or any other 3 Series model, you’ll know why it’s always been such a popular car.',
          },
          {
            name: 'BMW X5',
            content:
              'The BMW X5 is the luxury SUV that started it all. It’s got the sporty credentials that make it a genuine BMW, plus capability and practicality for all of life’s needs. The BMW X5’s cargo capacity and all-wheel drive make it a great choice for family trips or a solo journey.',
          },
          {
            name: 'BMW Z4',
            content:
              'Slide into a BMW Z4 and experience a roadster like no other. It’s an iconic model that exudes BMW’s philosophy of performance and sophistication impeccably. Mind-blowing aerodynamics and a turbocharged engine give new meaning to the word cruising from behind the wheel of this luxury sports car.',
          },
        ],
      },
    },

    brandReviews: [
      {
        username: 'Alexander C.',
        img: './assets/img/user2.jpg',
        carModel: 'BMW M8 2020',
        rating: 4.8,
        date: 'July 20, 2023',
        comment: 'A huge thank you to the for his amazing BMW M8.',
      },
      {
        username: 'David H.',
        img: './assets/img/user3.jpg',
        carModel: 'BMW 3 Series 2016',
        rating: 4.8,
        date: 'November 20, 2023',
        comment: 'Clean car no issues.',
      },
      {
        username: 'Edward H.',
        img: './assets/img/user1.jpg',
        carModel: 'BMW 4 Series 2016',
        rating: 4.2,
        date: 'August 20, 2023',
        comment: 'Had fun driving around Los Angeles in a BMW drop top.',
      },
    ],

    brandFaq: [
      {
        question: 'Can I extend my trip?',
        expanded: false,
        answer:
          'Yes! If you would like to extend your trip please modify your trip in the DriveFinder app and we will approve it right away.',
      },
      {
        question: 'Are there BMWs available near the airport?',
        expanded: false,
        answer:
          'Yes, there are BMWs available on DriveFinder at locations near airports across the US, Canada, and the UK. To save time and hassle, skip the rental car counter and have your BMW delivered to you. Set your hotel or the address of your vacation rental as your pickup location, and after arriving at your destination, take a taxi, Uber, Lyft, or shuttle service to the vehicle’s location.',
      },
      {
        question: 'What BMW models can I book on DriveFinder?',
        expanded: false,
        answer:
          'Browse a wide selection of BMW vehicles for all kinds of occasions and budgets on DriveFinder. Use the “Vehicle makes” filter to search through all available BMWs in your area, or use the “Vehicle models” filter to find a specific BMW model like the BMW 3 Series, BMW X3, BMW X6, BMW X5, BMW 7 Series, BMW Z4, and more. For the lowest prices, use the “budget-friendly” filter to browse economy options.',
      },
      {
        question: 'What sets BMW apart from other German luxury brands?',
        expanded: false,
        answer:
          'BMW, Audi, and Mercedes-Benz are the big three German luxury manufacturers, and all three brands are immensely popular around the world for producing high-quality luxury vehicles with the precision of German engineering. BMW offers a comprehensive vehicle selection across nearly every segment, from luxury SUVs, to hatchbacks, to sports cars, and even electric models in the i4, iX, and more. BMW started out producing aircraft engines, hence the stylized propeller logo. Now a staple vehicle manufacturer around the world, BMW’s bread and butter compared to the other German brands is their sports cars, particularly from BMW’s M division. The M2, M3, M4, and M5 are well-known for offering an impressive balance of usability and hard-nosed performance. These elite vehicles prioritize powerful engines and finely tuned suspensions to offer roaring on-road performance, in fitting with BMW’s slogans of “the ultimate driving machine” and “sheer driving pleasure.”',
      },

      {
        question: 'Are there discounts on weekly or monthly trips?',
        expanded: false,
        answer:
          'Yes, many DriveFinder hosts offer discounted prices when you book trips lasting 3+, 7+, or 30+ days. Additionally, hosts can offer “early bird” discounts for trips booked a week or more in advance. So, get the best deals and lowest rates possible by booking longer trips, at least a week in advance.',
      },
    ],
    cars: [
      {
        brand: 'BMW',
        id: 'kAtNYvF0',
        category: 'classics',
        img: './assets/img/bmw/BMW i8 2015-2.jpg',
        name: 'BMW i8 2015',
        rating: '4.97 (90 ratings)',
        pricePerDay: 155,

        mpg: {
          icon: './assets/img/mpg.svg',
          detail: '29 MPG',
        },
        fuelType: {
          icon: './assets/img/fuel.svg',
          detail: 'Hybrid (Premium)',
        },
        doors: {
          icon: './assets/img/doors.svg',
          detail: 2,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 4,
        },
      },

      {
        brand: 'BMW',
        id: 'kAtNYkF0',
        category: 'car',
        img: './assets/img/bmw/BMW i8 2019-1.jpg',
        name: 'BMW i8 2019',
        rating: '4.92 (10 ratings)',
        pricePerDay: 120,

        fuelType: {
          icon: './assets/img/fuel.svg',
          detail: 'Hybrid (Premium)',
        },
        doors: {
          icon: './assets/img/doors.svg',
          detail: 2,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 2,
        },
      },

      {
        brand: 'BMW',
        name: 'BMW Z4 2020',
        id: 'bAtNYvF0',
        category: ' classics',
        img: './assets/img/bmw/BMW Z4 2020-1.jpg',
        rating: '4.98 (50 ratings)',
        pricePerDay: 100,
        mpg: {
          icon: './assets/img/mpg.svg',
          detail: '28 MPG',
        },
        fuelType: {
          icon: './assets/img/fuel.svg',
          detail: 'Gas (Premium)',
        },
        doors: {
          icon: './assets/img/doors.svg',
          detail: 2,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 2,
        },
      },

      {
        brand: 'BMW',
        name: 'BMW 4 Series 2021',
        category: ' classics',
        id: 'kAngNYvF0',
        img: './assets/img/bmw/BMW 4 Series 2021-1.jpg',
        rating: '4.90 (19 ratings)',
        pricePerDay: 86,

        mpg: {
          icon: './assets/img/mpg.svg',
          detail: 'Gas (Premium)',
        },

        doors: {
          icon: './assets/img/doors.svg',
          detail: 2,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 4,
        },
      },
    ],
  },

  {
    brandName: 'Benz',
    backgroundImg: './assets/img/benz/benz-main.jpg',
    curvedImg: './assets/img/benz/curved-benz.jpg',
    brandDetail: {
      description: {
        title: 'Drive a Benz',
        p: 'Experience luxury and excellence',
        main1:
          'When you drive a Mercedes-Benz, it’s immediately clear you’re not in just any premium vehicle.',
        main2:
          'It’s been said that luxury is the opposite of vulgarity, and in that sense Mercedes cars epitomize the word. Everything about Mercedes — from the styling to driving experience — is smooth and elegant. Still, with industry-leading technology and performance, they’re far from old-fashioned. Explore Mercedes and book one right here on DriveFinder.',
      },
      features: [
        {
          title: 'Impressive comforts',
          content:
            'The feeling of driving a Mercedes is like no other. Anything you touch — the weight of the steering, the softness of the seats, even the click of control knobs — gives the sensation of opulence and an unmatched level of comfort. That’s the result of nearly a century of precision engineering and craftsmanship.',
        },
        {
          title: 'AMG muscle',
          content:
            'For all the luxury cars in the Mercedes lineup, AMG cars provide a savage contrast. The brand turns normal Mercedes vehicles into sporty, dynamic machines that are sure to thrill any driving enthusiast. Find a Mercedes-AMG rental alternative on DriveFinder to get a sense for truly powerful German engineering and performance.',
        },
        {
          title: 'Innovative technology',
          content:
            'Mercedes continually pushes the boundaries of what’s possible in a car. Over the years Mercedes has compiled a list of extraordinary firsts: first use of ABS, first installation of airbags, first radar cruise control system. Only time will tell what features in today’s Mercedes will spread across the auto industry.',
        },
      ],
      button: 'Book a Mercedes-Benz today',
      legend: {
        img: './assets/img/benz/benz-main.jpg',
        content: 'Experience true luxury driving',
        p: 'Sometimes luxury is a necessity, and a normal car simply won’t do. Whether it’s a car for a wedding, promising date, or vital business meeting, driving a Mercedes is a guaranteed way to impress. Book a Mercedes-Benz on DriveFinder for that important occasion, a leisurely day trip, or an unforgettably fun drive',
      },
      top: {
        heading: 'Top rated Mercedes-Benz',
        top: 'Top Mercedes models',
        button: 'Drive a Mercedes-Benz',
        topCars: [
          {
            name: 'Mercedes-Benz C-Class',
            content:
              'The Mercedes C-Class may be small, but shares the luxury and technology features of its larger counterparts. The C-Class sedan is the perfect size to get around town with a few passengers, or drive a C63 AMG to feel massive power in a compact body.',
          },
          {
            name: 'Mercedes-Benz G-Class',
            content:
              'The G-Class is Mercedes-Benz’s legendary 4x4-turned-luxury-cruiser. The boxy build of the Mercedes G-Wagon makes it instantly recognizable on roads, and it offers a wonderful experience with a smooth ride. Find a Mercedes-AMG G63 or G65 for true AMG power in a luxurious SUV.',
          },
          {
            name: 'Mercedes-Benz GLE-Class',
            content:
              'With enough space for family road trips or a smaller excursion, the Mercedes-Benz GLE-Class fuses sophistication and athleticism into a roomy SUV for a luxurious travel experience.',
          },
        ],
      },
    },

    brandReviews: [
      {
        username: 'Chris A.',
        img: './assets/img/user1.jpg',
        carModel: 'Mercedes-Benz C-Class 2018',
        rating: 4.8,
        date: 'June 20, 2023',
        comment: 'We will always use his cars for any Los Angeles trips!',
      },
      {
        username: 'Donna M.',
        img: './assets/img/user3.jpg',
        carModel: 'Mercedes-Benz E-Class 2016',
        rating: 4.8,
        date: 'November 20, 2023',
        comment: 'Thank you for making the rental process smooth and simple!',
      },
      {
        username: 'Luke B.',
        img: './assets/img/user1.jpg',
        carModel: 'Mercedes-Benz CLA-Class 2022',
        rating: 4.2,
        date: 'August 20, 2023',
        comment: 'Great car, communication was fast and easy.',
      },
    ],

    cars: [
      {
        brand: 'Benz',
        id: 'kAtreguF0',
        name: 'G-Class 2019',
        category: ' classics',
        img: './assets/img/benz/Mercedes-Benz G-Class 2019-1.jpg',
        rating: '4.90 (9 ratings)',
        pricePerDay: 506,

        mpg: {
          icon: './assets/img/icons/mpg.svg',
          detail: 'Gas',
        },
        doors: {
          icon: './assets/img/icons/doors.svg',
          detail: 5,
        },
        seats: {
          icon: './assets/img/icons/seat.svg',
          detail: 5,
        },
      },

      {
        brand: 'Benz',
        id: 'kAtNYvFz',
        name: 'C-Class 2017',
        img: './assets/img/benz/Mercedes-Benz C-Class 2017-1.jpg',
        category: ' car',
        rating: '4.96 (9 ratings)',
        pricePerDay: 200,

        mpg: {
          icon: './assets/img/icons/mpg.svg',
          detail: '24 MPG',
        },
        fuelType: {
          icon: './assets/img/icons/mpg.svg',
          detail: 'Gas (Premium)',
        },
        doors: {
          icon: './assets/img/icons/doors.svg',
          detail: 4,
        },
        seats: {
          icon: './assets/img/icons/seat.svg',
          detail: 5,
        },
      },

      {
        brand: 'Benz',
        id: 'kAtNLvF0',
        name: 'C-Class 2019',
        img: './assets/img/benz/Mercedes-Benz C-Class 2019-1.jpg',
        category: ' SUVs',
        rating: '4.96 (9 ratings)',
        pricePerDay: 200,

        mpg: {
          icon: './assets/img/mpg.svg',
          detail: '28 MPG',
        },
        fuelType: {
          icon: './assets/img/mpg.svg',
          detail: 'Gas (Premium)',
        },
        doors: {
          icon: './assets/img/doors.svg',
          detail: 4,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 5,
        },
      },

      {
        brand: 'Benz',
        id: 'MTTtNYvF0',
        name: 'G-Class 2016',
        rating: '4.96 (19 ratings)',
        img: './assets/img/benz/Mercedes-Benz G-Class 2016-1.jpg',
        category: 'exptic & luxury',
        pricePerDay: 200,

        mpg: {
          icon: './assets/img/mpg.svg',
          detail: '14 MPG',
        },
        fuelType: {
          icon: './assets/img/mpg.svg',
          detail: 'Gas (Premium)',
        },
        doors: {
          icon: './assets/img/doors.svg',
          detail: 4,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 5,
        },
      },
    ],

    brandFaq: [
      {
        question: 'Can I extend my trip?',
        expanded: false,
        answer:
          'Yes! If you would like to extend your trip please modify your trip in the DriveFinder app and we will approve it right away.',
      },
      {
        question: 'Are there Mercedes-Benzes available near the airport?',
        expanded: false,
        answer:
          'Yes, there are Mercedes-Benzes available on DriveFinder at locations near airports across the US, Canada, and the UK. To save time and hassle, skip the rental car counter and have your Mercedes-Benz delivered to you. Set your hotel or the address of your vacation rental as your pickup location, and after arriving at your destination, take a taxi, Uber, Lyft, or shuttle service to the vehicle’s location.',
      },
      {
        question: 'What Mercedes-Benz models can I book on DriveFinder?',
        expanded: false,
        answer:
          'Browse a wide selection of Mercedes-Benz vehicles and Mercedes-AMG vehicles for all kinds of occasions and budgets on DriveFinder. Use the “Vehicle makes” filter to search through all available Mercedes-Benz vehicles in your area, or use the “Vehicle models” filter to find a specific Mercedes-Benz model, like the Mercedes-Benz E-Class, Mercedes-Benz C-Class, Mercedes-Benz GLE-Class, Mercedes-Benz G-Class, Mercedes-Benz E-Class, Mercedes-Benz S-Class, Mercedes-Benz GLS-Class, even an exotic vehicle like the AMG GT. For the lowest prices, use the “budget-friendly” filter to browse economy options.',
      },
      {
        question: 'Is there a fee to add additional drivers to my trip?',
        expanded: false,
        answer:
          'There is no fee or additional charge for adding a driver to your trip on DriveFinder. Only the guest who booked the trip (primary driver) can request to add drivers; DriveFinder hosts cannot do it for you. We encourage you to request to add authorized drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress with no extra charges.',
      },

      {
        question: 'Are there discounts on weekly or monthly trips?',
        expanded: false,
        answer:
          'Yes, many DriveFinder hosts offer discounted prices when you book trips lasting 3+, 7+, or 30+ days. Additionally, hosts can offer “early bird” discounts for trips booked a week or more in advance. So, get the best deals and lowest rates possible by booking longer trips, at least a week in advance.',
      },
    ],
  },

  {
    brandName: 'Toyota',
    backgroundImg: './assets/img/toyota/toyota-main.jpg',
    curvedImg: './assets/img/toyota/curved-toyota.jpg',
    brandDetail: {
      description: {
        title: 'Drive a Toyota',
        p: 'For all of life’s daily needs',
        main1:
          'Toyota is known around the globe for its practical, efficient, and dependable vehicles.',
        main2:
          'Japan’s #1 brand builds a wide range of sedans, sports cars, crossovers, and pickup trucks — many available in hybrid form with stellar gas mileage — that can fulfill anyone’s transport needs. Whether you’re looking for a long-term ride or a temporary replacement vehicle, a Toyota can get the job done without fuss.',
      },
      features: [
        {
          title: 'Hybrid innovation',
          content:
            'Toyota both pioneered and popularized hybrids, and remains a leader in the segment today. No longer just limited to the Prius, models with hybrid assistance have expanded across the range, meaning there’s a high-MPG version of most Toyota vehicles.',
        },
        {
          title: 'Budget friendly',
          content:
            'Choosing a Toyota is a proven way to keep driving costs low. Toyotas are great on gas, simple to maintain, and rank at the top of the industry in reliability. This all helps make a Toyota inexpensive to drive in both the day-to-day and the long haul, making all those happy families and high customer reviews no surprise.',
        },
        {
          title: 'Surprisingly entertaining',
          content:
            'No longer content with being dependable and efficient, Toyota has been making its cars more pleasurable in recent years. The results are evident in the increased agility of newer Camrys and RAV4s, and in the existence of dedicated rear-wheel-drive sports cars like the Supra and 86.',
        },
      ],
      button: 'Book a Toyota today',
      legend: {
        img: './assets/img/benz/toyota-main.jpg',
        content: 'The smart way to get to where you’re going',
        p: 'Toyota is among the world’s best-selling automakers, and for good reason. With legendary durability, efficiency, and safety, you can drive a Toyota to take you anywhere.',
      },
      top: {
        heading: 'Top rated Toyota ',
        top: 'Top Toyota models',
        button: 'Drive a Toyota ',
        topCars: [
          {
            name: 'Toyota Tacoma',
            content:
              'While pickup trucks with sedan underpinnings have been springing up lately, the Tacoma proudly sticks to its tough, traditional roots. With a ladder frame, rear-wheel drive, and the strong and modern V6 found on most models, this rugged truck can haul and cruise in a way the new kids can’t. Pick up a four-wheel-drive TRD model for a worry-free weekend getaway to the mountains, beach, or desert.',
          },
          {
            name: 'Toyota RAV4',
            content:
              'Excluding pickup trucks, this is America’s best-selling vehicle, and it’s easy to see why. An agreeable blend of competent handling, class-leading fuel efficiency (27 MPG), and useful back seat and cargo space, the Toyota RAV4 has few weaknesses as an all-around daily driver. Unique in its class, the RAV4 is also available as a hybrid (37 MPG), as well as a plug-in hybrid called the RAV4 Prime, which can go 42 miles on electric power alone.',
          },
          {
            name: 'Toyota Camry',
            content:
              'Camrys have always been dependable and comfortable, but try out the current generation (2018+) and you’ll find a stylish sedan with a healthy dose of agility and personality in the mix, giving the driver some enjoyment on family getaways. Its standard engine offers good performance and mileage, and this is among the last sedans to still offer a performance-boosting V6, boasting 301 horsepower. At the other end of the spectrum, the Camry Hybrid tops the class in gas mileage, scoring a lofty 47 MPG.',
          },
        ],
      },
    },

    brandReviews: [
      {
        username: 'Chris A.',
        img: './assets/img/user1.jpg',
        carModel: 'Toyota Supra 2023',
        rating: 4.8,
        date: 'June 20, 2023',
        comment: 'Easy street parking.',
      },
      {
        username: 'Donna M.',
        img: './assets/img/user3.jpg',
        carModel: 'Toyota Prius 2008',
        rating: 4.8,
        date: 'November 20, 2023',
        comment: 'Thank you for making the rental process smooth and simple!',
      },
      {
        username: 'Luke B.',
        img: './assets/img/user1.jpg',
        carModel: 'Toyota Corolla 2021',
        rating: 4.2,
        date: 'August 20, 2023',
        comment: 'Great car, communication was fast and easy.',
      },
    ],

    cars: [
      {
        brand: 'Toyota',
        id: 'kAtPRF0',
        name: 'Toyota Prius Prime 2021',
        img: './assets/img/toyota/Toyota Prius Prime 2021-1.jpg',
        category: ' car',
        rating: '4.99 (19 ratings)',
        pricePerDay: 56,

        mpg: {
          icon: './assets/img/mpg.svg',
          detail: '54 MPG',
        },
        fuelType: {
          icon: './assets/img/fuel.svg',
          detail: 'Gas (Regular)',
        },
        doors: {
          icon: './assets/img/doors.svg',
          detail: 4,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 5,
        },
      },

      {
        brand: 'Toyota',
        id: 'kAtSYvF0',
        name: 'Toyota Supra 2021',
        category: ' classics',
        img: './assets/img/toyota/Toyota Supra 2021-1.jpg',
        rating: '4.99 (19 ratings)',
        pricePerDay: 56,

        mpg: {
          icon: './assets/img/mpg.svg',
          detail: '28 MPG',
        },
        fuelType: {
          icon: './assets/img/fuel.svg',
          detail: 'Gas (Premium)',
        },
        doors: {
          icon: './assets/img/doors.svg',
          detail: 2,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 2,
        },
      },
    ],

    brandFaq: [
      {
        question: 'Can I extend my trip?',
        expanded: false,

        answer:
          'Yes! If you would like to extend your trip please modify your trip in the DriveFinder app and we will approve it right away.',
      },
      {
        question: 'Are there toyota available near the airport?',
        expanded: false,

        answer:
          'Yes, there are toyota available on DriveFinder at locations near airports across the US, Canada, and the UK. To save time and hassle, skip the rental car counter and have your Mercedes-Benz delivered to you. Set your hotel or the address of your vacation rental as your pickup location, and after arriving at your destination, take a taxi, Uber, Lyft, or shuttle service to the vehicle’s location.',
      },

      {
        question: 'Is there a fee to add additional drivers to my trip?',
        expanded: false,

        answer:
          'There is no fee or additional charge for adding a driver to your trip on DriveFinder. Only the guest who booked the trip (primary driver) can request to add drivers; DriveFinder hosts cannot do it for you. We encourage you to request to add authorized drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress with no extra charges.',
      },
      {
        question: 'What Toyota models can I book on DriveFinder?',
        expanded: false,

        answer:
          'Browse a wide selection of Toyota vehicles for all kinds of occasions and budgets on DriveFinder. Use the “Vehicle makes” filter to search through all available Toyota in your area, or use the “Vehicle models” filter to find a specific Toyota model like the Toyota Camry, Toyota RAV4, Toyota Highlander, Toyota Tacoma, or Toyota Sienna. For the lowest prices, use the “budget-friendly” filter to browse economy options.',
      },

      {
        question: 'Are there discounts on weekly or monthly trips?',
        expanded: false,

        answer:
          'Yes, many DriveFinder hosts offer discounted prices when you book trips lasting 3+, 7+, or 30+ days. Additionally, hosts can offer “early bird” discounts for trips booked a week or more in advance. So, get the best deals and lowest rates possible by booking longer trips, at least a week in advance.',
      },
    ],
  },

  {
    brandName: 'Lexus',
    backgroundImg: './assets/img/lexus/lexus-main.jpg',
    curvedImg: './assets/img/lexus/curved-lexus.jpg',
    brandDetail: {
      description: {
        title: 'Drive a Lexus',
        p: 'Luxurious and performance-driven vehicles',
        main1:
          'Lexus is renowned for creating luxurious and performance-driven vehicles that combine cutting-edge technology with exceptional craftsmanship. As a leader in the luxury automotive segment, Lexus offers a range of vehicles that cater to those seeking refinement and exhilarating driving experiences.',
        main2:
          "From elegant sedans to powerful SUVs, the Lexus lineup exemplifies a harmonious blend of comfort, style, and advanced features. Whether you're looking for a smooth ride for a night out or a spacious and capable SUV for a family adventure, driving a Lexus ensures you experience the epitome of automotive luxury. Explore the world of Lexus by booking one on DriveFinder and indulge in a driving experience that embodies sophistication and performance.",
      },
      features: [
        {
          title: 'Impressive comforts',
          content:
            'The feeling of driving a Lexus is like no other. Anything you touch — the weight of the steering, the softness of the seats, even the click of control knobs — gives the sensation of opulence and an unmatched level of comfort. That’s the result of nearly a century of precision engineering and craftsmanship.',
        },
        {
          title: 'Innovative technology',
          content:
            'Lexus continually pushes the boundaries of what’s possible in a car. Over the years Lexus has compiled a list of extraordinary firsts: first use of ABS, first installation of airbags, first radar cruise control system. Only time will tell what features in today’s Lexus will spread across the auto industry.',
        },
      ],
      button: 'Book a Lexus today',
      legend: {
        img: '',
        content: 'Experience true luxury driving',
        p: 'Sometimes luxury is a necessity, and a normal car simply won’t do. Whether it’s a car for a wedding, promising date, or vital business meeting, driving a Lexus is a guaranteed way to impress. Book a Lexus on DriveFinder for that important occasion, a leisurely day trip, or an unforgettably fun drive',
      },
      top: {
        heading: 'Top rated Lexus',
        top: 'Top Lexus models',
        button: 'Drive a Lexus',
        topCars: [
          {
            name: 'Lexus ES',
            content:
              'The Lexus ES is a symbol of luxury and comfort. With its smooth ride, premium materials, and advanced technology features, the Lexus ES provides an exceptional driving experience. Ideal for those who prioritize elegance and performance in a sedan.',
          },
          {
            name: 'Lexus RX',
            content:
              'The Lexus RX is a popular luxury SUV known for its refined style and versatile functionality. Combining a spacious interior with advanced safety features, the Lexus RX is perfect for family adventures and daily commuting with a touch of sophistication.',
          },
          {
            name: 'Lexus LC',
            content:
              'Step into the Lexus LC for a thrilling coupe experience. This luxury sports car boasts a striking design and exhilarating performance. With its powerful engine and meticulously crafted interior, the Lexus LC delivers a driving experience that stands out on any road.',
          },
        ],
      },
    },

    brandReviews: [
      {
        username: 'Chris A.',
        img: './assets/img/user1.jpg',
        carModel: 'Lexus ES 2021',
        rating: 4.8,
        date: 'June 20, 2023',
        comment: 'The Lexus that I rented from Vitallie is amazing.',
      },
      {
        username: 'Donna M.',
        img: './assets/img/user3.jpg',
        carModel: 'Lexus CT 2015',
        rating: 4.8,
        date: 'November 20, 2023',
        comment: 'Thank you for making the rental process smooth and simple!',
      },
      {
        username: 'Luke B.',
        img: './assets/img/user1.jpg',
        carModel: 'Lexus ES 2023',
        rating: 4.2,
        date: 'August 20, 2023',
        comment: 'Movses’ Lexus ES was amazing!',
      },
    ],

    cars: [
      {
        brand: 'Lexus',
        id: 'kAtNYFLS',
        name: 'Lexus IS 2022',
        rating: '4.90 (19 ratings)',
        category: ' convertible',
        img: './assets/img/lexus/Lexus IS 2022-1.jpg',
        pricePerDay: 126,

        mpg: {
          icon: './assets/img/mpg.svg',
          detail: '22 MPG',
        },
        fuelType: {
          icon: './assets/img/fuel.svg',
          detail: 'Gas',
        },
        doors: {
          icon: './assets/img/doors.svg',
          detail: 4,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 5,
        },
      },

      {
        brand: 'Lexus',
        id: 'kAtNYvES',
        name: 'Lexus ES 2023',
        category: ' exotic & luxury',
        img: './assets/img/lexus/Lexus ES 2023-1.jpg',
        rating: '4.90 (29 ratings)',
        pricePerDay: 126,

        mpg: {
          icon: './assets/img/mpg.svg',
          detail: '44 MPG',
        },
        fuelType: {
          icon: './assets/img/fuel.svg',
          detail: 'Hybrid (Premium)',
        },
        doors: {
          icon: './assets/img/doors.svg',
          detail: 4,
        },
        seats: {
          icon: './assets/img/seat.svg',
          detail: 5,
        },
      },
    ],

    brandFaq: [
      {
        question: 'Can I extend my trip?',
        expanded: false,
        answer:
          'Yes! If you would like to extend your trip please modify your trip in the DriveFinder app and we will approve it right away.',
      },

      {
        question: 'Is there a fee to add additional drivers to my trip?',
        expanded: false,
        answer:
          'There is no fee or additional charge for adding a driver to your trip on DriveFinder. Only the guest who booked the trip (primary driver) can request to add drivers; DriveFinder hosts cannot do it for you. We encourage you to request to add authorized drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress with no extra charges.',
      },

      {
        question: 'Are there discounts on weekly or monthly trips?',
        expanded: false,
        answer:
          'Yes, many DriveFinder hosts offer discounted prices when you book trips lasting 3+, 7+, or 30+ days. Additionally, hosts can offer “early bird” discounts for trips booked a week or more in advance. So, get the best deals and lowest rates possible by booking longer trips, at least a week in advance.',
      },
    ],
  },
];

export const Categories: BigCategories[] = [
  {
    categoryName: 'convertible',
    categoryid: 'convertibles',
    backgroundImg: './assets/img/resources/convertibles.jpg',
    curvedImg: './assets/img/resources/convertibles-curved.jpg',
    categoryDetail: {
      description: {
        title: 'Experience the convertible lifestyle',
        main1:
          'There is perhaps no more enjoyable a driving experience than cruising in fresh air. This rings true whether you’re in a busy city, high up in the mountains, or along the coast. Convertibles just do not disappoint.',
        main2:
          'In addition to windblown hair, many convertibles boast smooth rides, powerful engines, and a suite of creature comforts. From two- and four-seaters to soft and hard tops, DriveFinder is the place to find a stylish convertible for top-down cruising.',
      },

      top: {
        heading: 'Find a convertible for every road',
        top: 'Drop the top, grab some sunscreen, and hop in your affordable convertible for dreamy open-air motoring.',
        button: 'Browse convertibles',
        topCars: [
          {
            name: 'Vacation mode, commence',
            content:
              'You deserve everything a proper vacation has to offer. Leave the traffic, city roads, and parking garages behind, embrace the sunshine, and go roofless for your next trip to a warm location — ceilings are for people with worries and schedules, anyway.',
          },
          {
            name: 'Have a beach day',
            content:
              'If you’re near a coast, set aside a weekend to ditch the city center and difficult downtown parking spaces. Find a classic convertible or something new and luxurious, grab your buddies or your kids, leave the shoes at home, and go get some sand stuck in your hair.',
          },
          {
            name: 'Try before you buy',
            content:
              'If you’re in the market for a new convertible, take an extended test drive on DriveFinder to get the full drop-top experience so you can make an informed decision on which convertible is right for you.',
          },
        ],
      },
      models: {
        heading: 'Popular convertible models',
        top: 'Drop tops, roadsters, & spyders',
        button: 'Book a convertible',
        topCars: [
          {
            name: 'Ford Mustang',
            content:
              'Nothing says “freedom” like open-top cruising in America’s most iconic vehicle. If you have more than two people, it’s not one of the most convenient vehicles, but you can certainly embrace your inner tourist and hop in a Mustang convertible to ride off, well, anywhere.',
          },
          {
            name: 'Chevrolet Camaro',
            content:
              'Lose the roof and do your next trip in style with a convertible Camaro. Whether you joyride with a V6 engine or a powerful V8 engine, it’s the perfect ride for windy backroads, scenic highways, or just puttering around town to be seen.',
          },
          {
            name: 'Audi A4',
            content:
              'Premium vehicle features and creature comforts abound in this tried-and-true sedan, which is made more wonderful when the top goes down. See the world from an Audi A4 and enjoy one smooth ride.',
          },
        ],
      },
    },

    faq: [
      {
        question: 'Can I extend my trip?',
        expanded: false,
        answer:
          'Yes! If you would like to extend your trip please modify your trip in the DriveFinder app and we will approve it right away.',
      },

      {
        question: 'Is there a fee to add additional drivers to my trip?',
        expanded: false,
        answer:
          'There is no fee or additional charge for adding a driver to your trip on DriveFinder. Only the guest who booked the trip (primary driver) can request to add drivers; DriveFinder hosts cannot do it for you. We encourage you to request to add authorized drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress with no extra charges.',
      },

      {
        question: 'Are there discounts on weekly or monthly trips?',
        expanded: false,
        answer:
          'Yes, many DriveFinder hosts offer discounted prices when you book trips lasting 3+, 7+, or 30+ days. Additionally, hosts can offer “early bird” discounts for trips booked a week or more in advance. So, get the best deals and lowest rates possible by booking longer trips, at least a week in advance.',
      },

      {
        question: 'Are there convertibles available near the airport?',
        expanded: false,
        answer:
          'Yes, there are convertibles available on DriveFinder at locations near airports across the US, Canada, and the UK. To save time and hassle, skip the rental car counter and have your convertible delivered to you. Set your hotel or the address of your vacation rental as your pickup location, and after arriving at your destination, take a taxi, Uber, Lyft, or shuttle service to the vehicle’s location.',
      },

      {
        question: 'What convertible models can I book on DriveFinder?',
        expanded: false,
        answer:
          'Browse a wide selection of convertible vehicles for all kinds of occasions and budgets on DriveFinder. To refine your search to see a range of vehicles that offer the open-air experience, use the “Category” filter to search through all available convertibles in your area. You can also use the “Deluxe class” or “Super Deluxe class” filters to browse premium or luxury convertible models. For the lowest prices, use the “budget-friendly” filter to browse economy options.',
      },
    ],
  },
  {
    categoryName: 'suv',
    categoryid: 'suvs',
    backgroundImg: './assets/img/resources/suvs.jpg',
    curvedImg: './assets/img/resources/suvs-curved.jpg',
    categoryDetail: {
      description: {
        title: 'Explore the SUV Lifestyle',
        main1:
          'Embark on adventures with spacious interiors, powerful engines, and versatile capabilities. SUVs are designed to tackle various terrains and provide a comfortable driving experience.',
        main2:
          "Whether you're planning a family road trip, off-road exploration, or just need extra cargo space for your daily activities, DriveFinder has the perfect SUV for every occasion.",
      },
      top: {
        heading: 'Discover SUVs for Every Journey',
        top: 'Choose an SUV that suits your needs, from compact crossovers to full-size SUVs. Experience the freedom and flexibility an SUV brings to your travel plans.',
        button: 'Browse SUVs',
        topCars: [
          {
            name: 'Family-Friendly Getaways',
            content:
              'Plan memorable family vacations with an SUV that offers ample seating, safety features, and room for all your luggage. Enjoy the journey with your loved ones in comfort.',
          },
          {
            name: 'Off-Road Adventures',
            content:
              "Take the road less traveled and explore off-road destinations with an SUV designed for rugged terrain. Conquer dirt trails, rocky paths, and nature's challenges with confidence.",
          },
          {
            name: 'City Escapes in Style',
            content:
              'Navigate urban landscapes with ease and style. An SUV provides a commanding view of the road, advanced safety features, and a smooth ride for your city adventures.',
          },
        ],
      },
      models: {
        heading: 'Popular SUV Models',
        top: 'Versatile, reliable, and ready for your next journey',
        button: 'Book an SUV',
        topCars: [
          {
            name: 'Toyota RAV4',
            content:
              'Experience the perfect blend of efficiency and versatility with the Toyota RAV4. Ideal for both city driving and outdoor escapades, the RAV4 offers a spacious interior and advanced safety features.',
          },
          {
            name: 'Jeep Wrangler',
            content:
              'Unleash your advenDriveFinderus spirit with the iconic Jeep Wrangler. Designed for off-road enthusiasts, the Wrangler combines classic styling with modern capabilities, making it a top choice for exploration.',
          },
          {
            name: 'Honda CR-V',
            content:
              'Discover the comfort and reliability of the Honda CR-V. With its fuel-efficient engine and well-designed interior, the CR-V is perfect for daily commuting and long-distance journeys.',
          },
        ],
      },
    },
    faq: [
      {
        question: 'Can I extend my SUV rental?',
        expanded: false,
        answer:
          "Yes! You can extend your SUV rental through the DriveFinder app. Simply modify your trip, and we'll process your request promptly.",
      },
      {
        question: 'Is there a fee for additional drivers?',
        expanded: false,
        answer:
          'Adding extra drivers to your SUV rental is free on DriveFinder. Only the primary driver who booked the trip can add additional drivers through the DriveFinder app.',
      },
      {
        question: 'Are there discounts for longer rentals?',
        expanded: false,
        answer:
          'Absolutely! Many DriveFinder hosts offer discounted rates for SUV rentals lasting 3 days, a week, or even a month. Booking in advance can also unlock special early bird discounts.',
      },
      {
        question: 'Can I find SUVs near the airport?',
        expanded: false,
        answer:
          'Yes, DriveFinder offers a variety of SUVs near airports in the US, Canada, and the UK. Skip the rental counter, have your SUV delivered to you, and start your journey hassle-free.',
      },
      {
        question: 'What SUV models are available on DriveFinder?',
        expanded: false,
        answer:
          "Explore a wide selection of SUVs on DriveFinder, ranging from compact crossovers to full-size models. Use the app's filters to find the perfect SUV for your preferences, whether you're looking for budget-friendly options or premium vehicles.",
      },
    ],
  },
  {
    categoryid: 'luxury-cars',
    categoryName: 'luxury car',
    backgroundImg: './assets/img/resources/luxury-cars.jpg',
    curvedImg: './assets/img/resources/luxury-cars-curved.jpg',
    categoryDetail: {
      description: {
        title: 'Indulge in Luxury Driving',
        main1:
          'Experience opulence on the road with our curated selection of luxury cars. Revel in premium features, cutting-edge technology, and unparalleled comfort during your journeys.',
        main2:
          'Whether you seek a sophisticated sedan, a high-performance sports car, or a luxurious SUV, DriveFinder offers a range of upscale vehicles for the discerning driver.',
      },
      top: {
        heading: 'Discover Elegance on Wheels',
        top: 'Elevate your travel experience with a luxury car that combines style and performance. Immerse yourself in the epitome of automotive excellence and make a statement wherever you go.',
        button: 'Browse Luxury Cars',
        topCars: [
          {
            name: 'Executive Business Travel',
            content:
              'Arrive in style at your business meetings with a luxury sedan that exudes professionalism. Enjoy advanced features, plush interiors, and a smooth ride to complement your executive lifestyle.',
          },
          {
            name: 'Special Occasions',
            content:
              "Make every occasion memorable with a luxury car that adds a touch of sophistication. Whether it's a wedding, anniversary, or celebration, arrive in elegance and create lasting impressions.",
          },
          {
            name: 'Performance Enthusiasts',
            content:
              'Feel the thrill of the road with a high-performance luxury sports car. From nimble handling to powerful engines, these cars are designed for those who demand the utmost in driving dynamics.',
          },
        ],
      },
      models: {
        heading: 'Popular Luxury Car Models',
        top: 'Luxury, comfort, and cutting-edge technology',
        button: 'Book a Luxury Car',
        topCars: [
          {
            name: 'Mercedes-Benz S-Class',
            content:
              'Experience the pinnacle of luxury with the Mercedes-Benz S-Class. Known for its unparalleled comfort, advanced technology, and refined design, the S-Class is a symbol of automotive excellence.',
          },
          {
            name: 'Tesla Model S',
            content:
              'Combine sustainability with luxury in the Tesla Model S. This electric luxury sedan offers futuristic features, incredible acceleration, and a sleek design that sets it apart from the rest.',
          },
          {
            name: 'BMW 7 Series',
            content:
              "Discover the perfect blend of performance and luxury in the BMW 7 Series. With a spacious and well-crafted interior, cutting-edge technology, and dynamic driving capabilities, the 7 Series is a true driver's delight.",
          },
        ],
      },
    },
    faq: [
      {
        question: 'Can I rent a luxury car for a special event?',
        expanded: false,
        answer:
          "Absolutely! Many DriveFinder hosts offer luxury cars perfect for special events. Whether it's a wedding, anniversary, or a night on the town, you can find the perfect luxury car to make your occasion extraordinary.",
      },
      {
        question: 'Is there a minimum rental period for luxury cars?',
        expanded: false,
        answer:
          "The minimum rental period for luxury cars may vary by host. Some hosts may have a minimum rental period, especially for high-end vehicles. Check the specific listing details for the luxury car you're interested in.",
      },
      {
        question: 'Are luxury cars available with chauffeur services?',
        expanded: false,
        answer:
          "Some hosts may offer luxury cars with chauffeur services. Check the host's listing details or contact them directly to inquire about the availability of chauffeur services for your chosen luxury car.",
      },
      {
        question: 'Can I rent a luxury car for a business trip?',
        expanded: false,
        answer:
          'Absolutely! Luxury cars are an excellent choice for business travel. Impress clients or colleagues by arriving in a sophisticated luxury sedan. Many hosts offer features like Wi-Fi and other amenities to enhance your business travel experience.',
      },
      {
        question: 'Are there age restrictions for renting luxury cars?',
        expanded: false,
        answer:
          'Age restrictions for renting luxury cars may vary by host and location. Some hosts may require renters to be a certain age to book high-end or sports cars. Check the specific requirements outlined by the host in the listing details.',
      },
    ],
  },
  {
    categoryName: 'sedan',
    categoryid: 'sedans',
    backgroundImg: './assets/img/resources/sedans.jpg',
    curvedImg: './assets/img/resources/sedans-curved.jpg',
    categoryDetail: {
      description: {
        title: 'Effortless Elegance with Sedans',
        main1:
          "Embark on a journey of comfort and style with our diverse collection of sedans. Whether you're planning a business trip or a family vacation, sedans offer a perfect blend of sophistication and practicality.",
        main2:
          'Explore our curated selection of sedans on DriveFinder and choose the perfect four-door companion for your next adventure.',
      },
      top: {
        heading: 'Discover the Joy of Sedan Travel',
        top: 'Experience the joy of driving with sedans that prioritize comfort, fuel efficiency, and advanced safety features. From compact to luxury sedans, DriveFinder has a sedan for every taste and preference.',
        button: 'Browse Sedans',
        topCars: [
          {
            name: 'City Commuting',
            content:
              'Navigate busy city streets with ease in a compact sedan. Enjoy fuel efficiency and agile handling, making your daily commute a breeze. Discover the convenience of parking in tight spaces without sacrificing comfort.',
          },
          {
            name: 'Family-Friendly Rides',
            content:
              'Plan your family road trips in spacious and comfortable midsize sedans. With ample legroom and advanced safety features, these sedans provide a secure and enjoyable travel experience for everyone.',
          },
          {
            name: 'Executive Travel',
            content:
              'Make a statement at your business meetings with a sleek and sophisticated luxury sedan. Impress clients and colleagues while enjoying the latest technology and premium amenities on the road.',
          },
        ],
      },
      models: {
        heading: 'Popular Sedan Models',
        top: 'Efficiency, comfort, and style',
        button: 'Book a Sedan',
        topCars: [
          {
            name: 'Toyota Camry',
            content:
              'Experience reliability and fuel efficiency in the Toyota Camry. Known for its smooth ride and spacious interior, the Camry is a popular choice for both daily commuting and long-distance travel.',
          },
          {
            name: 'Honda Accord',
            content:
              'Drive in style with the Honda Accord, a sedan that combines elegance with performance. With advanced safety features and a comfortable interior, the Accord is an ideal choice for any journey.',
          },
          {
            name: 'BMW 3 Series',
            content:
              'Indulge in the ultimate driving experience with the BMW 3 Series. This luxury sedan offers dynamic performance, a refined interior, and cutting-edge technology, making every drive a pleasure.',
          },
        ],
      },
    },
    faq: [
      {
        question: 'Can I rent a sedan for a day trip?',
        expanded: false,
        answer:
          'Absolutely! Many DriveFinder hosts offer sedans for short-term rentals, including day trips. Whether you need a sedan for a day of exploring or a special occasion, you can find the perfect sedan for your needs.',
      },
      {
        question: 'Are sedans suitable for family travel?',
        expanded: false,
        answer:
          'Yes, sedans are an excellent choice for family travel. Midsize and full-size sedans often provide ample space for passengers and luggage, ensuring a comfortable and enjoyable journey for the entire family.',
      },
      {
        question: 'Do sedans come with advanced safety features?',
        expanded: false,
        answer:
          "Many sedans on DriveFinder are equipped with advanced safety features, such as collision detection, lane departure warning, and adaptive cruise control. Check the specific listing details for the sedan you're interested in to see its safety features.",
      },
      {
        question: 'Can I rent a luxury sedan for a special occasion?',
        expanded: false,
        answer:
          "Absolutely! DriveFinder offers a range of luxury sedans suitable for special occasions. Whether it's a wedding, anniversary, or a night out, you can arrive in style and make your event memorable.",
      },
      {
        question: 'Are there pet-friendly sedans available?',
        expanded: false,
        answer:
          'Yes, some hosts on DriveFinder offer pet-friendly sedans. Check the pet policy in the listing details or contact the host directly to inquire about bringing your furry friend along on your sedan journey.',
      },
    ],
  },
  {
    categoryid: 'electric-cars',
    categoryName: 'electric car',
    backgroundImg: './assets/img/resources/electric-cars.jpg',
    curvedImg: './assets/img/resources/electric-cars-curved.jpg',
    categoryDetail: {
      description: {
        title: 'Embrace the Future of Driving with Electric Cars',
        main1:
          'Experience the thrill of sustainable and eco-friendly driving with our collection of electric cars. Electric cars offer not only environmental benefits but also cutting-edge technology and a smooth, quiet ride.',
        main2:
          'Discover the world of electric mobility on DriveFinder and embark on a journey towards a greener future.',
      },
      top: {
        heading: 'Discover the Advantages of Electric Cars',
        top: 'Electric cars are changing the way we think about transportation. With zero emissions, lower maintenance costs, and innovative features, electric cars offer a driving experience that is both efficient and exciting.',
        button: 'Browse Electric Cars',
        topCars: [
          {
            name: 'Eco-Friendly Commuting',
            content:
              'Reduce your carbon footprint with an electric car for your daily commute. Enjoy the benefits of silent driving, instant torque, and the satisfaction of contributing to a cleaner environment.',
          },
          {
            name: 'Cutting-Edge Technology',
            content:
              'Experience the latest in automotive technology with electric cars. From advanced infotainment systems to autonomous driving features, electric cars showcase the future of innovation on the road.',
          },
          {
            name: 'Long-Range Travel',
            content:
              'Break free from range anxiety with electric cars that offer impressive driving ranges. Explore new destinations without the need for frequent charging, making electric cars suitable for both short trips and long journeys.',
          },
        ],
      },
      models: {
        heading: 'Popular Electric Car Models',
        top: 'Sleek, efficient, and electric',
        button: 'Book an Electric Car',
        topCars: [
          {
            name: 'Tesla Model 3',
            content:
              'Experience the phenomenon of the Tesla Model 3, an electric car that combines performance, style, and cutting-edge technology. Enjoy the thrill of acceleration and the convenience of over-the-air updates.',
          },
          {
            name: 'Nissan Leaf',
            content:
              'Drive the Nissan Leaf, a pioneering electric car known for its affordability and practicality. With a spacious interior and regenerative braking, the Leaf is an ideal choice for eco-conscious drivers.',
          },
          {
            name: 'Chevrolet Bolt EV',
            content:
              'Embark on electrifying adventures with the Chevrolet Bolt EV. This compact electric car offers an impressive range, stylish design, and features that make it a standout choice for emission-free driving.',
          },
        ],
      },
    },
    faq: [
      {
        question: 'How long does it take to charge an electric car?',
        expanded: false,
        answer:
          'Charging times for electric cars vary depending on the charger type and the car model. Level 1 chargers (120V) may take several hours, while Level 2 chargers (240V) can significantly reduce charging time. DC fast chargers provide the fastest charging and can replenish a significant portion of the battery in a short time.',
      },
      {
        question: 'Can I find charging stations easily for electric cars?',
        expanded: false,
        answer:
          'Yes, electric car charging infrastructure is expanding rapidly, and you can find charging stations across cities, highways, and popular destinations. Electric car models often come equipped with navigation systems that display nearby charging stations, making it convenient for drivers to plan their routes.',
      },
      {
        question: 'What is the range of electric cars?',
        expanded: false,
        answer:
          "The range of electric cars varies by model. Many modern electric cars offer ranges that exceed 200 miles on a single charge, and some luxury models can surpass 300 miles. It's essential to consider the driving range based on your intended use and charging infrastructure available in your area.",
      },
      {
        question: 'Are electric cars suitable for long trips?',
        expanded: false,
        answer:
          'Yes, electric cars are suitable for long trips, especially with the availability of fast-charging infrastructure. Plan your route to include charging stops, and enjoy the benefits of smooth, quiet, and emission-free travel on your electric car journey.',
      },
      {
        question: 'Can I charge an electric car at home?',
        expanded: false,
        answer:
          'Yes, most electric car owners charge their vehicles at home using Level 1 or Level 2 chargers. Level 1 chargers plug into standard household outlets, while Level 2 chargers require a dedicated charging station. Charging at home provides convenience and ensures your electric car is ready for daily use.',
      },
    ],
  },
  {
    categoryid: 'family-cars',
    categoryName: 'family car',
    backgroundImg: './assets/img/resources/family-cars.jpg',
    curvedImg: './assets/img/resources/family-cars-curved.jpg',
    categoryDetail: {
      description: {
        title: 'Explore Comfort and Convenience with Family Cars',
        main1:
          "Discover a range of family cars designed to provide comfort, safety, and versatility for your family's journeys. Whether you're heading to school, going on a road trip, or running daily errands, family cars offer the space and features you need.",
        main2:
          'Find the perfect family car for your lifestyle on DriveFinder and make every drive an enjoyable experience.',
      },
      top: {
        heading: 'Features that Make Family Cars Stand Out',
        top: 'Family cars are engineered with a focus on safety, spacious interiors, and smart features. Explore the benefits of family-friendly vehicles and enjoy the convenience of comfortable travel for everyone.',
        button: 'Browse Family Cars',
        topCars: [
          {
            name: 'Ample Seating Capacity',
            content:
              "Family cars come with spacious interiors and multiple seating configurations, ensuring there's room for everyone. Enjoy comfortable journeys with enough seating capacity to accommodate your family and friends.",
          },
          {
            name: 'Advanced Safety Features',
            content:
              'Prioritize safety with family cars equipped with advanced safety features. From collision detection to lane-keeping assist, these vehicles are designed to protect your loved ones on the road.',
          },
          {
            name: 'Entertainment Options',
            content:
              'Make family trips enjoyable with entertainment options in family cars. Many models feature multimedia systems, rear-seat entertainment, and connectivity options to keep passengers entertained during the ride.',
          },
        ],
      },
      models: {
        heading: 'Popular Family Car Models',
        top: 'Spacious, safe, and family-friendly',
        button: 'Book a Family Car',
        topCars: [
          {
            name: 'Honda Odyssey',
            content:
              'Experience the versatility of the Honda Odyssey, a minivan that combines ample interior space with innovative features. With sliding doors and configurable seating, the Odyssey is perfect for family adventures.',
          },
          {
            name: 'Toyota Highlander',
            content:
              'Drive the Toyota Highlander, a midsize SUV that offers a blend of comfort and functionality. With spacious seating, advanced safety features, and a smooth ride, the Highlander is an ideal choice for family outings.',
          },
          {
            name: 'Chrysler Pacifica',
            content:
              "Explore the Chrysler Pacifica, a minivan designed for modern families. Enjoy features like Stow 'n Go seating, a user-friendly infotainment system, and a spacious interior for a comfortable family travel experience.",
          },
        ],
      },
    },
    faq: [
      {
        question: 'Are family cars suitable for road trips?',
        expanded: false,
        answer:
          'Yes, family cars are well-suited for road trips, offering spacious interiors, comfortable seating, and features to keep passengers entertained during long journeys. Choose a family car with ample cargo space for luggage, and enjoy a memorable road trip with your loved ones.',
      },
      {
        question: 'What safety features do family cars typically have?',
        expanded: false,
        answer:
          'Family cars often come equipped with advanced safety features such as collision detection, lane departure warning, adaptive cruise control, and multiple airbags. These features contribute to a safer driving experience for you and your family.',
      },
      {
        question: 'Can I fit child seats in family cars?',
        expanded: false,
        answer:
          'Yes, family cars are designed to accommodate child seats, with many models featuring LATCH systems for secure installation. Check the specific vehicle details to ensure compatibility with your child seats and travel safely with your little ones.',
      },
      {
        question: 'Do family cars have fuel-efficient options?',
        expanded: false,
        answer:
          'Yes, many family cars come with fuel-efficient options, including hybrid and eco-friendly models. Consider fuel efficiency when choosing a family car for daily commuting and longer journeys to save on fuel costs and reduce environmental impact.',
      },
      {
        question: 'Can I find family cars with third-row seating?',
        expanded: false,
        answer:
          "Yes, several family cars offer third-row seating, providing additional passenger capacity. Explore models with versatile seating configurations to meet your family's needs, whether it's for extra passengers or additional cargo space.",
      },
    ],
  },
  {
    categoryid: 'classics',
    categoryName: 'classic cars',
    backgroundImg: './assets/img/resources/classics-cars.jpg',
    curvedImg: './assets/img/resources/classics-cars-curved.jpg',
    categoryDetail: {
      description: {
        title: 'Rediscover Timeless Elegance with Classics Cars',
        main1:
          'Step back in time and experience the charm of classics cars. Explore a collection of timeless vehicles that showcase elegance, craftsmanship, and a touch of nostalgia. Whether you have a special event or simply want to enjoy a classic ride, DriveFinder has the perfect classics car for you.',
        main2:
          'Find your dream classics car and make every drive a journey through history.',
      },
      top: {
        heading: 'Features that Make Classics Cars Exceptional',
        top: 'Classics cars are more than just vehicles; they are works of art on wheels. Discover the unique features that make classics cars stand out and experience the joy of driving a piece of automotive history.',
        button: 'Browse Classics Cars',
        topCars: [
          {
            name: 'Timeless Design',
            content:
              'Classics cars boast timeless designs that capture the spirit of different eras. From vintage coupes to elegant convertibles, these vehicles are a testament to the artistry of automotive design.',
          },
          {
            name: 'Exquisite Craftsmanship',
            content:
              'Experience exquisite craftsmanship in every detail of classics cars. From handcrafted interiors to meticulously designed exteriors, each element reflects the dedication and passion of the craftsmen who built these iconic vehicles.',
          },
          {
            name: 'Pure Driving Pleasure',
            content:
              'Enjoy pure driving pleasure with classics cars that offer a connection between driver and machine. Feel the power of the engine, the smoothness of the ride, and the thrill of cruising in a vehicle that has left a mark on automotive history.',
          },
        ],
      },
      models: {
        heading: 'Popular Classics Car Models',
        top: 'Elegant, timeless, and iconic',
        button: 'Book a Classics Car',
        topCars: [
          {
            name: 'Ford Mustang (1960s)',
            content:
              'Experience the iconic Ford Mustang from the 1960s, a symbol of American muscle and style. With its unmistakable design and powerful engine, the Mustang is a classic that continues to turn heads.',
          },
          {
            name: 'Chevrolet Bel Air',
            content:
              'Drive the Chevrolet Bel Air, a classic beauty that defined an era. With its sleek lines and distinctive features, the Bel Air is a symbol of 1950s automotive elegance.',
          },
          {
            name: 'Volkswagen Beetle (1960s)',
            content:
              'Rediscover the charm of the Volkswagen Beetle from the 1960s. This iconic compact car is loved for its unique shape and cheerful personality, making it a classic that never goes out of style.',
          },
        ],
      },
    },
    faq: [
      {
        question: 'Can I rent classics cars for special events?',
        expanded: false,
        answer:
          "Yes, classics cars are perfect for special events, providing a touch of elegance and nostalgia. Whether it's a wedding, anniversary, or photoshoot, renting a classics car adds a unique and memorable element to your occasion.",
      },
      {
        question: 'Are classics cars suitable for long drives?',
        expanded: false,
        answer:
          'Classics cars can be suitable for long drives, but its essential to consider factors such as the vehicles age, condition, and maintenance. Many classics cars are well-suited for leisurely cruises, and renting one can turn a road trip into a nostalgic adventure.',
      },
      {
        question: 'What maintenance is required for classics cars?',
        expanded: false,
        answer:
          'Classics cars may require special maintenance due to their age and unique components. Owners and renters should follow manufacturer guidelines, perform regular inspections, and address any issues promptly to ensure a smooth and enjoyable driving experience.',
      },
      {
        question: 'Can I rent classics cars for a film or photo shoot?',
        expanded: false,
        answer:
          'Yes, many classics cars are available for film or photo shoots, adding authenticity and character to your visual projects. Check with the owner or rental service to discuss details, availability, and any specific requirements for your production.',
      },
      {
        question: 'Do classics cars have modern features?',
        expanded: false,
        answer:
          'While classics cars maintain their original charm, some may be equipped with modern features for convenience and safety. Features like updated audio systems, air conditioning, or power steering may be added to enhance the driving experience without compromising the classic aesthetic.',
      },
    ],
  },

  {
    categoryid: 'trucks',
    categoryName: 'truck',
    backgroundImg: './assets/img/resources/trucks.jpg',
    curvedImg: './assets/img/resources/trucks-curved.jpg',
    categoryDetail: {
      description: {
        title: 'Experience Power and Utility with Trucks',
        main1:
          'Discover a selection of powerful and versatile trucks designed to tackle tough tasks and provide reliable transportation. Whether you need a truck for work, off-road adventures, or hauling, DriveFinder offers a range of trucks to suit your needs.',
        main2:
          'Explore the features and capabilities of trucks on DriveFinder and make every drive an experience in power and utility.',
      },
      top: {
        heading: 'Features that Make Trucks Exceptional',
        top: 'Trucks are known for their durability, towing capacity, and off-road capabilities. Explore the features that make trucks exceptional and choose a reliable vehicle for your next adventure or task.',
        button: 'Browse Trucks',
        topCars: [
          {
            name: 'Robust Towing Capacity',
            content:
              "Trucks are equipped with robust towing capabilities, making them ideal for hauling trailers, boats, or other heavy loads. Whether you're moving or heading for a weekend getaway, a truck provides the power you need.",
          },
          {
            name: 'Off-Road Performance',
            content:
              'Experience off-road adventures with trucks that are designed to handle challenging terrains. From dirt trails to rocky paths, these vehicles offer the capability to explore the great outdoors with confidence.',
          },
          {
            name: 'Spacious Cargo Bed',
            content:
              "Trucks feature spacious cargo beds, providing ample space for transporting goods, equipment, or outdoor gear. Whether it's for work or play, the cargo bed adds versatility to your truck-driving experience.",
          },
        ],
      },
      models: {
        heading: 'Popular Truck Models',
        top: 'Powerful, rugged, and versatile',
        button: 'Book a Truck',
        topCars: [
          {
            name: 'Ford F-150',
            content:
              "Drive the Ford F-150, an iconic full-size truck known for its impressive towing capacity and innovative features. Whether it's for work or daily driving, the F-150 delivers a blend of power and comfort.",
          },
          {
            name: 'Chevrolet Silverado',
            content:
              'Explore the Chevrolet Silverado, a dependable truck with a reputation for strength and reliability. With various configurations and engine options, the Silverado is a versatile choice for a range of tasks.',
          },
          {
            name: 'Toyota Tacoma',
            content:
              'Experience the Toyota Tacoma, a midsize truck that excels both on and off the road. With its durable build and off-road capabilities, the Tacoma is an ideal companion for outdoor enthusiasts and adventurers.',
          },
        ],
      },
    },
    faq: [
      {
        question: 'Are trucks suitable for towing trailers?',
        expanded: false,
        answer:
          "Yes, trucks are well-suited for towing trailers, thanks to their robust towing capacity. Whether it's a camper, boat, or utility trailer, trucks provide the power and stability needed for safe and efficient towing.",
      },
      {
        question: 'Can I take a truck off-road?',
        expanded: false,
        answer:
          "Many trucks are designed with off-road capabilities, allowing you to explore rugged terrains and enjoy off-road adventures. Check the specific features of the truck you're interested in to ensure it meets your off-road driving preferences.",
      },
      {
        question: 'What is the payload capacity of trucks?',
        expanded: false,
        answer:
          'Trucks come with varying payload capacities depending on the model and configuration. The payload capacity refers to the maximum weight a truck can carry in its cargo bed. Check the specifications of the specific truck model you choose for details on its payload capacity.',
      },
      {
        question: 'Are trucks suitable for everyday commuting?',
        expanded: false,
        answer:
          "While trucks are often chosen for their utility and capability, many models also offer comfort and convenience features suitable for everyday commuting. Whether it's a full-size truck or a midsize option, you can find trucks that provide a smooth and enjoyable daily driving experience.",
      },
      {
        question: 'Can I rent a truck for moving purposes?',
        expanded: false,
        answer:
          'Yes, renting a truck is a practical solution for moving purposes. Trucks with spacious cargo beds offer ample room for transporting furniture, boxes, and other belongings. Check with the truck owner or rental service to ensure the truck meets your specific moving needs.',
      },
    ],
  },
];
