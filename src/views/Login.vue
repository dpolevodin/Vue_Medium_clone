<template>
<div ui-view class="ng-scope">
    <div class="auth-page ng-scope">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center ng-binding">Sign in</h1>
                    <p class="text-xs-center">
                        <router-link to="Register">you don't have an account?</router-link>
                    </p>
                    <mcv-validation-errors v-if="validationErrors" :validation-errors="validationErrors"/>
                    <form @submit.prevent="onSubmit" class="ng-valid ng-valid-email ng-dirty ng-valid-parse">

                        <fieldset class="form-group">
                            <input 
                            type="text" 
                            class="form-control form-control-lg ng-valid ng-valid-email ng-not-empty ng-dirty ng-touched" 
                            placeholder="Email"
                            v-model="email"
                            />
                        </fieldset>

                        <fieldset class="form-group">
                            <input 
                            type="password" 
                            class="form-control form-control-lg ng-valid ng-not-empty ng-dirty ng-valid-parse ng-touched" 
                            placeholder="Password"
                            v-model="password"
                            />
                        </fieldset>
                        <button 
                            class="btn btn-lg btn-primary pull-xs-right ng-binding" 
                            :disabled="isSubmitting"
                            >
                            Sign in
                            </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors'
import {actionTypes} from '@/store/modules/login'

export default {
    name: 'McvLogin',
    components: {
        McvValidationErrors
    },
    data () {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        isSubmitting() {
            return this.$store.state.login.isSubmitting;
        },
        validationErrors() {
            return this.$store.state.login.validationErrors;
        }
    },
    methods: {
        onSubmit() {
            console.log('submitted form');
            this.$store.dispatch(actionTypes.login, {
                email: this.email,
                password: this.password,
                }).then(user => {
                    console.log('successfully login user, id: ', user);
                    this.$router.push({name: 'home'});
                })
        }
    }
}
</script>

<style>

</style>