import {
  isSchema,
  isValidSchema,
  MaxDepthExceededError,
  validate,
} from "./mod.ts";
import { assert, assertEquals, assertThrows } from "./dev_deps.ts";
import { testCases } from "./test_cases.test.ts";

Deno.test({
  name: "Schema validity",
  fn() {
    for (const { description, schema, validSchema } of testCases) {
      assertEquals(
        isSchema(schema) && isValidSchema(schema),
        validSchema,
        `${
          validSchema ? "Valid" : "Invalid"
        } schema in test case with description "${description}" ${
          validSchema ? "did not validate" : "was incorrectly validated"
        }.`,
      );
    }
  },
});

Deno.test({
  name: "Validation supports limited depth",
  fn() {
    const schema = {
      definitions: {
        foo: {
          ref: "foo",
        },
      },
      ref: "foo",
    };
    const instance = null;
    assertThrows(
      () => validate(schema, instance, { maxDepth: 5, maxErrors: 0 }),
      MaxDepthExceededError,
    );
  },
});

Deno.test({
  name: "Validation supports limited errors",
  fn() {
    const schema = {
      elements: {
        type: "string" as const,
      },
    };
    const instance = [null, null, null, null, null];
    assertEquals(
      validate(schema, instance, { maxDepth: 0, maxErrors: 3 }).length,
      3,
    );
  },
});

Deno.test({
  name: "Validate test cases",
  fn() {
    const validTestCases = testCases.filter((testCase) => testCase.validSchema);
    for (const { description, schema, instance, errors } of validTestCases) {
      assert(isSchema(schema));
      assertEquals(
        validate(schema, instance),
        errors,
        `${
          errors.length ? "Invalid" : "Valid"
        } instance in test case with description "${description}" ${
          errors.length ? "incorrectly validated" : "did not validate"
        }.`,
      );
    }
  },
});
