<template lang="pug">
  Dialog(
    :visible="isOpen"
    :draggable="false"
    dismissable-mask
    modal
    header="Your order data"
    position="top"
    :style="{ width: '35rem' }"
    @update:visible="emit('close')"
    @hide="isSuccess = false"
  )
    .flex.items-center.justify-center.loading-window( v-if="isLoading" )
      i.pi.pi-spin.pi-spinner.m-4(
        style="color: rgb(14 165 233); font-size: 6rem"
      )
    .flex.flex-col.items-center.justify-center.loading-window( v-else-if="isSuccess" )
      h2.text-6xl.font-bold.text-green-500 Success!
      i.pi.pi-check-circle.my-8(
        style="color: rgb(34 197 94); font-size: 6rem"
      )
      .text-surface-500.text-center( class="dark:text-surface-400" )
        | This window will close automatically after 5 seconds
    div( v-else )
      .text-surface-500.block.mb-8( class="dark:text-surface-400" )
        | Send your information.
      Form.flex.flex-col.gap-4.w-full(
        v-slot="$form"
        :initialValues
        :resolver
        @submit="onFormSubmit"
      )
        IftaLabel
          InputText.w-full(
            name="firstName"
            id="firstName"
            type="text"
            fluid
          )
          label( for="firstName") First Name
          Message(
            v-if="$form.firstName?.invalid"
            severity="error"
            size="small"
            variant="simple"
          ) {{ $form.firstName.error?.message }}
        IftaLabel
          InputText.w-full(
            name="lastName"
            id="lastName"
            type="text"
            fluid
          )
          label( for="lastName") Last Name
          Message(
            v-if="$form.lastName?.invalid"
            severity="error"
            size="small"
            variant="simple"
          ) {{ $form.lastName.error?.message }}
        IftaLabel
          InputText.w-full(
            name="middleName"
            id="middleName"
            type="text"
            fluid
          )
          label( for="middleName") Middle Name
          Message(
            v-if="$form.middleName?.invalid"
            severity="error"
            size="small"
            variant="simple"
          ) {{ $form.middleName.error?.message }}
        IftaLabel
          InputText.w-full( name="email" id="email" type="text" fluid )
          label( for="email" ) Email
          div( v-if="$form.email?.invalid" )
            Message(
              v-for="(error, index) of $form.email.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
            ) {{ error.message }}
        IftaLabel
          InputMask.w-full(
            name="phone"
            id="phone"
            mask="+7(999)-999-99-99"
          )
          label( for="phone" ) Phone
          Message(
            v-if="$form.phone?.invalid"
            severity="error"
            size="small"
            variant="simple"
          ) {{ $form.phone.error?.message }}
        IftaLabel
          Password.w-full(
            name="password"
            id="password"
            type="password"
            :feedback="false"
            toggleMask
            fluid
          )
          label( for="password") Password
          div( v-if="$form.password?.invalid" )
            Message(
              v-for="(error, index) of $form.password.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
            ) {{ error.message }}
        Button(
          type="submit"
          severity="primary"
          :loading="isLoading"
          label="Submit"
        )
</template>

<script setup>
import { ref, inject } from "vue";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import { useToast } from "primevue/usetoast";
import Dialog from "primevue/dialog";
import IftaLabel from "primevue/iftaLabel";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import InputMask from "primevue/inputmask";
import Message from "primevue/message";
import Button from "primevue/button";

const toast = useToast();

const props = defineProps(["isOpen"]);
const emit = defineEmits(["close"]);

const initialValues = ref({
  firstName: "",
  lastName: "",
  middleName: "",
  email: "",
  phone: "",
  password: ""
});
const isLoading = ref(false);
const isSuccess = ref(false);
const axios = inject("axios"); // inject axios

const resolver = zodResolver(
  z.object({
    firstName: z.string().min(1, { message: "First Name is required." }),
    lastName: z.string().min(1, { message: "Last Name is required." }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email data" }),
    phone: z.string().min(1, { message: "Phone is required." }),
    password: z
      .string()
      .min(3, { message: "Minimum 3 characters." })
      .max(8, { message: "Maximum 8 characters." })
      .refine((value) => /[a-z]/.test(value), {
        message: "Must have a lowercase letter."
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: "Must have an uppercase letter."
      })
      .refine((value) => /d/.test(value), {
        message: "Must have a number."
      })
  })
);

function onFormSubmit(e) {
  if (e.valid) {
    isLoading.value = true;
    const { firstName, lastName, middleName, email, phone, password } =
      e.states;

    sendData({
      firstName: firstName.value,
      lastName: lastName.value,
      middleName: middleName.value,
      email: email.value,
      phone: phone.value,
      password: password.value
    });
  }
}

async function sendData(data) {
  try {
    const res = await axios.post("https://httpbin.org/anything", data);
    if (res.status === 200) {
      setTimeout(() => (isSuccess.value = true), 1000);
      setTimeout(() => emit("close"), 5000);

      toast.add({
        severity: "success",
        summary: "Form is submitted.",
        life: 3000
      });
    }
  } catch (error) {
    console.log(error);
    initialValues.value = data;

    toast.add({
      severity: "error",
      summary: "Someting wron. Set again.",
      life: 3000
    });
  } finally {
    setTimeout(() => (isLoading.value = false), 1000);
  }
}
</script>

<style scoped>
.loading-window {
  height: 35rem;
}
</style>
