<template>
  <div>
    <h2>关于函数的一些操作，对象属性操作是"引用"传递的</h2>
    <div>
      <button class="button" @click="change">changeObject</button>
    </div>

    <div>
      <button class="button" @click="addList">addList</button>
      <button class="button" @click="delList">delList</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        person: {},
        people: []
      }
    },
    methods: {
      delList() {
        const index = Math.ceil(Math.random() * this.people.length) - 1
        console.log(index)
        this.del(this.people, index)
        console.log(JSON.stringify(this.people))
      },
      del(people, index) {
        people.splice(index, 1)
      },
      addList() {
        this.add(this.people)
        console.log(JSON.stringify(this.people))
      },
      add(people) {
        people.push({
          name: Math.ceil(Math.random() * 9999)
        })
      },
      change() {
        this.changePerson(this.person)
        console.log(this.person)
      },
      changePerson(person) {
        person.name = 'haha' + Math.random()
      }
    }
  }
</script>

<style scoped>
  div>div {
    margin-top: 10px;
  }
</style>
