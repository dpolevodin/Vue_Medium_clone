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
                        <button class="btn btn-lg btn-primary pull-xs-right ng-binding">Sign up</button>
                    </form>
                    <button @click="IncreaseCounter">Increase counter</button>
                    {{ count }}
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
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        onSubmit() {
            console.log('submitted form');
        },
        IncreaseCounter() {
            console.log('IncreaseCounter')
            this.$store.commit('increment')
        }
    }
}
</script>

<style>

</style>