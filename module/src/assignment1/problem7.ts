enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if(day === 5 || day === 6) return "Weekend"
    return "Weekday"
  }

  console.log(getDayType(Day.Sunday))