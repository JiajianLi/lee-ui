const Ajv = require("ajv").default
const addFormats = require("ajv-formats")
const localize = require("ajv-i18n")
const ajv = new Ajv({allErrors: true})

require("ajv-errors")(ajv /*, {singleError: true} */)

addFormats(ajv);

ajv.addKeyword({
    keyword: 'test',
    // validate(schema, data) {
    //     console.log('validate:',schema, data);
    //     return false
    // },
    validate: function fun (schema, data) {
        console.log('validate:',schema, data);
        return false
    },
    // compile(sch, parentSchema) {
    //     // console.log(sch, parentSchema)
    //     return (data) => {
    //         console.log('compiledata:', data)
    //         return true
    //     }
    // },

    metaSchema: {
        type: 'boolean'
    }
})

ajv.addFormat('test', data => {
    // console.log(data, '----------------')
    // return data === 'hhhhh'
    return true
})

const schema = {
    type: "object",
    properties: {
        foo1: {type: "number"},
        foo: {type: "integer"},
        bar: {
            type: "string",
            // format: 'test',
            // test: true,
            // errorMessage: {
            //     type: '必须是字符串',
            //     minLength: '长度不能小于 10',
            // },
            minLength: 10,
        },
    },
    errorMessage: {
        properties: {
            bar: "能玩不这玩意",
        },
    },

    required: ["foo"],
    additionalProperties: false,

}



const data = {foo: 1, bar: 1, foo1: 12}

const validate = ajv.compile(schema);

const valid = validate(data)

// const valid = validate('1123')

if (!valid) {
    localize.zh(validate.errors)
    console.log(validate.errors)
}

console.log(111, 'finish', valid)