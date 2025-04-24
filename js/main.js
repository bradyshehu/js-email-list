const apiMail = `https://flynn.boolean.careers/exercises/api/random/mail`;
const emailContainer = document.getElementById("email-container");

const generateEmailSection = (email) => {
  return `
      <li class="p-3">${email}</li>
  `;
};

function getEmailArray() {
  const emailArray = [];
  for (i = 0; i < 10; i++) {
    axios.get(apiMail).then((response) => {
      emailArray.push(response.data.response);

      if (emailArray.length >= 10) {
        console.table(emailArray);
        let emailHtml = ``;
        emailArray.forEach((email) => {
          emailHtml += generateEmailSection(email);
        });
        emailContainer.innerHTML = emailHtml;
      }
    });
  }
}
getEmailArray();
