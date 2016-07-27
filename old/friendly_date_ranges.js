function makeFriendlyDates(arr) {
  arr = arr.map(constructDate);

  function constructDate(date) {
    var currentDate = new Date();
    dateArr = date.split('-');

    var year = dateArr[0];
    var month = parseInt(dateArr[1]) - 1;
    var day = parseInt(dateArr[2]);
    var hours = currentDate.getTimezoneOffset() / 60; //To account for UTC offset

    date = new Date(Date.UTC(year, month, day, hours));

    return date;
  }

  function mapMonth(month) {
    switch (month) {
      case 0:
      month = 'January';
      break;
      case 1:
      month = 'February';
      break;
      case 2:
        month = 'March';
        break;
      case 3:
        month = 'April';
        break;
      case 4:
        month = 'May';
        break;
      case 5:
        month = 'June';
        break;
      case 6:
        month = 'July';
        break;
      case 7:
        month = 'August';
        break;
      case 8:
        month = 'September';
        break;
      case 9:
        month = 'October';
        break;
      case 10:
        month = 'November';
        break;
      case 11:
        month = 'December';
        break;
      default:
    }
    return month;
  }

  function mapDay(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        day = day.toString() + 'st';
        break;
      case 2:
      case 22:
        day = day.toString() + 'nd';
        break;
      case 3:
      case 23:
        day = day.toString() + 'rd';
        break;
      default:
        day = day.toString() + 'th';
    }
    return day;
  }

  function mapDates(arr) {
    var date1 = arr[0];
    var date1NextYear = new Date(date1);
    date1NextYear.setFullYear(date1.getFullYear() + 1);
    // console.log(date1);
    // console.log(date1NextYear);
    var date1Str = "";
    var date1YearStr = "";
    var date1MonthStr = mapMonth(date1.getMonth()) + " ";
    var date1DayStr = mapDay(date1.getDate());

    var date2 = arr[1];
    var date2Str = "";
    var date2YearStr = "";
    var date2MonthStr = "";
    var date2DayStr = "";

    var currentDate = new Date();
    var nextYear = new Date();
    nextYear.setFullYear(currentDate.getFullYear() + 1);

    if (date1.getFullYear() > currentDate.getFullYear() || date2 > date1NextYear) {
      date1YearStr = ", " + date1.getFullYear().toString();
    }
    if (date2.getMonth() > date1.getMonth() || date2.getFullYear() > date1.getFullYear()) {
      date2MonthStr = mapMonth(date2.getMonth()) + " ";
    }
    if (date2.getDate() !== date1.getDate() || date2.getMonth() !== date1.getMonth() || date2.getFullYear() !== date1.getFullYear()) {
      date2DayStr = mapDay(date2.getDate());
    }
    if (date2 >= date1NextYear) {
      date2YearStr = ", " + date2.getFullYear().toString();
    }

    date1Str = date1MonthStr + date1DayStr + date1YearStr;
    date2Str = date2MonthStr + date2DayStr + date2YearStr;
    if (date2Str === "") {
      return [date1Str];
    } else {
      return [date1Str, date2Str];
    }
  }

  arr = mapDates(arr);

  // console.log(arr);
  // console.log();

  return arr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);

/*
Friendly Date Ranges
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.split()
String.substr()
parseInt()

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
*/
