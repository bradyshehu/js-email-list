const emailArray = [];
const apiMail = `https://flynn.boolean.careers/exercises/api/random/mail`;

for (i = 0; i < 10; i++) {
  axios

    .get(apiMail)
    .then((response) => {
      Promise.all(emailArray).push(response.data.response);
    })
    .then(() => {
      console.table(emailArray);
    });
}
