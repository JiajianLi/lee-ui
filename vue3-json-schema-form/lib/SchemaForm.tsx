import { defineComponent, PropType } from 'vue'

import { Schema, SchemaTypes } from './types'

export default defineComponent({
    props: {
        schema: {
            type: Object as PropType<Schema>,
            required: true
        },
        value: {
            required: true

        },
        onChange: {
            type: Function as PropType<(v: any) => void>,
            required: true
        }
    },
    name: 'SchemaForm',
    setup(props, { slots, emit, attrs }) {
        // eslint-disable-next-line
        const schema = props.schema
        const type = schema?.type
        console.log('schema: ', schema)

        return () => {
            switch (type) {
                case SchemaTypes.STRING: {
                    return <input type="text" />
                }
            }
            return <div>this is form</div>
        }
    }
})