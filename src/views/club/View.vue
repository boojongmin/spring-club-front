<template>
  <b-form>
    <ul>
      <li> <span class="clearfix">클럽명 :  {{club.name}}</span> </li>
      <li><span>가입가능연령 : </span> {{club.minAgeForJoin}} </li>
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
        club: {
          name: 'ABC 클럽',
          minAgeForJoin: 20
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
