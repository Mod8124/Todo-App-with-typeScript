<template>
    <div class="mainInput">

        <header>
                <h1>Todo</h1> 
                <div class="icon_active">
                         <img :src=" active ? require('../images/icon-sun.svg') : require('../images/icon-moon.svg')" alt="icon-change dark" @click="change">
                </div>
        </header>

       <div class="bodyInput">
             <form class="addTodo" @submit.prevent="getDatos">
                <div>
                    <span>
                        <span :class="check ? 'circle':'circleNotActive'" @click="changeCheck($event)" id="circle">
                            <img src="../images/icon-check.svg" alt="icon-check" v-if="check">
                        </span>
                    </span>
                    <input type="text" placeholder="Create a new todo..." v-model="work">
                </div>
        </form>

        <manager-task :tasks="tasks" :filter="filter" :clear="clear" :valueFilterBy="valueFilterBy" :deleteTask="deleteTask" :changeTask="changeTask" :filterBy="filterBy"/>
       </div>


    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Todo from '../Types/Todo'
import ManagerTask from './ManagerTask.vue'

export default defineComponent({
  components: { ManagerTask },
    name:'Input',
    props:['change','active'],
    setup() {
        const check = ref(false as boolean)
        const work = ref('')
        const tasks = ref<Todo[]>([])
        const filterBy = ref('' as string|boolean)
        
        const changeCheck = (e:HTMLFormElement) => {
            e.preventDefault()
            check.value = !check.value;
            console.log(check)
        }

        const getDatos = () => {
             const task = ref<Todo>({check:check.value,task:work.value})

           tasks.value.push(task.value)
           work.value = ''
           check.value = false
        }

        const changeTask = (a:number) => {
            tasks.value[a].check = !tasks.value[a].check
        }

        const deleteTask = (a:string) =>{
           tasks.value = tasks.value.filter((x:Todo)=> x.task !==a)
        }

        const clear = () =>{
            tasks.value = tasks.value.filter((x:Todo)=> x.check === false)
           
        }

             const valueFilterBy = (a:string|boolean) => {
            filterBy.value = a
        }

        const filter = computed(()=>{
            return tasks.value.filter((x:Todo)=> {
                if(filterBy.value === true || filterBy.value === false) {
                        return x.check == filterBy.value
                } else {
                    return x
                }
            })
        })


        return {
            tasks,
            getDatos,
            check,
            changeCheck,
            work,
            clear,
            filter,
            valueFilterBy,
            deleteTask,
            changeTask,
            filterBy
        }

       
    },
})
</script>
