<template>
  <section class="overflow-hidden py-20 xl:py-24">
    <!-- set the width of the entire container -->
    <div class="px-6 xl:max-w-5xl xl:mx-auto">
      <h2 class="text-center mb-8">Designed for the future</h2>
      <!-- control the content of the container (grid) -->
      <div class="grid grid-cols-1 xl:grid-cols-2">
        <!-- item 1 -->
        <div class="order-last xl:order-first space-y-8 py-8 text-center xl:text-left">
          <div>
            <h3 class="">Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <!-- item 2 -->
        <!-- <v-if class="">

        </v-if> -->
        <!-- <img :src="" alt="" :class="" /> -->
        <img src="/images/illustration-editor-mobile.svg" alt="" class="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      secondSectionImageMobile: "/images/illustration-editor-mobile.svg",
      secondSectionImageDesktop: "/images/illustration-editor-desktop.svg",
    };
  },
};
</script>
