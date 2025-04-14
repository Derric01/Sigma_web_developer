// 🗓️ Create a specific date and time
const date = new Date(2025, 0, 1, 2, 3, 4, 5);
console.log("Full Date:", date);

/*
📘 new Date(year, month, day, hours, minutes, seconds, milliseconds)

🧩 Breakdown:
- 2025 → year
- 0    → month (January, since months are 0-based: 0 = Jan, 11 = Dec)
- 1    → day
- 2    → hours (2 AM)
- 3    → minutes
- 4    → seconds
- 5    → milliseconds

✅ Example Output:
Wed Jan 01 2025 02:03:04 GMT+0000 (Coordinated Universal Time)
*/

// 🕒 Get individual parts
console.log("Year:", date.getFullYear());
console.log("Month (0-based):", date.getMonth());
console.log("Date:", date.getDate());
console.log("Hours:", date.getHours());
console.log("Minutes:", date.getMinutes());
console.log("Seconds:", date.getSeconds());
console.log("Milliseconds:", date.getMilliseconds());

// 📆 Create date from string
const fromString = new Date("2025-12-25T10:30:00");
console.log("From string:", fromString);

// 🧪 Compare dates
const now = new Date();
if (date < now) {
  console.log("The date is in the past.");
} else {
  console.log("The date is in the future.");
}
