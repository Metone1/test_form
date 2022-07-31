new Vivus(
   'icon',
   {
      duration: 100
   }
);

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const countrie1 = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway'];
const countrie2 = ['Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe']

//===days===
for (let i = 31; i > 0; i--) {
   let days = document.querySelector('.days');
   days.insertAdjacentHTML('afterend', `<option>${i}</option >`)
}

//===months===
for (let i = month.length - 1; i >= 0; i--) {
   let months = document.querySelector('.months');
   months.insertAdjacentHTML('afterend', `<option>${month[i]}</option >`)
}

//===years===
for (let i = 1900; i < 2022; i++) {
   let years = document.querySelector('.years');
   years.insertAdjacentHTML('afterend', `<option>${i}</option >`)
}

//===countries===
for (let i = countrie2.length - 1; i >= 0; i--) {
   let countries = document.querySelector('.countries');
   countries.insertAdjacentHTML('afterend', `<option>${countrie2[i]}</option >`)
}

for (let i = countrie1.length - 1; i >= 0; i--) {
   let countries = document.querySelector('.countries');
   countries.insertAdjacentHTML('afterend', `<option>${countrie1[i]}</option >`)
}

//============== script ================
document.addEventListener("DOMContentLoaded", function () {
   // const inputs = document.querySelectorAll("[data-rule]");
   const gender = document.querySelector(".form__block-gender");
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      formValidate(form);
      let formData = new FormData(form);

      let response = await fetch('http://localhost:3000' {
         method: 'POST',
         body: formData
      });
      if (response.ok) {
         document.getElementById("elem").style.display = "none";
         document.getElementById("icon").style.display = "none";
         document.getElementById("wrapper__modal").style.display = "block";
         // document.getElementById("form").reset();
      }
      else {
         ErrorHandler();
      }

      function ErrorHandler() {
         let button = document.getElementById("shake");
         button.classList.toggle("shake");
         setTimeout(function () {
            button.classList.toggle("shake");
         }, 1000)
      }
   };

   //==================== validation ====================

   function formValidate(form) {
      let inputs = document.querySelectorAll("[data-rule]");

      for (let i = 0; i < inputs.length; i++) {
         let rule = inputs[i].dataset.rule;
         let elem = inputs[i];

         elem.addEventListener('change', () => elem.setCustomValidity(""))

         //======== first and last name ===========
         if (rule == 'firstName' || rule == 'lastName') {
            const pattern = /^[a-zA-Z\s]+$/i;
            (pattern.test(elem.value)) ? elem.classList.remove('invalid_color') : elem.classList.add('invalid_color');
         }
         //========= email ============
         else if (rule == 'email') {
            if (validateEmail(elem)) {
               elem.classList.remove('invalid_color');
               elem.classList.add('valid');
            }
            else {
               elem.classList.add('invalid_color');
               elem.classList.remove('valid');
            }
         }
         //========= gender ===========
         else if (rule == "gender") {
            elem.classList.remove('invalid');
            const sex = document.getElementsByName('gender');
            let radioCount = 0;
            for (let j = 0; j < sex.length; j++) {
               let radio = sex[j];
               gender.classList.add("invalid");
               if (radio.checked) {
                  radioCount++;
               }
            }
            if (radioCount > 0) gender.classList.remove("invalid")
         }
         //========== password ==========
         else if (rule == 'password1') {
            passwordTest(elem) ? elem.classList.remove('invalid') : elem.classList.add('invalid');
            if (!passwordTest(elem)) elem.setCustomValidity("Пароль должен содержать от 8 символов, заглавные и строчные буквы, а также цифры");
         }
         else if (rule == 'password2') {
            if (elem.value !== inputs[i - 1].value) {
               elem.classList.add('invalid');
               elem.setCustomValidity("Пароли не совпадают");
            }
            else if (elem.value == inputs[i - 1].value) {
               elem.classList.remove('invalid');
            }
         }


         //========== password test ==========
         function passwordTest(elem) {
            return /(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(elem.value);
         }
         //========== email test ==========
         function validateEmail(elem) {
            return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(elem.value);
         }
      }
   }
});