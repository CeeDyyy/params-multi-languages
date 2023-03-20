<template>
  <div>
    <h1>{{ language.heading }}</h1>
    <p>{{ language.content }}</p>
    <div>
      {{ language.language }}: <b>{{ $route.params.lng }}</b>
    </div>
  </div>
</template>

<script>
import English from "/languages/english.json";
import Thai from "/languages/thai.json";
import Chinese from "/languages/chinese.json";
import Japanese from "/languages/japanese.json";

export default {
  data() {
    return {
      language: English,
    };
  },
  mounted() {
    if (this.$route.params.lng == "en") {
      this.language = English;
    }
    if (this.$route.params.lng == "th") {
      this.language = Thai;
    }
    if (this.$route.params.lng == "cn") {
      this.language = Chinese;
    }
    if (this.$route.params.lng == "jp") {
      this.language = Japanese;
    }
  }
};
</script>