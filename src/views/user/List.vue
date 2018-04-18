<template>
  <div>
    <table class="table table-responsive-sm">
      <colgroup>
        <col width="5%">
        <col width="*">
        <col width="20%">
        <col width="10%">
        <col width="10%">
        <col width="10%">
      </colgroup>
      <thead>
      <tr>
        <th class="text-center">#</th>
        <th class="text-center">이름</th>
        <th class="text-center">나이</th>
        <th class="text-center" colspan="3">관리</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="text-center">1</td>
        <td>사용자명</td>
        <td class="text-center">20</td>
        <td>
          <router-link class="btn btn-primary" to="/user/view/1">보기</router-link>
        </td>
        <td>
          <router-link class="btn btn-primary" to="/user/save/0">수정</router-link>
        </td>
        <td>
          <button class="btn btn-primary" @click="deleteUser" >삭제</button>
        </td>
      </tr>
      </tbody>
    </table>
    <ul class="pagination justify-content-center">
      <li class="page-item"><a class="page-link" href="#">Prev</a></li>
      <li class="page-item active"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">4</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      deleteUser() {
        if(confirm('삭제하시겠습니까?')) {

        }
      }
    }
  }
</script>
