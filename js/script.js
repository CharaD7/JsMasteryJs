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

const displayData = async () => {
  const user = await fetchUser('Chara');
  const photos = await fetchUserPhotos(user);
  const detail = await fetchPhotoDetails(photos[0]);

  console.log(detail);
};

displayData();
