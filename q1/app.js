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
}
const date = new Dates(1352, 4, 31);
console.log(date.toString("d/m/y"));
