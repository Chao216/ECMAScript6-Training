const githubfetch = async (githublogin) => {
  const response = await fetch(`https://api.github.com/users/${githublogin}`);
  const json = await response.json();
  const summary = `user's id is ${json.id}, user is following ${json.following} other users, he/she has ${json.public_repos} public repositories`;
  console.log(summary);
};

githubfetch("githubschool");
