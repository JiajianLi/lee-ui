import { defineComponent, PropType } from "vue";
import { FiledPropsDefine, Schema } from '../types'
interface myProps {
    value: any,
    onChange: (v: string) => void,
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
            console.log(e)
            props.onChange(e.target.value)
        }
        return () => <input type="text" value={props.value} onInput={handleChange} />
    }
})