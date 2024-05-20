<script>
export default {
  async setup() {
    const posts = await mock_fetch_data();
    //const posts = await res.json()
    return {
      posts
    }
  },
}

function mock_fetch_data() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                msg: "Hello World"
            })
        }, 5000);
    })
}
</script>

<template>
  <p>
    {{ posts.msg }}
  </p>
</template>