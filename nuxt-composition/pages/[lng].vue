<template>
  <div>
    <h1>{{ language.heading }}</h1>
    <p>{{ language.content }}</p>
    <div>
      {{ language.language }}: <b>{{ $route.params.lng }}</b>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import English from "/languages/english.json";
import Thai from "/languages/thai.json";
import Chinese from "/languages/chinese.json";
import Japanese from "/languages/japanese.json";

const language = ref(English);
const route = useRoute();

onMounted(() => {
  if (route.params.lng == "en") {
    language.value = English;
  }
  if (route.params.lng == "th") {
    language.value = Thai;
  }
  if (route.params.lng == "cn") {
    language.value = Chinese;
  }
  if (route.params.lng == "jp") {
    language.value = Japanese;
  }
});
</script>