<template>
  <li v-for="(item, i) in social_links" :key="i">
    <a :href="item.link" :target="item.target">
      <i :class="item.icon"></i>
    </a>
  </li>
</template>

<script>
export default {
  data() {
    return {
      social_links: [
        {
          link: 'https://github.com/yellow90249',
          target: '_blank',
          icon: 'fab fa-github',
          name: 'Github',
        },
      ],
    };
  },
};
</script>
