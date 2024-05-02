<template>
    <v-title class="title">
      번호 추첨
    </v-title>
    <div class="rounded-rectangle">
      ?
    </div>
</template>

<script>
export default {

}
</script>

<style>
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
  color: #ffffff; /* 텍스트 색상을 흰색으로 설정 */
  animation: colorChange 5s infinite;
}

@keyframes colorChange {
  0%, 100% {
      background-color: rgba(255, 0, 0, 0.3);
      border-color: red;
  }
  14.28571% {
      background-color: rgba(0, 255, 0, 0.3);
      border-color: green;
  }
  28.57143% {
      background-color: rgba(0, 0, 255, 0.3);
      border-color: blue;
  }
  42.85714% {
      background-color: rgba(255, 255, 0, 0.3);
      border-color: yellow;
  }
  57.14286% {
      background-color: rgba(0, 255, 255, 0.3);
      border-color: cyan;
  }
  71.42857% {
      background-color: rgba(255, 0, 255, 0.3);
      border-color: magenta;
  }
  85.71429% {
      background-color: rgba(255, 165, 0, 0.3);
      border-color: orange;
  }
}
</style>