<script lang="ts">
    let backgroundColor: string = "#282c34";

    let shown = false;

    export const show = () => {
        shown = true;
    }

    export const hide = () => {
        shown = false;
    }
</script>

{#if shown}
<div class="modal-wrapper" style="--background-color: {backgroundColor}">
    <div class="modal">
        <span class="close" on:click={() => hide()}>X</span>
        <slot/>
    </div>
</div>
{/if}

<style lang="scss">
    $border-radius: 5px;
    @keyframes blur-in {
        from {
            backdrop-filter: blur(0px);
        }
        to {
            backdrop-filter: blur(3px);
        }
    }

    @keyframes fade-in {
        from {
            filter: opacity(0);
        }
        to {
            filter: opacity(1);
        }
    }

    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .1);
        backdrop-filter: blur(3px);
        display: flex;
        animation: blur-in 500ms ease forwards;
    }

    .modal {
        width: 70%;
        margin: auto auto;
        color: white;
        background-color: var(--background-color);
        box-sizing: border-box;
        padding: 1rem;
        animation: fade-in 500ms ease forwards;
        border-radius: $border-radius;
        box-shadow: 0 0 10px rgba(0, 0, 0, .8);
    }

    .close {
        float: right;
        cursor: pointer;
    }
</style>