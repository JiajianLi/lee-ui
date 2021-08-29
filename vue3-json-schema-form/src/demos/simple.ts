export default {
    name: 'Simple',
    schema: {
        description: 'A simple form example',
        type: 'object',
        required: ['firstName', 'lastName'],
        properties: {
            firstName: {
                type: 'string',
                default: 'Chuck'
            },
            lastName: {
                type: 'string'
            },
            telephone: {
                type: 'string',
                minLength: 10
            }
        }
    },
    uiSchema: {
        title: 'A registration form',
        properties: {
            firstName: {
                type: 'string',
                default: 'Chuck'
            },
            lastName: {
                type: 'string'
            },
            telephone: {
                type: 'string',
                minLength: 10
            }
        }
    },
    default: {
        firstName: 'Chuck',
        lastName: 'Norris',
        age: 75,
        bio: 'Roundhose kicking asses since 1940',
        password: 'nomeed'
    }
}