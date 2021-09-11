import { defineComponent, PropType } from 'vue'
import SchemaItem from './SchemaItems'
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
        const schema = props.schema || {}
        const type = schema?.type
        console.log('schema: ', schema)

        const handleChange = (v: any) => {
            props.onChange(v)
        }

        return () => {
            const { schema, value } = props
            return <SchemaItem schema={schema} value={value} onChange={handleChange} />
        }
    }
})