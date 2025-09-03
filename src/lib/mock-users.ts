import type { UsersApiPayload } from '@/types/users'

export const mockUsersPayload: UsersApiPayload = {
  "users": [
    {
      "firstName": "Sarah",
      "lastName": "Johnson",
      "slug": "sarahj1",
      "employeeRole": "designer",
      "employeeTitle": "Senior Design Consultant",
      "profileImage": "https://cdn.example.com/employees/sarah-johnson.jpg",
      "employeeBio": {
        "title": "Creating Beautiful Spaces for Over 10 Years",
        "description": "Sarah brings a decade of experience in interior design and space optimization to every project. She specializes in luxury closet designs and has helped hundreds of families transform their homes. Her attention to detail and ability to maximize storage in any space has made her one of our top-rated designers."
      },
      "awards": [
        {
          "icon": "https://cdn.example.com/awards/icons/excellence-award.svg",
          "title": "Designer of the Year 2023",
          "description": "Recognized for outstanding customer satisfaction and innovative design solutions"
        },
        {
          "icon": "https://cdn.example.com/awards/icons/customer-choice.svg",
          "title": "Customer Choice Award",
          "description": "Consistently rated 5 stars by clients for exceptional service and design quality"
        },
        {
          "icon": "https://cdn.example.com/awards/icons/innovation.svg",
          "title": "Innovation in Storage Solutions",
          "description": "Awarded for creative problem-solving in challenging space optimization projects"
        },
        {
          "icon": "https://cdn.example.com/awards/icons/leadership.svg",
          "title": "Team Leadership Excellence",
          "description": "Recognized for mentoring junior designers and leading successful project teams"
        },
        {
          "icon": "https://cdn.example.com/awards/icons/leadership.svg",
          "title": "Team Leadership Excellence 2025",
          "description": "Recognized for mentoring junior designers and leading successful project teams"
        }
      ],
      "rating": 4.9,
      "locations": [
        {
          "name": "Atlanta",
          "slug": "atlanta",
          "areas": [
            {
              "name": "North Atlanta",
              "slug": "north-atlanta"
            },
            {
              "name": "Buckhead",
              "slug": "buckhead"
            },
            {
              "name": "Midtown",
              "slug": "midtown"
            }
          ]
        },
        {
          "name": "Willow Creek Plaza",
          "slug": "willow-creek-plaza",
          "areas": [
            {
              "name": "North Atlanta",
              "slug": "north-atlanta"
            },
          ],
        },
      ]
    },
    {
      "firstName": "Sarah",
      "lastName": "Johnson",
      "slug": "sarahj2",
      "employeeRole": "designer",
      "employeeTitle": "Design Consultant",
      "profileImage": "https://cdn.example.com/employees/sarah-johnson-2.jpg",
      "employeeBio": {
        "title": "Fresh Perspective in Custom Design",
        "description": "Sarah brings creative energy and modern design sensibilities to every project. With 3 years of experience in custom storage solutions, she excels at creating functional spaces that reflect her clients' personal style. Her enthusiasm for organization and eye for contemporary aesthetics make her a rising star in our design team."
      },
      "awards": [
        {
          "icon": "https://cdn.example.com/awards/icons/rookie-award.svg",
          "title": "Rising Star Designer 2024",
          "description": "Recognized for exceptional performance and client satisfaction in first years"
        },
        {
          "icon": "https://cdn.example.com/awards/icons/creativity.svg",
          "title": "Creative Design Excellence",
          "description": "Awarded for innovative use of space and modern design solutions"
        }
      ],
      "rating": 4.7,
      "locations": [
        {
          "name": "Marietta",
          "slug": "marietta",
          "areas": [
            {
              "name": "East Cobb",
              "slug": "east-cobb"
            },
            {
              "name": "Kennesaw",
              "slug": "kennesaw"
            }
          ]
        },
        {
          "name": "Willow Creek Plaza",
          "slug": "willow-creek-plaza",
          "areas": [
            {
              "name": "North Atlanta",
              "slug": "north-atlanta"
            },
          ],
        },
      ]
    },
    {
      "firstName": "David",
      "lastName": "Martinez",
      "slug": "davidm",
      "employeeRole": "installer",
      "employeeTitle": "Lead Installation Specialist",
      "profileImage": "https://cdn.example.com/employees/david-martinez.jpg",
      "employeeBio": {
        "title": "Precision Installation with 8 Years of Excellence",
        "description": "David is our lead installer with extensive experience in custom closet and storage system installation. His meticulous attention to detail ensures every project is completed to perfection. He takes pride in transforming design concepts into beautiful, functional reality while maintaining the highest quality standards."
      },
      "awards": [
        {
          "icon": "https://cdn.example.com/awards/icons/craftsmanship.svg",
          "title": "Master Craftsman Certification",
          "description": "Certified for exceptional skill in custom installation and finishing techniques"
        },
        {
          "icon": "https://cdn.example.com/awards/icons/safety-first.svg",
          "title": "Safety Excellence Award",
          "description": "Recognized for maintaining perfect safety record and training team members"
        },
        {
          "icon": "https://cdn.example.com/awards/icons/efficiency.svg",
          "title": "Installation Efficiency Leader",
          "description": "Consistently completes projects ahead of schedule without compromising quality"
        }
      ],
      "rating": 4.8,
      "locations": [
        {
          "name": "Atlanta",
          "slug": "atlanta",
          "areas": [
            {
              "name": "West Atlanta",
              "slug": "west-atlanta"
            },
            {
              "name": "Sandy Springs",
              "slug": "sandy-springs"
            },
            {
              "name": "Roswell",
              "slug": "roswell"
            }
          ]
        },
        {
          "name": "Marietta",
          "slug": "marietta",
          "areas": []
        },
        {
          "name": "Willow Creek Plaza",
          "slug": "willow-creek-plaza",
          "areas": [
            {
              "name": "North Atlanta",
              "slug": "north-atlanta"
            },
          ],
        },
      ]
    }
  ]
}

