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
        <th class="text-center">클럽명</th>
        <th class="text-center">제한나이</th>
        <th class="text-center" colspan="3">관리</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="text-center">1</td>
        <td>Hello World 1</td>
        <td class="text-center">20</td>
        <td>
          <router-link class="btn btn-primary" to="/club/view/1">보기</router-link>
        </td>
        <td>
          <router-link class="btn btn-primary" to="/club/save/0">수정</router-link>
        </td>
        <td>
          <button class="btn btn-primary" @click="deleteClub" >삭제</button>
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
      deleteClub() {
        // 클럽삭제시 user가 자동으로 탈퇴되게 서버로직 추가
        if(confirm('삭제하시겠습니까?')) {

        }
      }
    }
  }
</script>
