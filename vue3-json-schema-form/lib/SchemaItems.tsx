import { defineComponent, PropType } from "vue";


export default defineComponent({
    name: 'SchemaItem',
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
    setup(props) {
        return {}
    }
})