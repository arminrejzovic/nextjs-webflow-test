import type { LocationsApiPayload } from '@/types/locations'

export const mockLocationsPayload: LocationsApiPayload = {
  "locations": [
    {
      "locationId": "2f14098c-7548-493d-8d78-641bdfb57a11",
      "locationExternalId": "LOC4",
      "businessType": {
        "franchise": true
      },
      "rating": 4.8,
      "mainImage": "https://cdn.example.com/locations/atlanta/main-showroom.jpg",
      "locationName": "Willow Creek Plaza",
      "slug": "willow-creek-plaza",
      "description": "Transform your home with custom closets, pantries, and storage solutions. Serving Atlanta and surrounding areas with professional design and installation services.",
      "address": {
        "address1": "1234 Peachtree Street NE",
        "address2": "Suite 100",
        "city": "Atlanta",
        "state": "Georgia",
        "shortState": "GA",
        "zip": "30309",
        "country": "United States"
      },
      "contactInformation": {
        "callCenterNumber": "+1-800-CLOSETS",
        "customerServiceNumber": "+1-404-555-0123",
        "officeNumber": "+1-404-555-0100",
        "email": "atlanta@closetsbydesign.com"
      },
      "openingHours": [
        {
          "dayOfWeek": "Monday",
          "openTime": "09:00",
          "closeTime": "18:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Tuesday",
          "openTime": "09:00",
          "closeTime": "18:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Wednesday",
          "openTime": "09:00",
          "closeTime": "18:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Thursday",
          "openTime": "09:00",
          "closeTime": "18:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Friday",
          "openTime": "09:00",
          "closeTime": "18:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Saturday",
          "openTime": "10:00",
          "closeTime": "16:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Sunday",
          "openTime": null,
          "closeTime": null,
          "isClosed": true
        }
      ],
      "schedulingHours": [
        {
          "dayOfWeek": "Monday",
          "cutOffTime": "15:00",
          "isAcceptingAppointments": true,
          "daysOut": 14
        },
        {
          "dayOfWeek": "Tuesday",
          "cutOffTime": "15:00",
          "isAcceptingAppointments": true,
          "daysOut": 14
        },
        {
          "dayOfWeek": "Wednesday",
          "cutOffTime": "15:00",
          "isAcceptingAppointments": true,
          "daysOut": 14
        },
        {
          "dayOfWeek": "Thursday",
          "cutOffTime": "15:00",
          "isAcceptingAppointments": true,
          "daysOut": 14
        },
        {
          "dayOfWeek": "Friday",
          "cutOffTime": "15:00",
          "isAcceptingAppointments": true,
          "daysOut": 14
        },
        {
          "dayOfWeek": "Saturday",
          "cutOffTime": "12:00",
          "isAcceptingAppointments": true,
          "daysOut": 14
        },
        {
          "dayOfWeek": "Sunday",
          "cutOffTime": null,
          "isAcceptingAppointments": false,
          "daysOut": null
        }
      ],
      "holidayOpeningHours": [
        {
          "date": "2024-12-25",
          "holidayName": "Christmas Day",
          "openTime": null,
          "closeTime": null,
          "isClosed": true
        },
        {
          "date": "2024-12-31",
          "holidayName": "New Year's Eve",
          "openTime": "09:00",
          "closeTime": "14:00",
          "isClosed": false
        },
        {
          "date": "2024-01-01",
          "holidayName": "New Year's Day",
          "openTime": null,
          "closeTime": null,
          "isClosed": true
        },
        {
          "date": "2024-07-04",
          "holidayName": "Independence Day",
          "openTime": null,
          "closeTime": null,
          "isClosed": true
        }
      ],
      "holidaySchedulingHours": [
        {
          "date": "2024-12-25",
          "holidayName": "Christmas Day",
          "cutOffTime": null,
          "isAcceptingAppointments": false
        },
        {
          "date": "2024-12-31",
          "holidayName": "New Year's Eve",
          "cutOffTime": "12:00",
          "isAcceptingAppointments": true
        },
        {
          "date": "2024-01-01",
          "holidayName": "New Year's Day",
          "cutOffTime": null,
          "isAcceptingAppointments": false
        },
        {
          "date": "2024-07-04",
          "holidayName": "Independence Day",
          "cutOffTime": null,
          "isAcceptingAppointments": false
        }
      ],
      "businessLinks": {
        "financingLink": "https://www.closetsbydesign.com/atlanta/financing",
        "paymentLink": "https://payments.closetsbydesign.com/atlanta"
      },
      "reviewLinks": {
        "google": {
          "placeId": "ChIJdd4hrwug8YcRnWQ7y_6G2C0",
          "link": "https://g.co/kgs/TW5NTNQ"
        },
        "yelp": {
          "link": "https://www.yelp.com/biz/closets-by-design-atlanta"
        },
        "facebook": {
          "link": "https://www.facebook.com/ClosetsByDesignAtlanta/reviews"
        },
        "bbb": {
          "link": "https://www.bbb.org/us/ga/atlanta/profile/closet-organizers/closets-by-design-0443-1000012345"
        }
      },
      "socialMedia": {
        "twitter": "https://twitter.com/closetsbydesign",
        "instagram": "https://www.instagram.com/closetsbydesign.atlanta",
        "tiktok": "https://www.tiktok.com/@closetsbydesign",
        "pinterest": "https://www.pinterest.com/closetsbydesign",
        "youtube": "https://www.youtube.com/c/ClosetsByDesign",
        "facebook": "https://www.facebook.com/ClosetsByDesignAtlanta",
        "linkedin": "https://www.linkedin.com/company/closets-by-design"
      },
      "areasConnected": [
        {
          "areaName": "North Atlanta",
          "slug": "north-atlanta"
        },
        {
          "areaName": "Buckhead",
          "slug": "buckhead"
        },
        {
          "areaName": "Midtown",
          "slug": "midtown"
        },
        {
          "areaName": "Sandy Springs",
          "slug": "sandy-springs"
        }
      ],
      "employeeGroups": [
        {
          "groupName": "Designers",
          "employees": [
            {
              "profileImage": "https://cdn.example.com/employees/sarah-johnson.jpg",
              "name": "Sarah Johnson",
              "slug": "sarahj",
              "title": "Senior Design Consultant",
              "rating": 4.9
            },
            {
              "profileImage": "https://cdn.example.com/employees/mike-chen.jpg",
              "name": "Mike Chen",
              "slug": "mikec",
              "title": "Design Consultant",
              "rating": 4.7
            }
          ]
        },
        {
          "groupName": "Installers",
          "employees": [
            {
              "profileImage": "https://cdn.example.com/employees/david-martinez.jpg",
              "name": "David Martinez",
              "slug": "davidm",
              "title": "Lead Installer",
              "rating": 4.8
            },
            {
              "profileImage": "https://cdn.example.com/employees/tom-wilson.jpg",
              "name": "Tom Wilson",
              "slug": "tomw",
              "title": "Installation Specialist",
              "rating": 4.6
            }
          ]
        }
      ],
      "hiringLink": "https://closets-by-design-atlanta.careerplug.com",
      "media": {
        "videoGallery": [
          {
            "title": "Master Bedroom Closet Transformation",
            "description": "Watch how we transformed a small closet into a luxury dressing room with custom organization solutions.",
            "url": "https://www.youtube.com/watch?v=example1",
            "thumbnailImage": "https://cdn.example.com/videos/thumbnails/master-bedroom-closet.jpg",
            "careerVideo": false
          },
          {
            "title": "Join Our Team - Career Opportunities",
            "description": "Discover exciting career opportunities with Closets by Design Atlanta and learn about our company culture.",
            "url": "https://www.youtube.com/watch?v=example2",
            "thumbnailImage": "https://cdn.example.com/videos/thumbnails/careers-video.jpg",
            "careerVideo": true
          }
        ],
        "inTheNews": [
          {
            "title": "Atlanta Business Journal Features Closets by Design's Growth",
            "description": "Local franchise recognized for outstanding customer service and innovative storage solutions in the Atlanta market.",
            "url": "https://www.bizjournals.com/atlanta/news/2024/01/closets-by-design-feature",
            "thumbnailImage": "https://cdn.example.com/news/thumbnails/abj-feature.jpg"
          },
          {
            "title": "Home & Garden Magazine Showcases Custom Closet Trends",
            "description": "Our Atlanta location's designs featured in the latest issue discussing 2024 home organization trends.",
            "url": "https://www.homeandgarden.com/closet-trends-2024-atlanta",
            "thumbnailImage": "https://cdn.example.com/news/thumbnails/home-garden-feature.jpg"
          }
        ],
        "blogPosts": [
          {
            "title": "From Chaos to Calm: The Johnson Family's Closet Makeover",
            "description": "How we helped a busy Atlanta family organize their master closet and create a peaceful morning routine.",
            "body": "The Johnson family came to us with a common problem - a cluttered master closet that made getting ready each morning stressful...",
            "previewImage": "https://cdn.example.com/blog/johnson-family-closet.jpg",
            "clientStory": true,
            "clientID" :  1234567,
            "metaData": {
              "metaTitle": "Atlanta Closet Makeover Success Story - Closets by Design",
              "metaDescription": "Read how Closets by Design Atlanta transformed the Johnson family's chaotic closet into an organized sanctuary.",
              "metaKeywords": "Atlanta closet organization, custom closet design, client success story, home organization"
            }
          },
          {
            "title": "5 Signs Your Closet Needs a Professional Makeover",
            "description": "Expert tips on recognizing when it's time to invest in a custom closet solution for your Atlanta home.",
            "body": "Is your closet working against you instead of for you? Here are five clear signs that indicate it's time for a professional closet makeover...",
            "image": "https://cdn.example.com/blog/closet-makeover-signs.jpg",
            "clientStory": false,
            "clientID" :  "",
            "metaData": {
              "metaTitle": "When to Get a Custom Closet Makeover | Atlanta Home Organization",
              "metaDescription": "Learn the key signs that indicate your Atlanta home needs a professional closet organization solution.",
              "metaKeywords": "closet makeover, Atlanta home organization, custom closet, professional organizer"
            }
          }
        ]
      }
    },
    {
      "locationId": "8e29f1bc-3d47-4a82-9f65-7c1b8d4e2a90",
      "locationExternalId": "LOC5",
      "businessType": {
        "franchise": true
      },
      "rating": 4.7,
      "mainImage": "https://cdn.example.com/locations/marietta/main-showroom.jpg",
      "locationName": "Town Center Square",
      "slug": "town-center-square",
      "description": "Premium custom storage solutions for Marietta and surrounding communities. Our expert design team creates beautiful, functional closets and organizational systems tailored to your lifestyle.",
      "address": {
        "address1": "2500 Roswell Road",
        "address2": "Building B",
        "city": "Athens",
        "state": "Georgia",
        "shortState": "GA",
        "zip": "30062",
        "country": "United States"
      },
      "contactInformation": {
        "callCenterNumber": "+1-800-CLOSETS",
        "customerServiceNumber": "+1-770-555-0234",
        "officeNumber": "+1-770-555-0200",
        "email": "marietta@closetsbydesign.com"
      },
      "openingHours": [
        {
          "dayOfWeek": "Monday",
          "openTime": "09:00",
          "closeTime": "17:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Tuesday",
          "openTime": "09:00",
          "closeTime": "17:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Wednesday",
          "openTime": "09:00",
          "closeTime": "17:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Thursday",
          "openTime": "09:00",
          "closeTime": "17:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Friday",
          "openTime": "09:00",
          "closeTime": "17:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Saturday",
          "openTime": "10:00",
          "closeTime": "15:00",
          "isClosed": false
        },
        {
          "dayOfWeek": "Sunday",
          "openTime": null,
          "closeTime": null,
          "isClosed": true
        }
      ],
      "schedulingHours": [
        {
          "dayOfWeek": "Monday",
          "cutOffTime": "14:00",
          "isAcceptingAppointments": true,
          "daysOut": 10
        },
        {
          "dayOfWeek": "Tuesday",
          "cutOffTime": "14:00",
          "isAcceptingAppointments": true,
          "daysOut": 10
        },
        {
          "dayOfWeek": "Wednesday",
          "cutOffTime": "14:00",
          "isAcceptingAppointments": true,
          "daysOut": 10
        },
        {
          "dayOfWeek": "Thursday",
          "cutOffTime": "14:00",
          "isAcceptingAppointments": true,
          "daysOut": 10
        },
        {
          "dayOfWeek": "Friday",
          "cutOffTime": "14:00",
          "isAcceptingAppointments": true,
          "daysOut": 10
        },
        {
          "dayOfWeek": "Saturday",
          "cutOffTime": "12:00",
          "isAcceptingAppointments": true,
          "daysOut": 10
        },
        {
          "dayOfWeek": "Sunday",
          "cutOffTime": null,
          "isAcceptingAppointments": false,
          "daysOut": null
        }
      ],
      "holidayOpeningHours": [
        {
          "date": "2024-12-25",
          "holidayName": "Christmas Day",
          "openTime": null,
          "closeTime": null,
          "isClosed": true
        },
        {
          "date": "2024-01-01",
          "holidayName": "New Year's Day",
          "openTime": null,
          "closeTime": null,
          "isClosed": true
        }
      ],
      "holidaySchedulingHours": [
        {
          "date": "2024-12-25",
          "holidayName": "Christmas Day",
          "cutOffTime": null,
          "isAcceptingAppointments": false
        },
        {
          "date": "2024-01-01",
          "holidayName": "New Year's Day",
          "cutOffTime": null,
          "isAcceptingAppointments": false
        }
      ],
      "businessLinks": {
        "financingLink": "https://www.closetsbydesign.com/marietta/financing",
        "paymentLink": "https://payments.closetsbydesign.com/marietta"
      },
      "reviewLinks": {
        "google": {
          "placeId": "ChIJd7X7JlZr9YgRkW_JdT8VZwA",
          "link": "https://g.co/kgs/UgxW7po"
        },
        "yelp": {
          "link": "https://www.yelp.com/biz/closets-by-design-marietta"
        },
        "facebook": {
          "link": "https://www.facebook.com/ClosetsByDesignMarietta/reviews"
        }
      },
      "socialMedia": {
        "instagram": "https://www.instagram.com/closetsbydesign.marietta",
        "facebook": "https://www.facebook.com/ClosetsByDesignMarietta"
      },
      "areasConnected": [
        {
          "areaName": "East Cobb",
          "slug": "east-cobb"
        },
        {
          "areaName": "Kennesaw",
          "slug": "kennesaw"
        }
      ],
      "employeeGroups": [
        {
          "groupName": "Designers",
          "employees": [
            {
              "profileImage": "https://cdn.example.com/employees/jennifer-lee.jpg",
              "name": "Jennifer Lee",
              "slug": "jenniferl",
              "title": "Design Consultant",
              "rating": 4.6
            }
          ]
        },
        {
          "groupName": "Installers",
          "employees": [
            {
              "profileImage": "https://cdn.example.com/employees/robert-smith.jpg",
              "name": "Robert Smith",
              "slug": "roberts",
              "title": "Installation Specialist",
              "rating": 4.5
            }
          ]
        }
      ],
      "hiringLink": "https://closets-by-design-marietta.careerplug.com",
      "media": {
        "videoGallery": [
          {
            "title": "Pantry Organization Solutions",
            "description": "See how we transformed a cluttered pantry into an organized storage masterpiece.",
            "url": "https://www.youtube.com/watch?v=example3",
            "thumbnailImage": "https://cdn.example.com/videos/thumbnails/pantry-organization.jpg",
            "careerVideo": false
          }
        ],
        "inTheNews": [
          {
            "title": "Marietta Daily Journal Highlights Local Business Success",
            "description": "Our Marietta location featured for community involvement and exceptional customer service.",
            "url": "https://www.mdjonline.com/news/local/closets-by-design-marietta-success",
            "thumbnailImage": "https://cdn.example.com/news/thumbnails/mdj-feature.jpg"
          }
        ],
        "blogPosts": [
          {
            "title": "Small Space, Big Impact: Maximizing Your Condo Closet",
            "description": "Expert tips for organizing small closets in Marietta condos and apartments.",
            "body": "Living in a condo doesn't mean you have to sacrifice organization...",
            "previewImage": "https://cdn.example.com/blog/condo-closet.jpg",
            "clientStory": false,
            "clientID": "",
            "metaData": {
              "metaTitle": "Small Closet Organization Tips | Marietta Condo Storage Solutions",
              "metaDescription": "Learn how to maximize your small closet space with expert organization tips from Closets by Design Marietta.",
              "metaKeywords": "small closet organization, Marietta condo storage, apartment closet, space maximization"
            }
          }
        ]
      }
    }
  ]
}


