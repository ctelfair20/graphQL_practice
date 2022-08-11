/* data.js */

const Users = [
  {
    id: 1,
    name: "Cynthia Telfair",
    email: "me@yahoo.com",
    posts: [
      {
        id: 1,
        title: "Debugging an Ionic Android App Using Chrome Dev Tools",
        published: true,
        link:
          "https://medium.com/@coderonfleek/debugging-an-ionic-android-app-using-chrome-dev-tools-6e139b79e8d2",
        author: 1,
        comments: [
          {
            id: 1,
            message: 'great post1'
          },
          {
            id: 2,
            message: 'great post2'
          }
        ]
      },
      {
        id: 2,
        title: "Hosting a Laravel Application on Azure Web App",
        published: true,
        link:
          "https://medium.com/@coderonfleek/hosting-a-laravel-application-on-azure-web-app-b55e12514c46",
        author: 1,
        comments: [
          {
            id: 3,
            message: 'great post3'
          },
          {
            id: 4,
            message: 'great post4'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Jane Paul",
    email: "jane@company.com",
    posts: []
  }
];


module.exports = {
  Users
};
