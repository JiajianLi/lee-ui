import { defineComponent, PropType } from "vue";
import { FiledPropsDefine, Schema } from '../types'
interface myProps {
    value: any,
    onChange: (v: any) => void,
    schema: Schema
}
export default defineComponent({
    name: 'StringField',
    // props: FiledPropsDefine,
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
        const handleChange = (e: any) => {
            const num = Number(e.target.value)
            if (Number.isNaN(num)) props.onChange(undefined)
            else props.onChange(num)
        }
        return () => <input type="number" value={props.value} onInput={handleChange} />
    }
})