# Chapter10 - Dates and Times

[Zurück zur Übersicht](/Modern-Javascript-Course/) | [Nächstes Kapitel](/Modern-Javascript-Course/chapter11-AsyncJavaScript/)

## Dates & Times in JavaScript

Dates and Times in JavaScript are a bit tricky. The `Date` object is a built-in object in JavaScript that stores the date and time. It provides a number of built-in methods for formatting and managing that data.

> **Note:** The `Date` object is based on a time value that is the number of milliseconds since 1 January, 1970 UTC.

```javascript
const now = new Date();

console.log(now); // 2020-01-01T10:30:15.000Z
console.log(typeof now); // object

// year, months, day, times
console.log("getFullYear:", now.getFullYear()); // 2020
console.log("getMonth:", now.getMonth()); // 0-based
console.log("getDate:", now.getDate()); // day of the month
```

## Timestamps & Comparisons

Timestamps are a way to represent a specific moment in time. They are represented as the number of milliseconds since 1 January, 1970 UTC.

```javascript
// timestamps
console.log("timestamp:", now.getTime()); // 1697010860419

// date strings
console.log(now.toDateString()); // Wed Oct 11 2023
console.log(now.toTimeString()); // 09:54:20 GMT+0200 (Mitteleuropäische Sommerzeit)

// compare dates
const before = new Date("June 2 2015 7:00:00");
const now = new Date();

const diff = now.getTime() - before.getTime();
console.log(diff);
```

## Date-fns Library

The [date-fns](https://date-fns.org/) library provides a number of useful methods for working with dates and times.

```javascript
import { formatDistance, subDays } from "date-fns";

const now = new Date();
const before = subDays(now, 5);

console.log(now); // 2023-10-11T10:30:15.000Z
console.log(before); // 2019-12-27T10:30:15.000Z
console.log(formatDistance(now, before));
```
