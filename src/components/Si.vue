<template>
        <draggable>
            <div v-for="(item, index) in tasks" :key="index">
                    <p>{{item.title}}</p>
            </div>
        </draggable>
</template>


<script lang="ts">
import Todo from '@/Types/Todo'
import {defineComponent, ref, PropType} from 'vue'


export default defineComponent({
    setup(props) {
             const tasks = ref<Todo[]>([])
        tasks.value.push(props.task)
        console.log(tasks)

        return {
            tasks
        }
    },
    props:{
        task:{
            type:Object as PropType<Todo>,
            required:true,
            default:null
        }
    }
})
</script>


<style>

</style>