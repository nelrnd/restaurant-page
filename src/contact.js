export default function createContact() {
  const contactSection = document.createElement('div');
  const contactInfo = document.createElement('div');
  const contactForm = document.createElement('div');

  contactSection.classList.add('contact-section');

  const infoList = document.createElement('ul');

  const infoHeading = document.createElement('h2');
  infoHeading.textContent = 'Contact info';

  const tel = document.createElement('li');
  tel.textContent = '(212) 260-6143';
  const telIcon = document.createElement('img');
  telIcon.src = './icons/tel.svg';
  tel.prepend(telIcon);

  const mail = document.createElement('li');
  mail.textContent = 'contact@pizzaponzi.com';
  const mailIcon = document.createElement('img');
  mailIcon.src = './icons/mail.svg';
  mail.prepend(mailIcon);

  const address = document.createElement('li');
  address.innerHTML = '200 E 5th St New York, New York(NY), 10003';
  const addressIcon = document.createElement('img');
  addressIcon.src = './icons/address.svg';
  address.prepend(addressIcon);

  infoList.append(infoHeading, tel, mail, address);

  contactInfo.append(infoList);

  contactSection.append(contactInfo);

  const formHeading = document.createElement('h2');
  formHeading.textContent = 'Send us an email';

  const form = document.createElement('ul');
  form.innerHTML = `
  <form action="" method="post">
  <li>
    <label for="name">Name</label>
    <input type="text" id="name" name="name">
  </li>
  <li>
    <label for="mail">Email</label>
    <input type="email" id="mail" name="mail">
  </li>
  <li>
    <label for="message">Message</label>
    <textarea id="message" name="message"></textarea>
  </li>
  <li>
    <button>Send message</button>
  </li>
  </form>
  `;

  contactForm.append(formHeading, form);

  contactSection.append(contactForm);

  return contactSection;
}