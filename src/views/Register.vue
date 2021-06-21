<template>
<div ui-view class="ng-scope">
    <div class="auth-page ng-scope">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center ng-binding">Sign up</h1>
                    <p class="text-xs-center">
                        <router-link to="{name: 'login'}">Need an account?</router-link>
                    </p>
                    VALIDATIONS ERRORS
                    <form @submit.prevent="onSubmit" class="ng-valid ng-valid-email ng-dirty ng-valid-parse">

                        <fieldset class="form-group">
                            <input 
                            type="text" 
                            class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty" 
                            placeholder="Username"
                            />
                        </fieldset>

                        <fieldset class="form-group">
                            <input 
                            type="text" 
                            class="form-control form-control-lg ng-valid ng-valid-email ng-not-empty ng-dirty ng-touched" 
                            placeholder="Email"
                            />
                        </fieldset>

                        <fieldset class="form-group">
                            <input 
                            type="password" 
                            class="form-control form-control-lg ng-valid ng-not-empty ng-dirty ng-valid-parse ng-touched" 
                            placeholder="Password"
                            />
                        </fieldset>
                        <button 
                            class="btn btn-lg btn-primary pull-xs-right ng-binding" 
                            :disabled="isSubmitting"
                            >
                            Sign up
                            </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'McvRegister',
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting;
        }
    },
    methods: {
        onSubmit() {
            console.log('submitted form');
            this.$store.dispatch('register', {
                email: 'Ddsfses13fbwgh@sdsv.com', 
                username: 'dsfvaDdgwq34rtg', 
                password: '123216712'
                }).then(user => {
                    console.log('successfully register user, id: ', user)
                })
        }
    }
}
</script>

<style>

</style>