<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="nameGroup" label="이름:" label-for="name" description="이름을 입력해주세요.">
        <b-form-input id="name" type="text" v-model="form.name" required placeholder="Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="ageGroup" label="연령:" label-for="age" description="연령을 입렵해주세요">
        <b-form-input id="age" type="text" v-model="form.age" required placeholder="Age">
        </b-form-input>
      </b-form-group>
      <div class="row">
        <div class="col-12 text-center">
          <b-button type="button" variant="warn" @click="goBack" >이전페이지</b-button>
          <b-button type="reset" variant="danger">초기화</b-button>
          <b-button type="submit" variant="primary">저장</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        }
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      },
      goBack(e) {
        e.preventDefault();
        history.back();
      }
    }
  }
</script>
