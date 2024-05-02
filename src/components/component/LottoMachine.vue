<template>
  <v-container class="container">
    <v-title class="title">
      번호 추첨
    </v-title>
    <div class="rounded-rectangle">
      ?
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'QuestionBox'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면의 높이만큼 컨테이너를 확장합니다. */
}

.title {
  font-size: 36px;
  font-weight: bold;
}

.rounded-rectangle {
  width: 500px;
  height: 500px;
  border: 4px solid;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 300px;
  color: #FFFFFF;
  animation: colorChange 5s infinite;
}

@keyframes colorChange {
  0%, 100% {
      background-color: rgba(255, 0, 0, 0.2);
      border-color: red;
  }
  14.28571% {
      background-color: rgba(0, 255, 0, 0.2);
      border-color: green;
  }
  28.57143% {
      background-color: rgba(0, 0, 255, 0.2);
      border-color: blue;
  }
  42.85714% {
      background-color: rgba(255, 255, 0, 0.2);
      border-color: yellow;
  }
  57.14286% {
      background-color: rgba(0, 255, 255, 0.2);
      border-color: cyan;
  }
  71.42857% {
      background-color: rgba(255, 0, 255, 0.2);
      border-color: magenta;
  }
  85.71429% {
      background-color: rgba(255, 165, 0, 0.2);
      border-color: orange;
  }
}
</style>
