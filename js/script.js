const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('We have a user');

      resolve(username);
    }, 2000);
  })
};

const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We have photos");

      resolve(['photo1', 'photo2']);
    }, 2000);
  })
};

const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We have photo details");

      resolve("Photo details");
    }, 2000);
  })
};

fetchUser('charad')
  .then((user) => fetchUserPhotos(user))
  .then((photos) => fetchPhotoDetails(photos[0]))
  .then((detail) => console.log(detail));
