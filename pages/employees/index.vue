<template>
    <v-flex>
        <v-form>
            <v-container>
                <v-layout>
                    <v-flex xs12 md4>
                        <v-text-field
                            v-model="collection"
                            label="Enter Collection">
                        </v-text-field>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-text-field
                            v-model="document"
                            label="Enter Employee ID">
                        </v-text-field>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-btn @click="getEmployees">GET EMPLOYEES</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
        <Table :headers="headers" :names="names" :headerData="headerData"/>
    </v-flex>
</template>

<script>
import { db } from "~/plugins/firebase"
import Table from "~/components/Table"

export default {
    components: {
        Table
    },
    data : () => ({
        names: [],
        document: '',
        collection: '',
        headers: [],
        headerData: []
    }),
    methods: {
        getEmployees: function(){
            this.headers =[];
            var collectionName = this.collection;
            var documentName = parseInt(this.document);
            if(documentName){
                db.collection(collectionName).where('employeeId','==',documentName).get().then((response) =>{
                    this.names = response.docs.map(employee => employee.data());
                    var arr = Object.values(response.docs.map(employee => employee.data()));
                    var keyArr = Object.keys(arr[0]);
                    this.headerData = keyArr;
                    for(var i=0; i<keyArr.length; i++){
                        this.headers.push({
                            text: keyArr[i].replace(/([A-Z])/g, ' $1').trim(),
                            value: keyArr[i]
                        });
                    }
                }); 
            }else{
                db.collection(collectionName).get().then((response) =>{
                    this.names = response.docs.map(employee => employee.data());
                    var arr = Object.values(response.docs.map(employee => employee.data()));
                    var keyArr = Object.keys(arr[0]);
                    this.headerData = keyArr;
                    for(var i=0; i<keyArr.length; i++){
                        this.headers.push({
                            text: keyArr[i].replace(/([A-Z])/g, ' $1').trim(),
                            value: keyArr[i]
                        });
                    }
                });
            }
            
        }
    }
}
</script>

<style scoped>
.employee{
    height: 100px;
    width: 100px;
    background-color: yellowgreen;
}

</style>
