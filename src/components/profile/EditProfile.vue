<template>
    <div class="profile-card-body">
        <label for="fileInput" class="rounded-full self-center overflow-hidden flex items-center justify-center flex-col relative border-primary-background border-[4px]">
            <img class="" width="160px" height="160px" :src="userInput.image_path || imageTemp? imageTemp || `https://tenth.run.place:90/storage/${userInput.image_path}` : 'images/user.png'" alt="profileImage">
            <i class="fa-solid h-[8px] w-[8px] fa-camera absolute bottom-[5px] text-primary1"></i>
        </label>
        <input type="file" @change="renderImage" class="hidden" name="" id="fileInput">
        <BaseInput label="Username" placeholder="Enter your name" identity="username" :with-span="false" v-model="userInput.name">
            <p v-if="errors.name" v-for="error in errors.name" class="text-danger font-inter text-[12px]">
                {{ error }}
            </p>
        </BaseInput>
        <!-- <BaseInput label="Email" placeholder="Enter your email" identity="email" :with-span="false" v-model="userInput.email" /> -->
        <BaseInput type="number" label="Telp" placeholder="Enter your number" identity="phoneNumber" :with-span="false" v-model="userInput.telp">
            <p v-if="errors.telp" v-for="error in errors.telp" class="text-danger font-inter text-[12px]">
                {{ error }}
            </p>
        </BaseInput>
        <BaseInput label="Address" placeholder="Enter your address" identity="address" :with-span="false" v-model="userInput.address">
            <p v-if="errors.address" v-for="error in errors.address" class="text-danger font-inter text-[12px]">
                {{ error }}
            </p>
        </BaseInput>
    </div>
    <div class="profile-card-footer">
        <button @click="handleUpdate()" class="btn bg-primary text-white text-[20px] rounded-[10px] !px-[20px]">
            Update Profile
        </button>
    </div>
</template>

<script setup>
    import { computed, onMounted, reactive, ref } from 'vue';
    import BaseInput from '../ui/BaseInput.vue';
    import { useStore } from 'vuex';

    const store = useStore()

    const userData = computed(() => store.state.user.userData)
    const errors = computed(() => store.state.user.errors)
    const message = computed(() => store.state.user.message)
    const fileInput = ref(null)
    const imageTemp = ref()
    const userInput = reactive({
        name: '',
        email: '',
        telp: '',
        address: '',
        image_path: ''
    })

    const renderImage = (e) => {
      fileInput.value = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(fileInput.value);

      reader.addEventListener ("load", () => {
        imageTemp.value = reader.result;
      });
    };

    const handleUpdate = async () => {
        let isSuccess = {status: true}
        if(fileInput.value) {
            isSuccess = await store.dispatch('user/uploadProfileImage', fileInput.value)
            userInput.image_path = isSuccess.path
        }
        if(isSuccess.status) {
            const updateSuccess = await store.dispatch('user/updateUser', userInput)
            if(updateSuccess) {
                store.dispatch('ui/showNotif', {message: message.value})

            } else if(Object.keys(errors.value).length === 0) {
                store.dispatch('ui/showNotif', {message: message.value, isError: true})
            }
        } else {
            store.dispatch('ui/showNotif', {message: message.value, isError: true})
        }
    }

    onMounted(async() => {
        // console.log(userData.value)
        Object.assign(userInput, userData.value)

        // console.log(userInput)
    })
</script>

<style lang="scss" scoped>

</style>