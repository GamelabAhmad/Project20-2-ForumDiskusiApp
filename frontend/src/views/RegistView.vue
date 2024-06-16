<template>
    <div class="signup-container">
        <div class="circle circle-top"></div>
        <div class="circle circle-bottom"></div>
        <div class="signup-content-wrapper">
            <div class="signup-image-wrapper">
                <img src="../assets/img/image1.png" alt="logo" class="small-image">
                <p class="signup-image-text">
                    <strong style="color: #5F62AC">Empowering </strong><strong style="color: #251D59">TechOnWhy
                        <br>
                        <span style="color: #5F62AC">to connect, share, and learns</span>.</strong>
                </p>
                <img src="../assets/img/gambar1.png" alt="diskusi" class="large-image">
            </div>
            <div class="signup-form">
                <h4><b>Welcome to TechOnWhy</b></h4>
                <p class="text-sign-up">Sign Up Your Account</p>

                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" v-model="email" required placeholder="Enter Your Email Address">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" required placeholder="Enter Password">
                    </div>

                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="username" id="username" v-model="username" required
                            placeholder="Enter Your Username">
                    </div>

                    <div class="form-group button-container">
                        <button type="submit">SIGN UP</button>
                    </div>
                </form>

                <p>Already have an account? <router-link to="/login"><b>Sign in</b></router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },

    methods: {
        async handleSubmit() {
            try {
                const response = await axios.get('http://localhost:5173/users', {
                    auth: {
                        username: this.email,
                        password: this.password
                    }
                });

                if (response.status === 200) {
                    this.$router.push('/home');
                } else {
                    console.error('Sign up failed! Invalid email or password.');
                }
            } catch (error) {
                console.error('Error signing up:', error);
            }
        },
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    font-family: Arial, sans-serif;
}

.signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.signup-content-wrapper {
    display: flex;
    width: 100%;
    max-width: 1200px;
}

.signup-image-wrapper {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.signup-image-text {
    font-size: 26px;
    text-align: left;
    margin: 20px 0;
    margin-left: 50px;
}

.large-image {
    width: 80%;
    margin-top: 20px;
    margin-left: 50px;
}

.small-image {
    width: 35%;
    margin-bottom: 20px;
    margin-left: 20px;
}

.signup-form {
    flex: 1;
    padding: 40px;
    text-align: center;
    margin-top: 60px;
}

h4 {
    margin-bottom: 15px;
    color: #251D59;
    font-size: 24px;
}

.text-sign-up {
    margin-bottom: 40px;
    font-size: 18px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-group {
    width: 100%;
    max-width: 350px;
    text-align: left;
    margin-bottom: 20px;
    font-weight: 500;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border: 2px solid #251D59;
    border-radius: 12px;
}

.button-container {
    display: flex;
    justify-content: center;
}

button {
    background-image: linear-gradient(to right, #251D59, #35387E);
    color: #fff;
    padding: 10px 35px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 10px;
}

a {
    color: #251D59;
    text-decoration: none;
}

.circle {
    position: absolute;
    background: #5F62AC;
    border-radius: 50%;
    filter: blur(80px);
}

.circle-top {
    width: 100px;
    height: 100px;
    top: -30px;
    right: -30px;
}

.circle-bottom {
    width: 100px;
    height: 100px;
    bottom: -30px;
    right: -30px;
}

@media (max-width: 768px) {
    .signup-content-wrapper {
        flex-direction: column;
    }

    .large-image {
        width: 100%;
    }
}
</style>