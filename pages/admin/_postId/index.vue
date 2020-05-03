<template>
  <div class="admin-post-page">
    <section class="update-form"></section>
    <AdminPostForm :post="loadedPost" />
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Bob',
        title: 'My awesome Post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink:
          'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
      }
    }
  }
}
</script>
