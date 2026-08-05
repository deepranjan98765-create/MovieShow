export const dummyCastsData = [
  { name: "Jack Black", character: "Steve", profile_path: "https://image.tmdb.org/t/p/original/rt23O348Auv4O1164A4A6V6F1.jpg" },
  { name: "Jason Momoa", character: "Garrett", profile_path: "https://image.tmdb.org/t/p/original/71123O348Auv4O1164A4A6V6F1.jpg" }
];

export const dummyShowsData = [
  {
    "_id": "1126166",
    "id": 1126166,
    "title": "Flight Risk",
    "overview": "In this high-stakes suspense tactical thriller, Mark Wahlberg plays a pilot transporting an Air Marshal carrying a fugitive across the Alaskan wilderness.",
    "poster_path": "https://image.tmdb.org/t/p/original/41638Auv4O1164A4A6V6F1.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
    "genres": [{ "id": 28, "name": "Action" }, { "id": 80, "name": "Crime" }, { "id": 53, "name": "Thriller" }],
    "casts": dummyCastsData,
    "release_date": "2025-04-25",
    "original_language": "en",
    "tagline": "No law. Only disorder.",
    "vote_average": 6.537,
    "vote_count": 35960,
    "runtime": 107
  },
  {
    "_id": "950387",
    "id": 950387,
    "title": "A Minecraft Movie",
    "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld...",
    "poster_path": "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    "genres": [{ "id": 10751, "name": "Family" }, { "id": 35, "name": "Comedy" }, { "id": 12, "name": "Adventure" }],
    "casts": dummyCastsData,
    "release_date": "2025-03-31",
    "original_language": "en",
    "tagline": "Be there and be square.",
    "vote_average": 6.516,
    "vote_count": 15225,
    "runtime": 101
  },
  {
    "_id": "575265",
    "id": 575265,
    "title": "Mission: Impossible - The Final Reckoning",
    "overview": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity...",
    "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
    "genres": [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }],
    "casts": dummyCastsData,
    "release_date": "2025-05-17",
    "original_language": "en",
    "tagline": "Our lives are the sum of our choices.",
    "vote_average": 7.042,
    "vote_count": 19885,
    "runtime": 170
  }
];

export const dummyDateTimeData = {
  "2025-07-24": [
    { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
    { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" }
  ],
  "2025-07-25": [
    { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" }
  ]
};

export const dummyDashboardData = {
  "totalBookings": 14,
  "totalRevenue": 1517,
  "totalUser": 5,
  "activeShows": dummyShowsData.map(s => ({
    "_id": s._id,
    "movie": s,
    "showDateTime": "2025-06-30T02:30:00.000Z",
    "showPrice": 59,
    "occupiedSeats": {}
  }))
};

export const dummyBookingData = [
  {
    "_id": "68396334fb83252d82e17295",
    "user": { "name": "MovieFan" },
    "show": {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59
    },
    "amount": 118,
    "bookedSeats": ["A1", "A2"],
    "isPaid": true
  }
];
