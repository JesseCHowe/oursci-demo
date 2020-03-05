const rfcDataRaw = [
  {
    "Farmer": "karen bahre",
    "Farm Practices": "organic nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 26
  },
  {
    "Farmer": "doug and cathy conover",
    "Farm Practices": "organic cover_crops nospray",
    "Type": "grape",
    "Size cm": 11,
    "Brix": 24.8
  },
  {
    "Farmer": "Adam Lovelace",
    "Farm Practices": "organic nospray notill",
    "Type": "cherry_tomato",
    "Size cm": 20,
    "Brix": 21.1
  },
  {
    "Farmer": "Karl",
    "Farm Practices": "organic",
    "Type": "grape",
    "Size cm": 19,
    "Brix": 19.3
  },
  {
    "Farmer": "Karl",
    "Farm Practices": "organic",
    "Type": "grape",
    "Size cm": 18,
    "Brix": 18.6
  },
  {
    "Farmer": "Karl",
    "Farm Practices": "organic",
    "Type": "grape",
    "Size cm": 17,
    "Brix": 18
  },
  {
    "Farmer": "Lees One Fortune Farm",
    "Farm Practices": "nospray",
    "Type": "grape",
    "Size cm": 27,
    "Brix": 15.9
  },
  {
    "Farmer": "marshall epstein",
    "Farm Practices": "cover_crops",
    "Type": "grape",
    "Size cm": 16,
    "Brix": 15.8
  },
  {
    "Farmer": "marshall epstein",
    "Farm Practices": "cover_crops",
    "Type": "grape",
    "Size cm": 17,
    "Brix": 15.4
  },
  {
    "Farmer": "Lees One Fortune Farm",
    "Farm Practices": "nospray",
    "Type": "grape",
    "Size cm": 25,
    "Brix": 15.3
  },
  {
    "Farmer": "Lees One Fortune Farm",
    "Farm Practices": "nospray",
    "Type": "grape",
    "Size cm": 29,
    "Brix": 14.8
  },
  {
    "Farmer": "marshall epstein",
    "Farm Practices": "cover_crops",
    "Type": "grape",
    "Size cm": 19,
    "Brix": 14.2
  },
  {
    "Farmer": "Janice Brewer",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "kale",
    "Size cm": 173,
    "Brix": 14.1
  },
  {
    "Farmer": "Pauline Chiquet",
    "Farm Practices": "certified_organic notill cover_crops",
    "Type": "kale",
    "Size cm": "",
    "Brix": 13.9
  },
  {
    "Farmer": "Ed Vanderbeck",
    "Farm Practices": "organic nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 13.3
  },
  {
    "Farmer": "Ed Vanderbeck",
    "Farm Practices": "organic nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 12.7
  },
  {
    "Farmer": "daren hall",
    "Farm Practices": "nospray certified_organic",
    "Type": "kale",
    "Size cm": "",
    "Brix": 12.4
  },
  {
    "Farmer": "Goranson Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "cherry_tomato",
    "Size cm": 21,
    "Brix": 12.3
  },
  {
    "Farmer": "Mike",
    "Farm Practices": "organic",
    "Type": "kale",
    "Size cm": 186,
    "Brix": 12.2
  },
  {
    "Farmer": "Janice Brewer",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "kale",
    "Size cm": 190,
    "Brix": 12.1
  },
  {
    "Farmer": "ben whatley",
    "Farm Practices": "certified_organic cover_crops nospray",
    "Type": "carrot",
    "Size cm": 23,
    "Brix": 11.9
  },
  {
    "Farmer": "ben whatley",
    "Farm Practices": "certified_organic cover_crops nospray",
    "Type": "carrot",
    "Size cm": 36,
    "Brix": 11.5
  },
  {
    "Farmer": "Rockmont Farm",
    "Farm Practices": "organic notill",
    "Type": "carrot",
    "Size cm": 20,
    "Brix": 11.5
  },
  {
    "Farmer": "ben whatley",
    "Farm Practices": "certified_organic cover_crops nospray",
    "Type": "carrot",
    "Size cm": 23,
    "Brix": 11
  },
  {
    "Farmer": "daren hall",
    "Farm Practices": "nospray certified_organic",
    "Type": "kale",
    "Size cm": "",
    "Brix": 11
  },
  {
    "Farmer": "doug and cathy conover",
    "Farm Practices": "organic",
    "Type": "kale",
    "Size cm": "",
    "Brix": 11
  },
  {
    "Farmer": "Pauline Chiquet",
    "Farm Practices": "certified_organic notill cover_crops",
    "Type": "kale",
    "Size cm": "",
    "Brix": 11
  },
  {
    "Farmer": "michael moss",
    "Farm Practices": "certified_organic cover_crops nospray",
    "Type": "spinach",
    "Size cm": 120,
    "Brix": 10.9
  },
  {
    "Farmer": "daren hall",
    "Farm Practices": "nospray certified_organic",
    "Type": "kale",
    "Size cm": "",
    "Brix": 10.6
  },
  {
    "Farmer": "Scott Parker",
    "Farm Practices": "organic notill nospray",
    "Type": "kale",
    "Size cm": 287,
    "Brix": 10.5
  },
  {
    "Farmer": "Two Farmers Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "kale",
    "Size cm": 480,
    "Brix": 10.3
  },
  {
    "Farmer": "Scott Parker",
    "Farm Practices": "organic notill nospray",
    "Type": "kale",
    "Size cm": 287,
    "Brix": 10.3
  },
  {
    "Farmer": "Josh Bristol",
    "Farm Practices": "cover_crops nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 10.3
  },
  {
    "Farmer": "ed vanderbeck",
    "Farm Practices": "organic nospray",
    "Type": "kale",
    "Size cm": 215,
    "Brix": 10.1
  },
  {
    "Farmer": "Two Farmers Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "kale",
    "Size cm": 480,
    "Brix": 10
  },
  {
    "Farmer": "Two Farmers Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "kale",
    "Size cm": 480,
    "Brix": 10
  },
  {
    "Farmer": "organics today",
    "Farm Practices": "certified_organic",
    "Type": "kale",
    "Size cm": 220,
    "Brix": 9.9
  },
  {
    "Farmer": "organics today",
    "Farm Practices": "certified_organic",
    "Type": "kale",
    "Size cm": 220,
    "Brix": 9.9
  },
  {
    "Farmer": "organics today",
    "Farm Practices": "certified_organic",
    "Type": "kale",
    "Size cm": 220,
    "Brix": 9.9
  },
  {
    "Farmer": "Doug and Cathy Conover",
    "Farm Practices": "organic notill cover_crops nospray biodynamic",
    "Type": "cherry_tomato",
    "Size cm": 25,
    "Brix": 9.6
  },
  {
    "Farmer": "Adam Lovelace",
    "Farm Practices": "organic cover_crops nospray",
    "Type": "kale",
    "Size cm": 152,
    "Brix": 9.5
  },
  {
    "Farmer": "Scott Parker",
    "Farm Practices": "organic notill nospray",
    "Type": "kale",
    "Size cm": 287,
    "Brix": 9.4
  },
  {
    "Farmer": "Hannah Beall, Saga Farm",
    "Farm Practices": "certified_organic",
    "Type": "kale",
    "Size cm": 117,
    "Brix": 9.3
  },
  {
    "Farmer": "Two Farmers Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "carrot",
    "Size cm": 19,
    "Brix": 9.2
  },
  {
    "Farmer": "doug and cathy conover",
    "Farm Practices": "organic cover_crops nospray",
    "Type": "grape",
    "Size cm": 10,
    "Brix": 9.2
  },
  {
    "Farmer": "Josh Bristol",
    "Farm Practices": "cover_crops nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 9.2
  },
  {
    "Farmer": "Sebastopol Farmers Market",
    "Farm Practices": "certified_organic notill nospray biodynamic",
    "Type": "kale",
    "Size cm": "",
    "Brix": 9.1
  },
  {
    "Farmer": "Rockmont Farm",
    "Farm Practices": "organic notill",
    "Type": "kale",
    "Size cm": 155,
    "Brix": 9
  },
  {
    "Farmer": "Pauline Chiquet",
    "Farm Practices": "certified_organic notill cover_crops",
    "Type": "kale",
    "Size cm": "",
    "Brix": 9
  },
  {
    "Farmer": "Karl",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 37,
    "Brix": 8.9
  },
  {
    "Farmer": "Two Farmers Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "carrot",
    "Size cm": 26,
    "Brix": 8.9
  },
  {
    "Farmer": "Pauline Chiquet",
    "Farm Practices": "certified_organic notill cover_crops",
    "Type": "kale",
    "Size cm": "",
    "Brix": 8.9
  },
  {
    "Farmer": "Pauline Chiquet",
    "Farm Practices": "certified_organic notill cover_crops",
    "Type": "kale",
    "Size cm": "",
    "Brix": 8.9
  },
  {
    "Farmer": "Firefighters",
    "Farm Practices": "notill",
    "Type": "spinach",
    "Size cm": 286,
    "Brix": 8.9
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 29,
    "Brix": 8.7
  },
  {
    "Farmer": "Kim",
    "Farm Practices": "certified_organic",
    "Type": "carrot",
    "Size cm": 40,
    "Brix": 8.6
  },
  {
    "Farmer": "Karl",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 35,
    "Brix": 8.6
  },
  {
    "Farmer": "Ed Vanderbeck",
    "Farm Practices": "organic nospray",
    "Type": "carrot",
    "Size cm": 28,
    "Brix": 8.6
  },
  {
    "Farmer": "judy sopenski",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 23,
    "Brix": 8.6
  },
  {
    "Farmer": "gilman mucaj",
    "Farm Practices": "organic nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 8.6
  },
  {
    "Farmer": "Indian Head Farm",
    "Farm Practices": "",
    "Type": "carrot",
    "Size cm": 28,
    "Brix": 8.5
  },
  {
    "Farmer": "Produce Place",
    "Farm Practices": "none",
    "Type": "kale",
    "Size cm": 360,
    "Brix": 8.5
  },
  {
    "Farmer": "Produce Place",
    "Farm Practices": "none",
    "Type": "kale",
    "Size cm": 360,
    "Brix": 8.5
  },
  {
    "Farmer": "Produce Place",
    "Farm Practices": "none",
    "Type": "kale",
    "Size cm": 360,
    "Brix": 8.5
  },
  {
    "Farmer": "Goranson Farm",
    "Farm Practices": "certified_organic",
    "Type": "carrot",
    "Size cm": 39,
    "Brix": 8.4
  },
  {
    "Farmer": "gilman mucaj",
    "Farm Practices": "organic nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 8.4
  },
  {
    "Farmer": "Goranson Farm",
    "Farm Practices": "certified_organic",
    "Type": "carrot",
    "Size cm": 42,
    "Brix": 8.3
  },
  {
    "Farmer": "Karl",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 37,
    "Brix": 8.3
  },
  {
    "Farmer": "Wade's farm stand",
    "Farm Practices": "",
    "Type": "carrot",
    "Size cm": 37,
    "Brix": 8.3
  },
  {
    "Farmer": "catherine blackwell",
    "Farm Practices": "cover_crops",
    "Type": "carrot",
    "Size cm": 29,
    "Brix": 8.3
  },
  {
    "Farmer": "Two Farmers Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "carrot",
    "Size cm": 23,
    "Brix": 8.3
  },
  {
    "Farmer": "michael moss",
    "Farm Practices": "certified_organic cover_crops nospray",
    "Type": "kale",
    "Size cm": 192,
    "Brix": 8.3
  },
  {
    "Farmer": "denison farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "carrot",
    "Size cm": 37,
    "Brix": 8.2
  },
  {
    "Farmer": "Goranson Farm",
    "Farm Practices": "certified_organic",
    "Type": "carrot",
    "Size cm": 35,
    "Brix": 8.2
  },
  {
    "Farmer": "catherine blackwell",
    "Farm Practices": "cover_crops",
    "Type": "carrot",
    "Size cm": 24,
    "Brix": 8.2
  },
  {
    "Farmer": "Firefighters",
    "Farm Practices": "notill",
    "Type": "cherry_tomato",
    "Size cm": 15,
    "Brix": 8.2
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "kale",
    "Size cm": 85,
    "Brix": 8.2
  },
  {
    "Farmer": "denison farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "carrot",
    "Size cm": 35,
    "Brix": 8.1
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 25,
    "Brix": 8.1
  },
  {
    "Farmer": "Kim",
    "Farm Practices": "certified_organic",
    "Type": "carrot",
    "Size cm": 21,
    "Brix": 8.1
  },
  {
    "Farmer": "Mike",
    "Farm Practices": "organic",
    "Type": "cherry_tomato",
    "Size cm": 26,
    "Brix": 8.1
  },
  {
    "Farmer": "emily tuller",
    "Farm Practices": "",
    "Type": "cherry_tomato",
    "Size cm": 25,
    "Brix": 8.1
  },
  {
    "Farmer": "michael moss",
    "Farm Practices": "certified_organic cover_crops nospray",
    "Type": "kale",
    "Size cm": 242,
    "Brix": 8.1
  },
  {
    "Farmer": "denison farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "carrot",
    "Size cm": 39,
    "Brix": 8
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 34,
    "Brix": 8
  },
  {
    "Farmer": "judy sopenski",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 30,
    "Brix": 8
  },
  {
    "Farmer": "cornucopia",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 22,
    "Brix": 8
  },
  {
    "Farmer": "bruno farm stand",
    "Farm Practices": "",
    "Type": "carrot",
    "Size cm": "",
    "Brix": 8
  },
  {
    "Farmer": "ben whatley",
    "Farm Practices": "certified_organic cover_crops nospray greenhouse",
    "Type": "lettuce",
    "Size cm": 92,
    "Brix": 8
  },
  {
    "Farmer": "Green Mtn Girls",
    "Farm Practices": "organic notill",
    "Type": "carrot",
    "Size cm": 41,
    "Brix": 7.9
  },
  {
    "Farmer": "Green Mtn Girls",
    "Farm Practices": "organic notill",
    "Type": "carrot",
    "Size cm": 24,
    "Brix": 7.9
  },
  {
    "Farmer": "Ed Vanderbeck",
    "Farm Practices": "organic nospray",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 7.9
  },
  {
    "Farmer": "michael moss",
    "Farm Practices": "certified_organic cover_crops nospray",
    "Type": "kale",
    "Size cm": 202,
    "Brix": 7.9
  },
  {
    "Farmer": "Carol and Jim Buroga",
    "Farm Practices": "organic notill nospray",
    "Type": "lettuce",
    "Size cm": "",
    "Brix": 7.9
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 28,
    "Brix": 7.8
  },
  {
    "Farmer": "Indian Head Farm",
    "Farm Practices": "",
    "Type": "carrot",
    "Size cm": 25,
    "Brix": 7.8
  },
  {
    "Farmer": "Indian Head Farm",
    "Farm Practices": "",
    "Type": "carrot",
    "Size cm": 24,
    "Brix": 7.8
  },
  {
    "Farmer": "Janice Wiles",
    "Farm Practices": "certified_organic",
    "Type": "carrot",
    "Size cm": 21,
    "Brix": 7.8
  },
  {
    "Farmer": "Ed Vanderbeck",
    "Farm Practices": "organic nospray",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 7.8
  },
  {
    "Farmer": "karen bahre",
    "Farm Practices": "organic nospray",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 7.8
  },
  {
    "Farmer": "Paula and David Shatkin",
    "Farm Practices": "organic notill nospray",
    "Type": "cherry_tomato",
    "Size cm": 20,
    "Brix": 7.8
  },
  {
    "Farmer": "indian head farm",
    "Farm Practices": "",
    "Type": "kale",
    "Size cm": 332,
    "Brix": 7.8
  },
  {
    "Farmer": "Mike",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 108,
    "Brix": 7.8
  },
  {
    "Farmer": "ben whatley",
    "Farm Practices": "certified_organic cover_crops greenhouse nospray",
    "Type": "spinach",
    "Size cm": 123,
    "Brix": 7.8
  },
  {
    "Farmer": "ed vanderbeck",
    "Farm Practices": "organic nospray",
    "Type": "spinach",
    "Size cm": 101,
    "Brix": 7.8
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 34,
    "Brix": 7.7
  },
  {
    "Farmer": "Ed Vanderbeck",
    "Farm Practices": "organic nospray",
    "Type": "cherry_tomato",
    "Size cm": 29,
    "Brix": 7.7
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "cherry_tomato",
    "Size cm": 24,
    "Brix": 7.7
  },
  {
    "Farmer": "Janice Wiles",
    "Farm Practices": "certified_organic",
    "Type": "carrot",
    "Size cm": 19,
    "Brix": 7.6
  },
  {
    "Farmer": "personal garden",
    "Farm Practices": "certified_organic",
    "Type": "cherry_tomato",
    "Size cm": 361,
    "Brix": 7.6
  },
  {
    "Farmer": "personal garden",
    "Farm Practices": "certified_organic",
    "Type": "cherry_tomato",
    "Size cm": 361,
    "Brix": 7.6
  },
  {
    "Farmer": "personal garden",
    "Farm Practices": "certified_organic",
    "Type": "cherry_tomato",
    "Size cm": 341,
    "Brix": 7.6
  },
  {
    "Farmer": "John Hjan",
    "Farm Practices": "organic",
    "Type": "cherry_tomato",
    "Size cm": 26,
    "Brix": 7.6
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "cherry_tomato",
    "Size cm": 25,
    "Brix": 7.6
  },
  {
    "Farmer": "Wade's farm stand",
    "Farm Practices": "",
    "Type": "carrot",
    "Size cm": 41,
    "Brix": 7.5
  },
  {
    "Farmer": "judy sopenski",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 33,
    "Brix": 7.5
  },
  {
    "Farmer": "Doug and Cathy Conover",
    "Farm Practices": "organic notill nospray biodynamic",
    "Type": "carrot",
    "Size cm": 22,
    "Brix": 7.5
  },
  {
    "Farmer": "emily tuller",
    "Farm Practices": "cover_crops",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 7.5
  },
  {
    "Farmer": "Doug and Cathy Conover",
    "Farm Practices": "organic notill cover_crops nospray biodynamic",
    "Type": "cherry_tomato",
    "Size cm": 27,
    "Brix": 7.5
  },
  {
    "Farmer": "emily tuller",
    "Farm Practices": "",
    "Type": "cherry_tomato",
    "Size cm": 23,
    "Brix": 7.5
  },
  {
    "Farmer": "Doug and Cathy Conover",
    "Farm Practices": "organic notill nospray biodynamic",
    "Type": "carrot",
    "Size cm": 29,
    "Brix": 7.4
  },
  {
    "Farmer": "Goranson Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 7.4
  },
  {
    "Farmer": "karen bahre",
    "Farm Practices": "organic nospray",
    "Type": "cherry_tomato",
    "Size cm": 19,
    "Brix": 7.4
  },
  {
    "Farmer": "emily tuller",
    "Farm Practices": "cover_crops",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 7.3
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 31,
    "Brix": 7.2
  },
  {
    "Farmer": "Thomas Schneider",
    "Farm Practices": "biodynamic cover_crops notill",
    "Type": "carrot",
    "Size cm": 27,
    "Brix": 7.2
  },
  {
    "Farmer": "emily tuller",
    "Farm Practices": "cover_crops",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 7.2
  },
  {
    "Farmer": "Rockmont Farm",
    "Farm Practices": "organic notill",
    "Type": "carrot",
    "Size cm": 32,
    "Brix": 7.1
  },
  {
    "Farmer": "Bumbleroot Farm",
    "Farm Practices": "certified_organic",
    "Type": "carrot",
    "Size cm": 24,
    "Brix": 7.1
  },
  {
    "Farmer": "ben whatley",
    "Farm Practices": "certified_organic cover_crops greenhouse nospray",
    "Type": "spinach",
    "Size cm": 110,
    "Brix": 7.1
  },
  {
    "Farmer": "Sebastopol Farmers Market",
    "Farm Practices": "certified_organic notill nospray biodynamic",
    "Type": "carrot",
    "Size cm": 28,
    "Brix": 7
  },
  {
    "Farmer": "Josh Bristol",
    "Farm Practices": "cover_crops nospray",
    "Type": "carrot",
    "Size cm": 2.7,
    "Brix": 7
  },
  {
    "Farmer": "olish farms",
    "Farm Practices": "",
    "Type": "cherry_tomato",
    "Size cm": 31,
    "Brix": 7
  },
  {
    "Farmer": "judy sopenski",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 26,
    "Brix": 6.9
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "carrot",
    "Size cm": 15,
    "Brix": 6.9
  },
  {
    "Farmer": "Greg Hazelton",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 6.9
  },
  {
    "Farmer": "Julie Rawson",
    "Farm Practices": "certified_organic",
    "Type": "kale",
    "Size cm": "",
    "Brix": 6.9
  },
  {
    "Farmer": "Mike",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 20,
    "Brix": 6.8
  },
  {
    "Farmer": "Rockmont Farm",
    "Farm Practices": "organic notill",
    "Type": "carrot",
    "Size cm": 26,
    "Brix": 6.7
  },
  {
    "Farmer": "olish farms",
    "Farm Practices": "",
    "Type": "cherry_tomato",
    "Size cm": 26,
    "Brix": 6.6
  },
  {
    "Farmer": "Produce Place",
    "Farm Practices": "none",
    "Type": "kale",
    "Size cm": 30,
    "Brix": 6.6
  },
  {
    "Farmer": "judy sopenski",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 25,
    "Brix": 6.5
  },
  {
    "Farmer": "dan waters",
    "Farm Practices": "",
    "Type": "cherry_tomato",
    "Size cm": 21,
    "Brix": 6.5
  },
  {
    "Farmer": "Rockmont Farm",
    "Farm Practices": "organic notill",
    "Type": "kale",
    "Size cm": 134,
    "Brix": 6.5
  },
  {
    "Farmer": "Two Farmers Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "carrot",
    "Size cm": 26,
    "Brix": 6.4
  },
  {
    "Farmer": "Dr. John Wilson Community Garden",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 6.4
  },
  {
    "Farmer": "Josh Bristol",
    "Farm Practices": "cover_crops nospray",
    "Type": "carrot",
    "Size cm": 25,
    "Brix": 6.3
  },
  {
    "Farmer": "emily tuller",
    "Farm Practices": "cover_crops",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 6.3
  },
  {
    "Farmer": "Paula and David Shatkin",
    "Farm Practices": "organic notill nospray",
    "Type": "grape",
    "Size cm": 11,
    "Brix": 6.3
  },
  {
    "Farmer": "Scott Parker",
    "Farm Practices": "organic notill nospray",
    "Type": "cherry_tomato",
    "Size cm": 21,
    "Brix": 6.2
  },
  {
    "Farmer": "Two Farmers Farm",
    "Farm Practices": "certified_organic cover_crops",
    "Type": "carrot",
    "Size cm": 20,
    "Brix": 6.1
  },
  {
    "Farmer": "Produce Place",
    "Farm Practices": "none",
    "Type": "kale",
    "Size cm": 26,
    "Brix": 6.1
  },
  {
    "Farmer": "cornucopia",
    "Farm Practices": "organic",
    "Type": "cherry_tomato",
    "Size cm": 35,
    "Brix": 6
  },
  {
    "Farmer": "dan waters",
    "Farm Practices": "",
    "Type": "cherry_tomato",
    "Size cm": 27,
    "Brix": 6
  },
  {
    "Farmer": "Scott Parker",
    "Farm Practices": "organic notill nospray",
    "Type": "cherry_tomato",
    "Size cm": 21,
    "Brix": 6
  },
  {
    "Farmer": "Scott Parker",
    "Farm Practices": "organic notill nospray",
    "Type": "cherry_tomato",
    "Size cm": 21,
    "Brix": 5.9
  },
  {
    "Farmer": "Green Mtn Girls",
    "Farm Practices": "organic notill",
    "Type": "spinach",
    "Size cm": "",
    "Brix": 5.9
  },
  {
    "Farmer": "Greg Hazelton",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "carrot",
    "Size cm": 24,
    "Brix": 5.8
  },
  {
    "Farmer": "cornucopia",
    "Farm Practices": "organic",
    "Type": "cherry_tomato",
    "Size cm": 31,
    "Brix": 5.8
  },
  {
    "Farmer": "personal garden",
    "Farm Practices": "certified_organic",
    "Type": "cherry_tomato",
    "Size cm": 19,
    "Brix": 5.8
  },
  {
    "Farmer": "karen bahre",
    "Farm Practices": "organic nospray",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 5.7
  },
  {
    "Farmer": "My garden",
    "Farm Practices": "organic nospray",
    "Type": "cherry_tomato",
    "Size cm": 20,
    "Brix": 5.7
  },
  {
    "Farmer": "cornucopia",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 20,
    "Brix": 5.6
  },
  {
    "Farmer": "Mike",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 18,
    "Brix": 5.6
  },
  {
    "Farmer": "Neal Katz",
    "Farm Practices": "organic notill nospray biodynamic",
    "Type": "kale",
    "Size cm": "",
    "Brix": 5.6
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 101,
    "Brix": 5.6
  },
  {
    "Farmer": "cornucopia",
    "Farm Practices": "organic",
    "Type": "cherry_tomato",
    "Size cm": 31,
    "Brix": 5.5
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "carrot",
    "Size cm": 18,
    "Brix": 5.4
  },
  {
    "Farmer": "Doug and Cathy Conover",
    "Farm Practices": "organic notill cover_crops nospray biodynamic",
    "Type": "cherry_tomato",
    "Size cm": 37,
    "Brix": 5.3
  },
  {
    "Farmer": "Dr. John Wilson Community Garden",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 5.2
  },
  {
    "Farmer": "Don Ludke",
    "Farm Practices": "certified_organic",
    "Type": "cherry_tomato",
    "Size cm": 30,
    "Brix": 5.1
  },
  {
    "Farmer": "Becki Janes",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "kale",
    "Size cm": 135,
    "Brix": 5.1
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 111,
    "Brix": 5.1
  },
  {
    "Farmer": "John Hjan",
    "Farm Practices": "organic",
    "Type": "cherry_tomato",
    "Size cm": 20,
    "Brix": 5
  },
  {
    "Farmer": "marshall epstein",
    "Farm Practices": "cover_crops",
    "Type": "kale",
    "Size cm": "",
    "Brix": 4.9
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 103,
    "Brix": 4.9
  },
  {
    "Farmer": "judy sopenski",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 24,
    "Brix": 4.8
  },
  {
    "Farmer": "Paula and David Shatkin",
    "Farm Practices": "organic notill nospray",
    "Type": "grape",
    "Size cm": 10,
    "Brix": 4.8
  },
  {
    "Farmer": "Becki Janes",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "lettuce",
    "Size cm": 93,
    "Brix": 4.8
  },
  {
    "Farmer": "lee kochel",
    "Farm Practices": "certified_organic",
    "Type": "cherry_tomato",
    "Size cm": 23,
    "Brix": 4.7
  },
  {
    "Farmer": "Dr. John Wilson Community Garden",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 4.7
  },
  {
    "Farmer": "Bumbleroot Farm",
    "Farm Practices": "certified_organic",
    "Type": "spinach",
    "Size cm": "",
    "Brix": 4.7
  },
  {
    "Farmer": "cornucopia",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 20,
    "Brix": 4.6
  },
  {
    "Farmer": "Mike",
    "Farm Practices": "organic",
    "Type": "carrot",
    "Size cm": 18,
    "Brix": 4.6
  },
  {
    "Farmer": "Julie Rawson",
    "Farm Practices": "",
    "Type": "lettuce",
    "Size cm": 23,
    "Brix": 4.6
  },
  {
    "Farmer": "Carol and Jim Buroga",
    "Farm Practices": "organic notill nospray",
    "Type": "cherry_tomato",
    "Size cm": 126,
    "Brix": 4.4
  },
  {
    "Farmer": "Doug and Cathy Conover",
    "Farm Practices": "organic notill cover_crops nospray biodynamic",
    "Type": "cherry_tomato",
    "Size cm": 39,
    "Brix": 4.4
  },
  {
    "Farmer": "Becki Janes",
    "Farm Practices": "organic notill nospray",
    "Type": "cherry_tomato",
    "Size cm": 25,
    "Brix": 4.4
  },
  {
    "Farmer": "Dr. John Wilson Community Garden",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "kale",
    "Size cm": "",
    "Brix": 4.4
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 138,
    "Brix": 4.4
  },
  {
    "Farmer": "marshall epstein",
    "Farm Practices": "cover_crops",
    "Type": "kale",
    "Size cm": "",
    "Brix": 4.3
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 202,
    "Brix": 4.3
  },
  {
    "Farmer": "Dr. John Wilson Community Garden",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "cherry_tomato",
    "Size cm": 21,
    "Brix": 4.2
  },
  {
    "Farmer": "Dr. John Wilson Community Garden",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "cherry_tomato",
    "Size cm": 20,
    "Brix": 4.2
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic cover_crops",
    "Type": "lettuce",
    "Size cm": 151,
    "Brix": 4.2
  },
  {
    "Farmer": "lee kochel",
    "Farm Practices": "certified_organic",
    "Type": "cherry_tomato",
    "Size cm": 20,
    "Brix": 4.1
  },
  {
    "Farmer": "Janice Brewer",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "lettuce",
    "Size cm": 141,
    "Brix": 4.1
  },
  {
    "Farmer": "Karl",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 132,
    "Brix": 4.1
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 117,
    "Brix": 4.1
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "lettuce",
    "Size cm": 65,
    "Brix": 4.1
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "carrot",
    "Size cm": 10,
    "Brix": 4
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "carrot",
    "Size cm": 10,
    "Brix": 4
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 4
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 149,
    "Brix": 4
  },
  {
    "Farmer": "Dr. John Wilson Community Garden",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "cherry_tomato",
    "Size cm": 21,
    "Brix": 3.9
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 172,
    "Brix": 3.9
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 166,
    "Brix": 3.9
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 200,
    "Brix": 3.8
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 160,
    "Brix": 3.8
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 110,
    "Brix": 3.8
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 100,
    "Brix": 3.8
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "cherry_tomato",
    "Size cm": 28,
    "Brix": 3.7
  },
  {
    "Farmer": "monticello community garden",
    "Farm Practices": "certified_organic",
    "Type": "cherry_tomato",
    "Size cm": 22,
    "Brix": 3.7
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 149,
    "Brix": 3.7
  },
  {
    "Farmer": "Karl",
    "Farm Practices": "organic cover_crops",
    "Type": "lettuce",
    "Size cm": 149,
    "Brix": 3.7
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 133,
    "Brix": 3.7
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "lettuce",
    "Size cm": 77.5,
    "Brix": 3.7
  },
  {
    "Farmer": "Paula and David Shatkin",
    "Farm Practices": "organic notill nospray",
    "Type": "grape",
    "Size cm": 11,
    "Brix": 3.6
  },
  {
    "Farmer": "Mike",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 115,
    "Brix": 3.6
  },
  {
    "Farmer": "Mike",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 110,
    "Brix": 3.6
  },
  {
    "Farmer": "Janice Brewer",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "lettuce",
    "Size cm": 151,
    "Brix": 3.5
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "lettuce",
    "Size cm": 151,
    "Brix": 3.5
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 125,
    "Brix": 3.5
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 102,
    "Brix": 3.5
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 100,
    "Brix": 3.5
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 191,
    "Brix": 3.4
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 125,
    "Brix": 3.4
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 138,
    "Brix": 3.3
  },
  {
    "Farmer": "kim",
    "Farm Practices": "certified_organic",
    "Type": "spinach",
    "Size cm": 82,
    "Brix": 3.3
  },
  {
    "Farmer": "ben whatley",
    "Farm Practices": "certified_organic cover_crops nospray greenhouse",
    "Type": "lettuce",
    "Size cm": 92,
    "Brix": 3.2
  },
  {
    "Farmer": "church community donation",
    "Farm Practices": "",
    "Type": "cherry_tomato",
    "Size cm": 33,
    "Brix": 3.1
  },
  {
    "Farmer": "Janice Brewer",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "lettuce",
    "Size cm": 181,
    "Brix": 3.1
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "lettuce",
    "Size cm": 167,
    "Brix": 3.1
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "lettuce",
    "Size cm": 100,
    "Brix": 3.1
  },
  {
    "Farmer": "Becki Janes",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "lettuce",
    "Size cm": 35,
    "Brix": 3.1
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic",
    "Type": "cherry_tomato",
    "Size cm": 25,
    "Brix": 3
  },
  {
    "Farmer": "catherine blackwell",
    "Farm Practices": "cover_crops",
    "Type": "lettuce",
    "Size cm": 140,
    "Brix": 3
  },
  {
    "Farmer": "catherine blackwell",
    "Farm Practices": "cover_crops",
    "Type": "lettuce",
    "Size cm": 140,
    "Brix": 3
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 134,
    "Brix": 3
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 114,
    "Brix": 3
  },
  {
    "Farmer": "ben whatley",
    "Farm Practices": "certified_organic cover_crops nospray greenhouse",
    "Type": "lettuce",
    "Size cm": 92,
    "Brix": 3
  },
  {
    "Farmer": "Josh Bristol",
    "Farm Practices": "cover_crops nospray",
    "Type": "lettuce",
    "Size cm": "",
    "Brix": 3
  },
  {
    "Farmer": "Sarah Johnston",
    "Farm Practices": "organic notill nospray",
    "Type": "lettuce",
    "Size cm": 202,
    "Brix": 2.9
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 169,
    "Brix": 2.9
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 126,
    "Brix": 2.9
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic cover_crops",
    "Type": "lettuce",
    "Size cm": 90,
    "Brix": 2.9
  },
  {
    "Farmer": "Josh Bristol",
    "Farm Practices": "cover_crops nospray",
    "Type": "lettuce",
    "Size cm": "",
    "Brix": 2.9
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 147,
    "Brix": 2.7
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 123,
    "Brix": 2.7
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 119,
    "Brix": 2.7
  },
  {
    "Farmer": "kim",
    "Farm Practices": "certified_organic",
    "Type": "spinach",
    "Size cm": 98,
    "Brix": 2.7
  },
  {
    "Farmer": "Greg Hazelton",
    "Farm Practices": "organic notill cover_crops nospray",
    "Type": "carrot",
    "Size cm": 21,
    "Brix": 2.6
  },
  {
    "Farmer": "Warren Wilson College Garden",
    "Farm Practices": "organic notill nospray",
    "Type": "lettuce",
    "Size cm": 120,
    "Brix": 2.6
  },
  {
    "Farmer": "Steve Chiarizio",
    "Farm Practices": "organic cover_crops",
    "Type": "lettuce",
    "Size cm": 95,
    "Brix": 2.6
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 158,
    "Brix": 2.5
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 138,
    "Brix": 2.5
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 132,
    "Brix": 2.4
  },
  {
    "Farmer": "olish farms",
    "Farm Practices": "",
    "Type": "lettuce",
    "Size cm": 183,
    "Brix": 2.3
  },
  {
    "Farmer": "Sarah Johnston",
    "Farm Practices": "organic notill nospray",
    "Type": "lettuce",
    "Size cm": 176,
    "Brix": 2.2
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 136,
    "Brix": 2.2
  },
  {
    "Farmer": "greener roots farm",
    "Farm Practices": "hydroponic",
    "Type": "lettuce",
    "Size cm": 133,
    "Brix": 2.2
  },
  {
    "Farmer": "kim",
    "Farm Practices": "certified_organic",
    "Type": "spinach",
    "Size cm": 90,
    "Brix": 2.2
  },
  {
    "Farmer": "olish farms",
    "Farm Practices": "",
    "Type": "lettuce",
    "Size cm": 157,
    "Brix": 2.1
  },
  {
    "Farmer": "olish farms",
    "Farm Practices": "",
    "Type": "lettuce",
    "Size cm": 152,
    "Brix": 2.1
  },
  {
    "Farmer": "Bumbleroot Farm",
    "Farm Practices": "certified_organic",
    "Type": "spinach",
    "Size cm": "",
    "Brix": 2.1
  },
  {
    "Farmer": "pending",
    "Farm Practices": "",
    "Type": "lettuce",
    "Size cm": 171,
    "Brix": 2
  },
  {
    "Farmer": "Sarah Johnston",
    "Farm Practices": "organic notill nospray",
    "Type": "lettuce",
    "Size cm": 223,
    "Brix": 1.9
  },
  {
    "Farmer": "pending",
    "Farm Practices": "",
    "Type": "lettuce",
    "Size cm": 155,
    "Brix": 1.9
  },
  {
    "Farmer": "Goranson Farm",
    "Farm Practices": "certified_organic",
    "Type": "lettuce",
    "Size cm": "",
    "Brix": 1.9
  },
  {
    "Farmer": "catherine blackwell",
    "Farm Practices": "cover_crops",
    "Type": "lettuce",
    "Size cm": 141,
    "Brix": 1.5
  },
  {
    "Farmer": "Sebastopol Farmers Market",
    "Farm Practices": "certified_organic notill nospray biodynamic",
    "Type": "lettuce",
    "Size cm": "",
    "Brix": 1.4
  }
];

var margin = { top: 0, right: 50, bottom: 0, left: 220 },
  width = 700 - margin.left - margin.right,
  height = 2000 - margin.top - margin.bottom;

var y = d3
  .scaleBand()
  .range([height, 0])
  .padding(0.2);

var x = d3.scaleLinear().range([0, width]);

    var rscale = d3.scaleLinear()
      .domain([0,480])
      .range([5, 15]);



const newObject = {};

rfcDataRaw.map(function(d) {
  const Farmer = d.Farmer.toLowerCase()
  if(newObject[Farmer]){
    newObject[d.Farmer.toLowerCase()].produce.push(
      {
        type: d.Type,
        farmPractice: d["Farm Practices"].split(" ").join("_"),
        size: d["Size cm"],
        brix: d.Brix,
        farmer: Farmer
      }
    )
  } else {
     newObject[Farmer] = {
       produce: [{
         farmer: Farmer,
         type: d.Type,
         farmPractice: d["Farm Practices"].split(" ").join("_"),
         size: d["Size cm"] || 0,
         brix: d.Brix,
       }]
  } 
  }
});

barHeight = (height * 2 * 0.4) / Object.keys(newObject).length;

y.domain(
  Object.keys(newObject).map(function(d) {
    return d;
  })
);
x.domain([
  0,26 
]); 

function createChart(type) {
      var svg2 = d3.select(".labelContainer")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", 50)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  
  var svg = d3.select(".container")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          const grid = [5,10,15,20,25,30];
       
  svg2.selectAll(".labels")
  .data(grid)
  .enter()
  .append("text")
  .attr("x", d=>  x(d))
  .attr("y", 45)
  .attr("text-anchor","middle")
  .text(d=> d );
     svg2
  .append("text")
  .attr("x", 230)
  .attr("y", 20)
  .attr("fill","gray")
  .attr("text-anchor","middle")
  .text("Brix Scale");
    svg2
  .append("text")
  .attr("x", -30)
  .attr("y", 45)
  .attr("text-anchor","middle")
  .text("Farmer");
  
  
  
svg  .selectAll(".line")
  .data(grid) 
  .enter()
  .append("line")
  .attr("x1", d=>  x(d))
  .attr("y1", 0)
  .attr("x2", d=> x(d))
  .attr("y2", height)
  .attr("stroke-dasharray", "2,5")
   .attr("stroke-width", 0.5)
   .attr("stroke", "#aaa");

  const testObject = Object.keys(newObject).map(farm => {
    return {
      farmer: farm.Farmer,
      produce: newObject[farm].produce.filter(o => {
        return o.type !== type
      })
    }
  });
  svg
  .selectAll(".bar")
  .data(testObject)
  .enter()
  .append("rect")
  .attr("class", function(d) {
    return "bar "
})
 
  .attr("x", function(d) {
    return x(d.Brix);
  })
  .attr("y", function(d) {
    return y(d.Farmer);
  })
  .attr("height", barHeight);

svg.append("g").call(d3.axisLeft(y));


  
 Object.keys(testObject).map(d => {
  const Farmer = d;
  const newData = testObject[Farmer].produce;

  svg
  .selectAll(".text")
  .data(newData)
  .enter()
  .append("circle")
  .attr("class", d => {
    return "circle " + d.type + " " + d.farmPractice
  })
  .attr("cx", function(d) {
    return x(d.brix)
  })
  .attr("cy", d => y(d.farmer) + 13)
  .attr("r", function(d){
    return rscale(d.size)
  });
})

}

createChart();

function myFunction(type) {
  const circles = document.querySelectorAll(".circle")
  const test = document.querySelectorAll(type)
  circles.forEach(o => o.setAttribute("style", "fill: rgba(0,0,0,0.1);"));
  test.forEach(o => o.setAttribute("style", "fill: "));
}

function myFunctionAll() {
  const circles = document.querySelectorAll(".circle")
  circles.forEach(o => o.setAttribute("style", "display: block;"));
}

function mySelect() {
  var x = document.getElementById("cars").value;
  const circles = document.querySelectorAll(`.circle`)
  const test = document.querySelectorAll(`.${x}`)
  circles.forEach(o => o.setAttribute("style", "fill: rgba(0,0,0,0.1);"));
  test.forEach(o => o.setAttribute("style", "fill: "));
}
