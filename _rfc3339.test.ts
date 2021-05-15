import { isRFC3339 } from "./_rfc3339.ts";
import { assertEquals } from "./dev_deps.ts";

const testCases: [string, boolean][] = [
  // From the RFC
  ["1985-04-12T23:20:50.52Z", true],
  ["1990-12-31T23:59:60Z", true],
  ["1990-12-31T15:59:60-08:00", true],
  ["1937-01-01T12:00:27.87+00:20", true],

  // T and Z can be t or z
  ["1985-04-12t23:20:50.52z", true],

  // https://github.com/chronotope/chrono/blob/main/src/format/parse.rs
  ["2015-01-20T17:35:20-08:00", true], // normal case
  ["1944-06-06T04:04:00Z", true], // D-day
  ["2001-09-11T09:45:00-08:00", true],
  ["2015-01-20T17:35:20.001-08:00", true],
  ["2015-01-20T17:35:20.000031-08:00", true],
  ["2015-01-20T17:35:20.000000004-08:00", true],
  ["2015-01-20T17:35:20.000000000452-08:00", true], // too small
  ["2015-02-30T17:35:20-08:00", false], // bad day of month
  ["2015-01-20T25:35:20-08:00", false], // bad hour
  ["2015-01-20T17:65:20-08:00", false], // bad minute
  ["2015-01-20T17:35:90-08:00", false], // bad second

  // Ensure the regex is anchored
  ["x1985-04-12T23:20:50.52Zx", false],
  ["1985-04-12T23:20:50.52Zx", false],
];

Deno.test({
  name: "isRFC3339",
  fn() {
    for (const [input, result] of testCases) {
      assertEquals(isRFC3339(input), result);
    }
  },
});
