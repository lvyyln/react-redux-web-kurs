import React from 'react'

const ContactUs = () => {
    return (
<React.Fragment>
<div>
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="title">Зворотній зв'язок</h5>
      <p class="description">Не соромтеся звертатися до нас, якщо вам потрібна допомога, будь-яка допомога або інше запитання.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Ім'я" required/>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Емейл" required/>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Повідомлення" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send"/>
      </div>
    </form>
  </div>
</div>
</React.Fragment>
    )
};

export default ContactUs