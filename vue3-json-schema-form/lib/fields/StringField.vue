<template>
    <input type="text" />
</template>

<script lang="ts" setup="props">
import { FiledPropsDefine, Schema } from '../types'

export default {
    props: FiledPropsDefine
}

declare const props: {
    value: any,
    onChange: (v: string) => void,
    schema: Schema
}

export const handleChange = (e: any) => {
    console.log(e)
    props.onChange(e.target.value)
}
</script>