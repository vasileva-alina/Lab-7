//Задание 1 
const bankClient = {
    Имя: "Степан",
    Фамилия: "Павлов",
    НомерСчета: "1234567890",
    Баланс: 15000,
    Статус: "VIP"
  };
  const clinicWorker = {
    Имя: "Ирина",
    Фамилия: "Ковалева",
    Специальность: "Врач",
    Отделение: "Терапия",
    IDРаботника: "CW12345",
    Смена: "дневная"
  };
  const citizen = {
    ФИО: "Горбунов Алексей Егорович",
    ДатаРождения: "01.01.1980",
    НомерПаспорта: "4567890123",
    Адрес: "г. Москва, ул. Ленина, д. 1",
    Регистрация: "постоянная регистрация"
  };
  function displayObjectProperties(obj, containerId) {
    const container = document.getElementById(containerId);
    for (const property in obj) {
      container.innerHTML += `<p><b>${property}:</b> ${obj[property]}</p>`;
    }
  }
  displayObjectProperties(bankClient, "bankClient");
  displayObjectProperties(clinicWorker, "clinicWorker");
  displayObjectProperties(citizen, "citizen");

  //Задание 2
  function checkNumber() {
    const number = parseInt(document.getElementById("numberInput").value);
    const resultElement = document.getElementById("result");
  
    switch (number) {
      case 1:
        resultElement.textContent = 'Вы ввели число 1';
        break;
      case 2:
        resultElement.textContent = 'Вы ввели число 2';
        break;
      case 3:
        resultElement.textContent = 'Вы ввели число 3';
        break;
      case 4:
        resultElement.textContent = 'Вы ввели число 4';
        break;
      case 5:
        resultElement.textContent = 'Вы ввели число 5';
        break;
      case 6:
        resultElement.textContent = 'Вы ввели число 6';
        break;
      case 7:
        resultElement.textContent = 'Вы ввели число 7';
        break;
      case 8:
      case 9:
        resultElement.textContent = 'Вы ввели число 8, а может и 9';
        break;
      default:
        resultElement.textContent = 'Введите число от 1 до 9';
    }
  }

  //Задание 3 
  function checkQuarter() {
    const min = parseInt(document.getElementById("minInput").value);
    const quarterResult = document.getElementById("quarterResult");
  
    if (isNaN(min) || min < 0 || min > 59) {
      quarterResult.textContent = "Введите число от 0 до 59";
      return;
    }
  
    let quarter;
    switch (true) {
      case (min >= 0 && min <= 14):
        quarter = "Первая четверть часа";
        break;
      case (min >= 15 && min <= 29):
        quarter = "Вторая четверть часа";
        break;
      case (min >= 30 && min <= 44):
        quarter = "Третья четверть часа";
        break;
      case (min >= 45 && min <= 59):
        quarter = "Четвертая четверть часа";
        break;
    }
    quarterResult.textContent = quarter;
  }

  //Задание 4
  function checkString() {
    const str = document.getElementById("strInput").value;
    const phone = document.getElementById("phoneInput").value;
    const stringResult = document.getElementById("stringResult");
  
    if (!str) {
      stringResult.textContent = "Введите строку";
      return;
    }
  
    const firstDigit = parseInt(str.charAt(0));
  
    let resultMessage;
    switch (true) {
      case (firstDigit === 1 || firstDigit === 2 || firstDigit === 3):
        resultMessage = 'Первая цифра 1, 2 или 3';
        break;
      default:
        resultMessage = 'Первая цифра не 1, 2 или 3';
    }
  
    if (phone && str.includes(phone)) {
      resultMessage += '<br>Номер телефона найден в строке.';
    } 
  
    stringResult.innerHTML = resultMessage;
  }