/* eslint-disable vue/no-mutating-props */
<template>
            <div>
                        <div  v-for="(name, index) in filter" :key="index"><!--start loop-manager-->

                  <div class="bodyInput managerTask">
                        <form class="addTodo" @submit.prevent="getDatos" :id="index == 0 ?'firstIndex':''">
                                <div>
                                    <span>
                                        <span :class="name.check ? 'circle':'circleNotActive'" @click="changeTask(index)" id="circle">
                                            <img src="../images/icon-check.svg" alt="icon-check" v-if="name.check">
                                        </span>
                                    </span>
                                    <input type="text" placeholder="Create a new todo..." :value="name.task" disabled :class="name.check === true ? 'line':''">
                                    <span class="inputCross"><img src="../images/icon-cross.svg" alt="icon-scrooss" @click="deleteTask(name.task)"></span>
                                </div>
                        </form>
                 </div>
             </div><!--end loop manager-->

                    <div class="options" v-if="tasks.length > 0">
                         <p>{{tasks.length}} items left</p>
                             <div class="btnOptions">
                                    <button @click="valueFilterBy('')" :id="filterBy === '' ? 'btnActive':''">All</button>
                                    <button @click="valueFilterBy(false) " :id="filterBy === false ? 'btnActive':''">Actived</button>
                                    <button @click="valueFilterBy(true)" :id="filterBy === true ? 'btnActive':''">Completed</button>
                             </div>
                        <div class="clear"><button @click="clear">Clear Completed</button></div>
                    </div>
            </div>

</template>

<script lang="ts">
import {defineComponent, ref, PropType} from 'vue'
import Todo from '../Types/Todo'


export default defineComponent({
     
    name:"ManagerTask",
    // props:['tasks','clear','valueFilterBy','deleteTask','changeTask','filter','filterBy'],
    props:{
        tasks:{
            type:Array as PropType<Todo[]>,
            required:false,
            default:null
        },
        clear:{
            type:Function,
            require:true,
        },
        valueFilterBy:{
            type:Function,
            required:true,
        },
        deleteTask:{
            type:Function,
            required:true,
        },
        changeTask:{
            type:Function,
            required:true,
        },
        filter:{
            type:Array as PropType<Todo[]>,
            required:false,
            default:null
        },
        filterBy:{
            type:[String,Boolean] as PropType<string|boolean>,
            required:true
        }
    },
    setup(props) {
        const taskss = ref(props.tasks)
      return {
          
          taskss,
      }
    },
    data() {
        return {
            data:this.filter
        }
    }

})
</script>
