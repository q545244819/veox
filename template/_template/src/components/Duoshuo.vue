<template>
  <div class="ds-thread" data-thread-key="{{ key }}" data-title="{{ title }}" data-url="{{ url }}"></div>
</template>

<script>
  export default {
    props: {
      key: String,
      title: String,
      url: String
    },
    ready() {
      try {
        DUOSHUO.EmbedThread(document.querySelector('.ds-thread'))
      } catch(e) {}
    }
  }
</script>