export function dateConv(CurrentDate) {
    let date = new Date(CurrentDate);
    let year = date.getFullYear();
    let m = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = m[date.getMonth()];
    let dt = date.getDate();
    if (dt < 10) {
      dt = "0" + dt;
    }

    return `${dt}-${month}-${year}`;


  }