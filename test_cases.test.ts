interface TestCase {
  description: string;
  schema: unknown;
  validSchema: boolean;
  instance: unknown;
  errors: TestCaseError[];
}

interface TestCaseError {
  instancePath: string[];
  schemaPath: string[];
}

export const testCases: TestCase[] = [
  {
    description: "null schema",
    schema: null,
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "boolean schema",
    schema: true,
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "integer schema",
    schema: 1,
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "float schema",
    schema: 3.14,
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "string schema",
    schema: "foo",
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "array schema",
    schema: [],
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "illegal keyword",
    schema: {
      foo: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "nullable not boolean",
    schema: {
      nullable: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "definitions not object",
    schema: {
      definitions: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "definition not object",
    schema: {
      definitions: {
        foo: 123,
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "non-root definitions",
    schema: {
      definitions: {
        foo: {
          definitions: {
            x: {},
          },
        },
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "ref not string",
    schema: {
      ref: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "ref but no definitions",
    schema: {
      ref: "foo",
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "ref to non-existent definition",
    schema: {
      definitions: {},
      ref: "foo",
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "sub-schema ref to non-existent definition",
    schema: {
      definitions: {},
      elements: {
        ref: "foo",
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "type not string",
    schema: {
      type: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "type not valid string value",
    schema: {
      type: "foo",
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "enum not array",
    schema: {
      enum: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "enum empty array",
    schema: {
      enum: [],
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "enum not array of strings",
    schema: {
      enum: ["foo", 123, "baz"],
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "enum contains duplicates",
    schema: {
      enum: ["foo", "bar", "foo"],
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "elements not object",
    schema: {
      elements: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "elements not correct schema",
    schema: {
      elements: {
        definitions: {
          x: {},
        },
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "properties not object",
    schema: {
      properties: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "properties value not correct schema",
    schema: {
      properties: {
        foo: {
          definitions: {
            x: {},
          },
        },
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "optionalProperties not object",
    schema: {
      optionalProperties: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "optionalProperties value not correct schema",
    schema: {
      optionalProperties: {
        foo: {
          definitions: {
            x: {},
          },
        },
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "additionalProperties not boolean",
    schema: {
      properties: {},
      additionalProperties: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "properties shares keys with optionalProperties",
    schema: {
      properties: {
        foo: {},
        bar: {},
      },
      optionalProperties: {
        foo: {},
        baz: {},
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "values not object",
    schema: {
      values: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "values not correct schema",
    schema: {
      values: {
        definitions: {
          x: {},
        },
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "discriminator not string",
    schema: {
      discriminator: 123,
      mapping: {},
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "mapping not object",
    schema: {
      discriminator: "foo",
      mapping: 123,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "mapping value not correct schema",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {
          properties: {},
          definitions: {
            x: {},
          },
        },
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "mapping value not of properties form",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {},
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "mapping value has nullable set to true",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {
          nullable: true,
          properties: {
            bar: {},
          },
        },
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "discriminator shares keys with mapping properties",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {
          properties: {
            foo: {},
          },
        },
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "discriminator shares keys with mapping optionalProperties",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {
          optionalProperties: {
            foo: {},
          },
        },
      },
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - ref and type",
    schema: {
      definitions: {
        foo: {},
      },
      ref: "foo",
      type: "uint32",
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - type and enum",
    schema: {
      type: "uint32",
      enum: ["foo"],
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - enum and elements",
    schema: {
      enum: ["foo"],
      elements: {},
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - elements and properties",
    schema: {
      elements: {},
      properties: {},
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - elements and optionalProperties",
    schema: {
      elements: {},
      optionalProperties: {},
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - elements and additionalProperties",
    schema: {
      elements: {},
      additionalProperties: true,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - additionalProperties alone",
    schema: {
      additionalProperties: true,
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - properties and values",
    schema: {
      properties: {},
      values: {},
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - values and discriminator",
    schema: {
      values: {},
      discriminator: "foo",
      mapping: {},
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - discriminator alone",
    schema: {
      discriminator: "foo",
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "invalid form - mapping alone",
    schema: {
      mapping: {},
    },
    validSchema: false,
    instance: undefined,
    errors: [],
  },
  {
    description: "empty schema - null",
    schema: {},
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "empty schema - boolean",
    schema: {},
    validSchema: true,
    instance: true,
    errors: [],
  },
  {
    description: "empty schema - integer",
    schema: {},
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "empty schema - float",
    schema: {},
    validSchema: true,
    instance: 3.14,
    errors: [],
  },
  {
    description: "empty schema - string",
    schema: {},
    validSchema: true,
    instance: "foo",
    errors: [],
  },
  {
    description: "empty schema - array",
    schema: {},
    validSchema: true,
    instance: [],
    errors: [],
  },
  {
    description: "empty schema - object",
    schema: {},
    validSchema: true,
    instance: {},
    errors: [],
  },
  {
    description: "empty nullable schema - null",
    schema: {
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "empty nullable schema - object",
    schema: {
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [],
  },
  {
    description: "empty schema with metadata - null",
    schema: {
      metadata: {},
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "ref schema - ref to empty definition",
    schema: {
      definitions: {
        foo: {},
      },
      ref: "foo",
    },
    validSchema: true,
    instance: true,
    errors: [],
  },
  {
    description: "ref schema - nested ref",
    schema: {
      definitions: {
        foo: {
          ref: "bar",
        },
        bar: {},
      },
      ref: "foo",
    },
    validSchema: true,
    instance: true,
    errors: [],
  },
  {
    description: "ref schema - ref to type definition, ok",
    schema: {
      definitions: {
        foo: {
          type: "boolean",
        },
      },
      ref: "foo",
    },
    validSchema: true,
    instance: true,
    errors: [],
  },
  {
    description: "ref schema - ref to type definition, fail",
    schema: {
      definitions: {
        foo: {
          type: "boolean",
        },
      },
      ref: "foo",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "definitions",
          "foo",
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable ref schema - ref to type definition, ok",
    schema: {
      definitions: {
        foo: {
          type: "boolean",
        },
      },
      ref: "foo",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [],
  },
  {
    description:
      "nullable ref schema - ref to type definition, ok because null",
    schema: {
      definitions: {
        foo: {
          type: "boolean",
        },
      },
      ref: "foo",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable ref schema - nullable: false ignored",
    schema: {
      definitions: {
        foo: {
          type: "boolean",
          nullable: false,
        },
      },
      ref: "foo",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "ref schema - recursive schema, ok",
    schema: {
      definitions: {
        root: {
          elements: {
            ref: "root",
          },
        },
      },
      ref: "root",
    },
    validSchema: true,
    instance: [],
    errors: [],
  },
  {
    description: "ref schema - recursive schema, bad",
    schema: {
      definitions: {
        root: {
          elements: {
            ref: "root",
          },
        },
      },
      ref: "root",
    },
    validSchema: true,
    instance: [
      [],
      [
        [],
      ],
      [
        [
          [],
          [
            "a",
          ],
        ],
      ],
    ],
    errors: [
      {
        instancePath: [
          "2",
          "0",
          "1",
          "0",
        ],
        schemaPath: [
          "definitions",
          "root",
          "elements",
        ],
      },
    ],
  },
  {
    description: "boolean type schema - null",
    schema: {
      type: "boolean",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "boolean type schema - boolean",
    schema: {
      type: "boolean",
    },
    validSchema: true,
    instance: true,
    errors: [],
  },
  {
    description: "boolean type schema - integer",
    schema: {
      type: "boolean",
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "boolean type schema - float",
    schema: {
      type: "boolean",
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "boolean type schema - string",
    schema: {
      type: "boolean",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "boolean type schema - array",
    schema: {
      type: "boolean",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "boolean type schema - object",
    schema: {
      type: "boolean",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable boolean type schema - null",
    schema: {
      type: "boolean",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable boolean type schema - boolean",
    schema: {
      type: "boolean",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [],
  },
  {
    description: "nullable boolean type schema - integer",
    schema: {
      type: "boolean",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable boolean type schema - float",
    schema: {
      type: "boolean",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable boolean type schema - string",
    schema: {
      type: "boolean",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable boolean type schema - array",
    schema: {
      type: "boolean",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable boolean type schema - object",
    schema: {
      type: "boolean",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float32 type schema - null",
    schema: {
      type: "float32",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float32 type schema - boolean",
    schema: {
      type: "float32",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float32 type schema - integer",
    schema: {
      type: "float32",
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "float32 type schema - float",
    schema: {
      type: "float32",
    },
    validSchema: true,
    instance: 3.14,
    errors: [],
  },
  {
    description: "float32 type schema - string",
    schema: {
      type: "float32",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float32 type schema - array",
    schema: {
      type: "float32",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float32 type schema - object",
    schema: {
      type: "float32",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable float32 type schema - null",
    schema: {
      type: "float32",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable float32 type schema - boolean",
    schema: {
      type: "float32",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable float32 type schema - integer",
    schema: {
      type: "float32",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "nullable float32 type schema - float",
    schema: {
      type: "float32",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [],
  },
  {
    description: "nullable float32 type schema - string",
    schema: {
      type: "float32",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable float32 type schema - array",
    schema: {
      type: "float32",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable float32 type schema - object",
    schema: {
      type: "float32",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float64 type schema - null",
    schema: {
      type: "float64",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float64 type schema - boolean",
    schema: {
      type: "float64",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float64 type schema - integer",
    schema: {
      type: "float64",
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "float64 type schema - float",
    schema: {
      type: "float64",
    },
    validSchema: true,
    instance: 3.14,
    errors: [],
  },
  {
    description: "float64 type schema - string",
    schema: {
      type: "float64",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float64 type schema - array",
    schema: {
      type: "float64",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "float64 type schema - object",
    schema: {
      type: "float64",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable float64 type schema - null",
    schema: {
      type: "float64",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable float64 type schema - boolean",
    schema: {
      type: "float64",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable float64 type schema - integer",
    schema: {
      type: "float64",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "nullable float64 type schema - float",
    schema: {
      type: "float64",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [],
  },
  {
    description: "nullable float64 type schema - string",
    schema: {
      type: "float64",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable float64 type schema - array",
    schema: {
      type: "float64",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable float64 type schema - object",
    schema: {
      type: "float64",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int8 type schema - null",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int8 type schema - boolean",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int8 type schema - integer",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "int8 type schema - float",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int8 type schema - string",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int8 type schema - array",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int8 type schema - object",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int8 type schema - null",
    schema: {
      type: "int8",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable int8 type schema - boolean",
    schema: {
      type: "int8",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int8 type schema - integer",
    schema: {
      type: "int8",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "nullable int8 type schema - float",
    schema: {
      type: "int8",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int8 type schema - string",
    schema: {
      type: "int8",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int8 type schema - array",
    schema: {
      type: "int8",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int8 type schema - object",
    schema: {
      type: "int8",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int8 type schema - min value",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: -128,
    errors: [],
  },
  {
    description: "int8 type schema - max value",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: 127,
    errors: [],
  },
  {
    description: "int8 type schema - less than min",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: -129,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int8 type schema - more than max",
    schema: {
      type: "int8",
    },
    validSchema: true,
    instance: 128,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint8 type schema - null",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint8 type schema - boolean",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint8 type schema - integer",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "uint8 type schema - float",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint8 type schema - string",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint8 type schema - array",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint8 type schema - object",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint8 type schema - null",
    schema: {
      type: "uint8",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable uint8 type schema - boolean",
    schema: {
      type: "uint8",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint8 type schema - integer",
    schema: {
      type: "uint8",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "nullable uint8 type schema - float",
    schema: {
      type: "uint8",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint8 type schema - string",
    schema: {
      type: "uint8",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint8 type schema - array",
    schema: {
      type: "uint8",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint8 type schema - object",
    schema: {
      type: "uint8",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint8 type schema - min value",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: 0,
    errors: [],
  },
  {
    description: "uint8 type schema - max value",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: 255,
    errors: [],
  },
  {
    description: "uint8 type schema - less than min",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: -1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint8 type schema - more than max",
    schema: {
      type: "uint8",
    },
    validSchema: true,
    instance: 256,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int16 type schema - null",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int16 type schema - boolean",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int16 type schema - integer",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "int16 type schema - float",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int16 type schema - string",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int16 type schema - array",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int16 type schema - object",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int16 type schema - null",
    schema: {
      type: "int16",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable int16 type schema - boolean",
    schema: {
      type: "int16",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int16 type schema - integer",
    schema: {
      type: "int16",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "nullable int16 type schema - float",
    schema: {
      type: "int16",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int16 type schema - string",
    schema: {
      type: "int16",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int16 type schema - array",
    schema: {
      type: "int16",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int16 type schema - object",
    schema: {
      type: "int16",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int16 type schema - min value",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: -32768,
    errors: [],
  },
  {
    description: "int16 type schema - max value",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: 32767,
    errors: [],
  },
  {
    description: "int16 type schema - less than min",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: -32769,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int16 type schema - more than max",
    schema: {
      type: "int16",
    },
    validSchema: true,
    instance: 32768,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint16 type schema - null",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint16 type schema - boolean",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint16 type schema - integer",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "uint16 type schema - float",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint16 type schema - string",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint16 type schema - array",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint16 type schema - object",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint16 type schema - null",
    schema: {
      type: "uint16",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable uint16 type schema - boolean",
    schema: {
      type: "uint16",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint16 type schema - integer",
    schema: {
      type: "uint16",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "nullable uint16 type schema - float",
    schema: {
      type: "uint16",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint16 type schema - string",
    schema: {
      type: "uint16",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint16 type schema - array",
    schema: {
      type: "uint16",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint16 type schema - object",
    schema: {
      type: "uint16",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint16 type schema - min value",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: 0,
    errors: [],
  },
  {
    description: "uint16 type schema - max value",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: 65535,
    errors: [],
  },
  {
    description: "uint16 type schema - less than min",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: -1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint16 type schema - more than max",
    schema: {
      type: "uint16",
    },
    validSchema: true,
    instance: 65536,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int32 type schema - null",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int32 type schema - boolean",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int32 type schema - integer",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "int32 type schema - float",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int32 type schema - string",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int32 type schema - array",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int32 type schema - object",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int32 type schema - null",
    schema: {
      type: "int32",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable int32 type schema - boolean",
    schema: {
      type: "int32",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int32 type schema - integer",
    schema: {
      type: "int32",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "nullable int32 type schema - float",
    schema: {
      type: "int32",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int32 type schema - string",
    schema: {
      type: "int32",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int32 type schema - array",
    schema: {
      type: "int32",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable int32 type schema - object",
    schema: {
      type: "int32",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int32 type schema - min value",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: -2147483648,
    errors: [],
  },
  {
    description: "int32 type schema - max value",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: 2147483647,
    errors: [],
  },
  {
    description: "int32 type schema - less than min",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: -2147483649,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "int32 type schema - more than max",
    schema: {
      type: "int32",
    },
    validSchema: true,
    instance: 2147483648,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint32 type schema - null",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint32 type schema - boolean",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint32 type schema - integer",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "uint32 type schema - float",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint32 type schema - string",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint32 type schema - array",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint32 type schema - object",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint32 type schema - null",
    schema: {
      type: "uint32",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable uint32 type schema - boolean",
    schema: {
      type: "uint32",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint32 type schema - integer",
    schema: {
      type: "uint32",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [],
  },
  {
    description: "nullable uint32 type schema - float",
    schema: {
      type: "uint32",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint32 type schema - string",
    schema: {
      type: "uint32",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint32 type schema - array",
    schema: {
      type: "uint32",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable uint32 type schema - object",
    schema: {
      type: "uint32",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint32 type schema - min value",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: 0,
    errors: [],
  },
  {
    description: "uint32 type schema - max value",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: 4294967295,
    errors: [],
  },
  {
    description: "uint32 type schema - less than min",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: -1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "uint32 type schema - more than max",
    schema: {
      type: "uint32",
    },
    validSchema: true,
    instance: 4294967296,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "string type schema - null",
    schema: {
      type: "string",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "string type schema - boolean",
    schema: {
      type: "string",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "string type schema - integer",
    schema: {
      type: "string",
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "string type schema - float",
    schema: {
      type: "string",
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "string type schema - string",
    schema: {
      type: "string",
    },
    validSchema: true,
    instance: "foo",
    errors: [],
  },
  {
    description: "string type schema - array",
    schema: {
      type: "string",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "string type schema - object",
    schema: {
      type: "string",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable string type schema - null",
    schema: {
      type: "string",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable string type schema - boolean",
    schema: {
      type: "string",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable string type schema - integer",
    schema: {
      type: "string",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable string type schema - float",
    schema: {
      type: "string",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable string type schema - string",
    schema: {
      type: "string",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [],
  },
  {
    description: "nullable string type schema - array",
    schema: {
      type: "string",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable string type schema - object",
    schema: {
      type: "string",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "timestamp type schema - null",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "timestamp type schema - boolean",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "timestamp type schema - integer",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "timestamp type schema - float",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "timestamp type schema - string",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "timestamp type schema - array",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "timestamp type schema - object",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable timestamp type schema - null",
    schema: {
      type: "timestamp",
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable timestamp type schema - boolean",
    schema: {
      type: "timestamp",
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable timestamp type schema - integer",
    schema: {
      type: "timestamp",
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable timestamp type schema - float",
    schema: {
      type: "timestamp",
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable timestamp type schema - string",
    schema: {
      type: "timestamp",
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable timestamp type schema - array",
    schema: {
      type: "timestamp",
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "nullable timestamp type schema - object",
    schema: {
      type: "timestamp",
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "type",
        ],
      },
    ],
  },
  {
    description: "timestamp type schema - 1985-04-12T23:20:50.52Z",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: "1985-04-12T23:20:50.52Z",
    errors: [],
  },
  {
    description: "timestamp type schema - 1996-12-19T16:39:57-08:00",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: "1996-12-19T16:39:57-08:00",
    errors: [],
  },
  {
    description: "timestamp type schema - 1990-12-31T23:59:60Z",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: "1990-12-31T23:59:60Z",
    errors: [],
  },
  {
    description: "timestamp type schema - 1990-12-31T15:59:60-08:00",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: "1990-12-31T15:59:60-08:00",
    errors: [],
  },
  {
    description: "timestamp type schema - 1937-01-01T12:00:27.87+00:20",
    schema: {
      type: "timestamp",
    },
    validSchema: true,
    instance: "1937-01-01T12:00:27.87+00:20",
    errors: [],
  },
  {
    description: "enum schema - null",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "enum schema - boolean",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "enum schema - integer",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "enum schema - float",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "enum schema - string",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
    },
    validSchema: true,
    instance: "foo",
    errors: [],
  },
  {
    description: "enum schema - array",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "enum schema - object",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "nullable enum schema - null",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable enum schema - boolean",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "nullable enum schema - integer",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "nullable enum schema - float",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "nullable enum schema - string",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [],
  },
  {
    description: "nullable enum schema - array",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "nullable enum schema - object",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "enum schema - value not in enum",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
      nullable: true,
    },
    validSchema: true,
    instance: "quux",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "enum",
        ],
      },
    ],
  },
  {
    description: "enum schema - ok",
    schema: {
      enum: [
        "foo",
        "bar",
        "baz",
      ],
      nullable: true,
    },
    validSchema: true,
    instance: "bar",
    errors: [],
  },
  {
    description: "elements schema - null",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "elements schema - boolean",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "elements schema - float",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "elements schema - integer",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "elements schema - string",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "elements schema - object",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "nullable elements schema - null",
    schema: {
      elements: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable elements schema - boolean",
    schema: {
      elements: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "nullable elements schema - float",
    schema: {
      elements: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "nullable elements schema - integer",
    schema: {
      elements: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "nullable elements schema - string",
    schema: {
      elements: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "nullable elements schema - object",
    schema: {
      elements: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "elements",
        ],
      },
    ],
  },
  {
    description: "elements schema - empty array",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: [],
    errors: [],
  },
  {
    description: "elements schema - all values ok",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: [
      "foo",
      "bar",
      "baz",
    ],
    errors: [],
  },
  {
    description: "elements schema - some values bad",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: [
      "foo",
      null,
      null,
    ],
    errors: [
      {
        instancePath: [
          "1",
        ],
        schemaPath: [
          "elements",
          "type",
        ],
      },
      {
        instancePath: [
          "2",
        ],
        schemaPath: [
          "elements",
          "type",
        ],
      },
    ],
  },
  {
    description: "elements schema - all values bad",
    schema: {
      elements: {
        type: "string",
      },
    },
    validSchema: true,
    instance: [
      null,
      null,
      null,
    ],
    errors: [
      {
        instancePath: [
          "0",
        ],
        schemaPath: [
          "elements",
          "type",
        ],
      },
      {
        instancePath: [
          "1",
        ],
        schemaPath: [
          "elements",
          "type",
        ],
      },
      {
        instancePath: [
          "2",
        ],
        schemaPath: [
          "elements",
          "type",
        ],
      },
    ],
  },
  {
    description: "elements schema - nested elements, ok",
    schema: {
      elements: {
        elements: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: [
      [],
      [
        "foo",
      ],
      [
        "foo",
        "bar",
        "baz",
      ],
    ],
    errors: [],
  },
  {
    description: "elements schema - nested elements, bad",
    schema: {
      elements: {
        elements: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: [
      [
        null,
      ],
      [
        "foo",
      ],
      [
        "foo",
        null,
        "baz",
      ],
      null,
    ],
    errors: [
      {
        instancePath: [
          "0",
          "0",
        ],
        schemaPath: [
          "elements",
          "elements",
          "type",
        ],
      },
      {
        instancePath: [
          "2",
          "1",
        ],
        schemaPath: [
          "elements",
          "elements",
          "type",
        ],
      },
      {
        instancePath: [
          "3",
        ],
        schemaPath: [
          "elements",
          "elements",
        ],
      },
    ],
  },
  {
    description: "properties schema - null",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties schema - boolean",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties schema - float",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties schema - integer",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties schema - string",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties schema - array",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "nullable properties schema - null",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable properties schema - boolean",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "nullable properties schema - float",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "nullable properties schema - integer",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "nullable properties schema - string",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "nullable properties schema - array",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties and optionalProperties schema - null",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      optionalProperties: {
        bar: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties and optionalProperties schema - boolean",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      optionalProperties: {
        bar: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties and optionalProperties schema - float",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      optionalProperties: {
        bar: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties and optionalProperties schema - integer",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      optionalProperties: {
        bar: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties and optionalProperties schema - string",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      optionalProperties: {
        bar: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "properties and optionalProperties schema - array",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      optionalProperties: {
        bar: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
        ],
      },
    ],
  },
  {
    description: "optionalProperties schema - null",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "optionalProperties",
        ],
      },
    ],
  },
  {
    description: "optionalProperties schema - boolean",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "optionalProperties",
        ],
      },
    ],
  },
  {
    description: "optionalProperties schema - float",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "optionalProperties",
        ],
      },
    ],
  },
  {
    description: "optionalProperties schema - integer",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "optionalProperties",
        ],
      },
    ],
  },
  {
    description: "optionalProperties schema - string",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "optionalProperties",
        ],
      },
    ],
  },
  {
    description: "optionalProperties schema - array",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "optionalProperties",
        ],
      },
    ],
  },
  {
    description: "strict properties - ok",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      foo: "foo",
    },
    errors: [],
  },
  {
    description: "strict properties - bad wrong type",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      foo: 123,
    },
    errors: [
      {
        instancePath: [
          "foo",
        ],
        schemaPath: [
          "properties",
          "foo",
          "type",
        ],
      },
    ],
  },
  {
    description: "strict properties - bad missing property",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
          "foo",
        ],
      },
    ],
  },
  {
    description: "strict properties - bad additional property",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: "bar",
    },
    errors: [
      {
        instancePath: [
          "bar",
        ],
        schemaPath: [],
      },
    ],
  },
  {
    description:
      "strict properties - bad additional property with explicit additionalProperties: false",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: false,
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: "bar",
    },
    errors: [
      {
        instancePath: [
          "bar",
        ],
        schemaPath: [],
      },
    ],
  },
  {
    description: "non-strict properties - ok",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: true,
    },
    validSchema: true,
    instance: {
      foo: "foo",
    },
    errors: [],
  },
  {
    description: "non-strict properties - bad wrong type",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: true,
    },
    validSchema: true,
    instance: {
      foo: 123,
    },
    errors: [
      {
        instancePath: [
          "foo",
        ],
        schemaPath: [
          "properties",
          "foo",
          "type",
        ],
      },
    ],
  },
  {
    description: "non-strict properties - bad missing property",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: true,
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "properties",
          "foo",
        ],
      },
    ],
  },
  {
    description: "non-strict properties - ok additional property",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: true,
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: "bar",
    },
    errors: [],
  },
  {
    description: "strict optionalProperties - ok",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      foo: "foo",
    },
    errors: [],
  },
  {
    description: "strict optionalProperties - bad wrong type",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      foo: 123,
    },
    errors: [
      {
        instancePath: [
          "foo",
        ],
        schemaPath: [
          "optionalProperties",
          "foo",
          "type",
        ],
      },
    ],
  },
  {
    description: "strict optionalProperties - ok missing property",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {},
    errors: [],
  },
  {
    description: "strict optionalProperties - bad additional property",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: "bar",
    },
    errors: [
      {
        instancePath: [
          "bar",
        ],
        schemaPath: [],
      },
    ],
  },
  {
    description:
      "strict optionalProperties - bad additional property with explicit additionalProperties: false",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: false,
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: "bar",
    },
    errors: [
      {
        instancePath: [
          "bar",
        ],
        schemaPath: [],
      },
    ],
  },
  {
    description: "non-strict optionalProperties - ok",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: true,
    },
    validSchema: true,
    instance: {
      foo: "foo",
    },
    errors: [],
  },
  {
    description: "non-strict optionalProperties - bad wrong type",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: true,
    },
    validSchema: true,
    instance: {
      foo: 123,
    },
    errors: [
      {
        instancePath: [
          "foo",
        ],
        schemaPath: [
          "optionalProperties",
          "foo",
          "type",
        ],
      },
    ],
  },
  {
    description: "non-strict optionalProperties - ok missing property",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: true,
    },
    validSchema: true,
    instance: {},
    errors: [],
  },
  {
    description: "non-strict optionalProperties - ok additional property",
    schema: {
      optionalProperties: {
        foo: {
          type: "string",
        },
      },
      additionalProperties: true,
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: "bar",
    },
    errors: [],
  },
  {
    description: "strict mixed properties and optionalProperties - ok",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      optionalProperties: {
        bar: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: "bar",
    },
    errors: [],
  },
  {
    description: "strict mixed properties and optionalProperties - bad",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      optionalProperties: {
        bar: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      foo: 123,
      bar: 123,
    },
    errors: [
      {
        instancePath: [
          "foo",
        ],
        schemaPath: [
          "properties",
          "foo",
          "type",
        ],
      },
      {
        instancePath: [
          "bar",
        ],
        schemaPath: [
          "optionalProperties",
          "bar",
          "type",
        ],
      },
    ],
  },
  {
    description:
      "strict mixed properties and optionalProperties - bad additional property",
    schema: {
      properties: {
        foo: {
          type: "string",
        },
      },
      optionalProperties: {
        bar: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: "bar",
      baz: "baz",
    },
    errors: [
      {
        instancePath: [
          "baz",
        ],
        schemaPath: [],
      },
    ],
  },
  {
    description: "values schema - null",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "values schema - boolean",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "values schema - float",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "values schema - integer",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "values schema - string",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "values schema - array",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "nullable values schema - null",
    schema: {
      values: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable values schema - boolean",
    schema: {
      values: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "nullable values schema - float",
    schema: {
      values: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "nullable values schema - integer",
    schema: {
      values: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "nullable values schema - string",
    schema: {
      values: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "nullable values schema - array",
    schema: {
      values: {
        type: "string",
      },
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "values",
        ],
      },
    ],
  },
  {
    description: "values schema - empty object",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: {},
    errors: [],
  },
  {
    description: "values schema - all values ok",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: "bar",
      baz: "baz",
    },
    errors: [],
  },
  {
    description: "values schema - some values bad",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: {
      foo: "foo",
      bar: 123,
      baz: 123,
    },
    errors: [
      {
        instancePath: [
          "bar",
        ],
        schemaPath: [
          "values",
          "type",
        ],
      },
      {
        instancePath: [
          "baz",
        ],
        schemaPath: [
          "values",
          "type",
        ],
      },
    ],
  },
  {
    description: "values schema - all values bad",
    schema: {
      values: {
        type: "string",
      },
    },
    validSchema: true,
    instance: {
      foo: 123,
      bar: 123,
      baz: 123,
    },
    errors: [
      {
        instancePath: [
          "foo",
        ],
        schemaPath: [
          "values",
          "type",
        ],
      },
      {
        instancePath: [
          "bar",
        ],
        schemaPath: [
          "values",
          "type",
        ],
      },
      {
        instancePath: [
          "baz",
        ],
        schemaPath: [
          "values",
          "type",
        ],
      },
    ],
  },
  {
    description: "values schema - nested values, ok",
    schema: {
      values: {
        values: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      a0: {
        b0: "c",
      },
      a1: {},
      a2: {
        b0: "c",
      },
    },
    errors: [],
  },
  {
    description: "values schema - nested values, bad",
    schema: {
      values: {
        values: {
          type: "string",
        },
      },
    },
    validSchema: true,
    instance: {
      a0: {
        b0: null,
      },
      a1: {
        b0: "c",
      },
      a2: {
        b0: "c",
        b1: null,
      },
      a3: null,
    },
    errors: [
      {
        instancePath: [
          "a0",
          "b0",
        ],
        schemaPath: [
          "values",
          "values",
          "type",
        ],
      },
      {
        instancePath: [
          "a2",
          "b1",
        ],
        schemaPath: [
          "values",
          "values",
          "type",
        ],
      },
      {
        instancePath: [
          "a3",
        ],
        schemaPath: [
          "values",
          "values",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - null",
    schema: {
      discriminator: "foo",
      mapping: {},
    },
    validSchema: true,
    instance: null,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - boolean",
    schema: {
      discriminator: "foo",
      mapping: {},
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - float",
    schema: {
      discriminator: "foo",
      mapping: {},
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - integer",
    schema: {
      discriminator: "foo",
      mapping: {},
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - string",
    schema: {
      discriminator: "foo",
      mapping: {},
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - array",
    schema: {
      discriminator: "foo",
      mapping: {},
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "nullable discriminator schema - null",
    schema: {
      discriminator: "foo",
      mapping: {},
      nullable: true,
    },
    validSchema: true,
    instance: null,
    errors: [],
  },
  {
    description: "nullable discriminator schema - boolean",
    schema: {
      discriminator: "foo",
      mapping: {},
      nullable: true,
    },
    validSchema: true,
    instance: true,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "nullable discriminator schema - float",
    schema: {
      discriminator: "foo",
      mapping: {},
      nullable: true,
    },
    validSchema: true,
    instance: 3.14,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "nullable discriminator schema - integer",
    schema: {
      discriminator: "foo",
      mapping: {},
      nullable: true,
    },
    validSchema: true,
    instance: 1,
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "nullable discriminator schema - string",
    schema: {
      discriminator: "foo",
      mapping: {},
      nullable: true,
    },
    validSchema: true,
    instance: "foo",
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "nullable discriminator schema - array",
    schema: {
      discriminator: "foo",
      mapping: {},
      nullable: true,
    },
    validSchema: true,
    instance: [],
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - discriminator missing",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {
          properties: {
            a: {
              type: "string",
            },
          },
        },
        y: {
          properties: {
            a: {
              type: "float64",
            },
          },
        },
      },
    },
    validSchema: true,
    instance: {},
    errors: [
      {
        instancePath: [],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - discriminator not string",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {
          properties: {
            a: {
              type: "string",
            },
          },
        },
        y: {
          properties: {
            a: {
              type: "float64",
            },
          },
        },
      },
    },
    validSchema: true,
    instance: {
      foo: null,
    },
    errors: [
      {
        instancePath: [
          "foo",
        ],
        schemaPath: [
          "discriminator",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - discriminator not in mapping",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {
          properties: {
            a: {
              type: "string",
            },
          },
        },
        y: {
          properties: {
            a: {
              type: "float64",
            },
          },
        },
      },
    },
    validSchema: true,
    instance: {
      foo: "z",
    },
    errors: [
      {
        instancePath: [
          "foo",
        ],
        schemaPath: [
          "mapping",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - instance fails mapping schema",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {
          properties: {
            a: {
              type: "string",
            },
          },
        },
        y: {
          properties: {
            a: {
              type: "float64",
            },
          },
        },
      },
    },
    validSchema: true,
    instance: {
      foo: "y",
      a: "a",
    },
    errors: [
      {
        instancePath: [
          "a",
        ],
        schemaPath: [
          "mapping",
          "y",
          "properties",
          "a",
          "type",
        ],
      },
    ],
  },
  {
    description: "discriminator schema - ok",
    schema: {
      discriminator: "foo",
      mapping: {
        x: {
          properties: {
            a: {
              type: "string",
            },
          },
        },
        y: {
          properties: {
            a: {
              type: "float64",
            },
          },
        },
      },
    },
    validSchema: true,
    instance: {
      foo: "x",
      a: "a",
    },
    errors: [],
  },
];
