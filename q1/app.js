class Dates {

  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  set year(value) {
    if (value > 1300 && value < 1400) {
      this._year = value;
    } else {
      this._year = "wrong in year";
    }
  }
  get year() {
    return this._year;
  }
  /****************** */
  set month(value) {

    if (value > 0 && value <= 12) {
      this._month = value;
    }
  }
  get month() {
    return this._month;
  }
  /***************** */
  set day(value) {
    let maxday = 30;
    if (this._month < 6) {
      maxday = 31
    }
    if (value > 0 && value <= maxday) {
      this._day = value;
    } else {
      this._day = "wrong in day"
    }
  }
  get day() {
    return this._day;
  }

  toString(format) {
    let _format = format.split("/");
    let result = '';
    for (let i = 0; i < format.length; i++) {
      switch (_format[i]) {
        case 'y':
          if (i === 2) {
            result += `${this._year}`
          } else {
            result += `${this._year}/`
          }
          break;
        case 'm':
          if (i === 2) {
            result += `${this._month}`
          } else {
            result += `${this._month}/`
          }
          break;
        case 'd':
          if (i === 2) {
            result += `${this._day}`
          } else {
            result += `${this._day}/`
          }
          break;
      }
    }
    return result
  }
  compareDate(date1, date2) {
    if (new Date(date1) > new Date(date2)) return 1;
    else if (new Date(date1) < new Date(date2)) return -1;
    else return 0
  }
}
const date = new Dates(1352, 4, 31);
// console.log(date.toString("d/m/y"));
console.log(date.compareDate('2005/6/26', '2005/6/25'));


class Time {
  constructor(hour, minute, second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  set hour(value) {
    if (value >= 0 && value <= 23) {
      this._hour = value;
    } else {
      this._hour = 'wrong hour'
    }

  }
  get hour() {
    return this._hour;
  }

  /************** */

  set minute(value) {
    if (value >= 0 && value <= 59) {
      this._minute = value;
    } else {
      this._minute = 'wrong minute'
    }
  }
  get minute() {
    return this._minute;
  }
  /************* */

  set second(value) {
    if (value >= 0 && value <= 59) {
      this._second = value;
    } else {
      this._second = 'wrong second'
    }
  }
  get second() {
    return this._second;
  }

  toString(format) {
    let _format = format.split(":");
    let result = '';
    for (let j = 0; j < format.length; j++) {
      switch (_format[j]) {
        case 'h':
          if (j === 2) {
            result += `${this._hour}`;
          } else {
            result += `${this._hour}:`
          }
          break;
        case 'i':
          if (j === 2) {
            result += `${this._minute}`
          } else {
            result += `${this._minute}:`
          }
          break;
        case 's':
          if (j === 2) {
            result += `${this._second}`
          } else {
            result += `${this._second}:`
          }
          break;
        case 's a':
          result += `${this._second} a.m.`
          break;
        case 's p':
          result += `${this._second} p.m.`
          break;
        case 'i a':
          result += `${this._minute} a.m.`
          break;
        case 'i p':
          result += `${this._minute} p.m.`
          break;
        case 'h a':
          result += `${this._hour} a.m.`
          break;
        case 'h p':
          result += `${this._hour} p.m.`
          break;
      }
    }
    return result
  }
}

const time1 = new Time(3, 48, 40);
console.log(time1.toString("s:h:i p"));
