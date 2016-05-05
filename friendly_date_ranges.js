function makeFriendlyDates(arr) {
  var date1 = arr[0].split('-');
  var date2 = arr[1].split('-');

  function mapMonth(month) {
    switch (month) {
      case '01':
      month = 'January';
      break;
      case '02':
      month = 'February';
      break;
      case '03':
        month = 'March';
        break;
      case '04':
        month = 'April';
        break;
      case '05':
        month = 'May';
        break;
      case '06':
        month = 'June';
        break;
      case '07':
        month = 'July';
        break;
      case '08':
        month = 'August';
        break;
      case '09':
        month = 'September';
        break;
      case '10':
        month = 'October';
        break;
      case '11':
        month = 'November';
        break;
      case '12':
        month = 'December';
        break;
      default:
    }
    return month;
  }

  function mapDay(day) {
    //strip leading zeroes
    if (day.charAt(0) === '0') {
      day = day.slice(1);
    }
    switch (day) {
      case '1':
      case '21':
      case '31':
        day += 'st';
        break;
      case '2':
      case '22':
        day += 'nd';
        break;
      case '3':
      case '23':
        day += 'rd';
        break;
      default:
        day += 'th';
    }
    return day;
  }

  function mapDates(item,index) {
    switch (index) {
      case 1:
        item = mapMonth(item);
        break;
      case 2:
        item = mapDay(item);
        break;
      default:
    }
    return item;
  }

  function finalizeDates(d1,d2) {

    var d1Year = d1[0];
    var d1Month = d1[1];
    var d1Day = d1[2];
    var d1Str = d1Month + " " + d1Day + ", " + d1Year;

    var d2Year = d2[0];
    var d2Month = d2[1];
    var d2Day = d2[2];
    var d2Str = d2Month + " " + d2Day + ", " + d2Year;

    return [d1Str, d2Str];
  }

  date1 = date1.map(mapDates);
  date2 = date2.map(mapDates);

  arr = finalizeDates(date1,date2);

  console.log(arr);
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
