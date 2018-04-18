<template>
  <b-form>
    <ul>
      <li> <span class="clearfix">이름 :  {{user.name}}</span> </li>
      <li><span>가입가능연령 : </span> {{user.age}} </li>
    </ul>
    <div class="row">
      <div class="col-12 text-center">
        <b-button type="button" variant="warn" @click="goBack" >이전페이지</b-button>
        <b-button type="reset" variant="danger">초기화</b-button>
        <b-button type="submit" variant="primary">수정</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: '사용자',
          age: 20
        }
      }
    },
    methods: {
      goBack(e) {
        e.preventDefault();
        history.back();
      }
    }

  }
</script>
