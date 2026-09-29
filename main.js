const users = [
  { id: 1, name: 'elvin', age: 22, salary: 1200 },
  { id: 2, name: 'aynur', age: 17, salary: 850 },
  { id: 3, name: 'orxan', age: 25, salary: 1600 },
  { id: 4, name: 'leyla', age: 16, salary: 600 },
  { id: 5, name: 'kamran', age: 30, salary: 2500 },
  { id: 6, name: 'nigar', age: 19, salary: 1100 },
  { id: 7, name: 'rəşad', age: 15, salary: 500 },
  { id: 8, name: 'günel', age: 21, salary: 1350 },
  { id: 9, name: 'emin', age: 18, salary: 950 },
  { id: 10, name: 'fatimə', age: 24, salary: 1800 },
]

const adults = filter.users((user) => user.age > 18)
console.log('Yaşı 18-dən böyük olanlar:', adults)

const totalSalary = users.reduce((sum, user) => sum + user.salary, 0)
console.log('Butun maaslarin cemi:', totalSalary)

const formattedUsers = users.map((user) => ({
  ...user,
  name: user.name.toUpperCase(),
}))

console.log('Adları böyük hərflə formatlanmış istifadəçilər:', formattedUsers)
