import { defineStore } from "pinia";
import { computed, reactive } from "vue";

type MessageState = {
    show: boolean,
    message: string,
    color: string,
    timer: number,
};

export const messageState = defineStore("message", () => {
    const state: MessageState = reactive({
        show: false,
        message: "",
        color: "",
        timer: 4000,
    });
    const show = computed(() => state.show);
    const message = computed(() => state.message);
    const color = computed(() => state.color);
    const timer = computed(() => state.timer);

    function showMessage(message: string, color = "primary", timer = 4000) {
        state.message = message
        state.color = color;
        state.show = true;
        state.timer = timer;
    }

    function hideMessage() {
        state.show = false;
    }

    return { state, show, message, color, timer, showMessage, hideMessage };
});
