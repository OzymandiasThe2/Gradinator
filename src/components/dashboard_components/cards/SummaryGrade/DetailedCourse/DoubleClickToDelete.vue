<template>
    <vs-button  color="danger" type="relief" @click.native="click" style="outline: none; "> {{text}}</vs-button>
</template>
//// cool
<script>
    import {submitGradebook} from "../../../../../api/api";

    export default {
        name: "DoubleClickToDelete",
        props:{
            data: Object,
            assessmentId: String,
            token: Array,

        },
        mounted() {
          this.mount();
        },
        data:()=>{
            return{
                counter: 0,
                text:"Delete"
            }
        },
        model: {
            prop: 'data',
            event: 'input'
        },

        methods:{
            mount: function(){
                console.log(this.data);
              if(isNaN(this.data)){
                  this.text="Deleted";
                  this.counter=3
              }
              else{
                  this.counter=0;
              }
            },
            handleInput (value) {
                this.$emit('input', value)
            },
            submitGrade: function(){
                submitGradebook(this.assessmentId,{"grade": null}, this.token).then(r=>{
                    if(r.error){
                        this.$vs.notify({title:'Error',text:r.error,color:'danger',position:'top-right'})
                    }
                    else{
                        this.$vs.notify({title:'Success',text:"Grade Deleted Successfully",color:'success',position:'top-right'})
                        return true;
                    }
                });
            },
            click:function () {
                if(this.counter===0){
                    this.text="Are you sure?";
                    this.counter++;
                }
                else if(this.counter===1){
                    this.text="Deleted";
                    this.data=NaN;
                    this.submitGrade()
                    this.handleInput(this.data)
                    this.counter++;
                }
            }

        }
    }
</script>

<style scoped>

</style>
