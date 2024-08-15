const fetchUser = (username, callback) => {
  setTimeout(() => {
    console.log('Now we have the user');

    callback({ name: username });
  }, 2000);
};

const user = fetchUser('chara', (user) => {
  console.log(user);
});
