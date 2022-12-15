const day = prompt("Enter a day:");

switch (day) {
  case "monday":
    console.log("InClass");
    break;
  case "tuesday":
    console.log("InClass");
    break;
  case "wednesday":
    console.log("InClass");
    break;
  case "thursday":
    console.log("InClass");
    break;

  case "friday":
    console.log("Teamwork");
    break;
  case "saturday":
    console.log("InClass + Teamwork");
    break;
  case "sunday":
    console.log("Self-Study");
    break;

  default:
    console.log("Yanlış gün girildi!!!");
    break;
}
