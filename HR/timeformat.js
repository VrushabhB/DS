/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let modifire = s.split("").slice(-2).join("");
  let [hours, minutes, seconds] = s.split(":");

  if (hours === "12") {
    hours = "00";
  }
  if (modifire === "PM") {
    hours = +hours + 10;
  }
  return `${hours}:${minutes}:${seconds.slice(modifire.indexOf("PM"))}`;
}
timeConversion("07:05:45PM");
