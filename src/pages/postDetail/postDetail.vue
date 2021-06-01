<template>
  <div class="h-screen mx-4 pt-28 serif">
    <div class="h-full overflow-y-auto pb-8 bg-white p-4 rounded-lg">
      <div class="entry-content >>>   max-w-screen-sm" v-html="details">
      </div>
    </div>
  </div>
</template>

<script>
import { GetPostsById } from './postDetail'
import { useRouter } from 'vue-router'
import { watch, computed, ref } from 'vue'

export default {
  name: 'postDetail',
  setup () {
    const Router = useRouter()
    const id = computed(() => Router.currentRoute.value.params.id)
    let details = ref({})

    watch(id, ( currentV, preV ) => {
      GetPostsById(currentV).then(( res ) => {
        details.value = res
      })
    }, {
      immediate: true
    })
    return {
      details
    }
  }
}
</script>

<style scoped>
.serif {
  font-family: 'Noto Serif SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc', 'PT Serif', 'SongTi SC', 'MicroSoft Yahei', Georgia, serif
}
.serif .entry-content >>> h2:after {
  content: "\00B6";
  position: absolute;
  color: #ff6d6d;
  font-family: 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
  padding-left: 6px;
  font-size: 1.13em
}
.entry-content >>> code:not(.hljs) {
  background: #fefac7;
  color: #e67474;
  word-break: break-word;
  font-family: Source Code Pro, monospace;
  padding: 2px;
  text-shadow: none;
  border-radius: 5px;
}
.entry-content >>> h4:after {
  content: "▌";
  left: 0;
  position: absolute;
  color: #ff6d6d
}
.entry-content >>> ul {
  list-style: disc;
  border: 1px dashed #e4e4e4;
  padding: 15px 10px 15px 50px;
  color: #616161;
  margin-left: 0;
  border-radius: 10px
}

.entry-content >>> ol {
  list-style: decimal;
  border: 1px dashed #e4e4e4;
  padding: 15px 10px 15px 50px;
  color: #616161;
  margin-left: 0;
  border-radius: 10px
}

.entry-content >>> ol li,
.entry-content >>> ul li {
  padding: 8px 0
}

.entry-content >>> {
  position: relative
}
.entry-content >>> h3 {
  padding-bottom: 8px;
  border-bottom: 1px dashed #ddd;
  color: #737373
}

.entry-content >>> h3,
.entry-content >>> h4,
.entry-content >>> h5 {
  padding-left: 16px
}
.entry-content >>> h2:after {
  content: "\00B6";
  position: absolute;
  color: #ff6d6d;
  font-family: 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
  padding-left: 6px;
  font-size: 1.03em
}
.entry-content >>> h3:after {
  content: "#";
  left: 0;
  position: absolute;
  color: #ff6d6d
}

.entry-content >>> h4:after {
  content: "▌";
  left: 0;
  position: absolute;
  color: #ff6d6d
}

.entry-content >>> h5:after {
  content: "♯";
  left: 0;
  position: absolute;
  color: #ff6d6d
}

.entry-content >>> a {
  color: #e67474;
  position: relative
}

.entry-content >>> a:hover {
  color: orange;
  text-decoration: none
}

.entry-content >>> a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: orange;
  transform-origin: bottom right;
  transition: transform .25s ease-out
}

.entry-content >>> a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left
}
.entry-content >>> p {
  color: #797979
}

.entry-content >>> p {
  line-height: 30px
}

.entry-content >>> hr {
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
  border: 0;
  text-align: center;
  background: 0 0
}

.entry-content >>> hr:before {
  content: '...';
  display: inline-block;
  margin-left: .6em;
  color: rgba(0, 0, 0, .8);
  position: relative;
  top: -30px;
  font-size: 28px;
  letter-spacing: .6em
}

.entry-content >>> .post-password-form {
  text-align: center
}

.entry-content >>> a img.alignleft,
.entry-content >>> a img.alignright,
.entry-content >>> a img.aligncenter {
  cursor: -webkit-zoom-in
}

.entry-content >>> &:before,
.entry-content >>> &:after {
  content: "";
  display: table;
  table-layout: fixed
}
.entry-content >>> &:after {
  clear: both
}
.entry-content >>> .wp-smiley,
.comment-content >>> .wp-smiley {
  border: none;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0
}
.entry-content >>> p {
  font-size: 14px
}
</style>