const apiMail = `https://flynn.boolean.careers/exercises/api/random/mail`;
function getEmailArray() {
  const emailArray = [];
  console.log("PRIMA DEL FOR");
  for (i = 0; i < 10; i++) {
    axios.get(apiMail).then((response) => {
      emailArray.push(response.data.response);

      if (emailArray.length === 10) {
        console.table(emailArray);
        emailArray.forEach((email) => {
          // GENERA HTML
        });
      }
    });
  }
}
getEmailArray();
