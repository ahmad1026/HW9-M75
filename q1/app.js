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
// const date1 = new Dates(1350, 6, 20);
// console.log((date1.toString("m/y/d")))
// console.log(date1.toString("d/m/y"));
// console.log(date1.compareDate('2005/6/26', '2005/6/25'));


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
  compairTime(time1, time2) {
    if (time1.hour > time2.hour) {
      return 1
    } else if (time1.hour === time2.hour) {
      if (time1.minute > time2.minute) {
        return 1
      } else if (time1.minute === time2.minute) {
        if (time1.second > time2.second) {
          return 1
        } else if (time1.second === time2.second) {
          return 0
        } else {
          return -1
        }
      } else {
        return -1
      }
    } else {
      return -1
    }
  }
}

// const time1 = new Time(5, 48, 41);
// const time2 = new Time(5, 48, 43);
// console.log(Time.compairTime(time1, time2));

class TimeStamp {

  constructor(year, month, day, hour, minute, second) {

    this.Dates = new Dates(year, month, day)
    this.Time = new Time(hour, minute, second)
  }

  toString(format) {
    let _format = format.split('');
    let result = '';
    for (let i = 0; i < _format.length; i++) {
      switch (_format[i]) {
        case '/':
          result += '/'
          break;
        case ':':
          result += ':'
          break;
        case ' ':
          result += ' '
          break;
        case 'y':
          result += `${this.Dates.year}`
          break;
        case 'm':
          result += `${this.Dates.month}`
          break;
        case 'd':
          result += `${this.Dates.day}`
          break;
        case 'H':
          result += `${this.Time.hour}`
          break;
        case 'i':
          result += `${this.Time.minute}`
          break;
      }

    }
    
    return result;

  }
}

// const timestamp = new TimeStamp(1352, 5, 25, 4, 25, 30);
// console.log(timestamp.toString("y/m/d H:i"));



class Event{

  constructor(subject , description , year, month, day, hour, minute, second) {
    this.subject = subject;
    this.description = description
    this.TimeStamp = new TimeStamp( year, month, day, hour, minute, second)
    
  }

}
const event1 =  new Event("salam", )



