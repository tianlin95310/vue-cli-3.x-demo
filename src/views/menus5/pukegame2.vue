<template>
  <div class="puke-game2">
    <div v-for="puke in allPukes" :key="puke.id" :style="{
           backgroundImage: 'url(' + puke.src + ')',
           left: puke.left,
           bottom: puke.bottom,
           zIndex: puke.zIndex,
           opacity: puke.opacity,
           top: puke.top}" @click="onPukeClick(puke)" :class="['puke']">
    </div>
    <div class="button begin" @click="begin">发牌</div>
    <div class="button send-puke" @click="sendPuke">出牌</div>
    <div class="button get-dizhu" @click="dizhu">抢地主</div>
  </div>
</template>

<script>
  /*eslint-disable*/
  // 窗口大小
  const width = window.screen.width
  const height = window.screen.height
  const pukeWidth = 136
  const pukeHeight = 220
  let centerX = width / 2 - pukeWidth / 2

  let dividerCount = 5
  // 随机生成一组牌
  function makePoker() {
    var poker = []
    var table = {}
    var colors = ['s', 'h', 'c', 'd']

    while (poker.length !== 52) {
      var n = Math.ceil(Math.random() * 13) + 2
      var index = Math.floor(Math.random() * 4)
      var c = colors[index]
      var v = {
        color: c,
        number: n
      }
      if (!table[n + c]) {
        table[n + c] = true
        poker.push(v)
      }
    }

    let wc = {
      number: 16,
      color: 'c'
    }
    let indexc = Math.ceil(Math.random() * 52)
    poker.splice(index, 0, wc)

    let wd = {
      number: 16,
      color: 'd'
    }
    let indexd = Math.ceil(Math.random() * 52)
    poker.splice(index, 0, wd)

    return poker
  }

  function customCompareASC(propertyName) {
    return function(object1, object2) {
      var value1 = object1[propertyName]
      var value2 = object2[propertyName]

      if (value1 > value2) {
        return 1
      } else if (value1 < value2) {
        return -1
      } else {
        return 0
      }
    }
  }

  export default {
    data() {
      return {
        zIndex: '100',
        playA: [],
        playB: [],
        playC: [],
        another: [],
        whoTurn: 0,
        selectPuke: []
      }
    },
    computed: {
      dividerW() {
        return (width - pukeWidth * dividerCount) / (this.playA.length + 1)
      },
      allPukes() {
        let allPukes = []
        this.playA.forEach(item => {
          allPukes.push(item)
        })
        this.playB.forEach(item => {
          allPukes.push(item)
        })
        this.playC.forEach(item => {
          allPukes.push(item)
        })
        this.another.forEach(item => {
          allPukes.push(item)
        })
        return allPukes
      }
    },
    methods: {
      begin() {
        this.playA = []
        this.playB = []
        this.playC = []
        this.another = []
        setTimeout(() => {
          this.dividerPuke()
          this.animOneByOne()
        }, 500)
      },
      sendPuke() {
        if (this.another.length !== 0) {
          alert('请先抢地主！')
          return
        }

        this.selectPuke.forEach(item => {
          item.left = centerX + 'px'
          item.top = pukeHeight / 2 + 'px'
          item.zIndex = this.zIndex++
        })

        setTimeout(() => {

        })
      },
      dizhu() {
        if (this.another.length === 0) {
          alert('地主已经确定了！')
          return
        }
        let who = Math.ceil(Math.random() * 10)
        if (who !== 1 && who !== 2) {
          for (let i = 0; i < this.another.length; i++) {
            let item = this.another[i]
            item.left = (i + 17 + 1) * this.dividerW + pukeWidth * (dividerCount - 1) / 2 + 'px'
            item.top = height - 1.8 * pukeHeight + 'px'
            item.zIndex = this.zIndex++
          }
          setTimeout(() => {
            this.another.forEach(item => {
              this.playA.push(item)
            })
            this.another = []

            this.playA = this.playA.sort(customCompareASC('value'))
            for (let i = 0; i < this.playA.length; i++) {
              let item = this.playA[i]
              setTimeout(() => {
                item.left = (i + 1) * this.dividerW + pukeWidth * (dividerCount - 1) / 2 + 'px'
                item.zIndex = this.zIndex++
              }, i * 30)
            }
          }, 1000)
        } else if (who === 2) {
          for (let i = 0; i < this.another.length; i++) {
            let item = this.another[i]
            setTimeout(() => {
              item.left = width - 1.5 * pukeWidth + 'px'
              item.top = pukeHeight / 2 + 'px'
            }, i * 30)
          }
          setTimeout(() => {
            this.another.forEach(item => {
              this.playB.push(item)
            })
            this.another = []
          }, 1000)
        } else if (who === 1) {
          for (let i = 0; i < this.another.length; i++) {
            let item = this.another[i]
            setTimeout(() => {
              item.left = pukeWidth / 2 + 'px'
              item.top = pukeHeight / 2 + 'px'
            }, i * 30)
          }
          setTimeout(() => {
            this.another.forEach(item => {
              this.playC.push(item)
            })
            this.another = []
          }, 1000)
        }
      },
      onPukeClick(puke) {
        this.playA.forEach(item => {
          if (item.id === puke.id) {
            if (item.selected !== undefined) {
              item.selected = !item.selected
            } else {
              item.selected = true
            }
            if (item.selected) {
              this.selectPuke.push(item)
              item.top = height - 1.8 * pukeHeight - 50 + 'px'
            } else {
              item.top = height - 1.8 * pukeHeight + 'px'
            }
          }
        })
      },
      animOneByOne() {
        for (let i = 0; i < this.playA.length; i++) {
          let item = this.playA[i]
          setTimeout(() => {
            item.left = (i + 1) * this.dividerW + pukeWidth * (dividerCount - 1) / 2 + 'px'
            item.top = height - 1.8 * pukeHeight + 'px'
          }, i * 30)
        }
        this.playA = this.playA.sort(customCompareASC('value'))
        for (let i = 0; i < this.playA.length; i++) {
          let item = this.playA[i]
          setTimeout(() => {
            item.left = (i + 1) * this.dividerW + pukeWidth * (dividerCount - 1) / 2 + 'px'
            item.zIndex = this.zIndex++
          }, this.playA.length * 30 + 1000 + i * 30)
        }

        for (let i = 0; i < this.playB.length; i++) {
          let item = this.playB[i]
          setTimeout(() => {
            item.left = pukeWidth / 2 + 'px'
            item.top = pukeHeight / 2 + 'px'
          }, i * 30)
        }

        for (let i = 0; i < this.playC.length; i++) {
          let item = this.playC[i]
          setTimeout(() => {
            item.left = width - 1.5 * pukeWidth + 'px'
            item.top = pukeHeight / 2 + 'px'
          }, i * 30)
        }

        for (let i = 0; i < this.another.length; i++) {
          let item = this.another[i]
          setTimeout(() => {
            item.left = centerX + (i - 1) * pukeWidth + 'px'
            item.top = pukeHeight / 5 + 'px'
          }, i * 30)
        }
      },
      dividerPuke() {
        this.zIndex = 100
        var dict = {
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          10: 'T',
          11: 'J',
          12: 'Q',
          13: 'K',
          14: 'A',
          15: 2,
          16: 'W'
        }
        let pokers = makePoker()

        var exist = {}
        while (this.playA.length !== 17) {
          let n = Math.ceil(Math.random() * (pokers.length - 1))
          let poker = pokers[n]
          if (!exist[poker.number + poker.color]) {
            exist[poker.number + poker.color] = true
            pokers.splice(n, 1)
            let src = undefined
            try {
              src = require('@/assets/images/' + dict[poker.number] + poker.color + '.png')
            } catch (e) {
              console.log(e)
            }
            let puke = {
              left: centerX + 'px',
              top: 0 + 'px',
              src: src,
              id: poker.number + ',' + poker.color,
              zIndex: this.zIndex++,
              position: 1,
              value: poker.number
            }
            this.playA.push(puke)
          }
        }

        while (this.playB.length !== 17) {
          let n = Math.ceil(Math.random() * (pokers.length - 1))
          let poker = pokers[n]
          if (!exist[poker.number + poker.color]) {
            exist[poker.number + poker.color] = true
            pokers.splice(n, 1)
            let src = undefined
            try {
              src = require('@/assets/images/' + dict[poker.number] + poker.color + '.png')
            } catch (e) {
              console.log(e)
            }
            let puke = {
              left: centerX + 'px',
              top: 0 + 'px',
              src: src,
              id: poker.number + ',' + poker.color,
              zIndex: this.zIndex++,
              position: 2,
              value: poker.number
            }
            this.playB.push(puke)
          }
        }

        while (this.playC.length !== 17) {
          let n = Math.ceil(Math.random() * (pokers.length - 1))
          let poker = pokers[n]
          if (!exist[poker.number + poker.color]) {
            exist[poker.number + poker.color] = true
            pokers.splice(n, 1)
            let src = undefined
            try {
              src = require('@/assets/images/' + dict[poker.number] + poker.color + '.png')
            } catch (e) {
              console.log(e)
            }
            let puke = {
              left: centerX + 'px',
              top: 0 + 'px',
              src: src,
              id: poker.number + ',' + poker.color,
              zIndex: this.zIndex++,
              position: 3,
              value: poker.number
            }

            this.playC.push(puke)
          }
        }

        while (this.another.length !== 3) {
          let n = Math.ceil(Math.random() * (pokers.length - 1))
          let poker = pokers[n]
          if (!exist[poker.number + poker.color]) {
            exist[poker.number + poker.color] = true
            pokers.splice(n, 1)
            let src = undefined
            try {
              src = require('@/assets/images/' + dict[poker.number] + poker.color + '.png')
            } catch (e) {
              console.log(e)
            }
            let puke = {
              left: centerX + 'px',
              top: 0 + 'px',
              src: src,
              id: poker.number + ',' + poker.color,
              zIndex: this.zIndex++,
              position: 4,
              value: poker.number
            }
            this.another.push(puke)
          }
        }
        console.log(this.playA.length)
        console.log(this.playB.length)
        console.log(this.playC.length)
      }
    },
    created() {}
  }
</script>

<style scoped>
  .puke {
    background-size: 100%;
    background-repeat: round;
    position: absolute;
    width: 136px;
    height: 220px;
    border-radius: 10px;
    /*大于1的值会有回弹效果*/
    transition: 1s cubic-bezier(0.25, 0.1, 0.25, 0.9);
    transition-property: all;
  }

  .selected {
    box-shadow: 0px 0px 3px 3px gold;
    transform: translateY(-50px);
    transition: 0.4s !important;
  }

  .get-dizhu {
    top: 30px;
    right: 200px;
  }

  .send-puke {
    right: 30px;
    bottom: 220px;
  }

  .begin {
    top: 30px;
    left: 200px;
  }

  .button {
    background: orange;
    border-radius: 8px;
    box-shadow: 0 0 0px 0px white;
    transition: all 0.3s ease-in-out;
    line-height: 46px;
    z-index: 300;
    text-align: center;
    font-size: 25px;
    color: grey;
    position: absolute;
    width: 150px;
    height: 45px;
  }

  .button:hover {
    box-shadow: 0 0 10px 5px white;
  }

  .puke-game2 {
    height: 100vh;
  }
</style>
