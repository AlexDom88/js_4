// task_1

/*  Реалізуйте функцію calcRectangleArea(width, height),
    яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу.
    Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
    Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.*/

    function calcRectangleArea(width, height) {
        let rectangleArea = width*height;
        if (isNaN(width) || isNaN(height)) {
            throw new Error('Oops! Enter the correct value!');
        } else if (width < 1 || height < 1) {
            throw new Error('Oops! It can`t be a value!');
        }
        console.log(rectangleArea);
        return rectangleArea;
    }
    try {
        console.log(calcRectangleArea(prompt('Enter the width of the rectangle'), prompt('Enter the height of the rectangle')));
    } catch (e) {
        console.log(e.stack);
    }
    
    //task_2
    
    /* Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли:
    - юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”),
    - нечислове значення
    - вік юзера менше 14 років.
        В іншому разі юзер отримує доступ до перегляду фільму.
        В блокові catch передбачити виведення назви і опису помилки.*/
    
        function checkAge(age = prompt("Enter your age, please")) {
          try {
              if (age === '') {
                  throw new Error('The field is empty! Please enter your age')
              } else if (isNaN(+age)) {
                  throw new Error('You entered a non-numeric value! Please enter a number')
              } else if (+age < 14) {
                  throw new Error('You are under 14, you need to grow up a little more')
              }
              alert('Movie accessed')
          } catch (error) {
              alert(error);
          }
      }
      checkAge()
    
      //tack_3
    
      /* Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
        Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
        Функція повертає назву місяця відповідно до введеного номера місяця.
        У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
        Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.*/
    
        class MonthException {
          constructor(message) {
              this.name = "MonthException";
              this.message = message;
          }
      }
      
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let month = prompt("Enter the desirable number from 1 to 12");
      
      function showMonthName(month) {
          try {
              if (month < 1 || month > 12) {
                  throw new Error ("Incorrect month number");
              } else if (isNaN(month)) {
                  throw new Error ("Invalid value. Entered data is not a number");
              }
          } catch (exception) {
                  console.log(exception.name + ": " + exception.message)
              }
          return monthNames[month - 1];
      }
      console.log(showMonthName(month));
    
      //task_4
    
      /* Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id.
    Також функція викидає помилку у разі якщо введено від’ємне id.
        Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
        перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації
        виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні
        елементи ids.
        Приклад роботи програми:
        showUsers([7, -12, 44, 22]);
    Error: ID must not be negative: -12
        [ {id: 7}, {id: 44}, {id: 22} ]*/
       
        function showUser(id) {
              if (id < 0) throw new Error("ID must not be negative: ");
              return {id: id}
          }
          function showUsers(ids) {
              let users = [];
              for (let i = 0; i < ids.length; i++) {
                  try {
                  users.push(showUser(ids[i]))
                  } catch (err) {
                      console.log(err + ids[i])
                  }
              }
              return console.log(users);
          }
          showUsers([7, -12, 44, 22]);