window.onload = function () {
  const form = document.querySelector("#regiform");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let errors = ["שגיאה!"];

    if (checkIfMailExists(form.elements["input_email"].value)) {
      errors.push("קיים משתמש עם מייל זה");
    }

    const password = form.elements["input_password"].value;
    if (!passValid(password)) {
      //errors.push('The password mast be at least 10 characters and letters: "a-z", "A-Z" ')
      errors.push('"a-z", "A-Z" סיסמא חייבת להכיל לפחות 10 תווים ואותיות');
    }
    if (!PassConfirm(password, form.elements["confirm_password"].value)) {
      //errors.push("The password is not equals")
      errors.push("סיסמאות אינן תואמות");
    }

    if (!emailValid(form.elements["input_email"].value)) {
      errors.push("אימייל לא תקין");
    }

    if (errors.length > 1) {
      alert(errors.join("\n"));
    } else {
      alert("המשתמש נוסף בהצלחה");
    }

    return false;
  });

  const checkIfMailExists = (mail) => {
    const emailsList = usersList.map((user) => user.email);
    for (let Index in emailsList) {
      const emaill = emailsList[Index];
      if (emaill == mail) {
        return true;
      }
    }

    return false;
  };
  
  function passValid(password) {
    if (password.length >= 10) {
      if (/[a-zA-Z]/.test(password))
        //checks minimum one letter
        return true;
    }
    return false;
  }

  function PassConfirm(password, confPass) {
    if (password == confPass) return true;
    return false;
  }

  function emailValid(mail) {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        mail
      )
    ) {
      //check the template mail
      return false;
    }
    return true;
  }
};